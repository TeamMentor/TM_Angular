function jade_about(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends _layouts/page_logged_out-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};








































































































jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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





















































































































































jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};








































































































jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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





















































































































































var head_title = 'TEAM Mentor 4.0 (Html version)'




















































































jade_mixins["copyright"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\">");
jade_mixins["mail-icon"]();
buf.push("</a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\">");
jade_mixins["twitter-icon"]();
buf.push("</a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\">");
jade_mixins["paperclip-icon"]();
buf.push("</a></li></ul></div></footer>");
};
buf.push("");




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};




































jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
























jade_mixins["about-tagline"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"about\"><h3 id=\"an-interactive-application-security-library-with-thousands-of-code-samples-and-professional-guidance-when-you-need-it\">An interactive Application Security library with thousands of code samples and professional guidance when you need it</h3>\n</section>");
};
jade_mixins["about-us"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"about-us\"><h4 id=\"team-mentor-was-created-by-developers-for-developers-using-secure-coding-standards-code-snippets-and-checklists-built-from-10-years-of-targeted-security-assessments-for-fortune-500-organizations-\">TEAM Mentor was created by developers for developers using secure coding standards, code snippets and checklists built from 10+ years of targeted security assessments for Fortune 500 organizations.</h4>\n<p>It contains thousands of articles with dynamic content across multiple development platforms including .NET, Java, C/C++, PHP, Android and iOS. TEAM Mentor is the In-Practice companion to our <a href=\"https://www.securityinnovation.com/training/application-security/computer-based/\">TEAM Professor eLearning courses</a>, extending developers’ knowledge in combination with training.</p>\n<p>TEAM Mentor integrates with static analysis tools, such as Checkmarx and Fortify&trade;, helping teams make more sense of scan results and make critical decisions to fix software vulnerabilities.</p>\n</section>");
};




jade_mixins["call-to-action"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2>\n<a href=\"../getting-started/index\" class=\"button half-width\">See for yourself</a></section>");
};
buf.push("<section class=\"row__landing-page\">");
jade_mixins["about-tagline"]();
jade_mixins["about-us"]();
jade_mixins["call-to-action"]();
jade_mixins["copyright"]();
buf.push("</section>");;return buf.join("");
}

function jade_docs(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (content, filters, library, title) {
buf.push("<!--extends ../_layouts/page-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
























































































jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Index\" class=\"icon-Index\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Documentation\" class=\"icon-Info\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Logout\" class=\"icon-Logout\"></span>");
};
jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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




jade_mixins["filters-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Filter\" class=\"icon-Filter\"></span>");
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














































var head_title = 'TEAM Mentor 4.0 (Html version)'
















































jade_mixins["delete-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete article from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share article\" class=\"btn-result icon-Share\"></button>");
};




jade_mixins["delete-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share results\" class=\"btn-result icon-Share\"></button>");
};


























buf.push("");




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};




jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Filter\"></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Index\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Info\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Logout\"></span>");
};




jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};




jade_mixins["forward-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Right\"></span>");
};
jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a href=\"javascript:history.go(-1)\"><span class=\"icon-Arrow-Left\"></span></a>");
};




























jade_mixins["results-delete-share"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"label\">0/200 results showing</div><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-results-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-results-button"]();
buf.push("</li></ul>");
};





















































jade_mixins["metadata-saved"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"metadata\"><ul><li>");
jade_mixins["tick-icon"]();
buf.push("</li><li>#<!-- Technology Icon--></li><li>#<!-- Phase Icon--></li><li>#<!-- Type Icon--></li><li>");
jade_mixins["delete-button"]();
buf.push("</li><li>");
jade_mixins["share-button"]();
buf.push("</li></ul></div>");
};
jade_mixins["article-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"summary\"><a href=\"article-new-window-view\"><h3 id=\"article-headline\">Article Headline Article Headline Article Headline</h3></a><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et erat eu nibh interdum euismod at eget diam. Morbi pulvinar lorem vitae venenatis rutrum. Aliquam quis sem vel odio tristique dignissim sagittis sed massa. Pellentesque nibh arcu, laoreet sed varius sed, scelerisque in elit.</p>\n</div>");
};










