Smalltalk current createPackage: 'GitHub-Tests' properties: #{}!
TestCase subclass: #CommentTests
	instanceVariableNames: 'jsonString'
	category: 'GitHub-Tests'!

!CommentTests methodsFor: 'scaffolding'!

setUp
	jsonString := '  {
    "url": "https://api.github.com/repos/octocat/Hello-World/issues/comments/1",
    "body": "Me too",
    "user": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat"
    },
    "created_at": "2011-04-14T16:00:49Z",
    "updated_at": "2011-04-14T16:00:49Z"
  }'.
! !

!CommentTests methodsFor: 'tests'!

testLoadData
	" Verify we can properly generate a single Comment object from legit JSON "
	| c |
	c := Comment new withData: (jQuery parseJSON: jsonString); yourself.

	self assert: 'Me too' equals: (c body).
	self assert: 'octocat' equals: (c login).
! !

TestCase subclass: #IssuesTests
	instanceVariableNames: 'object jsonString'
	category: 'GitHub-Tests'!

!IssuesTests methodsFor: 'scaffolding'!

setUp
	object := Issues new.
	jsonString := '{
    "url": "https://api.github.com/repos/octocat/Hello-World/issues/1",
    "html_url": "https://github.com/octocat/Hello-World/issues/1",
    "number": 1347,
    "state": "open",
    "title": "Found a bug",
    "body": "Im having a problem with this.",
    "user": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat"
    },
    "labels": [
      {
        "url": "https://api.github.com/repos/octocat/Hello-World/labels/bug",
        "name": "bug",
        "color": "f29513"
      }
    ],
    "assignee": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat"
    },
    "milestone": {
      "url": "https://api.github.com/repos/octocat/Hello-World/milestones/1",
      "number": 1,
      "state": "open",
      "title": "v1.0",
      "description": "",
      "creator": {
        "login": "octocat",
        "id": 1,
        "avatar_url": "https://github.com/images/error/octocat_happy.gif",
        "gravatar_id": "somehexcode",
        "url": "https://api.github.com/users/octocat"
      },
      "open_issues": 4,
      "closed_issues": 8,
      "created_at": "2011-04-10T20:09:31Z",
      "due_on": null
    },
    "comments": 0,
    "pull_request": {
      "html_url": "https://github.com/octocat/Hello-World/issues/1",
      "diff_url": "https://github.com/octocat/Hello-World/issues/1.diff",
      "patch_url": "https://github.com/octocat/Hello-World/issues/1.patch"
    },
    "closed_at": null,
    "created_at": "2011-04-22T13:33:48Z",
    "updated_at": "2011-04-22T13:33:48Z"
  }'
! !

!IssuesTests methodsFor: 'testcases'!

testApiUrlWithNoToken
	| result |
	result := object apiUrlFor: '/issues'.
	self assert: 'https://api.github.com/issues' equals: result.
!

testApiUrlWithAToken
	| result |
	object setToken: 'deadbeef'.
	result := object apiUrlFor: '/issues'.
	self assert: 'https://api.github.com/issues?access_token=deadbeef' equals: result.
!

testLoadFromJSON
	"Verify we can use #withData to create a proper Issue object"
	| issue data |
	data := (jQuery parseJSON: jsonString).
	issue := Issue new withData: data.

	self assert: 1347 equals: (issue number).
	self assert: 'octocat/Hello-World' equals: (issue projectName).
	self assert: 'octocat' equals: (issue projectOwner).
	self assert: 'Hello-World' equals: (issue project).
	self assert: 1 equals: (issue labels size).
	self assert: 'Found a bug' equals: (issue title).
	self assert: 'https://github.com/octocat/Hello-World/issues/1' equals: (issue url).
! !

TestCase subclass: #UserTests
	instanceVariableNames: 'jsonString'
	category: 'GitHub-Tests'!

!UserTests methodsFor: 'scaffolding'!

setUp
	jsonString := '{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "somehexcode",
  "url": "https://api.github.com/users/octocat",
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "html_url": "https://github.com/octocat",
  "created_at": "2008-01-14T04:33:35Z",
  "type": "User",
  "total_private_repos": 100,
  "owned_private_repos": 100,
  "private_gists": 81,
  "disk_usage": 10000,
  "collaborators": 8,
  "plan": {
    "name": "Medium",
    "space": 400,
    "collaborators": 10,
    "private_repos": 20
  }
}'
! !

!UserTests methodsFor: 'testcases'!

testLoadFromJSON
	"Verify we can use #withData to create a proper User object"
	| user data |
	data := (jQuery parseJSON: jsonString).
	user := User new withData: data.

	self assert: 'octocat' equals: (user login).
! !

