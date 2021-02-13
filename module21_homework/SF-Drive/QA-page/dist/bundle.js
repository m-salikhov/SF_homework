/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./SF-Drive/QA-page/src/scripts/hw.js":
/*!********************************************!*\
  !*** ./SF-Drive/QA-page/src/scripts/hw.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hello\": () => (/* binding */ hello)\n/* harmony export */ });\nfunction hello(name) {\r\n  console.log(`Hello, ${name}!`);\r\n}\r\n\n\n//# sourceURL=webpack://module21_homework/./SF-Drive/QA-page/src/scripts/hw.js?");

/***/ }),

/***/ "./SF-Drive/QA-page/src/scripts/script.js":
/*!************************************************!*\
  !*** ./SF-Drive/QA-page/src/scripts/script.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hw_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hw.js */ \"./SF-Drive/QA-page/src/scripts/hw.js\");\n\r\n\r\nlet collapsible = document.getElementsByClassName('content__collapsible');\r\nlet i;\r\n\r\nfor (i = 0; i < collapsible.length; i++) {\r\n  collapsible[i].addEventListener('click', function () {\r\n    this.classList.toggle('active');\r\n    let content = this.nextElementSibling;\r\n    if (content.style.display === 'block') {\r\n      content.style.display = 'none';\r\n    } else {\r\n      content.style.display = 'block';\r\n    }\r\n  });\r\n}\r\n\r\n\r\n\r\n(0,_hw_js__WEBPACK_IMPORTED_MODULE_0__.hello)('World');\r\n\n\n//# sourceURL=webpack://module21_homework/./SF-Drive/QA-page/src/scripts/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./SF-Drive/QA-page/src/scripts/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;