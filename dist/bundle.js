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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --clr-black: #262626;\r\n    --clr-white: #f1f1f1;\r\n    --clr-grey: #cccccc;\r\n    --clr-warning: #ff4343;\r\n    --clr-primary: #7371FC;\r\n\r\n    --clr-black-hover: rgba(38, 38, 38, 0.8);\r\n    --clr-grey-hover: rgba(204, 204, 204, 0.4);\r\n    --clr-warning-hover: rgba(255, 67, 67, 0.85);\r\n\r\n\r\n\r\n    --border-small: 3px;\r\n    --border-regular: 5px;\r\n\r\n    --small-padding: 2rem 1rem;\r\n    --regular-padding: 2rem;\r\n\r\n    --regular-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);\r\n\r\n    --font-weight-regular: 500;\r\n    --font-weight-semibold: 600;\r\n}\r\n\r\n/* GENERAL */\r\n* {\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n}\r\n\r\nbody {\r\n    background-color: var(--clr-white);\r\n\r\n    font-size: 16px;\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-weight: var(--font-weight-regular);\r\n    font-style: normal;\r\n\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n\r\n    grid-template-columns: 30% auto 1fr;\r\n    grid-template-rows: 1fr;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n/* TEXT */\r\nh2 {\r\n    font-size: 1.75rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.5rem;\r\n}\r\n\r\nlabel {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.item {\r\n    font-size: 1.25rem;\r\n    padding: 0 1rem;\r\n}\r\n\r\n.item label {\r\n    font-size: 1.25rem;\r\n    font-weight: var(--font-weight-regular);\r\n}\r\n\r\n.item,\r\n.item label,\r\nbutton {\r\n    cursor: pointer;\r\n}\r\n\r\n.project.current {\r\n    font-weight: var(--font-weight-semibold);\r\n}\r\n\r\n\r\n/* LAYOUT */\r\n.line {\r\n    width: 3px;\r\n    height: 95%;\r\n    background-color: var(--clr-grey);\r\n    align-self: center;\r\n    border-radius: var(--border-regular);\r\n}\r\n\r\nbody>section {\r\n    padding: var(--regular-padding);\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\nbody>section.todo-container {\r\n    /* position: relative; */\r\n    overflow: scroll;\r\n}\r\n\r\n.section-head {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.todo-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.item {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n.todo-items .item {\r\n    justify-content: space-between;\r\n}\r\n\r\n.todo-items .item i {\r\n    color: transparent;\r\n}\r\n\r\n.item .label-input {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    align-items: center;\r\n}\r\n\r\ninput[type='radio'] {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* COMPONENTS */\r\n/* btns */\r\n.btn {\r\n    background-color: none;\r\n    border: none;\r\n    padding: 10px 1rem;\r\n    font-weight: bold;\r\n    border-radius: var(--border-small);\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 0.5rem;\r\n\r\n}\r\n\r\n.btn-regular {\r\n    background-color: var(--clr-black);\r\n    color: var(--clr-white);\r\n}\r\n\r\n.btn-warning {\r\n    background-color: var(--clr-warning);\r\n    color: var(--clr-white);\r\n}\r\n\r\n.btn-clean {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#deleteProjectBtn {\r\n    position: absolute;\r\n    bottom: 2rem;\r\n    right: 2rem;\r\n}\r\n\r\n\r\n\r\n/* popup containers */\r\n.popup-container {\r\n    min-width: 25vw;\r\n\r\n    position: absolute;\r\n    transform: translate(-50%, -50%);\r\n    top: 50%;\r\n    left: 50%;\r\n\r\n    background-color: var(--clr-white);\r\n    padding: var(--regular-padding);\r\n    border-radius: var(--border-regular);\r\n    box-shadow: var(--regular-shadow);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n\r\n}\r\n\r\n/* form */\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n}\r\n\r\nform .label-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.25rem;\r\n}\r\n\r\ninput[type=text] {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 2px solid var(--clr-black);\r\n\r\n    font-size: 1.25rem;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    outline: none;\r\n    border-color: var(--clr-primary);\r\n}\r\n\r\n\r\n\r\n/* HOVER */\r\n.btn-regular:hover {\r\n    background-color: var(--clr-black-hover);\r\n}\r\n\r\n.btn-warning:hover {\r\n    background-color: var(--clr-warning-hover);\r\n}\r\n\r\n.btn-clean:hover {\r\n    background-color: none;\r\n    color: var(--clr-black-hover);\r\n}\r\n\r\n.item:hover {\r\n    /* font-weight: var(--font-weight-semibold); */\r\n    background-color: var(--clr-grey-hover);\r\n    border-radius: var(--border-regular);\r\n}\r\n\r\n.todo-items .item:hover i {\r\n    color: var(--clr-black);\r\n}\r\n\r\n\r\n/* ACTIVE */\r\n\r\nbutton:active {\r\n    scale: 0.98;\r\n}\r\n\r\n.btn-clean:active {\r\n    scale: 0.90;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_list/./src/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo_list/./src/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _js_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/controller.js */ \"./src/js/controller.js\");\n/* harmony import */ var _js_domController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/domController.js */ \"./src/js/domController.js\");\n\r\n\r\n\r\n\r\n// const zdenoo = controller.createTodo('zdeno', 'default')\r\n// controller.addTodo(zdenoo)\r\n\r\n// const zdeno = controller.createProject('sport')\r\n// controller.addProject(zdeno)\r\n\r\n// console.log(controller.getProjects())\r\n// console.log(controller.getTodos())\r\n\r\n// console.log(controller.getTodos())\r\n\r\n_js_domController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showProjects()\r\n_js_domController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showTodos()\r\n\r\n// domController.projectDeleteBtn(projectItems)\r\n// domController.changeCurrentListener()\r\n\r\n_js_domController_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].changeCurrentListener()\r\n\r\n// setInterval(() => console.log(controller.getCurrent()), 1000)\r\n// domController.iteamCreationPopup('Project', 'projectTitle')\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/js/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/js/project.js\");\n\r\n\r\n\r\nconst defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('default')\r\ndefaultProject.current = true\r\n\r\n\r\n\r\nclass Controller {\r\n    constructor() {\r\n        this.todos = this.getTodos() || []\r\n        this.projects = this.getProjects()\r\n\r\n        if (this.projects.length === 0) {\r\n            this.projects.push(defaultProject)\r\n            this.saveProjects()\r\n        }\r\n    }\r\n\r\n    createTodo(title, project) {\r\n        let match = false\r\n\r\n        const todos = this.getTodos()\r\n        if (todos) {\r\n\r\n            todos.forEach(todoItem => {\r\n                if (todoItem.title == title) {\r\n                    match = true\r\n                }\r\n            })\r\n        }\r\n\r\n\r\n        if (!match) {\r\n            return new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, project)\r\n        } else {\r\n            return null\r\n        }\r\n\r\n    }\r\n\r\n    removeTodo(todoTitle) {\r\n        const toRemoveTodo = this.todos.find(todo => todo.title == todoTitle)\r\n        const toRemoveIndex = this.todos.indexOf(toRemoveTodo)\r\n\r\n        if (toRemoveIndex !== -1) {\r\n            this.todos.splice(toRemoveIndex, 1)\r\n        }\r\n\r\n        this.saveTodos()\r\n    }\r\n\r\n    addTodo(todo) {\r\n        if (todo) {\r\n            this.todos.push(todo)\r\n            this.saveTodos()\r\n        }\r\n    }\r\n\r\n\r\n    saveTodos() {\r\n        localStorage.setItem('todos', JSON.stringify(this.todos))\r\n    }\r\n\r\n    getTodos() {\r\n        return JSON.parse(localStorage.getItem('todos')) || []\r\n    }\r\n\r\n    createProject(title) {\r\n        let match = false\r\n        const projects = this.getProjects()\r\n        if (projects) {\r\n\r\n            projects.forEach(projectItem => {\r\n                if (projectItem.type == title) {\r\n                    match = true\r\n                }\r\n            })\r\n        }\r\n\r\n        if (!match) {\r\n            return new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title)\r\n        } else {\r\n            return null\r\n        }\r\n\r\n    }\r\n\r\n    removeProject(projectTitle) {\r\n        const toRemoveProject = this.projects.find(project => project.title == projectTitle)\r\n        const toRemoveIndex = this.todos.indexOf(toRemoveProject)\r\n\r\n        if (toRemoveIndex !== -1 && projectTitle != 'default') {\r\n            this.project.splice(toRemoveIndex, 1)\r\n        }\r\n\r\n        this.saveProjects()\r\n    }\r\n\r\n    addProject(project) {\r\n        if (project) {\r\n            this.projects.push(project)\r\n            this.saveProjects()\r\n        }\r\n    }\r\n\r\n    saveProjects() {\r\n        localStorage.setItem('projects', JSON.stringify(this.projects));\r\n    }\r\n\r\n    getProjects() {\r\n        return JSON.parse(localStorage.getItem('projects')) || []\r\n    }\r\n\r\n    getCurrent() {\r\n        return this.projects.find(project => project.current === true)\r\n    }\r\n\r\n    changeCurrent(newCurrentName) {\r\n        if (newCurrentName == \"All Todos\") {\r\n            newCurrentName = 'default'\r\n        }\r\n        // console.log(newCurrentName)\r\n        const newCurrentProject = this.projects.find(project => project.type == newCurrentName)\r\n\r\n        console.log(this.getCurrent())\r\n        if (this.getCurrent() !== newCurrentProject) {\r\n            this.getCurrent().current = false\r\n            newCurrentProject.current = true\r\n            console.log(this.getCurrent(), newCurrentProject)\r\n        }\r\n        this.saveProjects()\r\n    }\r\n}\r\n\r\n\r\nconst controller = new Controller()\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (controller);\r\n\r\n\n\n//# sourceURL=webpack://todo_list/./src/js/controller.js?");

