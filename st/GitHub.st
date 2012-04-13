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

!APIBase class methodsFor: 'not yet classified'!

baseUrl
	"Return the GitHub API url base"
	^ 'https://api.github.com'.
!

fetchAllFromUrl: aUrlString withEachDo: aBlock finally: aFinalBlock
	" Fetch the GitHub data from aUrlString and call aBlock with the results "
	jQuery ajax: aUrlString options: #{
		'dataType' -> 'jsonp'.
		'success' -> [ :result |
			| links foundNext |
			" This special-case handling for the updated_at member will allow us to generally sort
			   the result set by updated date, which we will need to do often"
			result data do: [ :item |
				item at: 'updated_at' put: (Date fromString: (item at: 'updated_at')).
				aBlock value: item ].
	
			links := result meta at: 'Link'.
			foundNext := false.
			links ifNotNil: [
				links do: [ :link |
					((link at: 2) at: 'rel') = 'next'
						ifTrue: [
							foundNext := true.
							self fetchAllFromUrl: (link at: 1) withEachDo: aBlock finally: aFinalBlock.
			]]].
			foundNext ifFalse: [ aFinalBlock value. ].
		].
		'error' -> [ console log: ('Error calling #fetchAllFromUrl with the URL: ', aUrlString) ]
	}.
!

fetchAllFromUrl: aUrlString withEachDo: aBlock
	self fetchAllFromUrl: aUrlString withEachDo: aBlock finally: [].
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
	instanceVariableNames: 'raw title body issueId number project projectOwner issueStatus comments fullProjectName projectName labels url pullRequest'
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
	^ body ifNil: [ body := '' ].
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
	pullRequest := (aDict at: 'pull_request') at: 'html_url'.

	urlParts := <aDict['html_url'].split('/')>.
	projectOwner := urlParts at: 4.
	project := urlParts at: 5.
	projectName := (urlParts at: 4), '/', (urlParts at: 5).
!

pullRequest
	"Return the URL to the pull request in question "
	^ pullRequest.
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

!Issues class methodsFor: 'not yet classified'!

fetchIssuesFor: aProjectName withEachDo: aBlock finally: aFinalBlock
	"Fetch all the issues for the project name (e.g. 'rtyler/Hubboard') and invoke aBlock
	 for every issue. aFinalBlock will be invoked after all issues have been downloaded"
	self fetchAllFromUrl: ((self baseUrl), '/repos/', aProjectName, '/issues') withEachDo: aBlock finally: aFinalBlock.
!

fetchIssuesFor: aProjectName withEachDo: aBlock
	self fetchIssuesFor: aProjectName withEachDo: aBlock finally: [].
! !

APIBase subclass: #Repo
	instanceVariableNames: 'token authenticated'
	category: 'GitHub'!

!Repo class methodsFor: 'api-calls'!

collaboratorsFor: fullRepoName with: aBlock
	"A fullRepoName should be in the format of 'rtyler/Hubboard' (for example)"
	jQuery ajax: ((self baseUrl), '/repos/', fullRepoName, '/collaborators') options: #{
			'dataType' -> 'jsonp'.
			'success' -> [ :result | aBlock value: (result data) ].
			'error' -> [ console log: 'Error calling #collaboratorsFor' ]
	}.
	^ true.
!

fetchReposFor: aUser withEachDo: aBlock finally: aFinalBlock
	self fetchAllFromUrl: ((self baseUrl), '/users/', aUser, '/repos') withEachDo: aBlock finally: aFinalBlock.
!

fetchReposFor: aUser withEachDo: aBlock
	self fetchReposFor: aUser withEachDo: aBlock finally: [].
!

fetchReposForToken: aToken withEachDo: aBlock finally: aFinalBlock
	self fetchAllFromUrl: ((self baseUrl), '/user/repos?access_token=', aToken) withEachDo: aBlock finally: aFinalBlock.
! !

APIBase subclass: #PullRequest
	instanceVariableNames: 'title number raw url createdAt updatedAt mergeable'
	category: 'GitHub'!

!PullRequest methodsFor: 'accessors'!

title
	^ title.
!

number
	^ number.
!

raw
	^ raw.
!

url
	^ url.
!

createdAt
	^ createdAt.
!

updatedAt
	^ updatedAt.
! !

!PullRequest methodsFor: 'initializers'!

initialize
	super initialize.
	title := nil.
!

fromJSON: jsonString
	| data |
	data := (jQuery parseJSON: jsonString).
	^ self withData: data.
!

withData: data
	title := data at: 'title'.
	url := data at: 'url'.
	createdAt := Date fromString: (data at: 'created_at').
	updatedAt := Date fromString: (data at: 'updated_at').
	number := data at: 'number'.
	mergeable := data at: 'mergeable'.
	raw := data.
! !

!PullRequest class methodsFor: 'not yet classified'!

fetchFor: aFullProjectName withEachDo: aBlock finally: aFinalBlock
	" aFullProjectName should take the form of ':user/:repo', i.e. 'rtyler/git-of-despair'"
	self fetchAllFromUrl: ((self baseUrl), '/repos/', aFullProjectName, '/pulls')
		withEachDo: [ :item | aBlock value: (self new withData: item) ]
		finally: aFinalBlock.
!

fetchFor: aFullProjectName withEachDo: aBlock
	self fetchFor: aFullProjectName withEachDo: aBlock finally: [].
! !

