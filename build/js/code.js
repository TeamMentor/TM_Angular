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
    $templateCache.put('/angular/jade-html/component/gateway_navigation', "<dl class=\"help scroll\"><span ng-repeat=\"view in Library.Views\"><dt class=\"vertical-align\"><p>\{\{view.title}}</p></dt><dd ng-repeat=\"article in view.Articles\"><a href=\"guides/\{\{article.id}}\" ng-click=\"show_Article(article.id)\">\{\{article.title}}</a></dd></span></dl>");
    $templateCache.put('/angular/jade-html/component/guest/login_form', "<!-- Getting Started--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Login_Controller\"><div class=\"section row__label\"><h4>Login</h4></div><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div><div class=\"section row\"><form id=\"login-form\" role=\"form\" ng-submit=\"login()\" class=\"access-form\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\" required=\"required\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"button-field\"><button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button></div><div class=\"button-field text-right\"><br/><a id=\"pwd_forgot\" href=\"pwd_forgot\" class=\"text-right\">Forgot your password?</a></div></form></div></div>");
    $templateCache.put('/angular/jade-html/component/guest/pwd_forgot_form', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Pwd_Forgot_Controller\"><div class=\"section row__label\"><h4>Forgot your password?</h4></div><div class=\"section row\"><form id=\"forgot-pwd-form\" ng-submit=\"get_Password()\" class=\"access-form\"><div class=\"section row\"><div class=\"col-8 input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" ng-model=\"email\" placeholder=\"Email Address\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><button type=\"submit\" id=\"btn-get-password\" class=\"full-width\">Retrieve password</button></div></div></form></div><alert-ok></alert-ok></div>");
    $templateCache.put('/angular/jade-html/component/guest/pwd_reset_form', "<!-- Getting Started--><!--mixin sign-up-form--><!--  form#sign-up-form.access-form(role=\"form\" ng-submit=\"signup()\")--><!--    .input-field--><!--      +username-input--><!--    .input-field--><!--      +email-input--><!--    .input-field--><!--      +password-input--><!--    .input-field--><!--      +confirm-password-input--><!--    .input-field--><!--      +first-name-input--><!--    .input-field--><!--      +last-name-input--><!--    .input-field--><!--      +company-input--><!--    .input-field--><!--      +title-input--><!--    .input-field--><!--      +country-input--><!--    .input-field--><!--      +state-input--><!--    .conditions--><!--      include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><!--    .button-field--><!--      +sign-up-button--><!--mixin reset-password-formform#password-reset-form.access-form(role='form' method='post' action='/flare/user/password-reset') .section.row .col-6.input-field +password-input .col-6.input-field +confirm-password-input .col-4.button-field br +reset-pwd-button--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Pwd_Reset_Controller\"><div class=\"section row__label\"><h4>Reset your password</h4></div><div id=\"error\"><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div></div><div id=\"info\"><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div></div><div class=\"section row\"><form id=\"password-reset-form\" role=\"form\" ng-submit=\"reset_Password()\" class=\"access-form\"><div class=\"section row\"><div class=\"col-6 input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-6 input-field\"><label for=\"confirmpassword\">Confirm Password</label><input type=\"password\" id=\"confirmpassword\" ng-model=\"confirmpassword\" placeholder=\"Password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><br/><button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button></div></div></form></div></div>");
    $templateCache.put('/angular/jade-html/component/guest/sign_up_form', "<!-- Getting Started--><!--mixin sign-up-form--><!--  form#sign-up-form.access-form(role=\"form\" ng-submit=\"signup()\")--><!--    .input-field--><!--      +username-input--><!--    .input-field--><!--      +email-input--><!--    .input-field--><!--      +password-input--><!--    .input-field--><!--      +confirm-password-input--><!--    .input-field--><!--      +first-name-input--><!--    .input-field--><!--      +last-name-input--><!--    .input-field--><!--      +company-input--><!--    .input-field--><!--      +title-input--><!--    .input-field--><!--      +country-input--><!--    .input-field--><!--      +state-input--><!--    .conditions--><!--      include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><!--    .button-field--><!--      +sign-up-button--><!--mixin reset-password-formform#password-reset-form.access-form(role='form' method='post' action='/flare/user/password-reset') .section.row .col-6.input-field +password-input .col-6.input-field +confirm-password-input .col-4.button-field br +reset-pwd-button--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Signup_Controller\"><div class=\"section row__label\"><h4>Sign Up</h4></div><div id=\"error\"><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div></div><div id=\"info\"><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div></div><div class=\"section row\"><form id=\"sign-up-form\" role=\"form\" ng-submit=\"signup()\" class=\"access-form\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\" required=\"required\"/></div><div class=\"input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" ng-model=\"email\" placeholder=\"Email Address\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"confirmpassword\">Confirm Password</label><input type=\"password\" id=\"confirmpassword\" ng-model=\"confirmpassword\" placeholder=\"Password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" ng-model=\"firstname\" placeholder=\"First Name\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" ng-model=\"lastname\" placeholder=\"Last Name\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"company\">Company</label><input type=\"text\" id=\"company\" ng-model=\"company\" placeholder=\"Company\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"title\">Job/Title</label><input type=\"text\" id=\"title\" ng-model=\"title\" placeholder=\"Job/Title\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"country\">Country</label><input type=\"text\" id=\"country\" ng-model=\"country\" placeholder=\"Country\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"state\">State</label><input type=\"text\" id=\"state\" ng-model=\"state\" placeholder=\"State\" maxlength=\"100\"/></div><div class=\"conditions\"><p>By signing up, you agree to our <a href=\"terms_and_conditions\">Terms and Conditions</a>.</p> </div><div class=\"button-field\"><button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button></div></form></div></div>");
    $templateCache.put('/angular/jade-html/component/help_navigation', "<dl class=\"help scroll\"><span ng-repeat=\"view in Views\"><dt class=\"vertical-align\"><p>\{\{view.Title}}</p></dt><dd ng-repeat=\"article in view.Articles\"><a href=\"docs/\{\{article.Id}}\" ng-click=\"show_Doc(article.id)\">\{\{article.Title}}</a></dd></span></dl>");
    $templateCache.put('/angular/jade-html/component/navigation/landing_bar', "<!-- Terms and Conditions Navigation--><nav><a ui-sref=\"home\" class=\"logo\"></a><div class=\"links\"><ul class=\"display-inline\"><li><a ui-sref=\"about\">About</a></li><li><a ui-sref=\"features\">Features</a></li><li><a ui-sref=\"docs\">Docs</a></li><li><a ui-sref=\"sign_up\">Sign Up</a></li><li><a ui-sref=\"login\">Login</a></li></ul></div></nav>");
    $templateCache.put('/angular/jade-html/component/navigation/left_navigation', "<aside ng-controller=\"User_Navigation_Controller\"><ul><li ng-show=\"show_Loading_Image\"><icon class=\"Loading rotating\"></icon></li><li><a href=\"index\" ng-click=\"open_Query_State()\" title=\"Home\"><icon class=\"Home\"></icon></a></li><li><a href=\"guides\" title=\"Security Guide\"><icon class=\"Curated-Content\"></icon></a></li><li><a ui-sref=\"main\" title=\"Saved Searches\"><icon class=\"Save\"></icon></a></li><li><a ui-sref=\"docs\" title=\"Docs\"><icon class=\"Info\"></icon></a></li><li><a href=\"/angular/guest/logout\" title=\"Logout\"><icon class=\"Logout\"></icon></a></li></ul></aside>");
    $templateCache.put('/angular/jade-html/component/result_saved_article', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"article result\"><div class=\"metadata\"><ul><li><br/></li><!--li+filter-icon('Type', result.type)--><!--li+filter-icon('Phase', result.phase)--><!--li+filter-icon('Technology', result.technology)--></ul></div><div class=\"summary\"><a href=\"#\"><h3 id=\"article-headline\">Article Headline</h3></a><p>Article Summary</p><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/component/result_saved_search_term', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"article search-term\"><a href=\"app-keyword-search\"><icon class=\"Search\"></icon><span>Search Term</span></a></div><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul>");
    $templateCache.put('/angular/jade-html/component/results_delete_share', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"section row__label\"><div class=\"label\">Saved Items</div><ul class=\"display-inline\"><li><a href=\"\" class=\"button btn-result icon-Filter\"></a></li><li><button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button></li><li><button title=\"Share results\" class=\"btn-result icon-Share\"></button></li></ul></div>");
    $templateCache.put('/angular/jade-html/component/search_result', "<div class=\"article search-term\"><a href=\"app-keyword-search\"><icon class=\"Search\"></icon><span>Search Term</span></a></div>");
    $templateCache.put('/angular/jade-html/component/user/article', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div ng-controller=\"Article_Controller\" ng-show=\"show_Article_Data()\"><div class=\"col-9\"><div class=\"article\"><h1 class=\"article-title\">\{\{article.title}}</h1><div id=\"html\" ng-bind-html=\"article_Html\" class=\"article-content\"></div><br/><br/><br/><div class=\"footer\"><p>TEAM Mentor 4.0, a Security Innovation eKnowledge Product.</p> <p>© Security Innovation 2007-2015, all rights reserved.</p> <ul class=\"text-center\"><li><p><a href=\"mailto:support@securityinnovation.com\"><span class=\"icon-Mail\"></span><span class=\"text\">support@securityinnovation.com</span></a></p></li><li class=\"text-center\"><p><a ui-sref=\"terms_and_conditions\"><span class=\"icon-Paperclip\"></span><span class=\"text\">Terms & Conditions</span></a></p></li></ul></div></div></div><div class=\"col-3\"><div class=\"section article-info\"><ul class=\"display-inline\"><li><a class=\"button btn-result\"><span class=\"icon\"><icon class=\"Share\"></icon></span><span class=\"text\">Share</span></a></li></ul><div class=\"section row__label\"><div class=\"label\">Metadata:</div></div><div class=\"section row\"><ul><li><span class=\"icon\"><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></span><span class=\"text\">\{\{article.technology}}</span></li><li><span class=\"icon\"><div id=\"icon-Type\" ng-bind-html=\"icon_Type\"></div></span><span class=\"text\">\{\{article.type}}</span></li><li><span class=\"icon\"><div id=\"icon-Phase\" ng-bind-html=\"icon_Phase\"></div></span><span class=\"text\">\{\{article.phase}}</span></li><!--lispan.icon icon.Curated-Content span.text This article is part of the a(href='guides') Security Guide --></ul></div><div class=\"section row fixed-bottom\"><div class=\"alert alert-neutral\"><div ng-show=\"showFeedbackBanner()\"><span class=\"text\">Have a comment about this article?<a id=\"tm-support-email\" href=\"\{\{githubContentUrl}}/new?title=\{\{article.title}} &amp;body=\{\{articleUrl}}\" target=\"_blank\">     Open an issue here.</a></span></div><div ng-show=\"showGeneralFeedback()\"><span class=\"text\">Have a comment about this article? Send our team<a href=\"mailto:support@securityinnovation.com\"> an email.</a></span></div></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/component/user/article_box', "<div ng-controller=\"Article_Box_Controller\" class=\"result\"><div class=\"metadata\"><ul><li><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></li><li><div id=\"icon-technology\" ng-bind-html=\"icon_Type\"></div></li><li><div id=\"icon-technology\" ng-bind-html=\"icon_Phase\"></div></li></ul></div><div class=\"summary\"><a ng-href=\"\{\{article.url}}\" id=\"\{\{article.id}}\"><h4 id=\"article-headline\">\{\{article.title}}</h4></a><p>\{\{article.summary}} ...</p></div></div>");
    $templateCache.put('/angular/jade-html/component/user/articles', "<div ng-controller=\"Articles_Controller\"><div class=\"section row\"><article-box ng-repeat=\"article in articles\" class=\"article-box\"></article-box></div></div>");
    $templateCache.put('/angular/jade-html/component/user/breadcrumbs', "<div ng-controller=\"Breadcrumbs_Controller\" ng-show=\"visible\"><dl ng-show=\"breadcrumbs\" class=\"breadcrumbs\"><dd ng-repeat=\"breadcrumb in breadcrumbs\" class=\"active\"><a ng-href=\"#\" ng-click=\"load_Query(breadcrumb)\">\{\{breadcrumb.title}}</a></dd></dl></div>");
    $templateCache.put('/angular/jade-html/component/user/customer_search_bar', "<div ng-controller=\"Search_Bar_Controller\" class=\"search customer\"><form ng-submit=\"submit()\"><ul class=\"display-inline\"><li class=\"half-width\"><div class=\"logo\"></div></li><li class=\"half-width\"><div class=\"logo\"></div></li></ul><select ng-model=\"selected_Technology\" ng-change=\"select_Technology(selected_Technology)\" ng-options=\"technology as technology.title for technology in technologies\"></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"\{\{searchPlaceholder}}\" ng-change=\"get_Words(text)\" ng-focus=\"with_Focus(true)\" ng-blur=\"with_Focus(false)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" class=\"search-input\"/><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><icon class=\"Search\"></icon></button></form></div><div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>");
    $templateCache.put('/angular/jade-html/component/user/filters', "<div ng-controller=\"Filters_Controller\" ng-show=\"visible\"><div ng-show=\"view_Filters\" class=\"section row\"><dl><dt><p>Filter by</p></dt><div class=\"scroll\"><div id=\"filters\" ng-repeat=\"(title,filter) in filters\"><dt class=\"header\"><span class=\"label no-underline\"><span class=\"text\"> \{\{title}}</span></span><span class=\"sub-nav__icon\"><icon class=\"Arrow-Down\"></icon></span></dt><div id=\"results\"><div ng-repeat=\"result in filter\"><dd ng-show=\"result.size &gt; 0\"><a href=\"#\" ng-click=\"apply_Filter(result.id, result.title, title)\"><span><span id=\"filter-icon\" ng-bind-html=\"result.icon\"></span><span class=\"text\">\{\{result.title}}</span></span><span class=\"badge\">\{\{result.size}}</span></a></dd></div></div></div></div></dl></div></div>");
    $templateCache.put('/angular/jade-html/component/user/filters_active', "<div ng-controller=\"Filters_Active_Controller\" class=\"section row\"><div ng-repeat=\"(key, value) in current_Filters\" class=\"active-filter\"><ul class=\"display-inline\"><li><span id=\"path1\" ng-bind-html=\"value.filter_Icon\"></span></li><li><span class=\"text\">\{\{value.filter_Title}}</span></li><li><span class=\"close\"><a href=\"#\" ng-click=\"clear_Filter(key)\"><span class=\"icon-Close\"><span class=\"path1\"></span></span></a></span></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/component/user/found_issue', "<div ng-show=\"view_Filters\"><div class=\"found-issue alert-ok\"><div><span class=\"alert-text\">Found an issue? <a href=\"#\">Contact</a> our team.</span></div></div></div>");
    $templateCache.put('/angular/jade-html/component/user/loading_bar', "<div class=\"loading-bar\"></div>");
    $templateCache.put('/angular/jade-html/component/user/modal', "<div class=\"modal\"><div class=\"navbar\"><div class=\"label no-underline\">Log Out</div><ul><li><icon class=\"Close\"></icon></li></ul></div><div class=\"content\"><div class=\"col-10\"><h4>Are you sure you want to leave?</h4></div><div class=\"col-2\"><ul class=\"display-inline\"><li><a class=\"button btn-editor\"><icon class=\"Tick\"></icon></a></li><li><a class=\"button btn-editor cancel\"><icon class=\"Close\"></icon></a></li></ul></div></div></div>");
    $templateCache.put('/angular/jade-html/component/user/pagination', "<span ng-controller=\"Pagination_Controller\"><div ng-show=\"model.pages\" class=\"section row\"><div ng-show=\"model.pages.size() &gt;1\" class=\"pagination\"><div class=\"previous\"><a href=\"#\" ng-click=\"previous_Page()\"><span class=\"icon-Arrow-Left\"></span><span class=\"text\">back</span></a></div><div id=\"current_Page\" class=\"number\"><select ng-model=\"model.page\" ng-change=\"set_Page()\" ng-options=\"page for page in model.pages\"></select></div><div class=\"next\"><a href=\"#\" ng-click=\"next_Page()\"><span class=\"icon-Arrow-Right\"></span><span class=\"text\">next</span></a></div></div><div ng-show=\"ShowTopButton()\" class=\"back-to-top\"><a href=\"#\" ng-click=\"goToTop()\"><span class=\"icon-Arrow-Up\"></span><span class=\"text\">back to top</span></a></div><div id=\"page_Splits\" ng-show=\"model.pages.size() &gt;1\" class=\"number-of-results\"><form><input type=\"radio\" ng-model=\"model.page_Split\" name=\"results-per-page\" id=\"four\" value=\"4\" ng-change=\"set_Page_Split(value)\"/><label for=\"four\">4</label><input type=\"radio\" ng-model=\"model.page_Split\" name=\"results-per-page\" id=\"ten\" checked=\"checked\" value=\"10\" ng-change=\"set_Page_Split(value)\"/><label for=\"ten\">10</label><input type=\"radio\" ng-model=\"model.page_Split\" name=\"results-per-page\" id=\"twenty\" value=\"20\" ng-change=\"set_Page_Split(value)\"/><label for=\"twenty\">20</label></form><ul><li><span class=\"text\">results per page</span></li></ul><!--select(ng-model='model.page_Split', ng-change='set_Page_Split()', ng-options='page_Split for page_Split in model.page_Splits')--></div></div></span>");
    $templateCache.put('/angular/jade-html/component/user/queries', "<div class=\"display-mobile\"><div ng-show=\"view_Filters\"><div class=\"found-issue alert-ok\"><div><span class=\"alert-text\">Found an issue? <a href=\"#\">Contact</a> our team.</span></div></div></div><div ng-controller=\"Breadcrumbs_Controller\" ng-show=\"visible\"><dl ng-show=\"breadcrumbs\" class=\"breadcrumbs\"><dd ng-repeat=\"breadcrumb in breadcrumbs\" class=\"active\"><a ng-href=\"#\" ng-click=\"load_Query(breadcrumb)\">\{\{breadcrumb.title}}</a></dd></dl></div></div><!--div(ng-controller='Queries_Controller' ng-show='visible')dl dt p#query_title \{\{title}} //span.sub-nav__icon a(href='#' ng-click=\"show_Previous_Query()\") icon.Arrow-Up ul.scroll li dt p Level 2 Directory li dt p Level 3 Directory div(ng-repeat=\"container in containers\") a(href='#', id='\{\{container.id}}', ng-click='load_Query(container.id)' ng-show='container.size >0') dd span.text \{\{container.title}} span.badge \{\{container.size}} --><div id=\"queries\" ng-controller=\"Queries_Controller\" ng-show=\"visible\"><dl><dt><p id=\"query_title\">\{\{title}}</p><!--span.sub-nav__icona(href='#' ng-click=\"show_Previous_Query()\") icon.Arrow-Up--></dt><div id=\"containers\" class=\"scroll\"><div ng-repeat=\"container in containers\"><a href=\"#\" id=\"\{\{container.id}}\" ng-click=\"load_Query(container.id)\" ng-show=\"container.size &gt;0\"><dd><span class=\"text\">\{\{container.title}}</span><span class=\"badge\">\{\{container.size}}</span></dd></a></div></div></dl></div>");
    $templateCache.put('/angular/jade-html/component/user/queries_history', "<div ng-controller=\"Queries_History_Controller\"><nav><ul class=\"display-inline\"><li ng-repeat=\"(key, value) in history\"><a ng-href=\"#\" ng-click=\"load_Query(key)\">\{\{value}}</a></li></ul></nav></div>");
    $templateCache.put('/angular/jade-html/component/user/recommendations', "<div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>");
    $templateCache.put('/angular/jade-html/component/user/results', "<div ng-controller=\"Results_Controller\" ng-show=\"visible\"><section ng-hide=\"results_Size\" class=\"row__label\"><div id=\"noResultsTitle\" class=\"label\">Query has no results</div></section><section ng-show=\"results_Size\" class=\"row__label\"><div id=\"resultsTitle\" class=\"label\"><div ng-controller=\"Pagination_Controller\"><span>\{\{pagginMessage}}</span></div></div><ul class=\"display-inline text-right\"><li><a id=\"view_Filters\" href=\"#\" title=\"View Filters\" ng-click=\"toggle_Filters()\" class=\"button btn-result\"><div class=\"icon-Filter\"></div></a></li></ul></section></div>");
    $templateCache.put('/angular/jade-html/component/user/search_bar', "<div ng-controller=\"Search_Bar_Controller\" class=\"search\"><form ng-submit=\"submit()\"><ul><li><a href=\"/\"><div class=\"logo\"></div></a></li></ul><div><button class=\"btn-search\"><icon class=\"Filter\"></icon></button><ul class=\"technology\"><li>Technology</li><li>Website</li><li>Java</li><li>Scala</li></ul><select ng-model=\"selected_Technology\" ng-change=\"select_Technology(selected_Technology)\" ng-options=\"technology as technology.title for technology in technologies\"></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"\{\{searchPlaceholder}}\" ng-change=\"get_Words(text)\" ng-focus=\"with_Focus(true)\" ng-blur=\"with_Focus(false)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" class=\"search-input\"/><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><icon class=\"Search\"></icon></button></div></form></div><div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>");
    $templateCache.put('/angular/jade-html/component/user/start_view', "<div ng-controller=\"Start_View_Controller\"><a name=\"popular_Search_Terms\"></a><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Popular Search Terms</div></div><div class=\"section row\"><div ng-repeat=\"search in top_Search\" class=\"search-term\"><span class=\"icon\"><icon class=\"Star\"></icon></span><span class=\"link\"><a href=\"\{\{search.url}}\"><span>\{\{search.title}}</span></a></span></div></div></div><a name=\"recently_Viewed_Articles\"></a><div class=\"section row\"><div class=\"section row__label\"><div ng-show=\"recent_Articles.length &gt; 0\" class=\"label\">Recently Viewed Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in recent_Articles\" class=\"article-box\"></article-box></div></div><a name=\"top_Articles\"></a><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Top Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in top_Articles\" class=\"article-box article-box\"></article-box></div></div></div>");
    $templateCache.put('/angular/jade-html/component/user_panel', "<div class=\"section row__label\"><div class=\"label\">@username</div></div><div class=\"section row\"><form><input type=\"text\" name=\"name\" value=\"First name, Last name\"/><input type=\"text\" name=\"work\" value=\"Position, Company\"/><input type=\"email\" name=\"email\" value=\"Email\"/><button type=\"submit\"><icon class=\"Tick\"></icon></button></form></div>");
    $templateCache.put('/angular/jade-html/views/article_editor', "Moved Temporarily. Redirecting to /error");
    $templateCache.put('/angular/jade-html/views/article_view_editor_option', "Moved Temporarily. Redirecting to /error");
    $templateCache.put('/angular/jade-html/views/docs', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Help_Controller\" class=\"main help\"><div class=\"col-3 application-scroll\"><help-navigation></help-navigation></div><div class=\"col-9 application-scroll\"><div id=\"help\" class=\"section article\"><h1 id=\"help-title\">\{\{title}}</h1><help-content ng-bind-html=\"content\"></help-content><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/about', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section about\"><h3 id=\"an-interactive-application-security-library-with-thousands-of-code-samples-and-professional-guidance-when-you-need-it\">An interactive Application Security library with thousands of code samples and professional guidance when you need it</h3> </div><div class=\"section about-us\"><h4 id=\"team-mentor-was-created-by-developers-for-developers-using-secure-coding-standards-code-snippets-and-checklists-built-from-10-years-of-targeted-security-assessments-for-fortune-500-organizations-\">TEAM Mentor was created by developers for developers using secure coding standards, code snippets and checklists built from 10+ years of targeted security assessments for Fortune 500 organizations.</h4> <p>It contains thousands of articles with dynamic content across multiple development platforms including .NET, Java, C/C++, PHP, Android and iOS. TEAM Mentor is the In-Practice companion to our <a href=\"https://www.securityinnovation.com/training/application-security/computer-based/\">TEAM Professor eLearning courses</a>, extending developers’ knowledge in combination with training.</p> <p>TEAM Mentor integrates with static analysis tools, such as Checkmarx and Fortify&trade;, helping teams make more sense of scan results and make critical decisions to fix software vulnerabilities.</p> </div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/features', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section features\"><h2 id=\"team-mentor-provides-intelligence-to-fix-vulnerabilities-and-comply\">TEAM Mentor provides intelligence to fix vulnerabilities and comply</h2> <div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"delivers-compliance\"></div></div><div class=\"col-9\"><p>Delivers compliance-specific secure coding guidance for PCI-DSS, OWASP Top 10, CWE and other popular frameworks.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"integrates\"></div></div><div class=\"col-9\"><p>Integrates with multiple static analysis tools and developer environments (IDE’s) to map prescriptive coding guidance to scan results to fix vulnerabilities.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"cross-references\"></div></div><div class=\"col-9\"><p>Stores and cross-references your security policies with out-of-the-box secure coding checklists and examples.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"provides-guidance\"></div></div><div class=\"col-9\"><p>Provides guidance to assist developers in reducing security vulnerabilities in software applications.</p> </div></div></div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/home', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section usp\"><h2 id=\"instant-resources-that-bridge-the-gap-between-developer-questions-and-technical-solutions\">Instant resources that bridge the gap between developer questions and technical solutions</h2> <a ui-sref=\"sign_up\" class=\"button\">Start your free trial today</a></div><div class=\"section reasons\"><h2 id=\"with-team-mentor-you-can-\">With TEAM Mentor, you can...</h2> <div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"fix-vulnerabilities\"></div></div><div class=\"col-9\"><p>Fix vulnerabilities quicker than ever before with TEAM Mentor&#39;s seamless integration into a developer&#39;s IDE and daily workflow.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"reduce-vulnerabilities\"></div></div><div class=\"col-9\"><p>Reduce the number of vulnerabilities over time as developers learn about each vulnerability at the time it is identified.</p> </div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"improve-process\"></div></div><div class=\"col-9\"><p>Expand the development team&#39;s knowledge and improve processes with access to thousands of specific remediation tactics, including the host organization&#39;s security policies and coding best practices.</p> </div></div></div><div class=\"section clients\"><h3 id=\"our-clients-love-us-and-we-think-you-will-too-\">Our clients love us (and we think you will too!)</h3> <img src=\"/assets/clients/flare-logos.jpg\"/></div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2> <a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/login', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section row\"><div class=\"col-7\"><login-form></login-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/pwd_forgot', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"section row\"><div class=\"col-7\"><pwd-forgot-form></pwd-forgot-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/pwd_reset', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!--mixin pwd-reset-form.section.row__label .label Reset your password .section.row form#password-reset-form(role='form' method='post' action='/flare/user/password-reset') .section.row .col-6.input-field +password-input .col-6.input-field +confirm-password-input .col-4.button-field br +reset-pwd-button --><div class=\"section row\"><div class=\"col-4\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div><div class=\"col-8\"><div class=\"getting-started\"><pwd-reset-form></pwd-reset-form></div></div></div>");
    $templateCache.put('/angular/jade-html/views/guest/sign_up', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><div class=\"section row\"><div class=\"col-7\"><sign-up-form></sign-up-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>");
    $templateCache.put('/angular/jade-html/views/new_user_onboard', "Moved Temporarily. Redirecting to /error");
    $templateCache.put('/angular/jade-html/views/pwd_sent', "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><!--mixin sign-up-form--><!--  .section.row__label--><!--    .label Sign Up--><!--  .section.row--><!--    form#sign-up-form(action='/flare/user/sign-up')--><!--      .input-field--><!--        +username-input--><!--      .input-field--><!--        +email-input--><!--      .input-field--><!--        +password-input--><!--      .input-field--><!--        +confirm-password-input--><!--      .button-field--><!--        +sign-up-button--><!--      .conditions--><!--          include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><!--mixin forgot-pwd-form.section.row__label .label Forgot your password? .section.row form#forgot-pwd-form(action='#') .section.row .col-8.input-field +email-input .col-4.button-field br +get-password-button --><!--mixin pwd-reset-form.section.row__label .label Reset your password .section.row form#password-reset-form(role='form' method='post' action='/flare/user/password-reset') .section.row .col-6.input-field +password-input .col-6.input-field +confirm-password-input .col-4.button-field br +reset-pwd-button --><!--mixin sign-up-form-validation--><!--  .section.row__label--><!--    .label Sign Up--><!--  .section.row--><!--    form#sign-up-form(action='/flare/user/sign-up')--><!--      .input-field--><!--        +username-input--><!--        p.validation Your username should only contain letters and numbers.--><!--      .input-field--><!--        +email-input--><!--        p.validation We'll email you a confirmation.--><!--      .input-field--><!--        +password-input--><!--        p.validation Your password should be at least 8 characters long. It should have at least one of each of the following: uppercase and lowercase letters, number and special character.--><!--      .input-field--><!--        +confirm-password-input--><!--        p.validation Type your password again.--><!--      .button-field--><!--        +sign-up-button--><!--      .conditions--><!--          include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><div class=\"section row\"><div class=\"col-4\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p> </td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p> </td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p> </td></tr></table></div></div></div><div class=\"col-8\"><section class=\"getting-started\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div><login-form></login-form></section></div></div>");
    $templateCache.put('/angular/jade-html/views/terms_and_conditions', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Terms and Conditions Navigation--><div class=\"main\"><div class=\"col-3 application-scroll\"><dl><dt><p>Terms & Conditions</p></dt><div class=\"scroll\"><dd><a href=\"#article-i-definitions\">Article I - Definitions</a></dd><dd><a href=\"#article-ii-deliverables\">Article II - Deliverables</a></dd><dd><a href=\"#article-iii-license-grant\">Article III - License Grant</a></dd><dd><a href=\"#article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</a></dd><dd><a href=\"#article-v-trademarks\">Article V - Trademarks</a></dd><dd><a href=\"#article-vi-support\">Article VI - Support</a></dd><dd><a href=\"#article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</a></dd><dd><a href=\"#article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</a></dd><dd><a href=\"#article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</a></dd><dd><a href=\"#article-x-assignment\">Article X - Assignment</a></dd><dd><a href=\"#article-xi-confidentiality\">Article XI - Confidentiality</a></dd><dd><a href=\"#article-xii-warranties\">Article XII - Warranties</a></dd><dd><a href=\"#article-xiii-indemnities\">Article XIII - Indemnities</a></dd><dd><a href=\"#article-xiv-limitations\">Article XIV - Limitations</a></dd><dd><a href=\"#article-xv-term-of-agreement\">Article XV - Term of Agreement</a></dd><dd><a href=\"#article-xvi-termination\">Article XVI - Termination</a></dd><dd><a href=\"#article-xvii-effect-of-termination\">Article XVII - Effect of Termination</a></dd><dd><a href=\"#article-xviii-general-provisions\">Article XVIII - General Provisions</a></dd></div></dl></div><div class=\"col-9 application-scroll\"><div class=\"article\"><h2 id=\"software-product-license-agreement\">Software Product License Agreement</h2> <h3 id=\"important-information-please-read-carefully\">Important Information - Please Read Carefully</h3> <p>This Security Innovation (“Security Innovation”) software or software application contains computer programs and other proprietary material and information, the use of which is subject to and expressly conditioned upon acceptance of this License (the “License”).</p> <p>This License is a legally binding document between you (meaning the individual person or the entity that the individual represents that has obtained the Software for its internal productive use and not for outright resale) (the “Customer”) and Security Innovation.  Unless agrees otherwise in writing, this License governs Customer&#39;s use of the software or software application.</p> <p>By proceeding with the user registration, installation, downloading, use or reproduction of this software or software application, or authorizing any other person to do so, you are representing to Security Innovation that you are (i) authorized to bind the Customer; and (ii) agreeing on behalf of the Customer that the terms of this License shall govern your relationship with Security Innovation with regard to the subject matter in this License and are waiving any rights, to the maximum extent permitted by applicable law, to any claim anywhere in the world concerning the enforceability or validity of this License.</p> <p>If you do not have authority to agree to the terms of this License on behalf of the Customer, or do not accept the terms of this License on behalf of the Customer, immediately cease any further attempt to install, download or use this software or software application for any purpose, and remove any partial or full copies made thereof.</p> <h4 id=\"article-i-definitions\">Article I - Definitions</h4> <p>For the purposes of this Agreement, the following words and phrases shall have the following meanings:</p> <p>1.1 “Affiliate” means any corporation, company, partnership, joint venture, firm and/or entity which controls, is controlled by or is under common control with Licensee.</p> <p>1.2    “Confidential Information” means all materials, trade secrets, or other information regarding a party’s technology, products, business information, or objectives which is designated as confidential in writing by the disclosing party, whether by letter or by the use of an appropriate stamp or legend, prior to or at the time any such material, trade secret, or other information is disclosed by the disclosing party to the other party. Notwithstanding the foregoing to the contrary: (a) materials, trade secrets, or other information which is orally, electronically or visually disclosed by a party, or is disclosed in writing without an appropriate letter, stamp, or legend, shall constitute Confidential Information if the disclosing party, within thirty (30) days after such disclosure, delivers to the other party a written document or document describing the materials, trade secrets, or other information and referencing the place and date of such oral, electronic, visual or written disclosure and the names of the person or persons to whom such disclosure was made; and (b) information obtained by either party while visiting the other party’s facility, however obtained, shall constitute Confidential Information of the other Party.</p> <p>1.3    “Deliverables” means the items listed in an Order to be delivered by Security Innovation to Licensee pursuant to Article II of this Agreement.</p> <p>1.4    &quot;End User&quot; means a direct employee or affiliate employee of Licensee who consumes paid for Licensed Security Innovation Product, or an individual who purchases and consumes Licensed Security Innovation Product, for use within the bounds of this agreement.</p> <p>1.5     “Licensee” means the organization or individual with a paid up and active subscription to the Security Innovation Product.</p> <p>1.6    &quot;Security Innovation Product&quot; means Security Innovation&#39;s proprietary multimedia training and reference systems and includes Security Innovation proprietary content and the software delivery system including, but not limited to: Safelight, PCI Essentials, TEAM Professor, TEAM Mentor and TEAM Academy.</p> <p>1.7    “Internal” means within the Licensee organization and not part of a public or external event where the Security Innovation Product is used to train individuals who are not End-Users.</p> <p>1.8    “Permitted use” means the following application usage activities:</p> <ul> <li>(a) Internal training of Licensee employees</li> <li>(b) Internal training of Licensee affiliates</li> <li>(c) For training a Licensee</li> </ul> <p>1.9    “On-Site” means Security Innovation Product is installed at the Licensee’s facilities in a private Learning Management System (LMS).</p> <p>1.10    “Hosted” means Security Innovation Product and student data is held on and delivered from the Security Innovation secure online LMS.</p> <p>1.11    “Subscription” means an annually renewable license for a specific number of End-Users and specified Content, Hosted or On-Site, for a fixed fee. A subscription includes maintenance and support, but not installation or customization costs, as part of the annual fixed fee.</p> <p>1.12    “Enterprise” means an annually renewable license for an unlimited number of End-Users and specified Content, Hosted or On-Site, within an organization for an annual fixed-fee, not including installation or customization costs.</p> <p>1.13    “Order” means a purchase order, signed sales proposal, e-Commerce transaction, or other ordering document issued by Licensee or individual to Security Innovation, its distributors, resellers or other agents, and describing the quantity and type of Security Innovation Product.</p> <p>1.14    “Effective Date” means the date the Order takes place.</p> <h4 id=\"article-ii-deliverables\">Article II - Deliverables</h4> <h5 id=\"2-1-delivery\">2.1    Delivery</h5> <p>Within 30 days following the later of the Effective Date and receipt of any agreed upon initial payments by Licensee pursuant to Section 7.1, Security Innovation shall provide the Deliverables to Licensee.</p> <h4 id=\"article-iii-license-grant\">Article III - License Grant</h4> <h5 id=\"3-1-licenses\">3.1    Licenses</h5> <p>Subject to the terms and conditions of this Agreement, Security Innovation hereby grants to the Licensee a worldwide, nonexclusive, non-transferable, license:</p> <ul> <li>(a) To use the Security Innovation Product internally on Licensee’s LMS to train End Users or;</li> <li>(b) To use the software internally via Security Innovation’s secure online LMS to train End Users or;</li> <li>(c) To use the Security Innovation Product personally</li> </ul> <h5 id=\"3-2-no-other-rights\">3.2    No Other Rights</h5> <p>Licensee hereby acknowledges that it shall have no right to sell, convey, transfer, license, sublicense, modify, or otherwise dispose of Security Innovation Product, except as provided herein.  Licensee further acknowledges that its rights are limited to those of a licensee only, and that:</p> <ul> <li>(i) Security Innovation retains all title to and intellectual property rights in the Security Innovation Product;</li> <li>(ii) nothing herein shall be construed as granting Licensee any right, title and interest other than as specifically set forth herein; and</li> <li>(iii) nothing herein shall be construed as granting any group, division or Affiliate of Licensee any right, title and interest or license to use Security Innovation Product.</li> </ul> <h5 id=\"3-3-license-limitations\">3.3    License Limitations</h5> <p>The licenses granted in Section 3.1 are subject to the following additional limitations:</p> <ul> <li>(a) Licensee may not in any way sell, lease, rent, license, sublicense or otherwise distribute the Security Innovation Product or any part thereof or the right to use any part of the Security Innovation Product to any person or entity</li> <li>(b) Without Security Innovation’s prior written consent, Licensee shall not modify, translate, reverse engineer, decompile, disassemble or recreate the Security Innovation Product or any part thereof, and shall prohibit End Users from doing the same.</li> <li>(c) The licenses granted herein do not permit Licensee to provide services to third parties utilizing Licensee Products or the Security Innovation Product.</li> </ul> <h5 id=\"3-4-third-party-agents\">3.4    Third Party Agents</h5> <p>Under the License granted in this Article III (License Grant), Licensee may permit its Third Party Agents to be treated as an End User and use the Software provided that Licensee will be fully responsible for its Third Party Agents’ compliance with terms and conditions of this Agreement and any breach of this Agreement by a Third Party Agent shall be deemed to be a breach by Licensee.</p> <h4 id=\"article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</h4> <h5 id=\"4-1-ownership\">4.1    Ownership</h5> <p>With respect to the intellectual property of Security Innovation and Licensee relating to this Agreement:</p> <ul> <li>(a) any intellectual property developed by Security Innovation or Licensee prior to the Effective Date shall remain the intellectual property of that party.</li> <li>(b) any intellectual property that is developed solely by Security Innovation, and relevant to the scope of this Agreement (including, without limitation, the Security Innovation Product) shall remain the intellectual property of Security Innovation.</li> </ul> <h4 id=\"article-v-trademarks\">Article V - Trademarks</h4> <h5 id=\"5-1-use-of-security-innovation-trademarks\">5.1 Use of Security Innovation Trademarks</h5> <p>Security Innovation hereby grants to Licensee a non-exclusive, limited license to use the applicable Security Innovation trademarks and logos (“Trademarks”) solely as permitted in this Agreement.  Licensee understands and agrees that the use of any Trademark in connection with this Agreement shall not create any right, title or interest, in or to the use of the Trademark and that all such use and goodwill associated with the Trademark will inure to the benefit of Security Innovation.  Licensee agrees not to register or attempt to register any Security Innovation Trademarks. All trademarks, service marks, trade names, logos, or other words or symbols identifying or associated with the Software or the business of Security Innovation (“Marks”) remain the exclusive property of Security Innovation and its Licensors. Licensee will not do anything to impair those proprietary rights or seek to acquire or register any rights in the Marks or use any trademarks, service marks, trade names, logos or other words or symbols that are confusingly similar to the Marks in any language.</p> <h4 id=\"article-vi-support\">Article VI - Support</h4> <h5 id=\"6-1-technical-support-and-maintenance\">6.1    Technical Support and Maintenance</h5> <p>Security Innovation shall provide support and maintenance services specified in the Security Innovation Service Level Agreement (SLA).</p> <h4 id=\"article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</h4> <p>In consideration of the licenses granted by Security Innovation and the Support Services provided by Security Innovation to Licensee in this Agreement, Licensee agrees to pay to Security Innovation a license fee as follows:</p> <h5 id=\"7-1-license-fee\">7.1    License Fee</h5> <p>In consideration of Security Innovation&#39;s delivery of the Deliverables, Licensee agrees to pay to Security Innovation a license fee as defined in the Order.</p> <h5 id=\"7-2-taxes\">7.2    Taxes</h5> <p>Licensee will pay all government taxes, duties and tariffs not based on either Security Innovation&#39;s net income from all sources or Security Innovation&#39;s aggregate net worth, including, but not limited to, sales, use, transfer, value-added, privilege, property taxes, import and export duties or tariffs, or amounts levied in lieu thereof, based on charges payable under this Agreement whether such taxes and duties are now or hereafter imposed under the authority of any federal, state, local or other taxing jurisdiction.  Licensee will comply with all requirements of the laws imposing such taxes and duties, including, without limitation, paying any interest or penalties relating to such taxes and duties.  If applicable, Licensee will provide Security Innovation with a Certificate of Exemption issued pursuant to such laws.</p> <h4 id=\"article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</h4> <h5 id=\"8-1-records\">8.1    Records</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, Licensee shall keep all records of account as are necessary to demonstrate compliance with its obligations under Article VIII for a period of three years from the due date for the payment of such sums as are payable in accordance with Article VIII (the “Audit period.”).</p> <h5 id=\"8-2-reports\">8.2    Reports</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, within thirty (30) days after the last business day of each calendar quarter, Licensee shall provide Security Innovation with a written user count report should the user count exceed the count purchased by Licensee. Such report, at a minimum, shall contain information detailing the number of users and the number of courses consumed.</p> <h5 id=\"8-3-audit-rights\">8.3    Audit Rights</h5> <p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, to assure compliance with the payment and reporting requirements of this Agreement, Security Innovation or an independent auditor of its choosing may examine, inspect and audit the applicable records of Licensee and its Affiliates from time to time, but no more frequently than twice per year.  In the event any such audit of Licensee’s records indicates an underpayment of an amount equal to or greater than five percent (5%) of any amounts due hereunder, Licensee shall promptly reimburse Security Innovation for the costs of such audit.  Licensee and its Affiliates shall also immediately pay any underpayment in the amounts due to Security Innovation ascertained from such audit.  The provisions of this Section shall survive expiration or termination of this Agreement.</p> <h4 id=\"article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</h4> <h5 id=\"9-1-non-electronic-notices\">9.1    Non-Electronic Notices</h5> <p>Any notice or other non-electronic communication pursuant to this Agreement shall be sent to such party by overnight courier, or regular mail, addressed to the address below or as it shall designate by written notice given to the other party. Any such communication shall be effective upon receipt by the party to whom it is addressed.</p> <p>Notices to Security Innovation shall be addressed to:</p> <pre><code>SECURITY INNOVATION, Inc. 187 Ballardvale St, Suite A202 Wilmington, MA  01887 USA Attn: Ombudsman </code></pre><h5 id=\"9-2-electronic-notices\">9.2    Electronic Notices</h5> <p>Any notice or electronic communication pursuant to this agreement shall be sent containing an appropriate and correctly attached digital certificate identifying the sender in non-repudiable terms to:</p> <pre><code>ombudsman@securityinnovation.com </code></pre><h4 id=\"article-x-assignment\">Article X - Assignment</h4> <h5 id=\"10-1-assignment\">10.1    Assignment</h5> <p>This Agreement and the license contained herein are personal to Licensee and may not be assigned or transferred by Licensee, without the prior written consent of Security Innovation.  For purposes hereof, an “assignment” shall include any change in control of Licensee whereby another person or entity acquires 50% or greater ownership of Licensee.  For the avoidance of doubt, reassignment assumes changes to the relevant user data used to identify students, the changing of which must be managed by Security Innovation so as to not interrupt service.</p> <h4 id=\"article-xi-confidentiality\">Article XI - Confidentiality</h4> <h5 id=\"11-1-treatment-of-confidential-information\">11.1    Treatment of Confidential Information</h5> <p>Each party hereto shall maintain the Confidential Information of the other party in confidence, and shall not disclose, divulge, or otherwise communicate such Confidential Information, including but not limited to the terms of this Agreement, to others, or use it for any purpose, except pursuant to, and in order to carry out, the terms and objectives of this Agreement or the written consent of the other party. Each party hereby agrees to exercise every reasonable precaution to prevent and restrain the unauthorized disclosure of such Confidential Information by any of its directors, officers, employees, consultants, subcontractors, licensees, or agents.</p> <h5 id=\"11-2-release-from-restrictions\">11.2    Release from Restrictions</h5> <p>The provisions of Section 11.1 shall not apply to Confidential Information disclosed hereunder which;</p> <ul> <li>(a) was known or used by the receiving party prior to its date of disclosure to the receiving party; or</li> <li>(b) either before or after the date of disclosure to the receiving party is lawfully disclosed to the receiving party by sources rightfully in possession of such Confidential Information other than the disclosing party; or</li> <li>(c) either before or after the date of disclosure to the receiving party, becomes published or generally known to the public, through no fault of the receiving party, its Affiliates or sub-licensees; or</li> <li>(d) is required to be disclosed by the receiving party to comply with applicable laws or applicable rules of any securities exchange on which the receiving party’s securities are traded, to defend or prosecute litigation, or to comply with governmental regulations, provided however that the receiving party provides prior written notice of such disclosure to the other party and takes reasonable and lawful actions to avoid and/or minimize the degree of such disclosure.</li> </ul> <h4 id=\"article-xii-warranties\">Article XII - Warranties</h4> <h5 id=\"12-1-representations-and-warranties-of-security-innovation\">12.1    Representations and Warranties of Security Innovation</h5> <ul> <li>(a) Security Innovation represents and warrants to Licensee that all corporate action on the part of Security Innovation, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Security Innovation hereunder has been taken and this Agreement constitutes the legal and binding obligation of Security Innovation, enforceable against Security Innovation in accordance with its terms.</li> <li>(b) Security Innovation further represents and warrants to Licensee that:  (i) it has sufficient right, title and interest in the Security Innovation Product to enter into this Agreement; and (ii) the Security Innovation Product is the original work of Security Innovation and its licensors and was developed without unauthorized access to or knowledge of any third party confidential materials.</li> <li>(c) THE SECURITY INNOVATION PRODUCT AND THE DELIVERABLES ARE PROVIDED AS IS.  SECURITY INNOVATION DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS OR IMPLIED WITH RESPECT TO THE SECURITY INNOVATION PRODUCT OR THE DELIVERABLES.</li> </ul> <h5 id=\"12-2-representations-and-warranties-of-licensee\">12.2    Representations and Warranties of Licensee</h5> <p>Licensee represents and warrants to Security Innovation that all corporate action on the part of Licensee, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Licensee hereunder has been taken and this Agreement constitutes the legal and binding obligation of Licensee, enforceable against Licensee in accordance with its terms. The execution of this Agreement and the performance of the transactions contemplated by this Agreement by Licensee will not conflict with or result in a breach of any of the terms, conditions or provisions of, or constitute a default under, or require a consent under its Certificate of Incorporation or Bylaws (as amended or restated to date) or any agreement or other instrument to which Licensee is a party or by which it or any of its property is bound.</p> <h4 id=\"article-xiii-indemnities\">Article XIII - Indemnities</h4> <h5 id=\"13-1-infringement-indemnification-by-security-innovation\">13.1    Infringement Indemnification by Security Innovation</h5> <p>Security Innovation agrees that it shall, at its own expense, defend, or at its option settle, any action or claim instituted against Licensee, and pay any award or damages assessed or settled upon against Licensee resulting from such action or claim, insofar as the same is based upon a claim that the Security Innovation Product as delivered to Licensee infringes any patent, trademark, copyright or trade secret of a third party or a claim that Security Innovation has no right to license the Security Innovation Product to Licensee hereunder.  Such obligation is subject to the following conditions:  (i) Licensee shall notify Security Innovation in writing immediately after Licensee first becomes aware of a claim; (ii) Security Innovation shall have the right to control and direct the investigation, preparation, defense and settlement of the action; and (iii) Licensee shall give Security Innovation all reasonably available information, assistance and authority.  The foregoing indemnity shall not apply if the alleged infringement claim arises from use of other than the current unaltered release of the Security Innovation Product, or combination of the Security Innovation Product with other software or hardware not provided by Security Innovation, if such action would have been avoided but for such use or combination.</p> <h5 id=\"13-2-exclusive-sole-remedy\">13.2.    Exclusive Sole Remedy</h5> <p>If as a result of any binding settlement among the parties or a final determination by a court of competent jurisdiction, the Security Innovation Product is held to infringe a third party’s patent, trademark, copyright or trade secret and its use is enjoined, or if Security Innovation reasonably determines in its sole discretion that the Software may become subject to an injunction, Security Innovation shall have the option to:  (a) obtain for Licensee the right to continued use of the Security Innovation Product;  (b) replace or modify the Security Innovation Product so it is no longer infringing and is substantially similar in functionality to the enjoined Security Innovation Product; or (c)  refund the license fees paid by Licensee hereunder less depreciation for use assuming straight line depreciation over a five year useful life and terminate this Agreement.   NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, THE FOREGOING STATES SECURITY INNOVATION&#39;S ENTIRE LIABILITY AND LICENSEE&#39;S SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO CLAIMS OF INFRINGEMENT OF THIRD PARTY PROPRIETARY OR INTELLECTUAL PROPERTY RIGHTS OF ANY KIND, AND SECURITY INNOVATION EXPRESSLY DISCLAIMS ANY IMPLIED WARRANTY OF NON-INFRINGEMENT.</p> <h4 id=\"article-xiv-limitations\">Article XIV - Limitations</h4> <h5 id=\"14-1-limitation-of-liability\">14.1.    Limitation of Liability</h5> <ul> <li>(a) Nothing in this Agreement shall exclude or limit liability for death or personal injury resulting from the failure of a party to exercise reasonable care in the performance of its obligations under this Agreement.</li> <li>(b) THE AGGREGATE LIABILITY OF SECURITY INNOVATION UNDER ANY CLAIMS ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE PERFORMANCE OF THEIR OBLIGATIONS UNDER THIS AGREEMENT (WHETHER IN CONTRACT, TORT, NEGLIGENCE, WARRANTY OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT THEN PAYABLE TO SECURITY INNOVATION BY LICENSEE UNDER THIS AGREEMENT.</li> </ul> <h5 id=\"14-2-limitation-of-damages\">14.2    Limitation of Damages</h5> <p>IN ANY EVENT, NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY ECONOMIC LOSS OR FOR SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, REGARDLESS OF THE FORM OF ACTION, EVEN IF SUCH PARTY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p> <h4 id=\"article-xv-term-of-agreement\">Article XV - Term of Agreement</h4> <h5 id=\"15-1-term\">15.1    Term</h5> <p>This Agreement shall be effective as of the Effective Date. Unless earlier terminated upon the mutual agreement of the Parties or in accordance with the provisions of Article XVI, or otherwise specified in the Order, this Agreement shall continue in force for one (1) year from the Effective Date.</p> <h4 id=\"article-xvi-termination\">Article XVI - Termination</h4> <h5 id=\"16-1-termination-for-insolvency\">16.1    Termination for Insolvency</h5> <p>If Licensee shall cease to carry on its business for any reason, be liquidated or dissolved, become insolvent, enter into an agreement for the benefit of its creditors, or file any petition or case under any bankruptcy law or if any such petition or case is filed against it which remains undismissed after sixty (60) days, then this Agreement and all rights, privileges and license granted hereunder shall terminate.</p> <h5 id=\"16-2-termination-for-breach\">16.2    Termination for Breach</h5> <p>Upon any material breach or default of this Agreement by either party, the non-breaching party shall have the right to terminate this Agreement upon forty-five (45) days’ written notice to the breaching party, unless the breaching party shall have cured any such breach or default prior to the expiration of such sixty (60) day period.</p> <h4 id=\"article-xvii-effect-of-termination\">Article XVII - Effect of Termination</h4> <h5 id=\"17-1-consequences-of-termination\">17.1    Consequences of Termination</h5> <p>Upon termination of this Agreement for any reason, all rights, privileges and licenses granted hereunder shall immediately cease, provided, however, that nothing herein shall be construed to release either party from any obligation that accrued or matured prior to the effective date of such termination.  Upon termination of this Agreement for any reason, Licensee agrees to immediately cease use of all Security Innovation Product and to cease use of all Confidential Information of Security Innovation, and to return all Confidential Information of Security Innovation to Security Innovation.</p> <p>Any termination or expiration of this Agreement shall not affect any accrued rights or liabilities of either party. The obligations of each party under Sections 4, 5, 8, 10, 11, 13, 14, 16, 17 and 18 shall survive termination or expiration of this agreement.</p> <h4 id=\"article-xviii-general-provisions\">Article XVIII - General Provisions</h4> <h5 id=\"18-1-governing-law\">18.1    Governing Law</h5> <p>This Agreement shall be construed, governed, interpreted and applied in accordance with the laws of the Commonwealth of Massachusetts, United States of America and the federal laws of the United States, without giving effect to any conflict of laws principles.</p> <h5 id=\"18-2-injunctive-relief\">18.2    Injunctive Relief</h5> <p>It is expressly agreed that a material breach of this Agreement will cause irreparable harm to Security Innovation and that a remedy at law would be inadequate.  Therefore, in addition to any and all remedies available at law, Security Innovation and/or Security Innovation Licensors shall be entitled to seek injunctive relief against Licensee in the event of any threatened or actual violation of any or all provisions in this Agreement.</p> <h5 id=\"18-3-severability\">18.3    Severability</h5> <p>The provisions of this Agreement are severable, and in the event that any provisions of this Agreement shall be determined to be invalid or unenforceable under any controlling body of the law, such invalidity or unenforceability shall not in any way affect the validity or enforceability of the remaining provisions hereof.</p> <h5 id=\"18-4-no-waiver\">18.4    No Waiver</h5> <p>The failure of either party to assert a right hereunder or to insist upon compliance with any term or condition of this Agreement shall not constitute a waiver of that right or excuse a similar subsequent failure to perform any such term or condition by the other Party.</p> <h5 id=\"18-5-u-s-government-restricted-rights\">18.5 U.S. GOVERNMENT RESTRICTED RIGHTS</h5> <p>If the Security Innovation Product is acquired on behalf of a unit or agency of the United States Government this provision applies.</p> <p>For units of the Department of Defense (DoD), this Software is supplied only with “Restricted Rights” as that term is defined in the DoD Supplement to the Federal Acquisition Regulations, 52.227-7013(c)(1)(ii) and:</p> <pre><code>Use, duplication or disclosure by the Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 52.227-7013. Contractor: SECURITY INNOVATION, Inc., 187 Ballardvale Street, Suite 202, Wilmington, MA 01887 </code></pre><p>Government personnel using this Software, other than under a DoD contract or GSA Schedule, are hereby on notice that use of this Software is subject to restricted rights, which are the same as, or similar to those specified above.</p> <h5 id=\"18-6-export-controls\">18.6    Export Controls</h5> <ul> <li>(a) The Security Innovation Products are eligible for (and are being exported under) License Exception ENC of the Export Administration Regulations C.F.R. 740.17 and Security Innovation have submitted all notifications required to establish such eligibility.  Licensee agrees to make only such uses of the Security Innovation Products, as are in compliance with that status. Without limiting the forgoing, Licensee agrees: (i) not to develop any foreign products using the [Security Innovation Product(s)]; and (ii) not to modify the Security Innovation Products, in such a way as to add or substitute cryptographic algorithms or otherwise modify the encryption functionality of such products.</li> <li>(b) Licensee shall not re-export any Security Innovation Product to any destination or end user in violation of any acceptable laws or regulations of the United States government.  Licensee shall be solely responsible for compliance with all such laws and regulations and for obtaining any and all export or import licenses or permits that may be required from Licensee to lawfully conduct its business with respect to the Security Innovation Products,</li> <li>(c) Licensee shall obtain all necessary licenses and authorizations for governments or other relevant bodies to enable Licensee to fulfill its obligations under this Agreement, which shall include, but not be limited to, customs clearances, registration of the Agreement if appropriate, export licenses, exchange control clearances, trading permits and registration for Value Added Tax (VAT) or its equivalent.</li> </ul> <h5 id=\"18-7-no-use-of-names\">18.7    No Use of Names</h5> <p>Except as expressly permitted by this Agreement, neither party shall use the name of the other party or any of its employees nor any adaptation thereof in any advertising, promotion or sales literature without the prior written consent of the other party.</p> <h5 id=\"18-8-no-agency\">18.8    No Agency</h5> <p>Nothing herein shall be deemed to constitute Security Innovation, on the one hand, or Licensee, on the other hand, as the agent or representative of the other, or as joint venturers or partners for any purpose.</p> <h5 id=\"18-9-headings\">18.9    Headings</h5> <p>The headings contained in this Agreement are for convenience of reference only and shall not be considered in construing this Agreement.</p> <h5 id=\"18-10-successors-and-assigns\">18.10    Successors and Assigns</h5> <p>This Agreement shall be binding upon and inure to the benefit of the Parties and their successors and permitted assigns.</p> <h5 id=\"18-11-third-party-rights\">18.11    Third Party Rights</h5> <p>Other than as expressly set out in this Agreement, this Agreement does not create any rights for any person who is not a party to it, and no person who is not a party to this Agreement may enforce any of its terms or rely on any exclusion or limitation contained in it.</p> <h5 id=\"18-12-counterparts\">18.12    Counterparts</h5> <p>This Agreement may be executed in any number of counterparts, each of which shall be deemed an original but all of such together shall constitute one and the same instrument.</p> <h5 id=\"18-13-force-majeure\">18.13    Force Majeure</h5> <p>Neither party shall be liable hereunder by reason of any failure or delay in the performance of its obligations hereunder (except for the payment of money) on account of strikes, shortages, failure of suppliers, riots, insurrection, fires, floods, storms, earthquakes, acts of God, war, governmental action, labor conditions, or any other cause which is beyond the reasonable control of such party.  If such failure or delay continues for at least ninety (90) days, the party not subject to the force majeure shall be entitled to terminate this Agreement by notice in writing to the other.</p> <h5 id=\"18-14-entire-agreement\">18.14 Entire Agreement</h5> <p>The parties acknowledge that this Agreement sets forth the entire Agreement and understanding of the parties as to the subject matter hereof and this Agreement shall not be subject to any change or modification except by the execution of a written instrument executed by both parties.</p> </div></div></div>");
    $templateCache.put('/angular/jade-html/views/user/article', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><div class=\"main\"><article></article></div>");
    $templateCache.put('/angular/jade-html/views/user/article_box', "<div class=\"main\"><div class=\"section row\"><div class=\"col-3\"><article-box></article-box></div><div class=\"col-9\"></div></div></div>");
    $templateCache.put('/angular/jade-html/views/user/error', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div class=\"main\"><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/user/guides', "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection') --><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection') --><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results') --><!-- Getting Started--><div ng-controller=\"Gateways_Controller\" class=\"main help\"><div class=\"col-3 application-scroll\"><dl class=\"help scroll\"><span ng-repeat=\"view in Library.Views\"><dt class=\"vertical-align\"><p>\{\{view.title}}</p></dt><dd ng-repeat=\"article in view.Articles\"><a href=\"guides/\{\{article.id}}\" ng-click=\"show_Article(article.id)\">\{\{article.title}}</a></dd></span></dl></div><div class=\"col-9 application-scroll\"><div class=\"article curated-content\"><h1 class=\"article-title\">\{\{title}}</h1><br/><div id=\"html\" dynamic=\"content\" class=\"article-content\"></div><br/><br/><br/><div class=\"footer\"><p>TEAM Mentor 4.0, a Security Innovation eKnowledge Product.</p> <p>© Security Innovation 2007-2015, all rights reserved.</p> <ul class=\"text-center\"><li><p><a href=\"mailto:support@securityinnovation.com\"><span class=\"icon-Mail\"></span><span class=\"text\">support@securityinnovation.com</span></a></p></li><li class=\"text-center\"><p><a ui-sref=\"terms_and_conditions\"><span class=\"icon-Paperclip\"></span><span class=\"text\">Terms & Conditions</span></a></p></li></ul></div></div><div class=\"section article-info curated-content\"><ul class=\"display-inline\"><li><a class=\"button btn-result\"><span class=\"icon\"><icon class=\"Share\"></icon></span><span class=\"text\">Share</span></a></li></ul><div class=\"section row__label\"><div class=\"label\">Metadata:</div></div><div class=\"section row\"><ul><li><span class=\"icon\"><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></span><span class=\"text\">\{\{article.technology}}</span></li><li><span class=\"icon\"><div id=\"icon-Type\" ng-bind-html=\"icon_Type\"></div></span><span class=\"text\">\{\{article.type}}</span></li><li><span class=\"icon\"><div id=\"icon-Phase\" ng-bind-html=\"icon_Phase\"></div></span><span class=\"text\">\{\{article.phase}}</span></li><li><span class=\"icon\"><icon class=\"Curated-Content\"></icon></span><span class=\"text\">Security Guides</span></li></ul></div><div class=\"section row fixed-bottom\"><div class=\"alert alert-neutral\"><div ng-show=\"showFeedbackBanner()\"><span class=\"text\">Have a comment about this article?<a id=\"tm-support-email\" href=\"\{\{githubContentUrl}}/new?title=\{\{article.title}} &amp;body=\{\{articleUrl}}\" target=\"_blank\">     Open an issue here.</a></span></div><div ng-show=\"showGeneralFeedback()\"><span class=\"text\">Have a comment about this article? Send our team<a href=\"mailto:support@securityinnovation.com\"> an email.</a></span></div></div></div></div></div></div>");
    $templateCache.put('/angular/jade-html/views/user/index', "<div ng-controller=\"Index_Controller\" class=\"main\"><div class=\"\{\{column_Left}} application-scroll left-col\"><queries></queries></div><div class=\"\{\{column_Middle}} middle-col\"><div class=\"display-desktop\"><breadcrumbs></breadcrumbs></div><results></results><filters_active></filters_active><div class=\"scrolling-results\"><articles></articles><pagination></pagination></div></div><div class=\"\{\{column_Right}} application-scroll right-col\"><div class=\"display-desktop\"><found_issue></found_issue></div><filters class=\"filters\"></filters></div></div>");
    $templateCache.put('/angular/jade-html/views/user/main', "<!-- Terms and Conditions Navigation--><div class=\"main\"><div class=\"col-3 application-scroll\"><div><dl><dt><p id=\"query_title\">Welcome to TEAM Mentor</p></dt><div id=\"containers\" class=\"scroll\"><div><a href=\"#popular_Search_Terms\"><dd><span class=\"text\">Popular Search Terms</span><span class=\"badge\">3</span></dd></a><a href=\"#recently_Viewed_Articles\"><dd><span class=\"text\">Recently Viewed Articles</span><span class=\"badge\">3</span></dd></a><a href=\"#top_Articles\"><dd><span class=\"text\">Top Articles</span><span class=\"badge\">3</span></dd></a><!--a(href='#')dd a(href='#my_Searches') span.text My Searches span.badge 12--></div></div></dl></div></div><div class=\"col-9 application-scroll\"><start_view></start_view></div></div>");
    return $templateCache.put('/angular/jade-html/views/user', "Moved Temporarily. Redirecting to /error");
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
    var body, events, i, len, log_Event, name;
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
      events = ['apply_filter', 'apply_query', 'clear_articles', 'clear_filter', 'clear_query', 'clear_search', 'set_search', 'update_search', 'pop_state', 'query_data', 'article_data', 'filter_data', 'set_page', 'set_page_split', 'toggle_filters', 'view_filters', 'view_model_data', 'test'];
      for (i = 0, len = events.length; i < len; i++) {
        name = events[i];
        log_Event(name);
      }
    }
    return window.onpopstate = function(event) {
      var ref, ref1;
      if ((event != null ? event.path : void 0) && (event != null ? (ref = event.path[0]) != null ? (ref1 = ref.location) != null ? ref1.pathname : void 0 : void 0 : void 0)) {
        return $rootScope.$broadcast('pop_state', event.path[0].location.pathname);
      }
    };
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
        var ref, results;
        ref = this;
        results = [];
        for (key in ref) {
          if (!hasProp.call(ref, key)) continue;
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
    String.prototype.assert_Contains = function(target, message) {
      var source;
      source = this.toString();
      message = message || ("expected string '" + source + "' to contain the string/array '" + target + "'");
      expect(source).to.contain(target, message);
      return this;
    };
    String.prototype.assert_Not_Contains = function(target) {
      var message, source;
      source = this.toString();
      message = "expected string '" + source + "' to not contain the string '" + target + "'";
      expect(source).to.not.contain(target, message);
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
      user_Root: ['docs', 'terms-and-conditions'],
      user_User: ['main', 'index', 'articles', 'error']
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
  angular.module('TM_App').directive('dynamic', function($compile) {
    return {
      restrict: 'A',
      replace: true,
      link: function(scope, ele, attrs) {
        scope.$watch(attrs.dynamic, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }
    };
  }).controller('Help_Controller', function($sce, $state, $scope, $stateParams, TM_API) {
    $scope.doc_Titles = null;
    $scope.first_Article_Id = null;
    $scope.load_Doc = function($event, article_Id) {
      var div;
      $event.preventDefault();
      $state.go('docs_id', {
        id: article_Id
      }, {
        notify: false,
        reload: false
      });
      $scope.show_Doc(article_Id);
      div = document.querySelector('.col-9');
      if (angular.element(div)[0]) {
        return angular.element(div)[0].scrollTop = 0;
      }
    };
    $scope.show_Doc = function(article_Id) {
      if (article_Id) {
        return TM_API.docs_Page(article_Id, function(article_Data) {
          $scope.id = article_Id;
          $scope.title = $scope.doc_Titles[article_Id];
          return $scope.content = $sce.trustAsHtml(article_Data.html);
        });
      }
    };
    $scope.map_Doc_Titles = function(library) {
      var article, i, len, ref, results, view;
      $scope.doc_Titles = {};
      if (library) {
        ref = library.Views;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          view = ref[i];
          results.push((function() {
            var j, len1, ref1, results1;
            ref1 = view.Articles;
            results1 = [];
            for (j = 0, len1 = ref1.length; j < len1; j++) {
              article = ref1[j];
              results1.push($scope.doc_Titles[article.Id] = article.Title);
            }
            return results1;
          })());
        }
        return results;
      }
    };
    $scope.load_Library = function(next) {
      return TM_API.docs_Library(function(library) {
        var ref, ref1, ref2;
        if (library != null ? library.Views : void 0) {
          $scope.Views = library.Views;
        }
        $scope.map_Doc_Titles(library);
        $scope.first_Article_Id = (ref = library.Views) != null ? (ref1 = ref.first()) != null ? (ref2 = ref1.Articles) != null ? ref2.first().Id : void 0 : void 0 : void 0;
        return next();
      });
    };
    $scope.show_First_Article = function() {
      return $scope.show_Doc($scope.first_Article_Id);
    };
    return $scope.load_Library(function() {
      if ($stateParams != null ? $stateParams.id : void 0) {
        return $scope.show_Doc($stateParams != null ? $stateParams.id : void 0);
      } else {
        return $scope.show_First_Article();
      }
    });
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
      this.user_Components = ['active_filter', 'article', 'article_box', 'articles', 'breadcrumbs', 'filters', 'filters_active', 'found_issue', 'pagination', 'start_view', 'share', 'queries', 'queries_history', 'results', 'search_bar'];
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
    $urlRouterProvider.otherwise('error');
    return $locationProvider.html5Mode(true);
  });

}).call(this);

