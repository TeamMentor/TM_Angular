app = angular.module('TM_App')
app.run ($templateCache)-> 
 

   # ------Components---

   $templateCache.put('/angular/jade-html/component/alert_bad' , "<div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/alert_ok' , "<div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">|</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/design/all_icons' , "<main><section class=\"row\"><div class=\"col-3\"><h4>injected one at the time</h4><icon class=\"Design\"></icon><icon type=\".Net\"></icon><icon type=\"Java\"></icon><icon type=\"Principle\"></icon><icon type=\"Design\"></icon><icon type=\"Principle\"></icon><icon type=\"Requirement\"></icon></div><div class=\"col-3\"><h4>all in one go (without titles)</h4><show-all-icons></show-all-icons></div><div class=\"col-3\"><h4>all in one go (with titles)</h4><show-all-icons with-titles=\"with-titles\"></show-all-icons></div></section></main>") 
 
   $templateCache.put('/angular/jade-html/component/design/events' , "<h2>Events</h2><div ng-controller=\"Events_Controller\" class=\"result\"><div class=\"summary\"><a>'event title'</a><p>event description</p></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/gateway_navigation' , "<dl class=\"help scroll\"><span ng-repeat=\"view in Library.Views\"><dt class=\"vertical-align\"><p>\{\{view.title}}</p></dt><dd ng-repeat=\"article in view.Articles\"><a href=\"guides/\{\{article.id}}\" ng-click=\"show_Article(article.id)\">\{\{article.title}}</a></dd></span></dl>") 
 
   $templateCache.put('/angular/jade-html/component/guest/login_form' , "<!-- Getting Started--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div ng-controller=\"Login_Controller\"><div class=\"section row__label\"><h4>Login</h4></div><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div><div class=\"section row\"><form id=\"login-form\" role=\"form\" ng-submit=\"login()\" class=\"access-form\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\" required=\"required\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"button-field\"><button type=\"submit\" id=\"btn-login\" class=\"full-width\">Login</button></div><div class=\"button-field text-right\"><br/><a id=\"pwd_forgot\" href=\"pwd_forgot\" class=\"text-right\">Forgot your password?</a></div></form></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/guest/pwd_forgot_form' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div ng-controller=\"Pwd_Forgot_Controller\"><div class=\"section row__label\"><h4>Forgot your password?</h4></div><div class=\"section row\"><form id=\"forgot-pwd-form\" ng-submit=\"get_Password()\" class=\"access-form\"><div class=\"section row\"><div class=\"col-8 input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" ng-model=\"email\" placeholder=\"Email Address\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><button type=\"submit\" id=\"btn-get-password\" class=\"full-width\">Retrieve password</button></div></div></form></div><alert-ok></alert-ok></div>") 
 
   $templateCache.put('/angular/jade-html/component/guest/pwd_reset_form' , "<!-- Getting Started--><!--mixin sign-up-form--><!--  form#sign-up-form.access-form(role=\"form\" ng-submit=\"signup()\")--><!--    .input-field--><!--      +username-input--><!--    .input-field--><!--      +email-input--><!--    .input-field--><!--      +password-input--><!--    .input-field--><!--      +confirm-password-input--><!--    .input-field--><!--      +first-name-input--><!--    .input-field--><!--      +last-name-input--><!--    .input-field--><!--      +company-input--><!--    .input-field--><!--      +title-input--><!--    .input-field--><!--      +country-input--><!--    .input-field--><!--      +state-input--><!--    .conditions--><!--      include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><!--    .button-field--><!--      +sign-up-button--><!--mixin reset-password-formform#password-reset-form.access-form(role='form' method='post' action='/flare/user/password-reset')
  .section.row
    .col-6.input-field
      +password-input
    .col-6.input-field
      +confirm-password-input
    .col-4.button-field
      br
      +reset-pwd-button--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div ng-controller=\"Pwd_Reset_Controller\"><div class=\"section row__label\"><h4>Reset your password</h4></div><div id=\"error\"><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div></div><div id=\"info\"><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div></div><div class=\"section row\"><form id=\"password-reset-form\" role=\"form\" ng-submit=\"reset_Password()\" class=\"access-form\"><div class=\"section row\"><div class=\"col-6 input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-6 input-field\"><label for=\"confirmpassword\">Confirm Password</label><input type=\"password\" id=\"confirmpassword\" ng-model=\"confirmpassword\" placeholder=\"Password\" required=\"required\" maxlength=\"256\"/></div><div class=\"col-4 button-field\"><br/><button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button></div></div></form></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/guest/sign_up_form' , "<!-- Getting Started--><!--mixin sign-up-form--><!--  form#sign-up-form.access-form(role=\"form\" ng-submit=\"signup()\")--><!--    .input-field--><!--      +username-input--><!--    .input-field--><!--      +email-input--><!--    .input-field--><!--      +password-input--><!--    .input-field--><!--      +confirm-password-input--><!--    .input-field--><!--      +first-name-input--><!--    .input-field--><!--      +last-name-input--><!--    .input-field--><!--      +company-input--><!--    .input-field--><!--      +title-input--><!--    .input-field--><!--      +country-input--><!--    .input-field--><!--      +state-input--><!--    .conditions--><!--      include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><!--    .button-field--><!--      +sign-up-button--><!--mixin reset-password-formform#password-reset-form.access-form(role='form' method='post' action='/flare/user/password-reset')
  .section.row
    .col-6.input-field
      +password-input
    .col-6.input-field
      +confirm-password-input
    .col-4.button-field
      br
      +reset-pwd-button--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div ng-controller=\"Signup_Controller\"><div class=\"section row__label\"><h4>Sign Up</h4></div><div id=\"error\"><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div></div><div id=\"info\"><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div></div><div class=\"section row\"><form id=\"sign-up-form\" role=\"form\" ng-submit=\"signup()\" class=\"access-form\"><div class=\"input-field\"><label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\" required=\"required\"/></div><div class=\"input-field\"><label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" ng-model=\"email\" placeholder=\"Email Address\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"confirmpassword\">Confirm Password</label><input type=\"password\" id=\"confirmpassword\" ng-model=\"confirmpassword\" placeholder=\"Password\" required=\"required\" maxlength=\"256\"/></div><div class=\"input-field\"><label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" ng-model=\"firstname\" placeholder=\"First Name\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" ng-model=\"lastname\" placeholder=\"Last Name\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"company\">Company</label><input type=\"text\" id=\"company\" ng-model=\"company\" placeholder=\"Company\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"title\">Job/Title</label><input type=\"text\" id=\"title\" ng-model=\"title\" placeholder=\"Job/Title\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"country\">Country</label><input type=\"text\" id=\"country\" ng-model=\"country\" placeholder=\"Country\" required=\"required\" maxlength=\"100\"/></div><div class=\"input-field\"><label for=\"state\">State</label><input type=\"text\" id=\"state\" ng-model=\"state\" placeholder=\"State\" maxlength=\"100\"/></div><div class=\"conditions\"><p>By signing up, you agree to our <a href=\"terms_and_conditions\">Terms and Conditions</a>.</p>
</div><div class=\"button-field\"><button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button></div></form></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/help_navigation' , "<dl class=\"help scroll\"><span ng-repeat=\"view in Views\"><dt class=\"vertical-align\"><p>\{\{view.Title}}</p></dt><dd ng-repeat=\"article in view.Articles\"><a href=\"docs/\{\{article.Id}}\" ng-click=\"show_Doc(article.id)\">\{\{article.Title}}</a></dd></span></dl>") 
 
   $templateCache.put('/angular/jade-html/component/navigation/landing_bar' , "<!-- Terms and Conditions Navigation--><nav><a ui-sref=\"home\" class=\"logo\"></a><div class=\"links\"><ul class=\"display-inline\"><li><a ui-sref=\"about\">About</a></li><li><a ui-sref=\"features\">Features</a></li><li><a ui-sref=\"docs\">Docs</a></li><li><a ui-sref=\"sign_up\">Sign Up</a></li><li><a ui-sref=\"login\">Login</a></li></ul></div></nav>") 
 
   $templateCache.put('/angular/jade-html/component/navigation/left_navigation' , "<aside ng-controller=\"User_Navigation_Controller\"><ul><li ng-show=\"show_Loading_Image\"><icon class=\"Loading rotating\"></icon></li><li><a href=\"index\" ng-click=\"open_Query_State()\" title=\"Home\"><icon class=\"Home\"></icon></a></li><li><a href=\"guides\" title=\"Security Guide\"><icon class=\"Curated-Content\"></icon></a></li><li><a ui-sref=\"main\" title=\"Saved Searches\"><icon class=\"Save\"></icon></a></li><li><a ui-sref=\"docs\" title=\"Docs\"><icon class=\"Info\"></icon></a></li><li><a href=\"/angular/guest/logout\" title=\"Logout\"><icon class=\"Logout\"></icon></a></li></ul></aside>") 
 
   $templateCache.put('/angular/jade-html/component/result_saved_article' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><div class=\"article result\"><div class=\"metadata\"><ul><li><br/></li><!--li+filter-icon('Type', result.type)--><!--li+filter-icon('Phase', result.phase)--><!--li+filter-icon('Technology', result.technology)--></ul></div><div class=\"summary\"><a href=\"#\"><h3 id=\"article-headline\">Article Headline</h3></a><p>Article Summary</p><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/result_saved_search_term' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><div class=\"article search-term\"><a href=\"app-keyword-search\"><icon class=\"Search\"></icon><span>Search Term</span></a></div><ul class=\"display-inline\"><li><button title=\"Delete\" class=\"btn-minor icon-Delete\"></button></li><li><button title=\"Share\" class=\"btn-minor icon-Share\"></button></li></ul>") 
 
   $templateCache.put('/angular/jade-html/component/results_delete_share' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><div class=\"section row__label\"><div class=\"label\">Saved Items</div><ul class=\"display-inline\"><li><a href=\"\" class=\"button btn-result icon-Filter\"></a></li><li><button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button></li><li><button title=\"Share results\" class=\"btn-result icon-Share\"></button></li></ul></div>") 
 
   $templateCache.put('/angular/jade-html/component/search_result' , "<div class=\"article search-term\"><a href=\"app-keyword-search\"><icon class=\"Search\"></icon><span>Search Term</span></a></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/article' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><div ng-controller=\"Article_Controller\" ng-show=\"show_Article_Data()\"><div class=\"col-9\"><div class=\"article\"><h1 class=\"article-title\">\{\{article.title}}</h1><div id=\"html\" ng-bind-html=\"article_Html\" class=\"article-content\"></div><br/><br/><br/><div class=\"footer\"><p>TEAM Mentor 4.0, a Security Innovation eKnowledge Product.</p>
<p>© Security Innovation 2007-2015, all rights reserved.</p>
<ul class=\"text-center\"><li><p><a href=\"mailto:support@securityinnovation.com\"><span class=\"icon-Mail\"></span><span class=\"text\">support@securityinnovation.com</span></a></p></li><li class=\"text-center\"><p><a ui-sref=\"terms_and_conditions\"><span class=\"icon-Paperclip\"></span><span class=\"text\">Terms & Conditions</span></a></p></li></ul></div></div></div><div class=\"col-3\"><div class=\"section article-info\"><ul class=\"display-inline\"><li><a class=\"button btn-result\"><span class=\"icon\"><icon class=\"Share\"></icon></span><span class=\"text\">Share</span></a></li></ul><div class=\"section row__label\"><div class=\"label\">Metadata:</div></div><div class=\"section row\"><ul><li><span class=\"icon\"><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></span><span class=\"text\">\{\{article.technology}}</span></li><li><span class=\"icon\"><div id=\"icon-Type\" ng-bind-html=\"icon_Type\"></div></span><span class=\"text\">\{\{article.type}}</span></li><li><span class=\"icon\"><div id=\"icon-Phase\" ng-bind-html=\"icon_Phase\"></div></span><span class=\"text\">\{\{article.phase}}</span></li><!--lispan.icon
  icon.Curated-Content
span.text This article is part of the 
  a(href='guides') Security Guide
--></ul></div><div class=\"section row fixed-bottom\"><div class=\"alert alert-neutral\"><div ng-show=\"showFeedbackBanner()\"><span class=\"text\">Have a comment about this article?<a id=\"tm-support-email\" href=\"\{\{githubContentUrl}}/new?title=\{\{article.title}} &amp;body=\{\{articleUrl}}\" target=\"_blank\">     Open an issue here.</a></span></div><div ng-show=\"showGeneralFeedback()\"><span class=\"text\">Have a comment about this article? Send our team<a href=\"mailto:support@securityinnovation.com\"> an email.</a></span></div></div></div></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/article_box' , "<div ng-controller=\"Article_Box_Controller\" class=\"result\"><div class=\"metadata\"><ul><li><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></li><li><div id=\"icon-technology\" ng-bind-html=\"icon_Type\"></div></li><li><div id=\"icon-technology\" ng-bind-html=\"icon_Phase\"></div></li></ul></div><div class=\"summary\"><a ng-href=\"\{\{article.url}}\" id=\"\{\{article.id}}\"><h4 id=\"article-headline\">\{\{article.title}}</h4></a><p>\{\{article.summary}} ...</p></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/articles' , "<div ng-controller=\"Articles_Controller\"><div class=\"section row\"><article-box ng-repeat=\"article in articles\" class=\"article-box\"></article-box></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/breadcrumbs' , "<div ng-controller=\"Breadcrumbs_Controller\" ng-show=\"visible\"><dl ng-show=\"breadcrumbs\" class=\"breadcrumbs\"><dd ng-repeat=\"breadcrumb in breadcrumbs\" class=\"active\"><a ng-href=\"#\" ng-click=\"load_Query(breadcrumb)\">\{\{breadcrumb.title}}</a></dd></dl></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/customer_search_bar' , "<div ng-controller=\"Search_Bar_Controller\" class=\"search customer\"><form ng-submit=\"submit()\"><ul class=\"display-inline\"><li class=\"half-width\"><div class=\"logo\"></div></li><li class=\"half-width\"><div class=\"logo\"></div></li></ul><select ng-model=\"selected_Technology\" ng-change=\"select_Technology(selected_Technology)\" ng-options=\"technology as technology.title for technology in technologies\"></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"\{\{searchPlaceholder}}\" ng-change=\"get_Words(text)\" ng-focus=\"with_Focus(true)\" ng-blur=\"with_Focus(false)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" class=\"search-input\"/><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><icon class=\"Search\"></icon></button></form></div><div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/filters' , "<div ng-controller=\"Filters_Controller\" ng-show=\"visible\"><div ng-show=\"view_Filters\" class=\"section row\"><dl><dt><p>Filter by</p></dt><div class=\"scroll\"><div id=\"filters\" ng-repeat=\"(title,filter) in filters\"><dt class=\"header\"><span class=\"label no-underline\"><span class=\"text\"> \{\{title}}</span></span><span class=\"sub-nav__icon\"><icon class=\"Arrow-Down\"></icon></span></dt><div id=\"results\"><div ng-repeat=\"result in filter\"><dd ng-show=\"result.size &gt; 0\"><a href=\"#\" ng-click=\"apply_Filter(result.id, result.title, title)\"><span><span id=\"filter-icon\" ng-bind-html=\"result.icon\"></span><span class=\"text\">\{\{result.title}}</span></span><span class=\"badge\">\{\{result.size}}</span></a></dd></div></div></div></div></dl></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/filters_active' , "<div ng-controller=\"Filters_Active_Controller\" class=\"section row\"><div ng-repeat=\"(key, value) in current_Filters\" class=\"active-filter\"><ul class=\"display-inline\"><li><span id=\"path1\" ng-bind-html=\"value.filter_Icon\"></span></li><li><span class=\"text\">\{\{value.filter_Title}}</span></li><li><span class=\"close\"><a href=\"#\" ng-click=\"clear_Filter(key)\"><span class=\"icon-Close\"><span class=\"path1\"></span></span></a></span></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/found_issue' , "<div ng-show=\"view_Filters\"><div class=\"found-issue alert-ok\"><div><span class=\"alert-text\">Found an issue? <a href=\"#\">Contact</a> our team.</span></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/loading_bar' , "<div class=\"loading-bar\"></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/modal' , "<div class=\"modal\"><div class=\"navbar\"><div class=\"label no-underline\">Log Out</div><ul><li><icon class=\"Close\"></icon></li></ul></div><div class=\"content\"><div class=\"col-10\"><h4>Are you sure you want to leave?</h4></div><div class=\"col-2\"><ul class=\"display-inline\"><li><a class=\"button btn-editor\"><icon class=\"Tick\"></icon></a></li><li><a class=\"button btn-editor cancel\"><icon class=\"Close\"></icon></a></li></ul></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/pagination' , "<span ng-controller=\"Pagination_Controller\"><div ng-show=\"model.pages\" class=\"section row\"><div ng-show=\"model.pages.size() &gt;1\" class=\"pagination\"><div class=\"previous\"><a href=\"#\" ng-click=\"previous_Page()\"><span class=\"icon-Arrow-Left\"></span><span class=\"text\">back</span></a></div><div id=\"current_Page\" class=\"number\"><select ng-model=\"model.page\" ng-change=\"set_Page()\" ng-options=\"page for page in model.pages\"></select></div><div class=\"next\"><a href=\"#\" ng-click=\"next_Page()\"><span class=\"icon-Arrow-Right\"></span><span class=\"text\">next</span></a></div></div><div ng-show=\"ShowTopButton()\" class=\"back-to-top\"><a href=\"#\" ng-click=\"goToTop()\"><span class=\"icon-Arrow-Up\"></span><span class=\"text\">back to top</span></a></div><div id=\"page_Splits\" ng-show=\"model.pages.size() &gt;1\" class=\"number-of-results\"><form><input type=\"radio\" ng-model=\"model.page_Split\" name=\"results-per-page\" id=\"four\" value=\"4\" ng-change=\"set_Page_Split(value)\"/><label for=\"four\">4</label><input type=\"radio\" ng-model=\"model.page_Split\" name=\"results-per-page\" id=\"ten\" checked=\"checked\" value=\"10\" ng-change=\"set_Page_Split(value)\"/><label for=\"ten\">10</label><input type=\"radio\" ng-model=\"model.page_Split\" name=\"results-per-page\" id=\"twenty\" value=\"20\" ng-change=\"set_Page_Split(value)\"/><label for=\"twenty\">20</label></form><ul><li><span class=\"text\">results per page</span></li></ul><!--select(ng-model='model.page_Split', ng-change='set_Page_Split()', ng-options='page_Split for page_Split in model.page_Splits')--></div></div></span>") 
 
   $templateCache.put('/angular/jade-html/component/user/queries' , "<div class=\"display-mobile\"><div ng-show=\"view_Filters\"><div class=\"found-issue alert-ok\"><div><span class=\"alert-text\">Found an issue? <a href=\"#\">Contact</a> our team.</span></div></div></div><div ng-controller=\"Breadcrumbs_Controller\" ng-show=\"visible\"><dl ng-show=\"breadcrumbs\" class=\"breadcrumbs\"><dd ng-repeat=\"breadcrumb in breadcrumbs\" class=\"active\"><a ng-href=\"#\" ng-click=\"load_Query(breadcrumb)\">\{\{breadcrumb.title}}</a></dd></dl></div></div><!--div(ng-controller='Queries_Controller' ng-show='visible')dl
  dt
    p#query_title \{\{title}}
    //span.sub-nav__icon
      a(href='#' ng-click=\"show_Previous_Query()\")
        icon.Arrow-Up
  ul.scroll
    li
      dt
        p Level 2 Directory
    li
      dt
        p Level 3 Directory
      div(ng-repeat=\"container in containers\")
        a(href='#', id='\{\{container.id}}', ng-click='load_Query(container.id)' ng-show='container.size >0')
          dd
            span.text \{\{container.title}}
            span.badge \{\{container.size}}
--><div id=\"queries\" ng-controller=\"Queries_Controller\" ng-show=\"visible\"><dl><dt><p id=\"query_title\">\{\{title}}</p><!--span.sub-nav__icona(href='#' ng-click=\"show_Previous_Query()\")
  icon.Arrow-Up--></dt><div id=\"containers\" class=\"scroll\"><div ng-repeat=\"container in containers\"><a href=\"#\" id=\"\{\{container.id}}\" ng-click=\"load_Query(container.id)\" ng-show=\"container.size &gt;0\"><dd><span class=\"text\">\{\{container.title}}</span><span class=\"badge\">\{\{container.size}}</span></dd></a></div></div></dl></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/queries_history' , "<div ng-controller=\"Queries_History_Controller\"><nav><ul class=\"display-inline\"><li ng-repeat=\"(key, value) in history\"><a ng-href=\"#\" ng-click=\"load_Query(key)\">\{\{value}}</a></li></ul></nav></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/recommendations' , "<div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/results' , "<div ng-controller=\"Results_Controller\" ng-show=\"visible\"><section ng-hide=\"results_Size\" class=\"row__label\"><div id=\"noResultsTitle\" class=\"label\">Query has no results</div></section><section ng-show=\"results_Size\" class=\"row__label\"><div id=\"resultsTitle\" class=\"label\"><div ng-controller=\"Pagination_Controller\"><span>\{\{pagginMessage}}</span></div></div><ul class=\"display-inline text-right\"><li><a id=\"view_Filters\" href=\"#\" title=\"View Filters\" ng-click=\"toggle_Filters()\" class=\"button btn-result\"><div class=\"icon-Filter\"></div></a></li></ul></section></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/search_bar' , "<div ng-controller=\"Search_Bar_Controller\" class=\"search\"><form ng-submit=\"submit()\"><ul><li><a href=\"/\"><div class=\"logo\"></div></a></li></ul><div><button class=\"btn-search\"><icon class=\"Filter\"></icon></button><ul class=\"technology\"><li>Technology</li><li>Website</li><li>Java</li><li>Scala</li></ul><select ng-model=\"selected_Technology\" ng-change=\"select_Technology(selected_Technology)\" ng-options=\"technology as technology.title for technology in technologies\"></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"\{\{searchPlaceholder}}\" ng-change=\"get_Words(text)\" ng-focus=\"with_Focus(true)\" ng-blur=\"with_Focus(false)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" class=\"search-input\"/><button id=\"search-button\" type=\"submit\" class=\"btn-search\"><icon class=\"Search\"></icon></button></div></form></div><div ng-controller=\"Recommendations_Controller\"><ul id=\"recommendations\" ng-show=\"words.length &gt; 0\"><li ng-repeat=\"word in words\" value=\"word\" ng-click=\"select_Word(word)\">\{\{word}}</li></ul></div>") 
 
   $templateCache.put('/angular/jade-html/component/user/start_view' , "<div ng-controller=\"Start_View_Controller\"><a name=\"popular_Search_Terms\"></a><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Popular Search Terms</div></div><div class=\"section row\"><div ng-repeat=\"search in top_Search\" class=\"search-term\"><span class=\"icon\"><icon class=\"Star\"></icon></span><span class=\"link\"><a href=\"\{\{search.url}}\"><span>\{\{search.title}}</span></a></span></div></div></div><a name=\"recently_Viewed_Articles\"></a><div class=\"section row\"><div class=\"section row__label\"><div ng-show=\"recent_Articles.length &gt; 0\" class=\"label\">Recently Viewed Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in recent_Articles\" class=\"article-box\"></article-box></div></div><a name=\"top_Articles\"></a><div class=\"section row\"><div class=\"section row__label\"><div class=\"label\">Top Articles</div></div><div class=\"section row\"><article-box ng-repeat=\"article in top_Articles\" class=\"article-box article-box\"></article-box></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/component/user_panel' , "<div class=\"section row__label\"><div class=\"label\">@username</div></div><div class=\"section row\"><form><input type=\"text\" name=\"name\" value=\"First name, Last name\"/><input type=\"text\" name=\"work\" value=\"Position, Company\"/><input type=\"email\" name=\"email\" value=\"Email\"/><button type=\"submit\"><icon class=\"Tick\"></icon></button></form></div>") 
 
 

   # ------Views--------

   $templateCache.put('/angular/jade-html/views/article_editor' , "Moved Temporarily. Redirecting to /error") 
 
   $templateCache.put('/angular/jade-html/views/article_view_editor_option' , "Moved Temporarily. Redirecting to /error") 
 
   $templateCache.put('/angular/jade-html/views/docs' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div ng-controller=\"Help_Controller\" class=\"main help\"><div class=\"col-3 application-scroll\"><help-navigation></help-navigation></div><div class=\"col-9 application-scroll\"><div id=\"help\" class=\"section article\"><h1 id=\"help-title\">\{\{title}}</h1><help-content ng-bind-html=\"content\"></help-content><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/guest/about' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div class=\"section about\"><h3 id=\"an-interactive-application-security-library-with-thousands-of-code-samples-and-professional-guidance-when-you-need-it\">An interactive Application Security library with thousands of code samples and professional guidance when you need it</h3>
</div><div class=\"section about-us\"><h4 id=\"team-mentor-was-created-by-developers-for-developers-using-secure-coding-standards-code-snippets-and-checklists-built-from-10-years-of-targeted-security-assessments-for-fortune-500-organizations-\">TEAM Mentor was created by developers for developers using secure coding standards, code snippets and checklists built from 10+ years of targeted security assessments for Fortune 500 organizations.</h4>
<p>It contains thousands of articles with dynamic content across multiple development platforms including .NET, Java, C/C++, PHP, Android and iOS. TEAM Mentor is the In-Practice companion to our <a href=\"https://www.securityinnovation.com/training/application-security/computer-based/\">TEAM Professor eLearning courses</a>, extending developers’ knowledge in combination with training.</p>
<p>TEAM Mentor integrates with static analysis tools, such as Checkmarx and Fortify&trade;, helping teams make more sense of scan results and make critical decisions to fix software vulnerabilities.</p>
</div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2>
<a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/guest/features' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div class=\"section features\"><h2 id=\"team-mentor-provides-intelligence-to-fix-vulnerabilities-and-comply\">TEAM Mentor provides intelligence to fix vulnerabilities and comply</h2>
<div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"delivers-compliance\"></div></div><div class=\"col-9\"><p>Delivers compliance-specific secure coding guidance for PCI-DSS, OWASP Top 10, CWE and other popular frameworks.</p>
</div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"integrates\"></div></div><div class=\"col-9\"><p>Integrates with multiple static analysis tools and developer environments (IDE’s) to map prescriptive coding guidance to scan results to fix vulnerabilities.</p>
</div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"cross-references\"></div></div><div class=\"col-9\"><p>Stores and cross-references your security policies with out-of-the-box secure coding checklists and examples.</p>
</div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"provides-guidance\"></div></div><div class=\"col-9\"><p>Provides guidance to assist developers in reducing security vulnerabilities in software applications.</p>
</div></div></div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2>
<a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/guest/home' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div class=\"section usp\"><h2 id=\"instant-resources-that-bridge-the-gap-between-developer-questions-and-technical-solutions\">Instant resources that bridge the gap between developer questions and technical solutions</h2>
<a ui-sref=\"sign_up\" class=\"button\">Start your free trial today</a></div><div class=\"section reasons\"><h2 id=\"with-team-mentor-you-can-\">With TEAM Mentor, you can...</h2>
<div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"fix-vulnerabilities\"></div></div><div class=\"col-9\"><p>Fix vulnerabilities quicker than ever before with TEAM Mentor&#39;s seamless integration into a developer&#39;s IDE and daily workflow.</p>
</div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"reduce-vulnerabilities\"></div></div><div class=\"col-9\"><p>Reduce the number of vulnerabilities over time as developers learn about each vulnerability at the time it is identified.</p>
</div></div><div class=\"section row\"><div class=\"col-3 text-center\"><div class=\"improve-process\"></div></div><div class=\"col-9\"><p>Expand the development team&#39;s knowledge and improve processes with access to thousands of specific remediation tactics, including the host organization&#39;s security policies and coding best practices.</p>
</div></div></div><div class=\"section clients\"><h3 id=\"our-clients-love-us-and-we-think-you-will-too-\">Our clients love us (and we think you will too!)</h3>
<img src=\"/assets/clients/flare-logos.jpg\"/></div><div class=\"section call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2>
<a ui-sref=\"sign_up\" class=\"button\">See for yourself</a></div><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/guest/login' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label
  .label Forgot your password?
.section.row
  form#forgot-pwd-form(action='#')
    .section.row
      .col-8.input-field
        +email-input
      .col-4.button-field
        br
        +get-password-button
--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div class=\"section row\"><div class=\"col-7\"><login-form></login-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>
</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>
</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>
</td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/guest/pwd_forgot' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label
  .label Forgot your password?
.section.row
  form#forgot-pwd-form(action='#')
    .section.row
      .col-8.input-field
        +email-input
      .col-4.button-field
        br
        +get-password-button
--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div class=\"section row\"><div class=\"col-7\"><pwd-forgot-form></pwd-forgot-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>
</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>
</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>
</td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/guest/pwd_reset' , "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label
  .label Forgot your password?
.section.row
  form#forgot-pwd-form(action='#')
    .section.row
      .col-8.input-field
        +email-input
      .col-4.button-field
        br
        +get-password-button
--><!--mixin pwd-reset-form.section.row__label
  .label Reset your password
.section.row
  form#password-reset-form(role='form' method='post' action='/flare/user/password-reset')
    .section.row
      .col-6.input-field
        +password-input
      .col-6.input-field
        +confirm-password-input
      .col-4.button-field
        br
        +reset-pwd-button
--><div class=\"section row\"><div class=\"col-4\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>
</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>
</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>
</td></tr></table></div></div></div><div class=\"col-8\"><div class=\"getting-started\"><pwd-reset-form></pwd-reset-form></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/guest/sign_up' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><!--mixin forgot-pwd-form.section.row__label
  .label Forgot your password?
.section.row
  form#forgot-pwd-form(action='#')
    .section.row
      .col-8.input-field
        +email-input
      .col-4.button-field
        br
        +get-password-button
--><div class=\"section row\"><div class=\"col-7\"><sign-up-form></sign-up-form></div><div class=\"col-5\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>
</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>
</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>
</td></tr></table></div></div></div></div><br/><br/><div class=\"footer\"><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\"><icon class=\"Mail\"></icon></a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\"><icon class=\"Twitter\"></icon></a></li><li><a id=\"terms-and-conditions\" ui-sref=\"terms_and_conditions\"><icon class=\"Paperclip\"></icon></a></li></ul></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/new_user_onboard' , "Moved Temporarily. Redirecting to /error") 
 
   $templateCache.put('/angular/jade-html/views/pwd_sent' , "<!--extends ../_to_be_wired_in/_layouts/page_logged_out--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><!--mixin sign-up-form--><!--  .section.row__label--><!--    .label Sign Up--><!--  .section.row--><!--    form#sign-up-form(action='/flare/user/sign-up')--><!--      .input-field--><!--        +username-input--><!--      .input-field--><!--        +email-input--><!--      .input-field--><!--        +password-input--><!--      .input-field--><!--        +confirm-password-input--><!--      .button-field--><!--        +sign-up-button--><!--      .conditions--><!--          include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><!--mixin forgot-pwd-form.section.row__label
  .label Forgot your password?
.section.row
  form#forgot-pwd-form(action='#')
    .section.row
      .col-8.input-field
        +email-input
      .col-4.button-field
        br
        +get-password-button
--><!--mixin pwd-reset-form.section.row__label
  .label Reset your password
.section.row
  form#password-reset-form(role='form' method='post' action='/flare/user/password-reset')
    .section.row
      .col-6.input-field
        +password-input
      .col-6.input-field
        +confirm-password-input
      .col-4.button-field
        br
        +reset-pwd-button
--><!--mixin sign-up-form-validation--><!--  .section.row__label--><!--    .label Sign Up--><!--  .section.row--><!--    form#sign-up-form(action='/flare/user/sign-up')--><!--      .input-field--><!--        +username-input--><!--        p.validation Your username should only contain letters and numbers.--><!--      .input-field--><!--        +email-input--><!--        p.validation We'll email you a confirmation.--><!--      .input-field--><!--        +password-input--><!--        p.validation Your password should be at least 8 characters long. It should have at least one of each of the following: uppercase and lowercase letters, number and special character.--><!--      .input-field--><!--        +confirm-password-input--><!--        p.validation Type your password again.--><!--      .button-field--><!--        +sign-up-button--><!--      .conditions--><!--          include:marked ../../TM_Static/content/getting-started/agree-to-toc.md--><div class=\"section row\"><div class=\"col-4\"><div class=\"section tm-summary\"><div class=\"section row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></div><div class=\"section row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>
</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>
</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>
</td></tr></table></div></div></div><div class=\"col-8\"><section class=\"getting-started\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div><login-form></login-form></section></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/terms_and_conditions' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Terms and Conditions Navigation--><div class=\"main\"><div class=\"col-3 application-scroll\"><dl><dt><p>Terms & Conditions</p></dt><div class=\"scroll\"><dd><a href=\"#article-i-definitions\">Article I - Definitions</a></dd><dd><a href=\"#article-ii-deliverables\">Article II - Deliverables</a></dd><dd><a href=\"#article-iii-license-grant\">Article III - License Grant</a></dd><dd><a href=\"#article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</a></dd><dd><a href=\"#article-v-trademarks\">Article V - Trademarks</a></dd><dd><a href=\"#article-vi-support\">Article VI - Support</a></dd><dd><a href=\"#article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</a></dd><dd><a href=\"#article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</a></dd><dd><a href=\"#article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</a></dd><dd><a href=\"#article-x-assignment\">Article X - Assignment</a></dd><dd><a href=\"#article-xi-confidentiality\">Article XI - Confidentiality</a></dd><dd><a href=\"#article-xii-warranties\">Article XII - Warranties</a></dd><dd><a href=\"#article-xiii-indemnities\">Article XIII - Indemnities</a></dd><dd><a href=\"#article-xiv-limitations\">Article XIV - Limitations</a></dd><dd><a href=\"#article-xv-term-of-agreement\">Article XV - Term of Agreement</a></dd><dd><a href=\"#article-xvi-termination\">Article XVI - Termination</a></dd><dd><a href=\"#article-xvii-effect-of-termination\">Article XVII - Effect of Termination</a></dd><dd><a href=\"#article-xviii-general-provisions\">Article XVIII - General Provisions</a></dd></div></dl></div><div class=\"col-9 application-scroll\"><div class=\"article\"><h2 id=\"software-product-license-agreement\">Software Product License Agreement</h2>
<h3 id=\"important-information-please-read-carefully\">Important Information - Please Read Carefully</h3>
<p>This Security Innovation (“Security Innovation”) software or software application contains computer programs and other proprietary material and information, the use of which is subject to and expressly conditioned upon acceptance of this License (the “License”).</p>
<p>This License is a legally binding document between you (meaning the individual person or the entity that the individual represents that has obtained the Software for its internal productive use and not for outright resale) (the “Customer”) and Security Innovation.  Unless agrees otherwise in writing, this License governs Customer&#39;s use of the software or software application.</p>
<p>By proceeding with the user registration, installation, downloading, use or reproduction of this software or software application, or authorizing any other person to do so, you are representing to Security Innovation that you are (i) authorized to bind the Customer; and (ii) agreeing on behalf of the Customer that the terms of this License shall govern your relationship with Security Innovation with regard to the subject matter in this License and are waiving any rights, to the maximum extent permitted by applicable law, to any claim anywhere in the world concerning the enforceability or validity of this License.</p>
<p>If you do not have authority to agree to the terms of this License on behalf of the Customer, or do not accept the terms of this License on behalf of the Customer, immediately cease any further attempt to install, download or use this software or software application for any purpose, and remove any partial or full copies made thereof.</p>
<h4 id=\"article-i-definitions\">Article I - Definitions</h4>
<p>For the purposes of this Agreement, the following words and phrases shall have the following meanings:</p>
<p>1.1 “Affiliate” means any corporation, company, partnership, joint venture, firm and/or entity which controls, is controlled by or is under common control with Licensee.</p>
<p>1.2    “Confidential Information” means all materials, trade secrets, or other information regarding a party’s technology, products, business information, or objectives which is designated as confidential in writing by the disclosing party, whether by letter or by the use of an appropriate stamp or legend, prior to or at the time any such material, trade secret, or other information is disclosed by the disclosing party to the other party. Notwithstanding the foregoing to the contrary: (a) materials, trade secrets, or other information which is orally, electronically or visually disclosed by a party, or is disclosed in writing without an appropriate letter, stamp, or legend, shall constitute Confidential Information if the disclosing party, within thirty (30) days after such disclosure, delivers to the other party a written document or document describing the materials, trade secrets, or other information and referencing the place and date of such oral, electronic, visual or written disclosure and the names of the person or persons to whom such disclosure was made; and (b) information obtained by either party while visiting the other party’s facility, however obtained, shall constitute Confidential Information of the other Party.</p>
<p>1.3    “Deliverables” means the items listed in an Order to be delivered by Security Innovation to Licensee pursuant to Article II of this Agreement.</p>
<p>1.4    &quot;End User&quot; means a direct employee or affiliate employee of Licensee who consumes paid for Licensed Security Innovation Product, or an individual who purchases and consumes Licensed Security Innovation Product, for use within the bounds of this agreement.</p>
<p>1.5     “Licensee” means the organization or individual with a paid up and active subscription to the Security Innovation Product.</p>
<p>1.6    &quot;Security Innovation Product&quot; means Security Innovation&#39;s proprietary multimedia training and reference systems and includes Security Innovation proprietary content and the software delivery system including, but not limited to: Safelight, PCI Essentials, TEAM Professor, TEAM Mentor and TEAM Academy.</p>
<p>1.7    “Internal” means within the Licensee organization and not part of a public or external event where the Security Innovation Product is used to train individuals who are not End-Users.</p>
<p>1.8    “Permitted use” means the following application usage activities:</p>
<ul>
<li>(a) Internal training of Licensee employees</li>
<li>(b) Internal training of Licensee affiliates</li>
<li>(c) For training a Licensee</li>
</ul>
<p>1.9    “On-Site” means Security Innovation Product is installed at the Licensee’s facilities in a private Learning Management System (LMS).</p>
<p>1.10    “Hosted” means Security Innovation Product and student data is held on and delivered from the Security Innovation secure online LMS.</p>
<p>1.11    “Subscription” means an annually renewable license for a specific number of End-Users and specified Content, Hosted or On-Site, for a fixed fee. A subscription includes maintenance and support, but not installation or customization costs, as part of the annual fixed fee.</p>
<p>1.12    “Enterprise” means an annually renewable license for an unlimited number of End-Users and specified Content, Hosted or On-Site, within an organization for an annual fixed-fee, not including installation or customization costs.</p>
<p>1.13    “Order” means a purchase order, signed sales proposal, e-Commerce transaction, or other ordering document issued by Licensee or individual to Security Innovation, its distributors, resellers or other agents, and describing the quantity and type of Security Innovation Product.</p>
<p>1.14    “Effective Date” means the date the Order takes place.</p>
<h4 id=\"article-ii-deliverables\">Article II - Deliverables</h4>
<h5 id=\"2-1-delivery\">2.1    Delivery</h5>
<p>Within 30 days following the later of the Effective Date and receipt of any agreed upon initial payments by Licensee pursuant to Section 7.1, Security Innovation shall provide the Deliverables to Licensee.</p>
<h4 id=\"article-iii-license-grant\">Article III - License Grant</h4>
<h5 id=\"3-1-licenses\">3.1    Licenses</h5>
<p>Subject to the terms and conditions of this Agreement, Security Innovation hereby grants to the Licensee a worldwide, nonexclusive, non-transferable, license:</p>
<ul>
<li>(a) To use the Security Innovation Product internally on Licensee’s LMS to train End Users or;</li>
<li>(b) To use the software internally via Security Innovation’s secure online LMS to train End Users or;</li>
<li>(c) To use the Security Innovation Product personally</li>
</ul>
<h5 id=\"3-2-no-other-rights\">3.2    No Other Rights</h5>
<p>Licensee hereby acknowledges that it shall have no right to sell, convey, transfer, license, sublicense, modify, or otherwise dispose of Security Innovation Product, except as provided herein.  Licensee further acknowledges that its rights are limited to those of a licensee only, and that:</p>
<ul>
<li>(i) Security Innovation retains all title to and intellectual property rights in the Security Innovation Product;</li>
<li>(ii) nothing herein shall be construed as granting Licensee any right, title and interest other than as specifically set forth herein; and</li>
<li>(iii) nothing herein shall be construed as granting any group, division or Affiliate of Licensee any right, title and interest or license to use Security Innovation Product.</li>
</ul>
<h5 id=\"3-3-license-limitations\">3.3    License Limitations</h5>
<p>The licenses granted in Section 3.1 are subject to the following additional limitations:</p>
<ul>
<li>(a) Licensee may not in any way sell, lease, rent, license, sublicense or otherwise distribute the Security Innovation Product or any part thereof or the right to use any part of the Security Innovation Product to any person or entity</li>
<li>(b) Without Security Innovation’s prior written consent, Licensee shall not modify, translate, reverse engineer, decompile, disassemble or recreate the Security Innovation Product or any part thereof, and shall prohibit End Users from doing the same.</li>
<li>(c) The licenses granted herein do not permit Licensee to provide services to third parties utilizing Licensee Products or the Security Innovation Product.</li>
</ul>
<h5 id=\"3-4-third-party-agents\">3.4    Third Party Agents</h5>
<p>Under the License granted in this Article III (License Grant), Licensee may permit its Third Party Agents to be treated as an End User and use the Software provided that Licensee will be fully responsible for its Third Party Agents’ compliance with terms and conditions of this Agreement and any breach of this Agreement by a Third Party Agent shall be deemed to be a breach by Licensee.</p>
<h4 id=\"article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</h4>
<h5 id=\"4-1-ownership\">4.1    Ownership</h5>
<p>With respect to the intellectual property of Security Innovation and Licensee relating to this Agreement:</p>
<ul>
<li>(a) any intellectual property developed by Security Innovation or Licensee prior to the Effective Date shall remain the intellectual property of that party.</li>
<li>(b) any intellectual property that is developed solely by Security Innovation, and relevant to the scope of this Agreement (including, without limitation, the Security Innovation Product) shall remain the intellectual property of Security Innovation.</li>
</ul>
<h4 id=\"article-v-trademarks\">Article V - Trademarks</h4>
<h5 id=\"5-1-use-of-security-innovation-trademarks\">5.1 Use of Security Innovation Trademarks</h5>
<p>Security Innovation hereby grants to Licensee a non-exclusive, limited license to use the applicable Security Innovation trademarks and logos (“Trademarks”) solely as permitted in this Agreement.  Licensee understands and agrees that the use of any Trademark in connection with this Agreement shall not create any right, title or interest, in or to the use of the Trademark and that all such use and goodwill associated with the Trademark will inure to the benefit of Security Innovation.  Licensee agrees not to register or attempt to register any Security Innovation Trademarks. All trademarks, service marks, trade names, logos, or other words or symbols identifying or associated with the Software or the business of Security Innovation (“Marks”) remain the exclusive property of Security Innovation and its Licensors. Licensee will not do anything to impair those proprietary rights or seek to acquire or register any rights in the Marks or use any trademarks, service marks, trade names, logos or other words or symbols that are confusingly similar to the Marks in any language.</p>
<h4 id=\"article-vi-support\">Article VI - Support</h4>
<h5 id=\"6-1-technical-support-and-maintenance\">6.1    Technical Support and Maintenance</h5>
<p>Security Innovation shall provide support and maintenance services specified in the Security Innovation Service Level Agreement (SLA).</p>
<h4 id=\"article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</h4>
<p>In consideration of the licenses granted by Security Innovation and the Support Services provided by Security Innovation to Licensee in this Agreement, Licensee agrees to pay to Security Innovation a license fee as follows:</p>
<h5 id=\"7-1-license-fee\">7.1    License Fee</h5>
<p>In consideration of Security Innovation&#39;s delivery of the Deliverables, Licensee agrees to pay to Security Innovation a license fee as defined in the Order.</p>
<h5 id=\"7-2-taxes\">7.2    Taxes</h5>
<p>Licensee will pay all government taxes, duties and tariffs not based on either Security Innovation&#39;s net income from all sources or Security Innovation&#39;s aggregate net worth, including, but not limited to, sales, use, transfer, value-added, privilege, property taxes, import and export duties or tariffs, or amounts levied in lieu thereof, based on charges payable under this Agreement whether such taxes and duties are now or hereafter imposed under the authority of any federal, state, local or other taxing jurisdiction.  Licensee will comply with all requirements of the laws imposing such taxes and duties, including, without limitation, paying any interest or penalties relating to such taxes and duties.  If applicable, Licensee will provide Security Innovation with a Certificate of Exemption issued pursuant to such laws.</p>
<h4 id=\"article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</h4>
<h5 id=\"8-1-records\">8.1    Records</h5>
<p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, Licensee shall keep all records of account as are necessary to demonstrate compliance with its obligations under Article VIII for a period of three years from the due date for the payment of such sums as are payable in accordance with Article VIII (the “Audit period.”).</p>
<h5 id=\"8-2-reports\">8.2    Reports</h5>
<p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, within thirty (30) days after the last business day of each calendar quarter, Licensee shall provide Security Innovation with a written user count report should the user count exceed the count purchased by Licensee. Such report, at a minimum, shall contain information detailing the number of users and the number of courses consumed.</p>
<h5 id=\"8-3-audit-rights\">8.3    Audit Rights</h5>
<p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, to assure compliance with the payment and reporting requirements of this Agreement, Security Innovation or an independent auditor of its choosing may examine, inspect and audit the applicable records of Licensee and its Affiliates from time to time, but no more frequently than twice per year.  In the event any such audit of Licensee’s records indicates an underpayment of an amount equal to or greater than five percent (5%) of any amounts due hereunder, Licensee shall promptly reimburse Security Innovation for the costs of such audit.  Licensee and its Affiliates shall also immediately pay any underpayment in the amounts due to Security Innovation ascertained from such audit.  The provisions of this Section shall survive expiration or termination of this Agreement.</p>
<h4 id=\"article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</h4>
<h5 id=\"9-1-non-electronic-notices\">9.1    Non-Electronic Notices</h5>
<p>Any notice or other non-electronic communication pursuant to this Agreement shall be sent to such party by overnight courier, or regular mail, addressed to the address below or as it shall designate by written notice given to the other party. Any such communication shall be effective upon receipt by the party to whom it is addressed.</p>
<p>Notices to Security Innovation shall be addressed to:</p>
<pre><code>SECURITY INNOVATION, Inc.
187 Ballardvale St, Suite A202
Wilmington, MA  01887 USA
Attn: Ombudsman
</code></pre><h5 id=\"9-2-electronic-notices\">9.2    Electronic Notices</h5>
<p>Any notice or electronic communication pursuant to this agreement shall be sent containing an appropriate and correctly attached digital certificate identifying the sender in non-repudiable terms to:</p>
<pre><code>ombudsman@securityinnovation.com
</code></pre><h4 id=\"article-x-assignment\">Article X - Assignment</h4>
<h5 id=\"10-1-assignment\">10.1    Assignment</h5>
<p>This Agreement and the license contained herein are personal to Licensee and may not be assigned or transferred by Licensee, without the prior written consent of Security Innovation.  For purposes hereof, an “assignment” shall include any change in control of Licensee whereby another person or entity acquires 50% or greater ownership of Licensee.  For the avoidance of doubt, reassignment assumes changes to the relevant user data used to identify students, the changing of which must be managed by Security Innovation so as to not interrupt service.</p>
<h4 id=\"article-xi-confidentiality\">Article XI - Confidentiality</h4>
<h5 id=\"11-1-treatment-of-confidential-information\">11.1    Treatment of Confidential Information</h5>
<p>Each party hereto shall maintain the Confidential Information of the other party in confidence, and shall not disclose, divulge, or otherwise communicate such Confidential Information, including but not limited to the terms of this Agreement, to others, or use it for any purpose, except pursuant to, and in order to carry out, the terms and objectives of this Agreement or the written consent of the other party. Each party hereby agrees to exercise every reasonable precaution to prevent and restrain the unauthorized disclosure of such Confidential Information by any of its directors, officers, employees, consultants, subcontractors, licensees, or agents.</p>
<h5 id=\"11-2-release-from-restrictions\">11.2    Release from Restrictions</h5>
<p>The provisions of Section 11.1 shall not apply to Confidential Information disclosed hereunder which;</p>
<ul>
<li>(a) was known or used by the receiving party prior to its date of disclosure to the receiving party; or</li>
<li>(b) either before or after the date of disclosure to the receiving party is lawfully disclosed to the receiving party by sources rightfully in possession of such Confidential Information other than the disclosing party; or</li>
<li>(c) either before or after the date of disclosure to the receiving party, becomes published or generally known to the public, through no fault of the receiving party, its Affiliates or sub-licensees; or</li>
<li>(d) is required to be disclosed by the receiving party to comply with applicable laws or applicable rules of any securities exchange on which the receiving party’s securities are traded, to defend or prosecute litigation, or to comply with governmental regulations, provided however that the receiving party provides prior written notice of such disclosure to the other party and takes reasonable and lawful actions to avoid and/or minimize the degree of such disclosure.</li>
</ul>
<h4 id=\"article-xii-warranties\">Article XII - Warranties</h4>
<h5 id=\"12-1-representations-and-warranties-of-security-innovation\">12.1    Representations and Warranties of Security Innovation</h5>
<ul>
<li>(a) Security Innovation represents and warrants to Licensee that all corporate action on the part of Security Innovation, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Security Innovation hereunder has been taken and this Agreement constitutes the legal and binding obligation of Security Innovation, enforceable against Security Innovation in accordance with its terms.</li>
<li>(b) Security Innovation further represents and warrants to Licensee that:  (i) it has sufficient right, title and interest in the Security Innovation Product to enter into this Agreement; and (ii) the Security Innovation Product is the original work of Security Innovation and its licensors and was developed without unauthorized access to or knowledge of any third party confidential materials.</li>
<li>(c) THE SECURITY INNOVATION PRODUCT AND THE DELIVERABLES ARE PROVIDED AS IS.  SECURITY INNOVATION DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS OR IMPLIED WITH RESPECT TO THE SECURITY INNOVATION PRODUCT OR THE DELIVERABLES.</li>
</ul>
<h5 id=\"12-2-representations-and-warranties-of-licensee\">12.2    Representations and Warranties of Licensee</h5>
<p>Licensee represents and warrants to Security Innovation that all corporate action on the part of Licensee, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Licensee hereunder has been taken and this Agreement constitutes the legal and binding obligation of Licensee, enforceable against Licensee in accordance with its terms. The execution of this Agreement and the performance of the transactions contemplated by this Agreement by Licensee will not conflict with or result in a breach of any of the terms, conditions or provisions of, or constitute a default under, or require a consent under its Certificate of Incorporation or Bylaws (as amended or restated to date) or any agreement or other instrument to which Licensee is a party or by which it or any of its property is bound.</p>
<h4 id=\"article-xiii-indemnities\">Article XIII - Indemnities</h4>
<h5 id=\"13-1-infringement-indemnification-by-security-innovation\">13.1    Infringement Indemnification by Security Innovation</h5>
<p>Security Innovation agrees that it shall, at its own expense, defend, or at its option settle, any action or claim instituted against Licensee, and pay any award or damages assessed or settled upon against Licensee resulting from such action or claim, insofar as the same is based upon a claim that the Security Innovation Product as delivered to Licensee infringes any patent, trademark, copyright or trade secret of a third party or a claim that Security Innovation has no right to license the Security Innovation Product to Licensee hereunder.  Such obligation is subject to the following conditions:  (i) Licensee shall notify Security Innovation in writing immediately after Licensee first becomes aware of a claim; (ii) Security Innovation shall have the right to control and direct the investigation, preparation, defense and settlement of the action; and (iii) Licensee shall give Security Innovation all reasonably available information, assistance and authority.  The foregoing indemnity shall not apply if the alleged infringement claim arises from use of other than the current unaltered release of the Security Innovation Product, or combination of the Security Innovation Product with other software or hardware not provided by Security Innovation, if such action would have been avoided but for such use or combination.</p>
<h5 id=\"13-2-exclusive-sole-remedy\">13.2.    Exclusive Sole Remedy</h5>
<p>If as a result of any binding settlement among the parties or a final determination by a court of competent jurisdiction, the Security Innovation Product is held to infringe a third party’s patent, trademark, copyright or trade secret and its use is enjoined, or if Security Innovation reasonably determines in its sole discretion that the Software may become subject to an injunction, Security Innovation shall have the option to:  (a) obtain for Licensee the right to continued use of the Security Innovation Product;  (b) replace or modify the Security Innovation Product so it is no longer infringing and is substantially similar in functionality to the enjoined Security Innovation Product; or (c)  refund the license fees paid by Licensee hereunder less depreciation for use assuming straight line depreciation over a five year useful life and terminate this Agreement.   NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, THE FOREGOING STATES SECURITY INNOVATION&#39;S ENTIRE LIABILITY AND LICENSEE&#39;S SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO CLAIMS OF INFRINGEMENT OF THIRD PARTY PROPRIETARY OR INTELLECTUAL PROPERTY RIGHTS OF ANY KIND, AND SECURITY INNOVATION EXPRESSLY DISCLAIMS ANY IMPLIED WARRANTY OF NON-INFRINGEMENT.</p>
<h4 id=\"article-xiv-limitations\">Article XIV - Limitations</h4>
<h5 id=\"14-1-limitation-of-liability\">14.1.    Limitation of Liability</h5>
<ul>
<li>(a) Nothing in this Agreement shall exclude or limit liability for death or personal injury resulting from the failure of a party to exercise reasonable care in the performance of its obligations under this Agreement.</li>
<li>(b) THE AGGREGATE LIABILITY OF SECURITY INNOVATION UNDER ANY CLAIMS ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE PERFORMANCE OF THEIR OBLIGATIONS UNDER THIS AGREEMENT (WHETHER IN CONTRACT, TORT, NEGLIGENCE, WARRANTY OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT THEN PAYABLE TO SECURITY INNOVATION BY LICENSEE UNDER THIS AGREEMENT.</li>
</ul>
<h5 id=\"14-2-limitation-of-damages\">14.2    Limitation of Damages</h5>
<p>IN ANY EVENT, NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY ECONOMIC LOSS OR FOR SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, REGARDLESS OF THE FORM OF ACTION, EVEN IF SUCH PARTY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
<h4 id=\"article-xv-term-of-agreement\">Article XV - Term of Agreement</h4>
<h5 id=\"15-1-term\">15.1    Term</h5>
<p>This Agreement shall be effective as of the Effective Date. Unless earlier terminated upon the mutual agreement of the Parties or in accordance with the provisions of Article XVI, or otherwise specified in the Order, this Agreement shall continue in force for one (1) year from the Effective Date.</p>
<h4 id=\"article-xvi-termination\">Article XVI - Termination</h4>
<h5 id=\"16-1-termination-for-insolvency\">16.1    Termination for Insolvency</h5>
<p>If Licensee shall cease to carry on its business for any reason, be liquidated or dissolved, become insolvent, enter into an agreement for the benefit of its creditors, or file any petition or case under any bankruptcy law or if any such petition or case is filed against it which remains undismissed after sixty (60) days, then this Agreement and all rights, privileges and license granted hereunder shall terminate.</p>
<h5 id=\"16-2-termination-for-breach\">16.2    Termination for Breach</h5>
<p>Upon any material breach or default of this Agreement by either party, the non-breaching party shall have the right to terminate this Agreement upon forty-five (45) days’ written notice to the breaching party, unless the breaching party shall have cured any such breach or default prior to the expiration of such sixty (60) day period.</p>
<h4 id=\"article-xvii-effect-of-termination\">Article XVII - Effect of Termination</h4>
<h5 id=\"17-1-consequences-of-termination\">17.1    Consequences of Termination</h5>
<p>Upon termination of this Agreement for any reason, all rights, privileges and licenses granted hereunder shall immediately cease, provided, however, that nothing herein shall be construed to release either party from any obligation that accrued or matured prior to the effective date of such termination.  Upon termination of this Agreement for any reason, Licensee agrees to immediately cease use of all Security Innovation Product and to cease use of all Confidential Information of Security Innovation, and to return all Confidential Information of Security Innovation to Security Innovation.</p>
<p>Any termination or expiration of this Agreement shall not affect any accrued rights or liabilities of either party. The obligations of each party under Sections 4, 5, 8, 10, 11, 13, 14, 16, 17 and 18 shall survive termination or expiration of this agreement.</p>
<h4 id=\"article-xviii-general-provisions\">Article XVIII - General Provisions</h4>
<h5 id=\"18-1-governing-law\">18.1    Governing Law</h5>
<p>This Agreement shall be construed, governed, interpreted and applied in accordance with the laws of the Commonwealth of Massachusetts, United States of America and the federal laws of the United States, without giving effect to any conflict of laws principles.</p>
<h5 id=\"18-2-injunctive-relief\">18.2    Injunctive Relief</h5>
<p>It is expressly agreed that a material breach of this Agreement will cause irreparable harm to Security Innovation and that a remedy at law would be inadequate.  Therefore, in addition to any and all remedies available at law, Security Innovation and/or Security Innovation Licensors shall be entitled to seek injunctive relief against Licensee in the event of any threatened or actual violation of any or all provisions in this Agreement.</p>
<h5 id=\"18-3-severability\">18.3    Severability</h5>
<p>The provisions of this Agreement are severable, and in the event that any provisions of this Agreement shall be determined to be invalid or unenforceable under any controlling body of the law, such invalidity or unenforceability shall not in any way affect the validity or enforceability of the remaining provisions hereof.</p>
<h5 id=\"18-4-no-waiver\">18.4    No Waiver</h5>
<p>The failure of either party to assert a right hereunder or to insist upon compliance with any term or condition of this Agreement shall not constitute a waiver of that right or excuse a similar subsequent failure to perform any such term or condition by the other Party.</p>
<h5 id=\"18-5-u-s-government-restricted-rights\">18.5 U.S. GOVERNMENT RESTRICTED RIGHTS</h5>
<p>If the Security Innovation Product is acquired on behalf of a unit or agency of the United States Government this provision applies.</p>
<p>For units of the Department of Defense (DoD), this Software is supplied only with “Restricted Rights” as that term is defined in the DoD Supplement to the Federal Acquisition Regulations, 52.227-7013(c)(1)(ii) and:</p>
<pre><code>Use, duplication or disclosure by the Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 52.227-7013. Contractor: SECURITY INNOVATION, Inc., 187 Ballardvale Street, Suite 202, Wilmington, MA 01887
</code></pre><p>Government personnel using this Software, other than under a DoD contract or GSA Schedule, are hereby on notice that use of this Software is subject to restricted rights, which are the same as, or similar to those specified above.</p>
<h5 id=\"18-6-export-controls\">18.6    Export Controls</h5>
<ul>
<li>(a) The Security Innovation Products are eligible for (and are being exported under) License Exception ENC of the Export Administration Regulations C.F.R. 740.17 and Security Innovation have submitted all notifications required to establish such eligibility.  Licensee agrees to make only such uses of the Security Innovation Products, as are in compliance with that status. Without limiting the forgoing, Licensee agrees: (i) not to develop any foreign products using the [Security Innovation Product(s)]; and (ii) not to modify the Security Innovation Products, in such a way as to add or substitute cryptographic algorithms or otherwise modify the encryption functionality of such products.</li>
<li>(b) Licensee shall not re-export any Security Innovation Product to any destination or end user in violation of any acceptable laws or regulations of the United States government.  Licensee shall be solely responsible for compliance with all such laws and regulations and for obtaining any and all export or import licenses or permits that may be required from Licensee to lawfully conduct its business with respect to the Security Innovation Products,</li>
<li>(c) Licensee shall obtain all necessary licenses and authorizations for governments or other relevant bodies to enable Licensee to fulfill its obligations under this Agreement, which shall include, but not be limited to, customs clearances, registration of the Agreement if appropriate, export licenses, exchange control clearances, trading permits and registration for Value Added Tax (VAT) or its equivalent.</li>
</ul>
<h5 id=\"18-7-no-use-of-names\">18.7    No Use of Names</h5>
<p>Except as expressly permitted by this Agreement, neither party shall use the name of the other party or any of its employees nor any adaptation thereof in any advertising, promotion or sales literature without the prior written consent of the other party.</p>
<h5 id=\"18-8-no-agency\">18.8    No Agency</h5>
<p>Nothing herein shall be deemed to constitute Security Innovation, on the one hand, or Licensee, on the other hand, as the agent or representative of the other, or as joint venturers or partners for any purpose.</p>
<h5 id=\"18-9-headings\">18.9    Headings</h5>
<p>The headings contained in this Agreement are for convenience of reference only and shall not be considered in construing this Agreement.</p>
<h5 id=\"18-10-successors-and-assigns\">18.10    Successors and Assigns</h5>
<p>This Agreement shall be binding upon and inure to the benefit of the Parties and their successors and permitted assigns.</p>
<h5 id=\"18-11-third-party-rights\">18.11    Third Party Rights</h5>
<p>Other than as expressly set out in this Agreement, this Agreement does not create any rights for any person who is not a party to it, and no person who is not a party to this Agreement may enforce any of its terms or rely on any exclusion or limitation contained in it.</p>
<h5 id=\"18-12-counterparts\">18.12    Counterparts</h5>
<p>This Agreement may be executed in any number of counterparts, each of which shall be deemed an original but all of such together shall constitute one and the same instrument.</p>
<h5 id=\"18-13-force-majeure\">18.13    Force Majeure</h5>
<p>Neither party shall be liable hereunder by reason of any failure or delay in the performance of its obligations hereunder (except for the payment of money) on account of strikes, shortages, failure of suppliers, riots, insurrection, fires, floods, storms, earthquakes, acts of God, war, governmental action, labor conditions, or any other cause which is beyond the reasonable control of such party.  If such failure or delay continues for at least ninety (90) days, the party not subject to the force majeure shall be entitled to terminate this Agreement by notice in writing to the other.</p>
<h5 id=\"18-14-entire-agreement\">18.14 Entire Agreement</h5>
<p>The parties acknowledge that this Agreement sets forth the entire Agreement and understanding of the parties as to the subject matter hereof and this Agreement shall not be subject to any change or modification except by the execution of a written instrument executed by both parties.</p>
</div></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/user/article' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><div class=\"main\"><article></article></div>") 
 
   $templateCache.put('/angular/jade-html/views/user/article_box' , "<div class=\"main\"><div class=\"section row\"><div class=\"col-3\"><article-box></article-box></div><div class=\"col-9\"></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/user/error' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div class=\"main\"><div ng-show=\"showInfoMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Info:  \{\{infoMessage}}</span></div></div></div><div ng-show=\"showErrorMessage()\" class=\"section row\"><div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Error:  \{\{errorMessage}}</span><div ng-show=\"showSupportEmail()\"><a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a></div></div></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/user/guides' , "<!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!--mixin save-results-buttonbutton.btn-result.icon-Save(title='Save results to Collection')
--><!--mixin delete-results-buttonbutton.btn-result.icon-Delete(title='Delete results from Collection')
--><!--mixin share-results-buttonbutton.btn-result.icon-Share(title='Share results')
--><!-- Getting Started--><div ng-controller=\"Gateways_Controller\" class=\"main help\"><div class=\"col-3 application-scroll\"><dl class=\"help scroll\"><span ng-repeat=\"view in Library.Views\"><dt class=\"vertical-align\"><p>\{\{view.title}}</p></dt><dd ng-repeat=\"article in view.Articles\"><a href=\"guides/\{\{article.id}}\" ng-click=\"show_Article(article.id)\">\{\{article.title}}</a></dd></span></dl></div><div class=\"col-9 application-scroll\"><div class=\"article curated-content\"><h1 class=\"article-title\">\{\{title}}</h1><br/><div id=\"html\" dynamic=\"content\" class=\"article-content\"></div><br/><br/><br/><div class=\"footer\"><p>TEAM Mentor 4.0, a Security Innovation eKnowledge Product.</p>
<p>© Security Innovation 2007-2015, all rights reserved.</p>
<ul class=\"text-center\"><li><p><a href=\"mailto:support@securityinnovation.com\"><span class=\"icon-Mail\"></span><span class=\"text\">support@securityinnovation.com</span></a></p></li><li class=\"text-center\"><p><a ui-sref=\"terms_and_conditions\"><span class=\"icon-Paperclip\"></span><span class=\"text\">Terms & Conditions</span></a></p></li></ul></div></div><div class=\"section article-info curated-content\"><ul class=\"display-inline\"><li><a class=\"button btn-result\"><span class=\"icon\"><icon class=\"Share\"></icon></span><span class=\"text\">Share</span></a></li></ul><div class=\"section row__label\"><div class=\"label\">Metadata:</div></div><div class=\"section row\"><ul><li><span class=\"icon\"><div id=\"icon-technology\" ng-bind-html=\"icon_Technology\"></div></span><span class=\"text\">\{\{article.technology}}</span></li><li><span class=\"icon\"><div id=\"icon-Type\" ng-bind-html=\"icon_Type\"></div></span><span class=\"text\">\{\{article.type}}</span></li><li><span class=\"icon\"><div id=\"icon-Phase\" ng-bind-html=\"icon_Phase\"></div></span><span class=\"text\">\{\{article.phase}}</span></li><li><span class=\"icon\"><icon class=\"Curated-Content\"></icon></span><span class=\"text\">Security Guides</span></li></ul></div><div class=\"section row fixed-bottom\"><div class=\"alert alert-neutral\"><div ng-show=\"showFeedbackBanner()\"><span class=\"text\">Have a comment about this article?<a id=\"tm-support-email\" href=\"\{\{githubContentUrl}}/new?title=\{\{article.title}} &amp;body=\{\{articleUrl}}\" target=\"_blank\">     Open an issue here.</a></span></div><div ng-show=\"showGeneralFeedback()\"><span class=\"text\">Have a comment about this article? Send our team<a href=\"mailto:support@securityinnovation.com\"> an email.</a></span></div></div></div></div></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/user/index' , "<div ng-controller=\"Index_Controller\" class=\"main\"><div class=\"\{\{column_Left}} application-scroll left-col\"><queries></queries></div><div class=\"\{\{column_Middle}} middle-col\"><div class=\"display-desktop\"><breadcrumbs></breadcrumbs></div><results></results><filters_active></filters_active><div class=\"scrolling-results\"><articles></articles><pagination></pagination></div></div><div class=\"\{\{column_Right}} application-scroll right-col\"><div class=\"display-desktop\"><found_issue></found_issue></div><filters class=\"filters\"></filters></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/user/main' , "<!-- Terms and Conditions Navigation--><div class=\"main\"><div class=\"col-3 application-scroll\"><div><dl><dt><p id=\"query_title\">Welcome to TEAM Mentor</p></dt><div id=\"containers\" class=\"scroll\"><div><a href=\"#popular_Search_Terms\"><dd><span class=\"text\">Popular Search Terms</span><span class=\"badge\">3</span></dd></a><a href=\"#recently_Viewed_Articles\"><dd><span class=\"text\">Recently Viewed Articles</span><span class=\"badge\">3</span></dd></a><a href=\"#top_Articles\"><dd><span class=\"text\">Top Articles</span><span class=\"badge\">3</span></dd></a><!--a(href='#')dd
  a(href='#my_Searches')
    span.text My Searches
    span.badge 12--></div></div></dl></div></div><div class=\"col-9 application-scroll\"><start_view></start_view></div></div>") 
 
   $templateCache.put('/angular/jade-html/views/user' , "Moved Temporarily. Redirecting to /error") 
 
