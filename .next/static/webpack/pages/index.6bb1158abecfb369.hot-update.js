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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar __N_SSG = true;\n// exports our homepage\nfunction Home(param) {\n    let { allData, yokaiData, alianData } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        home: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    marginLeft: \"10px\"\n                },\n                children: \"Dandadan! - Returned from WPDB\"\n            }, void 0, false, {\n                fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"/media/dandadance.gif\",\n                alt: \"Dandadan GIF\",\n                className: \"img-fluid mt-3 mb-3\"\n            }, void 0, false, {\n                fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: \"Main Characters\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    allData.map((param)=>{\n                        let { id, name } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\".concat(id),\n                            className: \"list-group-item list-group-item-action\",\n                            style: {\n                                backgroundColor: \"#d1a7f0\"\n                            },\n                            children: name\n                        }, id, false, {\n                            fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"list-group mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: \"Yokai\"\n                    }, void 0, false, {\n                        fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    yokaiData.map((param)=>{\n                        let { id, name } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/\".concat(id),\n                            className: \"list-group-item list-group-item-action\",\n                            style: {\n                                backgroundColor: \"#f8a1a1\"\n                            },\n                            children: name\n                        }, id, false, {\n                            fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nickfitzpatrick/Desktop/2024Q4/CS5513/CS5513w13/pages/index.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNaOztBQWdCN0IsdUJBQXVCO0FBQ1IsU0FBU0UsS0FBTSxLQUFpQztRQUFqQyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQWpDO0lBQzVCLHFCQUNFLDhEQUFDTCwwREFBTUE7UUFBQ00sSUFBSTs7MEJBQ1YsOERBQUNDO2dCQUFHQyxPQUFPO29CQUFFQyxZQUFZO2dCQUFPOzBCQUFHOzs7Ozs7MEJBQ25DLDhEQUFDQztnQkFDQ0MsS0FBSTtnQkFDSkMsS0FBSTtnQkFDSkMsV0FBVTs7Ozs7OzBCQUdaLDhEQUFDQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHUCxPQUFPOzRCQUFFQyxZQUFZO3dCQUFPO2tDQUFHOzs7Ozs7b0JBQ2xDTixRQUFRYSxHQUFHLENBQUM7NEJBQUMsRUFBRUMsRUFBRSxFQUFFQyxJQUFJLEVBQUU7NkNBQ3hCLDhEQUFDakIsa0RBQUlBOzRCQUFVa0IsTUFBTSxJQUFPLE9BQUhGOzRCQUFNSixXQUFVOzRCQUF5Q0wsT0FBTztnQ0FBRVksaUJBQWlCOzRCQUFTO3NDQUNsSEY7MkJBRFFEOzs7Ozs7Ozs7Ozs7MEJBTWYsOERBQUNIO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUdQLE9BQU87NEJBQUVDLFlBQVk7d0JBQU87a0NBQUc7Ozs7OztvQkFDbENMLFVBQVVZLEdBQUcsQ0FBQzs0QkFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRTs2Q0FDMUIsOERBQUNqQixrREFBSUE7NEJBQVVrQixNQUFNLElBQU8sT0FBSEY7NEJBQU1KLFdBQVU7NEJBQXlDTCxPQUFPO2dDQUFFWSxpQkFBaUI7NEJBQVM7c0NBQ2xIRjsyQkFEUUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQjtLQTdCd0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZ2V0U29ydGVkTGlzdCB9IGZyb20gXCJAL2xpYi9kYXRhXCI7XG5pbXBvcnQgeyBnZXRTb3J0ZWRZb2thaUxpc3QgfSBmcm9tIFwiQC9saWIvZGF0YS15b2thaVwiO1xuaW1wb3J0IHsgZ2V0U29ydGVkQWxpYW5MaXN0IH0gZnJvbSBcIkAvbGliL2RhdGEtYWxpYW5zXCI7XG5cblxuLy8gZGVmaW5lIGEgZ2V0U3RhdGljUHJvcHMoKSBmdW5jdGlvbiBcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsRGF0YSA9IGF3YWl0IGdldFNvcnRlZExpc3QoKTtcbiAgY29uc3QgeW9rYWlEYXRhID0gYXdhaXQgZ2V0U29ydGVkWW9rYWlMaXN0KCk7XG4gIGNvbnN0IGFsaWFuRGF0YSA9IGF3YWl0IGdldFNvcnRlZEFsaWFuTGlzdCgpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGFsbERhdGEsIHlva2FpRGF0YSwgYWxpYW5EYXRhICB9XG4gIH07XG59XG5cbi8vIGV4cG9ydHMgb3VyIGhvbWVwYWdlXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCB7IGFsbERhdGEsIHlva2FpRGF0YSwgYWxpYW5EYXRhIH0gKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBob21lPlxuICAgICAgPGgxIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT5EYW5kYWRhbiEgLSBSZXR1cm5lZCBmcm9tIFdQREI8L2gxPlxuICAgICAgPGltZyBcbiAgICAgICAgc3JjPVwiL21lZGlhL2RhbmRhZGFuY2UuZ2lmXCIgXG4gICAgICAgIGFsdD1cIkRhbmRhZGFuIEdJRlwiIFxuICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbXQtMyBtYi0zXCJcbiAgICAgIC8+XG4gICAgICB7LyogRGlzcGxheSBsaXN0IG9mIE1haW4gQ2hhcmFjdGVycyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiID5cbiAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT5NYWluIENoYXJhY3RlcnM8L2gyPlxuICAgICAgICB7YWxsRGF0YS5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxuICAgICAgICAgIDxMaW5rIGtleT17aWR9IGhyZWY9e2AvJHtpZH1gfSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyNkMWE3ZjAnfX0+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICB7LyogRGlzcGxheSBsaXN0IG9mIFlva2FpICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIG10LTRcIj5cbiAgICAgICAgPGgyIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JyB9fT5Zb2thaTwvaDI+XG4gICAgICAgIHt5b2thaURhdGEubWFwKCh7IGlkLCBuYW1lIH0pID0+IChcbiAgICAgICAgICA8TGluayBrZXk9e2lkfSBocmVmPXtgLyR7aWR9YH0gY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhhMWExJ319PlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufSJdLCJuYW1lcyI6WyJMYXlvdXQiLCJMaW5rIiwiSG9tZSIsImFsbERhdGEiLCJ5b2thaURhdGEiLCJhbGlhbkRhdGEiLCJob21lIiwiaDEiLCJzdHlsZSIsIm1hcmdpbkxlZnQiLCJpbWciLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsIm1hcCIsImlkIiwibmFtZSIsImhyZWYiLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});