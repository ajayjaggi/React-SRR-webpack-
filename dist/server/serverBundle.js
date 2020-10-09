/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
                console.log(moduleId,modules)
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"Dedicated":"Dedicated","vendors~Home":"vendors~Home","Home":"Home"}[chunkId]||chunkId) + ".server.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/paths.js":
/*!*************************!*\
  !*** ./config/paths.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const appPath = fs.realpathSync(process.cwd());

const resolvePath = relativePath => path.resolve(appPath, relativePath);

const paths = {
  clientEntry: resolvePath('src/client'),
  serverEntry: resolvePath('src/server'),
  clientBuild: resolvePath('dist/client'),
  serverBuild: resolvePath('dist/server'),
  publicPath: '/static',
  loadableServerStatsFile: resolvePath('dist/client/static/loadable-stats.json')
};
module.exports = {
  paths
};

/***/ }),

/***/ "./node_modules/express/lib sync recursive":
/*!***************************************!*\
  !*** ./node_modules/express/lib sync ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/express/lib sync recursive";

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "./node_modules/express/index.js");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/server */ "./node_modules/@loadable/server/lib/index.js");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/paths */ "./config/paths.js");
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_paths__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ "./node_modules/body-parser/index.js");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/app */ "./src/shared/app.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");







 // const {clientCompiler, watchOptions} = require('../../scripts/start')
// // const webpackDevMiddleware = require('webpack-dev-middleware')
// const clientConfig = require('../../config/webpack/client')

const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());
app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a.static('public')); // app.use(webpackDevMiddleware(clientCompiler,{
//   publicPath: clientConfig.output.publicPath,
//     ...watchOptions
// }))

app.use((req, res) => {
  res.locals.extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_3__["ChunkExtractor"]({
    statsFile: _config_paths__WEBPACK_IMPORTED_MODULE_4___default.a.loadableServerStatsFile
  });
  const extractor = res.locals.extractor;
  const appContainer = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["StaticRouter"], {
    location: req.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_shared_app__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
  res.send(`
      <html>
        <head>
            <title>
                   Basic Webpack app            
            </title>
        </head>
      </html>
      <body>
      ${extractor.getScriptTags()}
      <div id='root'>
        ${appContainer}
      </div>
      
      </body>
      `);
});
app.listen(process.env.PORT || 4000, () => {
  console.log('Server started');
});

/***/ }),

/***/ "./src/shared/app.js":
/*!***************************!*\
  !*** ./src/shared/app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/shared/routes.js");




const App = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, _routes__WEBPACK_IMPORTED_MODULE_2__["default"].map((route, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: route.exact,
    key: route.key || i,
    path: route.path,
    component: route.component
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/shared/routes.js":
/*!******************************!*\
  !*** ./src/shared/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");


const Home = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "Home";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => Promise.all(/*! import() | Home */[__webpack_require__.e("vendors~Home"), __webpack_require__.e("Home")]).then(__webpack_require__.bind(null, /*! ./home */ "./src/shared/home/index.js")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./home */ "./src/shared/home/index.js");
    }

    return eval('require.resolve')("./home");
  }

});
const Dedicated = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])({
  resolved: {},

  chunkName() {
    return "Dedicated";
  },

  isReady(props) {
    const key = this.resolve(props);

    if (this.resolved[key] !== true) {
      return false;
    }

    if (true) {
      return !!__webpack_require__.m[key];
    }

    return false;
  },

  importAsync: () => __webpack_require__.e(/*! import() | Dedicated */ "Dedicated").then(__webpack_require__.bind(null, /*! ./dedicated */ "./src/shared/dedicated/index.js")),

  requireAsync(props) {
    const key = this.resolve(props);
    this.resolved[key] = false;
    return this.importAsync(props).then(resolved => {
      this.resolved[key] = true;
      return resolved;
    });
  },

  requireSync(props) {
    const id = this.resolve(props);

    if (true) {
      return __webpack_require__(id);
    }

    return eval('module.require')(id);
  },

  resolve() {
    if (true) {
      return /*require.resolve*/(/*! ./dedicated */ "./src/shared/dedicated/index.js");
    }

    return eval('require.resolve')("./dedicated");
  }

});

const homeRoute = path => ({
  path,
  exact: true,
  component: Home
});

const dedicatedRoute = path => ({
  path,
  exact: true,
  component: Dedicated
});

