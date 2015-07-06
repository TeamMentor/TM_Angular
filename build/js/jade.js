function jade_articles_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (activeFilter, href, no_Results, results, viewModel) {
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
















































jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"username\">Username</label><input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\"" + (jade.attr("value", '' + (viewModel?viewModel.username:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.password:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["login-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
jade_mixins["get-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-get-password\" class=\"full-width btn-minor\">Get Password</button>");
};
jade_mixins["reset-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-password\" class=\"full-width\">Reset Password</button>");
};








jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
























jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};












jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(filter, title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span id=\"filter-icon\">");
switch (filter){
case 'Type':
switch (title){
case 'Checklist Item':
jade_mixins["checklist-icon"]();
  break;
case 'Guideline':
jade_mixins["guideline-icon"]();
  break;
case 'Code Example':
jade_mixins["code-example-icon"]();
  break;
case 'How To':
jade_mixins["how-to-icon"]();
  break;
case 'Vulnerability':
jade_mixins["vulnerabilities-icon"]();
  break;
case 'Principle':
jade_mixins["principle-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Technology':
switch (title){
case '.NET':
case 'ASP.NET 3.5':
case 'ASP.NET 4.0':
jade_mixins["net-icon"]();
  break;
case '.NET 3.5':
jade_mixins["net-3-5-icon"]();
  break;
case 'Android':
jade_mixins["android-icon"]();
  break;
case 'C++':
jade_mixins["c-icon"]();
  break;
case 'iOS':
jade_mixins["ios-icon"]();
  break;
case 'Java':
jade_mixins["java-icon"]();
  break;
case 'PHP':
jade_mixins["php-icon"]();
  break;
case 'Scala Play':
case 'Scala with Play Framework':
jade_mixins["scala-icon"]();
  break;
case 'WCF':
case 'WCF 3.5':
jade_mixins["wcf-icon"]();
  break;
case 'Web Application':
jade_mixins["web-app-icon"]();
  break;
case 'HTML5':
jade_mixins["html5-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Phase':
switch (title){
case 'Deployment':
jade_mixins["deploy-icon"]();
  break;
case 'Design':
jade_mixins["design-icon"]();
  break;
case 'Implementation':
jade_mixins["implement-icon"]();
  break;
case 'Test':
jade_mixins["test-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
}
buf.push("</span>");
};























































































































































jade_mixins["results"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"results\"><div class=\"mobile lge-container\">");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
if ( results)
{
if ( results.size() > 250)
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p></td>");
}
else
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p></td>");
}
if ( activeFilter)
{
buf.push("<table>");
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  }
}).call(this);

buf.push("</table>");
}
}
buf.push("</div><div class=\"desktop\"><table><tr>");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
buf.push("<td>");
if ( results)
{
if ( results.size() > 250)
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p>");
}
else
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p>");
}
}
buf.push("</td><td class=\"text-right\">");
if ( activeFilter)
{
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  }
}).call(this);

buf.push("<!--span#activeFilter.filter= activeFilter.titlesspan.close\n    a(href=href) x\n-->");
}
buf.push("</td></tr></table></div></div>");
};














































