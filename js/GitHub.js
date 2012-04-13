smalltalk.addPackage('GitHub', {});
smalltalk.addClass('Comment', smalltalk.Object, ['raw', 'login', 'body', 'created_at'], 'GitHub');
smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
category: 'initializers',
fn: function (aDict){
var self=this;
(self['@raw']=aDict);
(self['@body']=smalltalk.send(aDict, "_at_", ["body"]));
(self['@login']=smalltalk.send(smalltalk.send(aDict, "_at_", ["user"]), "_at_", ["login"]));
return self;},
args: ["aDict"],
source: unescape('withData%3A%20aDict%0A%09raw%20%3A%3D%20aDict.%0A%09body%20%3A%3D%20aDict%20at%3A%20%27body%27.%0A%09login%20%3A%3D%20%28aDict%20at%3A%20%27user%27%29%20at%3A%20%27login%27.'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.Comment);

smalltalk.addMethod(
unescape('_body'),
smalltalk.method({
selector: unescape('body'),
category: 'accessors',
fn: function (){
var self=this;
return self['@body'];
return self;},
args: [],
source: unescape('body%0A%09%5E%20body.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Comment);

smalltalk.addMethod(
unescape('_login'),
smalltalk.method({
selector: unescape('login'),
category: 'accessors',
fn: function (){
var self=this;
return self['@login'];
return self;},
args: [],
source: unescape('login%0A%09%5E%20login.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Comment);



smalltalk.addClass('APIBase', smalltalk.Object, ['token', 'authenticated'], 'GitHub');
smalltalk.addMethod(
unescape('_baseUrl'),
smalltalk.method({
selector: unescape('baseUrl'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("https%3A//api.github.com");
return self;},
args: [],
source: unescape('baseUrl%0A%09%22Return%20the%20GitHub%20API%20url%20base%22%0A%09%5E%20%27https%3A//api.github.com%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.APIBase);

smalltalk.addMethod(
unescape('_setToken_'),
smalltalk.method({
selector: unescape('setToken%3A'),
category: 'not yet classified',
fn: function (anAccessToken){
var self=this;
(self['@token']=anAccessToken);
(self['@authenticated']=true);
return self;},
args: ["anAccessToken"],
source: unescape('setToken%3A%20anAccessToken%0A%09%22Set%20the%20OAuth%20token%20we%20can%20use%22%0A%09token%20%3A%3D%20anAccessToken.%0A%09authenticated%20%3A%3D%20true.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.APIBase);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@authenticated']=false);
(self['@token']=nil);
return self;},
args: [],
source: unescape('initialize%0A%09authenticated%20%3A%3D%20false.%0A%09token%20%3A%3D%20nil.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.APIBase);

smalltalk.addMethod(
unescape('_apiUrlFor_'),
smalltalk.method({
selector: unescape('apiUrlFor%3A'),
category: 'not yet classified',
fn: function (apiString){
var self=this;
var url=nil;
(url=smalltalk.send(smalltalk.send("", "__comma", [smalltalk.send(self, "_baseUrl", [])]), "__comma", [apiString]));
((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (url=smalltalk.send(smalltalk.send(smalltalk.send("", "__comma", [url]), "__comma", [unescape("%3Faccess_token%3D")]), "__comma", [self['@token']]));})]));
return url;
return self;},
args: ["apiString"],
source: unescape('apiUrlFor%3A%20apiString%0A%09%22Return%20the%20combined%20URL%20with%20an%20access%20token%20if%20we%20have%20one%22%0A%09%7C%20url%20%7C%0A%09url%20%3A%3D%20%27%27%2C%20%28self%20baseUrl%29%2C%20apiString.%0A%09authenticated%20ifTrue%3A%20%5B%20url%20%3A%3D%20%27%27%2C%20url%2C%20%27%3Faccess_token%3D%27%2C%20token%20%5D.%0A%09%5E%20url.'),
messageSends: [unescape("%2C"), "baseUrl", "ifTrue:"],
referencedClasses: []
}),
smalltalk.APIBase);


smalltalk.addMethod(
unescape('_baseUrl'),
smalltalk.method({
selector: unescape('baseUrl'),
category: 'not yet classified',
fn: function (){
var self=this;
return unescape("https%3A//api.github.com");
return self;},
args: [],
source: unescape('baseUrl%0A%09%22Return%20the%20GitHub%20API%20url%20base%22%0A%09%5E%20%27https%3A//api.github.com%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.APIBase.klass);

smalltalk.addMethod(
unescape('_fetchAllFromUrl_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchAllFromUrl%3AwithEachDo%3Afinally%3A'),
category: 'not yet classified',
fn: function (aUrlString, aBlock, aFinalBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [aUrlString, smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){var links=nil;
var foundNext=nil;
smalltalk.send(smalltalk.send(result, "_data", []), "_do_", [(function(item){smalltalk.send(item, "_at_put_", ["updated_at", smalltalk.send((smalltalk.Date || Date), "_fromString_", [smalltalk.send(item, "_at_", ["updated_at"])])]);return smalltalk.send(aBlock, "_value_", [item]);})]);(links=smalltalk.send(smalltalk.send(result, "_meta", []), "_at_", ["Link"]));(foundNext=false);(($receiver = links) != nil && $receiver != undefined) ? (function(){return smalltalk.send(links, "_do_", [(function(link){return ((($receiver = smalltalk.send(smalltalk.send(smalltalk.send(link, "_at_", [(2)]), "_at_", ["rel"]), "__eq", ["next"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){(foundNext=true);return smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(link, "_at_", [(1)]), aBlock, aFinalBlock]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){(foundNext=true);return smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(link, "_at_", [(1)]), aBlock, aFinalBlock]);})]));})]);})() : nil;return ((($receiver = foundNext).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(aFinalBlock, "_value", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(aFinalBlock, "_value", []);})]));})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [smalltalk.send(unescape("Error%20calling%20%23fetchAllFromUrl%20with%20the%20URL%3A%20"), "__comma", [aUrlString])]);})])])]);
return self;},
args: ["aUrlString", "aBlock", "aFinalBlock"],
source: unescape('fetchAllFromUrl%3A%20aUrlString%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock%0A%09%22%20Fetch%20the%20GitHub%20data%20from%20aUrlString%20and%20call%20aBlock%20with%20the%20results%20%22%0A%09jQuery%20ajax%3A%20aUrlString%20options%3A%20%23%7B%0A%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%27success%27%20-%3E%20%5B%20%3Aresult%20%7C%0A%09%09%09%7C%20links%20foundNext%20%7C%0A%09%09%09%22%20This%20special-case%20handling%20for%20the%20updated_at%20member%20will%20allow%20us%20to%20generally%20sort%0A%09%09%09%20%20%20the%20result%20set%20by%20updated%20date%2C%20which%20we%20will%20need%20to%20do%20often%22%0A%09%09%09result%20data%20do%3A%20%5B%20%3Aitem%20%7C%0A%09%09%09%09item%20at%3A%20%27updated_at%27%20put%3A%20%28Date%20fromString%3A%20%28item%20at%3A%20%27updated_at%27%29%29.%0A%09%09%09%09aBlock%20value%3A%20item%20%5D.%0A%09%0A%09%09%09links%20%3A%3D%20result%20meta%20at%3A%20%27Link%27.%0A%09%09%09foundNext%20%3A%3D%20false.%0A%09%09%09links%20ifNotNil%3A%20%5B%0A%09%09%09%09links%20do%3A%20%5B%20%3Alink%20%7C%0A%09%09%09%09%09%28%28link%20at%3A%202%29%20at%3A%20%27rel%27%29%20%3D%20%27next%27%0A%09%09%09%09%09%09ifTrue%3A%20%5B%0A%09%09%09%09%09%09%09foundNext%20%3A%3D%20true.%0A%09%09%09%09%09%09%09self%20fetchAllFromUrl%3A%20%28link%20at%3A%201%29%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock.%0A%09%09%09%5D%5D%5D.%0A%09%09%09foundNext%20ifFalse%3A%20%5B%20aFinalBlock%20value.%20%5D.%0A%09%09%5D.%0A%09%09%27error%27%20-%3E%20%5B%20console%20log%3A%20%28%27Error%20calling%20%23fetchAllFromUrl%20with%20the%20URL%3A%20%27%2C%20aUrlString%29%20%5D%0A%09%7D.'),
messageSends: ["ajax:options:", unescape("-%3E"), "do:", "data", "at:put:", "fromString:", "at:", "value:", "meta", "ifNotNil:", "ifTrue:", unescape("%3D"), "fetchAllFromUrl:withEachDo:finally:", "ifFalse:", "value", "log:", unescape("%2C")],
referencedClasses: ["Date"]
}),
smalltalk.APIBase.klass);

