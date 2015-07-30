(function() {
  var app;

  app = angular.module('TM_App', ['mm.foundation', 'ui.slider', 'ui.router']);

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.run(function($templateCache) {
    $templateCache.put('/angular/jade-html/component/alert_bad', "<section ng-show=\"showErrorMessage()\" class=\"row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span></div></div></section>");
    $templateCache.put('/angular/jade-html/component/alert_ok', "<section ng-show=\"showInfoMessage()\" class=\"row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">|</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></section>");
    $templateCache.put('/angular/jade-html/component/article', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><section class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><section class=\"row__article\"><h1>\{\{title}}</h1><div id=\"html\" ng-bind-html=\"article_Html\" class=\"article-content\"></div><ul class=\"display-inline\"><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li></ul></section></div><div class=\"col-2\"></div></section>");
    $templateCache.put('/angular/jade-html/component/filters', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div id=\"right-nav\"></div>");
    $templateCache.put('/angular/jade-html/component/help_navigation', "<dl class=\"help\"><span ng-repeat=\"view in Views\"><dt class=\"vertical-align\"><span class=\"label no-underline\">\{\{view.Title}}</span></dt><div class=\"scroll\"><dd ng-repeat=\"article in view.Articles\"><a href=\"#\{\{article.Id}}\" ng-click=\"show_Doc(article)\">\{\{article.Title}}</a></dd></div></span></dl>");
    $templateCache.put('/angular/jade-html/component/landing_bar', "<!-- Terms and Conditions Navigation--><nav class=\"container\"><a ui-sref=\"index\" class=\"logo\"></a><div class=\"links\"><ul class=\"display-inline\"><li><a ui-sref=\"about\">About</a></li><li><a ui-sref=\"features\">Features</a></li><li><a ui-sref=\"docs\">Docs</a></li><li><a ui-sref=\"sign_up\">Sign Up</a></li><li><a ui-sref=\"login\">Login</a></li></ul></div></nav>");
    $templateCache.put('/angular/jade-html/component/left_navigation', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><aside id=\"left-nav\" ng-controller=\"User_Navigation_Controller\"><ul><li><div class=\"application-logo\"></div></li><li><a ui-sref=\"main\"><span class=\"icon-home\"></span></a></li><li><a ui-sref=\"navigate\"><span title=\"Index\" class=\"icon-Index\"></span></a></li><li><a ui-sref=\"queries\"><span title=\"Index\" class=\"icon-Index\"></span></a></li><li><a ui-sref=\"docs\"><span title=\"Documentation\" class=\"icon-Info\"></span></a></li><li><a href=\"/angular/guest/index\"><span title=\"Logout\" class=\"icon-Logout\"></span></a><!--a(ui-sref=\"logout\")--></li></ul></aside>");
    $templateCache.put('/angular/jade-html/component/login_form', "<!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div ng-controller=\"Login_Controller\"><section class=\"row__label\"><div class=\"label\">Login</div></section><section ng-show=\"showErrorMessage()\" class=\"row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span></div></div></section><section ng-show=\"showInfoMessage()\" class=\"row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">|</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></section><section class=\"row\"><form id=\"login-form\" role=\"form\" ng-submit=\"login()\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"button-field\"><button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button></div><div class=\"button-field\"><br/><a id=\"pwd_forgot\" href=\"pwd_forgot\">Get Password</a></div></form></section></div>");
    $templateCache.put('/angular/jade-html/component/navigate_results', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons-->");
    $templateCache.put('/angular/jade-html/component/pagination', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><section class=\"row pagination\"><div class=\"previous\"><span class=\"icon-Arrow-Left\"></span></div><div class=\"number\"><select><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option></select></div><div class=\"next\"><span class=\"icon-Arrow-Right\"></span></div></section>");
    $templateCache.put('/angular/jade-html/component/pwd_forgot_form', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div ng-controller=\"Pwd_Forgot_Controller\"><section class=\"row__label\"><div class=\"label\">Forgot your password?</div></section><section class=\"row\"><form id=\"forgot-pwd-form\" ng-submit=\"get_Password()\"><section class=\"row\"><div class=\"col-8 input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\" value=\"\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><button type=\"submit\" id=\"btn-get-password\" class=\"full-width btn-minor\">Get Password</button></div></section></form></section><alert-ok></alert-ok></div>");
    $templateCache.put('/angular/jade-html/component/pwd_reset_form', "<!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><section class=\"row__label\"><div class=\"label\">Reset your password</div></section><section class=\"row\"><form id=\"password-reset-form\" role=\"form\" method=\"post\" action=\"/flare/user/password-reset\"><section class=\"row\"><div class=\"col-6 input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-6 input-field\"><label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\" value=\"\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><br/><button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button></div></section></form></section>");
    $templateCache.put('/angular/jade-html/component/result_article', "<span id=\"result_article\"></span>");
    $templateCache.put('/angular/jade-html/component/result_saved_article', "<article class=\"result\"><div class=\"metadata\"><ul><li><br/></li><!--li+filter-icon('Type', result.type)--><!--li+filter-icon('Phase', result.phase)--><!--li+filter-icon('Technology', result.technology)--></ul></div><div class=\"summary\"><a href=\"#\"><h3 id=\"article-headline\">Article Headline</h3></a><p>Article Summary</p><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></div></article>");
    $templateCache.put('/angular/jade-html/component/result_saved_search_term', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul>");
    $templateCache.put('/angular/jade-html/component/result_search_term', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article>");
    $templateCache.put('/angular/jade-html/component/results_delete_share', "<section class=\"row__label\"><div class=\"label\">Saved Items</div><ul class=\"display-inline\"><li><a href=\"\" class=\"button btn-result icon-Filter\"></a></li><li><button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button></li><li><button title=\"Share results\" class=\"btn-result icon-Share\"></button></li></ul></section>");
    $templateCache.put('/angular/jade-html/component/results_save_share', "<section class=\"row__label\"><div id=\"resultsTitle\" class=\"label no-underline\"># results showing</div></section><!--if resultssection.row__label if results.size() > 25 .label.no-underline#resultsTitle= results.take(25).size() + '/' + results.size() + ' results showing' else .label.no-underline#resultsTitle= results.take(25).size() + ' results showing' ul.display-inline li //a.button.btn-result.icon-Filter(href='#right-nav') aaaaaaa a.button.btn-result.icon-Filter(href='') //li +save-results-button //li +share-results-button-->");
    $templateCache.put('/angular/jade-html/component/search_bar', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Search_Controller\" class=\"search\"><form ng-submit=\"submit()\"><select><option ng-repeat=\"technology in technologies\" value=\"\{\{technology}}\">\{\{technology}}</option><!--  option(value=\".Net\")= \"Net.....\"--><!--  option(value=\"Java\")= \"abc\"--><!--  option(value=\"php\")= \"php\"--></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"Type keywords here\" class=\"search-input\"/><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span></button></form></div>");
    $templateCache.put('/angular/jade-html/component/search_result', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article>");
    $templateCache.put('/angular/jade-html/component/sign_up_form', "<!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><section class=\"row__label\"><div class=\"label\">Sign Up</div></section><section class=\"row\"><form id=\"sign-up-form\" action=\"/flare/user/sign-up\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/></div><div class=\"input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\" value=\"\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\" value=\"\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" name=\"firstName\" placeholder=\"First Name\" value=\"\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" name=\"lastname\" placeholder=\"Last Name\" value=\"\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label>Company</label><input type=\"text\" id=\"company\" placeholder=\"Company\"/></div><div class=\"input-field\"><label>Title</label><input type=\"text\" id=\"title\" placeholder=\"Title\"/></div><div class=\"input-field\"><label for=\"country\">Country</label><input type=\"text\" id=\"country\" name=\"country\" placeholder=\"Country\" value=\"\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"state\">State</label><input type=\"text\" id=\"state\" name=\"state\" placeholder=\"state\" value=\"\" maxlength=\"100\"/></div><div class=\"conditions\"><p>By signing up, you agree to our <a href=\"/misc/terms-and-conditions\">Terms and Conditions</a>.</p> </div><div class=\"button-field\"><button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button></div></form></section>");
    $templateCache.put('/angular/jade-html/component/start_view', "<section class=\"row\"><section class=\"row__label\"><div class=\"label\">Popular Search Terms</div></section><section class=\"row\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article></section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Recently Viewed Articles</div></section><section class=\"row\"><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span></section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Top Articles</div></section><section class=\"row\"><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span></section></section>");
    $templateCache.put('/angular/jade-html/component/team_mentor_summary', "<section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></section></section>");
    $templateCache.put('/angular/jade-html/component/user/articles', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Articles_Controller\"><section class=\"row\"><article ng-repeat=\"article in articles\" class=\"result\"><div class=\"metadata\"><ul><li><!--+show-icon('Technology',result.technology)--></li><li><!--+show-icon('Type', result.type)--></li><li><!--+show-icon('Phase', result.phase)--></li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a ng-href=\"\{\{article.url}}\" id=\"\{\{article.id}}\"><h3 id=\"article-headline\">\{\{article.title}}</h3></a><p>\{\{article.summary}} ...</p></div></article><!--each result,index in results.take(10)if result && result.id && result.title article.result .metadata ul //li span.label.no-underline +tick-icon span   Seen li +show-icon('Technology',result.technology) li +show-icon('Type', result.type) li +show-icon('Phase', result.phase) //li +save-button //li +share-button .summary a(href='/angular/user/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g, '-').remove('.'), id=result.id) h3#article-headline= result.title p= result.summary + '...'--></section></div>");
    $templateCache.put('/angular/jade-html/component/user/queries', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Queries_Controller\"><dl><dt><span class=\"label no-underline\">\{\{title}}</span><span class=\"sub-nav__icon\"><!--a(ng-click=\"show_Previous_Query()\")+back-icon --></span></dt><div id=\"containers\" class=\"scroll\"><div ng-repeat=\"container in containers\"><!--if container.size > 0--><a href=\"#\" id=\"\{\{container.id}}\" ng-click=\"load_Query(container.id)\"><dd><span class=\"text\">\{\{container.title}}</span><span class=\"badge\">\{\{container.size}}</span></dd></a></div></div></dl></div>");
    $templateCache.put('/angular/jade-html/component/user/queries_breadcrumbs', "<div ng-controller=\"Breadcrumbs_Controller\"><div class=\"sub-nav\"><div class=\"navigation\"><dl><dd ng-repeat=\"breadcrumb in breadcrumbs\" class=\"active\"><a ng-href=\"#\" ng-click=\"load_Query(breadcrumb)\">\{\{breadcrumb.title}}</a></dd></dl></div></div></div>");
    $templateCache.put('/angular/jade-html/component/user/queries_history', "<div ng-controller=\"Queries_History_Controller\"><nav><ul class=\"display-inline\"><li ng-repeat=\"(key, value) in history\"><a ng-href=\"#\" ng-click=\"load_Query(key)\">\{\{value}}</a></li></ul></nav></div>");
    $templateCache.put('/angular/jade-html/component/user_panel', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><section class=\"row__label\"><div class=\"label\">@username</div></section><section class=\"row\"><form><input type=\"text\" name=\"name\" value=\"First name, Last name\"/><input type=\"text\" name=\"work\" value=\"Position, Company\"/><input type=\"email\" name=\"email\" value=\"Email\"/><button type=\"submit\"><span class=\"icon-Tick\"></span></button></form></section>");
    $templateCache.put('/angular/jade-html/views/about', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><section class=\"row__landing-page\"><section class=\"about\"><h3 id=\"an-interactive-application-security-library-with-thousands-of-code-samples-and-professional-guidance-when-you-need-it\">An interactive Application Security library with thousands of code samples and professional guidance when you need it</h3> </section><section class=\"about-us\"><h4 id=\"team-mentor-was-created-by-developers-for-developers-using-secure-coding-standards-code-snippets-and-checklists-built-from-10-years-of-targeted-security-assessments-for-fortune-500-organizations-\">TEAM Mentor was created by developers for developers using secure coding standards, code snippets and checklists built from 10+ years of targeted security assessments for Fortune 500 organizations.</h4> <p>It contains thousands of articles with dynamic content across multiple development platforms including .NET, Java, C/C++, PHP, Android and iOS. TEAM Mentor is the In-Practice companion to our <a href=\"https://www.securityinnovation.com/training/application-security/computer-based/\">TEAM Professor eLearning courses</a>, extending developers’ knowledge in combination with training.</p> <p>TEAM Mentor integrates with static analysis tools, such as Checkmarx and Fortify&trade;, helping teams make more sense of scan results and make critical decisions to fix software vulnerabilities.</p> </section><section class=\"call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a href=\"../getting-started/index\" class=\"button half-width\">See for yourself</a></section><footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></footer></section>");
    $templateCache.put('/angular/jade-html/views/alert_application', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><div class=\"alert alert-ok\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Hi</span></div></main></div>");
    $templateCache.put('/angular/jade-html/views/article', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><!--.application--><main><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><section class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><section class=\"row__article\"><h1>\{\{title}}</h1><div id=\"html\" ng-bind-html=\"article_Html\" class=\"article-content\"></div><ul class=\"display-inline\"><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li></ul></section></div><div class=\"col-2\"></div></section><footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></footer></main>");
    $templateCache.put('/angular/jade-html/views/blank', "<!-- this is a blank view--><!-- used for testing (when only the navbar should be visible)-->");
    $templateCache.put('/angular/jade-html/views/curated_content', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><section class=\"row\"><div class=\"col-3\"><dl><dt><div class=\"label\">Curated Content</div><span class=\"sub-nav__icon\"><span class=\"icon-Arrow-Left\"></span></span></dt><dd><a href=\"#\">Item One</a></dd><dd><a href=\"#\">Item Two</a></dd><dd><a href=\"#\">Item Three</a></dd></dl></div><div class=\"col-9\"><section class=\"row\"><span id=\"result_article\"></span></section></div></section></main></div>");
    $templateCache.put('/angular/jade-html/views/curated_content_article', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><div class=\"col-9\"><section class=\"article-body\"><section class=\"row__article\"><h1></h1><!--include:md ../../TM_Static/content/articles/article-new-window.md--><!--#html.article-content!= article_Html--></section></section></div><div class=\"col-3\"><section class=\"article-info\"><section class=\"row__label\"><div class=\"label\">Relates to:</div></section><section class=\"row\"><ul class=\"display-inline\"><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span><span class=\"text\"></span></li><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li><li><span id=\"filter-icon\"><span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span></span></li></ul></section><section class=\"row__label\"><div class=\"label\">Belongs to:</div></section><section class=\"row\"><ul><li><a href=\"/flare/curated-content\"><span class=\"icon-Curated-Content\"></span><span class=\"text\">Curated Content</span></a></li></ul><!--ul.display-inlineli.half-width +save-button li.half-width +share-button --></section></section></div></main></div>");
    $templateCache.put('/angular/jade-html/views/docs', "<!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><!-- Terms and Conditions Navigation--><main ng-controller=\"Help_Controller\" class=\"help\"><section class=\"row\"><div class=\"col-3\"><help-navigation></help-navigation></div><div class=\"col-9\"><article><div id=\"help\"><h1 id=\"help-title\">\{\{title}}</h1><help-content ng-bind-html=\"content\"></help-content></div></article></div></section></main>");
    $templateCache.put('/angular/jade-html/views/error', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><div class=\"application\"><section class=\"row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">You need to login to see that page.</span></div></div><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Thanks for signing up to TEAM Mentor. Please login to access our libraries.</span></div></div><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Your password has been updated. Please login to access our libraries.</span></div></div></section></div>");
    $templateCache.put('/angular/jade-html/views/features', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><section class=\"row__landing-page\"><section class=\"features\"><h2 id=\"team-mentor-provides-intelligence-to-fix-vulnerabilities-and-comply\">TEAM Mentor provides intelligence to fix vulnerabilities and comply</h2> <section class=\"row\"><div class=\"col-3 text-center\"><div class=\"delivers-compliance\"></div></div><div class=\"col-9\"><p>Delivers compliance-specific secure coding guidance for PCI-DSS, OWASP Top 10, CWE and other popular frameworks.</p> </div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"integrates\"></div></div><div class=\"col-9\"><p>Integrates with multiple static analysis tools and developer environments (IDE’s) to map prescriptive coding guidance to scan results to fix vulnerabilities.</p> </div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"cross-references\"></div></div><div class=\"col-9\"><p>Stores and cross-references your security policies with out-of-the-box secure coding checklists and examples.</p> </div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"provides-guidance\"></div></div><div class=\"col-9\"><p>Provides guidance to assist developers in reducing security vulnerabilities in software applications.</p> </div></section></section><section class=\"call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a href=\"../getting-started/index\" class=\"button half-width\">See for yourself</a></section><footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></footer></section>");
    $templateCache.put('/angular/jade-html/views/index', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><section class=\"row__landing-page\"><section class=\"usp\"><h2 id=\"instant-resources-that-bridge-the-gap-between-developer-questions-and-technical-solutions\">Instant resources that bridge the gap between developer questions and technical solutions</h2> <a href=\"get-started\" class=\"button half-width\">Start your free trial today</a></section><section class=\"row reasons\"><h2 id=\"with-team-mentor-you-can-\">With TEAM Mentor, you can...</h2> <section class=\"row\"><div class=\"col-3 text-center\"><div class=\"fix-vulnerabilities\"></div></div><div class=\"col-9\"><p>Fix vulnerabilities quicker than ever before with TEAM Mentor&#39;s seamless integration into a developer&#39;s IDE and daily workflow.</p> </div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"reduce-vulnerabilities\"></div></div><div class=\"col-9\"><p>Reduce the number of vulnerabilities over time as developers learn about each vulnerability at the time it is identified.</p> </div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"improve-process\"></div></div><div class=\"col-9\"><p>Expand the development team&#39;s knowledge and improve processes with access to thousands of specific remediation tactics, including the host organization&#39;s security policies and coding best practices.</p> </div></section></section><section class=\"clients\"><h3 id=\"our-clients-love-us-and-we-think-you-will-too-\">Our clients love us (and we think you will too!)</h3> <img src=\"/assets/clients/flare-logos.jpg\"/></section><section class=\"call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a href=\"../getting-started/index\" class=\"button half-width\">See for yourself</a></section><footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></footer></section>");
    $templateCache.put('/angular/jade-html/views/login', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><!--mixin forgot-pwd-formsection.row__label .label Forgot your password? section.row form#forgot-pwd-form(action='#') section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!--include ../component/login_form.jade--><section class=\"row\"><div class=\"col-4\"><section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></section></section></div><div class=\"col-8\"><section class=\"getting-started\"><login-form></login-form></section></div></section>");
    $templateCache.put('/angular/jade-html/views/main', "<!DOCTYPE html><html lang=\"en\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><html lang=\"en-US\"></html><head><title>TEAM Mentor 4.0</title><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" href=\"/assets/favicons/favicon.ico\"><link href=\"/css/flare-stylesheet.css\" rel=\"stylesheet\"></head><body><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Search_Controller\" class=\"search\"><form ng-submit=\"submit()\"><select><option ng-repeat=\"technology in technologies\" value=\"\{\{technology}}\">\{\{technology}}</option><!--  option(value=\".Net\")= \"Net.....\"--><!--  option(value=\"Java\")= \"abc\"--><!--  option(value=\"php\")= \"php\"--></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"Type keywords here\" class=\"search-input\"><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span></button></form></div><div class=\"application\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><aside id=\"left-nav\" ng-controller=\"User_Navigation_Controller\"><ul><li><div class=\"application-logo\"></div></li><li><a ui-sref=\"main\"><span class=\"icon-home\"></span></a></li><li><a ui-sref=\"navigate\"><span title=\"Index\" class=\"icon-Index\"></span></a></li><li><a ui-sref=\"queries\"><span title=\"Index\" class=\"icon-Index\"></span></a></li><li><a ui-sref=\"docs\"><span title=\"Documentation\" class=\"icon-Info\"></span></a></li><li><a href=\"/angular/guest/index\"><span title=\"Logout\" class=\"icon-Logout\"></span></a><!--a(ui-sref=\"logout\")--></li></ul></aside><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div id=\"right-nav\"></div><main><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Popular Search Terms</div></section><section class=\"row\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article></section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Recently Viewed Articles</div></section><section class=\"row\"><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span></section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Top Articles</div></section><section class=\"row\"><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span><span id=\"result_article\"></span></section></section></main></div></body></html>");
    $templateCache.put('/angular/jade-html/views/navigate', "<main ng-controller=\"Navigate_Controller\"><section class=\"row\"><div class=\"col-3\"><navigate-queries></navigate-queries></div><div class=\"col-9\"><section class=\"row__label\"><div id=\"resultsTitle\" class=\"label no-underline\"># results showing</div></section><!--if resultssection.row__label if results.size() > 25 .label.no-underline#resultsTitle= results.take(25).size() + '/' + results.size() + ' results showing' else .label.no-underline#resultsTitle= results.take(25).size() + ' results showing' ul.display-inline li //a.button.btn-result.icon-Filter(href='#right-nav') aaaaaaa a.button.btn-result.icon-Filter(href='') //li +save-results-button //li +share-results-button--><navigate-results></navigate-results><!--filters--></div></section></main>");
    $templateCache.put('/angular/jade-html/views/new_user_onboard', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div class=\"application\"><section class=\"row\"><div class=\"col-1\"></div><div class=\"col-10\"><section class=\"row__label\"><div class=\"label\">Welcome to TEAM Mentor</div><ul class=\"display-inline\"><li class=\"full-width\"><button>Go to app</button></li></ul></section><section class=\"row\"><article class=\"result\"><div class=\"summary\"><h2>Search</h2><p>TEAM Mentor 4.0 has faster and more reliable search results. Search the database by filter, issue or technology.</p></div></article><article class=\"result\"><div class=\"summary\"><h2>Navigate</h2><p>Not sure where to start? You can browse our index and find groups of articles that cover entire topics.</p></div></article><article class=\"result\"><div class=\"summary\"><h2>Filters</h2><p>Filter your results to find articles that directly relate to you. You can filter by technology, phase and type.</p></div></article></section></div><div class=\"col-1\"></div></section></div>");
    $templateCache.put('/angular/jade-html/views/pwd_forgot', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><!--mixin forgot-pwd-formsection.row__label .label Forgot your password? section.row form#forgot-pwd-form(action='#') section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><section class=\"row\"><div class=\"col-4\"><section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></section></section></div><div class=\"col-8\"><pwd-forgot-form></pwd-forgot-form></div></section>");
    $templateCache.put('/angular/jade-html/views/pwd_reset', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><!--mixin forgot-pwd-formsection.row__label .label Forgot your password? section.row form#forgot-pwd-form(action='#') section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><section class=\"row\"><div class=\"col-4\"><section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></section></section></div><div class=\"col-8\"><div class=\"getting-started\"><!--+alert-pwd-reset-failed--><section class=\"row__label\"><div class=\"label\">Reset your password</div></section><section class=\"row\"><form id=\"password-reset-form\" role=\"form\" method=\"post\" action=\"/flare/user/password-reset\"><section class=\"row\"><div class=\"col-6 input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-6 input-field\"><label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\" value=\"\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><br/><button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button></div></section></form></section></div></div></section>");
    $templateCache.put('/angular/jade-html/views/pwd_sent', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><!--mixin forgot-pwd-formsection.row__label .label Forgot your password? section.row form#forgot-pwd-form(action='#') section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><section class=\"row\"><div class=\"col-4\"><section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></section></section></div><div class=\"col-8\"><section class=\"getting-started\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div><login-form></login-form></section></div></section>");
    $templateCache.put('/angular/jade-html/views/search', "<!DOCTYPE html><html lang=\"en\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><html lang=\"en-US\"></html><head><title>TEAM Mentor 4.0</title><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" href=\"/assets/favicons/favicon.ico\"><link href=\"/css/flare-stylesheet.css\" rel=\"stylesheet\"></head><body><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Search_Controller\" class=\"search\"><form ng-submit=\"submit()\"><select><option ng-repeat=\"technology in technologies\" value=\"\{\{technology}}\">\{\{technology}}</option><!--  option(value=\".Net\")= \"Net.....\"--><!--  option(value=\"Java\")= \"abc\"--><!--  option(value=\"php\")= \"php\"--></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"Type keywords here\" class=\"search-input\"><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span></button></form></div><div class=\"application\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><aside id=\"left-nav\" ng-controller=\"User_Navigation_Controller\"><ul><li><div class=\"application-logo\"></div></li><li><a ui-sref=\"main\"><span class=\"icon-home\"></span></a></li><li><a ui-sref=\"navigate\"><span title=\"Index\" class=\"icon-Index\"></span></a></li><li><a ui-sref=\"queries\"><span title=\"Index\" class=\"icon-Index\"></span></a></li><li><a ui-sref=\"docs\"><span title=\"Documentation\" class=\"icon-Info\"></span></a></li><li><a href=\"/angular/guest/index\"><span title=\"Logout\" class=\"icon-Logout\"></span></a><!--a(ui-sref=\"logout\")--></li></ul></aside><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div id=\"right-nav\"></div><main><section class=\"row__label\"><div id=\"resultsTitle\" class=\"label no-underline\"># results showing</div></section><!--if resultssection.row__label if results.size() > 25 .label.no-underline#resultsTitle= results.take(25).size() + '/' + results.size() + ' results showing' else .label.no-underline#resultsTitle= results.take(25).size() + ' results showing' ul.display-inline li //a.button.btn-result.icon-Filter(href='#right-nav') aaaaaaa a.button.btn-result.icon-Filter(href='') //li +save-results-button //li +share-results-button--><section class=\"row\"><span id=\"result_article\"></span></section></main></div></body></html>");
    $templateCache.put('/angular/jade-html/views/sign_up', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><!--mixin forgot-pwd-formsection.row__label .label Forgot your password? section.row form#forgot-pwd-form(action='#') section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!--include ../component/login_form.jade--><section class=\"row\"><div class=\"col-4\"><section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></section></section></div><div class=\"col-8\"><section class=\"getting-started\"><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><section class=\"row__label\"><div class=\"label\">Sign Up</div></section><section class=\"row\"><form id=\"sign-up-form\" action=\"/flare/user/sign-up\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/></div><div class=\"input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\" value=\"\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\" value=\"\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" name=\"firstName\" placeholder=\"First Name\" value=\"\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" name=\"lastname\" placeholder=\"Last Name\" value=\"\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label>Company</label><input type=\"text\" id=\"company\" placeholder=\"Company\"/></div><div class=\"input-field\"><label>Title</label><input type=\"text\" id=\"title\" placeholder=\"Title\"/></div><div class=\"input-field\"><label for=\"country\">Country</label><input type=\"text\" id=\"country\" name=\"country\" placeholder=\"Country\" value=\"\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"state\">State</label><input type=\"text\" id=\"state\" name=\"state\" placeholder=\"state\" value=\"\" maxlength=\"100\"/></div><div class=\"conditions\"><p>By signing up, you agree to our <a href=\"/misc/terms-and-conditions\">Terms and Conditions</a>.</p> </div><div class=\"button-field\"><button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button></div></form></section></section></div></section>");
    $templateCache.put('/angular/jade-html/views/terms_and_conditions', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Terms and Conditions Navigation--><div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><section class=\"row\"><div class=\"col-3\"><dl><dt><div class=\"label no-underline\">Terms & Conditions</div></dt><div class=\"scroll\"><dd><a href=\"#article-i-definitions\">Article I - Definitions</a></dd><dd><a href=\"#article-ii-deliverables\">Article II - Deliverables</a></dd><dd><a href=\"#article-iii-license-grant\">Article III - License Grant</a></dd><dd><a href=\"#article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</a></dd><dd><a href=\"#article-v-trademarks\">Article V - Trademarks</a></dd><dd><a href=\"#article-vi-support\">Article VI - Support</a></dd><dd><a href=\"#article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</a></dd><dd><a href=\"#article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</a></dd><dd><a href=\"#article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</a></dd><dd><a href=\"#article-x-assignment\">Article X - Assignment</a></dd><dd><a href=\"#article-xi-confidentiality\">Article XI - Confidentiality</a></dd><dd><a href=\"#article-xii-warranties\">Article XII - Warranties</a></dd><dd><a href=\"#article-xiii-indemnities\">Article XIII - Indemnities</a></dd><dd><a href=\"#article-xiv-limitations\">Article XIV - Limitations</a></dd><dd><a href=\"#article-xv-term-of-agreement\">Article XV - Term of Agreement</a></dd><dd><a href=\"#article-xvi-termination\">Article XVI - Termination</a></dd><dd><a href=\"#article-xvii-effect-of-termination\">Article XVII - Effect of Termination</a></dd><dd><a href=\"#article-xviii-general-provisions\">Article XVIII - General Provisions</a></dd></div></dl></div><div class=\"col-9\"><section class=\"row\"><article><h2 id=\"software-product-license-agreement\">Software Product License Agreement</h2> <h3 id=\"important-information-please-read-carefully\">Important Information - Please Read Carefully</h3> <p>This Security Innovation (“Security Innovation”) software or software application contains computer programs and other proprietary material and information, the use of which is subject to and expressly conditioned upon acceptance of this License (the “License”).</p> <p>This License is a legally binding document between you (meaning the individual person or the entity that the individual represents that has obtained the Software for its internal productive use and not for outright resale) (the “Customer”) and Security Innovation.  Unless agrees otherwise in writing, this License governs Customer&#39;s use of the software or software application.</p> <p>By proceeding with the user registration, installation, downloading, use or reproduction of this software or software application, or authorizing any other person to do so, you are representing to Security Innovation that you are (i) authorized to bind the Customer; and (ii) agreeing on behalf of the Customer that the terms of this License shall govern your relationship with Security Innovation with regard to the subject matter in this License and are waiving any rights, to the maximum extent permitted by applicable law, to any claim anywhere in the world concerning the enforceability or validity of this License.</p> <p>If you do not have authority to agree to the terms of this License on behalf of the Customer, or do not accept the terms of this License on behalf of the Customer, immediately cease any further attempt to install, download or use this software or software application for any purpose, and remove any partial or full copies made thereof.</p> <h4 id=\"article-i-definitions\">Article I - Definitions</h4> <p>For the purposes of this Agreement, the following words and phrases shall have the following meanings:</p> <p>1.1 “Affiliate” means any corporation, company, partnership, joint venture, firm and/or entity which controls, is controlled by or is under common control with Licensee.</p> <p>1.2    “Confidential Information” means all materials, trade secrets, or other information regarding a party’s technology, products, business information, or objectives which is designated as confidential in writing by the disclosing party, whether by letter or by the use of an appropriate stamp or legend, prior to or at the time any such material, trade secret, or other information is disclosed by the disclosing party to the other party. Notwithstanding the foregoing to the contrary: (a) materials, trade secrets, or other information which is orally, electronically or visually disclosed by a party, or is disclosed in writing without an appropriate letter, stamp, or legend, shall constitute Confidential Information if the disclosing party, within thirty (30) days after such disclosure, delivers to the other party a written document or document describing the materials, trade secrets, or other information and referencing the place and date of such oral, electronic, visual or written disclosure and the names of the person or persons to whom such disclosure was made; and (b) information obtained by either party while visiting the other party’s facility, however obtained, shall constitute Confidential Information of the other Party.</p> <p>1.3    “Deliverables” means the items listed in an Order to be delivered by Security Innovation to Licensee pursuant to Article II of this Agreement.</p> <p>1.4    &quot;End User&quot; means a direct employee or affiliate employee of Licensee who consumes paid for Licensed Security Innovation Product, or an individual who purchases and consumes Licensed Security Innovation Product, for use within the bounds of this agreement.</p> <p>1.5     “Licensee” means the organization or individual with a paid up and active subscription to the Security Innovation Product.</p> <p>1.6    &quot;Security Innovation Product&quot; means Security Innovation&#39;s proprietary multimedia training and reference systems and includes Security Innovation proprietary content and the software delivery system including, but not limited to: Safelight, PCI Essentials, TEAM Professor, TEAM Mentor and TEAM Academy.</p> <p>1.7    “Internal” means within the Licensee organization and not part of a public or external event where the Security Innovation Product is used to train individuals who are not End-Users.</p> <p>1.8    “Permitted use” means the following application usage activities:</p> <ul> <li>(a) Internal training of Licensee employees</li> <li>(b) Internal training of Licensee affiliates</li> <li>(c) For training a Licensee</li> </ul> <p>1.9    “On-Site” means Security Innovation Product is installed at the Licensee’s facilities in a private Learning Management System (LMS).</p> <p>1.10    “Hosted” means Security Innovation Product and student data is held on and delivered from the Security Innovation secure online LMS.</p> <p>1.11    “Subscription” means an annually renewable license for a specific number of End-Users and specified Content, Hosted or On-Site, for a fixed fee. A subscription includes maintenance and support, but not installation or customization costs, as part of the annual fixed fee.</p> <p>1.12    “Enterprise” means an annually renewable license for an unlimited number of End-Users and specified Content, Hosted or On-Site, within an organization for an annual fixed-fee, not including installation or customization costs.</p> <p>1.13    “Order” means a purchase order, signed sales proposal, e-Commerce transaction, or other ordering document issued by Licensee or individual to Security Innovation, its distributors, resellers or other agents, and describing the quantity and type of Security Innovation Product.</p> <p>1.14    “Effective Date” means the date the Order takes place.</p> <h4 id=\"article-ii-deliverables\">Article II - Deliverables</h4> <h5 id=\"2-1-delivery\">2.1    Delivery</h5> <p>Within 30 days following the later of the Effective Date and receipt of any agreed upon initial payments by Licensee pursuant to Section 7.1, Security Innovation shall provide the Deliverables to Licensee.</p> <h4 id=\"article-iii-license-grant\">Article III - License Grant</h4> <h5 id=\"3-1-licenses\">3.1    Licenses</h5> <p>Subject to the terms and conditions of this Agreement, Security Innovation hereby grants to the Licensee a worldwide, nonexclusive, non-transferable, license:</p> <ul> <li>(a) To use the Security Innovation Product internally on Licensee’s LMS to train End Users or;</li> <li>(b) To use the software internally via Security Innovation’s secure online LMS to train End Users or;</li> <li>(c) To use the Security Innovation Product personally</li> </ul> <h5 id=\"3-2-no-other-rights\">3.2    No Other Rights</h5> <p>Licensee hereby acknowledges that it shall have no right to sell, convey, transfer, license, sublicense, modify, or otherwise dispose of Security Innovation Product, except as provided herein.  Licensee further acknowledges that its rights are limited to those of a licensee only, and that:</p> <ul> <li>(i) Security Innovation retains all title to and intellectual property rights in the Security Innovation Product;</li> <li>(ii) nothing herein shall be construed as granting Licensee any right, title and interest other than as specifically set forth herein; and</li> <li>(iii) nothing herein shall be construed as granting any group, division or Affiliate of Licensee any right, title and interest or license to use Security Innovation Product.</li> </ul> <h5 id=\"3-3-license-limitations\">3.3    License Limitations</h5> <p>The licenses granted in Section 3.1 are subject to the following additional limitations:</p> <ul> <li>(a) Licensee may not in any way sell, lease, rent, license, sublicense or otherwise distribute the Security Innovation Product or any part thereof or the right to use any part of the Security Innovation Product to any person or entity</li> <li>(b) Without Security Innovation’s prior written consent, Licensee shall not modify, translate, reverse engineer, decompile, disassemble or recreate the Security Innovation Product or any part thereof, and shall prohibit End Users from doing the same.</li> <li>(c) The licenses granted herein do not permit Licensee to provide services to third parties utilizing Licensee Products or the Security Innovation Product.</li> </ul> <h5 id=\"3-4-third-party-agents\">3.4    Third Party Agents</h5> <p>Under the License granted in this Article III (License Grant), Licensee may permit its Third Party Agents to be treated as an End User and use the Software provided that Licensee will be fully responsible for its Third Party Agents’ compliance with terms and conditions of this Agreement and any breach of this Agreement by a Third Party Agent shall be deemed to be a breach by Licensee.</p> <h4 id=\"article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</h4> <h5 id=\"4-1-ownership\">4.1    Ownership</h5> <p>With respect to the intellectual property of Security Innovation and Licensee relating to this Agreement:</p> <ul> <li>(a) any intellectual property developed by Security Innovation or Licensee prior to the Effective Date shall remain the intellectual property of that party.</li> <li>(b) any intellectual property that is developed solely by Security Innovation, and relevant to the scope of this Agreement (including, without limitation, the Security Innovation Product) shall remain the intellectual property of Security Innovation.</li> </ul> <h4 id=\"article-v-trademarks\">Article V - Trademarks</h4> <h5 id=\"5-1-use-of-security-innovation-trademarks\">5.1 Use of Security Innovation Trademarks</h5> <p>Security Innovation hereby grants to Licensee a non-exclusive, limited license to use the applicable Security Innovation trademarks and logos (“Trademarks”) solely as permitted in this Agreement.  Licensee understands and agrees that the use of any Trademark in connection with this Agreement shall not create any right, title or interest, in or to the use of the Trademark and that all such use and goodwill associated with the Trademark will inure to the benefit of Security Innovation.  Licensee agrees not to register or attempt to register any Security Innovation Trademarks. All trademarks, service marks, trade names, logos, or other words or symbols identifying or associated with the Software or the business of Security Innovation (“Marks”) remain the exclusive property of Security Innovation and its Licensors. Licensee will not do anything to impair those proprietary rights or seek to acquire or register any rights in the Marks or use any trademarks, service marks, trade names, logos or other words or symbols that are confusingly similar to the Marks in any language.</p> <h4 id=\"article-vi-support\">Article VI - Support</h4> <h5 id=\"6-1-technical-support-and-maintenance\">6.1    Technical Support and Maintenance</h5> <p>Security Innovation shall provide support and maintenance services specified in the Security Innovation Service Level Agreement (SLA).</p> <h4 id=\"article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</h4> <p>In consideration of the licenses granted by Security Innovation and the Support Services provided by Security Innovation to Licensee in this Agreement, Licensee agrees to pay to Security Innovation a license fee as follows:</p> <h5 id=\"7-1-license-fee\">7.1    License Fee</h5> <p>In consideration of Security Innovation&#39;s delivery of the Deliverables, Licensee agrees to pay to Security Innovation a license fee as defined in the Order.</p> <h5 id=\"7-2-taxes\">7.2    Taxes</h5> <p>Licensee will pay all government taxes, duties and tariffs not based on either Security Innovation&#39;s net income from all sources or Security Innovation&#39;s aggregate net worth, including, but not limited to, sales, use, transfer, value-added, privilege, property taxes, import and export duties or tariffs, or amounts levied in lieu thereof, based on charges payable under this Agreement whether such taxes and duties are now or hereafter imposed under the authority of any federal, state, local or other taxing jurisdiction.  Licensee will comply with all requirements of the laws imposing such taxes and duties, including, without limitation, paying any interest or penalties relating to such taxes and duties.  If applicable, Licensee will provide Security Innovation with a Certificate of Exemption issued pursuant to such laws.</p> <h4 id=\"article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</h4> <h5 id=\"8-1-records\">8.1    Records</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, Licensee shall keep all records of account as are necessary to demonstrate compliance with its obligations under Article VIII for a period of three years from the due date for the payment of such sums as are payable in accordance with Article VIII (the “Audit period.”).</p> <h5 id=\"8-2-reports\">8.2    Reports</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, within thirty (30) days after the last business day of each calendar quarter, Licensee shall provide Security Innovation with a written user count report should the user count exceed the count purchased by Licensee. Such report, at a minimum, shall contain information detailing the number of users and the number of courses consumed.</p> <h5 id=\"8-3-audit-rights\">8.3    Audit Rights</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, to assure compliance with the payment and reporting requirements of this Agreement, Security Innovation or an independent auditor of its choosing may examine, inspect and audit the applicable records of Licensee and its Affiliates from time to time, but no more frequently than twice per year.  In the event any such audit of Licensee’s records indicates an underpayment of an amount equal to or greater than five percent (5%) of any amounts due hereunder, Licensee shall promptly reimburse Security Innovation for the costs of such audit.  Licensee and its Affiliates shall also immediately pay any underpayment in the amounts due to Security Innovation ascertained from such audit.  The provisions of this Section shall survive expiration or termination of this Agreement.</p> <h4 id=\"article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</h4> <h5 id=\"9-1-non-electronic-notices\">9.1    Non-Electronic Notices</h5> <p>Any notice or other non-electronic communication pursuant to this Agreement shall be sent to such party by overnight courier, or regular mail, addressed to the address below or as it shall designate by written notice given to the other party. Any such communication shall be effective upon receipt by the party to whom it is addressed.</p> <p>Notices to Security Innovation shall be addressed to:</p> <pre><code>SECURITY INNOVATION, Inc. 187 Ballardvale St, Suite A202 Wilmington, MA  01887 USA Attn: Ombudsman </code></pre><h5 id=\"9-2-electronic-notices\">9.2    Electronic Notices</h5> <p>Any notice or electronic communication pursuant to this agreement shall be sent containing an appropriate and correctly attached digital certificate identifying the sender in non-repudiable terms to:</p> <pre><code>ombudsman@securityinnovation.com </code></pre><h4 id=\"article-x-assignment\">Article X - Assignment</h4> <h5 id=\"10-1-assignment\">10.1    Assignment</h5> <p>This Agreement and the license contained herein are personal to Licensee and may not be assigned or transferred by Licensee, without the prior written consent of Security Innovation.  For purposes hereof, an “assignment” shall include any change in control of Licensee whereby another person or entity acquires 50% or greater ownership of Licensee.  For the avoidance of doubt, reassignment assumes changes to the relevant user data used to identify students, the changing of which must be managed by Security Innovation so as to not interrupt service.</p> <h4 id=\"article-xi-confidentiality\">Article XI - Confidentiality</h4> <h5 id=\"11-1-treatment-of-confidential-information\">11.1    Treatment of Confidential Information</h5> <p>Each party hereto shall maintain the Confidential Information of the other party in confidence, and shall not disclose, divulge, or otherwise communicate such Confidential Information, including but not limited to the terms of this Agreement, to others, or use it for any purpose, except pursuant to, and in order to carry out, the terms and objectives of this Agreement or the written consent of the other party. Each party hereby agrees to exercise every reasonable precaution to prevent and restrain the unauthorized disclosure of such Confidential Information by any of its directors, officers, employees, consultants, subcontractors, licensees, or agents.</p> <h5 id=\"11-2-release-from-restrictions\">11.2    Release from Restrictions</h5> <p>The provisions of Section 11.1 shall not apply to Confidential Information disclosed hereunder which;</p> <ul> <li>(a) was known or used by the receiving party prior to its date of disclosure to the receiving party; or</li> <li>(b) either before or after the date of disclosure to the receiving party is lawfully disclosed to the receiving party by sources rightfully in possession of such Confidential Information other than the disclosing party; or</li> <li>(c) either before or after the date of disclosure to the receiving party, becomes published or generally known to the public, through no fault of the receiving party, its Affiliates or sub-licensees; or</li> <li>(d) is required to be disclosed by the receiving party to comply with applicable laws or applicable rules of any securities exchange on which the receiving party’s securities are traded, to defend or prosecute litigation, or to comply with governmental regulations, provided however that the receiving party provides prior written notice of such disclosure to the other party and takes reasonable and lawful actions to avoid and/or minimize the degree of such disclosure.</li> </ul> <h4 id=\"article-xii-warranties\">Article XII - Warranties</h4> <h5 id=\"12-1-representations-and-warranties-of-security-innovation\">12.1    Representations and Warranties of Security Innovation</h5> <ul> <li>(a) Security Innovation represents and warrants to Licensee that all corporate action on the part of Security Innovation, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Security Innovation hereunder has been taken and this Agreement constitutes the legal and binding obligation of Security Innovation, enforceable against Security Innovation in accordance with its terms.</li> <li>(b) Security Innovation further represents and warrants to Licensee that:  (i) it has sufficient right, title and interest in the Security Innovation Product to enter into this Agreement; and (ii) the Security Innovation Product is the original work of Security Innovation and its licensors and was developed without unauthorized access to or knowledge of any third party confidential materials.</li> <li>(c) THE SECURITY INNOVATION PRODUCT AND THE DELIVERABLES ARE PROVIDED AS IS.  SECURITY INNOVATION DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS OR IMPLIED WITH RESPECT TO THE SECURITY INNOVATION PRODUCT OR THE DELIVERABLES.</li> </ul> <h5 id=\"12-2-representations-and-warranties-of-licensee\">12.2    Representations and Warranties of Licensee</h5> <p>Licensee represents and warrants to Security Innovation that all corporate action on the part of Licensee, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Licensee hereunder has been taken and this Agreement constitutes the legal and binding obligation of Licensee, enforceable against Licensee in accordance with its terms. The execution of this Agreement and the performance of the transactions contemplated by this Agreement by Licensee will not conflict with or result in a breach of any of the terms, conditions or provisions of, or constitute a default under, or require a consent under its Certificate of Incorporation or Bylaws (as amended or restated to date) or any agreement or other instrument to which Licensee is a party or by which it or any of its property is bound.</p> <h4 id=\"article-xiii-indemnities\">Article XIII - Indemnities</h4> <h5 id=\"13-1-infringement-indemnification-by-security-innovation\">13.1    Infringement Indemnification by Security Innovation</h5> <p>Security Innovation agrees that it shall, at its own expense, defend, or at its option settle, any action or claim instituted against Licensee, and pay any award or damages assessed or settled upon against Licensee resulting from such action or claim, insofar as the same is based upon a claim that the Security Innovation Product as delivered to Licensee infringes any patent, trademark, copyright or trade secret of a third party or a claim that Security Innovation has no right to license the Security Innovation Product to Licensee hereunder.  Such obligation is subject to the following conditions:  (i) Licensee shall notify Security Innovation in writing immediately after Licensee first becomes aware of a claim; (ii) Security Innovation shall have the right to control and direct the investigation, preparation, defense and settlement of the action; and (iii) Licensee shall give Security Innovation all reasonably available information, assistance and authority.  The foregoing indemnity shall not apply if the alleged infringement claim arises from use of other than the current unaltered release of the Security Innovation Product, or combination of the Security Innovation Product with other software or hardware not provided by Security Innovation, if such action would have been avoided but for such use or combination.</p> <h5 id=\"13-2-exclusive-sole-remedy\">13.2.    Exclusive Sole Remedy</h5> <p>If as a result of any binding settlement among the parties or a final determination by a court of competent jurisdiction, the Security Innovation Product is held to infringe a third party’s patent, trademark, copyright or trade secret and its use is enjoined, or if Security Innovation reasonably determines in its sole discretion that the Software may become subject to an injunction, Security Innovation shall have the option to:  (a) obtain for Licensee the right to continued use of the Security Innovation Product;  (b) replace or modify the Security Innovation Product so it is no longer infringing and is substantially similar in functionality to the enjoined Security Innovation Product; or (c)  refund the license fees paid by Licensee hereunder less depreciation for use assuming straight line depreciation over a five year useful life and terminate this Agreement.   NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, THE FOREGOING STATES SECURITY INNOVATION&#39;S ENTIRE LIABILITY AND LICENSEE&#39;S SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO CLAIMS OF INFRINGEMENT OF THIRD PARTY PROPRIETARY OR INTELLECTUAL PROPERTY RIGHTS OF ANY KIND, AND SECURITY INNOVATION EXPRESSLY DISCLAIMS ANY IMPLIED WARRANTY OF NON-INFRINGEMENT.</p> <h4 id=\"article-xiv-limitations\">Article XIV - Limitations</h4> <h5 id=\"14-1-limitation-of-liability\">14.1.    Limitation of Liability</h5> <ul> <li>(a) Nothing in this Agreement shall exclude or limit liability for death or personal injury resulting from the failure of a party to exercise reasonable care in the performance of its obligations under this Agreement.</li> <li>(b) THE AGGREGATE LIABILITY OF SECURITY INNOVATION UNDER ANY CLAIMS ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE PERFORMANCE OF THEIR OBLIGATIONS UNDER THIS AGREEMENT (WHETHER IN CONTRACT, TORT, NEGLIGENCE, WARRANTY OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT THEN PAYABLE TO SECURITY INNOVATION BY LICENSEE UNDER THIS AGREEMENT.</li> </ul> <h5 id=\"14-2-limitation-of-damages\">14.2    Limitation of Damages</h5> <p>IN ANY EVENT, NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY ECONOMIC LOSS OR FOR SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, REGARDLESS OF THE FORM OF ACTION, EVEN IF SUCH PARTY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p> <h4 id=\"article-xv-term-of-agreement\">Article XV - Term of Agreement</h4> <h5 id=\"15-1-term\">15.1    Term</h5> <p>This Agreement shall be effective as of the Effective Date. Unless earlier terminated upon the mutual agreement of the Parties or in accordance with the provisions of Article XVI, or otherwise specified in the Order, this Agreement shall continue in force for one (1) year from the Effective Date.</p> <h4 id=\"article-xvi-termination\">Article XVI - Termination</h4> <h5 id=\"16-1-termination-for-insolvency\">16.1    Termination for Insolvency</h5> <p>If Licensee shall cease to carry on its business for any reason, be liquidated or dissolved, become insolvent, enter into an agreement for the benefit of its creditors, or file any petition or case under any bankruptcy law or if any such petition or case is filed against it which remains undismissed after sixty (60) days, then this Agreement and all rights, privileges and license granted hereunder shall terminate.</p> <h5 id=\"16-2-termination-for-breach\">16.2    Termination for Breach</h5> <p>Upon any material breach or default of this Agreement by either party, the non-breaching party shall have the right to terminate this Agreement upon forty-five (45) days’ written notice to the breaching party, unless the breaching party shall have cured any such breach or default prior to the expiration of such sixty (60) day period.</p> <h4 id=\"article-xvii-effect-of-termination\">Article XVII - Effect of Termination</h4> <h5 id=\"17-1-consequences-of-termination\">17.1    Consequences of Termination</h5> <p>Upon termination of this Agreement for any reason, all rights, privileges and licenses granted hereunder shall immediately cease, provided, however, that nothing herein shall be construed to release either party from any obligation that accrued or matured prior to the effective date of such termination.  Upon termination of this Agreement for any reason, Licensee agrees to immediately cease use of all Security Innovation Product and to cease use of all Confidential Information of Security Innovation, and to return all Confidential Information of Security Innovation to Security Innovation.</p> <p>Any termination or expiration of this Agreement shall not affect any accrued rights or liabilities of either party. The obligations of each party under Sections 4, 5, 8, 10, 11, 13, 14, 16, 17 and 18 shall survive termination or expiration of this agreement.</p> <h4 id=\"article-xviii-general-provisions\">Article XVIII - General Provisions</h4> <h5 id=\"18-1-governing-law\">18.1    Governing Law</h5> <p>This Agreement shall be construed, governed, interpreted and applied in accordance with the laws of the Commonwealth of Massachusetts, United States of America and the federal laws of the United States, without giving effect to any conflict of laws principles.</p> <h5 id=\"18-2-injunctive-relief\">18.2    Injunctive Relief</h5> <p>It is expressly agreed that a material breach of this Agreement will cause irreparable harm to Security Innovation and that a remedy at law would be inadequate.  Therefore, in addition to any and all remedies available at law, Security Innovation and/or Security Innovation Licensors shall be entitled to seek injunctive relief against Licensee in the event of any threatened or actual violation of any or all provisions in this Agreement.</p> <h5 id=\"18-3-severability\">18.3    Severability</h5> <p>The provisions of this Agreement are severable, and in the event that any provisions of this Agreement shall be determined to be invalid or unenforceable under any controlling body of the law, such invalidity or unenforceability shall not in any way affect the validity or enforceability of the remaining provisions hereof.</p> <h5 id=\"18-4-no-waiver\">18.4    No Waiver</h5> <p>The failure of either party to assert a right hereunder or to insist upon compliance with any term or condition of this Agreement shall not constitute a waiver of that right or excuse a similar subsequent failure to perform any such term or condition by the other Party.</p> <h5 id=\"18-5-u-s-government-restricted-rights\">18.5 U.S. GOVERNMENT RESTRICTED RIGHTS</h5> <p>If the Security Innovation Product is acquired on behalf of a unit or agency of the United States Government this provision applies.</p> <p>For units of the Department of Defense (DoD), this Software is supplied only with “Restricted Rights” as that term is defined in the DoD Supplement to the Federal Acquisition Regulations, 52.227-7013(c)(1)(ii) and:</p> <pre><code>Use, duplication or disclosure by the Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 52.227-7013. Contractor: SECURITY INNOVATION, Inc., 187 Ballardvale Street, Suite 202, Wilmington, MA 01887 </code></pre><p>Government personnel using this Software, other than under a DoD contract or GSA Schedule, are hereby on notice that use of this Software is subject to restricted rights, which are the same as, or similar to those specified above.</p> <h5 id=\"18-6-export-controls\">18.6    Export Controls</h5> <ul> <li>(a) The Security Innovation Products are eligible for (and are being exported under) License Exception ENC of the Export Administration Regulations C.F.R. 740.17 and Security Innovation have submitted all notifications required to establish such eligibility.  Licensee agrees to make only such uses of the Security Innovation Products, as are in compliance with that status. Without limiting the forgoing, Licensee agrees: (i) not to develop any foreign products using the [Security Innovation Product(s)]; and (ii) not to modify the Security Innovation Products, in such a way as to add or substitute cryptographic algorithms or otherwise modify the encryption functionality of such products.</li> <li>(b) Licensee shall not re-export any Security Innovation Product to any destination or end user in violation of any acceptable laws or regulations of the United States government.  Licensee shall be solely responsible for compliance with all such laws and regulations and for obtaining any and all export or import licenses or permits that may be required from Licensee to lawfully conduct its business with respect to the Security Innovation Products,</li> <li>(c) Licensee shall obtain all necessary licenses and authorizations for governments or other relevant bodies to enable Licensee to fulfill its obligations under this Agreement, which shall include, but not be limited to, customs clearances, registration of the Agreement if appropriate, export licenses, exchange control clearances, trading permits and registration for Value Added Tax (VAT) or its equivalent.</li> </ul> <h5 id=\"18-7-no-use-of-names\">18.7    No Use of Names</h5> <p>Except as expressly permitted by this Agreement, neither party shall use the name of the other party or any of its employees nor any adaptation thereof in any advertising, promotion or sales literature without the prior written consent of the other party.</p> <h5 id=\"18-8-no-agency\">18.8    No Agency</h5> <p>Nothing herein shall be deemed to constitute Security Innovation, on the one hand, or Licensee, on the other hand, as the agent or representative of the other, or as joint venturers or partners for any purpose.</p> <h5 id=\"18-9-headings\">18.9    Headings</h5> <p>The headings contained in this Agreement are for convenience of reference only and shall not be considered in construing this Agreement.</p> <h5 id=\"18-10-successors-and-assigns\">18.10    Successors and Assigns</h5> <p>This Agreement shall be binding upon and inure to the benefit of the Parties and their successors and permitted assigns.</p> <h5 id=\"18-11-third-party-rights\">18.11    Third Party Rights</h5> <p>Other than as expressly set out in this Agreement, this Agreement does not create any rights for any person who is not a party to it, and no person who is not a party to this Agreement may enforce any of its terms or rely on any exclusion or limitation contained in it.</p> <h5 id=\"18-12-counterparts\">18.12    Counterparts</h5> <p>This Agreement may be executed in any number of counterparts, each of which shall be deemed an original but all of such together shall constitute one and the same instrument.</p> <h5 id=\"18-13-force-majeure\">18.13    Force Majeure</h5> <p>Neither party shall be liable hereunder by reason of any failure or delay in the performance of its obligations hereunder (except for the payment of money) on account of strikes, shortages, failure of suppliers, riots, insurrection, fires, floods, storms, earthquakes, acts of God, war, governmental action, labor conditions, or any other cause which is beyond the reasonable control of such party.  If such failure or delay continues for at least ninety (90) days, the party not subject to the force majeure shall be entitled to terminate this Agreement by notice in writing to the other.</p> <h5 id=\"18-14-entire-agreement\">18.14 Entire Agreement</h5> <p>The parties acknowledge that this Agreement sets forth the entire Agreement and understanding of the parties as to the subject matter hereof and this Agreement shall not be subject to any change or modification except by the execution of a written instrument executed by both parties.</p> </article></section></div></section></main></div>");
    $templateCache.put('/angular/jade-html/views/user/queries', "<!--.application--><main><section class=\"row\"><div class=\"col-3\"><queries></queries></div><div class=\"col-9\"><queries_breadcrumbs></queries_breadcrumbs><articles></articles></div></section></main>");
    return $templateCache.put('/angular/jade-html/views/user', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><!-- Getting Started--><!-- User Inputs--><!-- Editor Inputs--><div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><section class=\"row\"><div class=\"col-3\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><section class=\"row__label\"><div class=\"label\">@username</div></section><section class=\"row\"><form><input type=\"text\" name=\"name\" value=\"First name, Last name\"/><input type=\"text\" name=\"work\" value=\"Position, Company\"/><input type=\"email\" name=\"email\" value=\"Email\"/><button type=\"submit\"><span class=\"icon-Tick\"></span></button></form></section></div><div class=\"col-9\"><section class=\"row__label\"><div class=\"label\">Saved Items</div><ul class=\"display-inline\"><li><a href=\"\" class=\"button btn-result icon-Filter\"></a></li><li><button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button></li><li><button title=\"Share results\" class=\"btn-result icon-Share\"></button></li></ul></section><section class=\"row\"><!-- Application Icons--><!--mixin filter-icon--><!--  span.icon-Filter--><!-- Filter Icons--><!-- filter icons--><article class=\"search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></article><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></section><section class=\"row\"><article class=\"result\"><div class=\"metadata\"><ul><li><br/></li><!--li+filter-icon('Type', result.type)--><!--li+filter-icon('Phase', result.phase)--><!--li+filter-icon('Technology', result.technology)--></ul></div><div class=\"summary\"><a href=\"#\"><h3 id=\"article-headline\">Article Headline</h3></a><p>Article Summary</p><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></div></article></section><footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></footer></div></section></main></div>");
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.run(function($templateCache, $browser) {
    if ($browser.isMock === false) {
      console.log('Since we are running in a real browser, removing all template caches (for now)');
      return $templateCache.removeAll();
    }
  });

}).call(this);

(function() {
  var expect,
    hasProp = {}.hasOwnProperty;

  expect = chai.expect;

  Array.prototype.first = function() {
    return this.item(0);
  };

  Array.prototype.item = function(index) {
    if (typeof index === 'number') {
      if ((this.length > index && index > -1)) {
        return this[index];
      }
    }
    return null;
  };

  Array.prototype.size = function() {
    return this.length;
  };

  Array.prototype.take = function(size) {
    if (size === -1) {
      return this;
    } else {
      return this.slice(0, size);
    }
  };

  String.prototype.remove = function(value) {
    var result;
    result = this;
    while (result.contains(value)) {
      result = result.replace(value, '');
    }
    return result;
  };

  String.prototype.contains = function(value) {
    var i, item, len, regex;
    if (value instanceof RegExp) {
      regex = new RegExp(value);
      return regex.exec(this) !== null;
    }
    if (value instanceof Array) {
      for (i = 0, len = value.length; i < len; i++) {
        item = value[i];
        if (this.indexOf(item) === -1) {
          return false;
        }
      }
      return true;
    }
    return this.indexOf(value) > -1;
  };

  String.prototype.upper_Case_First_Letter = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  Object.defineProperty(Object.prototype, 'keys', {
    enumerable: false,
    writable: true,
    value: function() {
      var key;
      return (function() {
        var results;
        results = [];
        for (key in this) {
          if (!hasProp.call(this, key)) continue;
          results.push(key);
        }
        return results;
      }).call(this);
    }
  });

  Object.defineProperty(Object.prototype, 'assert_Is', {
    enumerable: false,
    writable: true,
    value: function(target) {
      expect(this).to.deep.equal(target);
      return this;
    }
  });

  String.prototype.assert_Is = function(target, message) {
    expect(this.toString()).to.equal(target, message);
    return this;
  };

  Number.prototype.assert_Is = function(target, message) {
    expect(this.toString()).to.equal(target.toString(), message);
    return this;
  };

}).call(this);

(function() {
  angular.module('TM_App').controller('Article_Controller', function($sce, $scope, $stateParams, TM_API, icon_Service) {
    return TM_API.article($stateParams.article_Id, function(article) {
      var id, title;
      id = article.id.remove('article-');
      title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
      article.url = '/angular/user/article/' + id + '/' + title;
      $scope.article = article;
      $scope.article_Html = $sce.trustAsHtml(article.article_Html);
      $scope.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
      $scope.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
      return $scope.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Articles_Controller', function($scope, TM_API) {
    return $scope.$on('query_data', function(event, data) {
      var article, articles, i, id, len, title;
      articles = data.results.slice(0, 10);
      for (i = 0, len = articles.length; i < len; i++) {
        article = articles[i];
        id = article.id.remove('article-');
        title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
        article.url = '/angular/user/article/' + id + '/' + title;
      }
      return $scope.articles = articles;
    });
  });

}).call(this);

(function() {
  window.using = function(target, callback) {
    return callback.apply(target);
  };

  angular.module('TM_App').controller('Breadcrumbs_Controller', function($scope, query_Service) {
    return using($scope, function() {
      this.history = {};
      this.current_Path = '';
      this.breadcrumbs = [];
      this.refresh_Breadcrumbs = (function(_this) {
        return function() {
          var i, len, path, query_Id, ref, results;
          _this.breadcrumbs = [];
          path = '';
          ref = _this.current_Path.split('/');
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            query_Id = ref[i];
            if (!(query_Id)) {
              continue;
            }
            _this.breadcrumbs.push({
              query_Id: query_Id,
              title: _this.history[query_Id],
              path: path
            });
            results.push(path += "/" + query_Id);
          }
          return results;
        };
      })(this);
      this.$on('query_data', (function(_this) {
        return function(event, data) {
          _this.current_Path += "/" + data.id;
          _this.history[data.id] = data.title;
          return _this.refresh_Breadcrumbs();
        };
      })(this));
      return this.load_Query = (function(_this) {
        return function(breadcrumb) {
          _this.current_Path = breadcrumb.path;
          return query_Service.load_Query(breadcrumb.query_Id);
        };
      })(this);
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Help_Controller', function($sce, $scope, TM_API) {
    return TM_API.docs_Library(function(library) {
      $scope.Views = library.Views;
      $scope.show_Doc = function(article) {
        return TM_API.docs_Page(article.Id, function(article_Data) {
          $scope.title = article.Title;
          return $scope.content = $sce.trustAsHtml(article_Data.html);
        });
      };
      return $scope.show_Doc(library.Views.first().Articles.first());
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Login_Controller', function($scope, TM_API, $location, $timeout) {
    $scope.login = function() {
      $scope.errorMessage = null;
      $scope.infoMessage = "...logging in ...";
      return TM_API.login($scope.username, $scope.password, function(data) {
        var ref;
        if (data.result === 'OK') {
          $scope.infoMessage = 'Login OK';
          return $timeout(function() {
            return window.location = '/angular/user/main';
          });
        } else {
          $scope.infoMessage = null;
          return $scope.errorMessage = ((ref = data.viewModel) != null ? ref.errorMessage : void 0) || 'Login Failed (Server error)';
        }
      });
    };
    $scope.showErrorMessage = function() {
      return $scope.errorMessage;
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Navigate_Controller', function($rootScope, $sce, $scope, TM_API) {
    $scope.previous_Query = null;
    $scope.load_Query = function(query_Id) {
      return TM_API.query_tree(query_Id, function(data) {
        data.previous_Query = $scope.previous_Query;
        $rootScope.$broadcast('show-query-data', data);
        return $scope.previous_Query = query_Id;
      });
    };
    return $scope.load_Query('query-6234f2d47eb7');
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Pwd_Forgot_Controller', function($scope, TM_API, $location, $timeout) {
    $scope.get_Password = function() {
      $scope.infoMessage = "...sending request ...";
      return TM_API.pwd_Reset($scope.email, function(data) {
        return $scope.infoMessage = data.message;
      });
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Queries_Controller', function($scope, query_Service) {
    $scope.$on('query_data', function(event, data) {
      $scope.title = data.title;
      return $scope.containers = data.containers;
    });
    $scope.load_Query = function(query_Id) {
      return query_Service.load_Query(query_Id);
    };
    return query_Service.load_Data();
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.controller('Search_Controller', function($rootScope, $scope, TM_API) {
    $scope.map_Search_Queries = function(data) {
      var article_Ids, result;
      if (data) {
        article_Ids = (function() {
          var i, len, ref, results;
          ref = data.results;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            result = ref[i];
            results.push(result.id);
          }
          return results;
        })();
        return TM_API.get_articles_parent_queries(article_Ids, [], function(containers) {
          data.containers = containers;
          return $rootScope.$broadcast('show-query-data', data);
        });
      }
    };
    $scope.submit = function() {
      return TM_API.query_from_text_search($scope.text, function(query_id) {
        return TM_API.query_tree(query_id, function(data) {
          return $scope.map_Search_Queries(data);
        });
      });
    };
    return $scope.$on('query_data', function(event, data) {
      var filter, i, len, ref, result, results;
      $scope.technologies = [];
      ref = data.filters;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        filter = ref[i];
        if (filter.title === 'Technology') {
          results.push((function() {
            var j, len1, ref1, results1;
            ref1 = filter.results;
            results1 = [];
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              result = ref1[j];
              results1.push($scope.technologies.push(result.title));
            }
            return results1;
          })());
        } else {
          results.push(void 0);
        }
      }
      return results;
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('User_Navigation_Controller', function($scope, $state) {});

}).call(this);

(function() {
  var app, design_Components, map_Components, resolve_Directive_Name, root_Components, user_Components;

  app = angular.module('TM_App');

  String.prototype.upper_Case_First_Letter = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  resolve_Directive_Name = function(name) {
    var directive_Name, i, index, len, ref, segment;
    directive_Name = "";
    ref = name.split('_');
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      segment = ref[index];
      directive_Name += index ? segment.upper_Case_First_Letter() : segment;
    }
    return directive_Name;
  };

  map_Components = function(path, components) {
    var component, i, len, results;
    results = [];
    for (i = 0, len = components.length; i < len; i++) {
      component = components[i];
      results.push((function(component) {
        return app.directive(resolve_Directive_Name(component), function() {
          return {
            templateUrl: "/angular/jade-html/component" + path + "/" + component
          };
        });
      })(component));
    }
    return results;
  };

  root_Components = ['alert_ok', 'alert_bad', 'pwd_forgot_form', 'login_form', 'sign_up_form'];

  user_Components = ['queries', 'queries_breadcrumbs', 'articles', 'article_box'];

  design_Components = ['all_icons'];

  map_Components('', root_Components);

  map_Components('/user', user_Components);

  map_Components('/design', design_Components);

}).call(this);

(function() {
  angular.module('TM_App').directive('showComponent', function($compile, $location) {
    return {
      link: function($scope, element) {
        var component, component_Name;
        component_Name = $location.$$path.substring(1);
        component = document.createElement(component_Name);
        return element.replaceWith($compile(component)($scope));
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('filters', function($compile, Load_Jade, TM_API) {
    return {
      link: function($scope, element) {
        return Load_Jade('component/filters', 'filters', function(filters) {
          return $scope.$on('show-query-data', function(event, data) {
            var compiled, content, html;
            html = filters(data);
            compiled = $compile(html);
            content = compiled($scope);
            element.children().remove();
            return element.append(content);
          });
        });
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('helpNavigation', function() {
    return {
      templateUrl: '/angular/jade-html/component/help_navigation'
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('icon', function(icon_Service) {
    return {
      template: function(element, attribute) {
        var key;
        key = attribute.type || 'Default';
        return icon_Service.element_Html(key);
      }
    };
  }).directive('showAllIcons', function(icon_Service) {
    return {
      template: function(element, attribute) {
        var all_Icons_Html, i, key, len, ref;
        all_Icons_Html = "";
        ref = icon_Service.mappings.keys();
        for (i = 0, len = ref.length; i < len; i++) {
          key = ref[i];
          all_Icons_Html += icon_Service.element_Html(key);
          if (attribute.$attr.withTitles) {
            all_Icons_Html += " " + key + " <br/>";
          }
        }
        return all_Icons_Html;
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('landingBar', function() {
    return {
      templateUrl: '/angular/jade-html/component/landing_bar'
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.directive('leftNavigation', function($parse, $timeout) {
    return {
      templateUrl: '/angular/jade-html/component/left_navigation'
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('navigateQueries', function($compile, Load_Jade, TM_API) {
    return {
      link: function($scope, element) {
        return Load_Jade('template/navigate_queries', 'navigate_queries', function(navigate_queries) {
          return $scope.$on('show-query-data', function(event, data) {
            var compiled, content, html;
            html = navigate_queries(data);
            compiled = $compile(html);
            content = compiled($scope);
            element.children().remove();
            return element.append(content);
          });
        });
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('navigateResults', function($compile, Load_Jade, TM_API) {
    return {
      link: function($scope, element) {
        return Load_Jade('component/navigate_results', 'navigate_results', function(navigate_results) {
          return $scope.$on('show-query-data', function(event, data) {
            var compiled, content, html;
            html = navigate_results(data);
            compiled = $compile(html);
            content = compiled($scope);
            element.children().remove();
            return element.append(content);
          });
        });
      }
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.directive('searchBar', function($parse, $timeout) {
    return {
      templateUrl: '/angular/jade-html/component/search_bar'
    };
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('index');
    return $locationProvider.html5Mode(true);
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var i, len, results, view_Name, view_Names;
    view_Names = ['about', 'blank', 'docs', 'features', 'pwd_forgot', 'index', 'login', 'sign_up'];
    results = [];
    for (i = 0, len = view_Names.length; i < len; i++) {
      view_Name = view_Names[i];
      results.push($stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/" + view_Name
      }));
    }
    return results;
  });

}).call(this);

(function() {
  var app;

  return;

  app = angular.module('TM_App');

  app.service('User', function() {
    var user;
    user = {
      name: '...',
      logged_In: true
    };
    return user;
  });

  app.config(function($stateProvider, $urlRouterProvider) {
    var NavBar_Controller, Navigate_Controller, View_Controller, i, len, resolve_Navbar, resolve_View, view_Name, view_Names;
    $urlRouterProvider.otherwise('/index');
    resolve_Navbar = function(Load_Jade, User) {
      var file, name;
      if (User.logged_In) {
        name = 'logged_in';
      } else {
        name = 'anonymous';
      }
      file = "navbar/" + name;
      return Load_Jade(file, name, function(method, resolve) {
        return resolve(method());
      });
    };
    resolve_View = function(page) {
      return function(Load_Jade, User) {
        return Load_Jade("views/" + page, page, function(method, resolve) {
          return resolve('<span ng-bind-html="content_HTML"></span>');
        });
      };
    };
    View_Controller = function(page) {
      return function($rootScope, $scope, User, $sce, $state, $stateParams, TM_API) {
        var method_Name;
        window.state = $state;
        window.scope = $scope;
        if (page === 'logout') {
          User.logged_In = false;
          return $state.go('index');
        }
        if (page === 'get_started') {
          User.logged_In = true;
          page = 'main';
          return $state.go('navigate');
        }
        method_Name = "jade_" + page;
        if (page === 'navigate') {
          return Navigate_Controller($rootScope, $scope, $sce, $stateParams, TM_API);
        } else {
          if (window[method_Name]) {
            return $scope.content_HTML = $sce.trustAsHtml(window[method_Name]());
          }
        }
      };
    };
    Navigate_Controller = function($rootScope, $scope, $sce, $stateParams, TM_API) {
      TM_API.query_tree($stateParams.query_Id, function(data) {
        data.href = '#/navigate/';
        return $scope.content_HTML = $sce.trustAsHtml(jade_navigate(data));
      });
      return $rootScope.$on('New_Results_Data', function(event, data) {
        console.log('Received New_Results_Data');
        return $scope.content_HTML = $sce.trustAsHtml(jade_navigate(data));
      });
    };
    NavBar_Controller = function() {};
    view_Names = ['about', 'docs', 'index', 'features', 'logout', 'main', 'navigate', 'error', 'blank'];
    for (i = 0, len = view_Names.length; i < len; i++) {
      view_Name = view_Names[i];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        views: {
          'navbar': {
            templateProvider: resolve_Navbar,
            controller: NavBar_Controller
          },
          'content': {
            templateProvider: resolve_View(view_Name),
            controller: View_Controller(view_Name)
          }
        }
      });
    }
    $stateProvider.state('/navigate/:query_Id', {
      url: '/navigate/:query_Id',
      views: {
        'navbar': {
          templateProvider: resolve_Navbar,
          controller: NavBar_Controller
        },
        'content': {
          templateProvider: resolve_View('navigate'),
          controller: View_Controller('navigate')
        }
      }
    });
    return window.stateProvider = $stateProvider;
  });

  app.controller('Content_Controller', function($scope) {
    return $scope.content = '...TEAM mentor is loading....';
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    var i, j, len, len1, root_Views, user_Views, view_Name;
    root_Views = ['navigate', 'main'];
    for (i = 0, len = root_Views.length; i < len; i++) {
      view_Name = root_Views[i];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/" + view_Name
      });
    }
    user_Views = ['queries'];
    for (j = 0, len1 = user_Views.length; j < len1; j++) {
      view_Name = user_Views[j];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/user/" + view_Name
      });
    }
    $stateProvider.state('article', {
      url: "/article/:article_Id/:article_Title",
      controller: 'Article_Controller',
      templateUrl: '/angular/jade-html/views/article'
    });
    return $stateProvider.state('article-box', {
      url: "/article-box/:article_Id/:article_Title",
      controller: 'Article_Controller',
      templateUrl: '/angular/jade-html/views/user/article_box'
    });
  });

}).call(this);

(function() {
  var Icon_Service, mappings,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  mappings = {
    '.Net': {
      "class": 'icon-Net',
      layers: 12
    },
    'ASP.NET 3.5': {
      "class": 'icon-Net',
      layers: 12
    },
    'ASP.NET 4.0': {
      "class": 'icon-Net',
      layers: 12
    },
    'Android': {
      "class": 'icon-Android',
      layers: 12
    },
    'C++': {
      "class": 'icon-C',
      layers: 12
    },
    'iOS': {
      "class": 'icon-iOS',
      layers: 12
    },
    'Java': {
      "class": 'icon-Java',
      layers: 12
    },
    'PHP': {
      "class": 'icon-PHP',
      layers: 12
    },
    'Scala Play': {
      "class": 'icon-Scala',
      layers: 12
    },
    'Scala with Play Framework': {
      "class": 'icon-Scala',
      layers: 12
    },
    'WCF': {
      "class": 'icon-WCF',
      layers: 12
    },
    'WCF 3.5': {
      "class": 'icon-WCF',
      layers: 12
    },
    'Web Application': {
      "class": 'icon-Web-App',
      layers: 12
    },
    'HTML5': {
      "class": 'icon-HTML5',
      layers: 12
    },
    'Deployment': {
      "class": 'icon-Deployment',
      layers: 12
    },
    'Design': {
      "class": 'icon-Design',
      layers: 12
    },
    'Implementation': {
      "class": 'icon-Implementation',
      layers: 12
    },
    'Test': {
      "class": 'icon-Test',
      layers: 12
    },
    'Checklist Item': {
      "class": 'icon-Checklist',
      layers: 12
    },
    'Code Example': {
      "class": 'icon-CodeExample',
      layers: 12
    },
    'Guideline': {
      "class": 'icon-Guideline',
      layers: 12
    },
    'How To': {
      "class": 'icon-HowTo',
      layers: 12
    },
    'Principle': {
      "class": 'icon-Principle',
      layers: 12
    },
    'Requirement': {
      "class": 'icon-Requirement',
      layers: 12
    },
    'Vulnerability': {
      "class": 'icon-Vulnerabilities',
      layers: 12
    },
    'Default': {
      "class": 'icon-Default',
      layers: 2
    }
  };

  Icon_Service = (function() {
    function Icon_Service() {
      this.element_Html = bind(this.element_Html, this);
      this.element = bind(this.element, this);
      this.mappings = mappings;
    }

    Icon_Service.prototype.element = function(key) {
      var element, i, j, mapping, ref;
      console.log('resolving html for icon: ' + key);
      mapping = this.mappings[key];
      if (!mapping) {
        mapping = this.mappings['Default'];
      }
      console.log(mapping);
      element = angular.element('<span>');
      using(element[0], function() {
        this.className = mapping["class"];
        return this.title = key;
      });
      for (i = j = 1, ref = mapping.layers; j <= ref; i = j += 1) {
        element.append("<span class='path" + i + "'>");
      }
      return element;
    };

    Icon_Service.prototype.element_Html = function(key) {
      var element;
      element = this.element(key);
      if (element) {
        return element[0].outerHTML;
      } else {
        return "";
      }
    };

    return Icon_Service;

  })();


  /*
    icon_Data:  (type, key)->
      switch type
        when 'technology'
          switch key
            when '.NET', 'ASP.NET 3.5', 'ASP.NET 4.0'       then return { class: 'icon-Net'      , layers: 0 }
            when '.NET 3.5'                                 then return { class: 'icon-Net-3-5'  , layers: 0 }
            when 'Android'                                  then return { class: 'icon-Android'  , layers: 0 }
            when 'C++'                                      then return { class: 'icon-C'        , layers: 0 }
            when 'iOS'                                      then return { class: 'icon-iOS'      , layers: 0 }
            when 'Java'                                     then return { class: 'icon-Java'     , layers: 0 }
            when 'PHP'                                      then return { class: 'icon-PHP'      , layers: 0 }
            when 'Scala Play', 'Scala with Play Framework'  then return { class: 'icon-Scala'    , layers: 0 }
            when 'WCF' , 'WCF 3.5'                          then return { class: 'icon-WCF'      , layers: 0 }
            when 'Web Application'                          then return { class: 'icon-Web-App'  , layers: 0 }
            when 'HTML5'                                    then return { class: 'icon-HTML5'    , layers: 0 }
             * else return 'Default'
      return { class: 'icon-Default'   , layers: 0 }
   */

  angular.module('TM_App').service('icon_Service', function() {
    return new Icon_Service();
  });

}).call(this);

(function() {
  var app, config;

  app = angular.module('TM_App');

  config = {
    cache_Jade_Js: true
  };

  app.service('Load_Jade', function($q, $document) {
    return function(jade_File, method_Name, callback) {
      var deferrer, error, script, src;
      method_Name = 'jade_' + method_Name;
      deferrer = $q.defer();
      if (config.cache_Jade_Js && window[method_Name]) {
        callback(window[method_Name], deferrer.resolve);
      } else {
        try {
          script = $document[0].createElement('script');
          src = "/angular/jade/" + jade_File;
          script.src = src;
          $document[0].body.appendChild(script);
          script.onload = function() {
            return callback(window[method_Name], deferrer.resolve);
          };
        } catch (_error) {
          error = _error;
          console.log(error);
        }
      }
      return deferrer.promise;
    };
  });

}).call(this);

(function() {
  var Query_Service, app,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app = angular.module('TM_App');

  Query_Service = (function() {
    function Query_Service(options) {
      this.load_Query = bind(this.load_Query, this);
      this.load_Data = bind(this.load_Data, this);
      this.options = options || {};
      this.TM_API = options.TM_API;
      this.$rootScope = options.$rootScope;
      this.index_Query = 'query-6234f2d47eb7';
      this.data = null;
    }

    Query_Service.prototype.load_Data = function() {
      if (!this.data) {
        this.data = [];
        return this.load_Query(this.index_Query);
      }
    };

    Query_Service.prototype.load_Query = function(query_Id) {
      console.log("[Query-Service] loading data for query: " + query_Id);
      return this.TM_API.query_tree(query_Id, (function(_this) {
        return function(data) {
          _this.data = data;
          return _this.$rootScope.$broadcast('query_data', data);
        };
      })(this));
    };

    return Query_Service;

  })();

  app.service('query_Service', function($rootScope, TM_API) {
    console.log($rootScope);
    console.log('in Query_Service service');
    return new Query_Service({
      TM_API: TM_API,
      $rootScope: $rootScope
    });
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.service('TM_API', (function(_this) {
    return function($q, $http, $timeout) {
      var cache_Articles, cache_Query_Tree;
      cache_Query_Tree = {};
      cache_Articles = {};
      _this.get_Words = function(term, callback) {
        var url;
        url = "/angular/api/auto-complete?term=" + term;
        return $http.get(url).success(function(data) {
          var match;
          if (callback) {
            return callback((function() {
              var results;
              results = [];
              for (match in data) {
                results.push(match);
              }
              return results;
            })());
          }
        }).then(function(response) {
          var match;
          return (function() {
            var results;
            results = [];
            for (match in response.data) {
              results.push(match);
            }
            return results;
          })();
        });
      };
      _this.query_tree = function(id, callback) {
        var url;
        id = id || 'query-6234f2d47eb7';
        if (cache_Query_Tree[id]) {
          return $timeout(function() {
            return callback(cache_Query_Tree[id]);
          });
        } else {
          url = "/api/data/query_tree/" + id;
          return $http.get(url).success(function(data) {
            cache_Query_Tree[id] = data;
            return callback(data);
          });
        }
      };
      _this;
      _this.query_tree_filtered = function(id, filter, callback) {
        var url;
        if (cache_Query_Tree[id + filter]) {
          return callback(cache_Query_Tree[id]);
        }
        url = "/api/data/query_tree_filtered/" + id + "/" + filter;
        return $http.get(url).success(function(data) {
          cache_Query_Tree[id + filter] = data;
          return callback(data);
        });
      };
      _this;
      _this.query_from_text_search = function(text, callback) {
        var url;
        url = "/api/search/query_from_text_search/" + text;
        return $http.get(url).success(function(data) {
          return callback(data);
        });
      };
      _this;
      _this.get_articles_parent_queries = function(article_Ids, ignore_Titles, callback) {
        var url;
        url = "/api/data/articles_parent_queries/" + (article_Ids.join(','));
        return $http.get(url).success(function(data) {
          var key, matches, query, query_Data, ref, ref1;
          matches = [];
          ref = data.queries;
          for (key in ref) {
            query = ref[key];
            if (key.indexOf('query-') > -1) {
              query_Data = data.queries[key];
              if (((ref1 = query_Data.parent_Queries) != null ? ref1.first() : void 0) === 'query-6234f2d47eb7') {
                if (ignore_Titles.indexOf(query_Data.title) === -1) {
                  matches.push({
                    id: key,
                    title: query_Data.title,
                    articles: query_Data.articles,
                    size: query_Data.articles.size()
                  });
                }
              }
            }
          }
          if (callback) {
            return callback(matches);
          }
        });
      };
      _this;
      _this.docs_Library = function(callback) {
        var url;
        url = "/json/docs/library";
        return $http.get(url).success(function(data) {
          return callback(data);
        });
      };
      _this;
      _this.docs_Page = function(article_Id, callback) {
        var url;
        url = "/json/docs/" + article_Id;
        return $http.get(url).success(callback);
      };
      _this;
      _this.article = function(article_Id, callback) {
        var url;
        if (cache_Articles[article_Id]) {
          return $timeout(function() {
            return callback(cache_Articles[article_Id]);
          });
        } else {
          url = "/json/article/" + article_Id;
          return $http.get(url).success(function(data) {
            cache_Articles[article_Id] = data;
            return callback(data);
          });
        }
      };
      _this;
      _this.login = function(username, password, callback) {
        var postData, url;
        url = "/json/user/login";
        postData = {
          username: username,
          password: password
        };
        return $http.post(url, postData).success(callback);
      };
      _this;
      _this.pwd_Reset = function(email, callback) {
        var postData, url;
        url = "/json/user/pwd_reset";
        postData = {
          email: email
        };
        return $http.post(url, postData).success(callback);
      };
      return _this;
    };
  })(this));

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.service('$$', function() {
    var $$;
    $$ = function(element) {
      if (!element.$attr) {
        element.$attr = function() {
          var attr, i, len, ref, result;
          result = {};
          if (element) {
            ref = element.attributes;
            for (i = 0, len = ref.length; i < len; i++) {
              attr = ref[i];
              result[attr.name] = attr.value;
            }
          }
          return result;
        };
      }
      if (!element.$query) {
        element.$query = function(selector) {
          return $$(element.querySelector(selector));
        };
      }
      return element;
    };
    return $$;
  });

}).call(this);
