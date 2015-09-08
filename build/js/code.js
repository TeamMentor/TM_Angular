(function() {
  var app;

  app = angular.module('TM_App', ['ui.router']);

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.run(function($templateCache) {
    $templateCache.put('/angular/jade-html/component/alert_bad', "<div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span></div></div></div>");
    $templateCache.put('/angular/jade-html/component/alert_ok', "<div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">|</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div>");
    $templateCache.put('/angular/jade-html/component/design/all_icons', "<main><section class=\"row\"><div class=\"col-3\"><h4>injected one at the time</h4><icon class=\"Design\"></icon><icon type=\".Net\"></icon><icon type=\"Java\"></icon><icon type=\"Principle\"></icon><icon type=\"Design\"></icon><icon type=\"Principle\"></icon><icon type=\"Requirement\"></icon></div><div class=\"col-3\"><h4>all in one go (without titles)</h4><show-all-icons></show-all-icons></div><div class=\"col-3\"><h4>all in one go (with titles)</h4><show-all-icons with-titles=\"with-titles\"></show-all-icons></div></section></main>");
    $templateCache.put('/angular/jade-html/component/design/events', "<h2>Events</h2><div ng-controller=\"Events_Controller\" class=\"result\"><div class=\"summary\"><a>'event title'</a><p>event description</p></div></div>");
    $templateCache.put('/angular/jade-html/component/guest/login_form', "<!-- Getting Started--><div ng-controller=\"Login_Controller\"><div class=\"section row__label\"><h4>Login</h4></div><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span></div></div></div><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">|</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div><div class=\"section row\"><form id=\"login-form\" role=\"form\" ng-submit=\"login()\" class=\"access-form\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\" required=\"required\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"button-field\"><button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button></div><div class=\"button-field text-right\"><br/><a id=\"pwd_forgot\" href=\"pwd_forgot\" class=\"text-right\">Forgot your password?</a></div></form></div></div>");
    $templateCache.put('/angular/jade-html/component/guest/pwd_forgot_form', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Pwd_Forgot_Controller\"><div class=\"section row__label\"><h4>Forgot your password?</h4></div><div class=\"section row\"><form id=\"forgot-pwd-form\" ng-submit=\"get_Password()\" class=\"access-form\"><div class=\"section row\"><div class=\"col-8 input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" ng-model=\"email\" placeholder=\"Email Address\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><button type=\"submit\" id=\"btn-get-password\" class=\"full-width\">Retrieve password</button></div></div></form></div><alert-ok></alert-ok></div>");
    $templateCache.put('/angular/jade-html/component/guest/pwd_reset_form', "<!-- Getting Started--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"section row__label\"><h4>Reset your password</h4></div><div class=\"section row\"><form id=\"password-reset-form\" role=\"form\" method=\"post\" action=\"/flare/user/password-reset\" class=\"access-form\"><div class=\"section row\"><div class=\"col-6 input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-6 input-field\"><label for=\"confirmpassword\">Confirm Password</label><input type=\"password\" id=\"confirmpassword\" ng-model=\"confirmpassword\" placeholder=\"Password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><br/><button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button></div></div></form></div>");
    $templateCache.put('/angular/jade-html/component/guest/sign_up_form', "<!-- Getting Started--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div ng-controller=\"Signup_Controller\"><div class=\"section row__label\"><h4>Sign Up</h4></div><div id=\"error\" ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span></div></div><div id=\"info\" ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><span class=\"alert-icon\">|</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div><div class=\"section row\"><form id=\"sign-up-form\" role=\"form\" ng-submit=\"signup()\" class=\"access-form\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\" required=\"required\"/></div><div class=\"input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" ng-model=\"email\" placeholder=\"Email Address\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"confirmpassword\">Confirm Password</label><input type=\"password\" id=\"confirmpassword\" ng-model=\"confirmpassword\" placeholder=\"Password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" ng-model=\"firstname\" placeholder=\"First Name\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" ng-model=\"lastname\" placeholder=\"Last Name\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"company\">Company</label><input type=\"text\" id=\"company\" ng-model=\"company\" placeholder=\"Company\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"title\">Job/Title</label><input type=\"text\" id=\"title\" ng-model=\"title\" placeholder=\"Job/Title\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"country\">Country</label><input type=\"text\" id=\"country\" ng-model=\"country\" placeholder=\"Country\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"state\">State</label><input type=\"text\" id=\"state\" ng-model=\"state\" placeholder=\"State\" maxlength=\"100\"/></div><div class=\"conditions\"><p>By signing up, you agree to our <a href=\"terms_and_conditions\">Terms and Conditions</a>.</p> </div><div class=\"button-field\"><button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button></div></form></div></div>");
    $templateCache.put('/angular/jade-html/component/help_navigation', "<dl class=\"help scroll\"><span ng-repeat=\"view in Views\"><dt class=\"vertical-align\"><span class=\"label no-underline\">\{\{view.Title}}</span></dt><dd ng-repeat=\"article in view.Articles\"><a href=\"#\{\{article.Id}}\" ng-click=\"show_Doc(article)\">\{\{article.Title}}</a></dd></span></dl>");
    $templateCache.put('/angular/jade-html/component/navigation/landing_bar', "<!-- Terms and Conditions Navigation--><nav><a ui-sref=\"home\" class=\"logo\"></a><div class=\"links\"><ul class=\"display-inline\"><li><a ui-sref=\"about\">About</a></li><li><a ui-sref=\"features\">Features</a></li><li><a ui-sref=\"docs\">Docs</a></li><li><a ui-sref=\"sign_up\">Sign Up</a></li><li><a ui-sref=\"login\">Login</a></li></ul></div></nav>");
    $templateCache.put('/angular/jade-html/component/navigation/left_navigation', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><aside ng-controller=\"User_Navigation_Controller\"><ul><li><div class=\"logo\"></div></li><li ng-show=\"show_Loading_Image\"><icon class=\"Loading rotating\"></icon></li><li><!--a(ui-sref=\"queries\")--><a href=\"index\" ng-click=\"open_Query_State()\"><icon class=\"Home\"></icon></a></li><li><a ui-sref=\"main\"><icon class=\"User\"></icon></a></li><li><a ui-sref=\"docs\"><icon class=\"Info\"></icon></a></li><li><a href=\"/angular/guest/logout\"><icon class=\"Logout\"></icon></a><!--a(ui-sref=\"logout\")--></li></ul></aside>");
    $templateCache.put('/angular/jade-html/component/result_saved_article', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"article result\"><div class=\"metadata\"><ul><li><br/></li><!--li+filter-icon('Type', result.type)--><!--li+filter-icon('Phase', result.phase)--><!--li+filter-icon('Technology', result.technology)--></ul></div><div class=\"summary\"><a href=\"#\"><h3 id=\"article-headline\">Article Headline</h3></a><p>Article Summary</p><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/component/result_saved_search_term', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"article search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></div><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul>");
    $templateCache.put('/angular/jade-html/component/result_search_term', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Search_Controller\"><div class=\"article search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></div></div>");
    $templateCache.put('/angular/jade-html/component/results_delete_share', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"section row__label\"><div class=\"label\">Saved Items</div><ul class=\"display-inline\"><li><a href=\"\" class=\"button btn-result icon-Filter\"></a></li><li><button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button></li><li><button title=\"Share results\" class=\"btn-result icon-Share\"></button></li></ul></div>");
    $templateCache.put('/angular/jade-html/component/search_result', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div class=\"article search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></div>");
    $templateCache.put('/angular/jade-html/component/start_view', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Popular Search Terms</div></div><div ng-controller=\"Search_Controller\" class=\"section row\"><div ng-repeat=\"search in top_Search\" class=\"search-term\"><span class=\"icon\"><icon class=\"Star\"></icon></span><span class=\"link\"><a href=\"\{\{search.url}}\"><span>\{\{search.title}}</span></a></span></div></div></div><div ng-controller=\"Article_Controller\"><div class=\"section row\"><div class=\"section row__label\"><div ng-show=\"recent_Articles.length &gt; 0\" class=\"label\">Recently Viewed Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in recent_Articles\" class=\"article-box\"></article-box></div></div><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Top Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in top_Articles\" class=\"article-box\"></article-box></div></div></div>");
    $templateCache.put('/angular/jade-html/component/user/article', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div ng-controller=\"Article_Controller\"><div class=\"col-9\"><div class=\"article\"><h1 class=\"article-title\">\{\{article.title}}</h1><div id=\"html\" ng-bind-html=\"article_Html\" class=\"article-content\"></div></div><br/><br/><br/><div class=\"footer\"><p>TEAM Mentor 4.0, a Security Innovation eKnowledge Product.</p> <p>© Security Innovation 2007-2015, all rights reserved.</p> <ul class=\"text-center\"><li><p><a href=\"mailto:support@securityinnovation.com\"><span class=\"icon-Mail\"></span><span class=\"text\">support@securityinnovation.com</span></a></p></li><li class=\"text-center\"><p><a href=\"#\"><span class=\"icon-Paperclip\"></span><span class=\"text\">Terms & Conditions</span></a></p></li></ul></div></div><div class=\"col-3\"><div class=\"section article-info\"><ul class=\"display-inline\"><li><a title=\"Share this article\" href=\"mailto:\" class=\"button btn-result icon-Share\"></a></li></ul><div class=\"section row__label\"><div class=\"label\">Metadata:</div></div><div class=\"section row\"><ul><li><span><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></span><span class=\"text\">Hi</span></li><li><span><div id=\"icon-Type\" ng-bind-html=\"icon_Type\"></div></span><span class=\"text\">Hi</span></li><li><span><div id=\"icon-Phase\" ng-bind-html=\"icon_Phase\"></div></span><span class=\"text\">Hi</span></li></ul></div><div class=\"section row fixed-bottom\"><div class=\"alert alert-neutral\"><span class=\"text\">Have a comment about this article? Send our team<a href=\"mailto:support@securityinnovation.com\">an email.</a></span></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/component/user/article_box', "<div ng-controller=\"Article_Box_Controller\" class=\"result\"><div class=\"metadata\"><ul><li><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></li><li><div id=\"icon-technology\" ng-bind-html=\"icon_Type\"></div></li><li><div id=\"icon-technology\" ng-bind-html=\"icon_Phase\"></div></li></ul></div><div class=\"summary\"><a ng-href=\"\{\{article.url}}\" id=\"\{\{article.id}}\"><h4 id=\"article-headline\">\{\{article.title}}</h4></a><p>\{\{article.summary}} ...</p></div></div>");
    $templateCache.put('/angular/jade-html/component/user/articles', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Articles_Controller\"><div class=\"section row\"><article-box ng-repeat=\"article in articles\" class=\"article-box\"></article-box></div></div>");
    $templateCache.put('/angular/jade-html/component/user/breadcrumbs', "<div ng-controller=\"Breadcrumbs_Controller\"><dl ng-show=\"breadcrumbs\" class=\"breadcrumbs\"><dd ng-repeat=\"breadcrumb in breadcrumbs\" class=\"active\"><a ng-href=\"#\" ng-click=\"load_Query(breadcrumb)\">\{\{breadcrumb.title}}</a></dd></dl></div>");
    $templateCache.put('/angular/jade-html/component/user/filters', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div ng-controller=\"Filters_Controller\"><div ng-show=\"view_Filters\" class=\"section row\"><dl class=\"scroll\"><div id=\"filters\" ng-repeat=\"(title,filter) in filters\"><dt><div class=\"label no-underline\"><icon class=\"Filter\"></icon><span class=\"text\"> \{\{title}}</span></div></dt><div id=\"results\"><div ng-repeat=\"result in filter\"><dd ng-show=\"result.size &gt; 0\"><a href=\"#\" ng-click=\"apply_Filter(result.id, result.title, title)\"><span><span id=\"filter-icon\" ng-bind-html=\"result.icon\"></span><span class=\"text\">\{\{result.title}}</span></span><span class=\"badge\">\{\{result.size}}</span></a></dd></div></div></div></dl></div></div>");
    $templateCache.put('/angular/jade-html/component/user/filters_active', "<div ng-controller=\"Filters_Active_Controller\" class=\"section row\"><div ng-repeat=\"(key, value) in current_Filters\" class=\"active-filter\"><ul class=\"display-inline\"><li><span class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span></span></li><li><span class=\"text\">\{\{value}}</span></li><li><span class=\"close\"><a href=\"#\" ng-click=\"clear_Filter(key)\"><span class=\"icon-Close\"><span class=\"path1\"></span></span></a></span></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/component/user/pagination', "<span ng-controller=\"Pagination_Controller\"><div ng-show=\"model.pages\" class=\"section row\"><div class=\"pagination\"><div class=\"previous\"><a href=\"#\" ng-click=\"previous_Page()\"><span class=\"icon-Arrow-Left\"></span><span class=\"text\">back</span></a></div><div id=\"current_Page\" class=\"number\"><select ng-model=\"model.page\" ng-change=\"set_Page()\" ng-options=\"page for page in model.pages\"></select></div><div class=\"next\"><a href=\"#\" ng-click=\"next_Page()\"><span class=\"icon-Arrow-Right\"></span><span class=\"text\">next</span></a></div></div><div class=\"back-to-top\"><a href=\"#\"><span class=\"icon-Arrow-Up\"></span><span class=\"text\">back to top</span></a></div><div id=\"page_Splits\" class=\"number-of-results\"><form><input type=\"radio\" name=\"results-per-page\" id=\"four\"/><label for=\"four\">4</label><input type=\"radio\" name=\"results-per-page\" id=\"ten\" checked=\"checked\"/><label for=\"ten\">10</label><input type=\"radio\" name=\"results-per-page\" id=\"twenty\"/><label for=\"twenty\">20</label></form><ul><li><span class=\"text\">results per page</span></li></ul><!--select(ng-model='model.page_Split', ng-change='set_Page_Split()', ng-options='page_Split for page_Split in model.page_Splits')--></div></div></span>");
    $templateCache.put('/angular/jade-html/component/user/queries', "<!--include ../../mixins/icons.jade--><div ng-controller=\"Queries_Controller\"><dl><dt><span id=\"query_title\" class=\"label no-underline\">\{\{title}}</span><span class=\"sub-nav__icon\"><!--a(ng-click=\"show_Previous_Query()\")+back-icon --></span></dt><div id=\"containers\" class=\"scroll\"><div ng-repeat=\"container in containers\"><!--if container.size > 0--><a href=\"#\" id=\"\{\{container.id}}\" ng-click=\"load_Query(container.id)\" ng-show=\"container.size &gt;0\"><dd><span class=\"text\">\{\{container.title}}</span><span class=\"badge\">\{\{container.size}}</span></dd></a></div></div></dl></div>");
    $templateCache.put('/angular/jade-html/component/user/queries_history', "<div ng-controller=\"Queries_History_Controller\"><nav><ul class=\"display-inline\"><li ng-repeat=\"(key, value) in history\"><a ng-href=\"#\" ng-click=\"load_Query(key)\">\{\{value}}</a></li></ul></nav></div>");
    $templateCache.put('/angular/jade-html/component/user/recommendations', "<div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>");
    $templateCache.put('/angular/jade-html/component/user/results', "<div ng-controller=\"Results_Controller\"><section ng-hide=\"results_Size\" class=\"row__label\"><div id=\"noResultsTitle\" class=\"label\">Query has no results</div></section><section ng-show=\"results_Size\" class=\"row__label\"><div id=\"resultsTitle\" class=\"label\">Query has \{\{results_Size}} articles , Page #\{\{current_Page}} (\{\{current_Page_Split}} articles per page)</div><ul class=\"display-inline text-right\"><li><a id=\"view_Filters\" href=\"#\" title=\"View Filters\" ng-click=\"toggle_Filters()\" class=\"button btn-result icon-Filter\"></a></li></ul></section></div>");
    $templateCache.put('/angular/jade-html/component/user/search_bar', "<div ng-controller=\"Search_Bar_Controller\" class=\"search\"><form ng-submit=\"submit()\"><ul><li><div class=\"logo\"></div></li></ul><select ng-model=\"selected_Technology\" ng-change=\"select_Technology(selected_Technology)\" ng-options=\"technology as technology.title for technology in technologies\"></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"Search TEAM Mentor\" ng-change=\"get_Words(text)\" ng-focus=\"with_Focus(true)\" ng-blur=\"with_Focus(false)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" class=\"search-input\"/><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><icon class=\"Search\"></icon></button></form></div><div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>");
    $templateCache.put('/angular/jade-html/component/user_panel', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div class=\"section row__label\"><div class=\"label\">@username</div></div><div class=\"section row\"><form><input type=\"text\" name=\"name\" value=\"First name, Last name\"/><input type=\"text\" name=\"work\" value=\"Position, Company\"/><input type=\"email\" name=\"email\" value=\"Email\"/><button type=\"submit\"><span class=\"icon-Tick\"></span></button></form></div>");
    $templateCache.put('/angular/jade-html/views/alert_application', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"application\"><div class=\"main\"><div class=\"alert alert-ok\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Hi</span></div></div></div>");
    $templateCache.put('/angular/jade-html/views/article_editor', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"application\"><div class=\"main\"><div class=\"col-9\"><div class=\"section article-body\"><div class=\"section row\"><form class=\"article-editor\"><input type=\"text\" name=\"article-title\" placeholder=\"Article Title\"/><textarea name=\"article-body\" placeholder=\"Article Body\"></textarea><div class=\"section import-files\"><p>You can<a href=\"#\"> import</a> PDFs, images or Word documents.</p></div></form></div><div class=\"section row__label\"><div class=\"label\">Directories</div><!-- This toggles the different editor functionalities for heirarchical structure.--><ul class=\"toggle-bar display-inline\"><form class=\"article-editor text-center\"><li class=\"one-third\"><input type=\"radio\" name=\"editor\" value=\"add\" id=\"add\"/><label for=\"add\" class=\"button btn-result icon-Add\"></label></li><li class=\"one-third\"><input type=\"radio\" name=\"editor\" value=\"edit\" id=\"edit\"/><label for=\"edit\" class=\"button btn-result icon-Edit\"></label></li><li class=\"one-third\"><input type=\"radio\" name=\"editor\" value=\"delete\" id=\"delete\"/><label for=\"delete\" class=\"button btn-result icon-Delete\"></label></li></form></ul></div><div class=\"section row\"><ul class=\"display-inline\"><!-- This is for display before any action is taken--><li class=\"one-third\"><dl><dt><div class=\"label\">Container</div></dt></dl></li><!-- This should be used for when the user toggles the Add or Edit functionality--><li class=\"one-third\"><dl><dt><div class=\"label\">Container</div><span class=\"sub-nav__icon\"><span class=\"icon-Arrow-Left\"></span></span></dt><dd><a href=\"#\" class=\"active\">Directory</a></dd><dd><a href=\"#\">Directory</a></dd><dd><a href=\"#\">Directory</a></dd></dl></li><!-- This should be used if the user wants to delete a container--><li class=\"one-third\"><dl><dt><div class=\"label\">Container</div></dt><dd><form><label for=\"delete-directory\">Are you sure you want to delete this?</label><ul class=\"display-inline\"><li><button type=\"submit\" class=\"btn-editor\"><span class=\"icon-Tick\"></span></button></li><li><button type=\"cancel\" class=\"btn-editor cancel\"><span class=\"icon-Close\"></span></button></li></ul></form></dd></dl></li></ul></div><div class=\"section row__label\"><div class=\"label\">Filters</div></div><div class=\"section row\"><br/><form class=\"article-editor-grid\"><div><input type=\"checkbox\" id=\"filter1\"/><label for=\"filter1\"><span title=\"Technology Independent\" class=\"icon-All\"><span class=\"path1\"></span><span class=\"path2\"></span></span><span>Technology Independant</span></label></div><div><input type=\"checkbox\" id=\"filter2\"/><label for=\"filter2\"><span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span><span>Android</span></label></div><div><input type=\"checkbox\" id=\"filter3\"/><label for=\"filter3\"><span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span><span>Scala</span></label></div><div><input type=\"checkbox\" id=\"filter4\"/><label for=\"filter4\"><span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span><span>WCF</span></label></div><div><input type=\"checkbox\" id=\"filter5\"/><label for=\"filter5\"><span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span><span>Web Application</span></label></div><div><input type=\"checkbox\" id=\"filter6\"/><label for=\"filter6\"><span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>iOS</span></label></div><div><input type=\"checkbox\" id=\"filter7\"/><label for=\"filter7\"><span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span><span class=\"text\">HTML5</span></label></div></form></div><div class=\"section row__label\"><div class=\"label\">Quality</div></div><div class=\"section row\"><p>Quality slider, needs to be built with Angular so I can style</p></div></div></div><div class=\"col-3\"><div class=\"section article-info\"><ul class=\"display-inline\"><li><button type=\"submit\" class=\"btn-editor\"><span class=\"icon-Tick\"></span></button></li><li><button type=\"submit\" class=\"btn-editor cancel\"><span class=\"icon-Close\"></span></button></li></ul></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/article_view_editor_option', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"application\"><div class=\"main\"><div class=\"col-9\"><div class=\"section row article\"><div class=\"col-10\"><h1>Article Title</h1></div><div class=\"col-2\"><ul class=\"display-inline\"><li class=\"full-width\"><a href=\"#\" class=\"button btn-minor full-width\"><span class=\"icon-Arrow-Left\"></span><span class=\"text\">Back</span></a></li></ul></div></div></div><div class=\"col-3\"><div class=\"section article-info\"><ul class=\"display-inline\"><li><button type=\"submit\" id=\"btn-edit\" class=\"btn-result icon-Edit\"></button></li><li><button title=\"Save article to Collection\" class=\"btn-result icon-Save\"></button></li><li><a title=\"Share this article\" href=\"mailto:\" class=\"button btn-result icon-Share\"></a></li></ul><div class=\"section row__label\"><div class=\"label\">Relates to:</div></div><div class=\"section row\"><ul class=\"display-inline\"><li><!--+show-icon('Technology', technology)--><span class=\"text\"></span></li><li><!--+show-icon('Phase', phase)--></li><li><!--+show-icon('Type', type)--></li></ul></div><div class=\"section row__label\"><div class=\"label\">Belongs to:</div></div><div class=\"section row\"><ul><li><a href=\"/flare/curated-content\"><span class=\"icon-Curated-Content\"></span><span class=\"text\">Curated Content</span></a></li></ul></div><div class=\"section row__label\"><div class=\"label\">Related Articles:</div></div><div class=\"section row\"><ul><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li></ul></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/curated_content', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"application\"><div class=\"main\"><div class=\"section row\"><div class=\"col-3\"><dl><dt><div class=\"label\">Curated Content</div><span class=\"sub-nav__icon\"><span class=\"icon-Arrow-Left\"></span></span></dt><dd><a href=\"#\">Item One</a></dd><dd><a href=\"#\">Item Two</a></dd><dd><a href=\"#\">Item Three</a></dd></dl></div><div class=\"col-9\"><div class=\"section row\"><article-box></article-box><!--include ../component/result_article.jade--></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/curated_content_article', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"application\"><div class=\"main\"><div class=\"col-9\"><div class=\"section row article\"><div class=\"col-10\"><h1>Article Title</h1></div><div class=\"col-2\"><ul class=\"display-inline\"><li class=\"full-width\"><a href=\"#\" class=\"button btn-minor full-width\"><span class=\"icon-Arrow-Left\"></span><span class=\"text\">Back</span></a></li></ul></div></div></div><div class=\"col-3\"><div class=\"section article-info\"><ul class=\"display-inline\"><li><button type=\"submit\" id=\"btn-edit\" class=\"btn-result icon-Edit\"></button></li><li><button title=\"Save article to Collection\" class=\"btn-result icon-Save\"></button></li><li><a title=\"Share this article\" href=\"mailto:\" class=\"button btn-result icon-Share\"></a></li></ul><div class=\"section row__label\"><div class=\"label\">Relates to:</div></div><div class=\"section row\"><ul class=\"display-inline\"><li><!--+show-icon('Technology', technology)--><span class=\"text\"></span></li><li><!--+show-icon('Phase', phase)--></li><li><!--+show-icon('Type', type)--></li></ul></div><div class=\"section row__label\"><div class=\"label\">Belongs to:</div></div><div class=\"section row\"><ul><li><a href=\"/flare/curated-content\"><span class=\"icon-Curated-Content\"></span><span class=\"text\">Curated Content</span></a></li></ul></div><div class=\"section row__label\"><div class=\"label\">Related Articles:</div></div><div class=\"section row\"><ul><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li><li><a href=\"#\">Article Headline</a></li></ul></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/docs', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Help_Controller\" class=\"main help\"><div class=\"col-3 application-scroll\"><help-navigation></help-navigation></div><div class=\"col-9 application-scroll\"><div id=\"help\" class=\"section article\"><h1 id=\"help-title\">\{\{title}}</h1><help-content ng-bind-html=\"content\"></help-content><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/error', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><div class=\"application\"><div class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">You need to login to see that page.</span></div></div><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Thanks for signing up to TEAM Mentor. Please login to access our libraries.</span></div></div><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Your password has been updated. Please login to access our libraries.</span></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/about', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section about\"><h3 id=\"an-interactive-application-security-library-with-thousands-of-code-samples-and-professional-guidance-when-you-need-it\">An interactive Application Security library with thousands of code samples and professional guidance when you need it</h3> </div><div class=\"section about-us\"><h4 id=\"team-mentor-was-created-by-developers-for-developers-using-secure-coding-standards-code-snippets-and-checklists-built-from-10-years-of-targeted-security-assessments-for-fortune-500-organizations-\">TEAM Mentor was created by developers for developers using secure coding standards, code snippets and checklists built from 10+ years of targeted security assessments for Fortune 500 organizations.</h4> <p>It contains thousands of articles with dynamic content across multiple development platforms including .NET, Java, C/C++, PHP, Android and iOS. TEAM Mentor is the In-Practice companion to our <a href=\"https://www.securityinnovation.com/training/application-security/computer-based/\">TEAM Professor eLearning courses</a>, extending developers’ knowledge in combination with training.</p> <p>TEAM Mentor integrates with static analysis tools, such as Checkmarx and Fortify&trade;, helping teams make more sense of scan results and make critical decisions to fix software vulnerabilities.</p> </div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/features', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section features\"><h2 id=\"team-mentor-provides-intelligence-to-fix-vulnerabilities-and-comply\">TEAM Mentor provides intelligence to fix vulnerabilities and comply</h2> <div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"delivers-compliance\"></div></div><div class=\"col-9\"><p>Delivers compliance-specific secure coding guidance for PCI-DSS, OWASP Top 10, CWE and other popular frameworks.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"integrates\"></div></div><div class=\"col-9\"><p>Integrates with multiple static analysis tools and developer environments (IDE’s) to map prescriptive coding guidance to scan results to fix vulnerabilities.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"cross-references\"></div></div><div class=\"col-9\"><p>Stores and cross-references your security policies with out-of-the-box secure coding checklists and examples.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"provides-guidance\"></div></div><div class=\"col-9\"><p>Provides guidance to assist developers in reducing security vulnerabilities in software applications.</p> </div></div></div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/home', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section usp\"><h2 id=\"instant-resources-that-bridge-the-gap-between-developer-questions-and-technical-solutions\">Instant resources that bridge the gap between developer questions and technical solutions</h2> <a ui-sref=\"sign_up\" class=\"button\">Start your free trial today</a></div><div class=\"section reasons\"><h2 id=\"with-team-mentor-you-can-\">With TEAM Mentor, you can...</h2> <div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"fix-vulnerabilities\"></div></div><div class=\"col-9\"><p>Fix vulnerabilities quicker than ever before with TEAM Mentor&#39;s seamless integration into a developer&#39;s IDE and daily workflow.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"reduce-vulnerabilities\"></div></div><div class=\"col-9\"><p>Reduce the number of vulnerabilities over time as developers learn about each vulnerability at the time it is identified.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"improve-process\"></div></div><div class=\"col-9\"><p>Expand the development team&#39;s knowledge and improve processes with access to thousands of specific remediation tactics, including the host organization&#39;s security policies and coding best practices.</p> </div></div></div><div class=\"section clients\"><h3 id=\"our-clients-love-us-and-we-think-you-will-too-\">Our clients love us (and we think you will too!)</h3> <img src=\"/assets/clients/flare-logos.jpg\"/></div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/login', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section row\"><div class=\"col-7\"><login-form></login-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/pwd_forgot', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section row\"><div class=\"col-7\"><pwd-forgot-form></pwd-forgot-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/sign_up', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><div class=\"section row\"><div class=\"col-7\"><sign-up-form></sign-up-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/new_user_onboard', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"application\"><div class=\"section row\"><div class=\"col-1\"></div><div class=\"col-10\"><div class=\"section row__label\"><div class=\"label\">Welcome to TEAM Mentor</div><ul class=\"display-inline\"><li class=\"full-width\"><button>Go to app</button></li></ul></div><div class=\"section row\"><div class=\"article result\"><div class=\"summary\"><h2>Search</h2><p>TEAM Mentor 4.0 has faster and more reliable search results. Search the database by filter, issue or technology.</p></div></div><div class=\"article result\"><div class=\"summary\"><h2>Navigate</h2><p>Not sure where to start? You can browse our index and find groups of articles that cover entire topics.</p></div></div><div class=\"article result\"><div class=\"summary\"><h2>Filters</h2><p>Filter your results to find articles that directly relate to you. You can filter by technology, phase and type.</p></div></div></div></div><div class=\"col-1\"></div></div></div>");
    $templateCache.put('/angular/jade-html/views/pwd_reset', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><div class=\"section row\"><div class=\"col-4\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div><div class=\"col-8\"><div class=\"getting-started\"><!--+alert-pwd-reset-failed--><div class=\"section row__label\"><div class=\"label\">Reset your password</div></div><div class=\"section row\"><form id=\"password-reset-form\" role=\"form\" method=\"post\" action=\"/flare/user/password-reset\"><div class=\"section row\"><div class=\"col-6 input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-6 input-field\"><label for=\"confirmpassword\">Confirm Password</label><input type=\"password\" id=\"confirmpassword\" ng-model=\"confirmpassword\" placeholder=\"Password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><br/><button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button></div></div></form></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/pwd_sent', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><div class=\"section row\"><div class=\"col-4\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div><div class=\"col-8\"><section class=\"getting-started\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div><login-form></login-form></section></div></div>");
    $templateCache.put('/angular/jade-html/views/terms_and_conditions', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Terms and Conditions Navigation--><div class=\"main\"><div class=\"col-3 application-scroll\"><dl><dt><div class=\"label no-underline\">Terms & Conditions</div></dt><div class=\"scroll\"><dd><a href=\"#article-i-definitions\">Article I - Definitions</a></dd><dd><a href=\"#article-ii-deliverables\">Article II - Deliverables</a></dd><dd><a href=\"#article-iii-license-grant\">Article III - License Grant</a></dd><dd><a href=\"#article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</a></dd><dd><a href=\"#article-v-trademarks\">Article V - Trademarks</a></dd><dd><a href=\"#article-vi-support\">Article VI - Support</a></dd><dd><a href=\"#article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</a></dd><dd><a href=\"#article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</a></dd><dd><a href=\"#article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</a></dd><dd><a href=\"#article-x-assignment\">Article X - Assignment</a></dd><dd><a href=\"#article-xi-confidentiality\">Article XI - Confidentiality</a></dd><dd><a href=\"#article-xii-warranties\">Article XII - Warranties</a></dd><dd><a href=\"#article-xiii-indemnities\">Article XIII - Indemnities</a></dd><dd><a href=\"#article-xiv-limitations\">Article XIV - Limitations</a></dd><dd><a href=\"#article-xv-term-of-agreement\">Article XV - Term of Agreement</a></dd><dd><a href=\"#article-xvi-termination\">Article XVI - Termination</a></dd><dd><a href=\"#article-xvii-effect-of-termination\">Article XVII - Effect of Termination</a></dd><dd><a href=\"#article-xviii-general-provisions\">Article XVIII - General Provisions</a></dd></div></dl></div><div class=\"col-9 application-scroll\"><div class=\"section row__article\"><h2 id=\"software-product-license-agreement\">Software Product License Agreement</h2> <h3 id=\"important-information-please-read-carefully\">Important Information - Please Read Carefully</h3> <p>This Security Innovation (“Security Innovation”) software or software application contains computer programs and other proprietary material and information, the use of which is subject to and expressly conditioned upon acceptance of this License (the “License”).</p> <p>This License is a legally binding document between you (meaning the individual person or the entity that the individual represents that has obtained the Software for its internal productive use and not for outright resale) (the “Customer”) and Security Innovation.  Unless agrees otherwise in writing, this License governs Customer&#39;s use of the software or software application.</p> <p>By proceeding with the user registration, installation, downloading, use or reproduction of this software or software application, or authorizing any other person to do so, you are representing to Security Innovation that you are (i) authorized to bind the Customer; and (ii) agreeing on behalf of the Customer that the terms of this License shall govern your relationship with Security Innovation with regard to the subject matter in this License and are waiving any rights, to the maximum extent permitted by applicable law, to any claim anywhere in the world concerning the enforceability or validity of this License.</p> <p>If you do not have authority to agree to the terms of this License on behalf of the Customer, or do not accept the terms of this License on behalf of the Customer, immediately cease any further attempt to install, download or use this software or software application for any purpose, and remove any partial or full copies made thereof.</p> <h4 id=\"article-i-definitions\">Article I - Definitions</h4> <p>For the purposes of this Agreement, the following words and phrases shall have the following meanings:</p> <p>1.1 “Affiliate” means any corporation, company, partnership, joint venture, firm and/or entity which controls, is controlled by or is under common control with Licensee.</p> <p>1.2    “Confidential Information” means all materials, trade secrets, or other information regarding a party’s technology, products, business information, or objectives which is designated as confidential in writing by the disclosing party, whether by letter or by the use of an appropriate stamp or legend, prior to or at the time any such material, trade secret, or other information is disclosed by the disclosing party to the other party. Notwithstanding the foregoing to the contrary: (a) materials, trade secrets, or other information which is orally, electronically or visually disclosed by a party, or is disclosed in writing without an appropriate letter, stamp, or legend, shall constitute Confidential Information if the disclosing party, within thirty (30) days after such disclosure, delivers to the other party a written document or document describing the materials, trade secrets, or other information and referencing the place and date of such oral, electronic, visual or written disclosure and the names of the person or persons to whom such disclosure was made; and (b) information obtained by either party while visiting the other party’s facility, however obtained, shall constitute Confidential Information of the other Party.</p> <p>1.3    “Deliverables” means the items listed in an Order to be delivered by Security Innovation to Licensee pursuant to Article II of this Agreement.</p> <p>1.4    &quot;End User&quot; means a direct employee or affiliate employee of Licensee who consumes paid for Licensed Security Innovation Product, or an individual who purchases and consumes Licensed Security Innovation Product, for use within the bounds of this agreement.</p> <p>1.5     “Licensee” means the organization or individual with a paid up and active subscription to the Security Innovation Product.</p> <p>1.6    &quot;Security Innovation Product&quot; means Security Innovation&#39;s proprietary multimedia training and reference systems and includes Security Innovation proprietary content and the software delivery system including, but not limited to: Safelight, PCI Essentials, TEAM Professor, TEAM Mentor and TEAM Academy.</p> <p>1.7    “Internal” means within the Licensee organization and not part of a public or external event where the Security Innovation Product is used to train individuals who are not End-Users.</p> <p>1.8    “Permitted use” means the following application usage activities:</p> <ul> <li>(a) Internal training of Licensee employees</li> <li>(b) Internal training of Licensee affiliates</li> <li>(c) For training a Licensee</li> </ul> <p>1.9    “On-Site” means Security Innovation Product is installed at the Licensee’s facilities in a private Learning Management System (LMS).</p> <p>1.10    “Hosted” means Security Innovation Product and student data is held on and delivered from the Security Innovation secure online LMS.</p> <p>1.11    “Subscription” means an annually renewable license for a specific number of End-Users and specified Content, Hosted or On-Site, for a fixed fee. A subscription includes maintenance and support, but not installation or customization costs, as part of the annual fixed fee.</p> <p>1.12    “Enterprise” means an annually renewable license for an unlimited number of End-Users and specified Content, Hosted or On-Site, within an organization for an annual fixed-fee, not including installation or customization costs.</p> <p>1.13    “Order” means a purchase order, signed sales proposal, e-Commerce transaction, or other ordering document issued by Licensee or individual to Security Innovation, its distributors, resellers or other agents, and describing the quantity and type of Security Innovation Product.</p> <p>1.14    “Effective Date” means the date the Order takes place.</p> <h4 id=\"article-ii-deliverables\">Article II - Deliverables</h4> <h5 id=\"2-1-delivery\">2.1    Delivery</h5> <p>Within 30 days following the later of the Effective Date and receipt of any agreed upon initial payments by Licensee pursuant to Section 7.1, Security Innovation shall provide the Deliverables to Licensee.</p> <h4 id=\"article-iii-license-grant\">Article III - License Grant</h4> <h5 id=\"3-1-licenses\">3.1    Licenses</h5> <p>Subject to the terms and conditions of this Agreement, Security Innovation hereby grants to the Licensee a worldwide, nonexclusive, non-transferable, license:</p> <ul> <li>(a) To use the Security Innovation Product internally on Licensee’s LMS to train End Users or;</li> <li>(b) To use the software internally via Security Innovation’s secure online LMS to train End Users or;</li> <li>(c) To use the Security Innovation Product personally</li> </ul> <h5 id=\"3-2-no-other-rights\">3.2    No Other Rights</h5> <p>Licensee hereby acknowledges that it shall have no right to sell, convey, transfer, license, sublicense, modify, or otherwise dispose of Security Innovation Product, except as provided herein.  Licensee further acknowledges that its rights are limited to those of a licensee only, and that:</p> <ul> <li>(i) Security Innovation retains all title to and intellectual property rights in the Security Innovation Product;</li> <li>(ii) nothing herein shall be construed as granting Licensee any right, title and interest other than as specifically set forth herein; and</li> <li>(iii) nothing herein shall be construed as granting any group, division or Affiliate of Licensee any right, title and interest or license to use Security Innovation Product.</li> </ul> <h5 id=\"3-3-license-limitations\">3.3    License Limitations</h5> <p>The licenses granted in Section 3.1 are subject to the following additional limitations:</p> <ul> <li>(a) Licensee may not in any way sell, lease, rent, license, sublicense or otherwise distribute the Security Innovation Product or any part thereof or the right to use any part of the Security Innovation Product to any person or entity</li> <li>(b) Without Security Innovation’s prior written consent, Licensee shall not modify, translate, reverse engineer, decompile, disassemble or recreate the Security Innovation Product or any part thereof, and shall prohibit End Users from doing the same.</li> <li>(c) The licenses granted herein do not permit Licensee to provide services to third parties utilizing Licensee Products or the Security Innovation Product.</li> </ul> <h5 id=\"3-4-third-party-agents\">3.4    Third Party Agents</h5> <p>Under the License granted in this Article III (License Grant), Licensee may permit its Third Party Agents to be treated as an End User and use the Software provided that Licensee will be fully responsible for its Third Party Agents’ compliance with terms and conditions of this Agreement and any breach of this Agreement by a Third Party Agent shall be deemed to be a breach by Licensee.</p> <h4 id=\"article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</h4> <h5 id=\"4-1-ownership\">4.1    Ownership</h5> <p>With respect to the intellectual property of Security Innovation and Licensee relating to this Agreement:</p> <ul> <li>(a) any intellectual property developed by Security Innovation or Licensee prior to the Effective Date shall remain the intellectual property of that party.</li> <li>(b) any intellectual property that is developed solely by Security Innovation, and relevant to the scope of this Agreement (including, without limitation, the Security Innovation Product) shall remain the intellectual property of Security Innovation.</li> </ul> <h4 id=\"article-v-trademarks\">Article V - Trademarks</h4> <h5 id=\"5-1-use-of-security-innovation-trademarks\">5.1 Use of Security Innovation Trademarks</h5> <p>Security Innovation hereby grants to Licensee a non-exclusive, limited license to use the applicable Security Innovation trademarks and logos (“Trademarks”) solely as permitted in this Agreement.  Licensee understands and agrees that the use of any Trademark in connection with this Agreement shall not create any right, title or interest, in or to the use of the Trademark and that all such use and goodwill associated with the Trademark will inure to the benefit of Security Innovation.  Licensee agrees not to register or attempt to register any Security Innovation Trademarks. All trademarks, service marks, trade names, logos, or other words or symbols identifying or associated with the Software or the business of Security Innovation (“Marks”) remain the exclusive property of Security Innovation and its Licensors. Licensee will not do anything to impair those proprietary rights or seek to acquire or register any rights in the Marks or use any trademarks, service marks, trade names, logos or other words or symbols that are confusingly similar to the Marks in any language.</p> <h4 id=\"article-vi-support\">Article VI - Support</h4> <h5 id=\"6-1-technical-support-and-maintenance\">6.1    Technical Support and Maintenance</h5> <p>Security Innovation shall provide support and maintenance services specified in the Security Innovation Service Level Agreement (SLA).</p> <h4 id=\"article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</h4> <p>In consideration of the licenses granted by Security Innovation and the Support Services provided by Security Innovation to Licensee in this Agreement, Licensee agrees to pay to Security Innovation a license fee as follows:</p> <h5 id=\"7-1-license-fee\">7.1    License Fee</h5> <p>In consideration of Security Innovation&#39;s delivery of the Deliverables, Licensee agrees to pay to Security Innovation a license fee as defined in the Order.</p> <h5 id=\"7-2-taxes\">7.2    Taxes</h5> <p>Licensee will pay all government taxes, duties and tariffs not based on either Security Innovation&#39;s net income from all sources or Security Innovation&#39;s aggregate net worth, including, but not limited to, sales, use, transfer, value-added, privilege, property taxes, import and export duties or tariffs, or amounts levied in lieu thereof, based on charges payable under this Agreement whether such taxes and duties are now or hereafter imposed under the authority of any federal, state, local or other taxing jurisdiction.  Licensee will comply with all requirements of the laws imposing such taxes and duties, including, without limitation, paying any interest or penalties relating to such taxes and duties.  If applicable, Licensee will provide Security Innovation with a Certificate of Exemption issued pursuant to such laws.</p> <h4 id=\"article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</h4> <h5 id=\"8-1-records\">8.1    Records</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, Licensee shall keep all records of account as are necessary to demonstrate compliance with its obligations under Article VIII for a period of three years from the due date for the payment of such sums as are payable in accordance with Article VIII (the “Audit period.”).</p> <h5 id=\"8-2-reports\">8.2    Reports</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, within thirty (30) days after the last business day of each calendar quarter, Licensee shall provide Security Innovation with a written user count report should the user count exceed the count purchased by Licensee. Such report, at a minimum, shall contain information detailing the number of users and the number of courses consumed.</p> <h5 id=\"8-3-audit-rights\">8.3    Audit Rights</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, to assure compliance with the payment and reporting requirements of this Agreement, Security Innovation or an independent auditor of its choosing may examine, inspect and audit the applicable records of Licensee and its Affiliates from time to time, but no more frequently than twice per year.  In the event any such audit of Licensee’s records indicates an underpayment of an amount equal to or greater than five percent (5%) of any amounts due hereunder, Licensee shall promptly reimburse Security Innovation for the costs of such audit.  Licensee and its Affiliates shall also immediately pay any underpayment in the amounts due to Security Innovation ascertained from such audit.  The provisions of this Section shall survive expiration or termination of this Agreement.</p> <h4 id=\"article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</h4> <h5 id=\"9-1-non-electronic-notices\">9.1    Non-Electronic Notices</h5> <p>Any notice or other non-electronic communication pursuant to this Agreement shall be sent to such party by overnight courier, or regular mail, addressed to the address below or as it shall designate by written notice given to the other party. Any such communication shall be effective upon receipt by the party to whom it is addressed.</p> <p>Notices to Security Innovation shall be addressed to:</p> <pre><code>SECURITY INNOVATION, Inc. 187 Ballardvale St, Suite A202 Wilmington, MA  01887 USA Attn: Ombudsman </code></pre><h5 id=\"9-2-electronic-notices\">9.2    Electronic Notices</h5> <p>Any notice or electronic communication pursuant to this agreement shall be sent containing an appropriate and correctly attached digital certificate identifying the sender in non-repudiable terms to:</p> <pre><code>ombudsman@securityinnovation.com </code></pre><h4 id=\"article-x-assignment\">Article X - Assignment</h4> <h5 id=\"10-1-assignment\">10.1    Assignment</h5> <p>This Agreement and the license contained herein are personal to Licensee and may not be assigned or transferred by Licensee, without the prior written consent of Security Innovation.  For purposes hereof, an “assignment” shall include any change in control of Licensee whereby another person or entity acquires 50% or greater ownership of Licensee.  For the avoidance of doubt, reassignment assumes changes to the relevant user data used to identify students, the changing of which must be managed by Security Innovation so as to not interrupt service.</p> <h4 id=\"article-xi-confidentiality\">Article XI - Confidentiality</h4> <h5 id=\"11-1-treatment-of-confidential-information\">11.1    Treatment of Confidential Information</h5> <p>Each party hereto shall maintain the Confidential Information of the other party in confidence, and shall not disclose, divulge, or otherwise communicate such Confidential Information, including but not limited to the terms of this Agreement, to others, or use it for any purpose, except pursuant to, and in order to carry out, the terms and objectives of this Agreement or the written consent of the other party. Each party hereby agrees to exercise every reasonable precaution to prevent and restrain the unauthorized disclosure of such Confidential Information by any of its directors, officers, employees, consultants, subcontractors, licensees, or agents.</p> <h5 id=\"11-2-release-from-restrictions\">11.2    Release from Restrictions</h5> <p>The provisions of Section 11.1 shall not apply to Confidential Information disclosed hereunder which;</p> <ul> <li>(a) was known or used by the receiving party prior to its date of disclosure to the receiving party; or</li> <li>(b) either before or after the date of disclosure to the receiving party is lawfully disclosed to the receiving party by sources rightfully in possession of such Confidential Information other than the disclosing party; or</li> <li>(c) either before or after the date of disclosure to the receiving party, becomes published or generally known to the public, through no fault of the receiving party, its Affiliates or sub-licensees; or</li> <li>(d) is required to be disclosed by the receiving party to comply with applicable laws or applicable rules of any securities exchange on which the receiving party’s securities are traded, to defend or prosecute litigation, or to comply with governmental regulations, provided however that the receiving party provides prior written notice of such disclosure to the other party and takes reasonable and lawful actions to avoid and/or minimize the degree of such disclosure.</li> </ul> <h4 id=\"article-xii-warranties\">Article XII - Warranties</h4> <h5 id=\"12-1-representations-and-warranties-of-security-innovation\">12.1    Representations and Warranties of Security Innovation</h5> <ul> <li>(a) Security Innovation represents and warrants to Licensee that all corporate action on the part of Security Innovation, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Security Innovation hereunder has been taken and this Agreement constitutes the legal and binding obligation of Security Innovation, enforceable against Security Innovation in accordance with its terms.</li> <li>(b) Security Innovation further represents and warrants to Licensee that:  (i) it has sufficient right, title and interest in the Security Innovation Product to enter into this Agreement; and (ii) the Security Innovation Product is the original work of Security Innovation and its licensors and was developed without unauthorized access to or knowledge of any third party confidential materials.</li> <li>(c) THE SECURITY INNOVATION PRODUCT AND THE DELIVERABLES ARE PROVIDED AS IS.  SECURITY INNOVATION DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS OR IMPLIED WITH RESPECT TO THE SECURITY INNOVATION PRODUCT OR THE DELIVERABLES.</li> </ul> <h5 id=\"12-2-representations-and-warranties-of-licensee\">12.2    Representations and Warranties of Licensee</h5> <p>Licensee represents and warrants to Security Innovation that all corporate action on the part of Licensee, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Licensee hereunder has been taken and this Agreement constitutes the legal and binding obligation of Licensee, enforceable against Licensee in accordance with its terms. The execution of this Agreement and the performance of the transactions contemplated by this Agreement by Licensee will not conflict with or result in a breach of any of the terms, conditions or provisions of, or constitute a default under, or require a consent under its Certificate of Incorporation or Bylaws (as amended or restated to date) or any agreement or other instrument to which Licensee is a party or by which it or any of its property is bound.</p> <h4 id=\"article-xiii-indemnities\">Article XIII - Indemnities</h4> <h5 id=\"13-1-infringement-indemnification-by-security-innovation\">13.1    Infringement Indemnification by Security Innovation</h5> <p>Security Innovation agrees that it shall, at its own expense, defend, or at its option settle, any action or claim instituted against Licensee, and pay any award or damages assessed or settled upon against Licensee resulting from such action or claim, insofar as the same is based upon a claim that the Security Innovation Product as delivered to Licensee infringes any patent, trademark, copyright or trade secret of a third party or a claim that Security Innovation has no right to license the Security Innovation Product to Licensee hereunder.  Such obligation is subject to the following conditions:  (i) Licensee shall notify Security Innovation in writing immediately after Licensee first becomes aware of a claim; (ii) Security Innovation shall have the right to control and direct the investigation, preparation, defense and settlement of the action; and (iii) Licensee shall give Security Innovation all reasonably available information, assistance and authority.  The foregoing indemnity shall not apply if the alleged infringement claim arises from use of other than the current unaltered release of the Security Innovation Product, or combination of the Security Innovation Product with other software or hardware not provided by Security Innovation, if such action would have been avoided but for such use or combination.</p> <h5 id=\"13-2-exclusive-sole-remedy\">13.2.    Exclusive Sole Remedy</h5> <p>If as a result of any binding settlement among the parties or a final determination by a court of competent jurisdiction, the Security Innovation Product is held to infringe a third party’s patent, trademark, copyright or trade secret and its use is enjoined, or if Security Innovation reasonably determines in its sole discretion that the Software may become subject to an injunction, Security Innovation shall have the option to:  (a) obtain for Licensee the right to continued use of the Security Innovation Product;  (b) replace or modify the Security Innovation Product so it is no longer infringing and is substantially similar in functionality to the enjoined Security Innovation Product; or (c)  refund the license fees paid by Licensee hereunder less depreciation for use assuming straight line depreciation over a five year useful life and terminate this Agreement.   NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, THE FOREGOING STATES SECURITY INNOVATION&#39;S ENTIRE LIABILITY AND LICENSEE&#39;S SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO CLAIMS OF INFRINGEMENT OF THIRD PARTY PROPRIETARY OR INTELLECTUAL PROPERTY RIGHTS OF ANY KIND, AND SECURITY INNOVATION EXPRESSLY DISCLAIMS ANY IMPLIED WARRANTY OF NON-INFRINGEMENT.</p> <h4 id=\"article-xiv-limitations\">Article XIV - Limitations</h4> <h5 id=\"14-1-limitation-of-liability\">14.1.    Limitation of Liability</h5> <ul> <li>(a) Nothing in this Agreement shall exclude or limit liability for death or personal injury resulting from the failure of a party to exercise reasonable care in the performance of its obligations under this Agreement.</li> <li>(b) THE AGGREGATE LIABILITY OF SECURITY INNOVATION UNDER ANY CLAIMS ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE PERFORMANCE OF THEIR OBLIGATIONS UNDER THIS AGREEMENT (WHETHER IN CONTRACT, TORT, NEGLIGENCE, WARRANTY OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT THEN PAYABLE TO SECURITY INNOVATION BY LICENSEE UNDER THIS AGREEMENT.</li> </ul> <h5 id=\"14-2-limitation-of-damages\">14.2    Limitation of Damages</h5> <p>IN ANY EVENT, NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY ECONOMIC LOSS OR FOR SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, REGARDLESS OF THE FORM OF ACTION, EVEN IF SUCH PARTY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p> <h4 id=\"article-xv-term-of-agreement\">Article XV - Term of Agreement</h4> <h5 id=\"15-1-term\">15.1    Term</h5> <p>This Agreement shall be effective as of the Effective Date. Unless earlier terminated upon the mutual agreement of the Parties or in accordance with the provisions of Article XVI, or otherwise specified in the Order, this Agreement shall continue in force for one (1) year from the Effective Date.</p> <h4 id=\"article-xvi-termination\">Article XVI - Termination</h4> <h5 id=\"16-1-termination-for-insolvency\">16.1    Termination for Insolvency</h5> <p>If Licensee shall cease to carry on its business for any reason, be liquidated or dissolved, become insolvent, enter into an agreement for the benefit of its creditors, or file any petition or case under any bankruptcy law or if any such petition or case is filed against it which remains undismissed after sixty (60) days, then this Agreement and all rights, privileges and license granted hereunder shall terminate.</p> <h5 id=\"16-2-termination-for-breach\">16.2    Termination for Breach</h5> <p>Upon any material breach or default of this Agreement by either party, the non-breaching party shall have the right to terminate this Agreement upon forty-five (45) days’ written notice to the breaching party, unless the breaching party shall have cured any such breach or default prior to the expiration of such sixty (60) day period.</p> <h4 id=\"article-xvii-effect-of-termination\">Article XVII - Effect of Termination</h4> <h5 id=\"17-1-consequences-of-termination\">17.1    Consequences of Termination</h5> <p>Upon termination of this Agreement for any reason, all rights, privileges and licenses granted hereunder shall immediately cease, provided, however, that nothing herein shall be construed to release either party from any obligation that accrued or matured prior to the effective date of such termination.  Upon termination of this Agreement for any reason, Licensee agrees to immediately cease use of all Security Innovation Product and to cease use of all Confidential Information of Security Innovation, and to return all Confidential Information of Security Innovation to Security Innovation.</p> <p>Any termination or expiration of this Agreement shall not affect any accrued rights or liabilities of either party. The obligations of each party under Sections 4, 5, 8, 10, 11, 13, 14, 16, 17 and 18 shall survive termination or expiration of this agreement.</p> <h4 id=\"article-xviii-general-provisions\">Article XVIII - General Provisions</h4> <h5 id=\"18-1-governing-law\">18.1    Governing Law</h5> <p>This Agreement shall be construed, governed, interpreted and applied in accordance with the laws of the Commonwealth of Massachusetts, United States of America and the federal laws of the United States, without giving effect to any conflict of laws principles.</p> <h5 id=\"18-2-injunctive-relief\">18.2    Injunctive Relief</h5> <p>It is expressly agreed that a material breach of this Agreement will cause irreparable harm to Security Innovation and that a remedy at law would be inadequate.  Therefore, in addition to any and all remedies available at law, Security Innovation and/or Security Innovation Licensors shall be entitled to seek injunctive relief against Licensee in the event of any threatened or actual violation of any or all provisions in this Agreement.</p> <h5 id=\"18-3-severability\">18.3    Severability</h5> <p>The provisions of this Agreement are severable, and in the event that any provisions of this Agreement shall be determined to be invalid or unenforceable under any controlling body of the law, such invalidity or unenforceability shall not in any way affect the validity or enforceability of the remaining provisions hereof.</p> <h5 id=\"18-4-no-waiver\">18.4    No Waiver</h5> <p>The failure of either party to assert a right hereunder or to insist upon compliance with any term or condition of this Agreement shall not constitute a waiver of that right or excuse a similar subsequent failure to perform any such term or condition by the other Party.</p> <h5 id=\"18-5-u-s-government-restricted-rights\">18.5 U.S. GOVERNMENT RESTRICTED RIGHTS</h5> <p>If the Security Innovation Product is acquired on behalf of a unit or agency of the United States Government this provision applies.</p> <p>For units of the Department of Defense (DoD), this Software is supplied only with “Restricted Rights” as that term is defined in the DoD Supplement to the Federal Acquisition Regulations, 52.227-7013(c)(1)(ii) and:</p> <pre><code>Use, duplication or disclosure by the Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 52.227-7013. Contractor: SECURITY INNOVATION, Inc., 187 Ballardvale Street, Suite 202, Wilmington, MA 01887 </code></pre><p>Government personnel using this Software, other than under a DoD contract or GSA Schedule, are hereby on notice that use of this Software is subject to restricted rights, which are the same as, or similar to those specified above.</p> <h5 id=\"18-6-export-controls\">18.6    Export Controls</h5> <ul> <li>(a) The Security Innovation Products are eligible for (and are being exported under) License Exception ENC of the Export Administration Regulations C.F.R. 740.17 and Security Innovation have submitted all notifications required to establish such eligibility.  Licensee agrees to make only such uses of the Security Innovation Products, as are in compliance with that status. Without limiting the forgoing, Licensee agrees: (i) not to develop any foreign products using the [Security Innovation Product(s)]; and (ii) not to modify the Security Innovation Products, in such a way as to add or substitute cryptographic algorithms or otherwise modify the encryption functionality of such products.</li> <li>(b) Licensee shall not re-export any Security Innovation Product to any destination or end user in violation of any acceptable laws or regulations of the United States government.  Licensee shall be solely responsible for compliance with all such laws and regulations and for obtaining any and all export or import licenses or permits that may be required from Licensee to lawfully conduct its business with respect to the Security Innovation Products,</li> <li>(c) Licensee shall obtain all necessary licenses and authorizations for governments or other relevant bodies to enable Licensee to fulfill its obligations under this Agreement, which shall include, but not be limited to, customs clearances, registration of the Agreement if appropriate, export licenses, exchange control clearances, trading permits and registration for Value Added Tax (VAT) or its equivalent.</li> </ul> <h5 id=\"18-7-no-use-of-names\">18.7    No Use of Names</h5> <p>Except as expressly permitted by this Agreement, neither party shall use the name of the other party or any of its employees nor any adaptation thereof in any advertising, promotion or sales literature without the prior written consent of the other party.</p> <h5 id=\"18-8-no-agency\">18.8    No Agency</h5> <p>Nothing herein shall be deemed to constitute Security Innovation, on the one hand, or Licensee, on the other hand, as the agent or representative of the other, or as joint venturers or partners for any purpose.</p> <h5 id=\"18-9-headings\">18.9    Headings</h5> <p>The headings contained in this Agreement are for convenience of reference only and shall not be considered in construing this Agreement.</p> <h5 id=\"18-10-successors-and-assigns\">18.10    Successors and Assigns</h5> <p>This Agreement shall be binding upon and inure to the benefit of the Parties and their successors and permitted assigns.</p> <h5 id=\"18-11-third-party-rights\">18.11    Third Party Rights</h5> <p>Other than as expressly set out in this Agreement, this Agreement does not create any rights for any person who is not a party to it, and no person who is not a party to this Agreement may enforce any of its terms or rely on any exclusion or limitation contained in it.</p> <h5 id=\"18-12-counterparts\">18.12    Counterparts</h5> <p>This Agreement may be executed in any number of counterparts, each of which shall be deemed an original but all of such together shall constitute one and the same instrument.</p> <h5 id=\"18-13-force-majeure\">18.13    Force Majeure</h5> <p>Neither party shall be liable hereunder by reason of any failure or delay in the performance of its obligations hereunder (except for the payment of money) on account of strikes, shortages, failure of suppliers, riots, insurrection, fires, floods, storms, earthquakes, acts of God, war, governmental action, labor conditions, or any other cause which is beyond the reasonable control of such party.  If such failure or delay continues for at least ninety (90) days, the party not subject to the force majeure shall be entitled to terminate this Agreement by notice in writing to the other.</p> <h5 id=\"18-14-entire-agreement\">18.14 Entire Agreement</h5> <p>The parties acknowledge that this Agreement sets forth the entire Agreement and understanding of the parties as to the subject matter hereof and this Agreement shall not be subject to any change or modification except by the execution of a written instrument executed by both parties.</p> </div></div></div>");
    $templateCache.put('/angular/jade-html/views/user/article', "<!--include ../mixins/globals--><div class=\"main\"><article></article><!--include ../component/article.jade--></div>");
    $templateCache.put('/angular/jade-html/views/user/article_box', "<div class=\"main\"><div class=\"section row\"><div class=\"col-3\"><article-box></article-box></div><div class=\"col-9\"></div></div></div>");
    $templateCache.put('/angular/jade-html/views/user/index', "<div ng-controller=\"Index_Controller\" class=\"main\"><div class=\"\{\{column_Left}} application-scroll left-col\"><queries></queries></div><div class=\"\{\{column_Middle}} middle-col\"><breadcrumbs></breadcrumbs><results></results><filters_active></filters_active><div class=\"scrolling-results\"><articles></articles><pagination></pagination></div></div><div class=\"\{\{column_Right}} application-scroll right-col\"><filters class=\"filters\"></filters></div></div>");
    $templateCache.put('/angular/jade-html/views/user/main', "<!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!-- Terms and Conditions Navigation--><div class=\"main\"><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Popular Search Terms</div></div><div ng-controller=\"Search_Controller\" class=\"section row\"><div ng-repeat=\"search in top_Search\" class=\"search-term\"><span class=\"icon\"><icon class=\"Star\"></icon></span><span class=\"link\"><a href=\"\{\{search.url}}\"><span>\{\{search.title}}</span></a></span></div></div></div><div ng-controller=\"Article_Controller\"><div class=\"section row\"><div class=\"section row__label\"><div ng-show=\"recent_Articles.length &gt; 0\" class=\"label\">Recently Viewed Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in recent_Articles\" class=\"article-box\"></article-box></div></div><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Top Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in top_Articles\" class=\"article-box\"></article-box></div></div></div></div>");
    return $templateCache.put('/angular/jade-html/views/user', "<!--extends ../_to_be_wired_in/_layouts/page_logged_in--><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"application\"><div class=\"main\"><div class=\"section row\"><div class=\"col-3\"><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><div class=\"section row__label\"><div class=\"label\">@username</div></div><div class=\"section row\"><form><input type=\"text\" name=\"name\" value=\"First name, Last name\"/><input type=\"text\" name=\"work\" value=\"Position, Company\"/><input type=\"email\" name=\"email\" value=\"Email\"/><button type=\"submit\"><span class=\"icon-Tick\"></span></button></form></div></div><div class=\"col-9\"><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"section row__label\"><div class=\"label\">Saved Items</div><ul class=\"display-inline\"><li><a href=\"\" class=\"button btn-result icon-Filter\"></a></li><li><button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button></li><li><button title=\"Share results\" class=\"btn-result icon-Share\"></button></li></ul></div><div class=\"section row\"><!-- Application Icons--><!-- Filter Icons--><!-- filter icons--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"article search-term\"><a href=\"app-keyword-search\"><span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span><span>Search Term</span></a></div><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></div><div class=\"section row\"><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"article result\"><div class=\"metadata\"><ul><li><br/></li><!--li+filter-icon('Type', result.type)--><!--li+filter-icon('Phase', result.phase)--><!--li+filter-icon('Technology', result.technology)--></ul></div><div class=\"summary\"><a href=\"#\"><h3 id=\"article-headline\">Article Headline</h3></a><p>Article Summary</p><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></div></div></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><span title=\"Mail\" class=\"icon-Mail\"></span></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><span title=\"Twitter\" class=\"icon-Twitter\"></span></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span></a></li></ul></div></div></div></div></div></div>");
  });

}).call(this);

(function() {
  angular.module('TM_App').run(function($templateCache, $browser, $log) {
    if (true) {
      if ($browser.isMock === false) {
        $log.info('Since we are running in a real browser, removing all template caches (for now)');
        return $templateCache.removeAll();
      }
    }
  });

}).call(this);

(function() {
  var slice = [].slice;

  angular.module('TM_App').run(function($rootScope, tm_angular_config) {
    var body, events, i, len, log_Event, name, results;
    body = angular.element(document.body);
    body.on('keydown', function(event) {
      if (event) {
        return $rootScope.$broadcast('keydown', event);
      }
    });
    body.on('keyup', function(event) {
      if (event) {
        return $rootScope.$broadcast('keyup', event);
      }
    });
    if (tm_angular_config.log_Events) {
      log_Event = function(name) {
        return $rootScope.$on(name, function() {
          var params;
          params = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return console.log({
            event: name,
            time: (new Date()).getMilliseconds(),
            params: params
          });
        });
      };
      events = ['apply_filter', 'apply_query', 'clear_articles', 'clear_filter', 'clear_query', 'clear_search', 'query_data', 'article_data', 'filter_data', 'set_page', 'set_page_split', 'toggle_filters', 'view_filters', 'view_model_data', 'test'];
      results = [];
      for (i = 0, len = events.length; i < len; i++) {
        name = events[i];
        results.push(log_Event(name));
      }
      return results;
    }
  });

  angular.module('TM_App').factory('httpInterceptor', function($q, tm_angular_config) {
    return {
      request: function(config) {
        if (config && tm_angular_config.log_Urls) {
          console.log(config.method + " " + config.url);
        }
        return $q.when(config);
      }
    };
  }).config(function($httpProvider) {
    return $httpProvider.interceptors.push('httpInterceptor');
  }).run(function($http, $rootScope) {
    var spinnerFunction_End, spinnerFunction_Start;
    spinnerFunction_Start = function(data) {
      $rootScope.$broadcast('http_start');
      return data;
    };
    spinnerFunction_End = function(data) {
      $rootScope.$broadcast('http_end');
      return data;
    };
    $http.defaults.transformRequest.push(spinnerFunction_Start);
    return $http.defaults.transformResponse.push(spinnerFunction_End);
  });

}).call(this);

(function() {
  var expect,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    hasProp = {}.hasOwnProperty;

  Array.prototype.contains = function(value) {
    var i, item, len;
    if (value instanceof Array) {
      for (i = 0, len = value.length; i < len; i++) {
        item = value[i];
        if (!(indexOf.call(this, item) >= 0)) {
          return false;
        }
      }
      return true;
    } else {

    }
    return indexOf.call(this, value) >= 0;
  };

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
  }, window.using = function(target, callback) {
    return callback.apply(target);
  });

  if (window['chai']) {
    expect = chai.expect;
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
    Boolean.prototype.assert_Is_False = function() {
      expect(this.valueOf()).to.equal(false);
      return false;
    };
    Boolean.prototype.assert_Is_True = function() {
      expect(this.valueOf()).to.equal(true);
      return true;
    };
    Array.prototype.assert_Contains = function(value, message) {
      var i, item, len;
      message = message || "[assert_Contains]";
      if (value instanceof Array) {
        for (i = 0, len = value.length; i < len; i++) {
          item = value[i];
          this.contains(item).assert_Is_True(item + " not found in array: " + this);
        }
      } else {
        this.contains(value).assert_Is_True(message);
      }
      return this;
    };
  }

}).call(this);

