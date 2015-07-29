function jade_about(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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































































































































































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'
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

function jade_alert_application(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_in-->");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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































































































































































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










jade_mixins["flare-alert"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"alert alert-ok\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Hi</span></div>");
};
buf.push("<div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main>");
jade_mixins["flare-alert"]();
buf.push("</main></div>");;return buf.join("");
}

function jade_article(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (phase, technology, type) {
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
























































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'
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
buf.push("<!--.application--><main><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<section class=\"row\"><div class=\"col-2\"></div><div class=\"col-8\"><section class=\"row__article\"><h1>{{title}}</h1><div id=\"html\" ng-bind-html=\"article_Html\" class=\"article-content\"></div><ul class=\"display-inline\"><li>");
jade_mixins["show-icon"]('Technology', technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', phase);
buf.push("</li></ul></section></div><div class=\"col-2\"></div></section>");
jade_mixins["copyright"]();
buf.push("</main>");}.call(this,"phase" in locals_for_with?locals_for_with.phase:typeof phase!=="undefined"?phase:undefined,"technology" in locals_for_with?locals_for_with.technology:typeof technology!=="undefined"?technology:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined));;return buf.join("");
}

function jade_blank(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!-- this is a blank view--><!-- used for testing (when only the navbar should be visible)-->");;return buf.join("");
}

function jade_curated_content(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (results, undefined) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_in-->");
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





















































































































































buf.push("<!-- Application Icons-->");




jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Left\"></span>");
};
jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
























































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'














buf.push("<div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><section class=\"row\"><div class=\"col-3\"><dl><dt><div class=\"label\">Curated Content</div><span class=\"sub-nav__icon\">");
jade_mixins["back-icon"]();
buf.push("</span></dt><dd><a href=\"#\">Item One</a></dd><dd><a href=\"#\">Item Two</a></dd><dd><a href=\"#\">Item Three</a></dd></dl></div><div class=\"col-9\"><section class=\"row\"><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, false)) + (jade.attr("id", result.id, true, false)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span></section></div></section></main></div>");}.call(this,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function jade_curated_content_article(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (phase, technology, title, type) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_in-->");
jade_mixins["curated-content-article"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div class=\"col-9\"><section class=\"article-body\"><section class=\"row__article\"><h1>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h1><!--include:md ../../TM_Static/content/articles/article-new-window.md--><!--#html.article-content!= article_Html--></section></section></div><div class=\"col-3\"><section class=\"article-info\">");
jade_mixins["article-info"]();
buf.push("</section></div>");
};
jade_mixins["article-info"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row__label\"><div class=\"label\">Relates to:</div></section><section class=\"row\"><ul class=\"display-inline\"><li>");
jade_mixins["show-icon"]('Technology', technology);
buf.push("<span class=\"text\">" + (jade.escape(null == (jade_interp = technology) ? "" : jade_interp)) + "</span></li><li>");
jade_mixins["show-icon"]('Phase', phase);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', type);
buf.push("</li></ul></section><section class=\"row__label\"><div class=\"label\">Belongs to:</div></section><section class=\"row\"><ul><li><a href=\"/flare/curated-content\">");
jade_mixins["curated-content-icon"]();
buf.push("<span class=\"text\">Curated Content</span></a></li></ul><!--ul.display-inlineli.half-width\n  +save-button\nli.half-width\n  +share-button\n--></section>");
};




buf.push("<div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main>");
jade_mixins["curated-content-article"]();
buf.push("</main></div>");}.call(this,"phase" in locals_for_with?locals_for_with.phase:typeof phase!=="undefined"?phase:undefined,"technology" in locals_for_with?locals_for_with.technology:typeof technology!=="undefined"?technology:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined));;return buf.join("");
}

function jade_docs(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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































































































































































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'














buf.push("<!-- Terms and Conditions Navigation-->");




buf.push("<main ng-controller=\"Help_Controller\" class=\"help\"><section class=\"row\"><div class=\"col-3\"><help-navigation></help-navigation></div><div class=\"col-9\"><article><div id=\"help\"><h1 id=\"help-title\">{{title}}</h1><help-content ng-bind-html=\"content\"></help-content></div></article></div></section></main>");;return buf.join("");
}

function jade_error(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (errorMessage, viewModel) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
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







































































































jade_mixins["alert-login-failed"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( viewModel && viewModel.errorMessage)
{
buf.push("<div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">" + (jade.escape(null == (jade_interp = 'Error: ' + viewModel.errorMessage) ? "" : jade_interp)) + "</span></div></div>");
}
};
jade_mixins["alert-please-login"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">You need to login to see that page.</span></div></div>");
};
jade_mixins["alert-pwd-sent"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div>");
};
jade_mixins["alert-sign-up-failed"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( viewModel && viewModel.errorMessage)
{
buf.push("<div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">" + (jade.escape(null == (jade_interp = 'Error: ' + viewModel.errorMessage) ? "" : jade_interp)) + "</span></div></div>");
}
};
jade_mixins["alert-sign-up-OK"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Thanks for signing up to TEAM Mentor. Please login to access our libraries.</span></div></div>");
};
jade_mixins["alert-pwd-reset-failed"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( errorMessage)
{
buf.push("<div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">" + (jade.escape(null == (jade_interp = 'Error: ' + errorMessage) ? "" : jade_interp)) + "</span></div></div>");
}
};
jade_mixins["alert-pwd-reset-OK"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">Your password has been updated. Please login to access our libraries.</span></div></div>");
};
jade_mixins["alert-3-5-unavailable"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if ( viewModel && viewModel.errorMessage)
{
buf.push("<div role=\"alert\" class=\"alert alert-bad\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">" + (jade.escape(null == (jade_interp = 'Error: ' + viewModel.errorMessage) ? "" : jade_interp)));
jade_mixins["tm-support-email"]();
buf.push("</span></div></div>");
}
};
buf.push("<div class=\"application\"><section class=\"row\">");
jade_mixins["alert-login-failed"]();
jade_mixins["alert-please-login"]();
jade_mixins["alert-pwd-sent"]();
jade_mixins["alert-sign-up-failed"]();
jade_mixins["alert-sign-up-OK"]();
jade_mixins["alert-pwd-reset-failed"]();
jade_mixins["alert-pwd-reset-OK"]();
jade_mixins["alert-3-5-unavailable"]();
buf.push("</section></div>");}.call(this,"errorMessage" in locals_for_with?locals_for_with.errorMessage:typeof errorMessage!=="undefined"?errorMessage:undefined,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_features(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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































































































































































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'
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

function jade_index(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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































































































































































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'
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

function jade_login(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (viewModel) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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























































































































































jade_mixins["reset-pwd-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
buf.push("<!-- Getting Started-->");
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
























buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










jade_mixins["team-mentor-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>\n</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>\n</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>\n</td></tr></table></section></section>");
};














buf.push("<!--mixin forgot-pwd-formsection.row__label\n  .label Forgot your password?\nsection.row\n  form#forgot-pwd-form(action='#')\n    section.row\n      .col-8.input-field\n        +email-input\n      .col-4.button-field\n        br\n        +get-password-button\n-->");




































buf.push("<!--include ../component/login_form.jade--><section class=\"row\"><div class=\"col-4\">");
jade_mixins["team-mentor-summary"]();
buf.push("</div><div class=\"col-8\"><section class=\"getting-started\"><login-form></login-form></section></div></section>");}.call(this,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_main(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filters, results, undefined) {
































































































jade_mixins["show-icon"] = jade_interp = function(filter, title){
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




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
};
















jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};

























































































































































jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["filters-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Filter\" class=\"icon-Filter\"></span>");
};




jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};




jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Logout\" class=\"icon-Logout\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Documentation\" class=\"icon-Info\"></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Index\" class=\"icon-Index\"></span>");
};
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
















































































































jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
buf.push("<!DOCTYPE html><html lang=\"en\">");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
























































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










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





















































































































































buf.push("<html lang=\"en-US\"></html><head><title>" + (jade.escape((jade_interp = head_title) == null ? '' : jade_interp)) + "</title><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" href=\"/assets/favicons/favicon.ico\"><link href=\"/css/flare-stylesheet.css\" rel=\"stylesheet\"></head><body><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<div ng-controller=\"Search_Controller\" class=\"search\"><form ng-submit=\"submit()\"><select><option ng-repeat=\"technology in technologies\" value=\"{{technology}}\">{{technology}}</option><!--  option(value=\".Net\")= \"Net.....\"--><!--  option(value=\"Java\")= \"abc\"--><!--  option(value=\"php\")= \"php\"--></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"Type keywords here\" class=\"search-input\"><button id=\"search-button\" type=\"submit\" class=\"btn-search\">");
jade_mixins["search-icon"]();
buf.push("</button></form></div><div class=\"application\"><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<aside id=\"left-nav\" ng-controller=\"User_Navigation_Controller\"><ul><li><div class=\"application-logo\"></div></li><li><a ui-sref=\"main\">");
jade_mixins["home-icon"]();
buf.push("</a></li><li><a ui-sref=\"navigate\">");
jade_mixins["index-icon"]();
buf.push("</a></li><li><a ui-sref=\"queries\">");
jade_mixins["index-icon"]();
buf.push("</a></li><li><a ui-sref=\"docs\">");
jade_mixins["info-icon"]();
buf.push("</a></li><li><a href=\"/angular/guest/index\">");
jade_mixins["logout-icon"]();
buf.push("</a><!--a(ui-sref=\"logout\")--></li></ul></aside><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
























































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










buf.push("<div id=\"right-nav\">");
if ( filters)
{
buf.push("<!--a.button.btn-minor(href='#')+close-icon--><form id=\"filters\">");
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
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
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
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</form>");
}
buf.push("</div><main><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Popular Search Terms</div></section><section class=\"row\"><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article></section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Recently Viewed Articles</div></section><section class=\"row\"><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span></section></section><section class=\"row\"><section class=\"row__label\"><div class=\"label\">Top Articles</div></section><section class=\"row\"><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span></section></section></main></div></body></html>");}.call(this,"filters" in locals_for_with?locals_for_with.filters:typeof filters!=="undefined"?filters:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function jade_navigate(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<main ng-controller=\"Navigate_Controller\"><section class=\"row\"><div class=\"col-3\"><navigate-queries></navigate-queries></div><div class=\"col-9\"><section class=\"row__label\"><div id=\"resultsTitle\" class=\"label no-underline\"># results showing</div></section><!--if resultssection.row__label\n  if results.size() > 25\n    .label.no-underline#resultsTitle= results.take(25).size() + '/' + results.size() + ' results showing'\n  else\n    .label.no-underline#resultsTitle= results.take(25).size() + ' results showing'\n  ul.display-inline\n    li\n      //a.button.btn-result.icon-Filter(href='#right-nav') aaaaaaa\n      a.button.btn-result.icon-Filter(href='')\n    //li\n      +save-results-button\n    //li\n      +share-results-button--><navigate-results></navigate-results><!--filters--></div></section></main>");;return buf.join("");
}

function jade_navigate_old(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (results, undefined) {





















































































































jade_mixins["editor-navbar"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<dt class=\"editor\"><form class=\"text-center\"><div><input type=\"radio\" name=\"editor\" value=\"add\" id=\"add\"/><label for=\"add\">Add</label></div><div><input type=\"radio\" name=\"editor\" value=\"edit\" id=\"edit\"/><label for=\"edit\">");
jade_mixins["edit-icon"]();
buf.push("</label></div><div><input type=\"radio\" name=\"editor\" value=\"move\" id=\"move\"/><label for=\"move\">Move</label></div><div><input type=\"radio\" name=\"editor\" value=\"delete\" id=\"delete\"/><label for=\"delete\">");
jade_mixins["delete-icon"]();
buf.push("</label></div></form></dt>");
};


















jade_mixins["editor-delete-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<form><section class=\"row\"><div class=\"col-8\"><label for=\"delete-directory\">Are you sure you want to delete this?</label></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor\">");
jade_mixins["tick-icon"]();
buf.push("</button></div><div class=\"col-2\"><button type=\"cancel\" class=\"btn-editor cancel\">");
jade_mixins["close-icon"]();
buf.push("</button></div></section></form>");
};
jade_mixins["editor-edit-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<form><label for=\"edit-directory\">Edit directory</label><section class=\"row\"><div class=\"col-8\"><input type=\"text\" id=\"edit-directory\"/></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor\">");
jade_mixins["tick-icon"]();
buf.push("</button></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor cancel\">");
jade_mixins["close-icon"]();
buf.push("</button></div></section></form>");
};
jade_mixins["editor-add-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<form><label for=\"add-directory\">Add new directory</label><section class=\"row\"><div class=\"col-10\"><input type=\"text\" id=\"add-directory\"/></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor\">");
jade_mixins["tick-icon"]();
buf.push("</button></div></section></form>");
};
























