/***/ }),

/***/ "./src/js/domController.js":
/*!*********************************!*\
  !*** ./src/js/domController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller.js */ \"./src/js/controller.js\");\n\r\n\r\nclass DomController {\r\n    constructor() {\r\n        this.projects = _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getProjects()\r\n        this.todos = _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodos()\r\n\r\n        this.currentProject = this.projects.find(project => project.current === true)\r\n\r\n        this.body = document.body\r\n        this.projectItems = document.getElementById('projectContainer').querySelector('.project-items')\r\n        this.todoItems = document.getElementById('todoContainer').querySelector('.todo-items')\r\n\r\n        this.todoHeading = document.getElementById('todoContainer').querySelector('.section-head').querySelector('h2')\r\n        // this.todoHeading.innerText = this.currentProject.type\r\n\r\n    }\r\n\r\n\r\n\r\n    showProjects() {\r\n\r\n        this.projects.forEach(item => {\r\n\r\n            const itemDiv = document.createElement('div')\r\n            itemDiv.classList.add('item', 'project')\r\n            const itemParagraph = document.createElement('p')\r\n            item.type == 'default' ? itemParagraph.innerText = 'All Todos' : itemParagraph.innerText = item.type\r\n\r\n            if (item.current) {\r\n                itemDiv.classList.add('current')\r\n            }\r\n\r\n            itemDiv.appendChild(itemParagraph)\r\n            this.projectItems.appendChild(itemDiv)\r\n        })\r\n\r\n    }\r\n\r\n    showTodos() {\r\n\r\n        this.todos.forEach(item => {\r\n            if (this.currentProject.type == 'default') {\r\n                domCreation(item)\r\n            } else if (item.project === this.currentProject.type) {\r\n                domCreation(item)\r\n            }\r\n        })\r\n\r\n        function domCreation(item) {\r\n            const itemDiv = document.createElement('div')\r\n            itemDiv.classList.add('item', 'todo')\r\n\r\n            const labelInput = document.createElement('div')\r\n            labelInput.classList.add('label-input')\r\n\r\n            const itemInput = document.createElement('input')\r\n            itemInput.setAttribute(\"type\", \"radio\")\r\n\r\n            const itemLabel = document.createElement('label')\r\n            itemLabel.innerText = item.title\r\n\r\n            const closeBtn = document.createElement('button')\r\n            closeBtn.classList.add('btn-clean', 'btn-close')\r\n\r\n            const closeIcon = document.createElement('i')\r\n            closeIcon.classList.add('fa-solid', 'fa-xmark')\r\n\r\n            closeBtn.appendChild(closeIcon)\r\n\r\n            labelInput.appendChild(itemInput)\r\n            labelInput.appendChild(itemLabel)\r\n            itemDiv.appendChild(labelInput)\r\n            itemDiv.appendChild(closeBtn)\r\n            this.todoItems.appendChild(itemDiv)\r\n        }\r\n\r\n        this.projectDeleteBtn()\r\n    }\r\n\r\n    iteamCreationPopup(popupType, labelInputAttribute) {\r\n        const popupDiv = document.createElement('div')\r\n        popupDiv.classList.add('popup-container')\r\n\r\n        const sectionHead = document.createElement('div')\r\n        sectionHead.classList.add('section-head')\r\n\r\n        const title = document.createElement('h3')\r\n        title.innerText = `New ${popupType}`\r\n\r\n        const closeBtn = document.createElement('button')\r\n        closeBtn.classList.add('btn-clean', 'btn-close')\r\n\r\n        const closeIcon = document.createElement('i')\r\n        closeIcon.classList.add('fa-solid', 'fa-xmark')\r\n\r\n        const form = document.createElement('form')\r\n        form.setAttribute('method', 'POST')\r\n\r\n        const labelInput = document.createElement('div')\r\n        labelInput.classList.add('label-input')\r\n\r\n        const label = document.createElement('label')\r\n        label.setAttribute('for', labelInputAttribute)\r\n        label.innerText = 'Title'\r\n\r\n        const input = document.createElement('input')\r\n        input.setAttribute('type', 'text')\r\n        input.setAttribute('id', labelInputAttribute)\r\n        input.setAttribute('placeholder', 'Type here...')\r\n\r\n\r\n        const submitBtn = document.createElement('button')\r\n        submitBtn.setAttribute('type', 'submit')\r\n        submitBtn.classList.add('btn', 'btn-regular')\r\n        submitBtn.innerText = `Create New ${popupType}`\r\n\r\n        const plusIcon = document.createElement('i')\r\n        plusIcon.classList.add('fa-solid', 'fa-plus')\r\n        submitBtn.prepend(plusIcon)\r\n\r\n        document.body.appendChild(popupDiv)\r\n\r\n        popupDiv.appendChild(sectionHead)\r\n\r\n        sectionHead.appendChild(title)\r\n        sectionHead.appendChild(closeBtn)\r\n        closeBtn.appendChild(closeIcon)\r\n        popupDiv.appendChild(form)\r\n        form.appendChild(labelInput)\r\n        labelInput.appendChild(label)\r\n        labelInput.appendChild(input)\r\n        form.appendChild(submitBtn)\r\n\r\n    }\r\n\r\n    changeCurrentClass(nextProjectTitle) {\r\n        _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeCurrent(nextProjectTitle)\r\n\r\n        // const projects = controller.getProjects()\r\n        const domProjects = document.querySelectorAll(\".project\")\r\n\r\n        if (nextProjectTitle == \"default\") {\r\n            nextProjectTitle = \"All Todos\"\r\n        }\r\n\r\n        console.log(nextProjectTitle)\r\n\r\n        const oldDomCurrent = document.querySelector('.current')\r\n        const newDomCurrent = Array.from(domProjects).find(domProject => domProject.textContent.includes(nextProjectTitle))\r\n\r\n        if (oldDomCurrent !== newDomCurrent) {\r\n            oldDomCurrent.classList.remove('current')\r\n            newDomCurrent.classList.add('current')\r\n\r\n            this.todoHeading.innerText = nextProjectTitle\r\n        }\r\n    }\r\n\r\n    changeCurrentListener() {\r\n        const domProjects = document.querySelectorAll('.project')\r\n\r\n\r\n        domProjects.forEach(domProject => {\r\n            domProject.addEventListener('click', () => {\r\n                // console.log(domProject.innerText, 'changecurrent listener')\r\n                // console.log(controller.getProjects())\r\n                let projectInnerText = domProject.innerText\r\n\r\n                if (projectInnerText === \"All Todos\") {\r\n                    projectInnerText = 'default'\r\n                }\r\n                // console.log(projectInnerText)\r\n                this.changeCurrentClass(projectInnerText)\r\n                this.showTodos()\r\n            })\r\n        })\r\n\r\n\r\n    }\r\n\r\n\r\n    projectDeleteBtn() {\r\n        // console.log('deleteBtn test')\r\n        const oldProjectDeleteBtn = document.getElementById('deleteProjectBtn')\r\n        if (oldProjectDeleteBtn) { oldProjectDeleteBtn.remove() }\r\n\r\n\r\n\r\n        const currentProject = _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrent()\r\n        // console.log(currentProject, 'joj')\r\n\r\n        if (currentProject && currentProject.type !== 'default') {\r\n            const btn = document.createElement('button')\r\n            btn.classList.add('btn', 'btn-warning')\r\n            btn.setAttribute('id', 'deleteProjectBtn')\r\n            btn.innerText = 'Delete Project'\r\n\r\n            const trashIcon = document.createElement('i')\r\n            trashIcon.classList.add('fa-solid', 'fa-trash')\r\n\r\n            btn.prepend(trashIcon)\r\n\r\n            btn.addEventListener('click', _controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeProject())\r\n\r\n            this.todoItems.appendChild(btn)\r\n\r\n        }\r\n    }\r\n\r\n    // createTodo() { }\r\n\r\n    // completeTodo() { }\r\n\r\n    // closePopup() { }\r\n\r\n}\r\n\r\n\r\n\r\nconst domController = new DomController()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domController);\n\n//# sourceURL=webpack://todo_list/./src/js/domController.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n    constructor(type) {\r\n        this.type = type\r\n        this.current = false\r\n    }\r\n\r\n    showTodos(arr) {\r\n        arr.forEach(todo => {\r\n            if (todo.project === this.type) {\r\n                console.log(todo)\r\n            }\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack://todo_list/./src/js/project.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\r\n    constructor(title, project) {\r\n        this.title = title\r\n        this.project = project\r\n        this.dateCreated = new Date().getDate()\r\n        this.isComplete = false\r\n    }\r\n\r\n    completeTodo() {\r\n        this.isComplete = true\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo_list/./src/js/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;