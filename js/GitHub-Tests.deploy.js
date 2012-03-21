smalltalk.addPackage('GitHub-Tests', {});
smalltalk.addClass('UserTests', smalltalk.TestCase, ['jsonString'], 'GitHub-Tests');
smalltalk.addMethod(
unescape('_testLoadFromJSON'),
smalltalk.method({
selector: unescape('testLoadFromJSON'),
fn: function (){
var self=this;
var user=nil;
var data=nil;
(data=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_parseJSON_", [self['@jsonString']]));
(user=smalltalk.send(smalltalk.send((smalltalk.User || User), "_new", []), "_withData_", [data]));
smalltalk.send(self, "_assert_equals_", ["octocat", smalltalk.send(user, "_login", [])]);
return self;}
}),
smalltalk.UserTests);

smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function (){
var self=this;
(self['@jsonString']=unescape("%7B%0A%20%20%22login%22%3A%20%22octocat%22%2C%0A%20%20%22id%22%3A%201%2C%0A%20%20%22avatar_url%22%3A%20%22https%3A//github.com/images/error/octocat_happy.gif%22%2C%0A%20%20%22gravatar_id%22%3A%20%22somehexcode%22%2C%0A%20%20%22url%22%3A%20%22https%3A//api.github.com/users/octocat%22%2C%0A%20%20%22name%22%3A%20%22monalisa%20octocat%22%2C%0A%20%20%22company%22%3A%20%22GitHub%22%2C%0A%20%20%22blog%22%3A%20%22https%3A//github.com/blog%22%2C%0A%20%20%22location%22%3A%20%22San%20Francisco%22%2C%0A%20%20%22email%22%3A%20%22octocat@github.com%22%2C%0A%20%20%22hireable%22%3A%20false%2C%0A%20%20%22bio%22%3A%20%22There%20once%20was...%22%2C%0A%20%20%22public_repos%22%3A%202%2C%0A%20%20%22public_gists%22%3A%201%2C%0A%20%20%22followers%22%3A%2020%2C%0A%20%20%22following%22%3A%200%2C%0A%20%20%22html_url%22%3A%20%22https%3A//github.com/octocat%22%2C%0A%20%20%22created_at%22%3A%20%222008-01-14T04%3A33%3A35Z%22%2C%0A%20%20%22type%22%3A%20%22User%22%2C%0A%20%20%22total_private_repos%22%3A%20100%2C%0A%20%20%22owned_private_repos%22%3A%20100%2C%0A%20%20%22private_gists%22%3A%2081%2C%0A%20%20%22disk_usage%22%3A%2010000%2C%0A%20%20%22collaborators%22%3A%208%2C%0A%20%20%22plan%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20%22Medium%22%2C%0A%20%20%20%20%22space%22%3A%20400%2C%0A%20%20%20%20%22collaborators%22%3A%2010%2C%0A%20%20%20%20%22private_repos%22%3A%2020%0A%20%20%7D%0A%7D"));
return self;}
}),
smalltalk.UserTests);



smalltalk.addClass('IssuesTests', smalltalk.TestCase, ['object'], 'GitHub-Tests');
smalltalk.addMethod(
unescape('_setUp'),
smalltalk.method({
selector: unescape('setUp'),
fn: function (){
var self=this;
(self['@object']=smalltalk.send((smalltalk.Issues || Issues), "_new", []));
return self;}
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithNoToken'),
smalltalk.method({
selector: unescape('testApiUrlWithNoToken'),
fn: function (){
var self=this;
var result=nil;
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues"), result]);
return self;}
}),
smalltalk.IssuesTests);

smalltalk.addMethod(
unescape('_testApiUrlWithAToken'),
smalltalk.method({
selector: unescape('testApiUrlWithAToken'),
fn: function (){
var self=this;
var result=nil;
smalltalk.send(self['@object'], "_setToken_", ["deadbeef"]);
(result=smalltalk.send(self['@object'], "_apiUrlFor_", [unescape("/issues")]));
smalltalk.send(self, "_assert_equals_", [unescape("https%3A//api.github.com/issues%3Faccess_token%3Ddeadbeef"), result]);
return self;}
}),
smalltalk.IssuesTests);



