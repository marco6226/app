(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5FHg":function(n,t,r){"use strict";r.r(t),r.d(t,"startHardwareBackButton",function(){return u});var e=r("B5Ai");function u(n){var t=!1;n.document.addEventListener("backbutton",function(){if(!t){var r=[],u=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(n,t){r.push({priority:n,handler:t})}}});if(n.document.dispatchEvent(u),r.length>0){var i,o=Number.MIN_SAFE_INTEGER;r.forEach(function(n){var t=n.priority;t>=o&&(o=t,i=n.handler)}),t=!0,function(n){return e.a(this,void 0,void 0,function(){var t,r;return e.c(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,4]),n?null==(t=n())?[3,2]:[4,t]:[3,2];case 1:e.sent(),e.label=2;case 2:return[3,4];case 3:return r=e.sent(),console.error(r),[3,4];case 4:return[2]}})})}(i).then(function(){return t=!1})}}})}}}]);