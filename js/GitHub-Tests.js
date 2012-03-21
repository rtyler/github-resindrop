smalltalk.addPackage('GitHub-Tests', {});
smalltalk.addClass('UserTests', smalltalk.TestCase, ['jsonString'], 'GitHub-Tests');
smalltalk.addMethod(
unescape('_testLoadFromJSON'),
smalltalk.method({
selector: unescape('testLoadFromJSON'),
category: 'testcases',
fn: function (){
var self=this;
var user=nil;
var data=nil;
(data=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_parseJSON_", [self['@jsonString']]));
(user=smalltalk.send(smalltalk.send((smalltalk.User || User), "_new", []), "_withData_", [data]));
smalltalk.send(self, "_assert_equals_", ["octocat", smalltalk.send(user, "_login", [])]);
return self;},
args: [],
source: unescape('testLoadFromJSON%0A%09%22Verify%20we%20can%20use%20%23withData%20to%20create%20a%20proper%20User%20object%22%0A%09%7C%20user%20data%20%7C%0A%09data%20%3A%3D%20%28jQuery%20parseJSON%3A%20jsonString%29.%0A%09user%20%3A%3D%20User%20new%20withData%3A%20data.%0A%0A%09self%20assert%3A%20%27octocat%27%20equals%3A%20%28user%20login%29.'),
messageSends: ["parseJSON:", "withData:", "new", "assert:equals:", "login"],
referencedClasses: ["User"]
}),
smalltalk.UserTests);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'scaffolding',
fn: function (){
var self=this;
(self['@jsonString']=unescape("%7B%0A%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%22id%22%3A%201%2C%0A%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%2C%0A%20%20%22name%22%3A%20%22monalisa%20octocat%22%2C%0A%20%20%22company%22%3A%20%22GitHub%22%2C%0A%20%20%22blog%22%3A%20%22https%3A//github.com/blog%22%2C%0A%20%20%22location%22%3A%20%22San%20Francisco%22%2C%0A%20%20%22email%22%3A%20%22octocat@github.com%22%2C%0A%20%20%22hireable%22%3A%20false%2C%0A%20%20%22bio%22%3A%20%22There%20once%20was...%22%2C%0A%20%20%22public_repos%22%3A%202%2C%0A%20%20%22public_gists%22%3A%201%2C%0A%20%20%22followers%22%3A%2020%2C%0A%20%20%22following%22%3A%200%2C%0A%20%20%22html_url%22%3A%20%22https%3A//github.com/octocat%22%2C%0A%20%20%22created_at%22%3A%20%222008-01-14T04%3A33%3A35Z%22%2C%0A%20%20%22type%22%3A%20%22User%22%2C%0A%20%20%22total_private_repos%22%3A%20100%2C%0A%20%20%22owned_private_repos%22%3A%20100%2C%0A%20%20%22private_gists%22%3A%2081%2C%0A%20%20%22disk_usage%22%3A%2010000%2C%0A%20%20%22collaborators%22%3A%208%2C%0A%20%20%22plan%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Medium%22%2C%0A%20%20%20%20%22space%22%3A%20400%2C%0A%20%20%20%20%22collaborators%22%3A%2010%2C%0A%20%20%20%20%22private_repos%22%3A%2020%0A%20%20%7D%0A%7D"));
return self;},
args: [],
source: unescape('setUp%0A%09jsonString%20%3A%3D%20%27%7B%0A%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%22id%22%3A%201%2C%0A%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%2C%0A%20%20%22name%22%3A%20%22monalisa%20octocat%22%2C%0A%20%20%22company%22%3A%20%22GitHub%22%2C%0A%20%20%22blog%22%3A%20%22https%3A//github.com/blog%22%2C%0A%20%20%22location%22%3A%20%22San%20Francisco%22%2C%0A%20%20%22email%22%3A%20%22octocat@github.com%22%2C%0A%20%20%22hireable%22%3A%20false%2C%0A%20%20%22bio%22%3A%20%22There%20once%20was...%22%2C%0A%20%20%22public_repos%22%3A%202%2C%0A%20%20%22public_gists%22%3A%201%2C%0A%20%20%22followers%22%3A%2020%2C%0A%20%20%22following%22%3A%200%2C%0A%20%20%22html_url%22%3A%20%22https%3A//github.com/octocat%22%2C%0A%20%20%22created_at%22%3A%20%222008-01-14T04%3A33%3A35Z%22%2C%0A%20%20%22type%22%3A%20%22User%22%2C%0A%20%20%22total_private_repos%22%3A%20100%2C%0A%20%20%22owned_private_repos%22%3A%20100%2C%0A%20%20%22private_gists%22%3A%2081%2C%0A%20%20%22disk_usage%22%3A%2010000%2C%0A%20%20%22collaborators%22%3A%208%2C%0A%20%20%22plan%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Medium%22%2C%0A%20%20%20%20%22space%22%3A%20400%2C%0A%20%20%20%20%22collaborators%22%3A%2010%2C%0A%20%20%20%20%22private_repos%22%3A%2020%0A%20%20%7D%0A%7D%27'),
messageSends: [],
referencedClasses: []
}),
smalltalk.UserTests);