jade_mixins["articles-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"articles\">");
if ( results)
{
// iterate results.take(250)
;(function(){
  var $$obj = results.take(250);
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<div id=\"list-view-article\" class=\"bg\"><table><tr><td class=\"filter-icons\"><span class=\"label\">" + (jade.escape(null == (jade_interp = '#' + (index +1)) ? "" : jade_interp)) + "</span></td><td><a" + (jade.attr("href", '/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, false)) + (jade.attr("id", result.id, true, false)) + "><h4>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h4></a></td></tr><tr><td class=\"filter-icons\">");
jade_mixins["filter-icon"]('Technology',result.technology);
buf.push("<br/>");
jade_mixins["filter-icon"]('Type', result.type);
buf.push("<br/>");
jade_mixins["filter-icon"]('Phase', result.phase);
buf.push("</td><td class=\"full-width\"><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></td></tr></table></div>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<div id=\"list-view-article\" class=\"bg\"><table><tr><td class=\"filter-icons\"><span class=\"label\">" + (jade.escape(null == (jade_interp = '#' + (index +1)) ? "" : jade_interp)) + "</span></td><td><a" + (jade.attr("href", '/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, false)) + (jade.attr("id", result.id, true, false)) + "><h4>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h4></a></td></tr><tr><td class=\"filter-icons\">");
jade_mixins["filter-icon"]('Technology',result.technology);
buf.push("<br/>");
jade_mixins["filter-icon"]('Type', result.type);
buf.push("<br/>");
jade_mixins["filter-icon"]('Phase', result.phase);
buf.push("</td><td class=\"full-width\"><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></td></tr></table></div>");
}
    }

  }
}).call(this);

}
buf.push("</div>");
};






































































































































jade_mixins["articles-list"]();}.call(this,"activeFilter" in locals_for_with?locals_for_with.activeFilter:typeof activeFilter!=="undefined"?activeFilter:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"no_Results" in locals_for_with?locals_for_with.no_Results:typeof no_Results!=="undefined"?no_Results:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_breadcrumbs(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (activeFilter, breadcrumbs, href, no_Results, results, viewModel) {
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
jade_mixins["breadcrumbs"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( breadcrumbs && breadcrumbs.size() > 1)
{
buf.push("<dl class=\"sub-nav\"><div id=\"navigation\">");
// iterate breadcrumbs
;(function(){
  var $$obj = breadcrumbs;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

if ( index == breadcrumbs.size() -1)
{
buf.push("<dd class=\"active\"><a" + (jade.attr("href", item.href, true, false)) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></dd>");
}
else
{
buf.push("<dd>");
if ( activeFilter)
{
buf.push("<a" + (jade.attr("href", item.href + '/' + activeFilter.ids, true, false)) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a>");
}
else
{
buf.push("<a" + (jade.attr("href", item.href, true, false)) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a>");
}
buf.push("</dd>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

if ( index == breadcrumbs.size() -1)
{
buf.push("<dd class=\"active\"><a" + (jade.attr("href", item.href, true, false)) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a></dd>");
}
else
{
buf.push("<dd>");
if ( activeFilter)
{
buf.push("<a" + (jade.attr("href", item.href + '/' + activeFilter.ids, true, false)) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a>");
}
else
{
buf.push("<a" + (jade.attr("href", item.href, true, false)) + ">" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)) + "</a>");
}
buf.push("</dd>");
}
    }

  }
}).call(this);

buf.push("</div></dl>");
}
};
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"username\">Username</label><input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\"" + (jade.attr("value", '' + (viewModel?viewModel.username:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.password:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["login-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
jade_mixins["get-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-get-password\" class=\"full-width btn-minor\">Get Password</button>");
};
jade_mixins["reset-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-password\" class=\"full-width\">Reset Password</button>");
};








jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
























jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};












jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(filter, title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span id=\"filter-icon\">");
switch (filter){
case 'Type':
switch (title){
case 'Checklist Item':
jade_mixins["checklist-icon"]();
  break;
case 'Guideline':
jade_mixins["guideline-icon"]();
  break;
case 'Code Example':
jade_mixins["code-example-icon"]();
  break;
case 'How To':
jade_mixins["how-to-icon"]();
  break;
case 'Vulnerability':
jade_mixins["vulnerabilities-icon"]();
  break;
case 'Principle':
jade_mixins["principle-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Technology':
switch (title){
case '.NET':
case 'ASP.NET 3.5':
case 'ASP.NET 4.0':
jade_mixins["net-icon"]();
  break;
case '.NET 3.5':
jade_mixins["net-3-5-icon"]();
  break;
case 'Android':
jade_mixins["android-icon"]();
  break;
case 'C++':
jade_mixins["c-icon"]();
  break;
case 'iOS':
jade_mixins["ios-icon"]();
  break;
case 'Java':
jade_mixins["java-icon"]();
  break;
case 'PHP':
jade_mixins["php-icon"]();
  break;
case 'Scala Play':
case 'Scala with Play Framework':
jade_mixins["scala-icon"]();
  break;
case 'WCF':
case 'WCF 3.5':
jade_mixins["wcf-icon"]();
  break;
case 'Web Application':
jade_mixins["web-app-icon"]();
  break;
case 'HTML5':
jade_mixins["html5-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Phase':
switch (title){
case 'Deployment':
jade_mixins["deploy-icon"]();
  break;
case 'Design':
jade_mixins["design-icon"]();
  break;
case 'Implementation':
jade_mixins["implement-icon"]();
  break;
case 'Test':
jade_mixins["test-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
}
buf.push("</span>");
};























































































































































jade_mixins["results"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"results\"><div class=\"mobile lge-container\">");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
if ( results)
{
if ( results.size() > 250)
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p></td>");
}
else
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p></td>");
}
if ( activeFilter)
{
buf.push("<table>");
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  }
}).call(this);

buf.push("</table>");
}
}
buf.push("</div><div class=\"desktop\"><table><tr>");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
buf.push("<td>");
if ( results)
{
if ( results.size() > 250)
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p>");
}
else
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p>");
}
}
buf.push("</td><td class=\"text-right\">");
if ( activeFilter)
{
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  }
}).call(this);

buf.push("<!--span#activeFilter.filter= activeFilter.titlesspan.close\n    a(href=href) x\n-->");
}
buf.push("</td></tr></table></div></div>");
};






















































































































































































































jade_mixins["breadcrumbs"]();}.call(this,"activeFilter" in locals_for_with?locals_for_with.activeFilter:typeof activeFilter!=="undefined"?activeFilter:undefined,"breadcrumbs" in locals_for_with?locals_for_with.breadcrumbs:typeof breadcrumbs!=="undefined"?breadcrumbs:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"no_Results" in locals_for_with?locals_for_with.no_Results:typeof no_Results!=="undefined"?no_Results:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_directory_list(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (activeFilter, containers, href, no_Results, results, title, viewModel) {
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
















































jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"username\">Username</label><input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\"" + (jade.attr("value", '' + (viewModel?viewModel.username:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.password:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["login-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
jade_mixins["get-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-get-password\" class=\"full-width btn-minor\">Get Password</button>");
};
jade_mixins["reset-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-password\" class=\"full-width\">Reset Password</button>");
};








jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
























jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};












jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(filter, title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span id=\"filter-icon\">");
switch (filter){
case 'Type':
switch (title){
case 'Checklist Item':
jade_mixins["checklist-icon"]();
  break;
case 'Guideline':
jade_mixins["guideline-icon"]();
  break;
case 'Code Example':
jade_mixins["code-example-icon"]();
  break;
case 'How To':
jade_mixins["how-to-icon"]();
  break;
case 'Vulnerability':
jade_mixins["vulnerabilities-icon"]();
  break;
case 'Principle':
jade_mixins["principle-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Technology':
switch (title){
case '.NET':
case 'ASP.NET 3.5':
case 'ASP.NET 4.0':
jade_mixins["net-icon"]();
  break;
case '.NET 3.5':
jade_mixins["net-3-5-icon"]();
  break;
case 'Android':
jade_mixins["android-icon"]();
  break;
case 'C++':
jade_mixins["c-icon"]();
  break;
case 'iOS':
jade_mixins["ios-icon"]();
  break;
case 'Java':
jade_mixins["java-icon"]();
  break;
case 'PHP':
jade_mixins["php-icon"]();
  break;
case 'Scala Play':
case 'Scala with Play Framework':
jade_mixins["scala-icon"]();
  break;
case 'WCF':
case 'WCF 3.5':
jade_mixins["wcf-icon"]();
  break;
case 'Web Application':
jade_mixins["web-app-icon"]();
  break;
case 'HTML5':
jade_mixins["html5-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Phase':
switch (title){
case 'Deployment':
jade_mixins["deploy-icon"]();
  break;
case 'Design':
jade_mixins["design-icon"]();
  break;
case 'Implementation':
jade_mixins["implement-icon"]();
  break;
case 'Test':
jade_mixins["test-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
}
buf.push("</span>");
};




























































































jade_mixins["directory-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"directory-list\" class=\"bg\">");
if ( title)
{
buf.push("<h3 id=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h3>");
}
buf.push("<div id=\"containers\">");
if ((containers))
{
buf.push("<table class=\"nav\">");
// iterate containers
;(function(){
  var $$obj = containers;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var container = $$obj[$index];

if ( container.size > 0)
{
buf.push("<tr><td>");
if ( activeFilter)
{
buf.push("<a" + (jade.attr("href", href + ',' +container.id + '/' + activeFilter.ids, true, false)) + (jade.attr("id", container.id, true, false)) + ">" + (jade.escape(null == (jade_interp = container.title) ? "" : jade_interp)) + "</a>");
}
else
{
buf.push("<a" + (jade.attr("href", href + ',' +container.id, true, false)) + (jade.attr("id", container.id, true, false)) + ">" + (jade.escape(null == (jade_interp = container.title) ? "" : jade_interp)) + "</a>");
}
buf.push("</td><td><span class=\"right badge\">" + (jade.escape(null == (jade_interp = container.size) ? "" : jade_interp)) + "</span></td></tr>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var container = $$obj[$index];

if ( container.size > 0)
{
buf.push("<tr><td>");
if ( activeFilter)
{
buf.push("<a" + (jade.attr("href", href + ',' +container.id + '/' + activeFilter.ids, true, false)) + (jade.attr("id", container.id, true, false)) + ">" + (jade.escape(null == (jade_interp = container.title) ? "" : jade_interp)) + "</a>");
}
else
{
buf.push("<a" + (jade.attr("href", href + ',' +container.id, true, false)) + (jade.attr("id", container.id, true, false)) + ">" + (jade.escape(null == (jade_interp = container.title) ? "" : jade_interp)) + "</a>");
}
buf.push("</td><td><span class=\"right badge\">" + (jade.escape(null == (jade_interp = container.size) ? "" : jade_interp)) + "</span></td></tr>");
}
    }

  }
}).call(this);

buf.push("</table>");
}
buf.push("</div></div>");
};












jade_mixins["results"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"results\"><div class=\"mobile lge-container\">");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
if ( results)
{
if ( results.size() > 250)
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p></td>");
}
else
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p></td>");
}
if ( activeFilter)
{
buf.push("<table>");
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  }
}).call(this);

buf.push("</table>");
}
}
buf.push("</div><div class=\"desktop\"><table><tr>");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
buf.push("<td>");
if ( results)
{
if ( results.size() > 250)
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p>");
}
else
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p>");
}
}
buf.push("</td><td class=\"text-right\">");
if ( activeFilter)
{
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  }
}).call(this);