smalltalk.addMethod(
unescape('_fetchAllFromUrl_withEachDo_'),
smalltalk.method({
selector: unescape('fetchAllFromUrl%3AwithEachDo%3A'),
category: 'not yet classified',
fn: function (aUrlString, aBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [aUrlString, aBlock, (function(){return nil;})]);
return self;},
args: ["aUrlString", "aBlock"],
source: unescape('fetchAllFromUrl%3A%20aUrlString%20withEachDo%3A%20aBlock%0A%09self%20fetchAllFromUrl%3A%20aUrlString%20withEachDo%3A%20aBlock%20finally%3A%20%5B%5D.'),
messageSends: ["fetchAllFromUrl:withEachDo:finally:"],
referencedClasses: []
}),
smalltalk.APIBase.klass);


smalltalk.addClass('User', smalltalk.Object, ['raw', 'fullName', 'login', 'imageUrl', 'userId', 'bio', 'email', 'profileUrl'], 'GitHub');
smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
category: 'initializers',
fn: function (aDict){
var self=this;
(self['@login']=smalltalk.send(aDict, "_at_", ["login"]));
return self;},
args: ["aDict"],
source: unescape('withData%3A%20aDict%0A%09%22%20Seed%20the%20User%20object%20with%20data%20acquired%20from%20the%20API%22%0A%09login%20%3A%3D%20aDict%20at%3A%20%27login%27.'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.User);