jade_mixins["show-icon"] = jade_interp = function(filter, title){
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




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};




jade_mixins["forward-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Right\"></span>");
};




jade_mixins["edit-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Edit\"></span>");
};




jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Left\"></span>");
};





















































































































































jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Delete\" class=\"icon-Delete\"></span>");
};








jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};




jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};












jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
















































































































jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
buf.push("<!DOCTYPE html><html lang=\"en\">");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
















































































































jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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








jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Delete\" class=\"icon-Delete\"></span>");
};
jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};





















































































































































buf.push("<!-- Application Icons-->");




jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Left\"></span>");
};
jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};




jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Delete\"></span>");
};
jade_mixins["edit-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Edit\"></span>");
};




buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");
jade_mixins["forward-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Right\"></span>");
};
















jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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








jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Delete\" class=\"icon-Delete\"></span>");
};
jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
























































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");
jade_mixins["editor-add-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<form><label for=\"add-directory\">Add new directory</label><section class=\"row\"><div class=\"col-10\"><input type=\"text\" id=\"add-directory\"></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor\">");
jade_mixins["tick-icon"]();
buf.push("</button></div></section></form>");
};
jade_mixins["editor-edit-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<form><label for=\"edit-directory\">Edit directory</label><section class=\"row\"><div class=\"col-8\"><input type=\"text\" id=\"edit-directory\"></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor\">");
jade_mixins["tick-icon"]();
buf.push("</button></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor cancel\">");
jade_mixins["close-icon"]();
buf.push("</button></div></section></form>");
};
jade_mixins["editor-delete-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<form><section class=\"row\"><div class=\"col-8\"><label for=\"delete-directory\">Are you sure you want to delete this?</label></div><div class=\"col-2\"><button type=\"submit\" class=\"btn-editor\">");
jade_mixins["tick-icon"]();
buf.push("</button></div><div class=\"col-2\"><button type=\"cancel\" class=\"btn-editor cancel\">");
jade_mixins["close-icon"]();
buf.push("</button></div></section></form>");
};
var head_title = 'TEAM Mentor 4.0'










jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
















































































































jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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








jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Delete\" class=\"icon-Delete\"></span>");
};
jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};





















































































































































buf.push("<html lang=\"en-US\"></html><head><title>" + (jade.escape((jade_interp = head_title) == null ? '' : jade_interp)) + "</title><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" href=\"/assets/favicons/favicon.ico\"><link href=\"/css/flare-stylesheet.css\" rel=\"stylesheet\"></head><body><!-- Application Icons-->");




jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Left\"></span>");
};
jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};




jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Delete\"></span>");
};
jade_mixins["edit-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Edit\"></span>");
};




buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");
jade_mixins["forward-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Right\"></span>");
};
















jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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








jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Delete\" class=\"icon-Delete\"></span>");
};
jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<div ng-controller=\"Search_Controller\" class=\"search\"><form ng-submit=\"submit()\"><select><option ng-repeat=\"technology in technologies\" value=\"{{technology}}\">{{technology}}</option><!--  option(value=\".Net\")= \"Net.....\"--><!--  option(value=\"Java\")= \"abc\"--><!--  option(value=\"php\")= \"php\"--></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"Type keywords here\" class=\"search-input\"><button id=\"search-button\" type=\"submit\" class=\"btn-search\">");
jade_mixins["search-icon"]();
buf.push("</button></form></div><div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><section class=\"row\"><div class=\"col-3\">");
jade_mixins["navigate"]();
buf.push("</div><div class=\"col-9\"><section class=\"row__label\"><div id=\"resultsTitle\" class=\"label no-underline\"># results showing</div></section><!--if resultssection.row__label\n  if results.size() > 25\n    .label.no-underline#resultsTitle= results.take(25).size() + '/' + results.size() + ' results showing'\n  else\n    .label.no-underline#resultsTitle= results.take(25).size() + ' results showing'\n  ul.display-inline\n    li\n      //a.button.btn-result.icon-Filter(href='#right-nav') aaaaaaa\n      a.button.btn-result.icon-Filter(href='')\n    //li\n      +save-results-button\n    //li\n      +share-results-button--><section class=\"row\"><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span></section><section class=\"row\"><!-- Application Icons-->");




jade_mixins["back-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Left\"></span>");
};
jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};




jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Delete\"></span>");
};
jade_mixins["edit-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Edit\"></span>");
};




buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");
jade_mixins["forward-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Arrow-Right\"></span>");
};
















jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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