jade_mixins["search-term-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article>");
};
jade_mixins["saved-search-term-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul>");
};
jade_mixins["filters-div"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<aside id=\"right-nav\">");
if ( filters)
{
buf.push("<a href=\"#\" class=\"button btn-minor\">");
jade_mixins["close-icon"]();
buf.push("</a><form id=\"filters\">");
// iterate filters
;(function(){
  var $$obj = filters;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<div class=\"label\">");
jade_mixins["filters-icon"]();
buf.push("<span class=\"text\">" + (jade.escape(null == (jade_interp = ' ' + filter.title) ? "" : jade_interp)) + "</span></div>");
// iterate filter.results
;(function(){
  var $$obj = filter.results;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<div class=\"label\">");
jade_mixins["filters-icon"]();
buf.push("<span class=\"text\">" + (jade.escape(null == (jade_interp = ' ' + filter.title) ? "" : jade_interp)) + "</span></div>");
// iterate filter.results
;(function(){
  var $$obj = filter.results;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</form>");
}
buf.push("</aside>");
};























































jade_mixins["help-navigation"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( library)
{
buf.push("<dl class=\"help\">");
// iterate library.Views
;(function(){
  var $$obj = library.Views;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var view = $$obj[$index];

buf.push("<dt class=\"vertical-align\"><span class=\"label no-underline\">" + (jade.escape(null == (jade_interp = view.Title) ? "" : jade_interp)) + "</span></dt><div class=\"scroll\"></div>");
// iterate view.Articles
;(function(){
  var $$obj = view.Articles;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var article = $$obj[$index];

buf.push("<dd><a" + (jade.attr("href", '/flare/help/' + article.Id, true, false)) + ">" + (jade.escape(null == (jade_interp = article.Title) ? "" : jade_interp)) + "</a></dd>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var article = $$obj[$index];

buf.push("<dd><a" + (jade.attr("href", '/flare/help/' + article.Id, true, false)) + ">" + (jade.escape(null == (jade_interp = article.Title) ? "" : jade_interp)) + "</a></dd>");
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var view = $$obj[$index];

buf.push("<dt class=\"vertical-align\"><span class=\"label no-underline\">" + (jade.escape(null == (jade_interp = view.Title) ? "" : jade_interp)) + "</span></dt><div class=\"scroll\"></div>");
// iterate view.Articles
;(function(){
  var $$obj = view.Articles;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var article = $$obj[$index];

buf.push("<dd><a" + (jade.attr("href", '/flare/help/' + article.Id, true, false)) + ">" + (jade.escape(null == (jade_interp = article.Title) ? "" : jade_interp)) + "</a></dd>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var article = $$obj[$index];

buf.push("<dd><a" + (jade.attr("href", '/flare/help/' + article.Id, true, false)) + ">" + (jade.escape(null == (jade_interp = article.Title) ? "" : jade_interp)) + "</a></dd>");
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</dl>");
}
};
jade_mixins["help-content"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div id=\"help\" class=\"bg content\">");
if ( title)
{
buf.push("<h1 id=\"help-title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h1>");
}
buf.push("<div id=\"help-content\">" + (null == (jade_interp = content) ? "" : jade_interp) + "</div></div>");
};
buf.push("<!--.application--><!--+left-navigation-->");
jade_mixins["filters-div"]();
buf.push("<main><section class=\"row\"><div class=\"col-3\"><h1>docs nav</h1>");
jade_mixins["help-navigation"]();
buf.push("</div><div class=\"col-9\"><article><h1>docs Content</h1>");
jade_mixins["help-content"]();
buf.push("</article></div></section></main>");}.call(this,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined,"filters" in locals_for_with?locals_for_with.filters:typeof filters!=="undefined"?filters:undefined,"library" in locals_for_with?locals_for_with.library:typeof library!=="undefined"?library:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
}

function jade_features(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends _layouts/page_logged_out-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};








































































































jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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





















































































































































jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};








































































































jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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





















































































































































var head_title = 'TEAM Mentor 4.0 (Html version)'




















































































jade_mixins["copyright"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\">");
jade_mixins["mail-icon"]();
buf.push("</a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\">");
jade_mixins["twitter-icon"]();
buf.push("</a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\">");
jade_mixins["paperclip-icon"]();
buf.push("</a></li></ul></div></footer>");
};
buf.push("");




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};




































jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
































jade_mixins["features"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"features\"><h2 id=\"team-mentor-provides-intelligence-to-fix-vulnerabilities-and-comply\">TEAM Mentor provides intelligence to fix vulnerabilities and comply</h2>\n<section class=\"row\"><div class=\"col-3 text-center\"><div class=\"delivers-compliance\"></div></div><div class=\"col-9\"><p>Delivers compliance-specific secure coding guidance for PCI-DSS, OWASP Top 10, CWE and other popular frameworks.</p>\n</div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"integrates\"></div></div><div class=\"col-9\"><p>Integrates with multiple static analysis tools and developer environments (IDE’s) to map prescriptive coding guidance to scan results to fix vulnerabilities.</p>\n</div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"cross-references\"></div></div><div class=\"col-9\"><p>Stores and cross-references your security policies with out-of-the-box secure coding checklists and examples.</p>\n</div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"provides-guidance\"></div></div><div class=\"col-9\"><p>Provides guidance to assist developers in reducing security vulnerabilities in software applications.</p>\n</div></section></section>");
};
jade_mixins["call-to-action"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2>\n<a href=\"../getting-started/index\" class=\"button half-width\">See for yourself</a></section>");
};
buf.push("<section class=\"row__landing-page\">");
jade_mixins["features"]();
jade_mixins["call-to-action"]();
jade_mixins["copyright"]();
buf.push("</section>");;return buf.join("");
}

function jade_get_started(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (viewModel) {
buf.push("<!--extends _layouts/page-->");
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




























jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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




























jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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





















































































































































var head_title = 'TEAM Mentor 4.0 (Html version)'
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\"/>");
};




jade_mixins["confirm-new-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"user-confirm-new-password\">Confirm New Password</label><input type=\"password\" id=\"user-confirm-new-password\" placeholder=\"Confirm New Password\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Email Address</label><input type=\"email\" id=\"email\" placeholder=\"Email Address\"/>");
};




























































jade_mixins["reset-pwd-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button>");
};










buf.push("");




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};




































jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};












jade_mixins["team-mentor-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>\n</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>\n</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>\n</td></tr></table></section></section>");
};
jade_mixins["login-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row__label\"><div class=\"label\">Login</div></section><section class=\"row\"><form id=\"login-form\" role=\"form\" method=\"post\" action=\"/flare/user/login\"><div class=\"input-field\">");
jade_mixins["username-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["password-input"]();
buf.push("</div><div class=\"button-field\">");
jade_mixins["login-button"]();
buf.push("</div><div class=\"button-field\">");
jade_mixins["get-password-button"]();
buf.push("</div></form></section>");
};
jade_mixins["sign-up-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row__label\"><div class=\"label\">Sign Up</div></section><section class=\"row\"><form id=\"sign-up-form\" action=\"/flare/user/sign-up\"><div class=\"input-field\">");
jade_mixins["username-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["email-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["password-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["confirm-password-input"]();
buf.push("</div><div class=\"button-field\">");
jade_mixins["sign-up-button"]();
buf.push("</div><div class=\"conditions\"><p>By signing up, you agree to our <a href=\"/misc/terms-and-conditions\">Terms and Conditions</a>.</p>\n</div></form></section>");
};












































buf.push("<div class=\"application\"><section class=\"row\"><div class=\"col-4\">");
jade_mixins["team-mentor-summary"]();
buf.push("</div><div class=\"col-8\"><section class=\"getting-started\">");
jade_mixins["login-form"]();
jade_mixins["sign-up-form"]();
buf.push("</section></div></section></div>");}.call(this,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_index(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends _layouts/page_logged_out-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};








































































































jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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





















































































































































jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};








































































































jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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





















































































































































var head_title = 'TEAM Mentor 4.0 (Html version)'




















































































jade_mixins["copyright"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<footer><a href=\"http://www.securityinnovation.com/\" target=\"_blank\"><div class=\"si-logo\"></div></a><div class=\"icons\"><ul><li><div class=\"label no-underline\">TEAM Mentor 4.0</div></li><li><a href=\"mailto:support@securityinnovation.com\" title=\"Email\">");
jade_mixins["mail-icon"]();
buf.push("</a></li><li><a href=\"http://www.twitter.com/SecInnovation\" target=\"_blank\" title=\"Twitter\">");
jade_mixins["twitter-icon"]();
buf.push("</a></li><li><a id=\"terms-and-conditions\" href=\"../misc/terms-and-conditions\" title=\"Terms and Conditions\">");
jade_mixins["paperclip-icon"]();
buf.push("</a></li></ul></div></footer>");
};
buf.push("");




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};




































jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};












jade_mixins["usp"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"usp\"><h2 id=\"instant-resources-that-bridge-the-gap-between-developer-questions-and-technical-solutions\">Instant resources that bridge the gap between developer questions and technical solutions</h2>\n<a href=\"get-started\" class=\"button half-width\">Start your free trial today</a></section>");
};
jade_mixins["reasons"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row reasons\"><h2 id=\"with-team-mentor-you-can-\">With TEAM Mentor, you can...</h2>\n<section class=\"row\"><div class=\"col-3 text-center\"><div class=\"fix-vulnerabilities\"></div></div><div class=\"col-9\"><p>Fix vulnerabilities quicker than ever before with TEAM Mentor&#39;s seamless integration into a developer&#39;s IDE and daily workflow.</p>\n</div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"reduce-vulnerabilities\"></div></div><div class=\"col-9\"><p>Reduce the number of vulnerabilities over time as developers learn about each vulnerability at the time it is identified.</p>\n</div></section><section class=\"row\"><div class=\"col-3 text-center\"><div class=\"improve-process\"></div></div><div class=\"col-9\"><p>Expand the development team&#39;s knowledge and improve processes with access to thousands of specific remediation tactics, including the host organization&#39;s security policies and coding best practices.</p>\n</div></section></section>");
};
jade_mixins["clients"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"clients\"><h3 id=\"our-clients-love-us-and-we-think-you-will-too-\">Our clients love us (and we think you will too!)</h3>\n<img src=\"/assets/clients/flare-logos.jpg\"/></section>");
};












jade_mixins["call-to-action"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"call-to-action\"><h2 id=\"security-risk-understood-\">Security Risk. Understood.</h2>\n<a href=\"../getting-started/index\" class=\"button half-width\">See for yourself</a></section>");
};
buf.push("<section class=\"row__landing-page\">");
jade_mixins["usp"]();
jade_mixins["reasons"]();
jade_mixins["clients"]();
jade_mixins["call-to-action"]();
jade_mixins["copyright"]();
buf.push("</section>");;return buf.join("");
}

function jade_main(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filters) {
buf.push("<!--extends _layouts/page-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
























































































jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Index\" class=\"icon-Index\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Documentation\" class=\"icon-Info\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Logout\" class=\"icon-Logout\"></span>");
};
jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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




jade_mixins["filters-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Filter\" class=\"icon-Filter\"></span>");
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














































var head_title = 'TEAM Mentor 4.0 (Html version)'
















































jade_mixins["delete-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete article from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share article\" class=\"btn-result icon-Share\"></button>");
};




jade_mixins["delete-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share results\" class=\"btn-result icon-Share\"></button>");
};


























buf.push("");




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};




jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Filter\"></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Index\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Info\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Logout\"></span>");
};




jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};




jade_mixins["forward-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Right\"></span>");
};
jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a href=\"javascript:history.go(-1)\"><span class=\"icon-Arrow-Left\"></span></a>");
};




























jade_mixins["results-delete-share"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"label\">0/200 results showing</div><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-results-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-results-button"]();
buf.push("</li></ul>");
};
jade_mixins["start-view"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row\"><section class=\"row__label\"><div class=\"label\">Popular Search Terms</div></section><section class=\"row\">");
jade_mixins["search-term-list"]();
buf.push("</section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Recently Viewed Articles</div></section><section class=\"row\"><!--+articles-list--></section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Top Articles</div></section><section class=\"row\"><!--+articles-list--></section></section>");
};















































jade_mixins["metadata-saved"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"metadata\"><ul><li>");
jade_mixins["tick-icon"]();
buf.push("</li><li>#<!-- Technology Icon--></li><li>#<!-- Phase Icon--></li><li>#<!-- Type Icon--></li><li>");
jade_mixins["delete-button"]();
buf.push("</li><li>");
jade_mixins["share-button"]();
buf.push("</li></ul></div>");
};
jade_mixins["article-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"summary\"><a href=\"article-new-window-view\"><h3 id=\"article-headline\">Article Headline Article Headline Article Headline</h3></a><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et erat eu nibh interdum euismod at eget diam. Morbi pulvinar lorem vitae venenatis rutrum. Aliquam quis sem vel odio tristique dignissim sagittis sed massa. Pellentesque nibh arcu, laoreet sed varius sed, scelerisque in elit.</p>\n</div>");
};










