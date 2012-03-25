Smalltalk current createPackage: 'GitHub' properties: #{}!
Object subclass: #User
	instanceVariableNames: 'raw fullName login imageUrl userId bio email profileUrl'
	category: 'GitHub'!

!User methodsFor: 'accessors'!

login
	^ login.
! !

!User methodsFor: 'initializers'!

withData: aDict
	" Seed the User object with data acquired from the API"
	login := aDict at: 'login'.
! !

Object subclass: #APIBase
	instanceVariableNames: 'token authenticated'
	category: 'GitHub'!

!APIBase methodsFor: 'not yet classified'!

baseUrl
	"Return the GitHub API url base"
	^ 'https://api.github.com'.
!

setToken: anAccessToken
	"Set the OAuth token we can use"
	token := anAccessToken.
	authenticated := true.
!

initialize
	authenticated := false.
	token := nil.
!

apiUrlFor: apiString
	"Return the combined URL with an access token if we have one"
	| url |
	url := '', (self baseUrl), apiString.
	authenticated ifTrue: [ url := '', url, '?access_token=', token ].
	^ url.
! !

Object subclass: #Comment
	instanceVariableNames: 'raw login body created_at'
	category: 'GitHub'!

!Comment methodsFor: 'accessors'!

body
	^ body.
!

login
	^ login.
! !

!Comment methodsFor: 'initializers'!

withData: aDict
	raw := aDict.
	body := aDict at: 'body'.
	login := (aDict at: 'user') at: 'login'.
! !

APIBase subclass: #Issue
	instanceVariableNames: 'raw title body issueId number project projectOwner issueStatus comments fullProjectName projectName labels url'
	category: 'GitHub'!

!Issue methodsFor: 'accessors'!

number
	^ number.
!

projectName
	^ projectName.
!

project
	^ project.
!

projectOwner
	^ projectOwner.
!

issueId
	^ issueId.
!

comments
	^ comments.
!

labels
	^ labels.
!

title
	^ title.
!

url
	^ url.
!

body
	^ body.
! !

!Issue methodsFor: 'actions'!

loadComments: aCallback
	"Starting loading the comments for this Issue, we're really only going to fetch one page"
	"GET /repos/:user/:repo/issues/:number/comments "

	| url |
	url := self apiUrlFor: ('/repos/', projectName, '/issues/', number, '/comments').
	jQuery ajax: url options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :results |
				aCallback value: (results data collect: [ :data | Comment new withData: data ]).
			].
			'error' -> [ console log: 'error' ]
	}.
! !

!Issue methodsFor: 'initializers'!

withData: aDict
	"Seed the Issue object based on aDict, which should
	 be the individual elements of the `GET /issues` API call"
	| urlParts |

	raw := aDict.
	issueId := aDict at: 'id'.
	number := aDict at: 'number'.
	title := aDict at: 'title'.
	body := aDict at: 'body'.
	comments := aDict at: 'comments'.
	labels := aDict at: 'labels'.
	url := aDict at: 'html_url'.

	urlParts := <aDict['html_url'].split('/')>.
	projectOwner := urlParts at: 4.
	project := urlParts at: 5.
	projectName := (urlParts at: 4), '/', (urlParts at: 5).
! !

APIBase subclass: #Users
	instanceVariableNames: ''
	category: 'GitHub'!

!Users methodsFor: 'not yet classified'!

fetchCurrent: andCallback
	"Fetch info about the current authenticated user"
	authenticated ifFalse: [ console log: 'Cannot load user information unless we have an access token'. ^ false ].

	jQuery ajax: (self apiUrlFor: '/user') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result |
				andCallback value: (result data) ]}.
	^ true.
! !

APIBase subclass: #Issues
	instanceVariableNames: ''
	category: 'GitHub'!

!Issues methodsFor: 'not yet classified'!

issues: aPageCallback loadAll: shouldLoadAll
	"Call aPageCallback with every page of issues loaded from GitHub"
	authenticated ifFalse: [ console log: 'Cannot load issues unless we have an access token'. ^ false ].

	jQuery ajax: (self apiUrlFor: '/issues') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result |
				result data do: [ :item |
					| issue |
					issue := Issue new withData: item; setToken: token.
					aPageCallback value: issue.
				]
			]
	}.
	^ true.
!

recentlyClosed: aPageCallback loadAll: shouldLoadAll
	"Call aPageCallback with pages of issues that have been closed in the last week "
	authenticated ifFalse: [ console log: 'Cannot load issues unless we have an access token'. ^ false ].

	jQuery ajax: ((self apiUrlFor: '/issues'), '&state=closed&per_page=10') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result |
				result data do: [ :item |
					| issue |
					issue := Issue new withData: item; setToken: token.
					aPageCallback value: issue.
				]
			]
	}.
	^ true.
! !

