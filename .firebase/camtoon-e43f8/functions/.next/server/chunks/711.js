"use strict";
exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 4711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MobileMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function MobileMenu() {
    const [mobileMenuActive, setMobileMenuActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const mobileMenu = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const menuButton = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!mobileMenuActive) return;
        function handleClick(event) {
            if (mobileMenu.current && !mobileMenu.current.contains(event.target) && !menuButton.current.contains(event.target)) {
                setMobileMenuActive(false);
            }
        }
        window.addEventListener("click", handleClick);
        return ()=>window.removeEventListener("click", handleClick);
    }, [
        mobileMenuActive
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            setMobileMenuActive(false);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "md:hidden block relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                "aria-label": "Mobile menu",
                ref: menuButton,
                onClick: ()=>setMobileMenuActive(!mobileMenuActive),
                className: "md:hidden block focus:ring-2 ring-violet-500 my-2",
                children: !mobileMenuActive ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "w-6 h-6 text-gray-900 cursor-pointer",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    className: "w-6 h-6 text-gray-900 cursor-pointer",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: "1.5",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M6 18L18 6M6 6l12 12"
                    })
                })
            }),
            mobileMenuActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: mobileMenu,
                className: "md:hidden block absolute top-9 right-0 h-fit w-44 py-2 bg-white text-gray-900 rounded shadow z-30",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/tool",
                                className: "block p-3 hover:bg-gray-100",
                                children: "Portrait Tool"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/how-it-works",
                                className: "block p-3 hover:bg-gray-100",
                                children: "How It Works"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/",
                                className: "block p-3 hover:bg-gray-100",
                                children: "Blog"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "https://github.com/brandonbyr4/comicfun",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "block p-3 hover:bg-gray-100",
                                children: "Github"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;