buf.push("<!--span#activeFilter.filter= activeFilter.titlesspan.close\n    a(href=href) x\n-->");
}
buf.push("</td></tr></table></div></div>");
};






















































































































































































































jade_mixins["directory-list"]();}.call(this,"activeFilter" in locals_for_with?locals_for_with.activeFilter:typeof activeFilter!=="undefined"?activeFilter:undefined,"containers" in locals_for_with?locals_for_with.containers:typeof containers!=="undefined"?containers:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"no_Results" in locals_for_with?locals_for_with.no_Results:typeof no_Results!=="undefined"?no_Results:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_filters_div(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (activeFilter, filters, href, no_Results, results, viewModel) {
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
















































jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"username\">Username</label><input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\"" + (jade.attr("value", '' + (viewModel?viewModel.username:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.password:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["login-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
jade_mixins["get-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-get-password\" class=\"full-width btn-minor\">Get Password</button>");
};
jade_mixins["reset-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-password\" class=\"full-width\">Reset Password</button>");
};








jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
























jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};












jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(filter, title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span id=\"filter-icon\">");
switch (filter){
case 'Type':
switch (title){
case 'Checklist Item':
jade_mixins["checklist-icon"]();
  break;
case 'Guideline':
jade_mixins["guideline-icon"]();
  break;
case 'Code Example':
jade_mixins["code-example-icon"]();
  break;
case 'How To':
jade_mixins["how-to-icon"]();
  break;
case 'Vulnerability':
jade_mixins["vulnerabilities-icon"]();
  break;
case 'Principle':
jade_mixins["principle-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Technology':
switch (title){
case '.NET':
case 'ASP.NET 3.5':
case 'ASP.NET 4.0':
jade_mixins["net-icon"]();
  break;
case '.NET 3.5':
jade_mixins["net-3-5-icon"]();
  break;
case 'Android':
jade_mixins["android-icon"]();
  break;
case 'C++':
jade_mixins["c-icon"]();
  break;
case 'iOS':
jade_mixins["ios-icon"]();
  break;
case 'Java':
jade_mixins["java-icon"]();
  break;
case 'PHP':
jade_mixins["php-icon"]();
  break;
case 'Scala Play':
case 'Scala with Play Framework':
jade_mixins["scala-icon"]();
  break;
case 'WCF':
case 'WCF 3.5':
jade_mixins["wcf-icon"]();
  break;
case 'Web Application':
jade_mixins["web-app-icon"]();
  break;
case 'HTML5':
jade_mixins["html5-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Phase':
switch (title){
case 'Deployment':
jade_mixins["deploy-icon"]();
  break;
case 'Design':
jade_mixins["design-icon"]();
  break;
case 'Implementation':
jade_mixins["implement-icon"]();
  break;
case 'Test':
jade_mixins["test-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
}
buf.push("</span>");
};























































































































































jade_mixins["results"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"results\"><div class=\"mobile lge-container\">");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
if ( results)
{
if ( results.size() > 250)
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p></td>");
}
else
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p></td>");
}
if ( activeFilter)
{
buf.push("<table>");
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  }
}).call(this);

buf.push("</table>");
}
}
buf.push("</div><div class=\"desktop\"><table><tr>");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
buf.push("<td>");
if ( results)
{
if ( results.size() > 250)
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p>");
}
else
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p>");
}
}
buf.push("</td><td class=\"text-right\">");
if ( activeFilter)
{
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  }
}).call(this);