/* harmony default export */ __webpack_exports__["default"] = (() => [homeRoute('/'), dedicatedRoute('/:player(messi)')]);

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string_decoder");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3BhdGhzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leHByZXNzL2xpYiBzeW5jIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnVmZmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3J5cHRvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZXZlbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyZWFtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RyaW5nX2RlY29kZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0dHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiemxpYlwiIl0sIm5hbWVzIjpbInBhdGgiLCJyZXF1aXJlIiwiZnMiLCJhcHBQYXRoIiwicmVhbHBhdGhTeW5jIiwicHJvY2VzcyIsImN3ZCIsInJlc29sdmVQYXRoIiwicmVsYXRpdmVQYXRoIiwicmVzb2x2ZSIsInBhdGhzIiwiY2xpZW50RW50cnkiLCJzZXJ2ZXJFbnRyeSIsImNsaWVudEJ1aWxkIiwic2VydmVyQnVpbGQiLCJwdWJsaWNQYXRoIiwibG9hZGFibGVTZXJ2ZXJTdGF0c0ZpbGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImJvZHlQYXJzZXIiLCJqc29uIiwic3RhdGljIiwicmVxIiwicmVzIiwibG9jYWxzIiwiZXh0cmFjdG9yIiwiQ2h1bmtFeHRyYWN0b3IiLCJzdGF0c0ZpbGUiLCJhcHBDb250YWluZXIiLCJyZW5kZXJUb1N0cmluZyIsImNvbGxlY3RDaHVua3MiLCJ1cmwiLCJzZW5kIiwiZ2V0U2NyaXB0VGFncyIsImxpc3RlbiIsImVudiIsIlBPUlQiLCJjb25zb2xlIiwibG9nIiwiQXBwIiwicm91dGVzIiwibWFwIiwicm91dGUiLCJpIiwiZXhhY3QiLCJrZXkiLCJjb21wb25lbnQiLCJIb21lIiwibG9hZGFibGUiLCJEZWRpY2F0ZWQiLCJob21lUm91dGUiLCJkZWRpY2F0ZWRSb3V0ZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0E7UUFDQSxpQ0FBaUMsb0VBQW9FO1FBQ3JHO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esa0JBQWtCLHFCQUFxQjtRQUN2QztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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QSxNQUQ4QjtBQUU5QitDLE9BQUssRUFBRSxJQUZ1QjtBQUc5QkUsV0FBUyxFQUFFRztBQUhtQixDQUFYLENBQXZCOztBQU1lLHFFQUFNLENBQ2pCQyxTQUFTLENBQUMsR0FBRCxDQURRLEVBRWpCQyxjQUFjLENBQUMsaUJBQUQsQ0FGRyxDQUFyQixFOzs7Ozs7Ozs7OztBQ25CQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJzZXJ2ZXJCdW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgKHtcIkRlZGljYXRlZFwiOlwiRGVkaWNhdGVkXCIsXCJ2ZW5kb3JzfkhvbWVcIjpcInZlbmRvcnN+SG9tZVwiLFwiSG9tZVwiOlwiSG9tZVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5zZXJ2ZXIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbmNvbnN0IGFwcFBhdGggPSBmcy5yZWFscGF0aFN5bmMocHJvY2Vzcy5jd2QoKSlcblxuXG5cbmNvbnN0IHJlc29sdmVQYXRoID0gKHJlbGF0aXZlUGF0aCkgPT4gcGF0aC5yZXNvbHZlKGFwcFBhdGgscmVsYXRpdmVQYXRoKVxuXG5jb25zdCBwYXRocyA9IHtcbiAgICBjbGllbnRFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9jbGllbnQnKSxcbiAgICBzZXJ2ZXJFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9zZXJ2ZXInKSxcbiAgICBjbGllbnRCdWlsZDogcmVzb2x2ZVBhdGgoJ2Rpc3QvY2xpZW50JyksXG4gICAgc2VydmVyQnVpbGQ6IHJlc29sdmVQYXRoKCdkaXN0L3NlcnZlcicpLFxuICAgIHB1YmxpY1BhdGg6ICcvc3RhdGljJyxcbiAgICBsb2FkYWJsZVNlcnZlclN0YXRzRmlsZTogcmVzb2x2ZVBhdGgoJ2Rpc3QvY2xpZW50L3N0YXRpYy9sb2FkYWJsZS1zdGF0cy5qc29uJyksXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHBhdGhzXG59XG4iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlDb250ZXh0KHJlcSkge1xuXHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0dGhyb3cgZTtcbn1cbndlYnBhY2tFbXB0eUNvbnRleHQua2V5cyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gW107IH07XG53ZWJwYWNrRW1wdHlDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlDb250ZXh0O1xud2VicGFja0VtcHR5Q29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvZXhwcmVzcy9saWIgc3luYyByZWN1cnNpdmVcIjsiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgQ2h1bmtFeHRyYWN0b3IgfSBmcm9tICdAbG9hZGFibGUvc2VydmVyJ1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uLy4uL2NvbmZpZy9wYXRocydcblxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAnXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuLy8gY29uc3Qge2NsaWVudENvbXBpbGVyLCB3YXRjaE9wdGlvbnN9ID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9zdGFydCcpXG4vLyAvLyBjb25zdCB3ZWJwYWNrRGV2TWlkZGxld2FyZSA9IHJlcXVpcmUoJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnKVxuLy8gY29uc3QgY2xpZW50Q29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL3dlYnBhY2svY2xpZW50JylcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbmFwcC51c2UoJy9zdGF0aWMnLGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuLy8gYXBwLnVzZSh3ZWJwYWNrRGV2TWlkZGxld2FyZShjbGllbnRDb21waWxlcix7XG4vLyAgIHB1YmxpY1BhdGg6IGNsaWVudENvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcbi8vICAgICAuLi53YXRjaE9wdGlvbnNcbi8vIH0pKVxuXG5hcHAudXNlKChyZXEscmVzKSA9PiB7XG4gICAgcmVzLmxvY2Fscy5leHRyYWN0b3IgPSBuZXcgQ2h1bmtFeHRyYWN0b3Ioe1xuICAgICAgIHN0YXRzRmlsZTogcGF0aHMubG9hZGFibGVTZXJ2ZXJTdGF0c0ZpbGVcbiAgICB9KVxuXG4gICAgY29uc3QgZXh0cmFjdG9yICA9IHJlcy5sb2NhbHMuZXh0cmFjdG9yXG5cbiAgICBjb25zdCBhcHBDb250YWluZXIgPSByZW5kZXJUb1N0cmluZyhleHRyYWN0b3IuY29sbGVjdENodW5rcyhcbiAgICAgICAgPFN0YXRpY1JvdXRlciBsb2NhdGlvbj17cmVxLnVybH0+XG4gICAgICAgICAgICA8QXBwLz5cbiAgICAgICAgPC9TdGF0aWNSb3V0ZXI+XG4gICAgKSlcblxuICAgIHJlcy5zZW5kKFxuICAgIGBcbiAgICAgIDxodG1sPlxuICAgICAgICA8aGVhZD5cbiAgICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgICAgICAgICBCYXNpYyBXZWJwYWNrIGFwcCAgICAgICAgICAgIFxuICAgICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9oZWFkPlxuICAgICAgPC9odG1sPlxuICAgICAgPGJvZHk+XG4gICAgICAke2V4dHJhY3Rvci5nZXRTY3JpcHRUYWdzKCl9XG4gICAgICA8ZGl2IGlkPSdyb290Jz5cbiAgICAgICAgJHthcHBDb250YWluZXJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPC9ib2R5PlxuICAgICAgYFxuICAgIClcbn0pXG5cblxuXG5cbmFwcC5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCA0MDAwLCgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnU2VydmVyIHN0YXJ0ZWQnKVxufSlcblxuXG5cblxuXG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7U3dpdGNoLCBSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAge3JvdXRlcy5tYXAoKHJvdXRlLGkpID0+IChcbiAgICAgICAgICAgICAgICA8Um91dGVcbiAgICAgICAgICAgICAgICAgICAgZXhhY3Q9e3JvdXRlLmV4YWN0fVxuICAgICAgICAgICAgICAgICAgICBrZXk9e3JvdXRlLmtleSB8fCBpfVxuICAgICAgICAgICAgICAgICAgICBwYXRoPXtyb3V0ZS5wYXRofVxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3JvdXRlLmNvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvU3dpdGNoPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGxvYWRhYmxlIGZyb20gJ0Bsb2FkYWJsZS9jb21wb25lbnQnXG5cbmNvbnN0IEhvbWUgPSBsb2FkYWJsZSgoKSA9PiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJIb21lXCIgKi8gJy4vaG9tZScpKVxuY29uc3QgRGVkaWNhdGVkID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiRGVkaWNhdGVkXCIgKi8gJy4vZGVkaWNhdGVkJykpXG5cblxuY29uc3QgaG9tZVJvdXRlID0gKHBhdGgpID0+ICh7XG4gICAgcGF0aCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IEhvbWVcbn0pXG5cbmNvbnN0IGRlZGljYXRlZFJvdXRlID0gKHBhdGgpID0+ICh7XG4gICAgcGF0aCxcbiAgICBleGFjdDogdHJ1ZSxcbiAgICBjb21wb25lbnQ6IERlZGljYXRlZFxufSlcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gW1xuICAgIGhvbWVSb3V0ZSgnLycpLFxuICAgIGRlZGljYXRlZFJvdXRlKCcvOnBsYXllcihtZXNzaSknKVxuXSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJ1ZmZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjcnlwdG9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXZlbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RyZWFtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZ19kZWNvZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInR0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ6bGliXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=