(function() {
  var app;

  app = angular.module('TM_App');

  app.service('ui_Routes', function() {});

  app.config(function($stateProvider, routes_Names) {
    var i, len, ref, view_Name;
    ref = routes_Names.views.guest;
    for (i = 0, len = ref.length; i < len; i++) {
      view_Name = ref[i];
      $stateProvider.state(view_Name, {
        url: "/" + view_Name,
        templateUrl: "/angular/jade-html/views/guest/" + view_Name
      });
    }
    $stateProvider.state('pwd_reset', {
      url: "/pwd_reset/:username/:token",
      templateUrl: "/angular/jade-html/views/guest/pwd_reset"
    });
    return $stateProvider.state('docs_id', {
      url: "/docs/:id",
      templateUrl: "/angular/jade-html/views/docs"
    });
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
    $stateProvider.state('guides', {
      url: "/guides",
      templateUrl: "/angular/jade-html/views/user/guides"
    });
    $stateProvider.state('guide_id', {
      url: "/guides/:id",
      templateUrl: "/angular/jade-html/views/user/guides"
    });
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
    $stateProvider.state('articleguid', {
      url: "/article/:article_Id",
      templateUrl: '/angular/jade-html/views/user/article'
    });
    $stateProvider.state('article-box', {
      url: "/article-box/:article_Id/:article_Title",
      templateUrl: '/angular/jade-html/views/user/article_box'
    });
    $stateProvider.state('index_query_id', {
      url: "/index/:query_Id",
      templateUrl: '/angular/jade-html/views/user/index'
    });
    return $stateProvider.state('index_query_id_filters', {
      url: "/index/:query_Id/:filters",
      templateUrl: '/angular/jade-html/views/user/index'
    });
  });


  /*
  app.run ($rootScope,$window,TM_API, routes_Names) =>
    $rootScope.$on '$stateChangeStart', (event, next, current) =>
      if routes_Names.views.guest.indexOf(next.name) > -1 || next.name is "docs" || next.name is 'terms_and_conditions'
        return
      else
        TM_API.currentuser (userInfo) =>
          if (userInfo? && userInfo?.UserEnabled)
            return
          else
            $window.location.href = '/angular/guest/login'
    return
   */

}).call(this);

