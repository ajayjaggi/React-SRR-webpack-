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

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @loadable/server */ "@loadable/server");
/* harmony import */ var _loadable_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_loadable_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/paths */ "./config/paths.js");
/* harmony import */ var _config_paths__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_paths__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/app */ "./src/shared/app.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);







 // const {clientCompiler, watchOptions} = require('../../scripts/start')
// // const webpackDevMiddleware = require('webpack-dev-middleware')
// const clientConfig = require('../../config/webpack/client')

const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(body_parser__WEBPACK_IMPORTED_MODULE_5___default.a.json());
app.use('/static', express__WEBPACK_IMPORTED_MODULE_1___default.a.static('public')); // app.use(webpackDevMiddleware(clientCompiler,{
//   publicPath: clientConfig.output.publicPath,
//     ...watchOptions
// }))

app.use((req, res) => {
  res.locals.extractor = new _loadable_server__WEBPACK_IMPORTED_MODULE_3__["ChunkExtractor"]({
    statsFile: _config_paths__WEBPACK_IMPORTED_MODULE_4___default.a.loadableServerStatsFile,
    entrypoints: ['clientBundle']
  });
  const extractor = res.locals.extractor;
  const appContainer = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__["renderToString"])(extractor.collectChunks( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["StaticRouter"], {
    location: req.url
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_app__WEBPACK_IMPORTED_MODULE_6__["default"], null))));
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
app.listen(process.env.PORT || 4004, () => {
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "@loadable/component");
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loadable_component__WEBPACK_IMPORTED_MODULE_1__);


const Home = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
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
const Dedicated = _loadable_component__WEBPACK_IMPORTED_MODULE_1___default()({
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

/***/ "@loadable/component":
/*!**************************************!*\
  !*** external "@loadable/component" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/component");

/***/ }),

