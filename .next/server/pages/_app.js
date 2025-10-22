/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/AuthContext.jsx":
/*!*************************************!*\
  !*** ./src/context/AuthContext.jsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useApiClient */ \"./src/hooks/useApiClient.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useApiClient__WEBPACK_IMPORTED_MODULE_2__]);\n_hooks_useApiClient__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AuthProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchSession = async ()=>{\n            try {\n                const { data } = await _hooks_useApiClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/session\");\n                setUser(data.user);\n            } catch (error) {\n                setUser(null);\n            } finally{\n                setIsLoading(false);\n            }\n        };\n        fetchSession();\n    }, []);\n    const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({\n            user,\n            setUser,\n            isAuthenticated: Boolean(user),\n            isLoading\n        }), [\n        user,\n        isLoading\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/abdulraheem/Documents/frontend/src/context/AuthContext.jsx\",\n        lineNumber: 35,\n        columnNumber: 10\n    }, undefined);\n};\nconst useAuth = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n    if (!context) {\n        throw new Error(\"useAuth must be used within an AuthProvider\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0U7QUFDbEM7QUFFN0MsTUFBTU0sNEJBQWNOLG9EQUFhQSxDQUFDTztBQUUzQixNQUFNQyxlQUFlLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0NGLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksZUFBZTtZQUNuQixJQUFJO2dCQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTVYsK0RBQWEsQ0FBQztnQkFDckNNLFFBQVFJLEtBQUtMLElBQUk7WUFDbkIsRUFBRSxPQUFPTyxPQUFPO2dCQUNkTixRQUFRO1lBQ1YsU0FBVTtnQkFDUkUsYUFBYTtZQUNmO1FBQ0Y7UUFFQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSSxRQUFRZiw4Q0FBT0EsQ0FDbkIsSUFBTztZQUNMTztZQUNBQztZQUNBUSxpQkFBaUJDLFFBQVFWO1lBQ3pCRTtRQUNGLElBQ0E7UUFBQ0Y7UUFBTUU7S0FBVTtJQUduQixxQkFBTyw4REFBQ04sWUFBWWUsUUFBUTtRQUFDSCxPQUFPQTtrQkFBUVQ7Ozs7OztBQUM5QyxFQUFDO0FBRU0sTUFBTWEsVUFBVTtJQUNyQixNQUFNQyxVQUFVdEIsaURBQVVBLENBQUNLO0lBQzNCLElBQUksQ0FBQ2lCLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWJldmF1bHQtZnJvbnRlbmQvLi9zcmMvY29udGV4dC9BdXRoQ29udGV4dC5qc3g/ODE1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXBpQ2xpZW50IGZyb20gJy4uL2hvb2tzL3VzZUFwaUNsaWVudCdcblxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZClcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaFNlc3Npb24gPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGFwaUNsaWVudC5nZXQoJy9hcGkvc2Vzc2lvbicpXG4gICAgICAgIHNldFVzZXIoZGF0YS51c2VyKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0VXNlcihudWxsKVxuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoU2Vzc2lvbigpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHZhbHVlID0gdXNlTWVtbyhcbiAgICAoKSA9PiAoe1xuICAgICAgdXNlcixcbiAgICAgIHNldFVzZXIsXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IEJvb2xlYW4odXNlciksXG4gICAgICBpc0xvYWRpbmdcbiAgICB9KSxcbiAgICBbdXNlciwgaXNMb2FkaW5nXVxuICApXG5cbiAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PntjaGlsZHJlbn08L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlQXV0aCBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIEF1dGhQcm92aWRlcicpXG4gIH1cbiAgcmV0dXJuIGNvbnRleHRcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsImFwaUNsaWVudCIsIkF1dGhDb250ZXh0IiwidW5kZWZpbmVkIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoU2Vzc2lvbiIsImRhdGEiLCJnZXQiLCJlcnJvciIsInZhbHVlIiwiaXNBdXRoZW50aWNhdGVkIiwiQm9vbGVhbiIsIlByb3ZpZGVyIiwidXNlQXV0aCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/AuthContext.jsx\n");

/***/ }),

/***/ "./src/hooks/useApiClient.js":
/*!***********************************!*\
  !*** ./src/hooks/useApiClient.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || \"\").replace(/\\/$/, \"\");\nconst apiClient = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: API_BASE_URL,\n    withCredentials: true,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiClient);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQXBpQ2xpZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXlCO0FBRXpCLE1BQU1DLGVBQWUsQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0IsSUFBSSxFQUFDLEVBQUdDLE9BQU8sQ0FBQyxPQUFPO0FBRWpGLE1BQU1DLFlBQVlOLG9EQUFZLENBQUM7SUFDN0JRLFNBQVNQO0lBQ1RRLGlCQUFpQjtJQUNqQkMsU0FBUztRQUNQLGdCQUFnQjtJQUNsQjtBQUNGO0FBRUEsaUVBQWVKLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWJldmF1bHQtZnJvbnRlbmQvLi9zcmMvaG9va3MvdXNlQXBpQ2xpZW50LmpzP2UyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSAocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMIHx8ICcnKS5yZXBsYWNlKC9cXC8kLywgJycpXG5cbmNvbnN0IGFwaUNsaWVudCA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IEFQSV9CQVNFX1VSTCxcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICBoZWFkZXJzOiB7XG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBhcGlDbGllbnRcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9CQVNFX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfQkFTRV9VUkwiLCJyZXBsYWNlIiwiYXBpQ2xpZW50IiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useApiClient.js\n");

/***/ }),

/***/ "./src/pages/_app.jsx":
/*!****************************!*\
  !*** ./src/pages/_app.jsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/AuthContext */ \"./src/context/AuthContext.jsx\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/index.css */ \"./src/styles/index.css\");\n/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst App = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"/Users/abdulraheem/Documents/frontend/src/pages/_app.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abdulraheem/Documents/frontend/src/pages/_app.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/abdulraheem/Documents/frontend/src/pages/_app.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/abdulraheem/Documents/frontend/src/pages/_app.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ3lCO0FBQ3pCO0FBRTVCLE1BQU1FLE1BQU0sQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNuQyxxQkFDRTs7MEJBQ0UsOERBQUNKLGtEQUFJQTswQkFDSCw0RUFBQ0s7b0JBQUtDLE1BQUs7b0JBQVdDLFNBQVE7Ozs7Ozs7Ozs7OzBCQUVoQyw4REFBQ04sOERBQVlBOzBCQUNYLDRFQUFDRTtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7O0FBSWhDO0FBRUEsaUVBQWVGLEdBQUdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aWJldmF1bHQtZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC5qc3g/NGM3NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhDb250ZXh0J1xuaW1wb3J0ICcuLi9zdHlsZXMvaW5kZXguY3NzJ1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iXSwibmFtZXMiOlsiSGVhZCIsIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIm1ldGEiLCJuYW1lIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.jsx\n");

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.jsx"));
module.exports = __webpack_exports__;

})();