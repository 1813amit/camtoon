"use strict";
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 8813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ InformationalLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/navigation/mobile-menu.js
var mobile_menu = __webpack_require__(4711);
;// CONCATENATED MODULE: ./components/navigation/header.js



function Header() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-[81px]"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: "fixed w-full h-[81px] top-0 px-3 py-5 border-b border-gray-300 bg-white z-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative flex justify-between items-center gap-4 max-w-screen-xl mx-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "text-2xl font-semibold text-gray-900 focus:ring-2 ring-violet-500",
                            children: "Camtoon\uD83D\uDCA5"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "md:flex hidden gap-8",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/tool",
                                        className: "underline-offset-2 decoration-2 hover:underline",
                                        children: "WebCam Tool"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/how-it-works",
                                        className: "underline-offset-2 decoration-2 hover:underline",
                                        children: "How Work IT"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: "underline-offset-2 decoration-2 hover:underline",
                                        children: "Blog"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/tool",
                            className: "md:inline-block hidden px-4 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded transition",
                            children: "Launch Tool"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(mobile_menu/* default */.Z, {})
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layouts/informational-layout.js


// import Footer from "../navigation/footer"
function InformationalLayout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            props.content
        ]
    });
}


/***/ }),

/***/ 2682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_github_btn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7127);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_github_btn__WEBPACK_IMPORTED_MODULE_1__]);
react_github_btn__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function OpenSourceBanner() {
    return /*#__PURE__*/ _jsx("section", {
        className: "px-3 border-b border-gray-300",
        children: /*#__PURE__*/ _jsx("div", {
            className: "flex flex-col items-center max-w-screen-xl mx-auto md:py-24 py-16 text-center"
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;