(function() {
  var app, routes_Names;

  app = angular.module('TM_App');

  routes_Names = {
    components: {},
    views: {
      guest: ['about', 'features', 'home', 'login', 'pwd_forgot', 'sign_up'],
      user_Root: ['docs', 'terms_and_conditions'],
      user_User: ['main', 'index', 'articles']
    }
  };

  app.constant('routes_Names', routes_Names);

}).call(this);

(function() {
  var tm_angular_config;

  tm_angular_config = {
    log_Events: false,
    log_Urls: false
  };

  angular.module('TM_App').constant('tm_angular_config', tm_angular_config);

}).call(this);

(function() {
  angular.module('TM_App').controller('Help_Controller', function($sce, $scope, TM_API) {
    $scope.show_Doc = function(article) {
      if (article) {
        return TM_API.docs_Page(article.Id, function(article_Data) {
          $scope.title = article.Title;
          return $scope.content = $sce.trustAsHtml(article_Data.html);
        });
      }
    };
    $scope.load_Library = function() {
      return TM_API.docs_Library(function(library) {
        var ref, ref1, ref2;
        if (library != null ? library.Views : void 0) {
          $scope.Views = library.Views;
          return $scope.show_Doc((ref = library.Views) != null ? (ref1 = ref.first()) != null ? (ref2 = ref1.Articles) != null ? ref2.first() : void 0 : void 0 : void 0);
        }
      });
    };
    return $scope.load_Library();
  });

}).call(this);

