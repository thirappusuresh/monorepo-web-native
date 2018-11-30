module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppWrapper; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_ducks_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/ducks/store */ "./src/ducks/store.js");
/* harmony import */ var _src_OfflineSupport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/OfflineSupport */ "./src/OfflineSupport.js");
/* harmony import */ var _src_services_HomePageServices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/services/HomePageServices */ "./src/services/HomePageServices.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint no-underscore-dangle: 0 */

/* eslint no-param-reassign: 0 */






var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_src_ducks_store__WEBPACK_IMPORTED_MODULE_4__["default"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_src_ducks_store__WEBPACK_IMPORTED_MODULE_4__["default"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

var AppWrapper =
/*#__PURE__*/
function (_NextApp) {
  _inherits(AppWrapper, _NextApp);

  _createClass(AppWrapper, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
        var reduxStore, features;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                reduxStore = getOrCreateStore();
                appContext.ctx.reduxStore = reduxStore;
                _context.next = 4;
                return Object(_src_services_HomePageServices__WEBPACK_IMPORTED_MODULE_6__["fetchFeatures"])();

              case 4:
                features = _context.sent;
                return _context.abrupt("return", {
                  reduxStore: reduxStore,
                  features: features,
                  initialReduxState: reduxStore.getState()
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function AppWrapper(props) {
    var _this;

    _classCallCheck(this, AppWrapper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWrapper).call(this, props));
    _this.reduxStore = getOrCreateStore(props.initialReduxState);
    return _this;
  }

  _createClass(AppWrapper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          features = _this$props.features;
      var componentProps = {
        features: features
      };
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_3__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
        store: this.reduxStore
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, componentProps), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_OfflineSupport__WEBPACK_IMPORTED_MODULE_5__["default"], null))));
    }
  }]);

  return AppWrapper;
}(next_app__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/OfflineSupport.js":
/*!*******************************!*\
  !*** ./src/OfflineSupport.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OfflineSupport =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OfflineSupport, _PureComponent);

  function OfflineSupport() {
    _classCallCheck(this, OfflineSupport);

    return _possibleConstructorReturn(this, _getPrototypeOf(OfflineSupport).apply(this, arguments));
  }

  _createClass(OfflineSupport, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../static/workbox/sw.js').then(function () {
          return console.log('service worker registered.');
        }).catch(function (err) {
          return console.dir(err);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return OfflineSupport;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (OfflineSupport);

/***/ }),

/***/ "./src/constants/FeatureNames.js":
/*!***************************************!*\
  !*** ./src/constants/FeatureNames.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keymirror */ "keymirror");
/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(keymirror__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (keymirror__WEBPACK_IMPORTED_MODULE_0___default()({
  HOMEPAGE_HEADER_LOCATION: null,
  HOMEPAGE_HEADER_SEARCH_CATEGORY_SELECTOR: null,
  HOMEPAGE_HEADER_SEARCH_BOX: null,
  HOMEPAGE_HEADER_SHOPPING_CART: null,
  HOMEPAGE_HEADER_USER_PROFILE: null,
  HOMEPAGE_HEADER_NAVLINKS: null,
  HOMEPAGE_HEADER_CALL_TO_ORDER: null,
  HOMEPAGE_HEADER_BANNER_SECTION: null,
  HOMEPAGE_HEADER_BANNER_SECTION_DESCRIPTION: null,
  HOMEPAGE_HEADER_BANNER_SECTION_BANNER: null,
  HOMEPAGE_HEADER_USP_SECTION: null,
  HOMEPAGE_ORDER_MEDICINE_SECTION: null,
  HOMEPAGE_ORDER_MEDICINE_SUBSCRIBE_NOW_BUTTON: null,
  HOMEPAGE_ORDER_MEDICINE_UPLOAD_RX_BUTTON: null,
  HOMEPAGE_ORDER_MEDICINE_NORX_BUTTON: null,
  HOMEPAGE_HOW_IT_WORKS_SECTION: null,
  HOMEPAGE_HOW_IT_WORKS_RECIPE: null,
  HOMEPAGE_HOW_IT_WORKS_MEDIA_FILE: null,
  HOMEPAGE_DYNAMIC_PAST_ORDER_LINK_SECTION: null,
  HOMEPAGE_RECENTLY_VIEWED_SECTION: null,
  HOMEPAGE_SHOP_HEALTH_PRODUCTS_SECTION: null,
  HOMEPAGE_SHOP_HEALTH_PRODUCTS_SHOP_BY_CATEGORY_SECTION: null,
  HOMEPAGE_SHOP_HEALTH_PRODUCTS_SHOP_BY_CONCERN_SECTION: null,
  HOMEPAGE_MEDLIFE_ESSENTIALS_SECTION: null,
  HOMEPAGE_TOP_BRANDS_SECTION: null,
  HOMEPAGE_BOOK_LAB_TEST_SECTION: null,
  HOMEPAGE_DOCTOR_CONSULTATION_SECTION: null,
  HOMEPAGE_TESTIMONIAL_SECTION: null,
  HOMEPAGE_PARTNER_WITH_US_SECTION: null,
  HOMEPAGE_HEALTH_ARTICLES_SECTION: null,
  HOMEPAGE_MEDLIFE_CERTIFICATES_SECTION: null,
  HOMEPAGE_CITIES_WE_SERVE_SECTION: null,
  HOMEPAGE_CITIES_WE_SERVE_PINCODE_CHECK_SECTION: null,
  HOMEPAGE_FOOTER_SECTION: null,
  HOMEPAGE_FOOTER_SOCIAL_MEDIA_SECTION: null,
  HOMEPAGE_FOOTER_DOWNLOAD_MOBILE_APP_SECTION: null,
  HOMEPAGE_FOOTER_SUBSCRIBE_SECTION: null,
  HOMEPAGE_FOOTER_TOP_SEARCHED_SECTION: null
}));

/***/ }),

