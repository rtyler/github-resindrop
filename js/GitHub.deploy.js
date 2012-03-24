smalltalk.addPackage('GitHub', {});
smalltalk.addClass('User', smalltalk.Object, ['raw', 'fullName', 'login', 'imageUrl', 'userId', 'bio', 'email', 'profileUrl'], 'GitHub');
smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
fn: function (aDict){
var self=this;
(self['@login']=smalltalk.send(aDict, "_at_", ["login"]));
return self;}
}),
smalltalk.User);

smalltalk.addMethod(
unescape('_login'),
smalltalk.method({
selector: unescape('login'),
fn: function (){
var self=this;
return self['@login'];
return self;}
}),
smalltalk.User);



smalltalk.addClass('APIBase', smalltalk.Object, ['token', 'authenticated'], 'GitHub');
smalltalk.addMethod(
unescape('_baseUrl'),
smalltalk.method({
selector: unescape('baseUrl'),
fn: function (){
var self=this;
return unescape("https%3A//api.github.com");
return self;}
}),
smalltalk.APIBase);

smalltalk.addMethod(
unescape('_setToken_'),
smalltalk.method({
selector: unescape('setToken%3A'),
fn: function (anAccessToken){
var self=this;
(self['@token']=anAccessToken);
(self['@authenticated']=true);
return self;}
}),
smalltalk.APIBase);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@authenticated']=false);
(self['@token']=nil);
return self;}
}),
smalltalk.APIBase);

smalltalk.addMethod(
unescape('_apiUrlFor_'),
smalltalk.method({
selector: unescape('apiUrlFor%3A'),
fn: function (apiString){
var self=this;
var url=nil;
(url=smalltalk.send(smalltalk.send("", "__comma", [smalltalk.send(self, "_baseUrl", [])]), "__comma", [apiString]));
((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})]));
return url;
return self;}
}),
smalltalk.APIBase);



smalltalk.addClass('Comment', smalltalk.Object, ['raw', 'login', 'body', 'created_at'], 'GitHub');
smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
fn: function (aDict){
var self=this;
(self['@raw']=aDict);
(self['@body']=smalltalk.send(aDict, "_at_", ["body"]));
(self['@login']=smalltalk.send(smalltalk.send(aDict, "_at_", ["user"]), "_at_", ["login"]));
return self;}
}),
smalltalk.Comment);

smalltalk.addMethod(
unescape('_body'),
smalltalk.method({
selector: unescape('body'),
fn: function (){
var self=this;
return self['@body'];
return self;}
}),
smalltalk.Comment);

smalltalk.addMethod(
unescape('_login'),
smalltalk.method({
selector: unescape('login'),
fn: function (){
var self=this;
return self['@login'];
return self;}
}),
smalltalk.Comment);



