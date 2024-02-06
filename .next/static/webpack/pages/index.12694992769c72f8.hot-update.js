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

/***/ "./src/components/service/ServiceItems.js":
/*!************************************************!*\
  !*** ./src/components/service/ServiceItems.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/Context */ \"./src/Context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst services = [\n    {\n        id: 1,\n        name: \"Web Development\",\n        text: [\n            \"It is my aim to create innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.\",\n            \"Global Accessibility: Reach a global audience with a well-crafted web application.\",\n            \"Enhanced User Interaction: Provide a dynamic and interactive user experience on the web.\",\n            \"Scalability and Adaptability: Scale your web app to accommodate growing user needs and technological advancements.\"\n        ],\n        image: \"assets/img/news/1.jpg\"\n    },\n    {\n        id: 2,\n        name: \"Mobile Apps\",\n        text: [\n            \"In an era where accessibility and user engagement are paramount, having a robust mobile presence is non-negotiable. As a seasoned developer, I bring my expertise to the world of mobile app development, offering tailored solutions that seamlessly integrate with your business objectives.\",\n            \"Leverage the power of mobile applications to tap into a broader audience base. With millions of users accessing information on the go, a well-crafted mobile app can be a game-changer for your business.\",\n            \"A mobile app provides a personalized and optimized experience for users. Tailoring the interface to fit various device screens ensures an intuitive and engaging interaction, fostering user satisfaction and loyalty.\",\n            \"Stand out in a crowded digital landscape by establishing a strong presence on mobile devices. A well-designed app not only reinforces brand identity but also makes your services accessible at the fingertips of your audience.\",\n            \"Mobile apps can leverage device features such as cameras, GPS, and notifications, enhancing functionality and user experience. This opens up exciting possibilities for interactive and dynamic applications.\"\n        ],\n        image: \"assets/img/news/2.jpg\"\n    },\n    {\n        id: 3,\n        name: \"E-Commerce\",\n        text: [\n            \"In a digital age where online presence is pivotal, crafting an effective e-commerce platform is imperative. With expertise in e-commerce development, I deliver tailored solutions aligning seamlessly with your business goals.\",\n            \"Shopify simplifies the process of setting up and managing an online store. Its user-friendly interface allows businesses to focus on what they do best—selling products—without the complexities of technical intricacies.\",\n            \"Whether you're a startup or an established enterprise, Shopify offers flexibility and scalability. Easily customize your store to match your brand, and scale effortlessly as your business grows.\",\n            \"With an increasing number of users shopping on mobile devices, having a mobile-optimized store is crucial. Shopify ensures a seamless and responsive shopping experience for customers on various devices.\",\n            \"Trust is paramount in e-commerce. Shopify provides robust security features to safeguard customer data and ensure secure transactions, instilling confidence in your online shoppers.\"\n        ],\n        image: \"assets/img/news/2.jpg\"\n    }\n];\nconst ServiceItems = ()=>{\n    _s();\n    const { setServiceModal , modalToggle , modal  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_src_Context__WEBPACK_IMPORTED_MODULE_1__.TokyoContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"list w-full h-[48px] clear-both float-left\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"ml-[-40px] list-none flex flex-wrap\",\n            children: services.map((service)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"mb-[40px] w-1/3 pl-[40px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"list_inner w-full clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300\",\n                                children: service.id <= 9 ? \"0\".concat(service.id) : service.id\n                            }, void 0, false, {\n                                fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                lineNumber: 49,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"title font-bold text-black text-[18px] mb-[15px]\",\n                                children: service.name\n                            }, void 0, false, {\n                                fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text\",\n                                children: [\n                                    service.text[0].slice(0, 70),\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"tokyo_tm_read_more\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    onClick: ()=>{\n                                        modalToggle(true);\n                                        setServiceModal(service);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Read More\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"tokyo_tm_full_link\",\n                                href: \"#\",\n                                onClick: ()=>{\n                                    modalToggle(true);\n                                    setServiceModal(service);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"popup_service_image opacity-0 invisible hidden absolute z-[-111]\",\n                                src: service.image,\n                                alt: \"image\"\n                            }, void 0, false, {\n                                fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, undefined)\n                }, service.id, false, {\n                    fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yasmin/Desktop/portfolio/src/components/service/ServiceItems.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ServiceItems, \"trhFCUTbrCZPykZifd0hCfOyuAo=\");\n_c = ServiceItems;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceItems);\nvar _c;\n$RefreshReg$(_c, \"ServiceItems\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZXJ2aWNlL1NlcnZpY2VJdGVtcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNWO0FBRW5DLE1BQU1FLFdBQVc7SUFDZjtRQUNFQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtZQUNKO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07WUFDSjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsT0FBTztJQUNUO0lBQ0E7UUFDRUgsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07WUFDSjtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7UUFDREMsT0FBTztJQUNUO0NBQ0Q7QUFDRCxNQUFNQyxlQUFlLElBQU07O0lBQ3pCLE1BQU0sRUFBRUMsZ0JBQWUsRUFBRUMsWUFBVyxFQUFFQyxNQUFLLEVBQUUsR0FBR1QsaURBQVVBLENBQUNELHNEQUFZQTtJQUN2RSxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBR0QsV0FBVTtzQkFDWFYsU0FBU1ksR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDQztvQkFBR0osV0FBVTs4QkFDWiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSztnQ0FBS0wsV0FBVTswQ0FDYkcsUUFBUVosRUFBRSxJQUFJLElBQUksSUFBZSxPQUFYWSxRQUFRWixFQUFFLElBQUtZLFFBQVFaLEVBQUU7Ozs7OzswQ0FFbEQsOERBQUNlO2dDQUFHTixXQUFVOzBDQUNYRyxRQUFRWCxJQUFJOzs7Ozs7MENBRWYsOERBQUNlO2dDQUFFUCxXQUFVOztvQ0FBUUcsUUFBUVYsSUFBSSxDQUFDLEVBQUUsQ0FBQ2UsS0FBSyxDQUFDLEdBQUc7b0NBQUk7Ozs7Ozs7MENBQ2xELDhEQUFDVDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ1M7b0NBQ0NDLE1BQUs7b0NBQ0xDLFNBQVMsSUFBTTt3Q0FDYmQsWUFBWSxJQUFJO3dDQUNoQkQsZ0JBQWdCTztvQ0FDbEI7OENBRUEsNEVBQUNFO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdWLDhEQUFDSTtnQ0FDQ1QsV0FBVTtnQ0FDVlUsTUFBSztnQ0FDTEMsU0FBUyxJQUFNO29DQUNiZCxZQUFZLElBQUk7b0NBQ2hCRCxnQkFBZ0JPO2dDQUNsQjs7Ozs7OzBDQUdGLDhEQUFDUztnQ0FDQ1osV0FBVTtnQ0FDVmEsS0FBS1YsUUFBUVQsS0FBSztnQ0FDbEJvQixLQUFJOzs7Ozs7Ozs7Ozs7bUJBaENxQ1gsUUFBUVosRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0FBd0NuRTtHQTlDTUk7S0FBQUE7QUErQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZS9TZXJ2aWNlSXRlbXMuanM/MGI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2t5b0NvbnRleHQgfSBmcm9tICdAL3NyYy9Db250ZXh0JztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHNlcnZpY2VzID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmFtZTogJ1dlYiBEZXZlbG9wbWVudCcsXHJcbiAgICB0ZXh0OiBbXHJcbiAgICAgICdJdCBpcyBteSBhaW0gdG8gY3JlYXRlIGlubm92YXRpdmUsIGVmZmVjdGl2ZSB3ZWJzaXRlcyB0aGF0IGNhcHR1cmUgeW91ciBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZCBtYXhpbWl6ZSB5b3VyIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3MgYW5kIGFjaGlldmUgeW91ciBnb2Fscy4nLFxyXG4gICAgICAnR2xvYmFsIEFjY2Vzc2liaWxpdHk6IFJlYWNoIGEgZ2xvYmFsIGF1ZGllbmNlIHdpdGggYSB3ZWxsLWNyYWZ0ZWQgd2ViIGFwcGxpY2F0aW9uLicsXHJcbiAgICAgICdFbmhhbmNlZCBVc2VyIEludGVyYWN0aW9uOiBQcm92aWRlIGEgZHluYW1pYyBhbmQgaW50ZXJhY3RpdmUgdXNlciBleHBlcmllbmNlIG9uIHRoZSB3ZWIuJyxcclxuICAgICAgJ1NjYWxhYmlsaXR5IGFuZCBBZGFwdGFiaWxpdHk6IFNjYWxlIHlvdXIgd2ViIGFwcCB0byBhY2NvbW1vZGF0ZSBncm93aW5nIHVzZXIgbmVlZHMgYW5kIHRlY2hub2xvZ2ljYWwgYWR2YW5jZW1lbnRzLicsXHJcbiAgICBdLFxyXG4gICAgaW1hZ2U6ICdhc3NldHMvaW1nL25ld3MvMS5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnTW9iaWxlIEFwcHMnLFxyXG4gICAgdGV4dDogW1xyXG4gICAgICAnSW4gYW4gZXJhIHdoZXJlIGFjY2Vzc2liaWxpdHkgYW5kIHVzZXIgZW5nYWdlbWVudCBhcmUgcGFyYW1vdW50LCBoYXZpbmcgYSByb2J1c3QgbW9iaWxlIHByZXNlbmNlIGlzIG5vbi1uZWdvdGlhYmxlLiBBcyBhIHNlYXNvbmVkIGRldmVsb3BlciwgSSBicmluZyBteSBleHBlcnRpc2UgdG8gdGhlIHdvcmxkIG9mIG1vYmlsZSBhcHAgZGV2ZWxvcG1lbnQsIG9mZmVyaW5nIHRhaWxvcmVkIHNvbHV0aW9ucyB0aGF0IHNlYW1sZXNzbHkgaW50ZWdyYXRlIHdpdGggeW91ciBidXNpbmVzcyBvYmplY3RpdmVzLicsXHJcbiAgICAgICdMZXZlcmFnZSB0aGUgcG93ZXIgb2YgbW9iaWxlIGFwcGxpY2F0aW9ucyB0byB0YXAgaW50byBhIGJyb2FkZXIgYXVkaWVuY2UgYmFzZS4gV2l0aCBtaWxsaW9ucyBvZiB1c2VycyBhY2Nlc3NpbmcgaW5mb3JtYXRpb24gb24gdGhlIGdvLCBhIHdlbGwtY3JhZnRlZCBtb2JpbGUgYXBwIGNhbiBiZSBhIGdhbWUtY2hhbmdlciBmb3IgeW91ciBidXNpbmVzcy4nLFxyXG4gICAgICAnQSBtb2JpbGUgYXBwIHByb3ZpZGVzIGEgcGVyc29uYWxpemVkIGFuZCBvcHRpbWl6ZWQgZXhwZXJpZW5jZSBmb3IgdXNlcnMuIFRhaWxvcmluZyB0aGUgaW50ZXJmYWNlIHRvIGZpdCB2YXJpb3VzIGRldmljZSBzY3JlZW5zIGVuc3VyZXMgYW4gaW50dWl0aXZlIGFuZCBlbmdhZ2luZyBpbnRlcmFjdGlvbiwgZm9zdGVyaW5nIHVzZXIgc2F0aXNmYWN0aW9uIGFuZCBsb3lhbHR5LicsXHJcbiAgICAgICdTdGFuZCBvdXQgaW4gYSBjcm93ZGVkIGRpZ2l0YWwgbGFuZHNjYXBlIGJ5IGVzdGFibGlzaGluZyBhIHN0cm9uZyBwcmVzZW5jZSBvbiBtb2JpbGUgZGV2aWNlcy4gQSB3ZWxsLWRlc2lnbmVkIGFwcCBub3Qgb25seSByZWluZm9yY2VzIGJyYW5kIGlkZW50aXR5IGJ1dCBhbHNvIG1ha2VzIHlvdXIgc2VydmljZXMgYWNjZXNzaWJsZSBhdCB0aGUgZmluZ2VydGlwcyBvZiB5b3VyIGF1ZGllbmNlLicsXHJcbiAgICAgICdNb2JpbGUgYXBwcyBjYW4gbGV2ZXJhZ2UgZGV2aWNlIGZlYXR1cmVzIHN1Y2ggYXMgY2FtZXJhcywgR1BTLCBhbmQgbm90aWZpY2F0aW9ucywgZW5oYW5jaW5nIGZ1bmN0aW9uYWxpdHkgYW5kIHVzZXIgZXhwZXJpZW5jZS4gVGhpcyBvcGVucyB1cCBleGNpdGluZyBwb3NzaWJpbGl0aWVzIGZvciBpbnRlcmFjdGl2ZSBhbmQgZHluYW1pYyBhcHBsaWNhdGlvbnMuJyxcclxuICAgIF0sXHJcbiAgICBpbWFnZTogJ2Fzc2V0cy9pbWcvbmV3cy8yLmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5hbWU6ICdFLUNvbW1lcmNlJyxcclxuICAgIHRleHQ6IFtcclxuICAgICAgJ0luIGEgZGlnaXRhbCBhZ2Ugd2hlcmUgb25saW5lIHByZXNlbmNlIGlzIHBpdm90YWwsIGNyYWZ0aW5nIGFuIGVmZmVjdGl2ZSBlLWNvbW1lcmNlIHBsYXRmb3JtIGlzIGltcGVyYXRpdmUuIFdpdGggZXhwZXJ0aXNlIGluIGUtY29tbWVyY2UgZGV2ZWxvcG1lbnQsIEkgZGVsaXZlciB0YWlsb3JlZCBzb2x1dGlvbnMgYWxpZ25pbmcgc2VhbWxlc3NseSB3aXRoIHlvdXIgYnVzaW5lc3MgZ29hbHMuJyxcclxuICAgICAgJ1Nob3BpZnkgc2ltcGxpZmllcyB0aGUgcHJvY2VzcyBvZiBzZXR0aW5nIHVwIGFuZCBtYW5hZ2luZyBhbiBvbmxpbmUgc3RvcmUuIEl0cyB1c2VyLWZyaWVuZGx5IGludGVyZmFjZSBhbGxvd3MgYnVzaW5lc3NlcyB0byBmb2N1cyBvbiB3aGF0IHRoZXkgZG8gYmVzdOKAlHNlbGxpbmcgcHJvZHVjdHPigJR3aXRob3V0IHRoZSBjb21wbGV4aXRpZXMgb2YgdGVjaG5pY2FsIGludHJpY2FjaWVzLicsXHJcbiAgICAgIFwiV2hldGhlciB5b3UncmUgYSBzdGFydHVwIG9yIGFuIGVzdGFibGlzaGVkIGVudGVycHJpc2UsIFNob3BpZnkgb2ZmZXJzIGZsZXhpYmlsaXR5IGFuZCBzY2FsYWJpbGl0eS4gRWFzaWx5IGN1c3RvbWl6ZSB5b3VyIHN0b3JlIHRvIG1hdGNoIHlvdXIgYnJhbmQsIGFuZCBzY2FsZSBlZmZvcnRsZXNzbHkgYXMgeW91ciBidXNpbmVzcyBncm93cy5cIixcclxuICAgICAgJ1dpdGggYW4gaW5jcmVhc2luZyBudW1iZXIgb2YgdXNlcnMgc2hvcHBpbmcgb24gbW9iaWxlIGRldmljZXMsIGhhdmluZyBhIG1vYmlsZS1vcHRpbWl6ZWQgc3RvcmUgaXMgY3J1Y2lhbC4gU2hvcGlmeSBlbnN1cmVzIGEgc2VhbWxlc3MgYW5kIHJlc3BvbnNpdmUgc2hvcHBpbmcgZXhwZXJpZW5jZSBmb3IgY3VzdG9tZXJzIG9uIHZhcmlvdXMgZGV2aWNlcy4nLFxyXG4gICAgICAnVHJ1c3QgaXMgcGFyYW1vdW50IGluIGUtY29tbWVyY2UuIFNob3BpZnkgcHJvdmlkZXMgcm9idXN0IHNlY3VyaXR5IGZlYXR1cmVzIHRvIHNhZmVndWFyZCBjdXN0b21lciBkYXRhIGFuZCBlbnN1cmUgc2VjdXJlIHRyYW5zYWN0aW9ucywgaW5zdGlsbGluZyBjb25maWRlbmNlIGluIHlvdXIgb25saW5lIHNob3BwZXJzLicsXHJcbiAgICBdLFxyXG4gICAgaW1hZ2U6ICdhc3NldHMvaW1nL25ld3MvMi5qcGcnLFxyXG4gIH0sXHJcbl07XHJcbmNvbnN0IFNlcnZpY2VJdGVtcyA9ICgpID0+IHtcclxuICBjb25zdCB7IHNldFNlcnZpY2VNb2RhbCwgbW9kYWxUb2dnbGUsIG1vZGFsIH0gPSB1c2VDb250ZXh0KFRva3lvQ29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdCB3LWZ1bGwgaC1bNDhweF0gY2xlYXItYm90aCBmbG9hdC1sZWZ0XCI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtbC1bLTQwcHhdIGxpc3Qtbm9uZSBmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIHtzZXJ2aWNlcy5tYXAoKHNlcnZpY2UpID0+IChcclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi1bNDBweF0gdy0xLzMgcGwtWzQwcHhdXCIga2V5PXtzZXJ2aWNlLmlkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyIHctZnVsbCBjbGVhci1ib3RoIGZsb2F0LWxlZnQgcmVsYXRpdmUgYm9yZGVyLXNvbGlkIGJvcmRlci1bcmdiYSgwLDAsMCwuMSldIGJvcmRlciBiZy13aGl0ZSBwdC1bNDVweF0gcHItWzMwcHhdIHBiLVs0MHB4XSBwbC1bMzBweF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyIGlubGluZS1ibG9jayBtYi1bMjVweF0gcmVsYXRpdmUgdy1bNjBweF0gaC1bNjBweF0gbGVhZGluZy1bNjBweF0gdGV4dC1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLVtyZ2JhKDAsMCwwLC4wMyldIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIGZvbnQtbW9udHNlcnJhdCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cclxuICAgICAgICAgICAgICAgIHtzZXJ2aWNlLmlkIDw9IDkgPyBgMCR7c2VydmljZS5pZH1gIDogc2VydmljZS5pZH1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlIGZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtWzE4cHhdIG1iLVsxNXB4XVwiPlxyXG4gICAgICAgICAgICAgICAge3NlcnZpY2UubmFtZX1cclxuICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHRcIj57c2VydmljZS50ZXh0WzBdLnNsaWNlKDAsIDcwKX0uLi48L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2t5b190bV9yZWFkX21vcmVcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVG9nZ2xlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlcnZpY2VNb2RhbChzZXJ2aWNlKTtcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+UmVhZCBNb3JlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2t5b190bV9mdWxsX2xpbmtcIlxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBtb2RhbFRvZ2dsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgc2V0U2VydmljZU1vZGFsKHNlcnZpY2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHsvKiBTZXJ2aWNlIFBvcHVwIFN0YXJ0ICovfVxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvcHVwX3NlcnZpY2VfaW1hZ2Ugb3BhY2l0eS0wIGludmlzaWJsZSBoaWRkZW4gYWJzb2x1dGUgei1bLTExMV1cIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtzZXJ2aWNlLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VJdGVtcztcclxuIl0sIm5hbWVzIjpbIlRva3lvQ29udGV4dCIsInVzZUNvbnRleHQiLCJzZXJ2aWNlcyIsImlkIiwibmFtZSIsInRleHQiLCJpbWFnZSIsIlNlcnZpY2VJdGVtcyIsInNldFNlcnZpY2VNb2RhbCIsIm1vZGFsVG9nZ2xlIiwibW9kYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInNlcnZpY2UiLCJsaSIsInNwYW4iLCJoMyIsInAiLCJzbGljZSIsImEiLCJocmVmIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/service/ServiceItems.js\n"));

/***/ })

});