/***/ "./src/ducks/FeatureDucks.js":
/*!***********************************!*\
  !*** ./src/ducks/FeatureDucks.js ***!
  \***********************************/
/*! exports provided: initialState, ActionTypes, setFeatures, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFeatures", function() { return setFeatures; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keymirror */ "keymirror");
/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keymirror__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var initialState = {
  data: {
    features: null
  }
};
var ActionTypes = keymirror__WEBPACK_IMPORTED_MODULE_1___default()({
  FEATURE_DUCKS_SET_FEATURES: null
});
var setFeatures = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ActionTypes.FEATURE_DUCKS_SET_FEATURES);
function reducer(reducerState) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var state = reducerState || initialState;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case ActionTypes.FEATURE_DUCKS_SET_FEATURES:
      {
        return _objectSpread({}, state, {
          data: _objectSpread({}, state.data, {
            features: payload.features
          })
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/ducks/LoginDucks.js":
/*!*********************************!*\
  !*** ./src/ducks/LoginDucks.js ***!
  \*********************************/
/*! exports provided: LoginDucksActionTypes, initialState, syncMobileNumberField, syncPasswordField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDucksActionTypes", function() { return LoginDucksActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncMobileNumberField", function() { return syncMobileNumberField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syncPasswordField", function() { return syncPasswordField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! keymirror */ "keymirror");
/* harmony import */ var keymirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(keymirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var LoginDucksActionTypes = keymirror__WEBPACK_IMPORTED_MODULE_0___default()({
  LOGIN_DUCKS_SYNC_MOBILE_NUMBER: null,
  LOGIN_DUCKS_SYNC_PASSWORD: null
});
var initialState = {
  data: {
    mobileNumber: '',
    password: ''
  },
  ui: {}
};
var syncMobileNumberField = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(LoginDucksActionTypes.LOGIN_DUCKS_SYNC_MOBILE_NUMBER);
var syncPasswordField = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(LoginDucksActionTypes.LOGIN_DUCKS_SYNC_PASSWORD);
function reducer(reducerState) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var state = reducerState || initialState;
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case LoginDucksActionTypes.LOGIN_DUCKS_SYNC_MOBILE_NUMBER:
      {
        return _objectSpread({}, state, {
          data: _objectSpread({}, state.data, {
            mobileNumber: payload
          })
        });
      }

    case LoginDucksActionTypes.LOGIN_DUCKS_SYNC_PASSWORD:
      {
        return _objectSpread({}, state, {
          data: _objectSpread({}, state.data, {
            password: payload
          })
        });
      }

    default:
      {
        return _objectSpread({}, state);
      }
  }
}

/***/ }),

/***/ "./src/ducks/rootReducer.js":
/*!**********************************!*\
  !*** ./src/ducks/rootReducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoginDucks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginDucks */ "./src/ducks/LoginDucks.js");
/* harmony import */ var _FeatureDucks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeatureDucks */ "./src/ducks/FeatureDucks.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  login_reducer: _LoginDucks__WEBPACK_IMPORTED_MODULE_1__["default"],
  feature_reducer: _FeatureDucks__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/ducks/store.js":
/*!****************************!*\
  !*** ./src/ducks/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./src/ducks/rootReducer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint no-underscore-dangle: 0 */

/* eslint operator-linebreak: 0 */


var middleWares = [];
var composeEnhancers = "development" !== 'production' && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var composedEnhancers = composeEnhancers(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleWares));
/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, composedEnhancers);
});

/***/ }),

/***/ "./src/services/AllCitiesData.js":
/*!***************************************!*\
  !*** ./src/services/AllCitiesData.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['Mumbai', 'Bangalore', 'Delhi', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune', 'Ahmedabad', 'Agra', 'Allahabad', 'Bhopal', 'Faridabad', 'Ghaziabad', 'Gurugram', 'Indore', 'Jabalpur', 'Jaipur', 'Kanpur', 'Kharagpur', 'Lucknow', 'Noida', 'Surat', 'Thane', 'Vadodara', 'Varanasi']);

/***/ }),

