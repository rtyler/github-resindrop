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


smalltalk.addMethod(
unescape('_baseUrl'),
smalltalk.method({
selector: unescape('baseUrl'),
fn: function (){
var self=this;
return unescape("https%3A//api.github.com");
return self;}
}),
smalltalk.APIBase.klass);

smalltalk.addMethod(
unescape('_fetchAllFromUrl_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchAllFromUrl%3AwithEachDo%3Afinally%3A'),
fn: function (aUrlString, aBlock, aFinalBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [aUrlString, smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){var links=nil;
var foundNext=nil;
smalltalk.send(smalltalk.send(result, "_data", []), "_do_", [(function(item){smalltalk.send(item, "_at_put_", ["updated_at", smalltalk.send((smalltalk.Date || Date), "_fromString_", [smalltalk.send(item, "_at_", ["updated_at"])])]);return smalltalk.send(aBlock, "_value_", [item]);})]);(links=smalltalk.send(smalltalk.send(result, "_meta", []), "_at_", ["Link"]));(foundNext=false);(($receiver = links) != nil && $receiver != undefined) ? (function(){return smalltalk.send(links, "_do_", [(function(link){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(link, "_at_", [(2)]), "_at_", ["rel"]), "__eq", ["next"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(foundNext=true);return smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(link, "_at_", [(1)]), aBlock, aFinalBlock]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(foundNext=true);return smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(link, "_at_", [(1)]), aBlock, aFinalBlock]);})]));})]);})() : nil;return ((($receiver = foundNext).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aFinalBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(aFinalBlock, "_value", []);})]));})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(unescape("Error%20calling%20%23fetchAllFromUrl%20with%20the%20URL%3A%20"), "__comma", [aUrlString])]);})])])]);
return self;}
}),
smalltalk.APIBase.klass);