/***/ "@loadable/server":
/*!***********************************!*\
  !*** external "@loadable/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@loadable/server");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL3BhdGhzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGxvYWRhYmxlL2NvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBsb2FkYWJsZS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiXSwibmFtZXMiOlsicGF0aCIsInJlcXVpcmUiLCJmcyIsImFwcFBhdGgiLCJyZWFscGF0aFN5bmMiLCJwcm9jZXNzIiwiY3dkIiwicmVzb2x2ZVBhdGgiLCJyZWxhdGl2ZVBhdGgiLCJyZXNvbHZlIiwicGF0aHMiLCJjbGllbnRFbnRyeSIsInNlcnZlckVudHJ5IiwiY2xpZW50QnVpbGQiLCJzZXJ2ZXJCdWlsZCIsInB1YmxpY1BhdGgiLCJsb2FkYWJsZVNlcnZlclN0YXRzRmlsZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcHAiLCJleHByZXNzIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJzdGF0aWMiLCJyZXEiLCJyZXMiLCJsb2NhbHMiLCJleHRyYWN0b3IiLCJDaHVua0V4dHJhY3RvciIsInN0YXRzRmlsZSIsImVudHJ5cG9pbnRzIiwiYXBwQ29udGFpbmVyIiwicmVuZGVyVG9TdHJpbmciLCJjb2xsZWN0Q2h1bmtzIiwidXJsIiwic2VuZCIsImdldFNjcmlwdFRhZ3MiLCJsaXN0ZW4iLCJlbnYiLCJQT1JUIiwiY29uc29sZSIsImxvZyIsIkFwcCIsInJvdXRlcyIsIm1hcCIsInJvdXRlIiwiaSIsImV4YWN0Iiwia2V5IiwiY29tcG9uZW50IiwiSG9tZSIsImxvYWRhYmxlIiwiRGVkaWNhdGVkIiwiaG9tZVJvdXRlIiwiZGVkaWNhdGVkUm91dGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOzs7UUFHQTs7UUFFQTtRQUNBO1FBQ0EsaUNBQWlDLG9FQUFvRTtRQUNyRztRQUNBO1FBQ0E7UUFDQTtRQUNBLGtCQUFrQixxQkFBcUI7UUFDdkM7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsY0FBYztRQUNkLElBQUk7UUFDSjs7O1FBR0E7UUFDQTs7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Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJzZXJ2ZXJCdW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIHJlcXVpcmUoKSBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cbiBcdFx0Ly8gXCIwXCIgaXMgdGhlIHNpZ25hbCBmb3IgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSAhPT0gMCkge1xuIFx0XHRcdHZhciBjaHVuayA9IHJlcXVpcmUoXCIuL1wiICsgKHtcIkRlZGljYXRlZFwiOlwiRGVkaWNhdGVkXCIsXCJ2ZW5kb3JzfkhvbWVcIjpcInZlbmRvcnN+SG9tZVwiLFwiSG9tZVwiOlwiSG9tZVwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5zZXJ2ZXIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2VydmVyL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5cbmNvbnN0IGFwcFBhdGggPSBmcy5yZWFscGF0aFN5bmMocHJvY2Vzcy5jd2QoKSlcblxuXG5cbmNvbnN0IHJlc29sdmVQYXRoID0gKHJlbGF0aXZlUGF0aCkgPT4gcGF0aC5yZXNvbHZlKGFwcFBhdGgscmVsYXRpdmVQYXRoKVxuXG5jb25zdCBwYXRocyA9IHtcbiAgICBjbGllbnRFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9jbGllbnQnKSxcbiAgICBzZXJ2ZXJFbnRyeTogcmVzb2x2ZVBhdGgoJ3NyYy9zZXJ2ZXInKSxcbiAgICBjbGllbnRCdWlsZDogcmVzb2x2ZVBhdGgoJ2Rpc3QvY2xpZW50JyksXG4gICAgc2VydmVyQnVpbGQ6IHJlc29sdmVQYXRoKCdkaXN0L3NlcnZlcicpLFxuICAgIHB1YmxpY1BhdGg6ICcvc3RhdGljJyxcbiAgICBsb2FkYWJsZVNlcnZlclN0YXRzRmlsZTogcmVzb2x2ZVBhdGgoJ2Rpc3QvY2xpZW50L3N0YXRpYy9sb2FkYWJsZS1zdGF0cy5qc29uJyksXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHBhdGhzXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJ1xuaW1wb3J0IHsgQ2h1bmtFeHRyYWN0b3IgfSBmcm9tICdAbG9hZGFibGUvc2VydmVyJ1xuaW1wb3J0IHBhdGhzIGZyb20gJy4uLy4uL2NvbmZpZy9wYXRocydcblxuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgQXBwIGZyb20gJy4uL3NoYXJlZC9hcHAnXG5pbXBvcnQge1N0YXRpY1JvdXRlcn0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuLy8gY29uc3Qge2NsaWVudENvbXBpbGVyLCB3YXRjaE9wdGlvbnN9ID0gcmVxdWlyZSgnLi4vLi4vc2NyaXB0cy9zdGFydCcpXG4vLyAvLyBjb25zdCB3ZWJwYWNrRGV2TWlkZGxld2FyZSA9IHJlcXVpcmUoJ3dlYnBhY2stZGV2LW1pZGRsZXdhcmUnKVxuLy8gY29uc3QgY2xpZW50Q29uZmlnID0gcmVxdWlyZSgnLi4vLi4vY29uZmlnL3dlYnBhY2svY2xpZW50JylcblxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSlcbmFwcC51c2UoJy9zdGF0aWMnLGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuLy8gYXBwLnVzZSh3ZWJwYWNrRGV2TWlkZGxld2FyZShjbGllbnRDb21waWxlcix7XG4vLyAgIHB1YmxpY1BhdGg6IGNsaWVudENvbmZpZy5vdXRwdXQucHVibGljUGF0aCxcbi8vICAgICAuLi53YXRjaE9wdGlvbnNcbi8vIH0pKVxuXG5hcHAudXNlKChyZXEscmVzKSA9PiB7XG4gICAgcmVzLmxvY2Fscy5leHRyYWN0b3IgPSBuZXcgQ2h1bmtFeHRyYWN0b3Ioe1xuICAgICAgIHN0YXRzRmlsZTogcGF0aHMubG9hZGFibGVTZXJ2ZXJTdGF0c0ZpbGUsXG4gICAgICAgIGVudHJ5cG9pbnRzOiBbJ2NsaWVudEJ1bmRsZSddXG4gICAgfSlcblxuICAgIGNvbnN0IGV4dHJhY3RvciAgPSByZXMubG9jYWxzLmV4dHJhY3RvclxuXG4gICAgY29uc3QgYXBwQ29udGFpbmVyID0gcmVuZGVyVG9TdHJpbmcoZXh0cmFjdG9yLmNvbGxlY3RDaHVua3MoXG4gICAgICAgIDxTdGF0aWNSb3V0ZXIgbG9jYXRpb249e3JlcS51cmx9PlxuICAgICAgICAgICAgPEFwcC8+XG4gICAgICAgIDwvU3RhdGljUm91dGVyPlxuICAgICkpXG5cbiAgICByZXMuc2VuZChcbiAgICBgXG4gICAgICA8aHRtbD5cbiAgICAgICAgPGhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgICAgQmFzaWMgV2VicGFjayBhcHAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgIDwvaHRtbD5cbiAgICAgIDxib2R5PlxuICAgICAgJHtleHRyYWN0b3IuZ2V0U2NyaXB0VGFncygpfVxuICAgICAgPGRpdiBpZD0ncm9vdCc+XG4gICAgICAgICR7YXBwQ29udGFpbmVyfVxuICAgICAgPC9kaXY+XG4gICAgICBcbiAgICAgIDwvYm9keT5cbiAgICAgIGBcbiAgICApXG59KVxuXG5cblxuXG5hcHAubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgNDAwNCwoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1NlcnZlciBzdGFydGVkJylcbn0pXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1N3aXRjaCwgUm91dGV9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJ1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIHtyb3V0ZXMubWFwKChyb3V0ZSxpKSA9PiAoXG4gICAgICAgICAgICAgICAgPFJvdXRlXG4gICAgICAgICAgICAgICAgICAgIGV4YWN0PXtyb3V0ZS5leGFjdH1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtyb3V0ZS5rZXkgfHwgaX1cbiAgICAgICAgICAgICAgICAgICAgcGF0aD17cm91dGUucGF0aH1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtyb3V0ZS5jb21wb25lbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L1N3aXRjaD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBsb2FkYWJsZSBmcm9tICdAbG9hZGFibGUvY29tcG9uZW50J1xuXG5jb25zdCBIb21lID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiSG9tZVwiICovICcuL2hvbWUnKSlcbmNvbnN0IERlZGljYXRlZCA9IGxvYWRhYmxlKCgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcIkRlZGljYXRlZFwiICovICcuL2RlZGljYXRlZCcpKVxuXG5cbmNvbnN0IGhvbWVSb3V0ZSA9IChwYXRoKSA9PiAoe1xuICAgIHBhdGgsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBIb21lXG59KVxuXG5jb25zdCBkZWRpY2F0ZWRSb3V0ZSA9IChwYXRoKSA9PiAoe1xuICAgIHBhdGgsXG4gICAgZXhhY3Q6IHRydWUsXG4gICAgY29tcG9uZW50OiBEZWRpY2F0ZWRcbn0pXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IFtcbiAgICBob21lUm91dGUoJy8nKSxcbiAgICBkZWRpY2F0ZWRSb3V0ZSgnLzpwbGF5ZXIobWVzc2kpJylcbl0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbG9hZGFibGUvY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBsb2FkYWJsZS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9