/***/ "./src/services/FeatureToggleData.js":
/*!*******************************************!*\
  !*** ./src/services/FeatureToggleData.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/FeatureNames */ "./src/constants/FeatureNames.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEADER_LOCATION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEADER_SEARCH_CATEGORY_SELECTOR,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEADER_SEARCH_BOX,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEADER_SHOPPING_CART,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEADER_USER_PROFILE,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEADER_NAVLINKS,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEADER_CALL_TO_ORDER,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_ORDER_MEDICINE_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_ORDER_MEDICINE_SUBSCRIBE_NOW_BUTTON,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_ORDER_MEDICINE_UPLOAD_RX_BUTTON,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_ORDER_MEDICINE_NORX_BUTTON,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HOW_IT_WORKS_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HOW_IT_WORKS_RECIPE,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HOW_IT_WORKS_MEDIA_FILE,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_DYNAMIC_PAST_ORDER_LINK_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_RECENTLY_VIEWED_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_SHOP_HEALTH_PRODUCTS_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_SHOP_HEALTH_PRODUCTS_SHOP_BY_CATEGORY_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_SHOP_HEALTH_PRODUCTS_SHOP_BY_CONCERN_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_MEDLIFE_ESSENTIALS_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_TOP_BRANDS_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_BOOK_LAB_TEST_SECTION,
  enabled: false,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_DOCTOR_CONSULTATION_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_TESTIMONIAL_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_PARTNER_WITH_US_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_HEALTH_ARTICLES_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_MEDLIFE_CERTIFICATES_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_CITIES_WE_SERVE_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_CITIES_WE_SERVE_PINCODE_CHECK_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_FOOTER_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_FOOTER_SOCIAL_MEDIA_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_FOOTER_DOWNLOAD_MOBILE_APP_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_FOOTER_SUBSCRIBE_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}, {
  feature_name: _constants_FeatureNames__WEBPACK_IMPORTED_MODULE_0__["default"].HOMEPAGE_FOOTER_TOP_SEARCHED_SECTION,
  enabled: true,
  source: 'WEB',
  version: ''
}]);

/***/ }),

/***/ "./src/services/HomePageServices.js":
/*!******************************************!*\
  !*** ./src/services/HomePageServices.js ***!
  \******************************************/
/*! exports provided: getAllCities, getBlogPosts, getTestimonials, isPincodeIsDeliverable, fetchFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCities", function() { return getAllCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlogPosts", function() { return getBlogPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTestimonials", function() { return getTestimonials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPincodeIsDeliverable", function() { return isPincodeIsDeliverable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFeatures", function() { return fetchFeatures; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios_jsonp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-jsonp */ "axios-jsonp");
/* harmony import */ var axios_jsonp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_jsonp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AllCitiesData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllCitiesData */ "./src/services/AllCitiesData.js");
/* harmony import */ var _FeatureToggleData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureToggleData */ "./src/services/FeatureToggleData.js");
/* harmony import */ var _URI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./URI */ "./src/services/URI.js");
/* eslint-disable import/prefer-default-export */





function getAllCities() {
  return Promise.resolve(_AllCitiesData__WEBPACK_IMPORTED_MODULE_2__["default"]);
}
function getBlogPosts() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()({
    url: _URI__WEBPACK_IMPORTED_MODULE_4__["BLOG_URI"],
    adapter: axios_jsonp__WEBPACK_IMPORTED_MODULE_1___default.a,
    callbackParamName: '_jsonp'
  }).then(function (res) {
    return res.data;
  });
}
function getTestimonials() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_URI__WEBPACK_IMPORTED_MODULE_4__["TESTIMONIAL_URI"]).then(function (res) {
    return res.data;
  });
}
function isPincodeIsDeliverable() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_URI__WEBPACK_IMPORTED_MODULE_4__["PINCODE_CHECK_URI"]).then(function (res) {
    return res.data;
  });
}
function fetchFeatures() {
  return Promise.resolve(_FeatureToggleData__WEBPACK_IMPORTED_MODULE_3__["default"]);
}

/***/ }),

/***/ "./src/services/URI.js":
/*!*****************************!*\
  !*** ./src/services/URI.js ***!
  \*****************************/
/*! exports provided: BLOG_URI, TESTIMONIAL_URI, PINCODE_CHECK_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLOG_URI", function() { return BLOG_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIAL_URI", function() { return TESTIMONIAL_URI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINCODE_CHECK_URI", function() { return PINCODE_CHECK_URI; });
/* eslint-disable import/prefer-default-export */
var BLOG_URI = 'https://www.medlife.com/blog/wp-json/wp/v2/posts?per_page=4&_embed';
var TESTIMONIAL_URI = 'http://192.168.21.25:8091/api/v1/ml-ui-services/testimonials/0/3';
var PINCODE_CHECK_URI = 'https://svc.medlife.com/ml-rest-services/v1/medlife/customer/pincode/784001';

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "axios-jsonp":
/*!******************************!*\
  !*** external "axios-jsonp" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios-jsonp");

/***/ }),

/***/ "keymirror":
/*!****************************!*\
  !*** external "keymirror" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("keymirror");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map