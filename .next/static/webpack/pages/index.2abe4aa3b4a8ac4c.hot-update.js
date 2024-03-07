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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/layout/Layout */ \"./src/layout/Layout.js\");\n/* harmony import */ var components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/About */ \"./src/components/About.js\");\n/* harmony import */ var components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Contact */ \"./src/components/Contact.js\");\n/* harmony import */ var components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Home */ \"./src/components/Home.js\");\n/* harmony import */ var components_News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/News */ \"./src/components/News.js\");\n/* harmony import */ var components_Service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Service */ \"./src/components/Service.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Portfolio = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = ()=>Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! components/Portfolio */ \"./src/components/Portfolio.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"components/Portfolio\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Portfolio;\nconst Index = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const [contactSectionRef, setContactSectionRef] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);\n    const [serviceSectionRef, setServiceSectionRef] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);\n    const [portfolioSectionRef, setPortfolioSectionRef] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);\n    const [homeSectionRef, setHomeSectionRef] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>setIsClient(true), []);\n    const scrollIntoView = (target)=>{\n        console.log(\"target - \", target);\n        if (target === \"contact\") {\n            if (contactSectionRef.current) {\n                contactSectionRef.current.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n        if (target === \"services\") {\n            if (serviceSectionRef.current) {\n                serviceSectionRef.current.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n        if (target === \"portfolio\") {\n            if (portfolioSectionRef.current) {\n                portfolioSectionRef.current.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n        if (target === \"home\") {\n            if (homeSectionRef.current) {\n                homeSectionRef.current.scrollIntoView({\n                    behavior: \"smooth\"\n                });\n            }\n        }\n    };\n    if (!isClient) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        scrollIntoView: scrollIntoView,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Home__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                setContactSectionRef: setContactSectionRef,\n                setServiceSectionRef: setServiceSectionRef,\n                setPortfolioSectionRef: setPortfolioSectionRef,\n                setHomeSectionRef: setHomeSectionRef\n            }, void 0, false, {\n                fileName: \"/Users/yasmin/Desktop/portfolio/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yasmin/Desktop/portfolio/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Service__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yasmin/Desktop/portfolio/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tokyo_tm_portfolio_titles\"\n            }, void 0, false, {\n                fileName: \"/Users/yasmin/Desktop/portfolio/pages/index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_News__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/yasmin/Desktop/portfolio/pages/index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yasmin/Desktop/portfolio/pages/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"r8E1nS3atA5H5M4DTBA3wKKSLXk=\");\n_c2 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Portfolio$dynamic\");\n$RefreshReg$(_c1, \"Portfolio\");\n$RefreshReg$(_c2, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSjtBQUNJO0FBQ047QUFDQTtBQUNNO0FBQ047QUFDK0I7QUFDbEUsTUFBTVcsWUFBWUwsbURBQU9BLE1BQUMsSUFBTSxpSkFBTzs7Ozs7O0lBQ3JDTSxLQUFLLEtBQUs7OztBQUVaLE1BQU1DLFFBQVEsSUFBTTs7SUFDbEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDOUMsTUFBTSxDQUFDTSxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQy9ELE1BQU0sQ0FBQ1EsbUJBQW1CQyxxQkFBcUIsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUMvRCxNQUFNLENBQUNVLHFCQUFxQkMsdUJBQXVCLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFDbkUsTUFBTSxDQUFDWSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXpERCxnREFBU0EsQ0FBQyxJQUFNTSxZQUFZLElBQUksR0FBRyxFQUFFO0lBQ3JDLE1BQU1TLGlCQUFpQixDQUFDQyxTQUFXO1FBQ2pDQyxRQUFRQyxHQUFHLENBQUMsYUFBYUY7UUFDekIsSUFBSUEsV0FBVyxXQUFXO1lBQ3hCLElBQUlULGtCQUFrQlksT0FBTyxFQUFFO2dCQUM3Qlosa0JBQWtCWSxPQUFPLENBQUNKLGNBQWMsQ0FBQztvQkFBRUssVUFBVTtnQkFBUztZQUNoRSxDQUFDO1FBQ0gsQ0FBQztRQUNELElBQUlKLFdBQVcsWUFBWTtZQUN6QixJQUFJUCxrQkFBa0JVLE9BQU8sRUFBRTtnQkFDN0JWLGtCQUFrQlUsT0FBTyxDQUFDSixjQUFjLENBQUM7b0JBQUVLLFVBQVU7Z0JBQVM7WUFDaEUsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJSixXQUFXLGFBQWE7WUFDMUIsSUFBSUwsb0JBQW9CUSxPQUFPLEVBQUU7Z0JBQy9CUixvQkFBb0JRLE9BQU8sQ0FBQ0osY0FBYyxDQUFDO29CQUFFSyxVQUFVO2dCQUFTO1lBQ2xFLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSUosV0FBVyxRQUFRO1lBQ3JCLElBQUlILGVBQWVNLE9BQU8sRUFBRTtnQkFDMUJOLGVBQWVNLE9BQU8sQ0FBQ0osY0FBYyxDQUFDO29CQUFFSyxVQUFVO2dCQUFTO1lBQzdELENBQUM7UUFDSCxDQUFDO0lBQ0g7SUFDQSxJQUFJLENBQUNmLFVBQVUsT0FBTyxJQUFJO0lBQzFCLHFCQUNFLDhEQUFDZCwwREFBTUE7UUFBQ3dCLGdCQUFnQkE7OzBCQUV0Qiw4REFBQ3JCLHVEQUFJQTtnQkFDSGMsc0JBQXNCQTtnQkFDdEJFLHNCQUFzQkE7Z0JBQ3RCRSx3QkFBd0JBO2dCQUN4QkUsbUJBQW1CQTs7Ozs7OzBCQUlyQiw4REFBQ3RCLHdEQUFLQTs7Ozs7MEJBR04sOERBQUNJLDBEQUFPQTs7Ozs7MEJBRVIsOERBQUN5QjtnQkFBSUMsV0FBVTs7Ozs7OzBCQUtmLDhEQUFDM0IsdURBQUlBOzs7Ozs7Ozs7OztBQU9YO0dBNURNUztNQUFBQTtBQTZETiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnQC9zcmMvbGF5b3V0L0xheW91dCc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnY29tcG9uZW50cy9BYm91dCc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICdjb21wb25lbnRzL0NvbnRhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnY29tcG9uZW50cy9Ib21lJztcbmltcG9ydCBOZXdzIGZyb20gJ2NvbXBvbmVudHMvTmV3cyc7XG5pbXBvcnQgU2VydmljZSBmcm9tICdjb21wb25lbnRzL1NlcnZpY2UnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgUG9ydGZvbGlvID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2NvbXBvbmVudHMvUG9ydGZvbGlvJyksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29udGFjdFNlY3Rpb25SZWYsIHNldENvbnRhY3RTZWN0aW9uUmVmXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VydmljZVNlY3Rpb25SZWYsIHNldFNlcnZpY2VTZWN0aW9uUmVmXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcG9ydGZvbGlvU2VjdGlvblJlZiwgc2V0UG9ydGZvbGlvU2VjdGlvblJlZl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2hvbWVTZWN0aW9uUmVmLCBzZXRIb21lU2VjdGlvblJlZl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gc2V0SXNDbGllbnQodHJ1ZSksIFtdKTtcbiAgY29uc3Qgc2Nyb2xsSW50b1ZpZXcgPSAodGFyZ2V0KSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3RhcmdldCAtICcsIHRhcmdldCk7XG4gICAgaWYgKHRhcmdldCA9PT0gJ2NvbnRhY3QnKSB7XG4gICAgICBpZiAoY29udGFjdFNlY3Rpb25SZWYuY3VycmVudCkge1xuICAgICAgICBjb250YWN0U2VjdGlvblJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSAnc2VydmljZXMnKSB7XG4gICAgICBpZiAoc2VydmljZVNlY3Rpb25SZWYuY3VycmVudCkge1xuICAgICAgICBzZXJ2aWNlU2VjdGlvblJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09PSAncG9ydGZvbGlvJykge1xuICAgICAgaWYgKHBvcnRmb2xpb1NlY3Rpb25SZWYuY3VycmVudCkge1xuICAgICAgICBwb3J0Zm9saW9TZWN0aW9uUmVmLmN1cnJlbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0YXJnZXQgPT09ICdob21lJykge1xuICAgICAgaWYgKGhvbWVTZWN0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgaG9tZVNlY3Rpb25SZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGlmICghaXNDbGllbnQpIHJldHVybiBudWxsO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgc2Nyb2xsSW50b1ZpZXc9e3Njcm9sbEludG9WaWV3fT5cbiAgICAgIHsvKiBIT01FICovfVxuICAgICAgPEhvbWVcbiAgICAgICAgc2V0Q29udGFjdFNlY3Rpb25SZWY9e3NldENvbnRhY3RTZWN0aW9uUmVmfVxuICAgICAgICBzZXRTZXJ2aWNlU2VjdGlvblJlZj17c2V0U2VydmljZVNlY3Rpb25SZWZ9XG4gICAgICAgIHNldFBvcnRmb2xpb1NlY3Rpb25SZWY9e3NldFBvcnRmb2xpb1NlY3Rpb25SZWZ9XG4gICAgICAgIHNldEhvbWVTZWN0aW9uUmVmPXtzZXRIb21lU2VjdGlvblJlZn1cbiAgICAgIC8+XG4gICAgICB7LyogL0hPTUUgKi99XG4gICAgICB7LyogQUJPVVQgKi99XG4gICAgICA8QWJvdXQgLz5cbiAgICAgIHsvKiAvQUJPVVQgKi99XG4gICAgICB7LyogU0VSVklDRSAqL31cbiAgICAgIDxTZXJ2aWNlIC8+XG4gICAgICB7LyogL1NFUlZJQ0UgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRva3lvX3RtX3BvcnRmb2xpb190aXRsZXNcIiAvPlxuICAgICAgey8qIFBPUlRGT0xJTyAqL31cbiAgICAgIHsvKiA8UG9ydGZvbGlvIC8+ICovfVxuICAgICAgey8qIC9QT1JURk9MSU8gKi99XG4gICAgICB7LyogTkVXUyAqL31cbiAgICAgIDxOZXdzIC8+XG4gICAgICB7LyogL05FV1MgKi99XG4gICAgICB7LyogQ09OVEFDVCAqL31cbiAgICAgIHsvKiA8Q29udGFjdCAvPiAqL31cbiAgICAgIHsvKiAvQ09OVEFDVCAqL31cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJBYm91dCIsIkNvbnRhY3QiLCJIb21lIiwiTmV3cyIsIlNlcnZpY2UiLCJkeW5hbWljIiwiRnJhZ21lbnQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb3J0Zm9saW8iLCJzc3IiLCJJbmRleCIsImlzQ2xpZW50Iiwic2V0SXNDbGllbnQiLCJjb250YWN0U2VjdGlvblJlZiIsInNldENvbnRhY3RTZWN0aW9uUmVmIiwic2VydmljZVNlY3Rpb25SZWYiLCJzZXRTZXJ2aWNlU2VjdGlvblJlZiIsInBvcnRmb2xpb1NlY3Rpb25SZWYiLCJzZXRQb3J0Zm9saW9TZWN0aW9uUmVmIiwiaG9tZVNlY3Rpb25SZWYiLCJzZXRIb21lU2VjdGlvblJlZiIsInNjcm9sbEludG9WaWV3IiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJiZWhhdmlvciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});