jade_mixins["search-term-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article>");
};
jade_mixins["saved-search-term-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul>");
};
jade_mixins["filters-div"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<aside id=\"right-nav\">");
if ( filters)
{
buf.push("<a href=\"#\" class=\"button btn-minor\">");
jade_mixins["close-icon"]();
buf.push("</a><form id=\"filters\">");
// iterate filters
;(function(){
  var $$obj = filters;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var filter = $$obj[$index];

buf.push("<div class=\"label\">");
jade_mixins["filters-icon"]();
buf.push("<span class=\"text\">" + (jade.escape(null == (jade_interp = ' ' + filter.title) ? "" : jade_interp)) + "</span></div>");
// iterate filter.results
;(function(){
  var $$obj = filter.results;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  }
}).call(this);

    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var filter = $$obj[$index];

buf.push("<div class=\"label\">");
jade_mixins["filters-icon"]();
buf.push("<span class=\"text\">" + (jade.escape(null == (jade_interp = ' ' + filter.title) ? "" : jade_interp)) + "</span></div>");
// iterate filter.results
;(function(){
  var $$obj = filter.results;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(href=href + '/'+result.id)--><input type=\"checkbox\"" + (jade.attr("id", result.title, true, false)) + "/><label" + (jade.attr("for", result.title, true, false)) + ">");
jade_mixins["filter-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</form>");
}
buf.push("</aside>");
};












jade_mixins["left-navigation"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<aside id=\"left-nav\"><ul><li><a ui-sref=\"main\">");
jade_mixins["forward-icon"]();
buf.push("</a></li><li><a ui-sref=\"navigate\">");
jade_mixins["index-icon"]();
buf.push("</a></li><li><a ui-sref=\"docs\">");
jade_mixins["info-icon"]();
buf.push("</a></li><li><a ui-sref=\"logout\">");
jade_mixins["logout-icon"]();
buf.push("</a></li></ul></aside>");
};








































































buf.push("<div class=\"application\">");
jade_mixins["left-navigation"]();
jade_mixins["filters-div"]();
buf.push("<main>");
jade_mixins["start-view"]();
buf.push("</main></div>");}.call(this,"filters" in locals_for_with?locals_for_with.filters:typeof filters!=="undefined"?filters:undefined));;return buf.join("");
}

function jade_navigate(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (containers, href, results, title) {
buf.push("<!--extends _layouts/page-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
























































































jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Index\" class=\"icon-Index\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Documentation\" class=\"icon-Info\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Logout\" class=\"icon-Logout\"></span>");
};
jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
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




jade_mixins["filters-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Filter\" class=\"icon-Filter\"></span>");
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














































var head_title = 'TEAM Mentor 4.0 (Html version)'
















































jade_mixins["delete-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete article from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share article\" class=\"btn-result icon-Share\"></button>");
};




jade_mixins["delete-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share results\" class=\"btn-result icon-Share\"></button>");
};


























buf.push("");




jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};




jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};








jade_mixins["filter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Filter\"></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Index\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Info\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Logout\"></span>");
};




jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};




jade_mixins["forward-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Right\"></span>");
};
jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a href=\"javascript:history.go(-1)\"><span class=\"icon-Arrow-Left\"></span></a>");
};











jade_mixins["results-save-share"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row__label\">");
if ( results)
{
if ( results.size() > 25)
{
buf.push("<td><div id=\"resultsTitle\" class=\"label no-underline\">" + (jade.escape(null == (jade_interp = results.take(25).size() + '/' + results.size() + ' results showing') ? "" : jade_interp)) + "</div></td>");
}
else
{
buf.push("<td><div id=\"resultsTitle\" class=\"label no-underline\">" + (jade.escape(null == (jade_interp = results.take(25).size() + ' results showing') ? "" : jade_interp)) + "</div></td>");
}
buf.push("<ul class=\"display-inline\"><li><!--a.button.btn-result.icon-Filter(href='#right-nav') aaaaaaa--><a href=\"\" class=\"button btn-result icon-Filter\">aaaaaaa</a></li><!--li+save-results-button--><!--li+share-results-button\n\n--></ul>");
}
buf.push("</section>");
};
jade_mixins["results-delete-share"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"label\">0/200 results showing</div><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-results-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-results-button"]();
buf.push("</li></ul>");
};