smalltalk.addClass('IssuesTests', smalltalk.TestCase, ['object', 'jsonString'], 'GitHub-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
category: 'scaffolding',
fn: function (){
var self=this;
(self['@object']=smalltalk.send((smalltalk.Issues || Issues), "_new", []));
(self['@jsonString']=unescape("%7B%0A%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/octocat/Hello-World/issues/1%22%2C%0A%20%20%20%20%22html_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1%22%2C%0A%20%20%20%20%22number%22%3A%201347%2C%0A%20%20%20%20%22state%22%3A%20%22open%22%2C%0A%20%20%20%20%22title%22%3A%20%22Found%20a%20bug%22%2C%0A%20%20%20%20%22body%22%3A%20%22Im%20having%20a%20problem%20with%20this.%22%2C%0A%20%20%20%20%22user%22%3A%20%7B%0A%20%20%20%20%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%20%20%20%20%22id%22%3A%201%2C%0A%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%20%20%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22labels%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/octocat/Hello-World/labels/bug%22%2C%0A%20%20%20%20%20%20%20%20%22name%22%3A%20%22bug%22%2C%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22f29513%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22assignee%22%3A%20%7B%0A%20%20%20%20%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%20%20%20%20%22id%22%3A%201%2C%0A%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%20%20%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22milestone%22%3A%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/octocat/Hello-World/milestones/1%22%2C%0A%20%20%20%20%20%20%22number%22%3A%201%2C%0A%20%20%20%20%20%20%22state%22%3A%20%22open%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22v1.0%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22creator%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%20%20%20%20%20%20%22id%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%20%20%20%20%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22open_issues%22%3A%204%2C%0A%20%20%20%20%20%20%22closed_issues%22%3A%208%2C%0A%20%20%20%20%20%20%22created_at%22%3A%20%222011-04-10T20%3A09%3A31Z%22%2C%0A%20%20%20%20%20%20%22due_on%22%3A%20null%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22comments%22%3A%200%2C%0A%20%20%20%20%22pull_request%22%3A%20%7B%0A%20%20%20%20%20%20%22html_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1%22%2C%0A%20%20%20%20%20%20%22diff_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1.diff%22%2C%0A%20%20%20%20%20%20%22patch_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1.patch%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22closed_at%22%3A%20null%2C%0A%20%20%20%20%22created_at%22%3A%20%222011-04-22T13%3A33%3A48Z%22%2C%0A%20%20%20%20%22updated_at%22%3A%20%222011-04-22T13%3A33%3A48Z%22%0A%20%20%7D"));
return self;},
args: [],
source: unescape('setUp%0A%09object%20%3A%3D%20Issues%20new.%0A%09jsonString%20%3A%3D%20%27%7B%0A%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/octocat/Hello-World/issues/1%22%2C%0A%20%20%20%20%22html_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1%22%2C%0A%20%20%20%20%22number%22%3A%201347%2C%0A%20%20%20%20%22state%22%3A%20%22open%22%2C%0A%20%20%20%20%22title%22%3A%20%22Found%20a%20bug%22%2C%0A%20%20%20%20%22body%22%3A%20%22Im%20having%20a%20problem%20with%20this.%22%2C%0A%20%20%20%20%22user%22%3A%20%7B%0A%20%20%20%20%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%20%20%20%20%22id%22%3A%201%2C%0A%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%20%20%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22labels%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/octocat/Hello-World/labels/bug%22%2C%0A%20%20%20%20%20%20%20%20%22name%22%3A%20%22bug%22%2C%0A%20%20%20%20%20%20%20%20%22color%22%3A%20%22f29513%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22assignee%22%3A%20%7B%0A%20%20%20%20%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%20%20%20%20%22id%22%3A%201%2C%0A%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%20%20%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22milestone%22%3A%20%7B%0A%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/repos/octocat/Hello-World/milestones/1%22%2C%0A%20%20%20%20%20%20%22number%22%3A%201%2C%0A%20%20%20%20%20%20%22state%22%3A%20%22open%22%2C%0A%20%20%20%20%20%20%22title%22%3A%20%22v1.0%22%2C%0A%20%20%20%20%20%20%22description%22%3A%20%22%22%2C%0A%20%20%20%20%20%20%22creator%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%20%20%20%20%20%20%22id%22%3A%201%2C%0A%20%20%20%20%20%20%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%20%20%20%20%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%20%20%20%20%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%22open_issues%22%3A%204%2C%0A%20%20%20%20%20%20%22closed_issues%22%3A%208%2C%0A%20%20%20%20%20%20%22created_at%22%3A%20%222011-04-10T20%3A09%3A31Z%22%2C%0A%20%20%20%20%20%20%22due_on%22%3A%20null%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22comments%22%3A%200%2C%0A%20%20%20%20%22pull_request%22%3A%20%7B%0A%20%20%20%20%20%20%22html_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1%22%2C%0A%20%20%20%20%20%20%22diff_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1.diff%22%2C%0A%20%20%20%20%20%20%22patch_url%22%3A%20%22https%3A//github.com/octocat/Hello-World/issues/1.patch%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22closed_at%22%3A%20null%2C%0A%20%20%20%20%22created_at%22%3A%20%222011-04-22T13%3A33%3A48Z%22%2C%0A%20%20%20%20%22updated_at%22%3A%20%222011-04-22T13%3A33%3A48Z%22%0A%20%20%7D%27'),
messageSends: ["new"],
referencedClasses: ["Issues"]
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithNoToken'),
smalltalk.method({
selector: unescape('testApiUrlWithNoToken'),
category: 'testcases',
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues"), result]);
return self;},
args: [],
source: unescape('testApiUrlWithNoToken%0A%09%7C%20result%20%7C%0A%09result%20%3A%3D%20object%20apiUrlFor%3A%20%27/issues%27.%0A%09self%20assert%3A%20%27https%3A//api.github.com/issues%27%20equals%3A%20result.'),
messageSends: ["apiUrlFor:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithAToken'),
smalltalk.method({
selector: unescape('testApiUrlWithAToken'),
category: 'testcases',
fn: function (){
var self=this;
var result=nil;
smalltalk.send(self['@object'], "_setToken_", ["deadbeef"]);
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues%3Faccess_token%3Ddeadbeef"), result]);
return self;},
args: [],
source: unescape('testApiUrlWithAToken%0A%09%7C%20result%20%7C%0A%09object%20setToken%3A%20%27deadbeef%27.%0A%09result%20%3A%3D%20object%20apiUrlFor%3A%20%27/issues%27.%0A%09self%20assert%3A%20%27https%3A//api.github.com/issues%3Faccess_token%3Ddeadbeef%27%20equals%3A%20result.'),
messageSends: ["setToken:", "apiUrlFor:", "assert:equals:"],
referencedClasses: []
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testLoadFromJSON'),
smalltalk.method({
selector: unescape('testLoadFromJSON'),
category: 'testcases',
fn: function (){
var self=this;
var issue=nil;
var data=nil;
(data=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_parseJSON_", [self['@jsonString']]));
(issue=smalltalk.send(smalltalk.send((smalltalk.Issue || Issue), "_new", []), "_withData_", [data]));
smalltalk.send(self, "_assert_equals_", [(1347), smalltalk.send(issue, "_number", [])]);
smalltalk.send(self, "_assert_equals_", [unescape("octocat/Hello-World"), smalltalk.send(issue, "_projectName", [])]);
smalltalk.send(self, "_assert_equals_", ["octocat", smalltalk.send(issue, "_projectOwner", [])]);
smalltalk.send(self, "_assert_equals_", [unescape("Hello-World"), smalltalk.send(issue, "_project", [])]);
smalltalk.send(self, "_assert_equals_", [(1), smalltalk.send(smalltalk.send(issue, "_labels", []), "_size", [])]);
smalltalk.send(self, "_assert_equals_", ["Found a bug", smalltalk.send(issue, "_title", [])]);
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//github.com/octocat/Hello-World/issues/1"), smalltalk.send(issue, "_url", [])]);
return self;},
args: [],
source: unescape('testLoadFromJSON%0A%09%22Verify%20we%20can%20use%20%23withData%20to%20create%20a%20proper%20Issue%20object%22%0A%09%7C%20issue%20data%20%7C%0A%09data%20%3A%3D%20%28jQuery%20parseJSON%3A%20jsonString%29.%0A%09issue%20%3A%3D%20Issue%20new%20withData%3A%20data.%0A%0A%09self%20assert%3A%201347%20equals%3A%20%28issue%20number%29.%0A%09self%20assert%3A%20%27octocat/Hello-World%27%20equals%3A%20%28issue%20projectName%29.%0A%09self%20assert%3A%20%27octocat%27%20equals%3A%20%28issue%20projectOwner%29.%0A%09self%20assert%3A%20%27Hello-World%27%20equals%3A%20%28issue%20project%29.%0A%09self%20assert%3A%201%20equals%3A%20%28issue%20labels%20size%29.%0A%09self%20assert%3A%20%27Found%20a%20bug%27%20equals%3A%20%28issue%20title%29.%0A%09self%20assert%3A%20%27https%3A//github.com/octocat/Hello-World/issues/1%27%20equals%3A%20%28issue%20url%29.'),
messageSends: ["parseJSON:", "withData:", "new", "assert:equals:", "number", "projectName", "projectOwner", "project", "size", "labels", "title", "url"],
referencedClasses: ["Issue"]
}),
smalltalk.IssuesTests);