(function() {
  var Map_Directives,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Map_Directives = (function() {
    function Map_Directives(options) {
      this.map_All = bind(this.map_All, this);
      this.map_Components = bind(this.map_Components, this);
      this.app = options.app;
      this.design_Components = ['all_icons', 'events'];
      this.guest_Components = ['login_form', 'pwd_forgot_form', 'sign_up_form', 'pwd_reset_form'];
      this.navigation_Components = ['landing_bar', 'left_navigation'];
      this.user_Components = ['active_filter', 'article', 'article_box', 'articles', 'breadcrumbs', 'filters', 'filters_active', 'pagination', 'queries', 'queries_history', 'results', 'search_bar'];
      this.root_Components = ['alert_ok', 'alert_bad', 'help_navigation'];
    }

    Map_Directives.prototype.resolve_Directive_Name = function(name) {
      var directive_Name, i, index, len, ref, segment;
      directive_Name = "";
      ref = name.split('_');
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        segment = ref[index];
        directive_Name += index ? segment.upper_Case_First_Letter() : segment;
      }
      return directive_Name;
    };

    Map_Directives.prototype.map_Components = function(path, components) {
      var component, i, len, results;
      results = [];
      for (i = 0, len = components.length; i < len; i++) {
        component = components[i];
        results.push((function(_this) {
          return function(component) {
            return _this.app.directive(_this.resolve_Directive_Name(component), function() {
              return {
                templateUrl: "/angular/jade-html/component" + path + "/" + component
              };
            });
          };
        })(this)(component));
      }
      return results;
    };

    Map_Directives.prototype.map_All = function() {
      this.map_Components('', this.root_Components);
      this.map_Components('/design', this.design_Components);
      this.map_Components('/guest', this.guest_Components);
      this.map_Components('/navigation', this.navigation_Components);
      return this.map_Components('/user', this.user_Components);
    };

    return Map_Directives;

  })();

  String.prototype.upper_Case_First_Letter = function() {
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  new Map_Directives({
    app: angular.module('TM_App')
  }).map_All();

}).call(this);