smalltalk.addClass('Issue', smalltalk.APIBase, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus', 'comments', 'fullProjectName', 'projectName', 'labels', 'url'], 'GitHub');
smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
fn: function (aDict){
var self=this;
var urlParts=nil;
(self['@raw']=aDict);
(self['@issueId']=smalltalk.send(aDict, "_at_", ["id"]));
(self['@number']=smalltalk.send(aDict, "_at_", ["number"]));
(self['@title']=smalltalk.send(aDict, "_at_", ["title"]));
(self['@body']=smalltalk.send(aDict, "_at_", ["body"]));
(self['@comments']=smalltalk.send(aDict, "_at_", ["comments"]));
(self['@labels']=smalltalk.send(aDict, "_at_", ["labels"]));
(self['@url']=smalltalk.send(aDict, "_at_", ["html_url"]));
(urlParts=aDict['html_url'].split('/'));
(self['@projectOwner']=smalltalk.send(urlParts, "_at_", [(4)]));
(self['@project']=smalltalk.send(urlParts, "_at_", [(5)]));
(self['@projectName']=smalltalk.send(smalltalk.send(smalltalk.send(urlParts, "_at_", [(4)]), "__comma", [unescape("/")]), "__comma", [smalltalk.send(urlParts, "_at_", [(5)])]));
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
fn: function (){
var self=this;
return self['@number'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_projectName'),
smalltalk.method({
selector: unescape('projectName'),
fn: function (){
var self=this;
return self['@projectName'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_project'),
smalltalk.method({
selector: unescape('project'),
fn: function (){
var self=this;
return self['@project'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_projectOwner'),
smalltalk.method({
selector: unescape('projectOwner'),
fn: function (){
var self=this;
return self['@projectOwner'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_issueId'),
smalltalk.method({
selector: unescape('issueId'),
fn: function (){
var self=this;
return self['@issueId'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_comments'),
smalltalk.method({
selector: unescape('comments'),
fn: function (){
var self=this;
return self['@comments'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_labels'),
smalltalk.method({
selector: unescape('labels'),
fn: function (){
var self=this;
return self['@labels'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return self['@title'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
fn: function (){
var self=this;
return self['@url'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_body'),
smalltalk.method({
selector: unescape('body'),
fn: function (){
var self=this;
return self['@body'];
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_loadComments_'),
smalltalk.method({
selector: unescape('loadComments%3A'),
fn: function (aCallback){
var self=this;
var url=nil;
(self['@url']=smalltalk.send(self, "_apiUrlFor_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/repos/"), "__comma", [self['@projectName']]), "__comma", [unescape("/issues/")]), "__comma", [self['@number']]), "__comma", [unescape("/comments")])]));
smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [self['@url']]);
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [self['@url'], smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(results){return smalltalk.send(aCallback, "_value_", [smalltalk.send(smalltalk.send(results, "_data", []), "_do_", [(function(data){return smalltalk.send(smalltalk.send((smalltalk.Comment || Comment), "_new", []), "_withData_", [data]);})])]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["error"]);})])])]);
return self;}
}),
smalltalk.Issue);



smalltalk.addClass('Users', smalltalk.APIBase, [], 'GitHub');
smalltalk.addMethod(
unescape('_fetchCurrent_'),
smalltalk.method({
selector: unescape('fetchCurrent%3A'),
fn: function (andCallback){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load user information unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_fetchCurrent_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load user information unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_fetchCurrent_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_apiUrlFor_", [unescape("/user")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(andCallback, "_value_", [smalltalk.send(result, "_data", [])]);})])])]);
(function(){throw({name: 'stReturn', selector: '_fetchCurrent_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_fetchCurrent_'){return e.fn()} throw(e)}}
}),
smalltalk.Users);



smalltalk.addClass('Issues', smalltalk.APIBase, [], 'GitHub');
smalltalk.addMethod(
unescape('_issues_loadAll_'),
smalltalk.method({
selector: unescape('issues%3AloadAll%3A'),
fn: function (aPageCallback, shouldLoadAll){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_apiUrlFor_", [unescape("/issues")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(smalltalk.send(result, "_data", []), "_do_", [(function(item){var issue=nil;
(issue=(function($rec){smalltalk.send($rec, "_withData_", [item]);return smalltalk.send($rec, "_setToken_", [self['@token']]);})(smalltalk.send((smalltalk.Issue || Issue), "_new", [])));return smalltalk.send(aPageCallback, "_value_", [issue]);})]);})])])]);
(function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_issues_loadAll_'){return e.fn()} throw(e)}}
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_recentlyClosed_loadAll_'),
smalltalk.method({
selector: unescape('recentlyClosed%3AloadAll%3A'),
fn: function (aPageCallback, shouldLoadAll){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(self, "_apiUrlFor_", [unescape("/issues")]), "__comma", [unescape("%26state%3Dclosed%26per_page%3D10")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(smalltalk.send(result, "_data", []), "_do_", [(function(item){var issue=nil;
(issue=(function($rec){smalltalk.send($rec, "_withData_", [item]);return smalltalk.send($rec, "_setToken_", [self['@token']]);})(smalltalk.send((smalltalk.Issue || Issue), "_new", [])));return smalltalk.send(aPageCallback, "_value_", [issue]);})]);})])])]);
(function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_recentlyClosed_loadAll_'){return e.fn()} throw(e)}}
}),
smalltalk.Issues);