jade_mixins["delete-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Delete\" class=\"icon-Delete\"></span>");
};
jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<section class=\"row pagination\"><div class=\"previous\">");
jade_mixins["back-icon"]();
buf.push("</div><div class=\"number\"><select><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option></select></div><div class=\"next\">");
jade_mixins["forward-icon"]();
buf.push("</div></section></section></div></section></main></div></body></html>");}.call(this,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function jade_new_user_onboard(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_in-->");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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































































































































































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'














buf.push("<div class=\"application\"><section class=\"row\"><div class=\"col-1\"></div><div class=\"col-10\"><section class=\"row__label\"><div class=\"label\">Welcome to TEAM Mentor</div><ul class=\"display-inline\"><li class=\"full-width\"><button>Go to app</button></li></ul></section><section class=\"row\"><article class=\"result\"><div class=\"summary\"><h2>Search</h2><p>TEAM Mentor 4.0 has faster and more reliable search results. Search the database by filter, issue or technology.</p></div></article><article class=\"result\"><div class=\"summary\"><h2>Navigate</h2><p>Not sure where to start? You can browse our index and find groups of articles that cover entire topics.</p></div></article><article class=\"result\"><div class=\"summary\"><h2>Filters</h2><p>Filter your results to find articles that directly relate to you. You can filter by technology, phase and type.</p></div></article></section></div><div class=\"col-1\"></div></section></div>");;return buf.join("");
}

function jade_pwd_forgot(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (viewModel) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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























































































































































jade_mixins["reset-pwd-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
buf.push("<!-- Getting Started-->");
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
























buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










jade_mixins["team-mentor-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>\n</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>\n</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>\n</td></tr></table></section></section>");
};














buf.push("<!--mixin forgot-pwd-formsection.row__label\n  .label Forgot your password?\nsection.row\n  form#forgot-pwd-form(action='#')\n    section.row\n      .col-8.input-field\n        +email-input\n      .col-4.button-field\n        br\n        +get-password-button\n-->");




































buf.push("<section class=\"row\"><div class=\"col-4\">");
jade_mixins["team-mentor-summary"]();
buf.push("</div><div class=\"col-8\"><pwd-forgot-form></pwd-forgot-form></div></section>");}.call(this,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_pwd_reset(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (viewModel) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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























































































































































jade_mixins["reset-pwd-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
buf.push("<!-- Getting Started-->");
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
























buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










jade_mixins["team-mentor-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>\n</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>\n</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>\n</td></tr></table></section></section>");
};














buf.push("<!--mixin forgot-pwd-formsection.row__label\n  .label Forgot your password?\nsection.row\n  form#forgot-pwd-form(action='#')\n    section.row\n      .col-8.input-field\n        +email-input\n      .col-4.button-field\n        br\n        +get-password-button\n-->");
jade_mixins["pwd-reset-form"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row__label\"><div class=\"label\">Reset your password</div></section><section class=\"row\"><form id=\"password-reset-form\" role=\"form\" method=\"post\" action=\"/flare/user/password-reset\"><section class=\"row\"><div class=\"col-6 input-field\">");
jade_mixins["password-input"]();
buf.push("</div><div class=\"col-6 input-field\">");
jade_mixins["confirm-new-password-input"]();
buf.push("</div><div class=\"col-4 button-field\"><br/>");
jade_mixins["reset-pwd-button"]();
buf.push("</div></section></form></section>");
};


























buf.push("<section class=\"row\"><div class=\"col-4\">");
jade_mixins["team-mentor-summary"]();
buf.push("</div><div class=\"col-8\"><div class=\"getting-started\"><!--+alert-pwd-reset-failed-->");
jade_mixins["pwd-reset-form"]();
buf.push("</div></div></section>");}.call(this,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_pwd_sent(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (viewModel) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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


















































































































jade_mixins["alert-pwd-sent"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div>");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
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


















































































































jade_mixins["alert-pwd-sent"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<div role=\"alert\" class=\"alert alert-ok\"><div id=\"message\"><span class=\"alert-icon\">!</span><span class=\"alert-text\">If you entered a valid address, then a password reset link has been sent to your email address.</span></div></div>");
};































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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























































































































































jade_mixins["reset-pwd-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
buf.push("<!-- Getting Started-->");
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
























buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










jade_mixins["team-mentor-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>\n</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>\n</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>\n</td></tr></table></section></section>");
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
buf.push("<!--mixin forgot-pwd-formsection.row__label\n  .label Forgot your password?\nsection.row\n  form#forgot-pwd-form(action='#')\n    section.row\n      .col-8.input-field\n        +email-input\n      .col-4.button-field\n        br\n        +get-password-button\n-->");




































buf.push("<section class=\"row\"><div class=\"col-4\">");
jade_mixins["team-mentor-summary"]();
buf.push("</div><div class=\"col-8\"><section class=\"getting-started\">");
jade_mixins["alert-pwd-sent"]();
jade_mixins["login-form"]();
jade_mixins["sign-up-form"]();
buf.push("</section></div></section>");}.call(this,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_search(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (filters, results, undefined) {




























































































jade_mixins["show-icon"] = jade_interp = function(filter, title){
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




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
};
















jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};

























































































































































jade_mixins["default-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Default\" class=\"icon-Default\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};




jade_mixins["filters-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Filter\" class=\"icon-Filter\"></span>");
};




jade_mixins["test-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Test\" class=\"icon-Test\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["implement-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Implementation\" class=\"icon-Implementation\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["design-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Design\" class=\"icon-Design\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span></span>");
};
jade_mixins["deploy-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Deployment\" class=\"icon-Deploy\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["html5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"HTML5\" class=\"icon-HTML5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["how-to-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"How To\" class=\"icon-HowTo\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["principle-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Principle\" class=\"icon-Principle\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["guideline-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Guideline\" class=\"icon-Guideline\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["code-example-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Code Example\" class=\"icon-CodeExample\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span></span>");
};
jade_mixins["checklist-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Checklist\" class=\"icon-Checklist\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};
jade_mixins["c-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"C++\" class=\"icon-C\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["android-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Android\" class=\"icon-Android\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span></span>");
};




jade_mixins["java-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Java\" class=\"icon-Java\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["ios-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"iOS\" class=\"icon-iOS\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
jade_mixins["net-3-5-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net-3-5\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["net-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\".Net\" class=\"icon-Net\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["web-app-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Web Application\" class=\"icon-Web-App\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span><span class=\"path4\"></span><span class=\"path5\"></span><span class=\"path6\"></span><span class=\"path7\"></span><span class=\"path8\"></span><span class=\"path9\"></span><span class=\"path10\"></span><span class=\"path11\"></span></span>");
};
jade_mixins["wcf-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"WCF\" class=\"icon-WCF\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["vulnerabilities-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Vulnerabilities\" class=\"icon-Vulnerabilities\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["scala-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Scala\" class=\"icon-Scala\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["php-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"PHP\" class=\"icon-PHP\"><span class=\"path1\"></span><span class=\"path2\"></span></span>");
};
jade_mixins["paperclip-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Terms &amp; Conditions\" class=\"icon-Paperclip\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Twitter\" class=\"icon-Twitter\"></span>");
};
jade_mixins["mail-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Mail\" class=\"icon-Mail\"></span>");
};
jade_mixins["logout-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Logout\" class=\"icon-Logout\"></span>");
};
jade_mixins["info-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Documentation\" class=\"icon-Info\"></span>");
};
jade_mixins["index-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Index\" class=\"icon-Index\"></span>");
};
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
};
















































































































jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
buf.push("<!DOCTYPE html><html lang=\"en\">");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
























































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










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





















































































































































buf.push("<html lang=\"en-US\"></html><head><title>" + (jade.escape((jade_interp = head_title) == null ? '' : jade_interp)) + "</title><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><meta name=\"description\" content=\"\"><meta name=\"author\" content=\"\"><link rel=\"icon\" href=\"/assets/favicons/favicon.ico\"><link href=\"/css/flare-stylesheet.css\" rel=\"stylesheet\"></head><body><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<div ng-controller=\"Search_Controller\" class=\"search\"><form ng-submit=\"submit()\"><select><option ng-repeat=\"technology in technologies\" value=\"{{technology}}\">{{technology}}</option><!--  option(value=\".Net\")= \"Net.....\"--><!--  option(value=\"Java\")= \"abc\"--><!--  option(value=\"php\")= \"php\"--></select><input id=\"search-text\" type=\"text\" ng-model=\"text\" placeholder=\"Type keywords here\" class=\"search-input\"><button id=\"search-button\" type=\"submit\" class=\"btn-search\">");
jade_mixins["search-icon"]();
buf.push("</button></form></div><div class=\"application\"><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
buf.push("<aside id=\"left-nav\" ng-controller=\"User_Navigation_Controller\"><ul><li><div class=\"application-logo\"></div></li><li><a ui-sref=\"main\">");
jade_mixins["home-icon"]();
buf.push("</a></li><li><a ui-sref=\"navigate\">");
jade_mixins["index-icon"]();
buf.push("</a></li><li><a ui-sref=\"queries\">");
jade_mixins["index-icon"]();
buf.push("</a></li><li><a ui-sref=\"docs\">");
jade_mixins["info-icon"]();
buf.push("</a></li><li><a href=\"/angular/guest/index\">");
jade_mixins["logout-icon"]();
buf.push("</a><!--a(ui-sref=\"logout\")--></li></ul></aside><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




jade_mixins["home-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-home\"></span>");
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
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
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








jade_mixins["show-icon"] = jade_interp = function(filter, title){
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
























































buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










buf.push("<div id=\"right-nav\">");
if ( filters)
{
buf.push("<!--a.button.btn-minor(href='#')+close-icon--><form id=\"filters\">");
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
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
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
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
}
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var result = $$obj[$index];

if ( result.size > 0)
{
buf.push("<!--a(ng-href=href + '/'+result.id)--><a ng-href=\"#\"><input type=\"checkbox\"" + (jade.attr("id", result.title, true, true)) + "><label" + (jade.attr("for", result.title, true, true)) + ">");
jade_mixins["show-icon"](filter.title, result.title);
buf.push("<span class=\"badge\">" + (jade.escape(null == (jade_interp = result.size) ? "" : jade_interp)) + "</span></label></a>");
}
    }

  }
}).call(this);

    }

  }
}).call(this);

buf.push("</form>");
}
buf.push("</div><main><section class=\"row__label\"><div id=\"resultsTitle\" class=\"label no-underline\"># results showing</div></section><!--if resultssection.row__label\n  if results.size() > 25\n    .label.no-underline#resultsTitle= results.take(25).size() + '/' + results.size() + ' results showing'\n  else\n    .label.no-underline#resultsTitle= results.take(25).size() + ' results showing'\n  ul.display-inline\n    li\n      //a.button.btn-result.icon-Filter(href='#right-nav') aaaaaaa\n      a.button.btn-result.icon-Filter(href='')\n    //li\n      +save-results-button\n    //li\n      +share-results-button--><section class=\"row\"><span id=\"result_article\">");
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
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var result = $$obj[index];