(function() {
  var Breadcrumbs_Service,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  Breadcrumbs_Service = (function() {
    Breadcrumbs_Service.$inject = ['$rootScope'];

    function Breadcrumbs_Service(rootScope) {
      this.rootScope = rootScope;
      this.on_Selected = bind(this.on_Selected, this);
      this.move_Back = bind(this.move_Back, this);
      this.current_Breadcrumbs = bind(this.current_Breadcrumbs, this);
      this.clear_query = bind(this.clear_query, this);
      this.add_Breadcrumbs = bind(this.add_Breadcrumbs, this);
      this.add_Breadcrumb = bind(this.add_Breadcrumb, this);
      this.history = {};
      this.current_Path = '';
      this.now = new Date().getMilliseconds();
    }

    Breadcrumbs_Service.prototype.add_Breadcrumb = function(id, title) {
      if (id && title) {
        if (this.current_Path.indexOf(id) === -1) {
          this.current_Path += "/" + id;
          this.history[id] = {
            title: title,
            query_Id: id
          };
          return true;
        }
      }
      return false;
    };

    Breadcrumbs_Service.prototype.add_Breadcrumbs = function(breadcrumbs) {
      var breadcrumb, i, len, results;
      results = [];
      for (i = 0, len = breadcrumbs.length; i < len; i++) {
        breadcrumb = breadcrumbs[i];
        results.push(this.add_Breadcrumb(breadcrumb.id, breadcrumb.title));
      }
      return results;
    };

    Breadcrumbs_Service.prototype.clear_query = function() {
      return this.current_Path = '';
    };

    Breadcrumbs_Service.prototype.current_Breadcrumbs = function() {
      var breadcrumbs, i, item, key, len, path, ref;
      breadcrumbs = [];
      path = '';
      ref = this.current_Path.split('/');
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        if (!(key)) {
          continue;
        }
        item = this.history[key];
        if (item) {
          breadcrumbs.push({
            query_Id: item.query_Id,
            title: item.title,
            path: path
          });
          path += "/" + key;
        }
      }
      return breadcrumbs;
    };

    Breadcrumbs_Service.prototype.move_Back = function() {
      var path;
      path = this.current_Path.split('/');
      path.pop();
      return this.current_Path = path.join('/');
    };

    Breadcrumbs_Service.prototype.on_Selected = function(breadcrumb) {
      var ref;
      this.rootScope.$broadcast('reset_current_page');
      if (breadcrumb != null ? breadcrumb.query_Id : void 0) {
        this.current_Path = breadcrumb.path;
        this.rootScope.$broadcast('apply_query', breadcrumb.query_Id);
        if ((ref = breadcrumb.query_Id) != null ? ref.contains('search-') : void 0) {
          return this.rootScope.$broadcast('update_search', breadcrumb.title);
        }
      }
    };

    return Breadcrumbs_Service;

  })();

  angular.module('TM_App').service('breadcrumbs_Service', Breadcrumbs_Service);

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
    'AWS': {
      "class": 'icon-AWS',
      layers: 12
    },
    'Ruby': {
      "class": 'icon-Ruby',
      layers: 12
    },
    'ABAP': {
      "class": 'icon-ABAP',
      layers: 12
    },
    'Python': {
      "class": 'icon-Python',
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
      this.index_Query_Filters = bind(this.index_Query_Filters, this);
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

    Query_Service.prototype.index_Query_Filters = function(callback) {
      return this.TM_API.query_view_model(this.index_Query, null, 0, 0, (function(_this) {
        return function(data) {
          return callback(data.filters);
        };
      })(this));
    };

    Query_Service.prototype.load_Query = function(query_Id, filters, from, to, callback) {
      from = from || this.default_Page_From;
      to = to || this.default_Page_To;
      this.$rootScope.$broadcast('loading_query', query_Id, filters, from, to);
      return this.TM_API.currentuser((function(_this) {
        return function(info) {
          return _this.TM_API.query_view_model(query_Id, filters, from, to, function(data) {
            data.UserInfo = info;
            _this.$rootScope.$broadcast('view_model_data', data);
            if (callback) {
              return callback();
            }
          });
        };
      })(this));
    };

    Query_Service.prototype.reload_Data = function() {
      this.$rootScope.$broadcast('clear_filters');
      this.$rootScope.$broadcast('clear_query');
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
    function TM_API(q, http, window, timeout, state) {
      this.verifyInternalUser = bind(this.verifyInternalUser, this);
      this.tmConfig = bind(this.tmConfig, this);
      this.gatewaysLibrary = bind(this.gatewaysLibrary, this);
      this.popular_Search = bind(this.popular_Search, this);
      this.pwd_reset_Token = bind(this.pwd_reset_Token, this);
      this.pwd_reset = bind(this.pwd_reset, this);
      this.currentuser = bind(this.currentuser, this);
      this.signup = bind(this.signup, this);
      this.logout = bind(this.logout, this);
      this.login = bind(this.login, this);
      this.top_Articles = bind(this.top_Articles, this);
      this.recent_Articles = bind(this.recent_Articles, this);
      this.my_Articles = bind(this.my_Articles, this);
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
      this.$window = window;
      this.cache_Articles = {};
      this.cache_Guides = null;
      this.cache_Query_View_Model = {};
      this.currentUserCache = null;
      this.config = null;
      this.tmrecentArticles = null;
      this.topArticles = null;
      this.loginPage = '/angular/guest/login';
      this.errorPage = '/angular/user/error';
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
      }).error((function(_this) {
        return function(data, statusCode) {
          if (statusCode === 403) {
            return _this.$window.location.href = _this.loginPage;
          } else {
            return _this.$window.location.href = _this.errorPage;
          }
        };
      })(this)).then(function(response) {
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
        })(this)).error((function(_this) {
          return function(data, statusCode) {
            if (statusCode === 403) {
              return _this.$window.location.href = _this.loginPage;
            } else {
              return _this.$window.location.href = _this.errorPage;
            }
          };
        })(this));
      }
    };

    TM_API.prototype.query_from_text_search = function(text, callback) {
      var url;
      text = text.replace('%', '-');
      url = "/api/search/query_from_text_search/" + text;
      return this.$http.get(url).success(function(data) {
        return callback(data);
      }).error((function(_this) {
        return function(data, statusCode) {
          if (statusCode === 403) {
            return _this.$window.location.href = _this.loginPage;
          } else {
            return _this.$window.location.href = _this.errorPage;
          }
        };
      })(this));
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
      }).error((function(_this) {
        return function(data, statusCode) {
          if (statusCode === 403) {
            return _this.$window.location.href = _this.loginPage;
          } else {
            return _this.$window.location.href = _this.errorPage;
          }
        };
      })(this));
    };

    TM_API.prototype.docs_Library = function(callback) {
      var url;
      url = "/jade/json/docs/library";
      return this.$http.get(url).success(function(data) {
        return callback(data);
      });
    };

    TM_API.prototype.docs_Page = function(article_Id, callback) {
      var url;
      url = "/jade/json/docs/" + article_Id;
      return this.$http.get(url).success(callback);
    };

    TM_API.prototype.article = function(article_Id, callback) {
      var url;
      if (this.cache_Articles[article_Id]) {
        this.$timeout((function(_this) {
          return function() {
            return callback(_this.cache_Articles[article_Id]);
          };
        })(this));
      }
      url = "/jade/json/article/" + article_Id;
      return this.$http.get(url).success((function(_this) {
        return function(data) {
          if (_this.cache_Articles[article_Id]) {
            return;
          }
          _this.cache_Articles[article_Id] = data;
          return callback(data);
        };
      })(this)).error((function(_this) {
        return function(data, statusCode) {
          if (statusCode === 403) {
            return _this.$window.location.href = _this.loginPage;
          } else {
            return _this.$window.location.href = _this.errorPage;
          }
        };
      })(this));
    };

    TM_API.prototype.my_Articles = function(size, callback) {
      var url;
      url = "/jade/json/my-articles/" + size;
      return this.$http.get(url).success((function(_this) {
        return function(data) {
          return callback(data);
        };
      })(this));
    };

    TM_API.prototype.recent_Articles = function(size, callback) {
      var url;
      if (this.tmrecentArticles) {
        return callback(this.tmrecentArticles);
      } else {
        url = "/jade/json/recentarticles/" + size;
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

    TM_API.prototype.signup = function(postData, callback) {
      var url;
      url = "/json/user/signup";
      postData['confirm-password'] = postData.confirmpassword;
      return this.$http.post(url, angular.toJson(postData)).success(callback);
    };

    TM_API.prototype.currentuser = function(callback) {
      var url;
      url = "/json/user/currentuser";
      if ((this.currentUserCache != null) && this.currentUserCache.UserEnabled) {
        return callback(this.currentUserCache);
      } else {
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            if (!data) {
              return callback(null);
            }
            _this.currentUserCache = data;
            _this.currentUserCache.InternalUser = '';
            _this.currentUserCache.InternalUserInfo = {};
            return _this.verifyInternalUser(data.Email, function(internalUserInfo) {
              if (internalUserInfo != null) {
                _this.currentUserCache.InternalUser = true;
                _this.currentUserCache.InternalUserInfo = internalUserInfo;
              } else {
                _this.currentUserCache.InternalUser = false;
              }
              return callback(_this.currentUserCache);
            });
          };
        })(this));
      }
    };

    TM_API.prototype.pwd_reset = function(email, callback) {
      var postData, url;
      url = "/jade/json/user/pwd_reset";
      postData = {
        email: email
      };
      return this.$http.post(url, postData).success(callback);
    };

    TM_API.prototype.pwd_reset_Token = function(username, token, password, callback) {
      var postData, url;
      url = "/jade/json/passwordReset/" + username + "/" + token;
      postData = {
        password: password,
        'confirm-password': password
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

    TM_API.prototype.gatewaysLibrary = function(callback) {
      var url;
      if (this.cache_Guides) {
        return callback(this.cache_Guides);
      } else {
        url = "/jade/json/gateways/library";
        return this.$http.get(url).success((function(_this) {
          return function(data) {
            return callback(data);
          };
        })(this)).error((function(_this) {
          return function(data, statusCode) {
            if (statusCode === 403) {
              return _this.$window.location.href = _this.loginPage;
            } else {
              return _this.$window.location.href = _this.errorPage;
            }
          };
        })(this));
      }
    };

    TM_API.prototype.tmConfig = function(callback) {
      var url;
      url = "/jade/json/tm/config";
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
      return this.tmConfig((function(_this) {
        return function(configFile) {
          var allowedEmailDomains, email, matchesEmail;
          allowedEmailDomains = configFile != null ? configFile.allowedEmailDomains : void 0;
          email = userEmail;
          matchesEmail = false;
          if (allowedEmailDomains != null) {
            allowedEmailDomains.some(function(domain) {
              if (email != null ? email.match(domain.toString()) : void 0) {
                return matchesEmail = true;
              }
            });
          }
          if (matchesEmail) {
            return callback(configFile);
          } else {
            return callback(null);
          }
        };
      })(this));
    };

    return TM_API;

  })();

  app.service('TM_API', (function(_this) {
    return function($q, $http, $window, $timeout) {
      return new TM_API($q, $http, $window, $timeout);
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
    $scope.form = {};
    $scope.login = function() {
      var timer;
      $scope.errorMessage = null;
      $scope.supportEmail = false;
      $scope.isDisabled = true;
      timer = $timeout((function() {
        return $scope.infoMessage = 'We are experiencing slight delays. Hang on.';
      }), 3000);
      return TM_API.login($scope.form.username, $scope.form.password, (function(_this) {
        return function(data) {
          var ref, ref1, ref2, ref3, ref4, ref5, url;
          $timeout.cancel(timer);
          if (data.result === 'OK') {
            if ((ref = data.viewModel) != null ? ref.redirectUrl : void 0) {
              if (/^(?:[a-z]+:)?\/\//i.test((ref1 = data.viewModel) != null ? ref1.redirectUrl : void 0)) {
                url = '/angular/user/index';
              } else {
                $scope.isDisabled = false;
                url = (ref2 = data.viewModel) != null ? ref2.redirectUrl : void 0;
              }
              $timeout(function() {
                return $window.location.href = url;
              });
            }
            return TM_API.currentuser(function(userInfo) {
              $scope.isDisabled = false;
              if ((userInfo != null ? userInfo.UserEnabled : void 0)) {
                $rootScope.loggedInUser = true;
                $scope.isDisabled = false;
                url = '/angular/user/index';
                return $timeout(function() {
                  return $window.location.href = url;
                });
              } else {
                $scope.isDisabled = false;
                $scope.infoMessage = null;
                return $scope.errorMessage = 'User account is disabled';
              }
            });
          } else {
            $scope.infoMessage = null;
            $scope.isDisabled = false;
            if (data != null ? (ref3 = data.viewModel) != null ? (ref4 = ref3.errorMessage) != null ? ref4.contains('please contact us at') : void 0 : void 0 : void 0) {
              $scope.supportEmail = true;
            }
            return $scope.errorMessage = ((ref5 = data.viewModel) != null ? ref5.errorMessage : void 0) || 'Login Failed (Server error)';
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
      $scope.isDisabled = true;
      $scope.infoMessage = "Processing your request";
      return TM_API.pwd_reset($scope.form.email, function(data) {
        $scope.isDisabled = false;
        return $scope.infoMessage = data != null ? data.message : void 0;
      });
    };
    return $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Pwd_Reset_Controller', (function(_this) {
    return function($state, $scope, TM_API, $location, $timeout, $stateParams) {
      $scope.reset_Password = function() {
        var token, url, username;
        $scope.errorMessage = '';
        $scope.infoMessage = "Processing your request";
        $scope.isDisabled = true;
        url = $location.$$url;
        if ((url != null)) {
          username = $stateParams.username;
          token = $stateParams.token;
          if ((username == null) || (token == null)) {
            $scope.isDisabled = false;
            return $scope.errorMessage = "Request not valid";
          }
          if ($scope.form.password !== $scope.form.confirmpassword) {
            $scope.infoMessage = '';
            $scope.isDisabled = false;
            return $scope.errorMessage = "Passwords don't match, please verify";
          }
          return TM_API.pwd_reset_Token(username, token, $scope.form.password, (function(_this) {
            return function(data) {
              $scope.isDisabled = false;
              if ((data != null ? data.status : void 0) === "Ok") {
                $scope.errorMessage = '';
                $scope.infoMessage = data != null ? data.message : void 0;
                return $timeout((function() {
                  return $state.go('login');
                }), 2000);
              } else {
                $scope.errorMessage = data != null ? data.message : void 0;
                return $scope.infoMessage = '';
              }
            };
          })(this));
        } else {
          return $scope.errorMessage = "Unable to process your request";
        }
      };
      $scope.showInfoMessage = function() {
        return $scope.infoMessage;
      };
      return $scope.showErrorMessage = function() {
        return $scope.errorMessage;
      };
    };
  })(this));

}).call(this);

(function() {
  angular.module('TM_App').controller('Signup_Controller', function($scope, TM_API, $window, $timeout) {
    $scope.form = {};
    $scope.signup = function() {
      $scope.errorMessage = null;
      $scope.supportEmail = false;
      $scope.isDisabled = true;
      $scope.infoMessage = "Signing you up";
      return TM_API.signup($scope.form, function(data) {
        var ref, ref1, ref2;
        $scope.isDisabled = false;
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
    return function($sce, $scope, $rootScope, $state, $stateParams, $window, $timeout, TM_API, icon_Service) {
      using($scope, function() {
        this.articleUrl = $window.location.href;
        this.article_Link = null;
        this.showFeedback = false;
        return this.articleLoaded = false;
      });
      $scope.load_Article = function(article_Id) {
        $scope.redirectMessage = '';
        if (!article_Id) {
          return null;
        }
        return TM_API.article(article_Id, function(article) {
          $scope.articleLoaded = true;
          if (((article != null ? article.redirectUrl : void 0) != null)) {
            $scope.redirectMessage = "Article not found in this free TEAM Mentor edition, you are being redirected to the full TEAM Mentor site";
            $timeout((function() {
              return $window.location.href = article.redirectUrl;
            }), 3000);
          }
          if (article) {
            $scope.map_Guide_Article(article);
            $scope.map_Article_Url(article);
            $scope.article = article;
            $scope.article_Html = $sce.trustAsHtml(article.article_Html);
            $scope.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
            $scope.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
            return $scope.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
          } else {
            return $timeout(function() {
              return $state.go('error');
            });
          }
        });
      };
      $scope.map_Article_Url = function(article) {
        var id, ref, ref1, title;
        if (article) {
          id = (ref = article.id) != null ? ref.remove('article-') : void 0;
          title = (ref1 = article.title) != null ? ref1.replace(new RegExp(' ', 'g'), '-').remove('.') : void 0;
          article.url = '/angular/user/article/' + id + '/' + title;
          return this.article_Link = $window.location.origin + "/article/" + id + "/" + title;
        }
      };
      $scope.map_Current_User = function() {
        return typeof TM_API.currentuser === "function" ? TM_API.currentuser(function(userInfo) {
          var ref;
          if ((userInfo != null ? userInfo.UserEnabled : void 0) && (userInfo != null ? userInfo.InternalUser : void 0)) {
            $scope.showFeedback = true;
            return $scope.githubContentUrl = userInfo != null ? (ref = userInfo.InternalUserInfo) != null ? ref.githubContentUrl : void 0 : void 0;
          } else {
            return $scope.showFeedback = false;
          }
        }) : void 0;
      };
      $scope.map_Guide_Article = function(article) {
        if (article) {
          return typeof TM_API.gatewaysLibrary === "function" ? TM_API.gatewaysLibrary(function(data) {
            var i, len, ref, ref1, results, rowArticle, view;
            if (data != null ? (ref = data.Views) != null ? ref.size : void 0 : void 0) {
              ref1 = data.Views;
              results = [];
              for (i = 0, len = ref1.length; i < len; i++) {
                view = ref1[i];
                results.push((function() {
                  var j, len1, ref2, results1;
                  ref2 = view.Articles;
                  results1 = [];
                  for (j = 0, len1 = ref2.length; j < len1; j++) {
                    rowArticle = ref2[j];
                    if ((article.id === rowArticle.id) || (article.id === rowArticle.guid)) {
                      results1.push($timeout(function() {
                        return $window.location.href = '/angular/user/guides/' + article.id;
                      }));
                    } else {
                      results1.push(void 0);
                    }
                  }
                  return results1;
                })());
              }
              return results;
            }
          }) : void 0;
        }
      };
      $scope.show_Article_Data = function() {
        return $scope.articleLoaded;
      };
      $scope.showGeneralFeedback = function() {
        return !$scope.showFeedback;
      };
      $scope.showFeedbackBanner = function() {
        return $scope.showFeedback;
      };
      $scope.showRedirectMessage = function() {
        return $scope.redirectMessage.length > 0;
      };
      $scope.show_feedback_button = function() {
        return $rootScope.$broadcast('Show_Feedback_Box', true);
      };
      $scope.load_Article($stateParams != null ? $stateParams.article_Id : void 0);
      return $scope.map_Current_User();
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
  angular.module('TM_App').controller('Breadcrumbs_Controller', function($scope, $rootScope, breadcrumbs_Service) {
    return using($scope, function() {
      this.visible = false;
      this.breadcrumbs_Service = breadcrumbs_Service;
      this.breadcrumbs = null;
      this.$on('clear_query', (function(_this) {
        return function(event, data) {
          return _this.breadcrumbs_Service.clear_query();
        };
      })(this));
      this.$on('view_model_data', (function(_this) {
        return function(event, data) {
          _this.breadcrumbs_Service.add_Breadcrumb(data.id, data.title);
          return _this.refresh_Breadcrumbs();
        };
      })(this));
      this.$on('pop_state', (function(_this) {
        return function(event, url) {
          _this.breadcrumbs_Service.move_Back();
          return _this.refresh_Breadcrumbs();
        };
      })(this));
      this.$on('refresh_breadcrumbs', (function(_this) {
        return function(event, data) {
          return _this.refresh_Breadcrumbs();
        };
      })(this));
      this.refresh_Breadcrumbs = (function(_this) {
        return function() {
          _this.breadcrumbs = _this.breadcrumbs_Service.current_Breadcrumbs();
          return _this.visible = true;
        };
      })(this);
      return this.load_Query = this.breadcrumbs_Service.on_Selected;
    });
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Filters_Active_Controller', function($sce, $scope, $rootScope, query_Service, icon_Service) {
    $scope.current_Filters = {};
    $scope.current_Query_Id = null;
    $scope.from = 0;
    $scope.to = 0;
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title, filter_Refresh) {
      var icon;
      if (filter_Refresh == null) {
        filter_Refresh = true;
      }
      if (filter_Id) {
        icon = $sce.trustAsHtml(icon_Service.element_Html(filter_Title));
        $scope.current_Filters[filter_Id] = {
          filter_Title: filter_Title,
          filter_Icon: icon,
          metadata_Title: metadata_Title
        };
        if (filter_Refresh) {
          return $scope.refresh_Filters($scope.from, $scope.to);
        }
      }
    });
    $scope.$on('clear_filter', function(event, filter_Id, metadata_Title) {
      var key, ref, results, value;
      if (metadata_Title) {
        ref = $scope.current_Filters;
        results = [];
        for (key in ref) {
          value = ref[key];
          if (value.metadata_Title === metadata_Title) {
            results.push(delete $scope.current_Filters[key]);
          } else {
            results.push(void 0);
          }
        }
        return results;
      } else {
        return delete $scope.current_Filters[filter_Id];
      }
    });
    $scope.$on('clear_filters', function() {
      return $scope.current_Filters = {};
    });
    $scope.$on('view_model_data', function(event, data) {
      return $scope.current_Query_Id = data != null ? data.id : void 0;
    });
    $scope.$on('apply_query', function(event, query_Id) {
      $scope.current_Query_Id = query_Id;
      return $scope.refresh_Filters($scope.from, $scope.to);
    });
    $scope.$on('set_page', function(event, page, from, to) {
      return $scope.refresh_Filters(from, to);
    });
    $scope.$on('set_from_to', function(event, from, to) {
      $scope.from = from;
      return $scope.to = to;
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
      return $scope.refresh_Filters($scope.from, $scope.to);
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
      $rootScope.$broadcast('apply_filter', filter_Id, filter_Title, metadata_Title);
      return $rootScope.$broadcast('reset_current_page');
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
  angular.module('TM_App').directive('dynamic', function($compile) {
    return {
      restrict: 'A',
      replace: true,
      link: function(scope, ele, attrs) {
        scope.$watch(attrs.dynamic, function(html) {
          ele.html(html);
          $compile(ele.contents())(scope);
        });
      }
    };
  }).controller('Gateways_Controller', function($sce, $state, $scope, $rootScope, $window, TM_API, $location, icon_Service, $stateParams) {
    $scope.Library = {};
    $scope.NoGuidesMessage = "Guides not availale in this version of TEAMMentor.";
    $scope.ShowMessage = false;
    this.article_Link = null;
    $scope.load_Article = function($event, article_Id) {
      $event.preventDefault();
      $state.go('guide_id', {
        id: article_Id
      }, {
        notify: false,
        reload: false
      });
      return $scope.show_Article(article_Id);
    };
    $scope.show_Article = function(article) {
      if (article) {
        return TM_API.article(article, function(article_Data) {
          var attr, href, i, len, link, links, originalHtml, value;
          if (article_Data) {
            $scope.map_Article_Url(article_Data);
            $scope.article = article_Data;
            $scope.title = article_Data.title;
            $scope.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article_Data.technology));
            $scope.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article_Data.type));
            $scope.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article_Data.phase));
            links = angular.element(article_Data.article_Html).find('a');
            if ((links != null) && links.length > 0) {
              for (i = 0, len = links.length; i < len; i++) {
                link = links[i];
                originalHtml = link.outerHTML;
                href = link.attributes.href;
                if (href.value.contains("/article/")) {
                  href.value = href.value.replace("/article/", '');
                }
                if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(href.value)) {
                  value = href.value.split('-')[4];
                  attr = "load_Article($event, '" + value + "')";
                  link.attributes.href.value = link.attributes.href.value.replace(href.value, 'article-' + value);
                  link.setAttribute("ng-click", attr);
                  article_Data.article_Html = article_Data.article_Html.replace(originalHtml, link.outerHTML);
                }
              }
            }
            return $scope.content = article_Data.article_Html;
          }
        });
      }
    };
    $scope.map_Article_Url = function(article) {
      var id, ref, ref1, title;
      if (article) {
        id = (ref = article.id) != null ? ref.remove('article-') : void 0;
        title = (ref1 = article.title) != null ? ref1.replace(new RegExp(' ', 'g'), '-').remove('.') : void 0;
        article.url = '/angular/user/article/' + id + '/' + title;
        return this.article_Link = $window.location.origin + "/article/" + id + "/" + title;
      }
    };
    $scope.map_Current_User = function() {
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
    };
    $scope.showFeedbackBanner = function() {
      return $scope.showFeedback;
    };
    $scope.show_Article_Data = function() {
      return $scope.articleLoaded;
    };
    $scope.showGeneralFeedback = function() {
      return !$scope.showFeedback;
    };
    $scope.load_Library = function() {
      return TM_API.gatewaysLibrary(function(data) {
        var articleId, ref, ref1, ref2, ref3;
        if (data) {
          $scope.ShowMessage = false;
          $scope.Library.title = data.title;
          $scope.Library.Views = data.Views;
          articleId = $stateParams.id;
          if (articleId) {
            return $scope.show_Article(articleId);
          } else {
            return $scope.show_Article(data != null ? (ref = data.Views) != null ? (ref1 = ref.first()) != null ? (ref2 = ref1.Articles) != null ? (ref3 = ref2.first()) != null ? ref3.id : void 0 : void 0 : void 0 : void 0 : void 0);
          }
        } else {
          return $scope.ShowMessage = true;
        }
      });
    };
    $scope.showNoGuidesMessage = function() {
      return $scope.ShowMessage;
    };
    $scope.showMetadata = function() {
      var ref, ref1, ref2;
      return (((ref = $scope.article) != null ? ref.phase : void 0) != null) || (((ref1 = $scope.article) != null ? ref1.technology : void 0) != null) || (((ref2 = $scope.article) != null ? ref2.technology : void 0) != null);
    };
    $scope.map_Current_User();
    $scope.load_Library();
    $scope.show_feedback_button = function() {
      return $rootScope.$broadcast('Show_Feedback_Box', true);
    };
    return window._stateParams = $stateParams;
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Index_Controller', function($scope, query_Service, $stateParams, $location, $state, $window, $rootScope, $timeout) {
    window._state = $state;
    window._scope = $scope;
    window._stateParams = $stateParams;
    window._location = $location;
    window._window = $window;
    window._rootScope = $rootScope;
    using($scope, function() {
      this.history = {};
      this.view_Filters = false;
      this.view_found_issue = false;
      this.column_Left = 'col-3';
      this.column_Middle = 'col-9';
      this.column_Right = 'col-0';
      this.showCollapseFilters = $window.document.documentMode === void 0;
      this.current_Query_Id = null;
      this.current_Filters = null;
      return this.$on('toggle_filters', (function(_this) {
        return function(event) {
          $scope.view_Filters = !$scope.view_Filters;
          $scope.view_found_issue = !$scope.view_found_issue;
          if ($scope.view_Filters) {
            _this.column_Middle = 'col-6';
            return _this.column_Right = 'col-3';
          } else {
            _this.column_Middle = 'col-9';
            return _this.column_Right = 'col-0';
          }
        };
      })(this));
    });
    $scope.load_Index_Data = function() {
      var filters, query_Id, search_Text;
      search_Text = $location != null ? typeof $location.search === "function" ? $location.search().text : void 0 : void 0;
      query_Id = $stateParams.query_Id;
      filters = $stateParams.filters;
      if (search_Text) {
        return $rootScope.$broadcast('set_search', search_Text);
      } else if (query_Id) {
        return $timeout(function() {
          return query_Service.load_Query(query_Id, filters, null, null, function() {
            return $rootScope.$broadcast('apply_filters', filters);
          });
        });
      } else {
        return $timeout(function() {
          return query_Service.reload_Data();
        });
      }
    };
    $scope.resolve_Index_State = function(query_Id, filters) {
      var value;
      value = 'index';
      if (query_Id && filters) {
        value += '_query_id_filters';
      }
      if (query_Id && !filters) {
        value += '_query_id';
      }
      return value;
    };
    $scope.update_Location_Url = function(query_Id, filters) {
      if ((!filters) && query_Id === 'query-6234f2d47eb7') {
        return;
      }
      $state.go($scope.resolve_Index_State(query_Id, filters), {
        query_Id: query_Id,
        filters: filters
      }, {
        notify: false,
        reload: false
      });
      $scope.current_Query_Id = query_Id;
      return $scope.current_Filters = filters;
    };
    $scope.$on('loading_query', function(event, query_Id, filters, from, to) {
      if ($scope.current_Query_Id !== query_Id || $scope.current_Filters !== filters) {
        return $scope.update_Location_Url(query_Id, filters);
      }
    });
    if ($window.location.href && !$window.location.href.contains('index')) {
      return;
    }
    if ($stateParams.filters && $stateParams.query_Id && $location.url() !== ("/index/" + $stateParams.query_Id + "/" + $stateParams.filters)) {
      return;
    }
    if ($stateParams.query_Id && !$stateParams.filters && $location.url() !== ("/index/" + $stateParams.query_Id)) {
      return;
    }
    return $scope.load_Index_Data();
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Logout_Controller', function(TM_API, $window) {
    return TM_API.logout(function(callback) {
      return $window.location.href = '/angular/guest/home';
    });
  });

}).call(this);

(function() {
  var modulo = function(a, b) { return (+a % (b = +b) + b) % b; };

  angular.module('TM_App').controller('Pagination_Controller', function($scope, $rootScope, $window) {
    var model;
    model = {
      page: 1,
      page_Split: 10,
      data_Size: 0,
      pages: [],
      page_Splits: [4, 10, 20, 50, 100]
    };
    $scope.query_Id = null;
    $scope.model = model;
    $scope.visible = false;
    $scope.pagginMessage = '';
    $scope.Paging_Message = function() {
      var currentPage, endNo, recordsPerPage, remainingArticles, startNo, totalRecords;
      recordsPerPage = model.page_Split;
      totalRecords = model.data_Size;
      currentPage = model.page;
      if (currentPage === 1 && recordsPerPage > totalRecords) {
        if (totalRecords === 1) {
          $rootScope.$broadcast('set_paging_message', "Showing " + totalRecords + " article");
        } else {
          $rootScope.$broadcast('set_paging_message', "Showing " + totalRecords + " articles");
        }
        return;
      }
      if (currentPage === 1) {
        return $rootScope.$broadcast('set_paging_message', "Showing articles 1 to " + recordsPerPage + " out of " + totalRecords);
      } else {
        startNo = ((currentPage - 1) * recordsPerPage) + 1;
        if ((currentPage * recordsPerPage) + 1 > totalRecords) {
          endNo = totalRecords;
          remainingArticles = (((currentPage - 1) * recordsPerPage) + 1) - endNo;
          if (remainingArticles === 0) {
            $rootScope.$broadcast('set_paging_message', "Showing article " + totalRecords + " out of  " + totalRecords);
          } else {
            $rootScope.$broadcast('set_paging_message', "Showing article " + (((currentPage - 1) * recordsPerPage) + 1) + " to " + totalRecords + " out of " + totalRecords);
          }
        } else {
          endNo = currentPage * recordsPerPage;
          return $rootScope.$broadcast('set_paging_message', "Showing articles  " + startNo + " to " + endNo + " out of " + totalRecords);
        }
      }
    };
    $scope.$on('set_paging_message', function(event, data) {
      return $scope.paginMessage = data;
    });
    $scope.$on('view_model_data', function(event, data) {
      var i, results, split;
      $scope.visible = true;
      if (!(data != null ? data.size : void 0)) {
        return model.pages = null;
      } else {
        model.data_Size = data != null ? data.size : void 0;
        $scope.query_Id = data.id;
        if (data.size < model.page_Split) {
          split = 1;
        } else {
          split = ~~(data.size / model.page_Split);
          if ((modulo(data.size, model.page_Split)) > 0) {
            split++;
          }
        }
        model.pages = (function() {
          results = [];
          for (var i = 1; 1 <= split ? i <= split : i >= split; 1 <= split ? i++ : i--){ results.push(i); }
          return results;
        }).apply(this);
        return $scope.Paging_Message();
      }
    });
    $scope.set_Page = function() {
      var from, to;
      if (model.page) {
        from = (model.page - 1) * model.page_Split;
        to = model.page * model.page_Split;
        $rootScope.$broadcast('set_from_to', 0, model.page_Split);
        return $rootScope.$broadcast('set_page', model.page, from, to);
      } else {
        model.page = 1;
        return $scope.Paging_Message();
      }
    };
    $scope.$on('reset_current_page', function(event) {
      return model.page = 1;
    });
    $scope.set_Page_Split = function(recordsPerPage) {
      model.page = 1;
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
      if (angular.element(div)[0]) {
        return angular.element(div)[0].scrollTop = 0;
      }
    };
    return $scope.ShowTopButton = function() {
      var div;
      div = document.querySelector('.scrolling-results');
      if (angular.element(div)[0]) {
        return angular.element(div)[0].scrollHeight > angular.element(div)[0].clientHeight;
      } else {
        return false;
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Queries_Controller', function($scope, $rootScope, $window) {
    $scope.visible = false;
    $scope.$on('view_model_data', function(event, data) {
      $scope.visible = true;
      $scope.title = data.title;
      return $scope.containers = data.queries;
    });
    $scope.load_Query = function($event, query_Id) {
      $event.preventDefault();
      $rootScope.$broadcast('reset_current_page');
      return $rootScope.$broadcast('apply_query', query_Id);
    };
    return $scope.show_Previous_Query = function() {
      return $window.history.back();
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Recommendations_Controller', function($scope, $rootScope, TM_API) {
    $scope.$on('apply_query', function(event, term) {
      return $scope.words = [];
    });
    $scope.$on('search_term', function(event, term, selected_Technology) {
      if ((selected_Technology != null ? selected_Technology.title : void 0) !== "All Technologies") {
        return $scope.words = [];
      } else {
        if (term === '') {
          return $scope.words = [];
        } else {
          return TM_API.get_Words(term, function(words) {
            return $scope.words = words;
          });
        }
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
  angular.module('TM_App').controller('Search_Bar_Controller', function($rootScope, $scope, $state, $location, $timeout, query_Service, $element, $document, TM_API) {
    using($scope, function() {
      this.query_Id = null;
      this.selected_Technology = null;
      this.previous_Filter_Id = null;
      this.technologies = {};
      this.technologies_By_Id = {};
      this.text = '';
      this.searchPlaceholder = "Search All of TEAM Mentor";
      this.index_States = ['index', 'index_query_id', 'index_query_id_filters'];
      return this.mobile_Dropbox_Visible = false;
    });
    $scope.$on('clear_search', function() {
      return $scope.text = '';
    });
    $scope.$on('clear_filter', function(event, filter_Id) {
      if (filter_Id) {
        if ($scope.technologies_By_Id[filter_Id]) {
          $scope.selected_Technology = $scope.technologies_By_Id['All'];
        }
      }
      return $scope.select_Technology();
    });
    $scope.$on('apply_filter', function(event, filter_Id, filter_Title, metadata_Title) {
      var ref;
      if (metadata_Title === 'Technology') {
        if (filter_Title !== ((ref = $scope.selected_Technology) != null ? ref.title : void 0)) {
          $scope.selected_Technology = $scope.technologies_By_Id[filter_Id];
          $scope.previous_Filter_Id = filter_Id;
          return $scope.select_Technology();
        }
      }
    });
    $scope.$on('apply_filters', function(event, filters) {
      var filter, filter_Id, i, len, ref, results;
      if (!$scope.filters_By_Id) {
        console.log('$scope.filters_By_Id NOT READY');
        return;
      }
      if (filters) {
        ref = filters.split(',');
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          filter_Id = ref[i];
          filter = $scope.filters_By_Id[filter_Id];
          if (filter) {
            results.push($rootScope.$broadcast('apply_filter', filter.id, filter.title, filter.metadata_Title, false));
          } else {
            results.push(void 0);
          }
        }
        return results;
      }
    });
    $scope.$on('set_search', function(event, text) {
      $scope.text = text;
      return $scope.submit();
    });
    $scope.$on('update_search', function(event, text) {
      return $scope.text = text;
    });
    $scope.set_technologies_By_Id = function() {
      return query_Service.index_Query_Filters(function(filters) {
        var filter, i, j, key, len, len1, value;
        $scope.technologies = [
          {
            title: 'All Technologies',
            id: query_Service.index_Query
          }
        ];
        $scope.technologies_By_Id = {
          'All': $scope.technologies[0]
        };
        $scope.filters_By_Id = {};
        if (filters) {
          for (key in filters) {
            value = filters[key];
            for (i = 0, len = value.length; i < len; i++) {
              filter = value[i];
              filter.metadata_Title = key;
              $scope.filters_By_Id[filter.id] = filter;
            }
            if (key === 'Technology' && value.size) {
              for (j = 0, len1 = value.length; j < len1; j++) {
                filter = value[j];
                $scope.technologies.push(filter);
                $scope.technologies_By_Id[filter.id] = filter;
              }
            }
          }
        }
        $scope.selected_Technology = $scope.technologies[0];
        return $scope.previous_Filter_Id = $scope.technologies[0].id;
      });
    };
    $scope.update_Placeholder_Text = function() {
      $scope.searchPlaceholder = "Search All of TEAM Mentor";
      if ($scope.selected_Technology) {
        if ($scope.selected_Technology.title !== 'All Technologies') {
          return $scope.searchPlaceholder = "Search " + $scope.selected_Technology.title;
        }
      }
    };
    $scope.set_Style = function() {
      var multiplier, ref, ref1, size, title_Length;
      title_Length = (ref = $scope.selected_Technology) != null ? (ref1 = ref.title) != null ? ref1.length : void 0 : void 0;
      multiplier = 18;
      if (title_Length) {
        size = title_Length <= 5 ? 115 : title_Length * multiplier;
        return {
          flex: size + 'px'
        };
      }
      return {
        flex: '310px'
      };
    };
    $scope.select_Technology = function() {
      return $scope.update_Placeholder_Text();
    };
    $scope.select_Technology_Mobile = function(technology) {
      $scope.selected_Technology = technology;
      $scope.mobile_Dropbox_Visible = false;
      return $scope.select_Technology();
    };
    $scope.submit = function() {
      var after_Timeout, ref;
      if (!this.index_States.contains((ref = $state.current) != null ? ref.name : void 0)) {
        $state.go('index');
        $scope.previous_Filter_Id = null;
      }
      after_Timeout = function() {
        if ($scope.text === '') {
          $rootScope.$broadcast('loading_query', null, null);
          return $scope.submit_Event($scope.selected_Technology.id, query_Service.index_Query);
        } else {
          return TM_API.query_from_text_search($scope.text, function(query_Id) {
            return $scope.submit_Event($scope.selected_Technology.id, query_Id);
          });
        }
      };
      return $timeout(after_Timeout, 250);
    };
    $scope.submit_Event = function(technology_Id, query_Id) {
      if (technology_Id !== $scope.previous_Filter_Id) {
        $rootScope.$broadcast('clear_filter', query_Id, 'Technology');
        if ($scope.selected_Technology.title !== 'All Technologies') {
          $rootScope.$broadcast('apply_filter', $scope.selected_Technology.id, $scope.selected_Technology.title, 'Technology', false);
        }
      }
      $rootScope.$broadcast('apply_query', query_Id);
      return $scope.previous_Filter_Id = technology_Id;
    };
    $scope.get_Words = function(term) {
      return $rootScope.$broadcast('search_term', term, $scope.selected_Technology);
    };
    $scope.show_Mobile_Dropbox = function() {
      return $scope.mobile_Dropbox_Visible;
    };
    $scope.toggle_Mobile_Dropbox = function() {
      return $scope.mobile_Dropbox_Visible = !$scope.mobile_Dropbox_Visible;
    };
    $scope.set_technologies_By_Id();
    return $scope.select_Technology();
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Share_Controller', function($scope, $timeout, $window) {
    $scope.msg_Id = '#share_article_link';
    $scope.msg_Copy_OK = 'Article link has been copied to your clipboard';
    $scope.msg_Copy_Fail = 'Copy and share the link below';
    $scope.show_feedback = false;
    $scope.infoMessage = null;
    $scope.showCopyButton = null;
    $scope.copy_Article_Link = function() {
      var share_Link;
      $window.getSelection().removeAllRanges();
      try {
        share_Link = $window.document.querySelector($scope.msg_Id);
        $window.document.getElementById("share_link").select();
        if ($window.document.execCommand('copy')) {
          $scope.infoMessage = $scope.msg_Copy_OK;
          $timeout((function() {
            return $scope.infoMessage = null;
          }), 3000);
        } else {
          $scope.infoMessage = $scope.msg_Copy_Fail;
        }
      } catch (error) {
        $scope.infoMessage = $scope.msg_Copy_Fail;
      }
      return $timeout((function() {
        return window.getSelection().removeAllRanges();
      }), 5000);
    };
    $scope.showInfoMessage = function() {
      return $scope.infoMessage;
    };
    $scope.$on('Show_Feedback_Box', function(show) {
      $scope.show_feedback = show;
      return $timeout((function() {
        $window.document.querySelector($scope.msg_Id).childNodes[0].focus();
        return $window.document.querySelector($scope.msg_Id).childNodes[0].select();
      }), 1);
    });
    $scope.closeModalWindow = function() {
      $scope.show_feedback = false;
      return $window.getSelection().removeAllRanges();
    };
    $scope.supportedCopyToClipboard = function() {
      var isChrome, isFF, ua;
      ua = $window.navigator.userAgent;
      isChrome = ua.indexOf('Chrome') !== -1;
      isFF = ua.indexOf('Firefox') !== -1;
      return isChrome || isFF;
    };
    return $scope.modalMessage = function() {
      return "Copy the shareable link below";
    };

    /*if ($scope.supportedCopyToClipboard())
      $scope.showCopyButton = true
      return "Share this article"
    else
      $scope.showCopyButton = false
      return $scope.msg_Copy_Fail
     */
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('Start_View_Controller', (function(_this) {
    return function($sce, $scope, $state, $stateParams, $window, $timeout, TM_API, icon_Service) {
      using($scope, function() {
        this.top_Articles = [];
        this.recent_Articles = [];
        return this.my_Top_Articles = [];
      });
      $scope.recentArticles = function() {
        return TM_API.recent_Articles(10, function(articles) {
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
      $scope.my_Articles = function() {
        return TM_API.my_Articles(10, function(articles) {
          console.log('--------------> ');
          console.log(articles);
          if ((articles != null)) {
            angular.forEach(articles, function(article) {
              var id, title;
              article.icon_Technology = $sce.trustAsHtml(icon_Service.element_Html(article.technology));
              article.icon_Type = $sce.trustAsHtml(icon_Service.element_Html(article.type));
              article.icon_Phase = $sce.trustAsHtml(icon_Service.element_Html(article.phase));
              id = article.id.remove('article-');
              title = article.title.replace(new RegExp(' ', 'g'), '-').remove('.');
              return article.url = '/angular/user/article/' + id + '/' + title;
            });
          }
          return $scope.my_Top_Articles = articles;
        });
      };
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
      $scope.top_Searches = function() {
        return TM_API.popular_Search(function(search) {
          var baseUrl;
          baseUrl = "/angular/user/index?text=";
          angular.forEach(search, function(searchItem) {
            return searchItem.url = baseUrl + searchItem.title;
          });
          return $scope.top_Search = search;
        });
      };
      $scope.my_Articles();
      $scope.topArticles();
      $scope.recentArticles();
      return $scope.top_Searches();
    };
  })(this));

}).call(this);

(function() {
  angular.module('TM_App').controller('User_Navigation_Controller', function($scope, TM_API, $state, $window, $timeout, $rootScope, query_Service) {
    $scope.index_States = ['index', 'index_query_id', 'index_query_id_filters'];
    $scope.show_Loading_Image = false;
    TM_API.tmConfig(function(callback) {
      return $scope.ShowLogOutBtn = callback.showLogoutButton;
    });
    $scope.$on('http_start', function() {
      return $scope.show_Loading_Image = true;
    });
    $scope.$on('http_end', function() {
      return $timeout(function() {
        return $scope.show_Loading_Image = false;
      });
    });
    return $scope.open_Query_State = function() {
      var ref, ref1;
      if (this.index_States.contains((ref = $state.current) != null ? ref.name : void 0)) {
        $rootScope.$broadcast('clear_filter', 'All');
        $rootScope.$broadcast('loading_query', null, null);
        return query_Service.reload_Data();
      } else {
        if (((ref1 = $state.current) != null ? ref1.name : void 0) === 'article') {
          $rootScope.$broadcast('clear_filter', 'All');
        }
        return $timeout(function() {
          return $state.go('index');
        });
      }
    };
  });

}).call(this);

(function() {
  angular.module('TM_App').controller('UserFeedback_Controller', function($scope) {
    return $scope.$on('view_model_data', function(event, data) {
      if ((data != null) && data.UserInfo) {
        if (data.UserInfo.InternalUser) {
          $scope.showFeedback = true;
          $scope.githubUrl = data.UserInfo.InternalUserInfo.githubUrl;
        } else {
          $scope.showFeedback = false;
        }
      }
      $scope.visible = true;
      $scope.showGeneralFeedback = function() {
        return !$scope.showFeedback;
      };
      $scope.showFeedbackBanner = function() {
        return $scope.showFeedback;
      };
      return $scope.showBanner = function() {
        return $scope.visible;
      };
    });
  });

}).call(this);