(function() {
  angular.module('TM_App').directive('icon', function(icon_Service) {
    return {
      template: function(element, attribute) {
        if (attribute["class"]) {
          return icon_Service.simple_Element_Html("icon-" + attribute["class"], attribute.title);
        }
        if (attribute.type) {
          return icon_Service.element_Html(attribute.type);
        }
        return icon_Service.element_Html('Default');
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').directive('showAllIcons', function(icon_Service) {
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
  angular.module('TM_App').directive('showComponent', function($compile, $location) {
    return {
      link: function($scope, element) {
        var component, component_Name;
        if ($location.$$path && $location.$$path !== '/') {
          component_Name = $location.$$path.substring(1);
          if (component_Name !== '') {
            component = document.createElement(component_Name);
            return element.replaceWith($compile(component)($scope));
          }
        }
      }
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

  app.service('ui_Routes', function() {});

  app.config(function($stateProvider, routes_Names) {
    var i, len, ref, results, view_Name;
    ref = routes_Names.views.guest;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      view_Name = ref[i];
      results.push($stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/guest/" + view_Name
      }));
    }
    return results;
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.config(function($stateProvider, routes_Names) {
    var i, j, len, len1, ref, ref1, view_Name;
    ref = routes_Names.views.user_Root;
    for (i = 0, len = ref.length; i < len; i++) {
      view_Name = ref[i];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/" + view_Name
      });
    }
    ref1 = routes_Names.views.user_User;
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      view_Name = ref1[j];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/user/" + view_Name
      });
    }
    $stateProvider.state('logout', {
      url: "/logout",
      controller: 'Logout_Controller'
    });
    $stateProvider.state('article', {
      url: "/article/:article_Id/:article_Title",
      templateUrl: '/angular/jade-html/views/user/article'
    });
    $stateProvider.state('guid', {
      url: "/:article_Id",
      templateUrl: '/angular/jade-html/views/user/article'
    });
    $stateProvider.state('article-box', {
      url: "/article-box/:article_Id/:article_Title",
      templateUrl: '/angular/jade-html/views/user/article_box'
    });
    return $stateProvider.state('index_query_id', {
      url: "/index/:query_Id",
      templateUrl: '/angular/jade-html/views/user/index'
    });
  });

  app.run((function(_this) {
    return function($rootScope, $window, TM_API, routes_Names) {
      $rootScope.$on('$stateChangeStart', function(event, next, current) {
        if (routes_Names.views.guest.indexOf(next.name) > -1 || next.name === "docs") {

        } else {
          return TM_API.currentuser(function(userInfo) {
            if ((userInfo != null) && (userInfo != null ? userInfo.UserEnabled : void 0)) {

            } else {
              return $window.location.href = '/angular/guest/login';
            }
          });
        }
      });
    };
  })(this));

}).call(this);

(function() {
  var Icon_Service, mappings,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  mappings = {
    '.NET': {
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
      "class": 'icon-Deploy',
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
      layers: 8
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
      layers: 12
    }
  };

  Icon_Service = (function() {
    function Icon_Service() {
      this.simple_Element_Html = bind(this.simple_Element_Html, this);
      this.simple_Element = bind(this.simple_Element, this);
      this.element_Html = bind(this.element_Html, this);
      this.element = bind(this.element, this);
      this.mappings = mappings;
    }

    Icon_Service.prototype.element = function(key) {
      var element, i, j, mapping, ref;
      mapping = this.mappings[key];
      if (!mapping) {
        mapping = this.mappings['Default'];
      }
      element = this.simple_Element(mapping["class"], key);
      for (i = j = 1, ref = mapping.layers; j <= ref; i = j += 1) {
        element.append("<span class='path" + i + "'>");
      }
      return element;
    };

    Icon_Service.prototype.element_Html = function(key) {
      var ref;
      return (ref = this.element(key)[0]) != null ? ref.outerHTML : void 0;
    };

    Icon_Service.prototype.simple_Element = function(name, title) {
      var element;
      element = angular.element('<span>');
      using(element[0], function() {
        this.className = name;
        if (title) {
          return this.title = title;
        }
      });
      return element;
    };

    Icon_Service.prototype.simple_Element_Html = function(name, title) {
      return this.simple_Element(name, title)[0].outerHTML;
    };

    return Icon_Service;

  })();

  angular.module('TM_App').service('icon_Service', function() {
    return new Icon_Service();
  });

}).call(this);

(function() {
  var Query_Service, app,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app = angular.module('TM_App');

  Query_Service = (function() {
    function Query_Service(options) {
      this.reload_Data = bind(this.reload_Data, this);
      this.load_Query = bind(this.load_Query, this);
      this.load_Data = bind(this.load_Data, this);
      this.TM_API = options.TM_API;
      this.$rootScope = options.$rootScope;
      this.index_Query = 'query-6234f2d47eb7';
      this.default_Page_From = 0;
      this.default_Page_To = 10;
    }

    Query_Service.prototype.load_Data = function() {
      return this.load_Query(this.index_Query);
    };

    Query_Service.prototype.load_Query = function(query_Id, filters, from, to) {
      from = from || this.default_Page_From;
      to = to || this.default_Page_To;
      this.$rootScope.$broadcast('loading_query', query_Id, filters, from, to);
      return this.TM_API.query_view_model(query_Id, filters, from, to, (function(_this) {
        return function(data) {
          return _this.$rootScope.$broadcast('view_model_data', data);
        };
      })(this));
    };

    Query_Service.prototype.reload_Data = function() {
      this.$rootScope.$broadcast('clear_filters');
      this.$rootScope.$broadcast('clear_query');
      this.$rootScope.$broadcast('clear_search');
      return this.load_Data();
    };

    return Query_Service;

  })();

  app.service('query_Service', function($rootScope, TM_API) {
    return new Query_Service({
      TM_API: TM_API,
      $rootScope: $rootScope
    });
  });

}).call(this);

(function() {
  var TM_API, app,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  app = angular.module('TM_App');

  TM_API = (function() {
    function TM_API(q, http, timeout, state) {
      this.tmConfig = bind(this.tmConfig, this);
      this.popular_Search = bind(this.popular_Search, this);
      this.pwd_reset = bind(this.pwd_reset, this);
      this.currentuser = bind(this.currentuser, this);
      this.signup = bind(this.signup, this);
      this.logout = bind(this.logout, this);
      this.login = bind(this.login, this);
      this.top_Articles = bind(this.top_Articles, this);
      this.recent_Articles = bind(this.recent_Articles, this);
      this.article = bind(this.article, this);
      this.docs_Page = bind(this.docs_Page, this);
      this.docs_Library = bind(this.docs_Library, this);
      this.get_articles_parent_queries = bind(this.get_articles_parent_queries, this);
      this.query_from_text_search = bind(this.query_from_text_search, this);
      this.query_view_model = bind(this.query_view_model, this);
      this.get_Words = bind(this.get_Words, this);
      this.$q = q;
      this.$http = http;
      this.$timeout = timeout;
      this.cache_Articles = {};
      this.cache_Query_View_Model = {};
      this.currentUser = null;
      this.config = null;
      this.tmrecentArticles = null;
      this.topArticles = null;
    }

    TM_API.prototype.get_Words = function(term, callback) {
      var url;
      url = "/angular/api/auto-complete?term=" + term;
      return this.$http.get(url).success(function(data) {
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

    TM_API.prototype.query_view_model = function(id, filters, from, to, callback) {
      var url;
      if (filters) {
        url = "/api/data/query_view_model_filtered/" + id + "/" + filters + "/" + from + "/" + to;
      } else {
        url = "/api/data/query_view_model/" + id + "/" + from + "/" + to;
      }
      if (this.cache_Query_View_Model[url]) {
        return callback(this.cache_Query_View_Model[url]);
      } else {
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.cache_Query_View_Model[url] = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.query_from_text_search = function(text, callback) {
      var url;
      url = "/api/search/query_from_text_search/" + text;
      return this.$http.get(url).success(function(data) {
        return callback(data);
      });
    };

    TM_API.prototype.get_articles_parent_queries = function(article_Ids, ignore_Titles, callback) {
      var url;
      url = "/api/data/articles_parent_queries/" + (article_Ids.join(','));
      return this.$http.get(url).success(function(data) {
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

    TM_API.prototype.docs_Library = function(callback) {
      var url;
      url = "/json/docs/library";
      return this.$http.get(url).success(function(data) {
        return callback(data);
      });
    };

    TM_API.prototype.docs_Page = function(article_Id, callback) {
      var url;
      url = "/json/docs/" + article_Id;
      return this.$http.get(url).success(callback);
    };

    TM_API.prototype.article = function(article_Id, callback) {
      var url;
      if (this.cache_Articles[article_Id]) {
        return this.$timeout((function(_this) {
          return function() {
            return callback(_this.cache_Articles[article_Id]);
          };
        })(this));
      } else {
        url = "/jade/json/article/" + article_Id;
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.cache_Articles[article_Id] = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.recent_Articles = function(callback) {
      var url;
      if (this.tmrecentArticles) {
        return callback(this.tmrecentArticles);
      } else {
        url = "/jade/json/recentarticles";
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.tmrecentArticles = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.top_Articles = function(callback) {
      var url;
      if (this.topArticles) {
        return callback(this.topArticles);
      } else {
        url = "/jade/json/toparticles";
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.topArticles = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.login = function(username, password, callback) {
      var postData, url;
      url = "/json/user/login";
      postData = {
        username: username,
        password: password
      };
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.logout = function(callback) {
      var postData, url;
      url = "/json/user/logout";
      postData = {};
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.signup = function(username, password, confirmpassword, email, firstname, lastname, company, title, country, state, callback) {
      var postData, url;
      url = "/json/user/signup";
      postData = {
        username: username,
        password: password,
        'confirm-password': confirmpassword,
        email: email,
        firstname: firstname,
        lastname: lastname,
        company: company,
        title: title,
        country: country,
        state: state
      };
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.currentuser = function(callback) {
      var url;
      url = "/json/user/currentuser";
      if (this.currentUser) {
        return callback(this.currentUser);
      } else {
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.currentUser = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.pwd_reset = function(email, callback) {
      var postData, url;
      url = "/json/user/pwd_reset";
      postData = {
        email: email
      };
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.popular_Search = function(callback) {
      var url;
      url = "/jade/json/search/recentsearch";
      return this.$http.get(url).success((function(_this) {
        return function(data) {
          return callback(data);
        };
      })(this));
    };

    TM_API.prototype.tmConfig = function(callback) {
      var url;
      url = "/json/tm/config";
      if (this.config) {
        return callback(this.config);
      } else {
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            _this.config = data;
            return callback(data);
          };
        })(this));
      }
    };

    TM_API.prototype.verifyInternalUser = function(userEmail, callback) {
      this.tmConfig((function(_this) {
        return function(configFile) {
          var allowedEmailDomains, email;
          allowedEmailDomains = configFile.allowedEmailDomains;
          email = userEmail;
          return allowedEmailDomains != null ? allowedEmailDomains.some(function(domain) {
            if (email != null ? email.match(domain.toString()) : void 0) {
              return callback(configFile.githubContentUrl);
            }
          }) : void 0;
        };
      })(this));
      return callback(null);
    };

    return TM_API;

  })();

  app.service('TM_API', (function(_this) {
    return function($q, $http, $timeout) {
      return new TM_API($q, $http, $timeout);
    };
  })(this));

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.service('$$', function() {
    var $$;
    $$ = function(element) {
      if (element) {
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
          element.$query = function(selector) {
            return $$(element.querySelector(selector));
          };
          element.$query_All = function(selector) {
            return $$(element.querySelectorAll(selector));
          };
          element.$html = function() {
            return element.innerHTML;
          };
          element.$text = function() {
            return element.innerText;
          };
          element.$click = function() {
            return angular.element(element).triggerHandler('click');
          };
          element.$scope = function() {
            return angular.element(element).scope();
          };
        }
      }
      return element;
    };
    return $$;
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Events_Controller', function($scope) {
    return $scope.test = 'asd';
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Login_Controller', function($scope, TM_API, $window, $timeout, $rootScope) {
    $scope.login = function() {
      $scope.errorMessage = null;
      $scope.supportEmail = false;
      $scope.infoMessage = "...logging in ...";
      return TM_API.login($scope.username, $scope.password, (function(_this) {
        return function(data) {
          var ref, ref1, ref2;
          if (data.result === 'OK') {
            return TM_API.currentuser(function(userInfo) {
              if ((userInfo != null ? userInfo.UserEnabled : void 0)) {
                $scope.infoMessage = 'Login OK';
                $rootScope.loggedInUser = true;
                return $timeout(function() {
                  return $window.location.href = '/angular/user/index';
                });
              } else {
                $scope.infoMessage = null;
                return $scope.errorMessage = 'User account is disabled';
              }
            });
          } else {
            $scope.infoMessage = null;
            if (data != null ? (ref = data.viewModel) != null ? (ref1 = ref.errorMessage) != null ? ref1.contains('please contact us at') : void 0 : void 0 : void 0) {
              $scope.supportEmail = true;
            }
            return $scope.errorMessage = ((ref2 = data.viewModel) != null ? ref2.errorMessage : void 0) || 'Login Failed (Server error)';
          }
        };
      })(this));
    };
    $scope.showErrorMessage = function() {
      return $scope.errorMessage;
    };
    $scope.showSupportEmail = function() {
      return $scope.supportEmail;
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Pwd_Forgot_Controller', function($scope, TM_API, $location, $timeout) {
    $scope.get_Password = function() {
      $scope.infoMessage = "...sending request ...";
      return TM_API.pwd_reset($scope.email, function(data) {
        return $scope.infoMessage = data != null ? data.message : void 0;
      });
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Signup_Controller', function($scope, TM_API, $window, $timeout) {
    $scope.signup = function() {
      $scope.errorMessage = null;
      $scope.supportEmail = false;
      $scope.infoMessage = "...Signing  up ...";
      return TM_API.signup($scope.username, $scope.password, $scope.confirmpassword, $scope.email, $scope.firstname, $scope.lastname, $scope.company, $scope.title, $scope.country, $scope.state, function(data) {
        var ref, ref1, ref2;
        if ((data != null ? data.result : void 0) === 'OK') {
          $scope.infoMessage = 'Signup OK';
          return $timeout(function() {
            return $window.location.href = '/angular/user/index';
          });
        } else {
          $scope.infoMessage = null;
          if (data != null ? (ref = data.viewModel) != null ? (ref1 = ref.errorMessage) != null ? ref1.contains('please contact us at') : void 0 : void 0 : void 0) {
            $scope.supportEmail = true;
          }
          return $scope.errorMessage = (data != null ? (ref2 = data.viewModel) != null ? ref2.errorMessage : void 0 : void 0) || 'Signup Failed (Server error)';
        }
      });
    };
    $scope.showErrorMessage = function() {
      return $scope.errorMessage;
    };
    $scope.showSupportEmail = function() {
      return $scope.supportEmail;
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Article_Box_Controller', function($sce, $scope, icon_Service) {
    return using($scope, function() {
      var ref, ref1, ref2;
      this.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html((ref = this.article) != null ? ref.technology : void 0));
      this.icon_Type = $sce.trustAsHtml(icon_Service.element_Html((ref1 = this.article) != null ? ref1.type : void 0));
      return this.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html((ref2 = this.article) != null ? ref2.phase : void 0));
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Article_Controller', (function(_this) {
    return function($sce, $scope, $state, $stateParams, $window, TM_API, icon_Service) {
      $scope.articleUrl = $window.location.href;
      $scope.showFeedback = false;
      $scope.articleLoaded = false;
      $scope.top_Articles = [];
      $scope.recent_Articles = [];
      $scope.topArticles = function() {
        return TM_API.top_Articles(function(articles) {
          if ((articles != null)) {
            return angular.forEach(articles, function(article) {
              var id, title;
              article.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
              article.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
              article.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
              id = article.id.remove('article-');
              title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
              article.url = '/angular/user/article/' + id + '/' + title;
              return $scope.top_Articles.push(article);
            });
          }
        });
      };
      $scope.recentArticles = function() {
        return TM_API.recent_Articles(function(articles) {
          if ((articles != null)) {
            return angular.forEach(articles, function(article) {
              var id, title;
              article.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
              article.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
              article.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
              id = article.id.remove('article-');
              title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
              article.url = '/angular/user/article/' + id + '/' + title;
              return $scope.recent_Articles.push(article);
            });
          }
        });
      };
      TM_API.article($stateParams.article_Id, function(article) {
        var id, title;
        if ($state.current.name === "main") {
          $scope.topArticles();
          $scope.recentArticles();
        }
        if (!angular.isObject(article)) {
          return;
        }
        id = article.id.remove('article-');
        title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
        article.url = '/angular/user/article/' + id + '/' + title;
        $scope.article = article;
        $scope.article_Html = $sce.trustAsHtml(article.article_Html);
        $scope.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
        $scope.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
        $scope.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
        return TM_API.currentuser(function(userInfo) {
          if ((userInfo != null) && (userInfo != null ? userInfo.UserEnabled : void 0)) {
            return TM_API.verifyInternalUser(userInfo.Email, function(callback) {
              $scope.articleLoaded = true;
              if (callback != null) {
                $scope.showFeedback = true;
                return $scope.githubContentUrl = callback;
              }
            });
          }
        });
      });
      $scope.showFeedbackBanner = function() {
        return $scope.showFeedback;
      };
      $scope.fullArticleLoaded = function() {
        return $scope.articleLoaded;
      };
      return $scope.showGeneralFeedback = function() {
        return !$scope.showFeedback;
      };
    };
  })(this));

}).call(this);

(function() {
  angular.module('TM_App').controller('Articles_Controller', function($scope) {
    $scope.$on('apply_query', function(event, query_id) {
      if (!query_id) {
        return $scope.articles = [];
      }
    });
    $scope.$on('view_model_data', function(event, data) {
      var article, articles, i, id, len, ref, ref1, title;
      articles = [];
      if (data != null ? data.articles : void 0) {
        articles = data.articles;
        for (i = 0, len = articles.length; i < len; i++) {
          article = articles[i];
          if (article) {
            id = (ref = article.id) != null ? ref.remove('article-') : void 0;
            title = (ref1 = article.title) != null ? ref1.replace(new RegExp(' ', 'g'), '-').remove('.') : void 0;
            article.url = '/angular/user/article/' + id + '/' + title;
          }
        }
      }
      return $scope.articles = articles;
    });
    return $scope.$on('clear_articles', function() {
      return $scope.articles = [];
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Breadcrumbs_Controller', function($scope, $rootScope) {
    return using($scope, function() {
      this.history = {};
      this.current_Path = '';
      this.breadcrumbs = [];
      this.visible = false;
      this.$on('clear_query', (function(_this) {
        return function(event, data) {
          _this.current_Path = '';
          return _this.breadcrumbs = [];
        };
      })(this));
      this.$on('view_model_data', (function(_this) {
        return function(event, data) {
          $scope.visible = true;
          if (data) {
            if (_this.current_Path.indexOf(data.id) === -1) {
              _this.current_Path += "/" + data.id;
              _this.history[data.id] = {
                title: data.title,
                query_Id: data.id
              };
              return _this.refresh_Breadcrumbs();
            }
          }
        };
      })(this));
      this.refresh_Breadcrumbs = (function(_this) {
        return function() {
          var i, item, key, len, path, ref, results;
          _this.breadcrumbs = [];
          path = '';
          ref = _this.current_Path.split('/');
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            key = ref[i];
            if (!(key)) {
              continue;
            }
            item = _this.history[key];
            if (item) {
              _this.breadcrumbs.push({
                query_Id: item.query_Id,
                title: item.title,
                path: path
              });
              results.push(path += "/" + key);
            } else {
              results.push(void 0);
            }
          }
          return results;
        };
      })(this);
      return this.load_Query = (function(_this) {
        return function(breadcrumb) {
          if (breadcrumb != null ? breadcrumb.query_Id : void 0) {
            _this.current_Path = breadcrumb.path;
            return $rootScope.$broadcast('apply_query', breadcrumb.query_Id);
          }
        };
      })(this);
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Filters_Active_Controller', function($sce, $scope, $rootScope, query_Service, icon_Service) {
    $scope.current_Filters = {};
    $scope.current_Query_Id = null;
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title) {
      var icon;
      if (filter_Id) {
        icon = $sce.trustAsHtml(icon_Service.element_Html(filter_Title));
        $scope.current_Filters[filter_Id] = {
          filter_Title: filter_Title,
          filter_Icon: icon
        };
        return $scope.refresh_Filters();
      }
    });
    $scope.$on('clear_filter', function(event, filter_Id) {
      return delete $scope.current_Filters[filter_Id];
    });
    $scope.$on('clear_filters', function() {
      return $scope.current_Filters = {};
    });
    $scope.$on('view_model_data', function(event, data) {
      return $scope.current_Query_Id = data != null ? data.id : void 0;
    });
    $scope.$on('apply_query', function(event, query_Id) {
      $scope.current_Query_Id = query_Id;
      return $scope.refresh_Filters();
    });
    $scope.$on('set_page', function(event, page, from, to) {
      return $scope.refresh_Filters(from, to);
    });
    $scope.refresh_Filters = function(from, to) {
      var filters, query_Id;
      query_Id = $scope.current_Query_Id;
      filters = $scope.current_Filters.keys().join(',');
      if (filters === '') {
        return query_Service.load_Query(query_Id, null, from, to);
      } else {
        return query_Service.load_Query(query_Id, filters, from, to);
      }
    };
    return $scope.clear_Filter = function(filter_Id) {
      $rootScope.$broadcast('clear_filter', filter_Id);
      delete $scope.current_Filters[filter_Id];
      return $scope.refresh_Filters();
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Filters_Controller', function($sce, $scope, $rootScope, query_Service, icon_Service) {
    $scope.current_Filters = {};
    $scope.hide_Metadata = {};
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      var key, ref, result, results, value;
      $scope.visible = true;
      if (data != null ? data.filters : void 0) {
        $scope.filters = data.filters;
        ref = $scope.filters;
        results = [];
        for (key in ref) {
          value = ref[key];
          results.push((function() {
            var i, len, results1;
            results1 = [];
            for (i = 0, len = value.length; i < len; i++) {
              result = value[i];
              results1.push(result.icon = $sce.trustAsHtml(icon_Service.element_Html(result.title)));
            }
            return results1;
          })());
        }
        return results;
      } else {
        return $scope.filters = [];
      }
    });
    $scope.$on('view_filters', function(event, data) {
      return $scope.view_Filters = data;
    });
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title) {
      $scope.current_Filters[filter_Id] = {
        filter_Id: filter_Id,
        filter_Title: filter_Title,
        metadata_Title: metadata_Title
      };
      return $scope.map_Visibility();
    });
    $scope.$on('clear_filter', function(event, filter_Id) {
      delete $scope.current_Filters[filter_Id];
      return $scope.map_Visibility();
    });
    $scope.apply_Filter = function(filter_Id, filter_Title, metadata_Title) {
      var div;
      div = document.querySelector('.scrolling-results');
      angular.element(div).css('height', '75%');
      return $rootScope.$broadcast('apply_filter', filter_Id, filter_Title, metadata_Title);
    };
    return $scope.map_Visibility = function() {
      var div, item, ref, results, value;
      delete $scope.hide_Metadata['Technology'];
      delete $scope.hide_Metadata['Type'];
      delete $scope.hide_Metadata['Phase'];
      if (Object.keys($scope.current_Filters).length > 0) {
        ref = $scope.current_Filters;
        results = [];
        for (item in ref) {
          value = ref[item];
          results.push($scope.hide_Metadata[value.metadata_Title] = true);
        }
        return results;
      } else {
        div = document.querySelector('.scrolling-results');
        return angular.element(div).css('height', '80%');
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Index_Controller', function($scope, query_Service, $stateParams, $location, $state, $window, $rootScope, $timeout) {
    console.log('in Index_Controller ' + new Date().getMilliseconds());
    return using($scope, function() {
      this.history = {};
      this.view_Filters = false;
      this.column_Left = 'col-3';
      this.column_Middle = 'col-9';
      this.column_Right = 'col-0';
      this.$on('toggle_filters', (function(_this) {
        return function(event) {
          $scope.view_Filters = !$scope.view_Filters;
          if ($scope.view_Filters) {
            _this.column_Middle = 'col-6';
            return _this.column_Right = 'col-3';
          } else {
            _this.column_Middle = 'col-9';
            return _this.column_Right = 'col-0';
          }
        };
      })(this));
      $scope.load_Index_Data = function() {
        var filters, query_Id, search_Text;
        search_Text = $location != null ? typeof $location.search === "function" ? $location.search().text : void 0 : void 0;
        query_Id = $location != null ? typeof $location.search === "function" ? $location.search().query : void 0 : void 0;
        filters = $location != null ? typeof $location.search === "function" ? $location.search().filters : void 0 : void 0;
        if (search_Text) {
          return $rootScope.$broadcast('set_search', search_Text);
        } else if (query_Id) {
          $rootScope.$broadcast('apply_query', query_Id);
          query_Service.load_Query(query_Id, filters);
          return $rootScope.$broadcast('apply_filter', filters);
        } else {
          return query_Service.reload_Data();
        }
      };
      $scope.update_Location_Url = function(query_Id, filters) {
        var url;
        url = 'index?';
        if (query_Id) {
          url += "query=" + query_Id;
        }
        if (filters) {
          url += "&filters=" + filters;
        }
        if (url !== 'index?query=query-6234f2d47eb7') {
          return $timeout(function() {
            return window.history.replaceState('Object', 'Title', url);
          });
        }
      };
      $rootScope.$on('loading_query', function(event, query_Id, filters, from, to) {
        return $scope.update_Location_Url(query_Id, filters);
      });
      return $scope.load_Index_Data();
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Logout_Controller', function(TM_API, $window) {
    return TM_API.logout(function(callback) {
      $window.sessionStorage["userInfo"] = null;
      $window.sessionStorage.clear();
      return $window.location.href = '/angular/guest/home';
    });
  });

}).call(this);

(function() {
  var modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  angular.module('TM_App').controller('Pagination_Controller', function($scope, $rootScope) {
    var model;
    model = {
      page: 1,
      page_Split: 10,
      pages: [],
      page_Splits: [4, 10, 20, 50, 100]
    };
    $scope.query_Id = null;
    $scope.model = model;
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      var i, results, split;
      $scope.visible = true;
      if (!(data != null ? data.size : void 0)) {
        return model.pages = null;
      } else {
        $scope.query_Id = data.id;
        if (data.size < model.page_Split) {
          split = 1;
        } else {
          split = ~~(data.size / model.page_Split);
          if ((modulo(data.size, model.page_Split)) > 0) {
            split++;
          }
        }
        return model.pages = (function() {
          results = [];
          for (var i = 1; 1 <= split ? i <= split : i >= split; 1 <= split ? i++ : i--){ results.push(i); }
          return results;
        }).apply(this);
      }
    });
    $scope.set_Page = function() {
      var from, to;
      if (model.page) {
        from = (model.page - 1) * model.page_Split;
        to = model.page * model.page_Split;
        return $rootScope.$broadcast('set_page', model.page, from, to);
      }
    };
    $scope.set_Page_Split = function(recordsPerPage) {
      if (recordsPerPage) {
        model.page_Split = recordsPerPage;
      }
      $scope.set_Page();
      return $rootScope.$broadcast('set_page_split', model.page_Split);
    };
    $scope.previous_Page = function() {
      if (model.page > 1) {
        model.page--;
        return $scope.set_Page();
      }
    };
    $scope.next_Page = function() {
      if (model.page < model.pages.size()) {
        model.page++;
        return $scope.set_Page();
      }
    };
    $scope.$on('keyup', function(event, data) {
      if (data.keyIdentifier === 'Left') {
        $scope.previous_Page();
      }
      if (data.keyIdentifier === 'Right') {
        return $scope.next_Page();
      }
    });
    $scope.goToTop = function() {
      var div;
      div = document.querySelector('.scrolling-results');
      return angular.element(div)[0].scrollTop = 0;
    };
    return $scope.ShowTopButton = function() {
      var div;
      div = document.querySelector('.scrolling-results');
      return angular.element(div)[0].scrollHeight > angular.element(div)[0].clientHeight;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Queries_Controller', function($scope, $rootScope, $location) {
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      $scope.visible = true;
      $scope.title = data.title;
      return $scope.containers = data.queries;
    });
    return $scope.load_Query = function(query_Id) {
      return $rootScope.$broadcast('apply_query', query_Id);
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Recommendations_Controller', function($scope, $rootScope, TM_API) {
    $rootScope.$on('apply_query', function(event, term) {
      return $scope.words = [];
    });
    $rootScope.$on('search_term', function(event, term) {
      if (term === '') {
        return $scope.words = [];
      } else {
        return TM_API.get_Words(term, function(words) {
          return $scope.words = words;
        });
      }
    });
    $scope.select_Word = function(word) {
      return $rootScope.$broadcast('set_search', word);
    };
    return $scope.words = [];
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Results_Controller', function($scope, $rootScope, query_Service) {
    $scope.current_Page = 1;
    $scope.current_Page_Split = 10;
    $scope.results_Size = 0;
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      $scope.visible = true;
      return $scope.results_Size = data != null ? data.size : void 0;
    });
    $scope.$on('set_page', (function(_this) {
      return function(event, data) {
        return $scope.current_Page = data;
      };
    })(this));
    $scope.$on('set_page_split', (function(_this) {
      return function(event, data) {
        return $scope.current_Page_Split = data;
      };
    })(this));
    $scope.toggle_Filters = function() {
      return $rootScope.$broadcast('toggle_filters', null);
    };
    return $scope.toggle_Filters();
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Search_Bar_Controller', function($rootScope, $scope, $state, $location, $timeout, query_Service, TM_API) {
    $scope.query_Id = null;
    $scope.selected_Technology = null;
    $scope.previous_Filter_Id = null;
    $scope.technologies = {};
    $scope.technologies_By_Id = {};
    $scope.text = '';
    $scope.ignore_Events = false;
    $scope.words = [];
    $scope.searchPlaceholder = "Search All of TEAM Mentor";
    $scope.$on('clear_search', function() {
      return $scope.text = '';
    });
    $scope.$on('clear_filter', function(event, filter_Id) {
      if (filter_Id) {
        if ($scope.technologies_By_Id[filter_Id]) {
          if ($scope.ignore_Events) {
            return;
          }
          return $scope.selected_Technology = $scope.technologies_By_Id['All'];
        }
      }
    });
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title) {
      var ref;
      if (metadata_Title === 'Technology') {
        if (filter_Title !== ((ref = $scope.selected_Technology) != null ? ref.title : void 0)) {
          $scope.selected_Technology = $scope.technologies_By_Id[filter_Id];
          return $scope.previous_Filter_Id = filter_Id;
        }
      }
    });
    $scope.$on('view_model_data', function(event, data) {
      var filter, i, key, len, ref, value;
      $scope.query_Id = data != null ? data.id : void 0;
      if (!$scope.selected_Technology) {
        $scope.technologies = [
          {
            title: 'All Technologies',
            id: query_Service.index_Query
          }
        ];
        $scope.technologies_By_Id = {
          'All': $scope.technologies[0]
        };
        if (data != null ? data.filters : void 0) {
          ref = data.filters;
          for (key in ref) {
            value = ref[key];
            if (key === 'Technology' && value.size) {
              for (i = 0, len = value.length; i < len; i++) {
                filter = value[i];
                $scope.technologies.push(filter);
                $scope.technologies_By_Id[filter.id] = filter;
              }
            }
          }
        }
        return $scope.selected_Technology = $scope.technologies[0];
      }
    });
    $scope.$on('set_search', function(event, text) {
      $scope.text = text;
      return $scope.submit();
    });
    $scope.select_Technology = function() {
      $scope.searchPlaceholder = "Search All of TEAM Mentor";
      if ($scope.selected_Technology) {
        $scope.ignore_Events = true;
        $rootScope.$broadcast('clear_filter', $scope.previous_Filter_Id);
        if ($scope.selected_Technology.title !== 'All Technologies') {
          $rootScope.$broadcast('apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title, 'Technology');
          $scope.searchPlaceholder = "Search " + $scope.selected_Technology.title;
        } else {
          $scope.submit();
        }
        $scope.previous_Filter_Id = $scope.selected_Technology.id;
        return $scope.ignore_Events = false;
      }
    };
    $scope.submit = function() {
      var ref;
      if (((ref = $state.current) != null ? ref.name : void 0) !== 'index') {
        $state.go('index');
      }
      $rootScope.$broadcast('clear_query', null);
      if ($scope.text === '') {
        return $rootScope.$broadcast('apply_query', query_Service.index_Query);
      } else {
        return TM_API.query_from_text_search($scope.text, function(query_id) {
          return $rootScope.$broadcast('apply_query', query_id);
        });
      }
    };
    return $scope.get_Words = function(term) {
      return $rootScope.$broadcast('search_term', term);
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Search_Controller', function($sce, $scope, TM_API) {
    return TM_API.popular_Search(function(search) {
      var baseUrl;
      baseUrl = "/angular/user/index?text=";
      angular.forEach(search, function(searchItem) {
        return searchItem.url = baseUrl + searchItem.title;
      });
      return $scope.top_Search = search;
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('User_Navigation_Controller', function($scope, $state, $window, $timeout, $rootScope, query_Service) {
    console.log('in User_Navigation_Controller ' + new Date().getMilliseconds());
    $scope.open_Query_State = function() {
      var ref;
      if (((ref = $state.current) != null ? ref.name : void 0) === 'index') {
        $rootScope.$broadcast('clear_search');
        $rootScope.$broadcast('clear_filter', 'All');
        return query_Service.reload_Data();
      } else {
        return $timeout(function() {
          return $window.location.href = '/angular/user/index';
        });
      }
    };
    $scope.show_Loading_Image = false;
    $scope.$on('http_start', function() {
      return $scope.show_Loading_Image = true;
    });
    return $scope.$on('http_end', function() {
      return $timeout(function() {
        return $scope.show_Loading_Image = false;
      });
    });
  });

}).call(this);