if ( result && result.id && result.title)
{
buf.push("<article class=\"result\"><div class=\"metadata\"><ul><!--lispan.label.no-underline\n  +tick-icon\n  span   Seen--><li>");
jade_mixins["show-icon"]('Technology',result.technology);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', result.type);
buf.push("</li><li>");
jade_mixins["show-icon"]('Phase', result.phase);
buf.push("</li><!--li+save-button--><!--li+share-button--></ul></div><div class=\"summary\"><a" + (jade.attr("href", '/flare/article/' + result.id.remove('article-') + '/' + result.title.replace(/ /g,'-').remove('.'), true, true)) + (jade.attr("id", result.id, true, true)) + "><h3 id=\"article-headline\">" + (jade.escape(null == (jade_interp = result.title) ? "" : jade_interp)) + "</h3></a><p>" + (jade.escape(null == (jade_interp = result.summary + '...') ? "" : jade_interp)) + "</p></div></article>");
}
    }

  }
}).call(this);

}
buf.push("</span></section></main></div></body></html>");}.call(this,"filters" in locals_for_with?locals_for_with.filters:typeof filters!=="undefined"?filters:undefined,"results" in locals_for_with?locals_for_with.results:typeof results!=="undefined"?results:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}

function jade_sign_up(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (viewModel) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_out-->");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["first-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" name=\"firstname\" placeholder=\"First Name\"" + (jade.attr("value", '' + (viewModel?viewModel.firstname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["last-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" name=\"lastname\" placeholder=\"Last Name\"" + (jade.attr("value", '' + (viewModel?viewModel.lastname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["company-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"company\">Company</label><input type=\"text\" id=\"company\" name=\"company\" placeholder=\"Company\"" + (jade.attr("value", '' + (viewModel?viewModel.company:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["title-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"title\">Job/Title</label><input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Job/Title\"" + (jade.attr("value", '' + (viewModel?viewModel.title:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["country-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"country\">Country</label><input type=\"text\" id=\"country\" name=\"country\" placeholder=\"Country\"" + (jade.attr("value", '' + (viewModel?viewModel.country:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["state-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"state\">State</label><input type=\"text\" id=\"state\" name=\"state\" placeholder=\"State\"" + (jade.attr("value", '' + (viewModel?viewModel.state:"") + '', true, false)) + " maxlength=\"100\"/>");
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
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["first-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" name=\"firstname\" placeholder=\"First Name\"" + (jade.attr("value", '' + (viewModel?viewModel.firstname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["last-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" name=\"lastname\" placeholder=\"Last Name\"" + (jade.attr("value", '' + (viewModel?viewModel.lastname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["company-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"company\">Company</label><input type=\"text\" id=\"company\" name=\"company\" placeholder=\"Company\"" + (jade.attr("value", '' + (viewModel?viewModel.company:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["title-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"title\">Job/Title</label><input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Job/Title\"" + (jade.attr("value", '' + (viewModel?viewModel.title:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["country-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"country\">Country</label><input type=\"text\" id=\"country\" name=\"country\" placeholder=\"Country\"" + (jade.attr("value", '' + (viewModel?viewModel.country:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["state-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"state\">State</label><input type=\"text\" id=\"state\" name=\"state\" placeholder=\"State\"" + (jade.attr("value", '' + (viewModel?viewModel.state:"") + '', true, false)) + " maxlength=\"100\"/>");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




























jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
















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























































































































































jade_mixins["reset-pwd-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
buf.push("<!-- Getting Started-->");
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["first-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" name=\"firstName\" placeholder=\"First Name\"" + (jade.attr("value", '' + (viewModel?viewModel.firstname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["last-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" name=\"lastname\" placeholder=\"Last Name\"" + (jade.attr("value", '' + (viewModel?viewModel.lastname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["company-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"company\">Company</label><input type=\"text\" id=\"company\" name=\"company\" placeholder=\"Company\"" + (jade.attr("value", '' + (viewModel?viewModel.company:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["title-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"title\">Job/Title</label><input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Job/Title\"" + (jade.attr("value", '' + (viewModel?viewModel.title:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["country-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"country\">Country</label><input type=\"text\" id=\"country\" name=\"country\" placeholder=\"Country\"" + (jade.attr("value", '' + (viewModel?viewModel.country:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["state-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"state\">State</label><input type=\"text\" id=\"state\" name=\"state\" placeholder=\"state\"" + (jade.attr("value", '' + (viewModel?viewModel.state:"") + '', true, false)) + " maxlength=\"100\"/>");
};
buf.push("<!-- User Inputs-->");




jade_mixins["title-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Title</label><input type=\"text\" id=\"title\" placeholder=\"Title\"/>");
};
jade_mixins["company-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Company</label><input type=\"text\" id=\"company\" placeholder=\"Company\"/>");
};
buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'










jade_mixins["team-mentor-summary"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"tm-summary\"><section class=\"row__label\"><div class=\"label\">With TEAM Mentor, you can...</div></section><section class=\"row\"><table><tr><td><div class=\"fix-vulnerabilities\"></div></td><td><p>Fix vulnerabilities quicker than ever before.</p>\n</td></tr><tr><td><div class=\"reduce-vulnerabilities\"></div></td><td><p>Reduce the number of vulnerabilities over time.</p>\n</td></tr><tr><td><div class=\"improve-process\"></div></td><td><p>Expand the development team&#39;s knowledge and improve process.</p>\n</td></tr></table></section></section>");
};














buf.push("<!--mixin forgot-pwd-formsection.row__label\n  .label Forgot your password?\nsection.row\n  form#forgot-pwd-form(action='#')\n    section.row\n      .col-8.input-field\n        +email-input\n      .col-4.button-field\n        br\n        +get-password-button\n-->");




































buf.push("<!--include ../component/login_form.jade--><section class=\"row\"><div class=\"col-4\">");
jade_mixins["team-mentor-summary"]();
buf.push("</div><div class=\"col-8\"><section class=\"getting-started\"><!-- Getting Started-->");
jade_mixins["username-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Username</label><input type=\"text\" id=\"username\" placeholder=\"Username\" ng-model=\"username\"/>");
};
jade_mixins["password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"password\">Password</label><input type=\"password\" id=\"password\" placeholder=\"Password\" ng-model=\"password\" required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["confirm-password-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"confirm-password\">Confirm Password</label><input type=\"password\" id=\"confirm-password\" name=\"confirm-password\" placeholder=\"Password\"" + (jade.attr("value", '' + (viewModel?viewModel.confirmpassword:"") + '', true, false)) + " maxlength=\"256\"/>");
};
jade_mixins["email-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"email\">Email Address</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Email Address\"" + (jade.attr("value", '' + (viewModel?viewModel.email:"") + '', true, false)) + " required=\"required\" maxlength=\"256\"/>");
};
jade_mixins["first-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"firstname\">First Name</label><input type=\"text\" id=\"firstname\" name=\"firstName\" placeholder=\"First Name\"" + (jade.attr("value", '' + (viewModel?viewModel.firstname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["last-name-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"lastname\">Last Name</label><input type=\"text\" id=\"lastname\" name=\"lastname\" placeholder=\"Last Name\"" + (jade.attr("value", '' + (viewModel?viewModel.lastname:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["company-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"company\">Company</label><input type=\"text\" id=\"company\" name=\"company\" placeholder=\"Company\"" + (jade.attr("value", '' + (viewModel?viewModel.company:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["title-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"title\">Job/Title</label><input type=\"text\" id=\"title\" name=\"title\" placeholder=\"Job/Title\"" + (jade.attr("value", '' + (viewModel?viewModel.title:"") + '', true, false)) + " maxlength=\"100\"/>");
};
jade_mixins["country-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"country\">Country</label><input type=\"text\" id=\"country\" name=\"country\" placeholder=\"Country\"" + (jade.attr("value", '' + (viewModel?viewModel.country:"") + '', true, false)) + " required=\"required\" maxlength=\"100\"/>");
};
jade_mixins["state-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label for=\"state\">State</label><input type=\"text\" id=\"state\" name=\"state\" placeholder=\"state\"" + (jade.attr("value", '' + (viewModel?viewModel.state:"") + '', true, false)) + " maxlength=\"100\"/>");
};
buf.push("<!-- User Inputs-->");




jade_mixins["title-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Title</label><input type=\"text\" id=\"title\" placeholder=\"Title\"/>");
};
jade_mixins["company-input"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<label>Company</label><input type=\"text\" id=\"company\" placeholder=\"Company\"/>");
};
buf.push("<!-- Editor Inputs-->");






































































jade_mixins["reset-pwd-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-reset-pwd\">Reset password</button>");
};
jade_mixins["sign-up-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button type=\"submit\" id=\"btn-sign-up\" class=\"full-width\">Sign Up</button>");
};
buf.push("<section class=\"row__label\"><div class=\"label\">Sign Up</div></section><section class=\"row\"><form id=\"sign-up-form\" action=\"/flare/user/sign-up\"><div class=\"input-field\">");
jade_mixins["username-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["email-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["password-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["confirm-password-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["first-name-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["last-name-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["company-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["title-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["country-input"]();
buf.push("</div><div class=\"input-field\">");
jade_mixins["state-input"]();
buf.push("</div><div class=\"conditions\"><p>By signing up, you agree to our <a href=\"/misc/terms-and-conditions\">Terms and Conditions</a>.</p>\n</div><div class=\"button-field\">");
jade_mixins["sign-up-button"]();
buf.push("</div></form></section></section></div></section>");}.call(this,"viewModel" in locals_for_with?locals_for_with.viewModel:typeof viewModel!=="undefined"?viewModel:undefined));;return buf.join("");
}

function jade_terms_and_conditions(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (phase, technology, type) {
buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_in-->");






jade_mixins["article-info"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<section class=\"row__label\"><div class=\"label\">Relates to:</div></section><section class=\"row\"><ul class=\"display-inline\"><li>");
jade_mixins["show-icon"]('Technology', technology);
buf.push("<span class=\"text\">" + (jade.escape(null == (jade_interp = technology) ? "" : jade_interp)) + "</span></li><li>");
jade_mixins["show-icon"]('Phase', phase);
buf.push("</li><li>");
jade_mixins["show-icon"]('Type', type);
buf.push("</li></ul></section><section class=\"row__label\"><div class=\"label\">Belongs to:</div></section><section class=\"row\"><ul><li><a href=\"/flare/curated-content\">");
jade_mixins["curated-content-icon"]();
buf.push("<span class=\"text\">Curated Content</span></a></li></ul><!--ul.display-inlineli.half-width\n  +save-button\nli.half-width\n  +share-button\n--></section>");
};




buf.push("<!-- Terms and Conditions Navigation-->");
jade_mixins["terms-and-conditions-navigation"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<dl><dt><div class=\"label no-underline\">Terms & Conditions</div></dt><div class=\"scroll\"><dd><a href=\"#article-i-definitions\">Article I - Definitions</a></dd><dd><a href=\"#article-ii-deliverables\">Article II - Deliverables</a></dd><dd><a href=\"#article-iii-license-grant\">Article III - License Grant</a></dd><dd><a href=\"#article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</a></dd><dd><a href=\"#article-v-trademarks\">Article V - Trademarks</a></dd><dd><a href=\"#article-vi-support\">Article VI - Support</a></dd><dd><a href=\"#article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</a></dd><dd><a href=\"#article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</a></dd><dd><a href=\"#article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</a></dd><dd><a href=\"#article-x-assignment\">Article X - Assignment</a></dd><dd><a href=\"#article-xi-confidentiality\">Article XI - Confidentiality</a></dd><dd><a href=\"#article-xii-warranties\">Article XII - Warranties</a></dd><dd><a href=\"#article-xiii-indemnities\">Article XIII - Indemnities</a></dd><dd><a href=\"#article-xiv-limitations\">Article XIV - Limitations</a></dd><dd><a href=\"#article-xv-term-of-agreement\">Article XV - Term of Agreement</a></dd><dd><a href=\"#article-xvi-termination\">Article XVI - Termination</a></dd><dd><a href=\"#article-xvii-effect-of-termination\">Article XVII - Effect of Termination</a></dd><dd><a href=\"#article-xviii-general-provisions\">Article XVIII - General Provisions</a></dd></div></dl>");
};
buf.push("<div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><section class=\"row\"><div class=\"col-3\">");
jade_mixins["terms-and-conditions-navigation"]();
buf.push("</div><div class=\"col-9\"><section class=\"row\"><article><h2 id=\"software-product-license-agreement\">Software Product License Agreement</h2>\n<h3 id=\"important-information-please-read-carefully\">Important Information - Please Read Carefully</h3>\n<p>This Security Innovation (“Security Innovation”) software or software application contains computer programs and other proprietary material and information, the use of which is subject to and expressly conditioned upon acceptance of this License (the “License”).</p>\n<p>This License is a legally binding document between you (meaning the individual person or the entity that the individual represents that has obtained the Software for its internal productive use and not for outright resale) (the “Customer”) and Security Innovation.  Unless agrees otherwise in writing, this License governs Customer&#39;s use of the software or software application.</p>\n<p>By proceeding with the user registration, installation, downloading, use or reproduction of this software or software application, or authorizing any other person to do so, you are representing to Security Innovation that you are (i) authorized to bind the Customer; and (ii) agreeing on behalf of the Customer that the terms of this License shall govern your relationship with Security Innovation with regard to the subject matter in this License and are waiving any rights, to the maximum extent permitted by applicable law, to any claim anywhere in the world concerning the enforceability or validity of this License.</p>\n<p>If you do not have authority to agree to the terms of this License on behalf of the Customer, or do not accept the terms of this License on behalf of the Customer, immediately cease any further attempt to install, download or use this software or software application for any purpose, and remove any partial or full copies made thereof.</p>\n<h4 id=\"article-i-definitions\">Article I - Definitions</h4>\n<p>For the purposes of this Agreement, the following words and phrases shall have the following meanings:</p>\n<p>1.1 “Affiliate” means any corporation, company, partnership, joint venture, firm and/or entity which controls, is controlled by or is under common control with Licensee.</p>\n<p>1.2    “Confidential Information” means all materials, trade secrets, or other information regarding a party’s technology, products, business information, or objectives which is designated as confidential in writing by the disclosing party, whether by letter or by the use of an appropriate stamp or legend, prior to or at the time any such material, trade secret, or other information is disclosed by the disclosing party to the other party. Notwithstanding the foregoing to the contrary: (a) materials, trade secrets, or other information which is orally, electronically or visually disclosed by a party, or is disclosed in writing without an appropriate letter, stamp, or legend, shall constitute Confidential Information if the disclosing party, within thirty (30) days after such disclosure, delivers to the other party a written document or document describing the materials, trade secrets, or other information and referencing the place and date of such oral, electronic, visual or written disclosure and the names of the person or persons to whom such disclosure was made; and (b) information obtained by either party while visiting the other party’s facility, however obtained, shall constitute Confidential Information of the other Party.</p>\n<p>1.3    “Deliverables” means the items listed in an Order to be delivered by Security Innovation to Licensee pursuant to Article II of this Agreement.</p>\n<p>1.4    &quot;End User&quot; means a direct employee or affiliate employee of Licensee who consumes paid for Licensed Security Innovation Product, or an individual who purchases and consumes Licensed Security Innovation Product, for use within the bounds of this agreement.</p>\n<p>1.5     “Licensee” means the organization or individual with a paid up and active subscription to the Security Innovation Product.</p>\n<p>1.6    &quot;Security Innovation Product&quot; means Security Innovation&#39;s proprietary multimedia training and reference systems and includes Security Innovation proprietary content and the software delivery system including, but not limited to: Safelight, PCI Essentials, TEAM Professor, TEAM Mentor and TEAM Academy.</p>\n<p>1.7    “Internal” means within the Licensee organization and not part of a public or external event where the Security Innovation Product is used to train individuals who are not End-Users.</p>\n<p>1.8    “Permitted use” means the following application usage activities:</p>\n<ul>\n<li>(a) Internal training of Licensee employees</li>\n<li>(b) Internal training of Licensee affiliates</li>\n<li>(c) For training a Licensee</li>\n</ul>\n<p>1.9    “On-Site” means Security Innovation Product is installed at the Licensee’s facilities in a private Learning Management System (LMS).</p>\n<p>1.10    “Hosted” means Security Innovation Product and student data is held on and delivered from the Security Innovation secure online LMS.</p>\n<p>1.11    “Subscription” means an annually renewable license for a specific number of End-Users and specified Content, Hosted or On-Site, for a fixed fee. A subscription includes maintenance and support, but not installation or customization costs, as part of the annual fixed fee.</p>\n<p>1.12    “Enterprise” means an annually renewable license for an unlimited number of End-Users and specified Content, Hosted or On-Site, within an organization for an annual fixed-fee, not including installation or customization costs.</p>\n<p>1.13    “Order” means a purchase order, signed sales proposal, e-Commerce transaction, or other ordering document issued by Licensee or individual to Security Innovation, its distributors, resellers or other agents, and describing the quantity and type of Security Innovation Product.</p>\n<p>1.14    “Effective Date” means the date the Order takes place.</p>\n<h4 id=\"article-ii-deliverables\">Article II - Deliverables</h4>\n<h5 id=\"2-1-delivery\">2.1    Delivery</h5>\n<p>Within 30 days following the later of the Effective Date and receipt of any agreed upon initial payments by Licensee pursuant to Section 7.1, Security Innovation shall provide the Deliverables to Licensee.</p>\n<h4 id=\"article-iii-license-grant\">Article III - License Grant</h4>\n<h5 id=\"3-1-licenses\">3.1    Licenses</h5>\n<p>Subject to the terms and conditions of this Agreement, Security Innovation hereby grants to the Licensee a worldwide, nonexclusive, non-transferable, license:</p>\n<ul>\n<li>(a) To use the Security Innovation Product internally on Licensee’s LMS to train End Users or;</li>\n<li>(b) To use the software internally via Security Innovation’s secure online LMS to train End Users or;</li>\n<li>(c) To use the Security Innovation Product personally</li>\n</ul>\n<h5 id=\"3-2-no-other-rights\">3.2    No Other Rights</h5>\n<p>Licensee hereby acknowledges that it shall have no right to sell, convey, transfer, license, sublicense, modify, or otherwise dispose of Security Innovation Product, except as provided herein.  Licensee further acknowledges that its rights are limited to those of a licensee only, and that:</p>\n<ul>\n<li>(i) Security Innovation retains all title to and intellectual property rights in the Security Innovation Product;</li>\n<li>(ii) nothing herein shall be construed as granting Licensee any right, title and interest other than as specifically set forth herein; and</li>\n<li>(iii) nothing herein shall be construed as granting any group, division or Affiliate of Licensee any right, title and interest or license to use Security Innovation Product.</li>\n</ul>\n<h5 id=\"3-3-license-limitations\">3.3    License Limitations</h5>\n<p>The licenses granted in Section 3.1 are subject to the following additional limitations:</p>\n<ul>\n<li>(a) Licensee may not in any way sell, lease, rent, license, sublicense or otherwise distribute the Security Innovation Product or any part thereof or the right to use any part of the Security Innovation Product to any person or entity</li>\n<li>(b) Without Security Innovation’s prior written consent, Licensee shall not modify, translate, reverse engineer, decompile, disassemble or recreate the Security Innovation Product or any part thereof, and shall prohibit End Users from doing the same.</li>\n<li>(c) The licenses granted herein do not permit Licensee to provide services to third parties utilizing Licensee Products or the Security Innovation Product.</li>\n</ul>\n<h5 id=\"3-4-third-party-agents\">3.4    Third Party Agents</h5>\n<p>Under the License granted in this Article III (License Grant), Licensee may permit its Third Party Agents to be treated as an End User and use the Software provided that Licensee will be fully responsible for its Third Party Agents’ compliance with terms and conditions of this Agreement and any breach of this Agreement by a Third Party Agent shall be deemed to be a breach by Licensee.</p>\n<h4 id=\"article-iv-ownership-of-intellectual-property\">Article IV - Ownership of Intellectual Property</h4>\n<h5 id=\"4-1-ownership\">4.1    Ownership</h5>\n<p>With respect to the intellectual property of Security Innovation and Licensee relating to this Agreement:</p>\n<ul>\n<li>(a) any intellectual property developed by Security Innovation or Licensee prior to the Effective Date shall remain the intellectual property of that party.</li>\n<li>(b) any intellectual property that is developed solely by Security Innovation, and relevant to the scope of this Agreement (including, without limitation, the Security Innovation Product) shall remain the intellectual property of Security Innovation.</li>\n</ul>\n<h4 id=\"article-v-trademarks\">Article V - Trademarks</h4>\n<h5 id=\"5-1-use-of-security-innovation-trademarks\">5.1 Use of Security Innovation Trademarks</h5>\n<p>Security Innovation hereby grants to Licensee a non-exclusive, limited license to use the applicable Security Innovation trademarks and logos (“Trademarks”) solely as permitted in this Agreement.  Licensee understands and agrees that the use of any Trademark in connection with this Agreement shall not create any right, title or interest, in or to the use of the Trademark and that all such use and goodwill associated with the Trademark will inure to the benefit of Security Innovation.  Licensee agrees not to register or attempt to register any Security Innovation Trademarks. All trademarks, service marks, trade names, logos, or other words or symbols identifying or associated with the Software or the business of Security Innovation (“Marks”) remain the exclusive property of Security Innovation and its Licensors. Licensee will not do anything to impair those proprietary rights or seek to acquire or register any rights in the Marks or use any trademarks, service marks, trade names, logos or other words or symbols that are confusingly similar to the Marks in any language.</p>\n<h4 id=\"article-vi-support\">Article VI - Support</h4>\n<h5 id=\"6-1-technical-support-and-maintenance\">6.1    Technical Support and Maintenance</h5>\n<p>Security Innovation shall provide support and maintenance services specified in the Security Innovation Service Level Agreement (SLA).</p>\n<h4 id=\"article-vii-fees-royalties-and-payments\">Article VII - Fees, Royalties and Payments</h4>\n<p>In consideration of the licenses granted by Security Innovation and the Support Services provided by Security Innovation to Licensee in this Agreement, Licensee agrees to pay to Security Innovation a license fee as follows:</p>\n<h5 id=\"7-1-license-fee\">7.1    License Fee</h5>\n<p>In consideration of Security Innovation&#39;s delivery of the Deliverables, Licensee agrees to pay to Security Innovation a license fee as defined in the Order.</p>\n<h5 id=\"7-2-taxes\">7.2    Taxes</h5>\n<p>Licensee will pay all government taxes, duties and tariffs not based on either Security Innovation&#39;s net income from all sources or Security Innovation&#39;s aggregate net worth, including, but not limited to, sales, use, transfer, value-added, privilege, property taxes, import and export duties or tariffs, or amounts levied in lieu thereof, based on charges payable under this Agreement whether such taxes and duties are now or hereafter imposed under the authority of any federal, state, local or other taxing jurisdiction.  Licensee will comply with all requirements of the laws imposing such taxes and duties, including, without limitation, paying any interest or penalties relating to such taxes and duties.  If applicable, Licensee will provide Security Innovation with a Certificate of Exemption issued pursuant to such laws.</p>\n<h4 id=\"article-viii-records-reports-and-audit-rights\">Article VIII - Records, Reports and Audit Rights</h4>\n<h5 id=\"8-1-records\">8.1    Records</h5>\n<p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, Licensee shall keep all records of account as are necessary to demonstrate compliance with its obligations under Article VIII for a period of three years from the due date for the payment of such sums as are payable in accordance with Article VIII (the “Audit period.”).</p>\n<h5 id=\"8-2-reports\">8.2    Reports</h5>\n<p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, within thirty (30) days after the last business day of each calendar quarter, Licensee shall provide Security Innovation with a written user count report should the user count exceed the count purchased by Licensee. Such report, at a minimum, shall contain information detailing the number of users and the number of courses consumed.</p>\n<h5 id=\"8-3-audit-rights\">8.3    Audit Rights</h5>\n<p>Should the Security Innovation Product be On-Site and not monitored using a Security Innovation license management system, to assure compliance with the payment and reporting requirements of this Agreement, Security Innovation or an independent auditor of its choosing may examine, inspect and audit the applicable records of Licensee and its Affiliates from time to time, but no more frequently than twice per year.  In the event any such audit of Licensee’s records indicates an underpayment of an amount equal to or greater than five percent (5%) of any amounts due hereunder, Licensee shall promptly reimburse Security Innovation for the costs of such audit.  Licensee and its Affiliates shall also immediately pay any underpayment in the amounts due to Security Innovation ascertained from such audit.  The provisions of this Section shall survive expiration or termination of this Agreement.</p>\n<h4 id=\"article-ix-license-administrative-contacts\">Article IX - License Administrative Contacts</h4>\n<h5 id=\"9-1-non-electronic-notices\">9.1    Non-Electronic Notices</h5>\n<p>Any notice or other non-electronic communication pursuant to this Agreement shall be sent to such party by overnight courier, or regular mail, addressed to the address below or as it shall designate by written notice given to the other party. Any such communication shall be effective upon receipt by the party to whom it is addressed.</p>\n<p>Notices to Security Innovation shall be addressed to:</p>\n<pre><code>SECURITY INNOVATION, Inc.\n187 Ballardvale St, Suite A202\nWilmington, MA  01887 USA\nAttn: Ombudsman\n</code></pre><h5 id=\"9-2-electronic-notices\">9.2    Electronic Notices</h5>\n<p>Any notice or electronic communication pursuant to this agreement shall be sent containing an appropriate and correctly attached digital certificate identifying the sender in non-repudiable terms to:</p>\n<pre><code>ombudsman@securityinnovation.com\n</code></pre><h4 id=\"article-x-assignment\">Article X - Assignment</h4>\n<h5 id=\"10-1-assignment\">10.1    Assignment</h5>\n<p>This Agreement and the license contained herein are personal to Licensee and may not be assigned or transferred by Licensee, without the prior written consent of Security Innovation.  For purposes hereof, an “assignment” shall include any change in control of Licensee whereby another person or entity acquires 50% or greater ownership of Licensee.  For the avoidance of doubt, reassignment assumes changes to the relevant user data used to identify students, the changing of which must be managed by Security Innovation so as to not interrupt service.</p>\n<h4 id=\"article-xi-confidentiality\">Article XI - Confidentiality</h4>\n<h5 id=\"11-1-treatment-of-confidential-information\">11.1    Treatment of Confidential Information</h5>\n<p>Each party hereto shall maintain the Confidential Information of the other party in confidence, and shall not disclose, divulge, or otherwise communicate such Confidential Information, including but not limited to the terms of this Agreement, to others, or use it for any purpose, except pursuant to, and in order to carry out, the terms and objectives of this Agreement or the written consent of the other party. Each party hereby agrees to exercise every reasonable precaution to prevent and restrain the unauthorized disclosure of such Confidential Information by any of its directors, officers, employees, consultants, subcontractors, licensees, or agents.</p>\n<h5 id=\"11-2-release-from-restrictions\">11.2    Release from Restrictions</h5>\n<p>The provisions of Section 11.1 shall not apply to Confidential Information disclosed hereunder which;</p>\n<ul>\n<li>(a) was known or used by the receiving party prior to its date of disclosure to the receiving party; or</li>\n<li>(b) either before or after the date of disclosure to the receiving party is lawfully disclosed to the receiving party by sources rightfully in possession of such Confidential Information other than the disclosing party; or</li>\n<li>(c) either before or after the date of disclosure to the receiving party, becomes published or generally known to the public, through no fault of the receiving party, its Affiliates or sub-licensees; or</li>\n<li>(d) is required to be disclosed by the receiving party to comply with applicable laws or applicable rules of any securities exchange on which the receiving party’s securities are traded, to defend or prosecute litigation, or to comply with governmental regulations, provided however that the receiving party provides prior written notice of such disclosure to the other party and takes reasonable and lawful actions to avoid and/or minimize the degree of such disclosure.</li>\n</ul>\n<h4 id=\"article-xii-warranties\">Article XII - Warranties</h4>\n<h5 id=\"12-1-representations-and-warranties-of-security-innovation\">12.1    Representations and Warranties of Security Innovation</h5>\n<ul>\n<li>(a) Security Innovation represents and warrants to Licensee that all corporate action on the part of Security Innovation, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Security Innovation hereunder has been taken and this Agreement constitutes the legal and binding obligation of Security Innovation, enforceable against Security Innovation in accordance with its terms.</li>\n<li>(b) Security Innovation further represents and warrants to Licensee that:  (i) it has sufficient right, title and interest in the Security Innovation Product to enter into this Agreement; and (ii) the Security Innovation Product is the original work of Security Innovation and its licensors and was developed without unauthorized access to or knowledge of any third party confidential materials.</li>\n<li>(c) THE SECURITY INNOVATION PRODUCT AND THE DELIVERABLES ARE PROVIDED AS IS.  SECURITY INNOVATION DISCLAIMS ALL OTHER WARRANTIES, WHETHER EXPRESS OR IMPLIED WITH RESPECT TO THE SECURITY INNOVATION PRODUCT OR THE DELIVERABLES.</li>\n</ul>\n<h5 id=\"12-2-representations-and-warranties-of-licensee\">12.2    Representations and Warranties of Licensee</h5>\n<p>Licensee represents and warrants to Security Innovation that all corporate action on the part of Licensee, its officers, directors and stockholders necessary for:  (i) the authorization, execution and delivery of this Agreement and (ii) the performance of all obligations of Licensee hereunder has been taken and this Agreement constitutes the legal and binding obligation of Licensee, enforceable against Licensee in accordance with its terms. The execution of this Agreement and the performance of the transactions contemplated by this Agreement by Licensee will not conflict with or result in a breach of any of the terms, conditions or provisions of, or constitute a default under, or require a consent under its Certificate of Incorporation or Bylaws (as amended or restated to date) or any agreement or other instrument to which Licensee is a party or by which it or any of its property is bound.</p>\n<h4 id=\"article-xiii-indemnities\">Article XIII - Indemnities</h4>\n<h5 id=\"13-1-infringement-indemnification-by-security-innovation\">13.1    Infringement Indemnification by Security Innovation</h5>\n<p>Security Innovation agrees that it shall, at its own expense, defend, or at its option settle, any action or claim instituted against Licensee, and pay any award or damages assessed or settled upon against Licensee resulting from such action or claim, insofar as the same is based upon a claim that the Security Innovation Product as delivered to Licensee infringes any patent, trademark, copyright or trade secret of a third party or a claim that Security Innovation has no right to license the Security Innovation Product to Licensee hereunder.  Such obligation is subject to the following conditions:  (i) Licensee shall notify Security Innovation in writing immediately after Licensee first becomes aware of a claim; (ii) Security Innovation shall have the right to control and direct the investigation, preparation, defense and settlement of the action; and (iii) Licensee shall give Security Innovation all reasonably available information, assistance and authority.  The foregoing indemnity shall not apply if the alleged infringement claim arises from use of other than the current unaltered release of the Security Innovation Product, or combination of the Security Innovation Product with other software or hardware not provided by Security Innovation, if such action would have been avoided but for such use or combination.</p>\n<h5 id=\"13-2-exclusive-sole-remedy\">13.2.    Exclusive Sole Remedy</h5>\n<p>If as a result of any binding settlement among the parties or a final determination by a court of competent jurisdiction, the Security Innovation Product is held to infringe a third party’s patent, trademark, copyright or trade secret and its use is enjoined, or if Security Innovation reasonably determines in its sole discretion that the Software may become subject to an injunction, Security Innovation shall have the option to:  (a) obtain for Licensee the right to continued use of the Security Innovation Product;  (b) replace or modify the Security Innovation Product so it is no longer infringing and is substantially similar in functionality to the enjoined Security Innovation Product; or (c)  refund the license fees paid by Licensee hereunder less depreciation for use assuming straight line depreciation over a five year useful life and terminate this Agreement.   NOTWITHSTANDING ANYTHING TO THE CONTRARY IN THIS AGREEMENT, THE FOREGOING STATES SECURITY INNOVATION&#39;S ENTIRE LIABILITY AND LICENSEE&#39;S SOLE AND EXCLUSIVE REMEDY WITH RESPECT TO CLAIMS OF INFRINGEMENT OF THIRD PARTY PROPRIETARY OR INTELLECTUAL PROPERTY RIGHTS OF ANY KIND, AND SECURITY INNOVATION EXPRESSLY DISCLAIMS ANY IMPLIED WARRANTY OF NON-INFRINGEMENT.</p>\n<h4 id=\"article-xiv-limitations\">Article XIV - Limitations</h4>\n<h5 id=\"14-1-limitation-of-liability\">14.1.    Limitation of Liability</h5>\n<ul>\n<li>(a) Nothing in this Agreement shall exclude or limit liability for death or personal injury resulting from the failure of a party to exercise reasonable care in the performance of its obligations under this Agreement.</li>\n<li>(b) THE AGGREGATE LIABILITY OF SECURITY INNOVATION UNDER ANY CLAIMS ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT OR THE PERFORMANCE OF THEIR OBLIGATIONS UNDER THIS AGREEMENT (WHETHER IN CONTRACT, TORT, NEGLIGENCE, WARRANTY OR OTHERWISE) SHALL NOT EXCEED THE AMOUNT THEN PAYABLE TO SECURITY INNOVATION BY LICENSEE UNDER THIS AGREEMENT.</li>\n</ul>\n<h5 id=\"14-2-limitation-of-damages\">14.2    Limitation of Damages</h5>\n<p>IN ANY EVENT, NEITHER PARTY SHALL BE LIABLE TO THE OTHER FOR LOST PROFITS OR LOSS OF BUSINESS OR FOR ANY ECONOMIC LOSS OR FOR SPECIAL, INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES, REGARDLESS OF THE FORM OF ACTION, EVEN IF SUCH PARTY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>\n<h4 id=\"article-xv-term-of-agreement\">Article XV - Term of Agreement</h4>\n<h5 id=\"15-1-term\">15.1    Term</h5>\n<p>This Agreement shall be effective as of the Effective Date. Unless earlier terminated upon the mutual agreement of the Parties or in accordance with the provisions of Article XVI, or otherwise specified in the Order, this Agreement shall continue in force for one (1) year from the Effective Date.</p>\n<h4 id=\"article-xvi-termination\">Article XVI - Termination</h4>\n<h5 id=\"16-1-termination-for-insolvency\">16.1    Termination for Insolvency</h5>\n<p>If Licensee shall cease to carry on its business for any reason, be liquidated or dissolved, become insolvent, enter into an agreement for the benefit of its creditors, or file any petition or case under any bankruptcy law or if any such petition or case is filed against it which remains undismissed after sixty (60) days, then this Agreement and all rights, privileges and license granted hereunder shall terminate.</p>\n<h5 id=\"16-2-termination-for-breach\">16.2    Termination for Breach</h5>\n<p>Upon any material breach or default of this Agreement by either party, the non-breaching party shall have the right to terminate this Agreement upon forty-five (45) days’ written notice to the breaching party, unless the breaching party shall have cured any such breach or default prior to the expiration of such sixty (60) day period.</p>\n<h4 id=\"article-xvii-effect-of-termination\">Article XVII - Effect of Termination</h4>\n<h5 id=\"17-1-consequences-of-termination\">17.1    Consequences of Termination</h5>\n<p>Upon termination of this Agreement for any reason, all rights, privileges and licenses granted hereunder shall immediately cease, provided, however, that nothing herein shall be construed to release either party from any obligation that accrued or matured prior to the effective date of such termination.  Upon termination of this Agreement for any reason, Licensee agrees to immediately cease use of all Security Innovation Product and to cease use of all Confidential Information of Security Innovation, and to return all Confidential Information of Security Innovation to Security Innovation.</p>\n<p>Any termination or expiration of this Agreement shall not affect any accrued rights or liabilities of either party. The obligations of each party under Sections 4, 5, 8, 10, 11, 13, 14, 16, 17 and 18 shall survive termination or expiration of this agreement.</p>\n<h4 id=\"article-xviii-general-provisions\">Article XVIII - General Provisions</h4>\n<h5 id=\"18-1-governing-law\">18.1    Governing Law</h5>\n<p>This Agreement shall be construed, governed, interpreted and applied in accordance with the laws of the Commonwealth of Massachusetts, United States of America and the federal laws of the United States, without giving effect to any conflict of laws principles.</p>\n<h5 id=\"18-2-injunctive-relief\">18.2    Injunctive Relief</h5>\n<p>It is expressly agreed that a material breach of this Agreement will cause irreparable harm to Security Innovation and that a remedy at law would be inadequate.  Therefore, in addition to any and all remedies available at law, Security Innovation and/or Security Innovation Licensors shall be entitled to seek injunctive relief against Licensee in the event of any threatened or actual violation of any or all provisions in this Agreement.</p>\n<h5 id=\"18-3-severability\">18.3    Severability</h5>\n<p>The provisions of this Agreement are severable, and in the event that any provisions of this Agreement shall be determined to be invalid or unenforceable under any controlling body of the law, such invalidity or unenforceability shall not in any way affect the validity or enforceability of the remaining provisions hereof.</p>\n<h5 id=\"18-4-no-waiver\">18.4    No Waiver</h5>\n<p>The failure of either party to assert a right hereunder or to insist upon compliance with any term or condition of this Agreement shall not constitute a waiver of that right or excuse a similar subsequent failure to perform any such term or condition by the other Party.</p>\n<h5 id=\"18-5-u-s-government-restricted-rights\">18.5 U.S. GOVERNMENT RESTRICTED RIGHTS</h5>\n<p>If the Security Innovation Product is acquired on behalf of a unit or agency of the United States Government this provision applies.</p>\n<p>For units of the Department of Defense (DoD), this Software is supplied only with “Restricted Rights” as that term is defined in the DoD Supplement to the Federal Acquisition Regulations, 52.227-7013(c)(1)(ii) and:</p>\n<pre><code>Use, duplication or disclosure by the Government is subject to restrictions as set forth in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 52.227-7013. Contractor: SECURITY INNOVATION, Inc., 187 Ballardvale Street, Suite 202, Wilmington, MA 01887\n</code></pre><p>Government personnel using this Software, other than under a DoD contract or GSA Schedule, are hereby on notice that use of this Software is subject to restricted rights, which are the same as, or similar to those specified above.</p>\n<h5 id=\"18-6-export-controls\">18.6    Export Controls</h5>\n<ul>\n<li>(a) The Security Innovation Products are eligible for (and are being exported under) License Exception ENC of the Export Administration Regulations C.F.R. 740.17 and Security Innovation have submitted all notifications required to establish such eligibility.  Licensee agrees to make only such uses of the Security Innovation Products, as are in compliance with that status. Without limiting the forgoing, Licensee agrees: (i) not to develop any foreign products using the [Security Innovation Product(s)]; and (ii) not to modify the Security Innovation Products, in such a way as to add or substitute cryptographic algorithms or otherwise modify the encryption functionality of such products.</li>\n<li>(b) Licensee shall not re-export any Security Innovation Product to any destination or end user in violation of any acceptable laws or regulations of the United States government.  Licensee shall be solely responsible for compliance with all such laws and regulations and for obtaining any and all export or import licenses or permits that may be required from Licensee to lawfully conduct its business with respect to the Security Innovation Products,</li>\n<li>(c) Licensee shall obtain all necessary licenses and authorizations for governments or other relevant bodies to enable Licensee to fulfill its obligations under this Agreement, which shall include, but not be limited to, customs clearances, registration of the Agreement if appropriate, export licenses, exchange control clearances, trading permits and registration for Value Added Tax (VAT) or its equivalent.</li>\n</ul>\n<h5 id=\"18-7-no-use-of-names\">18.7    No Use of Names</h5>\n<p>Except as expressly permitted by this Agreement, neither party shall use the name of the other party or any of its employees nor any adaptation thereof in any advertising, promotion or sales literature without the prior written consent of the other party.</p>\n<h5 id=\"18-8-no-agency\">18.8    No Agency</h5>\n<p>Nothing herein shall be deemed to constitute Security Innovation, on the one hand, or Licensee, on the other hand, as the agent or representative of the other, or as joint venturers or partners for any purpose.</p>\n<h5 id=\"18-9-headings\">18.9    Headings</h5>\n<p>The headings contained in this Agreement are for convenience of reference only and shall not be considered in construing this Agreement.</p>\n<h5 id=\"18-10-successors-and-assigns\">18.10    Successors and Assigns</h5>\n<p>This Agreement shall be binding upon and inure to the benefit of the Parties and their successors and permitted assigns.</p>\n<h5 id=\"18-11-third-party-rights\">18.11    Third Party Rights</h5>\n<p>Other than as expressly set out in this Agreement, this Agreement does not create any rights for any person who is not a party to it, and no person who is not a party to this Agreement may enforce any of its terms or rely on any exclusion or limitation contained in it.</p>\n<h5 id=\"18-12-counterparts\">18.12    Counterparts</h5>\n<p>This Agreement may be executed in any number of counterparts, each of which shall be deemed an original but all of such together shall constitute one and the same instrument.</p>\n<h5 id=\"18-13-force-majeure\">18.13    Force Majeure</h5>\n<p>Neither party shall be liable hereunder by reason of any failure or delay in the performance of its obligations hereunder (except for the payment of money) on account of strikes, shortages, failure of suppliers, riots, insurrection, fires, floods, storms, earthquakes, acts of God, war, governmental action, labor conditions, or any other cause which is beyond the reasonable control of such party.  If such failure or delay continues for at least ninety (90) days, the party not subject to the force majeure shall be entitled to terminate this Agreement by notice in writing to the other.</p>\n<h5 id=\"18-14-entire-agreement\">18.14 Entire Agreement</h5>\n<p>The parties acknowledge that this Agreement sets forth the entire Agreement and understanding of the parties as to the subject matter hereof and this Agreement shall not be subject to any change or modification except by the execution of a written instrument executed by both parties.</p>\n</article></section></div></section></main></div>");}.call(this,"phase" in locals_for_with?locals_for_with.phase:typeof phase!=="undefined"?phase:undefined,"technology" in locals_for_with?locals_for_with.technology:typeof technology!=="undefined"?technology:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined));;return buf.join("");
}

function jade_user(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<!--extends ../_to_be_wired_in/_layouts/page_logged_in-->");
jade_mixins["tm-support-email"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<a id=\"tm-support-email\" href=\"mailto:support@securityinnovation.com\">support@securityinnovation.com</a>");
};
















































































































jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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





















































































































































buf.push("<!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




















jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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



















































































































jade_mixins["delete-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete\" class=\"btn-minor icon-Delete\"></button>");
};




jade_mixins["share-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share\" class=\"btn-minor icon-Share\"></button>");
};




jade_mixins["delete-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share results\" class=\"btn-result icon-Share\"></button>");
};




















buf.push("<!-- Getting Started-->");








































buf.push("<!-- User Inputs-->");












buf.push("<!-- Editor Inputs-->");






















var head_title = 'TEAM Mentor 4.0'
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




buf.push("<div class=\"application\"><!--include ../component/left_navigation.jade--><!--include ../component/filters.jade--><main><section class=\"row\"><div class=\"col-3\"><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




















jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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







































































































buf.push("<section class=\"row__label\"><div class=\"label\">@username</div></section><section class=\"row\"><form><input type=\"text\" name=\"name\" value=\"First name, Last name\"/><input type=\"text\" name=\"work\" value=\"Position, Company\"/><input type=\"email\" name=\"email\" value=\"Email\"/><button type=\"submit\">");
jade_mixins["tick-icon"]();
buf.push("</button></form></section></div><div class=\"col-9\">");












jade_mixins["delete-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete\" class=\"btn-minor icon-Delete\"></button>");
};




jade_mixins["share-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share\" class=\"btn-minor icon-Share\"></button>");
};




jade_mixins["delete-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share results\" class=\"btn-result icon-Share\"></button>");
};




















buf.push("<section class=\"row__label\"><div class=\"label\">Saved Items</div><ul class=\"display-inline\"><li><a href=\"\" class=\"button btn-result icon-Filter\"></a></li><li>");
jade_mixins["delete-results-button"]();
buf.push("</li><li>");
jade_mixins["share-results-button"]();
buf.push("</li></ul></section><section class=\"row\"><!-- Application Icons-->");








jade_mixins["close-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Close\"></span>");
};
















buf.push("<!--mixin filter-icon--><!--  span.icon-Filter-->");




















jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Search\"></span>");
};




jade_mixins["tick-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Tick\"></span>");
};
jade_mixins["twitter-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span class=\"icon-Twitter\"></span>");
};




buf.push("<!-- Filter Icons-->");




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
buf.push("<!-- filter icons-->");
jade_mixins["search-icon"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<span title=\"Search\" class=\"icon-Search\"><span class=\"path1\"></span><span class=\"path2\"></span><span class=\"path3\"></span></span>");
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



















































































































jade_mixins["delete-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete\" class=\"btn-minor icon-Delete\"></button>");
};




jade_mixins["share-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share\" class=\"btn-minor icon-Share\"></button>");
};




jade_mixins["delete-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share results\" class=\"btn-result icon-Share\"></button>");
};




















buf.push("<article class=\"search-term\"><a href=\"app-keyword-search\">");
jade_mixins["search-icon"]();
buf.push("<span>Search Term</span></a></article><ul class=\"display-inline\"><li>");
jade_mixins["delete-saved-button"]();
buf.push("</li><li>");
jade_mixins["share-saved-button"]();
buf.push("</li></ul></section><section class=\"row\">");












jade_mixins["delete-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete\" class=\"btn-minor icon-Delete\"></button>");
};




jade_mixins["share-saved-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share\" class=\"btn-minor icon-Share\"></button>");
};




jade_mixins["delete-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Delete results from Collection\" class=\"btn-result icon-Delete\"></button>");
};
jade_mixins["share-results-button"] = jade_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
buf.push("<button title=\"Share results\" class=\"btn-result icon-Share\"></button>");
};




















buf.push("<article class=\"result\"><div class=\"metadata\"><ul><li><br/></li><!--li+filter-icon('Type', result.type)--><!--li+filter-icon('Phase', result.phase)--><!--li+filter-icon('Technology', result.technology)--></ul></div><div class=\"summary\"><a href=\"#\"><h3 id=\"article-headline\">Article Headline</h3></a><p>Article Summary</p><ul class=\"display-inline\"><li>");
jade_mixins["delete-saved-button"]();
buf.push("</li><li>");
jade_mixins["share-saved-button"]();
buf.push("</li></ul></div></article></section>");
jade_mixins["copyright"]();
buf.push("</div></section></main></div>");;return buf.join("");
}