smalltalk.addMethod(
unescape('_login'),
smalltalk.method({
selector: unescape('login'),
category: 'accessors',
fn: function (){
var self=this;
return self['@login'];
return self;},
args: [],
source: unescape('login%0A%09%5E%20login.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.User);



smalltalk.addClass('Issue', smalltalk.APIBase, ['raw', 'title', 'body', 'issueId', 'number', 'project', 'projectOwner', 'issueStatus', 'comments', 'fullProjectName', 'projectName', 'labels', 'url', 'pullRequest'], 'GitHub');
smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
category: 'initializers',
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
return self;},
args: ["aDict"],
source: unescape('withData%3A%20aDict%0A%09%22Seed%20the%20Issue%20object%20based%20on%20aDict%2C%20which%20should%0A%09%20be%20the%20individual%20elements%20of%20the%20%60GET%20/issues%60%20API%20call%22%0A%09%7C%20urlParts%20%7C%0A%0A%09raw%20%3A%3D%20aDict.%0A%09issueId%20%3A%3D%20aDict%20at%3A%20%27id%27.%0A%09number%20%3A%3D%20aDict%20at%3A%20%27number%27.%0A%09title%20%3A%3D%20aDict%20at%3A%20%27title%27.%0A%09body%20%3A%3D%20aDict%20at%3A%20%27body%27.%0A%09comments%20%3A%3D%20aDict%20at%3A%20%27comments%27.%0A%09labels%20%3A%3D%20aDict%20at%3A%20%27labels%27.%0A%09url%20%3A%3D%20aDict%20at%3A%20%27html_url%27.%0A%09pullRequest%20%3A%3D%20%28aDict%20at%3A%20%27pull_request%27%29%20at%3A%20%27html_url%27.%0A%0A%09urlParts%20%3A%3D%20%3CaDict%5B%27html_url%27%5D.split%28%27/%27%29%3E.%0A%09projectOwner%20%3A%3D%20urlParts%20at%3A%204.%0A%09project%20%3A%3D%20urlParts%20at%3A%205.%0A%09projectName%20%3A%3D%20%28urlParts%20at%3A%204%29%2C%20%27/%27%2C%20%28urlParts%20at%3A%205%29.'),
messageSends: ["at:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
category: 'accessors',
fn: function (){
var self=this;
return self['@number'];
return self;},
args: [],
source: unescape('number%0A%09%5E%20number.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_projectName'),
smalltalk.method({
selector: unescape('projectName'),
category: 'accessors',
fn: function (){
var self=this;
return self['@projectName'];
return self;},
args: [],
source: unescape('projectName%0A%09%5E%20projectName.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_project'),
smalltalk.method({
selector: unescape('project'),
category: 'accessors',
fn: function (){
var self=this;
return self['@project'];
return self;},
args: [],
source: unescape('project%0A%09%5E%20project.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_projectOwner'),
smalltalk.method({
selector: unescape('projectOwner'),
category: 'accessors',
fn: function (){
var self=this;
return self['@projectOwner'];
return self;},
args: [],
source: unescape('projectOwner%0A%09%5E%20projectOwner.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_issueId'),
smalltalk.method({
selector: unescape('issueId'),
category: 'accessors',
fn: function (){
var self=this;
return self['@issueId'];
return self;},
args: [],
source: unescape('issueId%0A%09%5E%20issueId.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_comments'),
smalltalk.method({
selector: unescape('comments'),
category: 'accessors',
fn: function (){
var self=this;
return self['@comments'];
return self;},
args: [],
source: unescape('comments%0A%09%5E%20comments.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_labels'),
smalltalk.method({
selector: unescape('labels'),
category: 'accessors',
fn: function (){
var self=this;
return self['@labels'];
return self;},
args: [],
source: unescape('labels%0A%09%5E%20labels.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessors',
fn: function (){
var self=this;
return self['@title'];
return self;},
args: [],
source: unescape('title%0A%09%5E%20title.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessors',
fn: function (){
var self=this;
return self['@url'];
return self;},
args: [],
source: unescape('url%0A%09%5E%20url.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_body'),
smalltalk.method({
selector: unescape('body'),
category: 'accessors',
fn: function (){
var self=this;
return (($receiver = self['@body']) == nil || $receiver == undefined) ? (function(){return (self['@body']="");})() : $receiver;
return self;},
args: [],
source: unescape('body%0A%09%5E%20body%20ifNil%3A%20%5B%20body%20%3A%3D%20%27%27%20%5D.'),
messageSends: ["ifNil:"],
referencedClasses: []
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_loadComments_'),
smalltalk.method({
selector: unescape('loadComments%3A'),
category: 'actions',
fn: function (aCallback){
var self=this;
var url=nil;
(self['@url']=smalltalk.send(self, "_apiUrlFor_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(unescape("/repos/"), "__comma", [self['@projectName']]), "__comma", [unescape("/issues/")]), "__comma", [self['@number']]), "__comma", [unescape("/comments")])]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [self['@url'], smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(results){return smalltalk.send(aCallback, "_value_", [smalltalk.send(smalltalk.send(results, "_data", []), "_collect_", [(function(data){return smalltalk.send(smalltalk.send((smalltalk.Comment || Comment), "_new", []), "_withData_", [data]);})])]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["error"]);})])])]);
return self;},
args: ["aCallback"],
source: unescape('loadComments%3A%20aCallback%0A%09%22Starting%20loading%20the%20comments%20for%20this%20Issue%2C%20we%27re%20really%20only%20going%20to%20fetch%20one%20page%22%0A%09%22GET%20/repos/%3Auser/%3Arepo/issues/%3Anumber/comments%20%22%0A%0A%09%7C%20url%20%7C%0A%09url%20%3A%3D%20self%20apiUrlFor%3A%20%28%27/repos/%27%2C%20projectName%2C%20%27/issues/%27%2C%20number%2C%20%27/comments%27%29.%0A%09jQuery%20ajax%3A%20url%20options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Aresults%20%7C%0A%09%09%09%09aCallback%20value%3A%20%28results%20data%20collect%3A%20%5B%20%3Adata%20%7C%20Comment%20new%20withData%3A%20data%20%5D%29.%0A%09%09%09%5D.%0A%09%09%09%27error%27%20-%3E%20%5B%20console%20log%3A%20%27error%27%20%5D%0A%09%7D.'),
messageSends: ["apiUrlFor:", unescape("%2C"), "ajax:options:", unescape("-%3E"), "value:", "collect:", "data", "withData:", "new", "log:"],
referencedClasses: ["Comment"]
}),
smalltalk.Issue);

smalltalk.addMethod(
unescape('_pullRequest'),
smalltalk.method({
selector: unescape('pullRequest'),
category: 'initializers',
fn: function (){
var self=this;
return self['@pullRequest'];
return self;},
args: [],
source: unescape('pullRequest%0A%09%22Return%20the%20URL%20to%20the%20pull%20request%20in%20question%20%22%0A%09%5E%20pullRequest.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Issue);



smalltalk.addClass('Users', smalltalk.APIBase, [], 'GitHub');
smalltalk.addMethod(
unescape('_fetchCurrent_'),
smalltalk.method({
selector: unescape('fetchCurrent%3A'),
category: 'not yet classified',
fn: function (andCallback){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load user information unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_fetchCurrent_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load user information unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_fetchCurrent_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_apiUrlFor_", [unescape("/user")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(andCallback, "_value_", [smalltalk.send(result, "_data", [])]);})])])]);
(function(){throw({name: 'stReturn', selector: '_fetchCurrent_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_fetchCurrent_'){return e.fn()} throw(e)}},
args: ["andCallback"],
source: unescape('fetchCurrent%3A%20andCallback%0A%09%22Fetch%20info%20about%20the%20current%20authenticated%20user%22%0A%09authenticated%20ifFalse%3A%20%5B%20console%20log%3A%20%27Cannot%20load%20user%20information%20unless%20we%20have%20an%20access%20token%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%28self%20apiUrlFor%3A%20%27/user%27%29%20options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Aresult%20%7C%0A%09%09%09%09andCallback%20value%3A%20%28result%20data%29%20%5D%7D.%0A%09%5E%20true.%20'),
messageSends: ["ifFalse:", "log:", "ajax:options:", "apiUrlFor:", unescape("-%3E"), "value:", "data"],
referencedClasses: []
}),
smalltalk.Users);



smalltalk.addClass('Issues', smalltalk.APIBase, [], 'GitHub');
smalltalk.addMethod(
unescape('_issues_loadAll_'),
smalltalk.method({
selector: unescape('issues%3AloadAll%3A'),
category: 'not yet classified',
fn: function (aPageCallback, shouldLoadAll){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(self, "_apiUrlFor_", [unescape("/issues")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(smalltalk.send(result, "_data", []), "_do_", [(function(item){var issue=nil;
(issue=(function($rec){smalltalk.send($rec, "_withData_", [item]);return smalltalk.send($rec, "_setToken_", [self['@token']]);})(smalltalk.send((smalltalk.Issue || Issue), "_new", [])));return smalltalk.send(aPageCallback, "_value_", [issue]);})]);})])])]);
(function(){throw({name: 'stReturn', selector: '_issues_loadAll_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_issues_loadAll_'){return e.fn()} throw(e)}},
args: ["aPageCallback", "shouldLoadAll"],
source: unescape('issues%3A%20aPageCallback%20loadAll%3A%20shouldLoadAll%0A%09%22Call%20aPageCallback%20with%20every%20page%20of%20issues%20loaded%20from%20GitHub%22%0A%09authenticated%20ifFalse%3A%20%5B%20console%20log%3A%20%27Cannot%20load%20issues%20unless%20we%20have%20an%20access%20token%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%28self%20apiUrlFor%3A%20%27/issues%27%29%20options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Aresult%20%7C%0A%09%09%09%09result%20data%20do%3A%20%5B%20%3Aitem%20%7C%0A%09%09%09%09%09%7C%20issue%20%7C%0A%09%09%09%09%09issue%20%3A%3D%20Issue%20new%20withData%3A%20item%3B%20setToken%3A%20token.%0A%09%09%09%09%09aPageCallback%20value%3A%20issue.%0A%09%09%09%09%5D%0A%09%09%09%5D%0A%09%7D.%0A%09%5E%20true.%20'),
messageSends: ["ifFalse:", "log:", "ajax:options:", "apiUrlFor:", unescape("-%3E"), "do:", "data", "withData:", "setToken:", "new", "value:"],
referencedClasses: ["Issue"]
}),
smalltalk.Issues);

smalltalk.addMethod(
unescape('_recentlyClosed_loadAll_'),
smalltalk.method({
selector: unescape('recentlyClosed%3AloadAll%3A'),
category: 'not yet classified',
fn: function (aPageCallback, shouldLoadAll){
var self=this;
try{((($receiver = self['@authenticated']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return false}})})();})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", ["Cannot load issues unless we have an access token"]);return (function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return false}})})();})]));
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(self, "_apiUrlFor_", [unescape("/issues")]), "__comma", [unescape("%26state%3Dclosed%26per_page%3D10")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(smalltalk.send(result, "_data", []), "_do_", [(function(item){var issue=nil;
(issue=(function($rec){smalltalk.send($rec, "_withData_", [item]);return smalltalk.send($rec, "_setToken_", [self['@token']]);})(smalltalk.send((smalltalk.Issue || Issue), "_new", [])));return smalltalk.send(aPageCallback, "_value_", [issue]);})]);})])])]);
(function(){throw({name: 'stReturn', selector: '_recentlyClosed_loadAll_', fn: function(){return true}})})();
return self;
} catch(e) {if(e.name === 'stReturn' && e.selector === '_recentlyClosed_loadAll_'){return e.fn()} throw(e)}},
args: ["aPageCallback", "shouldLoadAll"],
source: unescape('recentlyClosed%3A%20aPageCallback%20loadAll%3A%20shouldLoadAll%0A%09%22Call%20aPageCallback%20with%20pages%20of%20issues%20that%20have%20been%20closed%20in%20the%20last%20week%20%22%0A%09authenticated%20ifFalse%3A%20%5B%20console%20log%3A%20%27Cannot%20load%20issues%20unless%20we%20have%20an%20access%20token%27.%20%5E%20false%20%5D.%0A%0A%09jQuery%20ajax%3A%20%28%28self%20apiUrlFor%3A%20%27/issues%27%29%2C%20%27%26state%3Dclosed%26per_page%3D10%27%29%20options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Aresult%20%7C%0A%09%09%09%09result%20data%20do%3A%20%5B%20%3Aitem%20%7C%0A%09%09%09%09%09%7C%20issue%20%7C%0A%09%09%09%09%09issue%20%3A%3D%20Issue%20new%20withData%3A%20item%3B%20setToken%3A%20token.%0A%09%09%09%09%09aPageCallback%20value%3A%20issue.%0A%09%09%09%09%5D%0A%09%09%09%5D%0A%09%7D.%0A%09%5E%20true.%20'),
messageSends: ["ifFalse:", "log:", "ajax:options:", unescape("%2C"), "apiUrlFor:", unescape("-%3E"), "do:", "data", "withData:", "setToken:", "new", "value:"],
referencedClasses: ["Issue"]
}),
smalltalk.Issues);


smalltalk.addMethod(
unescape('_fetchIssuesFor_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchIssuesFor%3AwithEachDo%3Afinally%3A'),
category: 'not yet classified',
fn: function (aProjectName, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/repos/")]), "__comma", [aProjectName]), "__comma", [unescape("/issues")]), aBlock, aFinalBlock]);
return self;},
args: ["aProjectName", "aBlock", "aFinalBlock"],
source: unescape('fetchIssuesFor%3A%20aProjectName%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock%0A%09%22Fetch%20all%20the%20issues%20for%20the%20project%20name%20%28e.g.%20%27rtyler/Hubboard%27%29%20and%20invoke%20aBlock%0A%09%20for%20every%20issue.%20aFinalBlock%20will%20be%20invoked%20after%20all%20issues%20have%20been%20downloaded%22%0A%09self%20fetchAllFromUrl%3A%20%28%28self%20baseUrl%29%2C%20%27/repos/%27%2C%20aProjectName%2C%20%27/issues%27%29%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock.'),
messageSends: ["fetchAllFromUrl:withEachDo:finally:", unescape("%2C"), "baseUrl"],
referencedClasses: []
}),
smalltalk.Issues.klass);

smalltalk.addMethod(
unescape('_fetchIssuesFor_withEachDo_'),
smalltalk.method({
selector: unescape('fetchIssuesFor%3AwithEachDo%3A'),
category: 'not yet classified',
fn: function (aProjectName, aBlock){
var self=this;
smalltalk.send(self, "_fetchIssuesFor_withEachDo_finally_", [aProjectName, aBlock, (function(){return nil;})]);
return self;},
args: ["aProjectName", "aBlock"],
source: unescape('fetchIssuesFor%3A%20aProjectName%20withEachDo%3A%20aBlock%0A%09self%20fetchIssuesFor%3A%20aProjectName%20withEachDo%3A%20aBlock%20finally%3A%20%5B%5D.'),
messageSends: ["fetchIssuesFor:withEachDo:finally:"],
referencedClasses: []
}),
smalltalk.Issues.klass);


smalltalk.addClass('Repo', smalltalk.APIBase, ['token', 'authenticated'], 'GitHub');

smalltalk.addMethod(
unescape('_collaboratorsFor_with_'),
smalltalk.method({
selector: unescape('collaboratorsFor%3Awith%3A'),
category: 'api-calls',
fn: function (fullRepoName, aBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/repos/")]), "__comma", [fullRepoName]), "__comma", [unescape("/collaborators")]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [(function(result){return smalltalk.send(aBlock, "_value_", [smalltalk.send(result, "_data", [])]);})]),smalltalk.send("error", "__minus_gt", [(function(){return smalltalk.send((typeof console == 'undefined' ? nil : console), "_log_", [unescape("Error%20calling%20%23collaboratorsFor")]);})])])]);
return true;
return self;},
args: ["fullRepoName", "aBlock"],
source: unescape('collaboratorsFor%3A%20fullRepoName%20with%3A%20aBlock%0A%09%22A%20fullRepoName%20should%20be%20in%20the%20format%20of%20%27rtyler/Hubboard%27%20%28for%20example%29%22%0A%09jQuery%20ajax%3A%20%28%28self%20baseUrl%29%2C%20%27/repos/%27%2C%20fullRepoName%2C%20%27/collaborators%27%29%20options%3A%20%23%7B%0A%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%27success%27%20-%3E%20%5B%20%3Aresult%20%7C%20aBlock%20value%3A%20%28result%20data%29%20%5D.%0A%09%09%09%27error%27%20-%3E%20%5B%20console%20log%3A%20%27Error%20calling%20%23collaboratorsFor%27%20%5D%0A%09%7D.%0A%09%5E%20true.%20'),
messageSends: ["ajax:options:", unescape("%2C"), "baseUrl", unescape("-%3E"), "value:", "data", "log:"],
referencedClasses: []
}),
smalltalk.Repo.klass);

smalltalk.addMethod(
unescape('_fetchReposFor_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchReposFor%3AwithEachDo%3Afinally%3A'),
category: 'api-calls',
fn: function (aUser, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/users/")]), "__comma", [aUser]), "__comma", [unescape("/repos")]), aBlock, aFinalBlock]);
return self;},
args: ["aUser", "aBlock", "aFinalBlock"],
source: unescape('fetchReposFor%3A%20aUser%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock%0A%09self%20fetchAllFromUrl%3A%20%28%28self%20baseUrl%29%2C%20%27/users/%27%2C%20aUser%2C%20%27/repos%27%29%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock.'),
messageSends: ["fetchAllFromUrl:withEachDo:finally:", unescape("%2C"), "baseUrl"],
referencedClasses: []
}),
smalltalk.Repo.klass);

smalltalk.addMethod(
unescape('_fetchReposFor_withEachDo_'),
smalltalk.method({
selector: unescape('fetchReposFor%3AwithEachDo%3A'),
category: 'api-calls',
fn: function (aUser, aBlock){
var self=this;
smalltalk.send(self, "_fetchReposFor_withEachDo_finally_", [aUser, aBlock, (function(){return nil;})]);
return self;},
args: ["aUser", "aBlock"],
source: unescape('fetchReposFor%3A%20aUser%20withEachDo%3A%20aBlock%0A%09self%20fetchReposFor%3A%20aUser%20withEachDo%3A%20aBlock%20finally%3A%20%5B%5D.'),
messageSends: ["fetchReposFor:withEachDo:finally:"],
referencedClasses: []
}),
smalltalk.Repo.klass);

smalltalk.addMethod(
unescape('_fetchReposForToken_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchReposForToken%3AwithEachDo%3Afinally%3A'),
category: 'api-calls',
fn: function (aToken, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/user/repos%3Faccess_token%3D")]), "__comma", [aToken]), aBlock, aFinalBlock]);
return self;},
args: ["aToken", "aBlock", "aFinalBlock"],
source: unescape('fetchReposForToken%3A%20aToken%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock%0A%09self%20fetchAllFromUrl%3A%20%28%28self%20baseUrl%29%2C%20%27/user/repos%3Faccess_token%3D%27%2C%20aToken%29%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock.'),
messageSends: ["fetchAllFromUrl:withEachDo:finally:", unescape("%2C"), "baseUrl"],
referencedClasses: []
}),
smalltalk.Repo.klass);


smalltalk.addClass('PullRequest', smalltalk.APIBase, ['title', 'number', 'raw', 'url'], 'GitHub');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'initializers',
fn: function (){
var self=this;
smalltalk.send(self, "_initialize", [], smalltalk.APIBase);
(self['@title']=nil);
return self;},
args: [],
source: unescape('initialize%0A%09super%20initialize.%0A%09title%20%3A%3D%20nil.'),
messageSends: ["initialize"],
referencedClasses: []
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_fromJSON_'),
smalltalk.method({
selector: unescape('fromJSON%3A'),
category: 'initializers',
fn: function (jsonString){
var self=this;
var data=nil;
(data=smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_parseJSON_", [jsonString]));
return smalltalk.send(self, "_withData_", [data]);
return self;},
args: ["jsonString"],
source: unescape('fromJSON%3A%20jsonString%0A%09%7C%20data%20%7C%0A%09data%20%3A%3D%20%28jQuery%20parseJSON%3A%20jsonString%29.%0A%09%5E%20self%20withData%3A%20data.'),
messageSends: ["parseJSON:", "withData:"],
referencedClasses: []
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_title'),
smalltalk.method({
selector: unescape('title'),
category: 'accessors',
fn: function (){
var self=this;
return self['@title'];
return self;},
args: [],
source: unescape('title%0A%09%5E%20title.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_number'),
smalltalk.method({
selector: unescape('number'),
category: 'accessors',
fn: function (){
var self=this;
return self['@number'];
return self;},
args: [],
source: unescape('number%0A%09%5E%20number.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_raw'),
smalltalk.method({
selector: unescape('raw'),
category: 'accessors',
fn: function (){
var self=this;
return self['@raw'];
return self;},
args: [],
source: unescape('raw%0A%09%5E%20raw.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_url'),
smalltalk.method({
selector: unescape('url'),
category: 'accessors',
fn: function (){
var self=this;
return self['@url'];
return self;},
args: [],
source: unescape('url%0A%09%5E%20url.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.PullRequest);

smalltalk.addMethod(
unescape('_withData_'),
smalltalk.method({
selector: unescape('withData%3A'),
category: 'initializers',
fn: function (data){
var self=this;
(self['@title']=smalltalk.send(data, "_at_", ["title"]));
(self['@url']=smalltalk.send(data, "_at_", ["url"]));
(self['@number']=smalltalk.send(data, "_at_", ["number"]));
(self['@raw']=data);
return self;},
args: ["data"],
source: unescape('withData%3A%20data%0A%09title%20%3A%3D%20data%20at%3A%20%27title%27.%0A%09url%20%3A%3D%20data%20at%3A%20%27url%27.%0A%09number%20%3A%3D%20data%20at%3A%20%27number%27.%0A%09raw%20%3A%3D%20data.'),
messageSends: ["at:"],
referencedClasses: []
}),
smalltalk.PullRequest);


smalltalk.addMethod(
unescape('_fetchFor_withEachDo_finally_'),
smalltalk.method({
selector: unescape('fetchFor%3AwithEachDo%3Afinally%3A'),
category: 'not yet classified',
fn: function (aFullProjectName, aBlock, aFinalBlock){
var self=this;
smalltalk.send(self, "_fetchAllFromUrl_withEachDo_finally_", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(self, "_baseUrl", []), "__comma", [unescape("/repos/")]), "__comma", [aFullProjectName]), "__comma", [unescape("/pulls")]), (function(item){return smalltalk.send(aBlock, "_value_", [smalltalk.send(smalltalk.send(self, "_new", []), "_withData_", [item])]);}), aFinalBlock]);
return self;},
args: ["aFullProjectName", "aBlock", "aFinalBlock"],
source: unescape('fetchFor%3A%20aFullProjectName%20withEachDo%3A%20aBlock%20finally%3A%20aFinalBlock%0A%09%22%20aFullProjectName%20should%20take%20the%20form%20of%20%27%3Auser/%3Arepo%27%2C%20i.e.%20%27rtyler/git-of-despair%27%22%0A%09self%20fetchAllFromUrl%3A%20%28%28self%20baseUrl%29%2C%20%27/repos/%27%2C%20aFullProjectName%2C%20%27/pulls%27%29%0A%09%09withEachDo%3A%20%5B%20%3Aitem%20%7C%20aBlock%20value%3A%20%28self%20new%20withData%3A%20item%29%20%5D%0A%09%09finally%3A%20aFinalBlock.'),
messageSends: ["fetchAllFromUrl:withEachDo:finally:", unescape("%2C"), "baseUrl", "value:", "withData:", "new"],
referencedClasses: []
}),
smalltalk.PullRequest.klass);

smalltalk.addMethod(
unescape('_fetchFor_withEachDo_'),
smalltalk.method({
selector: unescape('fetchFor%3AwithEachDo%3A'),
category: 'not yet classified',
fn: function (aFullProjectName, aBlock){
var self=this;
smalltalk.send(self, "_fetchFor_withEachDo_finally_", [aFullProjectName, aBlock, (function(){return nil;})]);
return self;},
args: ["aFullProjectName", "aBlock"],
source: unescape('fetchFor%3A%20aFullProjectName%20withEachDo%3A%20aBlock%0A%09self%20fetchFor%3A%20aFullProjectName%20withEachDo%3A%20aBlock%20finally%3A%20%5B%5D.'),
messageSends: ["fetchFor:withEachDo:finally:"],
referencedClasses: []
}),
smalltalk.PullRequest.klass);