buf.push("<!--span#activeFilter.filter= activeFilter.titlesspan.close\n    a(href=href) x\n-->");
}
buf.push("</td></tr></table></div></div>");
};
















































































jade_mixins["filters-div"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( filters)
{
buf.push("<div id=\"filters\"><div class=\"bg\"><h3>Filter by</h3>");
// iterate filters
;(function(){
  var $$obj = filters;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<span" + (jade.attr("id", 'filter-' + filter.title, true, false)) + "><h4 class=\"label\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "</h4><table class=\"nav\">");
// iterate filter.results
;(function(){
  var $$obj = filter.results;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var result = $$obj[$index];

buf.push("<tr>");
if ( activeFilter)
{
if ( activeFilter.ids.contains(result.id))
{
buf.push("<td>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<b>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</b><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></td>");
}
else
{
if ( result.size > 0)
{
buf.push("<td><a" + (jade.attr("href", href + '/' + activeFilter.filters + ',' + result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
}
}
else
{
buf.push("<td><a" + (jade.attr("href", href + '/'+result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

buf.push("<tr>");
if ( activeFilter)
{
if ( activeFilter.ids.contains(result.id))
{
buf.push("<td>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<b>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</b><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></td>");
}
else
{
if ( result.size > 0)
{
buf.push("<td><a" + (jade.attr("href", href + '/' + activeFilter.filters + ',' + result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
}
}
else
{
buf.push("<td><a" + (jade.attr("href", href + '/'+result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</table></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<span" + (jade.attr("id", 'filter-' + filter.title, true, false)) + "><h4 class=\"label\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "</h4><table class=\"nav\">");
// iterate filter.results
;(function(){
  var $$obj = filter.results;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var result = $$obj[$index];

buf.push("<tr>");
if ( activeFilter)
{
if ( activeFilter.ids.contains(result.id))
{
buf.push("<td>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<b>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</b><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></td>");
}
else
{
if ( result.size > 0)
{
buf.push("<td><a" + (jade.attr("href", href + '/' + activeFilter.filters + ',' + result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
}
}
else
{
buf.push("<td><a" + (jade.attr("href", href + '/'+result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
buf.push("</tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

buf.push("<tr>");
if ( activeFilter)
{
if ( activeFilter.ids.contains(result.id))
{
buf.push("<td>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<b>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</b><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></td>");
}
else
{
if ( result.size > 0)
{
buf.push("<td><a" + (jade.attr("href", href + '/' + activeFilter.filters + ',' + result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
}
}
else
{
buf.push("<td><a" + (jade.attr("href", href + '/'+result.id, true, false)) + "><span>");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("</span><span>" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</span><span class=\"right badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></a></td>");
}
buf.push("</tr>");
    }

  }
}).call(this);

buf.push("</table></span>");
    }

  }
}).call(this);

buf.push("</div></div>");
}
};
jade_mixins["filters-div"]();}.call(this,"activeFilter" in locals_for_with?locals_for_with.activeFilter:typeof activeFilter!=="undefined"?activeFilter:undefined,"filters" in locals_for_with?locals_for_with.filters:typeof filters!=="undefined"?filters:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"no_Results" in locals_for_with?locals_for_with.no_Results:typeof no_Results!=="undefined"?no_Results:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_results(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (activeFilter, href, no_Results, results, viewModel) {
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
















































jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"username\">Username</label><input type=\"text\" id=\"username\" name=\"username\" placeholder=\"Username\"" + (jade.attr("value", '' + (viewModel?viewModel.username:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.password:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["login-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
jade_mixins["get-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-get-password\" class=\"full-width btn-minor\">Get Password</button>");
};
jade_mixins["reset-password-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-password\" class=\"full-width\">Reset Password</button>");
};








jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
























jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};












jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(filter, title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span id=\"filter-icon\">");
switch (filter){
case 'Type':
switch (title){
case 'Checklist Item':
jade_mixins["checklist-icon"]();
  break;
case 'Guideline':
jade_mixins["guideline-icon"]();
  break;
case 'Code Example':
jade_mixins["code-example-icon"]();
  break;
case 'How To':
jade_mixins["how-to-icon"]();
  break;
case 'Vulnerability':
jade_mixins["vulnerabilities-icon"]();
  break;
case 'Principle':
jade_mixins["principle-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Technology':
switch (title){
case '.NET':
case 'ASP.NET 3.5':
case 'ASP.NET 4.0':
jade_mixins["net-icon"]();
  break;
case '.NET 3.5':
jade_mixins["net-3-5-icon"]();
  break;
case 'Android':
jade_mixins["android-icon"]();
  break;
case 'C++':
jade_mixins["c-icon"]();
  break;
case 'iOS':
jade_mixins["ios-icon"]();
  break;
case 'Java':
jade_mixins["java-icon"]();
  break;
case 'PHP':
jade_mixins["php-icon"]();
  break;
case 'Scala Play':
case 'Scala with Play Framework':
jade_mixins["scala-icon"]();
  break;
case 'WCF':
case 'WCF 3.5':
jade_mixins["wcf-icon"]();
  break;
case 'Web Application':
jade_mixins["web-app-icon"]();
  break;
case 'HTML5':
jade_mixins["html5-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
case 'Phase':
switch (title){
case 'Deployment':
jade_mixins["deploy-icon"]();
  break;
case 'Design':
jade_mixins["design-icon"]();
  break;
case 'Implementation':
jade_mixins["implement-icon"]();
  break;
case 'Test':
jade_mixins["test-icon"]();
  break;
default:
jade_mixins["default-icon"]();
  break;
}
  break;
}
buf.push("</span>");
};























































































































































jade_mixins["results"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"results\"><div class=\"mobile lge-container\">");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
if ( results)
{
if ( results.size() > 250)
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p></td>");
}
else
{
buf.push("<td><p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p></td>");
}
if ( activeFilter)
{
buf.push("<table>");
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<tr><td><span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span></td></tr>");
    }

  }
}).call(this);

buf.push("</table>");
}
}
buf.push("</div><div class=\"desktop\"><table><tr>");
if ( no_Results)
{
buf.push("<td><p id=\"no_results\" class=\"label\">No Results</p><p>Please try again</p></td>");
}
buf.push("<td>");
if ( results)
{
if ( results.size() > 250)
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.take(250).size() + ' articles (of '  + results.size() + ')') ? "" : jade_interp)) + "</p>");
}
else
{
buf.push("<p id=\"resultsTitle\" class=\"label\">" + (jade.escape(null == (jade_interp = 'Showing ' + results.size() + ' articles') ? "" : jade_interp)) + "</p>");
}
}
buf.push("</td><td class=\"text-right\">");
if ( activeFilter)
{
// iterate activeFilter
;(function(){
  var $$obj = activeFilter;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<span id=\"activeFilter\" class=\"filter\">" + (jade.escape(null == (jade_interp = filter.title) ? "" : jade_interp)) + "<span class=\"close\"><a" + (jade.attr("href", href + '/' + activeFilter.filters.remove(filter.id), true, false)) + ">x</a></span></span>");
    }

  }
}).call(this);

buf.push("<!--span#activeFilter.filter= activeFilter.titlesspan.close\n    a(href=href) x\n-->");
}
buf.push("</td></tr></table></div></div>");
};






















































































































































































































jade_mixins["results"]();}.call(this,"activeFilter" in locals_for_with?locals_for_with.activeFilter:typeof activeFilter!=="undefined"?activeFilter:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"no_Results" in locals_for_with?locals_for_with.no_Results:typeof no_Results!=="undefined"?no_Results:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

