"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************************************************!*\
  !*** D:/代码/zhibokaifa/zhibokaifa/main.js?{"page":"pages%2Flive_detail"} ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_live_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/live_detail.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_live_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_live_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/live_detail'\n        _pages_live_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_live_detail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMkVBQUc7QUFDWCxRQUFRLDJFQUFHO0FBQ1gsUUFBUSwyRUFBRztBQUNYLGdCQUFnQiwyRUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9saXZlX2RldGFpbC5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2xpdmVfZGV0YWlsJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***************************************************************!*\
  !*** D:/代码/zhibokaifa/zhibokaifa/main.js?{"type":"appStyle"} ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***************************************************************************!*\
  !*** D:/代码/zhibokaifa/zhibokaifa/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/zhibokaifa/zhibokaifa/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row",
    "display": "flex",
    "alignItems": "center"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-smaller": {
    "fontSize": "15rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-tip": {
    "color": "#A0A0A0"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-black": {
    "backgroundColor": "#000000"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#88BDE2"
  },
  "bg-blue": {
    "backgroundColor": "#88BDE2"
  },
  "text-blue": {
    "color": "#88BDE2"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-lg": {
    "borderRadius": "14rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-top-lg": {
    "borderTopLeftRadius": "14rpx",
    "borderTopRightRadius": "14rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-bottom-lg": {
    "borderBottomRightRadius": "14rpx",
    "borderBottomLeftRadius": "14rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "mask": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 100
  },
  "text-main": {
    "color": "#8745FF"
  },
  "text-main-hover": {
    "color": "#BA7ACE"
  },
  "text-main-disabled": {
    "color": "#BA7ACE"
  },
  "bg-main": {
    "backgroundColor": "#8745FF"
  },
  "bg-main-hover": {
    "backgroundColor": "#BA7ACE"
  },
  "bg-main-disabled": {
    "backgroundColor": "#BA7ACE"
  },
  "border-main": {
    "borderColor": "#8745FF"
  },
  "btn-main-plain": {
    "borderColor": "#8745FF",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "alignItems": "center",
    "justifyContent": "center",
    "color": "#8745FF",
    "paddingTop": "15rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx",
    "borderRadius": "8rpx"
  },
  "line-h": {
    "lineHeight": 1.2
  },
  "f-divider": {
    "height": "18rpx",
    "backgroundColor": "#F5F5F4"
  },
  "color": {
    "color": "#4ca8e7"
  },
  "fb": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "ovh": {
    "whiteSpace": "nowrap",
    "overflow": "hidden",
    "textOverflow": "ellipsis",
    "width": 100
  },
  "logopart": {
    "backgroundColor": "#4ca8e7",
    "width": 100,
    "height": "310rpx",
    "paddingTop": "50rpx",
    "boxSizing": "border-box"
  },
  "logo": {
    "width": "130rpx",
    "height": "130rpx",
    "marginTop": 0,
    "marginBottom": 0
  },
  "logotit": {
    "textAlign": "center",
    "fontSize": "36rpx",
    "color": "#ffffff",
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!**********************************************************************!*\
  !*** D:/代码/zhibokaifa/zhibokaifa/pages/live_detail.nvue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live_detail.nvue?vue&type=template&id=e97f939a&mpType=page */ 5);\n/* harmony import */ var _live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live_detail.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./live_detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./live_detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 10).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"3d0ae2d6\",\n  false,\n  _live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/live_detail.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDMkU7QUFDTDtBQUN0RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdFQUFnRTtBQUNwSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0VBQWdFO0FBQ3pIOztBQUVBOztBQUVBO0FBQ3dLO0FBQ3hLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLDZGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9saXZlX2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU5N2Y5MzlhJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXZlX2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xpdmVfZGV0YWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2xpdmVfZGV0YWlsLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9saXZlX2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL+WKnuWFrOW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiM2QwYWUyZDZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbGl2ZV9kZXRhaWwubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************************************************************************!*\
  !*** D:/代码/zhibokaifa/zhibokaifa/pages/live_detail.nvue?vue&type=template&id=e97f939a&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_detail.nvue?vue&type=template&id=e97f939a&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_template_id_e97f939a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/zhibokaifa/zhibokaifa/pages/live_detail.nvue?vue&type=template&id=e97f939a&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["pag"] },
        [
          _vm.buywrap
            ? _c(
                "view",
                {
                  staticClass: ["wrap", "fc"],
                  style: { height: _vm.height + "px", width: _vm.width + "px" }
                },
                [
                  _c(
                    "view",
                    { staticClass: ["wrapbox", "fc"] },
                    [
                      _c(
                        "view",
                        { staticClass: ["tit"] },
                        [
                          _c("u-text", {
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          }),
                          _c(
                            "u-text",
                            {
                              staticStyle: { color: "#333", fontSize: "30rpx" },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("支付")]
                          ),
                          _c("u-image", {
                            staticClass: ["retu"],
                            attrs: { src: "../static/close.png" },
                            on: { click: _vm.retu }
                          })
                        ],
                        1
                      ),
                      _c("view", { staticClass: ["tips"] }, [
                        _c(
                          "u-text",
                          {
                            staticStyle: { color: "#333", fontSize: "32rpx" },
                            appendAsTree: true,
                            attrs: { append: "tree" }
                          },
                          [
                            _vm._v(
                              "观看直播需要支付" + _vm._s(_vm.price) + "元"
                            )
                          ]
                        )
                      ]),
                      _c(
                        "radio-group",
                        {
                          staticStyle: { width: "100%" },
                          on: { change: _vm.radioChange }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: ["fr", "change"],
                              style: { width: _vm.width + "px" }
                            },
                            [
                              _c(
                                "label",
                                { staticClass: ["paybox", "fc"] },
                                [
                                  _c("u-image", {
                                    staticStyle: {
                                      width: "110rpx",
                                      height: "110rpx"
                                    },
                                    attrs: { src: "../static/wxpay.png" }
                                  }),
                                  _c("radio", {
                                    attrs: { value: "1", checked: "true" }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "label",
                                { staticClass: ["paybox", "fc"] },
                                [
                                  _c("u-image", {
                                    staticStyle: {
                                      width: "110rpx",
                                      height: "110rpx"
                                    },
                                    attrs: { src: "../static/ali.png" }
                                  }),
                                  _c("radio", { attrs: { value: "2" } })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _c(
                        "view",
                        { staticClass: ["buybtn"], on: { click: _vm.topay } },
                        [
                          _c(
                            "u-text",
                            {
                              staticStyle: { color: "#fff", fontSize: "30rpx" },
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("购买")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          !_vm.buywrap
            ? _c(
                "block",
                [
                  _c(
                    "view",
                    { staticClass: ["back"], on: { click: _vm.returns } },
                    [
                      _c("u-image", {
                        staticStyle: { width: "40rpx", height: "40rpx" },
                        attrs: { src: "../static/fanhui.png" }
                      })
                    ],
                    1
                  ),
                  !_vm.url
                    ? _c(
                        "u-text",
                        {
                          staticClass: ["text"],
                          style: { width: _vm.width + "px" },
                          appendAsTree: true,
                          attrs: { append: "tree" }
                        },
                        [_vm._v("直播结束")]
                      )
                    : _vm._e(),
                  _vm.url
                    ? _c("u-video", {
                        staticClass: ["vid"],
                        staticStyle: { width: "100vw" },
                        style: { height: _vm.height + "px" },
                        attrs: { src: _vm.url, autoplay: true, controls: true }
                      })
                    : _vm._e()
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!**********************************************************************************************!*\
  !*** D:/代码/zhibokaifa/zhibokaifa/pages/live_detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_detail.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFjLENBQWdCLDJkQUFHLEVBQUMiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4v5Yqe5YWs5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL+WKnuWFrOW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL+WKnuWFrOW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlX2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4v5Yqe5YWs5bel5YW3L0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL+WKnuWFrOW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL+WKnuWFrOW3peWFty9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlX2RldGFpbC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/zhibokaifa/zhibokaifa/pages/live_detail.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      appurl: 'http://app.chengguan888.com/public/',\n      payType: 1,\n      buywrap: false,\n      height: '',\n      width: '',\n      mark: false,\n      url: '',\n      id: '',\n      str: '',\n      test: '1',\n      price: '' };\n\n  },\n  onShow: function onShow() {\n    var that = this;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  },\n\n  onLoad: function onLoad(params) {\n    this.id = params.id;\n    var res = uni.getSystemInfoSync();\n    this.height = res.windowHeight;\n    this.width = res.windowWidth;\n    var that = this;\n    __f__(\"log\", 'tocheckkkkkkkkkkkk', \" at pages/live_detail.nvue:94\");\n    that.tocheck();\n    // var user=uni.getStorageSync('user')\n    // uni.request({\n    //     url:that.appurl + 'index.php/api/live/checkLivePay',\n    //     method:'post',\n    //     data:{\n    // \t\tuid:user.id,\n    //         lid:that.id\n    //     },\n    //     header:{\n    //         'Content-Type': 'application/x-www-form-urlencoded'\n    //     },\n    //     success(res){\n    //         console.log(res)\n    // \t\tif(res.data.code == 500){\n    // \t\t\tthat.buywrap=true\n    // \t\t\tthat.price=res.data.datas\n    // \t\t\treturn false\n    // \t\t}\n    //     }\n    // })\n    // that.getData()\n\n  },\n  methods: {\n    getData: function getData() {\n      var that = this;\n      uni.request({\n        url: that.appurl + 'index.php/api/live/look_zhibo',\n        method: 'post',\n        data: {\n          live_id: that.id },\n\n        header: {\n          'Content-Type': 'application/x-www-form-urlencoded' },\n\n        success: function success(result) {\n          that.str = JSON.stringify(result);\n          that.url = result.data.data.la_url;\n          __f__(\"log\", result, \" at pages/live_detail.nvue:134\");\n        } });\n\n    },\n    //支付\n    topay: function topay() {\n      var that = this;\n      uni.showLoading({\n        title: '加载中……' });\n\n      var user = uni.getStorageSync('user');\n      __f__(\"log\", that.payType, \" at pages/live_detail.nvue:145\");\n\n      __f__(\"log\", 'app---------------', \" at pages/live_detail.nvue:147\");\n      var payType = '';\n      if (that.payType == 1) {\n        payType = 'wxpay';\n        uni.request({\n          url: that.appurl + 'index.php/api/pay/buylive',\n          // url: that.appurl + 'index.php/api/wxpay/wxpaytest',\n          method: 'post',\n          data: {\n            uid: user.id,\n            lid: that.id,\n            pay_type: 2 },\n\n          success: function success(res) {\n            uni.hideLoading();\n            __f__(\"log\", res.data, \" at pages/live_detail.nvue:162\");\n            var orderInfo = res.data;\n            // var orderInfo=JSON.parse(res.data)\n            uni.requestPayment({\n              provider: 'wxpay',\n              orderInfo: orderInfo,\n              success: function success(res) {\n                uni.showToast({\n                  title: '支付成功',\n                  icon: 'none',\n                  duration: 2000,\n                  complete: function complete() {\n                    that.tocheck();\n                  } });\n\n                __f__(\"log\", 'success:' + JSON.stringify(res), \" at pages/live_detail.nvue:177\");\n              },\n              fail: function fail(err) {\n                __f__(\"log\", 'fail:' + JSON.stringify(err), \" at pages/live_detail.nvue:180\");\n              } });\n\n\n          } });\n\n      } else if (that.payType == 2) {\n        payType = 'alipay';\n        uni.request({\n          url: that.appurl + 'index.php/api/pay/buylive',\n          method: 'post',\n          data: {\n            uid: user.id,\n            lid: that.id,\n            pay_type: 1 },\n\n          success: function success(res) {\n            uni.hideLoading();\n            var orderInfo = res.data;\n            uni.requestPayment({\n              provider: 'alipay',\n              orderInfo: orderInfo,\n              success: function success(res) {\n                uni.showToast({\n                  title: '支付成功',\n                  icon: 'none',\n                  duration: 2000,\n                  complete: function complete() {\n                    that.tocheck();\n                  } });\n\n                __f__(\"log\", 'success:' + JSON.stringify(res), \" at pages/live_detail.nvue:211\");\n              },\n              fail: function fail(err) {\n                __f__(\"log\", 'fail:' + JSON.stringify(err), \" at pages/live_detail.nvue:214\");\n              } });\n\n\n          } });\n\n      }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    },\n    //检查直播\n    tocheck: function tocheck() {\n      var that = this;\n      var user = uni.getStorageSync('user');\n      __f__(\"log\", user, \" at pages/live_detail.nvue:305\");\n      uni.request({\n        url: that.appurl + 'index.php/api/live/checkLivePay',\n        method: 'post',\n        data: {\n          uid: user.id,\n          lid: that.id },\n\n        header: {\n          'Content-Type': 'application/x-www-form-urlencoded' },\n\n        success: function success(res) {\n          __f__(\"log\", res, \" at pages/live_detail.nvue:317\");\n          if (res.data.code == 500) {\n            that.buywrap = true;\n            that.price = res.data.datas;\n            return false;\n          } else {\n            that.getData();\n            that.buywrap = false;\n          }\n        } });\n\n    },\n    radioChange: function radioChange(e) {\n      __f__(\"log\", e.detail.value, \" at pages/live_detail.nvue:330\");\n      var that = this;\n      that.payType = e.detail.value;\n    },\n    error: function error(e) {\n      if (e) {\n        this.mark = true;\n      }\n    },\n    retu: function retu() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    returns: function returns() {\n      uni.navigateBack({\n        delta: 1 });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbGl2ZV9kZXRhaWwubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxtREFEQTtBQUVBLGdCQUZBO0FBR0Esb0JBSEE7QUFJQSxnQkFKQTtBQUtBLGVBTEE7QUFNQSxpQkFOQTtBQU9BLGFBUEE7QUFRQSxZQVJBO0FBU0EsYUFUQTtBQVVBLGVBVkE7QUFXQSxlQVhBOztBQWFBLEdBZkE7QUFnQkEsUUFoQkEsb0JBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBLEdBakRBOztBQW1EQSxRQW5EQSxrQkFtREEsTUFuREEsRUFtREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQWpGQTtBQWtGQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBREE7QUFFQSxzQkFGQTtBQUdBO0FBQ0EsMEJBREEsRUFIQTs7QUFNQTtBQUNBLDZEQURBLEVBTkE7O0FBU0EsZUFUQSxtQkFTQSxNQVRBLEVBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWJBOztBQWVBLEtBbEJBO0FBbUJBO0FBQ0EsU0FwQkEsbUJBb0JBO0FBQ0E7QUFDQTtBQUNBLHNCQURBOztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQURBO0FBRUE7QUFDQSx3QkFIQTtBQUlBO0FBQ0Esd0JBREE7QUFFQSx3QkFGQTtBQUdBLHVCQUhBLEVBSkE7O0FBU0EsaUJBVEEsbUJBU0EsR0FUQSxFQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsa0NBRkE7QUFHQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSw4QkFGQTtBQUdBLGdDQUhBO0FBSUEsMEJBSkEsc0JBSUE7QUFDQTtBQUNBLG1CQU5BOztBQVFBO0FBQ0EsZUFiQTtBQWNBO0FBQ0E7QUFDQSxlQWhCQTs7O0FBbUJBLFdBakNBOztBQW1DQSxPQXJDQSxNQXFDQTtBQUNBO0FBQ0E7QUFDQSx3REFEQTtBQUVBLHdCQUZBO0FBR0E7QUFDQSx3QkFEQTtBQUVBLHdCQUZBO0FBR0EsdUJBSEEsRUFIQTs7QUFRQSxpQkFSQSxtQkFRQSxHQVJBLEVBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGtDQUZBO0FBR0E7QUFDQTtBQUNBLCtCQURBO0FBRUEsOEJBRkE7QUFHQSxnQ0FIQTtBQUlBLDBCQUpBLHNCQUlBO0FBQ0E7QUFDQSxtQkFOQTs7QUFRQTtBQUNBLGVBYkE7QUFjQTtBQUNBO0FBQ0EsZUFoQkE7OztBQW1CQSxXQTlCQTs7QUFnQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0ZBLEtBckxBO0FBc0xBO0FBQ0EsV0F2TEEscUJBdUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFEQTtBQUVBLHNCQUZBO0FBR0E7QUFDQSxzQkFEQTtBQUVBLHNCQUZBLEVBSEE7O0FBT0E7QUFDQSw2REFEQSxFQVBBOztBQVVBLGVBVkEsbUJBVUEsR0FWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBcEJBOztBQXNCQSxLQWpOQTtBQWtOQSxlQWxOQSx1QkFrTkEsQ0FsTkEsRUFrTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXROQTtBQXVOQSxTQXZOQSxpQkF1TkEsQ0F2TkEsRUF1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNOQTtBQTROQSxRQTVOQSxrQkE0TkE7QUFDQTtBQUNBLGdCQURBOztBQUdBLEtBaE9BO0FBaU9BLFdBak9BLHFCQWlPQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0FyT0EsRUFsRkEsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwicGFnXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cIndyYXAgZmNcIiA6c3R5bGU9XCJ7aGVpZ2h0IDogaGVpZ2h0ICsgJ3B4Jyx3aWR0aCA6IHdpZHRoICsgJ3B4J31cIiB2LWlmPVwiYnV5d3JhcFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIndyYXBib3ggZmNcIj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRpdFwiPjx0ZXh0PjwvdGV4dD48dGV4dCBzdHlsZT1cImNvbG9yOiAjMzMzO2ZvbnQtc2l6ZTogMzBycHg7XCI+5pSv5LuYPC90ZXh0PlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwicmV0dVwiIEBjbGljaz1cInJldHVcIiBzcmM9XCIuLi9zdGF0aWMvY2xvc2UucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXBzXCI+PHRleHQgc3R5bGU9XCJjb2xvcjogIzMzMztmb250LXNpemU6IDMycnB4O1wiPuingueci+ebtOaSremcgOimgeaUr+S7mHt7cHJpY2V9feWFgzwvdGV4dD48L3ZpZXc+XHJcblx0XHRcdFx0PHJhZGlvLWdyb3VwIEBjaGFuZ2U9XCJyYWRpb0NoYW5nZVwiIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZyIGNoYW5nZVwiIDpzdHlsZT1cInt3aWR0aCA6IHdpZHRoICsgJ3B4J31cIj5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwicGF5Ym94IGZjXCI+XHJcblx0XHRcdFx0XHRcdFx0PGltYWdlIHN0eWxlPVwid2lkdGg6IDExMHJweDtoZWlnaHQ6IDExMHJweDtcIiBzcmM9XCIuLi9zdGF0aWMvd3hwYXkucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCIxXCIgY2hlY2tlZD1cInRydWVcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJwYXlib3ggZmNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Ugc3R5bGU9XCJ3aWR0aDogMTEwcnB4O2hlaWdodDogMTEwcnB4O1wiIHNyYz1cIi4uL3N0YXRpYy9hbGkucG5nXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8cmFkaW8gdmFsdWU9XCIyXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3JhZGlvLWdyb3VwPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiYnV5YnRuXCIgQGNsaWNrPVwidG9wYXlcIj48dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmO2ZvbnQtc2l6ZTogMzBycHg7XCI+6LSt5LmwPC90ZXh0Pjwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdDwvdmlldz5cclxuXHRcdDxibG9jayB2LWlmPVwiIWJ1eXdyYXBcIj5cclxuXHRcdFx0PHZpZXcgQGNsaWNrPVwicmV0dXJuc1wiIGNsYXNzPVwiYmFja1wiPlxyXG5cdFx0XHRcdDxpbWFnZSBzdHlsZT1cIndpZHRoOjQwcnB4O2hlaWdodDo0MHJweDtcIiBzcmM9XCIuLi9zdGF0aWMvZmFuaHVpLnBuZ1wiPjwvaW1hZ2U+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHRleHQgdi1pZj1cIiF1cmxcIiBjbGFzcz1cInRleHRcIiA6c3R5bGU9XCJ7d2lkdGggOiB3aWR0aCArICdweCd9XCI+55u05pKt57uT5p2fPC90ZXh0PlxyXG5cdFx0XHQ8dmlkZW8gY2xhc3M9XCJ2aWRcIiB2LWlmPVwidXJsXCIgOnNyYz1cInVybFwiIHN0eWxlPVwid2lkdGg6IDEwMHZ3O1wiIDpzdHlsZT1cIntoZWlnaHQgOiBoZWlnaHQgKyAncHgnfVwiXHJcblx0XHRcdFx0OmF1dG9wbGF5PVwidHJ1ZVwiIGNvbnRyb2xzPjwvdmlkZW8+XHJcblx0XHQ8L2Jsb2NrPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRhcHB1cmw6ICdodHRwOi8vYXBwLmNoZW5nZ3Vhbjg4OC5jb20vcHVibGljLycsXHJcblx0XHRcdFx0cGF5VHlwZTogMSxcclxuXHRcdFx0XHRidXl3cmFwOiBmYWxzZSxcclxuXHRcdFx0XHRoZWlnaHQ6ICcnLFxyXG5cdFx0XHRcdHdpZHRoOiAnJyxcclxuXHRcdFx0XHRtYXJrOiBmYWxzZSxcclxuXHRcdFx0XHR1cmw6ICcnLFxyXG5cdFx0XHRcdGlkOiAnJyxcclxuXHRcdFx0XHRzdHI6ICcnLFxyXG5cdFx0XHRcdHRlc3Q6ICcxJyxcclxuXHRcdFx0XHRwcmljZTogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uU2hvdygpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQvLyAjaWZkZWYgSDVcclxuXHRcdFx0Ly8gaWYgKHVuaS5nZXRTdG9yYWdlU3luYygndXNlcicpLmlkKSB7XHJcblx0XHRcdC8vIFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHQvLyBcdFx0dXJsOiB0aGF0LmFwcHVybCArICdpbmRleC5waHAvYXBpL3VzZXIvY2hlY2t1c2VybG9naW4nLFxyXG5cdFx0XHQvLyBcdFx0bWV0aG9kOiAnUE9TVCcsXHJcblx0XHRcdC8vIFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0Ly8gXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcblx0XHRcdC8vIFx0XHR9LFxyXG5cdFx0XHQvLyBcdFx0ZGF0YToge1xyXG5cdFx0XHQvLyBcdFx0XHRpZDogdW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyJykuaWQsXHJcblx0XHRcdC8vIFx0XHR9LFxyXG5cdFx0XHQvLyBcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0Ly8gXHRcdFx0aWYgKHJlcy5kYXRhPT0gMCkge1xyXG5cdFx0XHQvLyBcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHQvLyBcdFx0XHRcdFx0dGl0bGU6ICfmgqjnmoTotKblj7flt7LlnKjliKvlpITnmbvlvZXmiJbnmbvlvZXotoXml7YnLFxyXG5cdFx0XHQvLyBcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHQvLyBcdFx0XHRcdFx0ZHVyYXRpb246IDIwMDAsXHJcblx0XHRcdC8vIFx0XHRcdFx0fSlcclxuXHRcdFx0Ly8gXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0Ly8gXHRcdFx0XHRcdHVuaS5jbGVhclN0b3JhZ2VTeW5jKCk7XHJcblx0XHRcdC8vIFx0XHRcdFx0XHR1bmkucmVMYXVuY2goe1xyXG5cdFx0XHQvLyBcdFx0XHRcdFx0ICAgIHVybDogJy9wYWdlcy9sb2dpbidcclxuXHRcdFx0Ly8gXHRcdFx0XHRcdH0pXHJcblx0XHRcdC8vIFx0XHRcdFx0fSwgMjAwMClcclxuXHRcdFx0Ly8gXHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0Ly8gXHRcdFx0fSBcclxuXHRcdFx0Ly8gXHRcdH1cclxuXHRcdFx0Ly8gXHR9KTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdG9uTG9hZChwYXJhbXMpIHtcclxuXHRcdFx0dGhpcy5pZCA9IHBhcmFtcy5pZDtcclxuXHRcdFx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdHRoaXMuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0dGhpcy53aWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRjb25zb2xlLmxvZygndG9jaGVja2tra2tra2tra2trJylcclxuXHRcdFx0dGhhdC50b2NoZWNrKClcclxuXHRcdFx0Ly8gdmFyIHVzZXI9dW5pLmdldFN0b3JhZ2VTeW5jKCd1c2VyJylcclxuXHRcdFx0Ly8gdW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHQvLyAgICAgdXJsOnRoYXQuYXBwdXJsICsgJ2luZGV4LnBocC9hcGkvbGl2ZS9jaGVja0xpdmVQYXknLFxyXG5cdFx0XHQvLyAgICAgbWV0aG9kOidwb3N0JyxcclxuXHRcdFx0Ly8gICAgIGRhdGE6e1xyXG5cdFx0XHQvLyBcdFx0dWlkOnVzZXIuaWQsXHJcblx0XHRcdC8vICAgICAgICAgbGlkOnRoYXQuaWRcclxuXHRcdFx0Ly8gICAgIH0sXHJcblx0XHRcdC8vICAgICBoZWFkZXI6e1xyXG5cdFx0XHQvLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHQvLyAgICAgfSxcclxuXHRcdFx0Ly8gICAgIHN1Y2Nlc3MocmVzKXtcclxuXHRcdFx0Ly8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdC8vIFx0XHRpZihyZXMuZGF0YS5jb2RlID09IDUwMCl7XHJcblx0XHRcdC8vIFx0XHRcdHRoYXQuYnV5d3JhcD10cnVlXHJcblx0XHRcdC8vIFx0XHRcdHRoYXQucHJpY2U9cmVzLmRhdGEuZGF0YXNcclxuXHRcdFx0Ly8gXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdC8vIFx0XHR9XHJcblx0XHRcdC8vICAgICB9XHJcblx0XHRcdC8vIH0pXHJcblx0XHRcdC8vIHRoYXQuZ2V0RGF0YSgpXHJcblxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0RGF0YSgpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0dXJsOiB0aGF0LmFwcHVybCArICdpbmRleC5waHAvYXBpL2xpdmUvbG9va196aGlibycsXHJcblx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0bGl2ZV9pZDogdGhhdC5pZFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnN0ciA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcblx0XHRcdFx0XHRcdHRoYXQudXJsID0gcmVzdWx0LmRhdGEuZGF0YS5sYV91cmw7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+aUr+S7mFxyXG5cdFx0XHR0b3BheSgpIHtcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0dGl0bGU6ICfliqDovb3kuK3igKbigKYnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR2YXIgdXNlciA9IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcicpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5wYXlUeXBlKVxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdhcHAtLS0tLS0tLS0tLS0tLS0nKVxyXG5cdFx0XHRcdHZhciBwYXlUeXBlID0gJydcclxuXHRcdFx0XHRpZiAodGhhdC5wYXlUeXBlID09IDEpIHtcclxuXHRcdFx0XHRcdHBheVR5cGUgPSAnd3hwYXknO1xyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IHRoYXQuYXBwdXJsICsgJ2luZGV4LnBocC9hcGkvcGF5L2J1eWxpdmUnLFxyXG5cdFx0XHRcdFx0XHQvLyB1cmw6IHRoYXQuYXBwdXJsICsgJ2luZGV4LnBocC9hcGkvd3hwYXkvd3hwYXl0ZXN0JyxcclxuXHRcdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHR1aWQ6IHVzZXIuaWQsXHJcblx0XHRcdFx0XHRcdFx0bGlkOiB0aGF0LmlkLFxyXG5cdFx0XHRcdFx0XHRcdHBheV90eXBlOiAyXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHR2YXIgb3JkZXJJbmZvID0gcmVzLmRhdGFcclxuXHRcdFx0XHRcdFx0XHQvLyB2YXIgb3JkZXJJbmZvPUpTT04ucGFyc2UocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdFx0dW5pLnJlcXVlc3RQYXltZW50KHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3ZpZGVyOiAnd3hwYXknLFxyXG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJJbmZvOiBvcmRlckluZm8sXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlK/ku5jmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQudG9jaGVjaygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzczonICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsOicgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGF0LnBheVR5cGUgPT0gMikge1xyXG5cdFx0XHRcdFx0cGF5VHlwZSA9ICdhbGlwYXknO1xyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IHRoYXQuYXBwdXJsICsgJ2luZGV4LnBocC9hcGkvcGF5L2J1eWxpdmUnLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdHVpZDogdXNlci5pZCxcclxuXHRcdFx0XHRcdFx0XHRsaWQ6IHRoYXQuaWQsXHJcblx0XHRcdFx0XHRcdFx0cGF5X3R5cGU6IDFcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0c3VjY2VzcyhyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdHZhciBvcmRlckluZm8gPSByZXMuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdHVuaS5yZXF1ZXN0UGF5bWVudCh7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm92aWRlcjogJ2FsaXBheScsXHJcblx0XHRcdFx0XHRcdFx0XHRvcmRlckluZm86IG9yZGVySW5mbyxcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aUr+S7mOaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC50b2NoZWNrKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzOicgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbihlcnIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWw6JyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmICAgXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEg1XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2g1NS0tLS0tLS0tLS0tLS0tLScpXHJcblx0XHRcdFx0dmFyIHBheVR5cGUgPSAnJ1xyXG5cdFx0XHRcdGlmICh0aGF0LnBheVR5cGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0cGF5VHlwZSA9ICd3eHBheSc7XHJcblx0XHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHRcdHVybDogdGhhdC5hcHB1cmwgKyAnaW5kZXgucGhwL2FwaS9wYXkvYnV5bGl2ZScsXHJcblx0XHRcdFx0XHRcdC8vIHVybDogdGhhdC5hcHB1cmwgKyAnaW5kZXgucGhwL2FwaS93eHBheS93eHBheXRlc3QnLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdHVpZDogdXNlci5pZCxcclxuXHRcdFx0XHRcdFx0XHRsaWQ6IHRoYXQuaWQsXHJcblx0XHRcdFx0XHRcdFx0cGF5X3R5cGU6IDIsXHJcblx0XHRcdFx0XHRcdFx0Y2xpZW50OiAxXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuXHRcdFx0XHRcdFx0XHR2YXIgb3JkZXJJbmZvID0gcmVzLmRhdGFcclxuXHRcdFx0XHRcdFx0XHQvLyB2YXIgb3JkZXJJbmZvPUpTT04ucGFyc2UocmVzLmRhdGEpXHJcblx0XHRcdFx0XHRcdFx0dW5pLnJlcXVlc3RQYXltZW50KHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb3ZpZGVyOiAnd3hwYXknLFxyXG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJJbmZvOiBvcmRlckluZm8sXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlK/ku5jmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQudG9jaGVjaygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzczonICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsOicgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGF0LnBheVR5cGUgPT0gMikge1xyXG5cdFx0XHRcdFx0cGF5VHlwZSA9ICdhbGlwYXknO1xyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IHRoYXQuYXBwdXJsICsgJ2luZGV4LnBocC9hcGkvcGF5L2J1eWxpdmUnLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6ICdwb3N0JyxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdHVpZDogdXNlci5pZCxcclxuXHRcdFx0XHRcdFx0XHRsaWQ6IHRoYXQuaWQsXHJcblx0XHRcdFx0XHRcdFx0cGF5X3R5cGU6IDEsXHJcblx0XHRcdFx0XHRcdFx0Y2xpZW50OiAxXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHRcdFx0XHR2YXIgb3JkZXJJbmZvID0gcmVzLmRhdGFcclxuXHRcdFx0XHRcdFx0XHR1bmkucmVxdWVzdFBheW1lbnQoe1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvdmlkZXI6ICdhbGlwYXknLFxyXG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJJbmZvOiBvcmRlckluZm8sXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmlK/ku5jmiJDlip8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQudG9jaGVjaygpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzczonICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24oZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsOicgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+ajgOafpeebtOaSrVxyXG5cdFx0XHR0b2NoZWNrKCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHR2YXIgdXNlciA9IHVuaS5nZXRTdG9yYWdlU3luYygndXNlcicpXHJcblx0XHRcdFx0Y29uc29sZS5sb2codXNlcilcclxuXHRcdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0XHR1cmw6IHRoYXQuYXBwdXJsICsgJ2luZGV4LnBocC9hcGkvbGl2ZS9jaGVja0xpdmVQYXknLFxyXG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsXHJcblx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdHVpZDogdXNlci5pZCxcclxuXHRcdFx0XHRcdFx0bGlkOiB0aGF0LmlkXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5kYXRhLmNvZGUgPT0gNTAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhhdC5idXl3cmFwID0gdHJ1ZVxyXG5cdFx0XHRcdFx0XHRcdHRoYXQucHJpY2UgPSByZXMuZGF0YS5kYXRhc1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuZ2V0RGF0YSgpXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5idXl3cmFwID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHJhZGlvQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZSlcclxuXHRcdFx0XHR2YXIgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5wYXlUeXBlID0gZS5kZXRhaWwudmFsdWU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGVycm9yKGUpIHtcclxuXHRcdFx0XHRpZiAoZSkge1xyXG5cdFx0XHRcdFx0dGhpcy5tYXJrID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHJldHUoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHJldHVybnMoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5mciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHR9XHJcblxyXG5cdC5mYyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC53cmFwYm94IHtcclxuXHRcdHdpZHRoOiA2NTBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDQwcnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMTBycHg7XHJcblx0fVxyXG5cclxuXHQudGlwcyB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA0MHJweDtcclxuXHR9XHJcblxyXG5cdC5wYXlib3gge1xyXG5cdFx0d2lkdGg6IDE2MHJweDtcclxuXHRcdG1hcmdpbjogMzBycHg7XHJcblx0fVxyXG5cclxuXHQucmV0dSB7XHJcblx0XHR3aWR0aDogMzBycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAyMHJweDtcclxuXHJcblx0fVxyXG5cclxuXHQudGl0IHtcclxuXHRcdHdpZHRoOiA2NTBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2Q2ZDZkNjtcclxuXHRcdGJvcmRlci1ib3R0b20td2lkdGg6IDJycHg7XHJcblx0XHRib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdH1cclxuXHJcblx0LnBheWJveCBpbWFnZSB7XHJcblx0XHR3aWR0aDogMTYwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxNjBycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC53cmFwIHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG5cdH1cclxuXHJcblx0LmJ1eWJ0biB7XHJcblx0XHR3aWR0aDogMjIwcnB4O1xyXG5cdFx0aGVpZ2h0OiA3MnJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM2cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA3MnJweDtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHJweDtcclxuXHR9XHJcblxyXG5cdC5jaGFuZ2Uge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdH1cclxuXHJcblx0LndyYXAgdGV4dCB7XHJcblx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHJcblx0Lm1hcmsge1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQubWFyay10ZXh0IHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcblx0XHRmb250LXNpemU6IDIwcHg7XHJcblx0XHRjb2xvcjogIzMzMzMzMztcclxuXHR9XHJcblxyXG5cdC5tYXJrLXRleHRzIHtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEwcHg7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHR3aWR0aDogMzAwcHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDQyMzdBO1xyXG5cdH1cclxuXHJcblx0LnRleHQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cGFkZGluZy10b3A6IDQwMHB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcblx0fVxyXG5cclxuXHQuYmFjayB7XHJcblx0XHR3aWR0aDogNjBycHg7XHJcblx0XHRoZWlnaHQ6IDYwcnB4O1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR0b3A6IDIwcHg7XHJcblx0XHRsZWZ0OiAyMHB4O1xyXG5cdFx0ei1pbmRleDogMTA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNCk7XHJcblx0fVxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!******************************************************************************************************!*\
  !*** D:/代码/zhibokaifa/zhibokaifa/pages/live_detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../办公工具/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live_detail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 11);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_detail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/代码/zhibokaifa/zhibokaifa/pages/live_detail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "fr": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row"
  },
  "fc": {
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column"
  },
  "wrapbox": {
    "width": "650rpx",
    "backgroundColor": "#ffffff",
    "paddingBottom": "40rpx",
    "borderRadius": "10rpx"
  },
  "tips": {
    "marginBottom": "40rpx"
  },
  "paybox": {
    "width": "160rpx",
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "retu": {
    "width": "30rpx",
    "height": "30rpx",
    "marginRight": "20rpx"
  },
  "tit": {
    "width": "650rpx",
    "display": "flex",
    "height": "80rpx",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "borderBottomColor": "#d6d6d6",
    "borderBottomWidth": "2rpx",
    "borderBottomStyle": "solid",
    "marginBottom": "20rpx"
  },
  "wrap": {
    "position": "fixed",
    "width": 100,
    "height": 100,
    "top": 0,
    "zIndex": 99,
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0.8)",
    "color": "#ffffff",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx",
    "boxSizing": "border-box"
  },
  "buybtn": {
    "width": "220rpx",
    "height": "72rpx",
    "borderRadius": "36rpx",
    "backgroundColor": "#007AFF",
    "lineHeight": "72rpx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "textAlign": "center",
    "marginTop": "20rpx"
  },
  "change": {
    "width": 100,
    "boxSizing": "border-box"
  },
  "mark": {
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column",
    "backgroundColor": "#FFFFFF"
  },
  "mark-text": {
    "paddingRight": "75",
    "fontSize": "20",
    "color": "#333333"
  },
  "mark-texts": {
    "lineHeight": "10",
    "fontSize": "14",
    "height": "50",
    "width": "300",
    "color": "#FFFFFF",
    "backgroundColor": "#D4237A"
  },
  "text": {
    "textAlign": "center",
    "paddingTop": "400",
    "paddingBottom": "50"
  },
  "back": {
    "width": "60rpx",
    "height": "60rpx",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "center",
    "position": "fixed",
    "top": "20",
    "left": "20",
    "zIndex": 10,
    "borderRadius": "30",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "@VERSION": 2
}

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);