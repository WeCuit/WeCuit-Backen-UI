!function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}System.register(["./index-legacy.69e7a37d.js"],(function(n){"use strict";var t,r;return{setters:[function(e){t=e.a,r=e.r}],execute:function(){n("g",(function(){return t.get("user/info")})),n("p",(function(e){return t.put("user/info",e)}));n("S",function(){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n)}var t,u,o;return t=n,o=[{key:"getPersonTags",value:function(){return r({url:"/api/personal/tags",method:"get",json:!0}).then((function(e){return 0===e.status?Promise.resolve(e):Promise.reject(e)}))}}],(u=null)&&e(t.prototype,u),o&&e(t,o),n}())}}}))}();