smalltalk.addMethod(
unescape('_fetchAllFromUrl_withEachDo_'),
smalltalk.method({
selector: unescape('fetchAllFromUrl%3AwithEachDo%3A'),
fn: function (aUrlString, aBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [aUrlString, aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.APIBase.klass);


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



smalltalk.addClass('Issue', smalltalk.APIBase, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus', 'comments', 'fullProjectName', 'projectName', 'labels', 'url', 'pullRequest'], 'GitHub');
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
(self['@pullRequest']=smalltalk.send(smalltalk.send(aDict, "_at_", ["pull_request"]), "_at_", ["html_url"]));
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
return (($receiver = self['@body']) == nil || $receiver == undefined) ? (function(){return (self['@body']="");})() : $receiver;
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
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [self['@url'], smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(results){return smalltalk.send(aCallback, "_value_", [smalltalk.send(smalltalk.send(results, "_data", []), "_collect_", [(function(data){return smalltalk.send(smalltalk.send((smalltalk.Comment || Comment), "_new", []), "_withData_", [data]);})])]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["error"]);})])])]);
return self;}
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_pullRequest'),
smalltalk.method({
selector: unescape('pullRequest'),
fn: function (){
var self=this;
return self['@pullRequest'];
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


smalltalk.addMethod(
unescape('_fetchIssuesFor_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchIssuesFor%3AwithEachDo%3Afinally%3A'),
fn: function (aProjectName, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/repos/")]), "__comma", [aProjectName]), "__comma", [unescape("/issues")]), aBlock, aFinalBlock]);
return self;}
}),
smalltalk.Issues.klass);

smalltalk.addMethod(
unescape('_fetchIssuesFor_withEachDo_'),
smalltalk.method({
selector: unescape('fetchIssuesFor%3AwithEachDo%3A'),
fn: function (aProjectName, aBlock){
var self=this;
smalltalk.send(self, "_fetchIssuesFor_withEachDo_finally_", [aProjectName, aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.Issues.klass);


smalltalk.addClass('Repo', smalltalk.APIBase, ['token', 'authenticated'], 'GitHub');

smalltalk.addMethod(
unescape('_collaboratorsFor_with_'),
smalltalk.method({
selector: unescape('collaboratorsFor%3Awith%3A'),
fn: function (fullRepoName, aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/repos/")]), "__comma", [fullRepoName]), "__comma", [unescape("/collaborators")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(aBlock, "_value_", [smalltalk.send(result, "_data", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [unescape("Error%20calling%20%23collaboratorsFor")]);})])])]);
return true;
return self;}
}),
smalltalk.Repo.klass);

smalltalk.addMethod(
unescape('_fetchReposFor_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchReposFor%3AwithEachDo%3Afinally%3A'),
fn: function (aUser, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/users/")]), "__comma", [aUser]), "__comma", [unescape("/repos")]), aBlock, aFinalBlock]);
return self;}
}),
smalltalk.Repo.klass);

smalltalk.addMethod(
unescape('_fetchReposFor_withEachDo_'),
smalltalk.method({
selector: unescape('fetchReposFor%3AwithEachDo%3A'),
fn: function (aUser, aBlock){
var self=this;
smalltalk.send(self, "_fetchReposFor_withEachDo_finally_", [aUser, aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.Repo.klass);

smalltalk.addMethod(
unescape('_fetchReposForToken_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchReposForToken%3AwithEachDo%3Afinally%3A'),
fn: function (aToken, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/user/repos%3Faccess_token%3D")]), "__comma", [aToken]), aBlock, aFinalBlock]);
return self;}
}),
smalltalk.Repo.klass);


smalltalk.addClass('PullRequest', smalltalk.APIBase, ['title', 'number', 'raw', 'url', 'createdAt', 'updatedAt', 'mergeable', 'comments', 'commits', 'changedFiles'], 'GitHub');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.APIBase);
(self['@title']=nil);
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
fn: function (jsonString){
var self=this;
var data=nil;
(data=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_parseJSON_", [jsonString]));
return smalltalk.send(self, "_withData_", [data]);
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
fn: function (){
var self=this;
return self['@title'];
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
fn: function (){
var self=this;
return self['@number'];
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_raw'),
smalltalk.method({
selector: unescape('raw'),
fn: function (){
var self=this;
return self['@raw'];
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
fn: function (){
var self=this;
return self['@url'];
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
fn: function (data){
var self=this;
(self['@title']=smalltalk.send(data, "_at_", ["title"]));
(self['@url']=smalltalk.send(data, "_at_", ["html_url"]));
(self['@createdAt']=smalltalk.send((smalltalk.Date || Date), "_fromString_", [smalltalk.send(data, "_at_", ["created_at"])]));
(self['@updatedAt']=smalltalk.send((smalltalk.Date || Date), "_fromString_", [smalltalk.send(data, "_at_", ["updated_at"])]));
(self['@number']=smalltalk.send(data, "_at_", ["number"]));
(self['@mergeable']=smalltalk.send(data, "_at_", ["mergeable"]));
(self['@comments']=smalltalk.send(data, "_at_", ["comments"]));
(self['@commits']=smalltalk.send(data, "_at_", ["commits"]));
(self['@changedFiles']=smalltalk.send(data, "_at_", ["changed_files"]));
(self['@raw']=data);
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_createdAt'),
smalltalk.method({
selector: unescape('createdAt'),
fn: function (){
var self=this;
return self['@createdAt'];
return self;}
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_updatedAt'),
smalltalk.method({
selector: unescape('updatedAt'),
fn: function (){
var self=this;
return self['@updatedAt'];
return self;}
}),
smalltalk.PullRequest);


smalltalk.addMethod(
unescape('_fetchFor_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchFor%3AwithEachDo%3Afinally%3A'),
fn: function (aFullProjectName, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/repos/")]), "__comma", [aFullProjectName]), "__comma", [unescape("/pulls")]), (function(item){return smalltalk.send(aBlock, "_value_", [smalltalk.send(smalltalk.send(self, "_new", []), "_withData_", [item])]);}), aFinalBlock]);
return self;}
}),
smalltalk.PullRequest.klass);

smalltalk.addMethod(
unescape('_fetchFor_withEachDo_'),
smalltalk.method({
selector: unescape('fetchFor%3AwithEachDo%3A'),
fn: function (aFullProjectName, aBlock){
var self=this;
smalltalk.send(self, "_fetchFor_withEachDo_finally_", [aFullProjectName, aBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.PullRequest.klass);


