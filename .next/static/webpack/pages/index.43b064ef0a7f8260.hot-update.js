"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Header = (param)=>/*#__PURE__*/ {\n    let { title  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/offsetthunder48/Documents/Github/sumith/nextjs/pages/index.jsx\",\n        lineNumber: 3,\n        columnNumber: 31\n    }, undefined);\n};\n_c = Header;\nconst HomePage = ()=>{\n    _s();\n    const names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleClick = ()=>setLikes(likes + 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"/Users/offsetthunder48/Documents/Github/sumith/nextjs/pages/index.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, \"{name}\", false, {\n                        fileName: \"/Users/offsetthunder48/Documents/Github/sumith/nextjs/pages/index.jsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/offsetthunder48/Documents/Github/sumith/nextjs/pages/index.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/offsetthunder48/Documents/Github/sumith/nextjs/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/offsetthunder48/Documents/Github/sumith/nextjs/pages/index.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"m4sdoi624sGASZMfyLgbxubRP0c=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUVqQyxNQUFNQyxTQUFTLHVCQUFlO1FBQWQsRUFBRUMsTUFBSyxFQUFFO1dBQUssOERBQUNDO2tCQUFJRCxRQUFRQSxRQUFRLGVBQWU7Ozs7OztBQUFLO0tBQWpFRDtBQUVOLE1BQU1HLFdBQVcsSUFBTTs7SUFDckIsTUFBTUMsUUFBUTtRQUFDO1FBQWdCO1FBQWdCO0tBQW9CO0lBQ25FLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNUSxjQUFjLElBQU1ELFNBQVNELFFBQVE7SUFDM0MscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQU9SLE9BQU07Ozs7OzswQkFDZCw4REFBQ1M7MEJBQ0VOLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7a0NBQWlCRDt1QkFBVjs7Ozs7Ozs7OzswQkFHWiw4REFBQ0U7Z0JBQU9DLFNBQVMsSUFBTVI7O29CQUFhO29CQUFPRjtvQkFBTTs7Ozs7Ozs7Ozs7OztBQUd2RDtHQWZNRjtNQUFBQTtBQWlCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoeyB0aXRsZSB9KSA9PiA8aDE+e3RpdGxlID8gdGl0bGUgOiBcIkRlZmF1bHQgdGl0bGVcIn08L2gxPjtcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1wiQWRhIExvdmVsYWNlXCIsIFwiR3JhY2UgSG9wcGVyXCIsIFwiTWFyZ2FyZXQgSGFtaWx0b25cIl07XG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4gc2V0TGlrZXMobGlrZXMgKyAxKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxuICAgICAgPHVsPlxuICAgICAgICB7bmFtZXMubWFwKChuYW1lKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT1cIntuYW1lfVwiPntuYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2t9Pkxpa2UgKHtsaWtlc30pPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJIb21lUGFnZSIsIm5hbWVzIiwibGlrZXMiLCJzZXRMaWtlcyIsImhhbmRsZUNsaWNrIiwiZGl2IiwiaGVhZGVyIiwidWwiLCJtYXAiLCJuYW1lIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});