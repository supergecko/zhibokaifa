!function(t){var r={};function e(o){if(r[o])return r[o].exports;var i=r[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,o){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(o,i,function(r){return t[r]}.bind(null,i));return o},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=75)}({0:function(t,r,e){"use strict";function o(t,r,e,o,i,n,p,a,d,l){var g,f="function"==typeof t?t.options:t;if(d){f.components||(f.components={});var s=Object.prototype.hasOwnProperty;for(var c in d)s.call(d,c)&&!s.call(f.components,c)&&(f.components[c]=d[c])}if(l&&((l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(f.mixins||(f.mixins=[])).push(l)),r&&(f.render=r,f.staticRenderFns=e,f._compiled=!0),o&&(f.functional=!0),n&&(f._scopeId="data-v-"+n),p?(g=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(p)},f._ssrRegister=g):i&&(g=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),g)if(f.functional){f._injectStyles=g;var x=f.render;f.render=function(t,r){return g.call(r),x(t,r)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,g):[g]}return{exports:t,options:f}}e.d(r,"a",(function(){return o}))},1:function(t,r){t.exports={iconfont:{fontFamily:"iconfont"},view:{fontSize:"28rpx",lineHeight:1.8,color:"#0E151D"},text:{fontSize:"28rpx",lineHeight:1.8,color:"#0E151D"},row:{marginRight:"-20rpx",marginLeft:"-20rpx",flexWrap:"wrap",flexDirection:"row"},"col-1":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"62.5rpx"},"col-2":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"125rpx"},"col-3":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"187.5rpx"},"col-4":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"250rpx"},"col-5":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"312.5rpx"},"col-6":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"375rpx"},"col-7":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"437.5rpx"},"col-8":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"500rpx"},"col-9":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"562.5rpx"},"col-10":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"625rpx"},"col-11":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"687.5rpx"},"col-12":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"750rpx"},"col-offset-12":{marginLeft:"750rpx"},"col-offset-11":{marginLeft:"687.5rpx"},"col-offset-10":{marginLeft:"625rpx"},"col-offset-9":{marginLeft:"562.5rpx"},"col-offset-8":{marginLeft:"500rpx"},"col-offset-7":{marginLeft:"437.5rpx"},"col-offset-6":{marginLeft:"375rpx"},"col-offset-5":{marginLeft:"312.5rpx"},"col-offset-4":{marginLeft:"250rpx"},"col-offset-3":{marginLeft:"187.5rpx"},"col-offset-2":{marginLeft:"125rpx"},"col-offset-1":{marginLeft:"62.5rpx"},"col-offset-0":{marginLeft:0},flex:{flexDirection:"row",display:"flex",alignItems:"center"},"flex-row":{flexDirection:"row"},"flex-column":{flexDirection:"column"},"flex-row-reverse":{flexDirection:"row-reverse"},"flex-column-reverse":{flexDirection:"column-reverse"},"flex-wrap":{flexWrap:"wrap"},"flex-nowrap":{flexWrap:"nowrap"},"justify-start":{justifyContent:"flex-start"},"justify-end":{justifyContent:"flex-end"},"justify-between":{justifyContent:"space-between"},"justify-center":{justifyContent:"center"},"align-center":{alignItems:"center"},"align-stretch":{alignItems:"stretch"},"align-start":{alignItems:"flex-start"},"align-end":{alignItems:"flex-end"},"flex-1":{flex:1},"flex-2":{flex:2},"flex-3":{flex:3},"flex-4":{flex:4},"flex-5":{flex:5},container:{paddingRight:"20rpx",paddingLeft:"20rpx"},"m-0":{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0},"m-1":{marginTop:"10rpx",marginRight:"10rpx",marginBottom:"10rpx",marginLeft:"10rpx"},"m-2":{marginTop:"20rpx",marginRight:"20rpx",marginBottom:"20rpx",marginLeft:"20rpx"},"m-3":{marginTop:"30rpx",marginRight:"30rpx",marginBottom:"30rpx",marginLeft:"30rpx"},"m-4":{marginTop:"40rpx",marginRight:"40rpx",marginBottom:"40rpx",marginLeft:"40rpx"},"m-5":{marginTop:"50rpx",marginRight:"50rpx",marginBottom:"50rpx",marginLeft:"50rpx"},"mt-0":{marginTop:0},"mt-1":{marginTop:"10rpx"},"mt-2":{marginTop:"20rpx"},"mt-3":{marginTop:"30rpx"},"mt-4":{marginTop:"40rpx"},"mt-5":{marginTop:"50rpx"},"mb-0":{marginBottom:0},"mb-1":{marginBottom:"10rpx"},"mb-2":{marginBottom:"20rpx"},"mb-3":{marginBottom:"30rpx"},"mb-4":{marginBottom:"40rpx"},"mb-5":{marginBottom:"50rpx"},"ml-0":{marginLeft:0},"ml-1":{marginLeft:"10rpx"},"ml-2":{marginLeft:"20rpx"},"ml-3":{marginLeft:"30rpx"},"ml-4":{marginLeft:"40rpx"},"ml-5":{marginLeft:"50rpx"},"mr-0":{marginRight:0},"mr-1":{marginRight:"10rpx"},"mr-2":{marginRight:"20rpx"},"mr-3":{marginRight:"30rpx"},"mr-4":{marginRight:"40rpx"},"mr-5":{marginRight:"50rpx"},"my-0":{marginTop:0,marginBottom:0},"my-1":{marginTop:"10rpx",marginBottom:"10rpx"},"my-2":{marginTop:"20rpx",marginBottom:"20rpx"},"my-3":{marginTop:"30rpx",marginBottom:"30rpx"},"my-4":{marginTop:"40rpx",marginBottom:"40rpx"},"my-5":{marginTop:"50rpx",marginBottom:"50rpx"},"mx-0":{marginLeft:0,marginRight:0},"mx-1":{marginLeft:"10rpx",marginRight:"10rpx"},"mx-2":{marginLeft:"20rpx",marginRight:"20rpx"},"mx-3":{marginLeft:"30rpx",marginRight:"30rpx"},"mx-4":{marginLeft:"40rpx",marginRight:"40rpx"},"mx-5":{marginLeft:"50rpx",marginRight:"50rpx"},"p-0":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},p:{paddingTop:"5rpx",paddingRight:"5rpx",paddingBottom:"5rpx",paddingLeft:"5rpx"},"p-1":{paddingTop:"10rpx",paddingRight:"10rpx",paddingBottom:"10rpx",paddingLeft:"10rpx"},"p-2":{paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"20rpx",paddingLeft:"20rpx"},"p-3":{paddingTop:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx",paddingLeft:"30rpx"},"p-4":{paddingTop:"40rpx",paddingRight:"40rpx",paddingBottom:"40rpx",paddingLeft:"40rpx"},"p-5":{paddingTop:"50rpx",paddingRight:"50rpx",paddingBottom:"50rpx",paddingLeft:"50rpx"},"pt-0":{paddingTop:0},pt:{paddingTop:"5rpx"},"pt-1":{paddingTop:"10rpx"},"pt-2":{paddingTop:"20rpx"},"pt-3":{paddingTop:"30rpx"},"pt-4":{paddingTop:"40rpx"},"pt-5":{paddingTop:"50rpx"},"pb-0":{paddingBottom:0},"pb-1":{paddingBottom:"10rpx"},pb:{paddingBottom:"5rpx"},"pb-2":{paddingBottom:"20rpx"},"pb-3":{paddingBottom:"30rpx"},"pb-4":{paddingBottom:"40rpx"},"pb-5":{paddingBottom:"50rpx"},"pl-0":{paddingLeft:0},pl:{paddingLeft:"5rpx"},"pl-1":{paddingLeft:"10rpx"},"pl-2":{paddingLeft:"20rpx"},"pl-3":{paddingLeft:"30rpx"},"pl-4":{paddingLeft:"40rpx"},"pl-5":{paddingLeft:"50rpx"},"pr-0":{paddingRight:0},pr:{paddingRight:"5rpx"},"pr-1":{paddingRight:"10rpx"},"pr-2":{paddingRight:"20rpx"},"pr-3":{paddingRight:"30rpx"},"pr-4":{paddingRight:"40rpx"},"pr-5":{paddingRight:"50rpx"},"py-0":{paddingTop:0,paddingBottom:0},py:{paddingTop:"5rpx",paddingBottom:"5rpx"},"py-1":{paddingTop:"10rpx",paddingBottom:"10rpx"},"py-2":{paddingTop:"20rpx",paddingBottom:"20rpx"},"py-3":{paddingTop:"30rpx",paddingBottom:"30rpx"},"py-4":{paddingTop:"40rpx",paddingBottom:"40rpx"},"py-5":{paddingTop:"50rpx",paddingBottom:"50rpx"},"px-0":{paddingLeft:0,paddingRight:0},"px-1":{paddingLeft:"10rpx",paddingRight:"10rpx"},px:{paddingLeft:"5rpx",paddingRight:"5rpx"},"px-2":{paddingLeft:"20rpx",paddingRight:"20rpx"},"px-3":{paddingLeft:"30rpx",paddingRight:"30rpx"},"px-4":{paddingLeft:"40rpx",paddingRight:"40rpx"},"px-5":{paddingLeft:"50rpx",paddingRight:"50rpx"},"font-smaller":{fontSize:"15rpx"},"font-small":{fontSize:"20rpx"},"font-sm":{fontSize:"25rpx"},font:{fontSize:"30rpx"},"font-md":{fontSize:"35rpx"},"font-lg":{fontSize:"40rpx"},h1:{fontSize:"80rpx",lineHeight:1.8},h2:{fontSize:"60rpx",lineHeight:1.8},h3:{fontSize:"45rpx",lineHeight:1.8},h4:{fontSize:"32rpx",lineHeight:1.8},h5:{fontSize:"30rpx",lineHeight:1.8},h6:{fontSize:"28rpx",lineHeight:1.8},"text-through":{textDecoration:"line-through"},"text-left":{textAlign:"left"},"text-right":{textAlign:"right"},"text-center":{textAlign:"center"},"text-ellipsis":{lines:1},"font-weight-light":{fontWeight:"300"},"font-weight-lighter":{fontWeight:"100"},"font-weight-normal":{fontWeight:"400"},"font-weight-bold":{fontWeight:"700"},"font-weight-bolder":{fontWeight:"bold"},"font-italic":{fontStyle:"italic"},"text-white":{color:"#ffffff"},"text-primary":{color:"#007bff"},"text-hover-primary":{color:"#0056b3"},"text-secondary":{color:"#6c757d"},"text-hover-secondary":{color:"#494f54"},"text-success":{color:"#28a745"},"text-hover-success":{color:"#19692c"},"text-info":{color:"#17a2b8"},"text-hover-info":{color:"#0f6674"},"text-warning":{color:"#ffc107"},"text-hover-warning":{color:"#ba8b00"},"text-danger":{color:"#dc3545"},"text-hover-danger":{color:"#a71d2a"},"text-light":{color:"#f8f9fa"},"text-hover-light":{color:"#cbd3da"},"text-dark":{color:"#343a40"},"text-hover-dark":{color:"#121416"},"text-body":{color:"#212529"},"text-muted":{color:"#6c757d"},"text-tip":{color:"#A0A0A0"},"text-light-muted":{color:"#A9A5A0"},"text-light-black":{color:"rgba(0,0,0,0.5)"},"text-light-white":{color:"rgba(255,255,255,0.5)"},"bg-primary":{backgroundColor:"#007bff"},"bg-hover-primary":{"backgroundColor:hover":"#0062cc"},"bg-secondary":{backgroundColor:"#6c757d"},"bg-hover-secondary":{"backgroundColor:hover":"#545b62"},"bg-success":{backgroundColor:"#28a745"},"bg-hover-success":{backgroundColor:"#1e7e34"},"bg-info":{backgroundColor:"#17a2b8"},"bg-hover-info":{backgroundColor:"#117a8b"},"bg-warning":{backgroundColor:"#ffc107"},"bg-hover-warning":{backgroundColor:"#d39e00"},"bg-danger":{backgroundColor:"#dc3545"},"bg-hover-danger":{backgroundColor:"#bd2130"},"bg-light":{backgroundColor:"#f8f9fa"},"bg-hover-light":{backgroundColor:"#dae0e5"},"bg-dark":{backgroundColor:"#343a40"},"bg-hover-dark":{backgroundColor:"#1d2124"},"bg-white":{backgroundColor:"#ffffff"},"bg-black":{backgroundColor:"#000000"},"bg-transparent":{backgroundColor:"rgba(0,0,0,0)"},border:{borderWidth:"1rpx",borderStyle:"solid",borderColor:"#88BDE2"},"bg-blue":{backgroundColor:"#88BDE2"},"text-blue":{color:"#88BDE2"},"border-top":{borderTopWidth:"1rpx",borderTopStyle:"solid",borderTopColor:"#dee2e6"},"border-right":{borderRightWidth:"1rpx",borderRightStyle:"solid",borderRightColor:"#dee2e6"},"border-bottom":{borderBottomWidth:"1rpx",borderBottomStyle:"solid",borderBottomColor:"#dee2e6"},"border-left":{borderLeftWidth:"1rpx",borderLeftStyle:"solid",borderLeftColor:"#dee2e6"},"border-0":{borderWidth:0},"border-top-0":{borderTopWidth:0},"border-right-0":{borderRightWidth:0},"border-bottom-0":{borderBottomWidth:0},"border-left-0":{borderLeftWidth:0},"border-primary":{borderColor:"#007bff"},"border-secondary":{borderColor:"#6c757d"},"border-light-secondary":{borderColor:"#E9E8E5"},"border-success":{borderColor:"#28a745"},"border-info":{borderColor:"#17a2b8"},"border-warning":{borderColor:"#ffc107"},"border-danger":{borderColor:"#dc3545"},"border-light":{borderColor:"#f8f9fa"},"border-dark":{borderColor:"#343a40"},"border-white":{borderColor:"#FFFFFF"},rounded:{borderRadius:"8rpx"},"rounded-lg":{borderRadius:"14rpx"},"rounded-top":{borderTopLeftRadius:"8rpx",borderTopRightRadius:"8rpx"},"rounded-top-lg":{borderTopLeftRadius:"14rpx",borderTopRightRadius:"14rpx"},"rounded-right":{borderTopRightRadius:"8rpx",borderBottomRightRadius:"8rpx"},"rounded-bottom":{borderBottomRightRadius:"8rpx",borderBottomLeftRadius:"8rpx"},"rounded-bottom-lg":{borderBottomRightRadius:"14rpx",borderBottomLeftRadius:"14rpx"},"rounded-left":{borderTopLeftRadius:"8rpx",borderBottomLeftRadius:"8rpx"},"rounded-circle":{borderRadius:"100rpx"},"rounded-0":{borderRadius:0},"overflow-hidden":{overflow:"hidden"},"position-relative":{position:"relative"},"position-absolute":{position:"absolute"},"position-fixed":{position:"fixed"},"fixed-top":{position:"fixed",top:0,right:0,left:0,zIndex:1030},"fixed-bottom":{position:"fixed",right:0,bottom:0,left:0,zIndex:1030},"top-0":{top:0},"left-0":{left:0},"right-0":{right:0},"bottom-0":{bottom:0},mask:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:100},"text-main":{color:"#8745FF"},"text-main-hover":{color:"#BA7ACE"},"text-main-disabled":{color:"#BA7ACE"},"bg-main":{backgroundColor:"#8745FF"},"bg-main-hover":{backgroundColor:"#BA7ACE"},"bg-main-disabled":{backgroundColor:"#BA7ACE"},"border-main":{borderColor:"#8745FF"},"btn-main-plain":{borderColor:"#8745FF",borderWidth:"1rpx",borderStyle:"solid",alignItems:"center",justifyContent:"center",color:"#8745FF",paddingTop:"15rpx",paddingBottom:"15rpx",paddingLeft:"20rpx",paddingRight:"20rpx",borderRadius:"8rpx"},"line-h":{lineHeight:1.2},"f-divider":{height:"18rpx",backgroundColor:"#F5F5F4"},color:{color:"#4ca8e7"},fb:{display:"flex",alignItems:"center",justifyContent:"space-between"},ovh:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width:100},logopart:{backgroundColor:"#4ca8e7",width:100,height:"310rpx",paddingTop:"50rpx",boxSizing:"border-box"},logo:{width:"130rpx",height:"130rpx",marginTop:0,marginBottom:0},logotit:{textAlign:"center",fontSize:"36rpx",color:"#ffffff",marginTop:"30rpx",marginBottom:"30rpx"},"@VERSION":2}},10:function(t,r,e){"use strict";function o(t){var r=Object.prototype.toString.call(t);return r.substring(8,r.length-1)}function i(){return"string"==typeof __channelId__&&__channelId__}function n(t,r){switch(o(r)){case"Function":return"function() { [native code] }";default:return r}}Object.defineProperty(r,"__esModule",{value:!0}),r.log=function(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];console[t].apply(console,e)},r.default=function(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];var p=r.shift();if(i())return r.push(r.pop().replace("at ","uni-app:///")),console[p].apply(console,r);var a=r.map((function(t){var r=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===r||"[object array]"===r)try{t="---BEGIN:JSON---"+JSON.stringify(t,n)+"---END:JSON---"}catch(e){t=r}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var e=o(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t})),d="";if(a.length>1){var l=a.pop();d=a.join("---COMMA---"),0===l.indexOf(" at ")?d+=l:d+="---COMMA---"+l}else d=a[0];console[p](d)}},23:function(t,r,e){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(e(24).default,Vue.prototype.__$appStyle__)},24:function(t,r,e){"use strict";e.r(r);var o=e(1),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(r,t,(function(){return o[t]}))}(n);r.default=i.a},44:function(t,r,e){"use strict";var o=e(66),i=e(49),n=e(0);var p=Object(n.a)(i.default,o.b,o.c,!1,null,null,"3d0ae2d6",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(e(71).default,this.options.style):Object.assign(this.options.style,e(71).default)}).call(p),r.default=p.exports},49:function(t,r,e){"use strict";var o=e(50),i=e.n(o);r.default=i.a},50:function(t,r,e){"use strict";(function(t){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var e={data:function(){return{appurl:"http://app.chengguan888.com/public/",payType:1,buywrap:!1,height:"",width:"",mark:!1,url:"",id:"",str:"",test:"1",price:""}},onShow:function(){},onLoad:function(r){this.id=r.id;var e=uni.getSystemInfoSync();this.height=e.windowHeight,this.width=e.windowWidth;t("log","tocheckkkkkkkkkkkk"," at pages/live_detail.nvue:94"),this.tocheck()},methods:{getData:function(){var r=this;uni.request({url:r.appurl+"index.php/api/live/look_zhibo",method:"post",data:{live_id:r.id},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){r.str=JSON.stringify(e),r.url=e.data.data.la_url,t("log",e," at pages/live_detail.nvue:134")}})},topay:function(){var r=this;uni.showLoading({title:"\u52a0\u8f7d\u4e2d\u2026\u2026"});var e=uni.getStorageSync("user");t("log",r.payType," at pages/live_detail.nvue:145"),t("log","app---------------"," at pages/live_detail.nvue:147");1==r.payType?("wxpay",uni.request({url:r.appurl+"index.php/api/pay/buylive",method:"post",data:{uid:e.id,lid:r.id,pay_type:2},success:function(e){uni.hideLoading(),t("log",e.data," at pages/live_detail.nvue:162");var o=e.data;uni.requestPayment({provider:"wxpay",orderInfo:o,success:function(e){uni.showToast({title:"\u652f\u4ed8\u6210\u529f",icon:"none",duration:2e3,complete:function(){r.tocheck()}}),t("log","success:"+JSON.stringify(e)," at pages/live_detail.nvue:177")},fail:function(r){t("log","fail:"+JSON.stringify(r)," at pages/live_detail.nvue:180")}})}})):2==r.payType&&("alipay",uni.request({url:r.appurl+"index.php/api/pay/buylive",method:"post",data:{uid:e.id,lid:r.id,pay_type:1},success:function(e){uni.hideLoading();var o=e.data;uni.requestPayment({provider:"alipay",orderInfo:o,success:function(e){uni.showToast({title:"\u652f\u4ed8\u6210\u529f",icon:"none",duration:2e3,complete:function(){r.tocheck()}}),t("log","success:"+JSON.stringify(e)," at pages/live_detail.nvue:211")},fail:function(r){t("log","fail:"+JSON.stringify(r)," at pages/live_detail.nvue:214")}})}}))},tocheck:function(){var r=this,e=uni.getStorageSync("user");t("log",e," at pages/live_detail.nvue:305"),uni.request({url:r.appurl+"index.php/api/live/checkLivePay",method:"post",data:{uid:e.id,lid:r.id},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(e){if(t("log",e," at pages/live_detail.nvue:317"),500==e.data.code)return r.buywrap=!0,r.price=e.data.datas,!1;r.getData(),r.buywrap=!1}})},radioChange:function(r){t("log",r.detail.value," at pages/live_detail.nvue:330");this.payType=r.detail.value},error:function(t){t&&(this.mark=!0)},retu:function(){uni.navigateBack({delta:1})},returns:function(){uni.navigateBack({delta:1})}}};r.default=e}).call(this,e(10).default)},51:function(t,r){t.exports={fr:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"},fc:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},wrapbox:{width:"650rpx",backgroundColor:"#ffffff",paddingBottom:"40rpx",borderRadius:"10rpx"},tips:{marginBottom:"40rpx"},paybox:{width:"160rpx",marginTop:"30rpx",marginRight:"30rpx",marginBottom:"30rpx",marginLeft:"30rpx"},retu:{width:"30rpx",height:"30rpx",marginRight:"20rpx"},tit:{width:"650rpx",display:"flex",height:"80rpx",alignItems:"center",flexDirection:"row",justifyContent:"space-between",borderBottomColor:"#d6d6d6",borderBottomWidth:"2rpx",borderBottomStyle:"solid",marginBottom:"20rpx"},wrap:{position:"fixed",width:100,height:100,top:0,zIndex:99,left:0,backgroundColor:"rgba(0,0,0,0.8)",color:"#ffffff",paddingTop:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx",paddingLeft:"30rpx",boxSizing:"border-box"},buybtn:{width:"220rpx",height:"72rpx",borderRadius:"36rpx",backgroundColor:"#007AFF",lineHeight:"72rpx",display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",marginTop:"20rpx"},change:{width:100,boxSizing:"border-box"},mark:{alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#FFFFFF"},"mark-text":{paddingRight:"75",fontSize:"20",color:"#333333"},"mark-texts":{lineHeight:"10",fontSize:"14",height:"50",width:"300",color:"#FFFFFF",backgroundColor:"#D4237A"},text:{textAlign:"center",paddingTop:"400",paddingBottom:"50"},back:{width:"60rpx",height:"60rpx",display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"center",position:"fixed",top:"20",left:"20",zIndex:10,borderRadius:"30",backgroundColor:"rgba(0,0,0,0.4)"},"@VERSION":2}},66:function(t,r,e){"use strict";e.d(r,"b",(function(){return o})),e.d(r,"c",(function(){return i})),e.d(r,"a",(function(){}));var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["pag"]},[t.buywrap?e("view",{staticClass:["wrap","fc"],style:{height:t.height+"px",width:t.width+"px"}},[e("view",{staticClass:["wrapbox","fc"]},[e("view",{staticClass:["tit"]},[e("u-text",{appendAsTree:!0,attrs:{append:"tree"}}),e("u-text",{staticStyle:{color:"#333",fontSize:"30rpx"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u652f\u4ed8")]),e("u-image",{staticClass:["retu"],attrs:{src:"../static/close.png"},on:{click:t.retu}})],1),e("view",{staticClass:["tips"]},[e("u-text",{staticStyle:{color:"#333",fontSize:"32rpx"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u89c2\u770b\u76f4\u64ad\u9700\u8981\u652f\u4ed8"+t._s(t.price)+"\u5143")])]),e("radio-group",{staticStyle:{width:"100%"},on:{change:t.radioChange}},[e("view",{staticClass:["fr","change"],style:{width:t.width+"px"}},[e("label",{staticClass:["paybox","fc"]},[e("u-image",{staticStyle:{width:"110rpx",height:"110rpx"},attrs:{src:"../static/wxpay.png"}}),e("radio",{attrs:{value:"1",checked:"true"}})],1),e("label",{staticClass:["paybox","fc"]},[e("u-image",{staticStyle:{width:"110rpx",height:"110rpx"},attrs:{src:"../static/ali.png"}}),e("radio",{attrs:{value:"2"}})],1)],1)]),e("view",{staticClass:["buybtn"],on:{click:t.topay}},[e("u-text",{staticStyle:{color:"#fff",fontSize:"30rpx"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u8d2d\u4e70")])])],1)]):t._e(),t.buywrap?t._e():e("block",[e("view",{staticClass:["back"],on:{click:t.returns}},[e("u-image",{staticStyle:{width:"40rpx",height:"40rpx"},attrs:{src:"../static/fanhui.png"}})],1),t.url?t._e():e("u-text",{staticClass:["text"],style:{width:t.width+"px"},appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u76f4\u64ad\u7ed3\u675f")]),t.url?e("u-video",{staticClass:["vid"],staticStyle:{width:"100vw"},style:{height:t.height+"px"},attrs:{src:t.url,autoplay:!0,controls:!0}}):t._e()],1)],1)])},i=[]},71:function(t,r,e){"use strict";e.r(r);var o=e(51),i=e.n(o);for(var n in o)"default"!==n&&function(t){e.d(r,t,(function(){return o[t]}))}(n);r.default=i.a},75:function(t,r,e){"use strict";e.r(r);e(23);var o=e(44);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var r=this.constructor;return this.then((function(e){return r.resolve(t()).then((function(){return e}))}),(function(e){return r.resolve(t()).then((function(){throw e}))}))}),o.default.mpType="page",o.default.route="pages/live_detail",o.default.el="#root",new Vue(o.default)}});