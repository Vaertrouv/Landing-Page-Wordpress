!function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e){!function(){t.exports=this.jQuery}()},function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),o=(n(3),n(1)),r=n.n(o);Array.prototype.timedaysIncludes||Object.defineProperty(Array.prototype,"timedaysIncludes",{value:function(t){return!!this.includes(parseInt(t))||!!this.includes(t.toString())}}),function(t,e,n,a){function o(e,n){this.$qlwapp=t(e),this.init(this)}function r(){t("div#qlwapp").qlwapp()}t.fn.simulateClick=function(){return this.each((function(){if("createEvent"in n){var t=this.ownerDocument,e=t.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,t.defaultView,1,0,0,0,0,!1,!1,!1,!1,0,null),this.dispatchEvent(e)}else this.click()}))},o.prototype={timeDateToString:function(t){var e=""+t.getMinutes();return 1===e.length&&(e="0"+e),t.getHours()+":"+e},timeStringToInt:function(t,e){return parseInt(t+e)},init:function(n){var a=this.$qlwapp;if(a.on("qlwapp.init",(function(t){n.mobiledevice=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)})),a.on("qlwapp.time",(function(e){var a=t(e.target),i=a.data("timedays")||[],o=parseInt(a.data("timezone"))||0,r=new Date((new Date).getTime()+60*o*1e3).getUTCDay().toString();if(i&&i.length&&!i.includes(r)){a.addClass("qlwapp-readonly"),a.find(".qlwapp-days").show(),a.find(".qlwapp-time").hide();var p=function(t,e){for(var n=t;n<=6;n++)if(e.timedaysIncludes(n))return n;for(n=0;n<=t;n++)if(e.timedaysIncludes(n))return n}(r,i);return a.find(".day"+p).addClass("qlwapp-available-day"),!0}i&&i.length&&i.includes(r)&&(a.find(".qlwapp-days").hide(),a.find(".qlwapp-time").show());var l=a.data("timefrom")||!1,s=a.data("timeto")||!1;if(!s||!l||l===s)return!0;var d,u,c=new Date,f=-c.getTimezoneOffset()-o,g=new Date,w=new Date;if(d=n.timeStringToInt(l[0],l[1]),u=n.timeStringToInt(l[3],l[4]),w.setHours(d),w.setMinutes(u+f),d=n.timeStringToInt(s[0],s[1]),u=n.timeStringToInt(s[3],s[4]),g.setHours(d),g.setMinutes(u+f),c.getTime()>=w.getTime()&&c.getTime()<=g.getTime()||(a.addClass("qlwapp-readonly"),a.find(".qlwapp-days").hide(),a.find(".qlwapp-time").show()),!o)return!0;a.find(".from").text(n.timeDateToString(w)),a.find(".to").text(n.timeDateToString(g))})),a.on("qlwapp.pro",(function(e){a.find(".qlwapp-toggle").trigger("qlwapp.time"),a.find(".qlwapp-account").each((function(e,n){t(n).trigger("qlwapp.time")}))})),a.on("qlwapp.resize",(function(e){t(this).hasClass("qlwapp-show")&&t(this).trigger("qlwapp.toggle")})),a.on("qlwapp.init",(function(t){n.mobiledevice?a.addClass("mobile").removeClass("desktop"):a.addClass("desktop").removeClass("mobile"),a.addClass("qlwapp-js-ready")})),a.on("qlwapp.init",(function(t){a.hasClass("qlwapp-premium")&&a.trigger("qlwapp.pro")})),a.addClass("qlwapp-js-ready").trigger("qlwapp.init"),a.on("qlwapp.height",(function(a){var i=t(a.delegateTarget),o=i.find(".qlwapp-body").find(".qlwapp-carousel"),r=i.find(".qlwapp-header"),p=i.find(".qlwapp-footer"),l=t(e).innerHeight()-r.outerHeight()-p.outerHeight();n.mobiledevice||(l=.7*t(e).innerHeight()-r.outerHeight()-p.outerHeight()),o.css({"max-height":l+"px"})})),a.on("qlwapp.toggle",(function(e){var n=t(e.delegateTarget),a=n.find(".qlwapp-box");n.addClass("qlwapp-transition"),a.removeClass("response texting"),setTimeout((function(){n.toggleClass("qlwapp-show").trigger("qlwapp.height")}),10),setTimeout((function(){n.toggleClass("qlwapp-transition")}),300)})),a.on("click","[data-action=box], [data-action=close]",(function(e){e.preventDefault(),t(e.delegateTarget).trigger("qlwapp.toggle")})),a.on("click","[data-action=open]",(function(e){var a="https://api.whatsapp.com/send";n.mobiledevice||(a="https://web.whatsapp.com/send");var i=t(this),o=i.data("message")||"",r=i.data("phone")||"";t(this).attr("href",a+"?phone="+r+"&text="+o)})),a.on("click","[data-action=previous]",(function(e){e.preventDefault();var n=t(e.delegateTarget).find(".qlwapp-box");n.addClass("closing"),setTimeout((function(){n.removeClass("response").removeClass("closing"),n.removeClass("texting")}),300)})),a.on("click","[data-action=chat]",(function(e){e.preventDefault();var n=t(this),a=t(e.delegateTarget),i=a.find(".qlwapp-box"),o=n.find(".qlwapp-avatar img").attr("src"),r=n.find(".qlwapp-name").text(),p=n.find(".qlwapp-label").text(),l=n.find(".qlwapp-time").text(),s=n.data("message"),d=n.data("phone");i.addClass("response").addClass("opening"),a.trigger("qlwapp.height"),setTimeout((function(){i.removeClass("opening")}),300);var u=i.find(".qlwapp-reply"),c=i.find(".qlwapp-header"),f=c.find(".qlwapp-avatar img"),g=c.find(".qlwapp-number"),w=c.find(".qlwapp-name"),m=c.find(".qlwapp-label"),h=i.find(".qlwapp-message"),q=l?l+" - "+p:p;u.data("phone",d),f.attr("src",o),f.attr("alt",r),g.html(d),w.html(r),m.html(q),h.html(s)})),a.on("click","textarea",(function(t){a.off("qlwapp.resize")})),a.on("keypress","textarea",(function(t){13==t.keyCode&&setTimeout((function(){a.find(".qlwapp-reply").simulateClick("click")}),100)})),a.on("keyup","[data-action=response]",(function(e){e.preventDefault();var n=t(this).find("textarea"),a=t(this).find("pre"),i=t(this).find(".qlwapp-reply"),o=t(e.delegateTarget).find(".qlwapp-box"),r=o.find(".qlwapp-buttons");a.html(n.val()),setTimeout((function(){o.addClass("texting").css({"padding-bottom":a.outerHeight()}),r.addClass("active");var t=n.val();i.data("message",t),""==t&&(o.removeClass("texting"),r.removeClass("active"))}),300)})),a.hasClass("auto-load")&&t.cookie&&!t.cookie("qlwapp-auto-load")){var i=a.data("autoloadelay");setTimeout((function(){a.trigger("qlwapp.toggle")}),i),t.cookie("qlwapp-auto-load","auto open cookie",{expires:1})}}},t.fn.qlwapp=function(e){var n,a=arguments;return void 0===e||"object"===i()(e)?this.each((function(){t.data(this,"plugin_qlwapp")||t.data(this,"plugin_qlwapp",new o(this,e))})):"string"==typeof e&&"_"!==e[0]&&"init"!==e?(this.each((function(){var i=t.data(this,"plugin_qlwapp");i instanceof o&&"function"==typeof i[e]&&(n=i[e].apply(i,Array.prototype.slice.call(a,1))),"destroy"===e&&t.data(this,"plugin_qlwapp",null)})),void 0!==n?n:this):void 0},r(),t(e).on("load",(function(){r()})),t(e).on("click",(function(e){t(e.target).closest("#qlwapp.qlwapp-show").length||t("div#qlwapp.qlwapp-show").trigger("qlwapp.toggle")})),t(e).on("resize",(function(e){t("div#qlwapp").trigger("qlwapp.resize"),t("div#qlwapp").trigger("qlwapp.init")}))}(r.a,window,document)},function(t,e){}]);