jade_mixins["articles-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( results)
{
// iterate results.take(10)
;(function(){
  var $$obj = results.take(10);
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["filter-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["filter-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["filter-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, false)) + (jade.attr("id", result.id, true, false)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["filter-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["filter-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["filter-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, false)) + (jade.attr("id", result.id, true, false)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
};















jade_mixins["metadata-saved"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"metadata\"><ul><li>");
jade_mixins["tick-icon"]();
buf.push("</li><li>#<!-- Technology Icon--></li><li>#<!-- Phase Icon--></li><li>#<!-- Type Icon--></li><li>");
jade_mixins["delete-button"]();
buf.push("</li><li>");
jade_mixins["share-button"]();
buf.push("</li></ul></div>");
};
jade_mixins["article-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"summary\"><a href=\"article-new-window-view\"><h3 id=\"article-headline\">Article Headline Article Headline Article Headline</h3></a><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et erat eu nibh interdum euismod at eget diam. Morbi pulvinar lorem vitae venenatis rutrum. Aliquam quis sem vel odio tristique dignissim sagittis sed massa. Pellentesque nibh arcu, laoreet sed varius sed, scelerisque in elit.</p>\n</div>");
};










jade_mixins["search-term-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article>");
};
jade_mixins["saved-search-term-list"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul><article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li class=\"half-width\">");
jade_mixins["delete-button"]();
buf.push("</li><li class=\"half-width\">");
jade_mixins["share-button"]();
buf.push("</li></ul>");
};




























































jade_mixins["pagination"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row pagination\"><div class=\"previous\">");
jade_mixins["back-icon"]();
buf.push("</div><div class=\"number\"><select><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option></select></div><div class=\"next\">");
jade_mixins["forward-icon"]();
buf.push("</div></section>");
};
















jade_mixins["navigate"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<dl><dt>");
if ( title)
{
buf.push("<span class=\"label no-underline\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</span><span class=\"sub-nav__icon\">");
jade_mixins["back-icon"]();
buf.push("</span>");
}
buf.push("</dt>");
if ((containers))
{
buf.push("<div id=\"containers\" class=\"scroll\">");
// iterate containers
;(function(){
  var $$obj = containers;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var container = $$obj[$index];

if ( container.size > 0)
{
buf.push("<a" + (jade.attr("href", href + container.id, true, false)) + (jade.attr("id", container.id, true, false)) + "><dd><span class=\"text\">" + (jade.escape(null == (jade_interp = container.title) ? "" : jade_interp)) + "</span><span class=\"badge\">" + (jade.escape(null == (jade_interp = container.size) ? "" : jade_interp)) + "</span></dd></a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var container = $$obj[$index];

if ( container.size > 0)
{
buf.push("<a" + (jade.attr("href", href + container.id, true, false)) + (jade.attr("id", container.id, true, false)) + "><dd><span class=\"text\">" + (jade.escape(null == (jade_interp = container.title) ? "" : jade_interp)) + "</span><span class=\"badge\">" + (jade.escape(null == (jade_interp = container.size) ? "" : jade_interp)) + "</span></dd></a>");
}
    }

  }
}).call(this);

buf.push("</div>");
}
buf.push("</dl>");
};









































buf.push("<div class=\"application\"><!--+left-navigation--><!--+filters-div--><main><section class=\"row\"><div class=\"col-3\">");
jade_mixins["navigate"]();
buf.push("</div><div class=\"col-9\">");
jade_mixins["results-save-share"]();
buf.push("<section class=\"row\">");
jade_mixins["articles-list"]();
buf.push("</section><section class=\"row\">");
jade_mixins["pagination"]();
buf.push("</section></div></section></main></div>");}.call(this,"containers" in locals_for_with?locals_for_with.containers:typeof containers!=="undefined"?containers:undefined,"href" in locals_for_with?locals_for_with.href:typeof href!=="undefined"?href:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
}

