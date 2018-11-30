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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Home.js":
/*!***********************!*\
  !*** ./pages/Home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Header */ "./src/components/Header.js");
/* harmony import */ var _src_styles_build_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styles/build/app.css */ "./src/styles/build/app.css");
/* harmony import */ var _src_styles_build_app_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_styles_build_app_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_components_NavbarContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/NavbarContainer */ "./src/components/NavbarContainer.js");
/* harmony import */ var _src_components_BodyWrapperContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/BodyWrapperContainer */ "./src/components/BodyWrapperContainer.js");
/* harmony import */ var _src_components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _src_ducks_FeatureDucks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/ducks/FeatureDucks */ "./src/ducks/FeatureDucks.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_9__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 // eslint-disable-line







var Home =
/*#__PURE__*/
function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('Home.componentDidMount runs only in client'); //console.log('medlifeConst.ANALYZE', medlifeConst.ANALYZE);

      var _this$props = this.props,
          features = _this$props.features,
          setFeatures = _this$props.setFeatures;
      setFeatures({
        features: features
      });
      console.log('this.props.features', features);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "testes: ", shared__WEBPACK_IMPORTED_MODULE_9__["SECRET_SHARED_CODE"]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_NavbarContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_BodyWrapperContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Home.propTypes = {
  features: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    _id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    enabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
  }).isRequired).isRequired,
  setFeatures: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    setFeatures: function setFeatures(features) {
      return dispatch(Object(_src_ducks_FeatureDucks__WEBPACK_IMPORTED_MODULE_8__["setFeatures"])(features));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatch)(Home));

/***/ }),

/***/ "./src/components/BodyWrapper.js":
/*!***************************************!*\
  !*** ./src/components/BodyWrapper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BodyWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bodycomponents_BannerContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bodycomponents/BannerContainer */ "./src/components/bodycomponents/BannerContainer.js");
/* harmony import */ var _bodycomponents_Sellingpointsstrip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bodycomponents/Sellingpointsstrip */ "./src/components/bodycomponents/Sellingpointsstrip.js");
/* harmony import */ var _bodycomponents_CategoriesMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bodycomponents/CategoriesMobile */ "./src/components/bodycomponents/CategoriesMobile.js");
/* harmony import */ var _bodycomponents_OrderMedicinesContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bodycomponents/OrderMedicinesContainer */ "./src/components/bodycomponents/OrderMedicinesContainer.js");
/* harmony import */ var _bodycomponents_MedlifeRecipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bodycomponents/MedlifeRecipe */ "./src/components/bodycomponents/MedlifeRecipe.js");
/* harmony import */ var _bodycomponents_Orderhistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bodycomponents/Orderhistory */ "./src/components/bodycomponents/Orderhistory.js");
/* harmony import */ var _bodycomponents_CallToOrder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bodycomponents/CallToOrder */ "./src/components/bodycomponents/CallToOrder.js");
/* harmony import */ var _bodycomponents_Recentlyviewed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bodycomponents/Recentlyviewed */ "./src/components/bodycomponents/Recentlyviewed.js");
/* harmony import */ var _bodycomponents_ShopHealthProducts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bodycomponents/ShopHealthProducts */ "./src/components/bodycomponents/ShopHealthProducts.js");
/* harmony import */ var _bodycomponents_MedlifeEssentials__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bodycomponents/MedlifeEssentials */ "./src/components/bodycomponents/MedlifeEssentials.js");
/* harmony import */ var _bodycomponents_Topbrands__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bodycomponents/Topbrands */ "./src/components/bodycomponents/Topbrands.js");
/* harmony import */ var _bodycomponents_BookALabTest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bodycomponents/BookALabTest */ "./src/components/bodycomponents/BookALabTest.js");
/* harmony import */ var _bodycomponents_DoctorConsultation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bodycomponents/DoctorConsultation */ "./src/components/bodycomponents/DoctorConsultation.js");
/* harmony import */ var _bodycomponents_Testimonials__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./bodycomponents/Testimonials */ "./src/components/bodycomponents/Testimonials.js");
/* harmony import */ var _bodycomponents_PartnerWithUs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bodycomponents/PartnerWithUs */ "./src/components/bodycomponents/PartnerWithUs.js");
/* harmony import */ var _bodycomponents_HealthArticles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./bodycomponents/HealthArticles */ "./src/components/bodycomponents/HealthArticles.js");
/* harmony import */ var _bodycomponents_MedicalCertificates__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bodycomponents/MedicalCertificates */ "./src/components/bodycomponents/MedicalCertificates.js");
/* harmony import */ var _bodycomponents_CitiesWeServe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bodycomponents/CitiesWeServe */ "./src/components/bodycomponents/CitiesWeServe.js");
/* harmony import */ var _bodycomponents_MobileFooter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bodycomponents/MobileFooter */ "./src/components/bodycomponents/MobileFooter.js");




















function BodyWrapper() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_BannerContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_Sellingpointsstrip__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_CategoriesMobile__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_OrderMedicinesContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_MedlifeRecipe__WEBPACK_IMPORTED_MODULE_5__["default"], null), false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_Orderhistory__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_CallToOrder__WEBPACK_IMPORTED_MODULE_7__["default"], null), false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_Recentlyviewed__WEBPACK_IMPORTED_MODULE_8__["default"], null), false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_ShopHealthProducts__WEBPACK_IMPORTED_MODULE_9__["default"], null), false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_MedlifeEssentials__WEBPACK_IMPORTED_MODULE_10__["default"], null), false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_Topbrands__WEBPACK_IMPORTED_MODULE_11__["default"], null), false && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_BookALabTest__WEBPACK_IMPORTED_MODULE_12__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_DoctorConsultation__WEBPACK_IMPORTED_MODULE_13__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_Testimonials__WEBPACK_IMPORTED_MODULE_14__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_PartnerWithUs__WEBPACK_IMPORTED_MODULE_15__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_HealthArticles__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_MedicalCertificates__WEBPACK_IMPORTED_MODULE_17__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_CitiesWeServe__WEBPACK_IMPORTED_MODULE_18__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_bodycomponents_MobileFooter__WEBPACK_IMPORTED_MODULE_19__["default"], null));
}

/***/ }),

/***/ "./src/components/BodyWrapperContainer.js":
/*!************************************************!*\
  !*** ./src/components/BodyWrapperContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BodyWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BodyWrapper */ "./src/components/BodyWrapper.js");



var mapState = function mapState(state) {
  return {
    features: state.feature_reducer.data.features
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapState)(_BodyWrapper__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactjs-popup */ "reactjs-popup");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactjs_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/Button */ "./src/components/common/Button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/no-access-state-in-setstate */

/* eslint-disable react/destructuring-assignment */

/* eslint react/prefer-stateless-function: 0 */

/* eslint react/no-unescaped-entities: 0 */

/* eslint max-len: 0 */

/* eslint react/prop-types: 0 */

/* eslint jsx-a11y/anchor-is-valid: 0 */





var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Footer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Footer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isReturnPolicyModalOpen: false,
      subscribeFormEmail: '',
      subscriptionSuccesful: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateField", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, _defineProperty({}, name, value));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubscribeSubmit", function (e) {
      e.preventDefault();
      var data = {
        email: _this.state.subscribeFormEmail,
        source: 'medlife_corp'
      };
      Object(axios__WEBPACK_IMPORTED_MODULE_2__["post"])('https://www.medlife.com/ml-rest-services/v1/medlife/customer/newsletter/subscribe', data).then(function (res) {
        if (res.data.status === true) {
          _this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              subscribeFormEmail: '',
              subscriptionSuccesful: true
            });
          });
        } else {
          _this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              subscriptionSuccesful: false
            });
          });
        }
      }).catch(function () {
        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            subscriptionSuccesful: false
          });
        });
      });
    });

    return _this;
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "footer web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row footer--contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-9 d-flex align-content-start row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--contact-us-heading"
      }, "Whatsapp us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "footer--whatsapp-number"
      }, "8884700000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--contact-us-heading"
      }, "Follow us on"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "d-flex justify-content-start"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "footer--social-links"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://www.facebook.com/Medlifecare/?fref=ts",
        className: "social-icon icon-facebook",
        title: "Facebook"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../../static/facebook.png",
        alt: "Facebook"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "footer--social-links"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://twitter.com/medlifecare",
        className: "social-icon icon-twitter",
        title: "Twitter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../../static/instagram.png",
        alt: "Instagram"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "footer--social-links"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: "https://twitter.com/medlifecare",
        className: "social-icon icon-twitter",
        title: "Twitter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "../../static/twitter.png",
        alt: "Twitter"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--contact-us-heading"
      }, "Subscribe newsletter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "footer--search",
        type: "text",
        placeholder: "email@domain",
        value: this.state.subscribeFormEmail,
        onChange: this.updateField,
        name: "subscribeFormEmail"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "button-primary footer--search-button",
        text: "subscribe",
        disabled: !this.state.subscribeFormEmail.length,
        onClick: this.handleSubscribeSubmit
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 d-flex justify-content-end pl-0 pr-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-inline-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--contact-us-heading"
      }, "Download our App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "footer--app-play-store-images",
        src: "../../static/appstore.png",
        alt: "Appstore"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "footer--app-play-store-images",
        src: "../../static/playstore.png",
        alt: "Playstore"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row footer--contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 d-flex align-content-start row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--contact-us-heading"
      }, "Give a missed call to Download the app"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "footer--whatsapp-number"
      }, "7329073290")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row footer--links"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 d-flex align-content-start row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--links-heading"
      }, "For Customers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "footer-links-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "ttps://m.medlife.com/"
      }, "Medical Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://shop.medlife.com/"
      }, "Health products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/consult"
      }, "Doctor consultation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://labs.medlife.com/"
      }, "Lab tests")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/doctors/"
      }, "Find a Doctor")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/web/"
      }, "Health Articles")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/web/offers/"
      }, "Offers / Coupons")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--links-heading"
      }, "Medlife for Doctors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "footer-links-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/fordoctors"
      }, "For Doctors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/fordoctors#contact"
      }, "Book a Demo"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--links-heading footer--links-partner-heading"
      }, "Partner with us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "footer-links-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/affiliate"
      }, "Affiliates")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/affiliate"
      }, "Franchise")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--links-heading"
      }, "Help"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "footer-links-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/"
      }, "Help")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.medlife.com/#faq"
      }, "FAQ\u2019s")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-link p-0",
        onClick: function onClick() {
          return _this2.setState({
            isReturnPolicyModalOpen: !_this2.state.isReturnPolicyModalOpen
          });
        }
      }, "Return Policy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-link p-0",
        onClick: function onClick() {
          return _this2.setState({
            isTnCModalOpen: !_this2.state.isTnCModalOpen
          });
        }
      }, "Terms and Conditions")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-link p-0",
        onClick: function onClick() {
          return _this2.setState({
            isPrivacyPolicyModalOpen: !_this2.state.isPrivacyPolicyModalOpen
          });
        }
      }, "Privacy Policy")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--links-heading"
      }, "Medlife"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "footer-links-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://careers.medlife.com/life-medlife/"
      }, "About Us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#https://www.medlife.com/blog/"
      }, "Blogs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://careers.medlife.com/jobs/"
      }, "Careers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "http://careers.medlife.com/life-medlife/"
      }, "Life at Medlife")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 d-flex align-content-start row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "footer--links-heading"
      }, "Top searched"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "footer-links-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Medicines | Healthcare products Doctors | Blog  | FAQ\"s | Return Policy | Health Articles | Offers / Coupons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Medicines | Healthcare products Doctors | Blog  | FAQ\"s | Return Policy | Health Articles | Offers / Coupons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Medicines | Healthcare products Doctors | Blog  | FAQ\"s | Return Policy | Health Articles | Offers / Coupons"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Medicines | Healthcare products Doctors | Blog  | FAQ\"s "))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copyright--section web-only"
      }, "Copyright \xA9 2018 Medlife International Private Limited. All rights reserved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReturnPolicyModal, {
        open: this.state.isReturnPolicyModalOpen
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TermsAndConditionsModal, {
        open: this.state.isTnCModalOpen
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PrivacyPolicyModal, {
        open: this.state.isPrivacyPolicyModalOpen
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var modalStyles = {
  backgroundColor: 'transparent',
  padding: 0,
  border: 0,
  width: '90%'
};
var cardStyles = {
  border: '1px solid #2a2a2a'
};
var cardHeaderStyles = {
  backgroundColor: '#2a2a2a',
  color: '#eaeaea'
};
var cardBodyStyles = {
  height: typeof window !== 'undefined' ? "".concat(window.innerHeight - 100, "px") : '200px',
  overflow: 'scroll'
};

var ReturnPolicyModal = function ReturnPolicyModal(_ref) {
  var open = _ref.open;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    modal: true,
    closeOnDocumentClick: true,
    open: open,
    contentStyle: modalStyles,
    lockScroll: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: cardStyles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header",
    style: cardHeaderStyles
  }, "Return Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    style: cardBodyStyles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " At Medlife.com, we strive to ensure your orders are delivered to your satisfaction. However, in the rare event that your order is unsatisfactory, we are happy to accept returns for orders, if: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "not-match-list"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " - you've received an item(s) that does not match your order "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " - the item(s) were damaged in transit or shortage (delivery of such order to be refused at doorstep) "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " - the item(s) is due to expire within 3 months where the shelf life of the item is more than 3 months "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, " - the patient has developed any allergies after taking the medication and the doctor has prescribed another medicine, the medicines can be returned within thirty (30) days from the date of delivery. "), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Note:"), ' ', "If you notice the package is damaged at the time of delivery, please do not accept the order. If you could not check that the order is damaged at the time of delivery, raise a return request within 24 hours of delivery by calling us at 1860 1234 1234.Replacement for the damaged item (s) is subject to availability in stock. In absence of a replacement, a refund will be issued.", ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "return-statement"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Returns are subject to the following conditions:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "return-conditions"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Items being returned should only be in their original manufacturer's packaging i.e. with labels, bar-code."), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Only fully unused strips/bottles can be returned"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Batch number of the product being returned should match as mentioned on the sales invoice"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Original sales invoice has to be returned for processing returns and refunds."), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "accept-conditions"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "We do not accept returns in following scenarios:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "accept-scenarios"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Partially used strips, opened bottles cannot be returned."), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Products which require specific storage conditions (temperature controlled) cannot be returned (vials, injections, vaccines, penfills, etc)"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Products which have expired post purchase."), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Second time request against the same product/order."), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "return-process"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Return Process:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', "If you're order is suitable for a return based on the conditions above, you can raise a request within thirty (30) days from the date of delivery. For details on how to contact us for a return, please visit", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    "data-dismiss": "modal",
    id: "go-to-return",
    onClick: "goToReturn()"
  }, "here"), ". Please note that all returns are reviewed for eligibility. All refunds are subject to the verification and review by our Returns team.", ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "refund-labs"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Refunds for Lab Services:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " If you've placed an order for our lab/diagnostic services, you may cancel it anytime two hours before your scheduled sample collection. If payments are directly made to the service providers for diagnostic purposes, any claims that arise must be made to the chosen service provider, as Medlife and its representatives are only facilitators. "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " If you\u2019ve made a payment to Medlife.com, refund will be processed for requests raised with three (3) days of order request placed. "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "third-party"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Returns and Refunds for Third Party Affiliate Orders:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Return and refund requests for orders placed by our third-party affiliates will be addressed by the respective affiliate. Please contact them for any claim that may arise. Medlife will not be liable for refunds for the payments initiated through third party affiliates. "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "refunds-timeline"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Refunds timeline:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, " Refunds for all eligible Returns are issued through the payment method used at the time of purchase, except for Cash on Delivery. "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "time-frame"
  }, " The time frame for different payment modes is given below: "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "details-table"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Mode of Payment")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Mode of Refund")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Time frame")), ' ')), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "Credit cards / Debit Cards"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "Credit cards/debit Cards"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "5-7 business days*"), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "Net Banking"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "Net Banking Account (Credited to Bank Account)"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "5-7 business days*"), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "Cash on Delivery"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "NEFT to Bank Account"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "3-5 business days*"), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "E-Wallets"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "E-Wallets"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "details-data"
  }, "3-5 business days"), ' '), ' '), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, " * Refund timelines depend on bank turnaround times and RBI guidelines. This may change from time to time. Business days shall mean the working days on which Medlife corporate office operates. ")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "cash-on-delivery"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "For Cash on Delivery orders:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "neft-transaction"
  }, " For orders placed using Cash on Delivery as the payment method, refunds can be processed to your bank account via National Electronic Funds Transfer (NEFT). You will need to update following information to enable us to process a refund to your account. "), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "bank-details"
  }, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "-The Bank Account Number"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- IFSC Code"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Account Holder's Name"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Bank Branch"), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "- Bank Name"), ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Important:"), ' ', "Refunds cannot be processed to third-party accounts. The name on your Medlife account should match with the name of the bank account holder. If you have paid the bills using a third party account, refunds will be made to the same account. NEFT refunds will typically be initiated in three business days from our end and will be credited to your account in another two to three business days. Medlife will not be liable for any delay caused in refunds due to delay by third party affiliates (including banks), in providing information by the customer, technical issues and other reasons beyond its control.", ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "General:")), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', "1.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Manufacture Warranty"), ' ', "( where applicable for devices/instruments) - If the returns of the products are arising from a warranty provided by manufacturer, please direct your returns to the manufacturer. Medlife takes no responsibility for the warranties provided by the manufacturer and such products does not fall within the ambit of the return policy.", ' '), ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, ' ', "2.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Liability"), ' ', "Maximum liability for any wilful delay caused by Medlife, shall be limited to the actual sale consideration received by Medlife or the amount refundable to customer, whichever may be lesser.", ' '))));
};

var TermsAndConditionsModal = function TermsAndConditionsModal(_ref2) {
  var open = _ref2.open;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    modal: true,
    closeOnDocumentClick: true,
    open: open,
    contentStyle: modalStyles,
    lockScroll: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: cardStyles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header",
    style: cardHeaderStyles
  }, "Terms & Conditions"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    style: cardBodyStyles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "BY CONTINUING TO ACCESS AND USE THIS WEBSITE/MOBILE APPLICATION YOU CONFIRM THAT YOU ACCEPT OUR TERMS AND CONDITIONS OF USE SET OUT BELOW. IF YOU DO NOT ACCEPT THE TERMS AND CONDITIONS, YOU MUST LEAVE THIS WEBSITE/MOBILE APPLICATION."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "About us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Medlife.com website and the mobile application is owned and provided by Medlife International Private Limited (hereinafter \u201CMedlife\u201D), a company incorporated under the Companies Act, 2013. If you need any information or have a complaint about this website/mobile application or any of our services please contact us by one of the following methods:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Phone:\xA0 1860 1234 1234")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Professional Standards"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Medlife services are rendered either from its own licensed premises or from the licensed premises of its", ' ', ' ', ' ', "associates / network pharmacies which are undertaken under strict supervision of the qualified and registered pharmacists. All pharmacists are bound by codes of professional ethics and conduct.\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Privacy."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Your privacy and that of any other person whose information you provide to us is important to us. Please see our privacy policy for details of what information we collect and how we will use and protect it."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Registration."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "By registering and using the services you agree that you are eighteen years or above and you are not debarred by any law to contract and you agree to have read and accepted the terms and conditions provided herein\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Visitors to this website/mobile application are required to register in order to use its facilities/ services. We are not under any obligation to accept a request for registration and reserve the right to suspend or terminate access at any time if your continued use is believed to prejudice us or other users. By registering to use this website /mobile application you confirm that the information you provide during the registration process is accurate and complete. You agree to update your registration details promptly if there are any changes. All registration information you provide will be kept secure and processed in accordance with our privacy policy\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Username and password."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "During the registration process, you may be allocated, or invited to choose, your own username and password which will be unique to you. You are responsible for keeping your username and password confidential and for ensuring that they are not used by any other person."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Offers, promotions, software and downloads."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Medlife and other third parties with whom we have a business relationship may occasionally promote their goods or services on the website or mobile application or through other direct marketing initiatives or may make software and other materials available for you to purchase or download. Whilst we try to encourage third parties to offer good quality products, and services and materials at competitive prices we have no control over them or other third parties, we do not endorse the products or services they offer, or give you any assurance that they will be suitable for your needs. It is your responsibility to satisfy yourself in this regard and we have no liability in connection with the same. All promotions are for limited period and subject to special terms and conditions, which are in addition and not to the terms and condition stated herein."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Ownership of materials and licence terms."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "This website or mobile application, the materials and software on it, or provided to you through it are protected by copyright, trade mark and other intellectual property rights and laws throughout the world and are owned by, or are licensed to Medlife and/or third parties. You are permitted to display the materials on this mobile application on a computer screen/mobile screen and, save for restricted access documents, to download and print a hard copy for your personal use or for obtaining products or services from us provided you do not alter or remove any of the content or any part of the website/mobile application without our express permission to do so and that you do not change or delete any copyright, trade mark or other proprietary notices.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "You agree not to:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "copy, reproduce, store (in any medium or format), distribute, transmit, modify, create derivate works from all or any part of this website/mobile application or the materials or software on it, or provided to you through it without our prior written consent (which may be given or withheld in our absolute discretion)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "use this website/mobile application or any of the materials or software on it, or provided to you through it, for:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any unlawful purpose or in contravention of applicable law"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "commercial exploitation without our prior written consent"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any purpose or in any manner that may give a false or misleading impression of us, our staff or our services"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "use, upload or transmit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      listStyle: 'none',
      display: 'inline'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any material that is defamatory, offensive, obscene or otherwise unlawful, or which may cause offence or distress, or which may affect or infringe the rights of any other person"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any device, software, file or mechanism which may interfere with the proper operation of this website or our systems")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "establish a link to this mobile application from any other website, intranet or extranet site without our prior written consent"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "decompile, disassemble or reverse engineer (or attempt to do any of them) any of the software or other materials provided on or through this website/mobile application"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "do anything that may interfere with or disrupt this website/mobile application or our service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "encourage or permit others to do any of the above")), "In the event that you do not comply with the above restrictions, any person affected by your actions may bring a claim against you and/or Medlife. We will pursue a claim against you for any losses and costs (including legal costs) we may suffer as a result of your actions.", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Suitability of materials."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "We do not give any assurance that the materials provided or available to you on or through this website/mobile application are suitable for your requirements or that they will be secure, error or virus free and we will have no liability in respect of those materials."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Mobile application availability."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "This mobile application is provided free of charge and we make no guarantee that it will be uninterrupted or error free. We reserve the right to modify, suspend or withdraw the whole or any part of the website/mobile application or any of its content at any time without notice and without incurring any liability."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Links from this website/mobile application."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "We may, from time to time, provide links from this mobile application to other websites that are owned and controlled by third parties. These links are provided only for your convenience and we have no control over and will have no liability in respect of those websites."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Surveys, Contests & Referrals"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "From time-to-time our site requests information from users via surveys or contests. Participation in these surveys, contests or referrals programs is completely voluntary and the user therefore, you have a choice whether or not to disclose any information requested. Information requested may include contact information (such as name and delivery address), and demographic information (such as postcode, age level). Contact information will be used to notify the winners and award prizes. Survey information will be used for purposes of monitoring or improving the functionality of the site. The terms and conditions for each survey and contest may differ or otherwise amended and cancelled at the sole discretion of Medlife."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Monitoring."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "We may monitor activity and content on this website/mobile application and may take any action we consider appropriate if we suspect you may be in breach of these Terms and Conditions including suspending, attaching conditions to or terminating your access and/or notifying the authorities or relevant regulators of your activities."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Security."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "We employ security technology as detailed in our", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\xA0"), "privacy policy", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\xA0"), "however, Internet transmissions are never completely private or secure and there is a risk, therefore, that any message or information you send to us from this website may be intercepted and potentially read by others. We will have no liability in respect of any transmissions you send to us and you do so entirely at your own risk."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Accuracy of Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "We take care to ensure that all information available on our website/mobile application about our business, services and any products mentioned is accurate. However, these are continually developing and, occasionally, the information may be out of date. Medical, commercial and legal practice change frequently and the content on this website/mobile application, in of any newsletters and in other items offering guidance have been prepared for general interest only and are not a substitute for specific medical, legal or other professional advice and should not be read or used as such. For accurate up-to-date information you should contact us and/or your doctor directly."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Disclaimer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "MEDLIFE DOES NOT WARRANT OR REPRESENT THAT THE MATERIAL ON THIS WEBSITE/MOBILE APPLICATION IS ACCURATE, COMPLETE OR CURRENT OR THAT THE WEBSITE WILL BE FREE OF DEFECTS OR VIRUSES. NOTHING CONTAINED IN THE PAGES OF THIS WEBSITE/MOBILE APPLICATION SHOULD BE CONSTRUED AS MEDICAL, COMMERCIAL, LEGAL OR OTHER PROFESSIONAL ADVICE. DETAILED PROFESSIONAL ADVICE SHOULD BE OBTAINED BEFORE TAKING OR REFRAINING FROM ANY ACTION BASED ON ANY OF THE INFORMATION OR MATERIAL CONTAINED IN THIS WEBSITE/MOBILE APPLICATION OR ANY COMMUNICATIONS PROVIDED TO YOU AS A RESULT OF YOUR REGISTRATION."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Liability"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE (IN CONTRACT, NEGLIGENCE OR OTHERWISE) WHERE:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      listStyle: 'none',
      display: 'inline'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "(A) THERE IS NO BREACH OF A LEGAL DUTY OF CARE OWED TO YOU BY US;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "(B) THE LOSS OR DAMAGE IS NOT A REASONABLY FORESEEABLE RESULT OF ANY SUCH BREACH; OR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "(C) ANY LOSS OR DAMAGE OR INCREASE IN LOSS OR DAMAGE RESULTS FROM A BREACH BY YOU OF THESE TERMS AND CONDITIONS.THE MAXIMUM LIABIITY OF MEDLIFE SHALL BE LIMITED TO THE COST OF THE PRODUCTS PURCHASED OR SERVIES AVAILED BY THE CUSTOMER, MEDLIFE OR ITS DIRECTORS SHALL NOT BE LIABLE FOR ANY INDRECT, CONSEQUENTIAL OR OTHER DAMAGES CAUSED TO THE USER")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Third party rights."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "Nothing in these Terms and Conditions is intended to nor shall it confer a benefit on any third party under the Contracts and a person who is not a party to these Terms and Conditions has no rights to enforce them."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Waiver."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "No delay or decision not to enforce rights under these terms and conditions will constitute a waiver of the right to do so and will not affect rights in relation to any subsequent breach."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "WE RESERVE THE RIGHT TO CHANGE THESE TERMS AND CONDITIONS AT ANY TIME. THE NEW VERSION WILL BE POSTED ON THIS WEBSITE/MOBILE APPLICATION AND WILL TAKE EFFECT IMMEDIATELY UPON POSTING"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "IF YOU USE THE WEBSITE/MOBILE APPLICATION AFTER THE NEW TERMS AND CONDITIONS HAVE COME INTO EFFECT, YOU WILL BE INDICATING YOUR AGREEMENT TO BE BOUND BY THE NEW TERMS AND CONDITIONS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "PRESCRIPTION ORDER")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "THE FOLLOWING TERMS APPLY TO YOUR USE OF THE MEDLIFE PRESCRIPTION ORDERING SERVICE. THESE ARE ADDITIONAL TO AND SUPPLEMENT OUR GENERAL WEBSITE/MOBILE APPLICATION TERMS AND CONDITIONS WHICH ALSO APPLY."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "IF YOU HAVE ANY QUESTIONS CONCERNING THE SERVICE, PLEASE CONTACT US."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Prescriptions for persons other than yourself:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If the prescription is of a person other than yourself, you will need to have the authority of the person whose prescription it is to have it dispensed by us. By placing an order to dispense another person\u2019s prescription you confirm that you have their authority to do so."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Age Restrictions:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We only accept Prescription Orders from customers who are 18 years old or over although they may order prescriptions for persons who are under 18. By placing an order, you confirm that you are at least 18 and legally eligible to contract."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Residency:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We accept Orders from and despatch orders to addresses in selected locations in India.\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Binding agreement:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No Order placed by you will be binding on us until we have confirmed the order to you by phone, email or in writing. We reserve the right to reject any order. All orders are delivered subject to receipt of valid prescription and availability."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Verification of prescription:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "When we receive an original prescription from you, our pharmacist will verify it against the information provided to us at the time the order was placed. In the event that the information does not match with your original order as per the prescription, we may try to contact you using the information in your registration. If we cannot contact you and we are unable to dispense the item(s) on your Prescription Order we reserve the right to return your prescription to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Non-Receipt of Prescription:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you place a Prescription Order and we do not receive the relevant original prescription, we will not have any liability to you and it will be your responsibility to contact us within 7 days regarding your prescription order."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Validation Of Prescription:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Validation of prescription services through our partner Registered Medical Practitioner shall be made available to the User only upon request of the User and in the following situations:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The existing prescription has expired and the User is unable to get an appointment with his Registered Medical Practitioner ; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The prescription is not legible and the prescribing Registered Medical Practitioner is unavailable to validate the prescription; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The prescription is not as per the standards defined by Medical Council of India, including, missing Doctor details, patient details etc; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "If the prescription contains schedule X drugs / unusual quantities.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The User understands and agrees that the validation of prescription services provided herein are only on request and are intended for general purpose only and should not be used in case of medical emergencies and serious illness issue where physical consultation is recommended and at no point these services are intended to replace the physical consultation. The User also agrees and understands that for providing the validation of prescription service Medlife will have to share the prescription with its partner Registered Medical Practitioner and by requesting the services the User confirms its consent to share his/her prescription with Medlife's partner Registered Medical Practitioner. Upon the request of the User, the prescription of the User shall be shared with Medlife's partner Registered Medical Practitioner and post consultation or review of the prescription, if the Registered Medical Practitioner deems fit, he/she may validate the prescription shared with him/her of the User. However, at all time the Registered Medical Practitioner has the discretion to refuse consultation or validation of the prescription if the Registered Medical Practitioner is of the opinion that a physical consultation is required before a prescription is validated."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "User agrees that the Registered Medical Practitioner will use the technology of Medlife for rendering the above services and they share the information with Medlife of its affiliated partners for rendering the services."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "E-Consultation with the Physician:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By downloading, registering and accepting the terms and conditions, User can book appointment with a registered Medical practitioner (Physician) and discuss their health-related issues, opinion on the diagnostic reports, obtain e-prescription for their medical needs and avail other healthcare services. E-Consultation can be provided by teleconsultation, video conferencing or otherwise in other media that Medlife may at its sole discretion provide the options to the User based on the availability of the Physicians. Please note that E-Consultation services are provided at the express consent by the User and the same shall not be construed as a replacement for physical consultation. User is warned not to use E-Consultation Services in times of emergency and any medical Services that require further diagnostics and physical inspection."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "E-Consultation Services:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "User agrees that E-Consultation is not a substitute for physical consultation and the Services are meant for general consultation only. If after the E-consultation, the Physician recommends any diagnostic tests to be undertaken or issues a Prescription, the same are provided based on the information and preliminary examination by the Physician, hence the same shall not be treated as accurate, final and conclusive. Physician reserves their rights to modify the prescription or recommended diagnostic tests if the User provides any additional information in future consultation. While rendering E-Consultation, Physician will require to know the age, sex, previous and existing health conditions, symptoms, past medical history, physical examination (if directed by the Physician) etc. All the information with respect to the User History, consultation records, medical record and prescriptions issued by the Physician will be saved with Medlife and the same may be used for rendering Services as may be required by the User for time to time. Services offered by Medlife are intended for direct use of the User or their family members, but the same cannot be used for rendering Services to third parties. Medlife acts as an intermediary to provide technology and applications to connect the User and the Physician on one platform and does not endorse, recommend or authorize the action of any Physician. Any claims or liabilities arising from the use of the Services between the User and the Physician shall be resolved directly by User and the Physician, Medlife disclaims all liabilities arising from use of the Services by the User and the maximum liability of Medlife to the User shall be limited to the Service Fees paid by the User to Medlife."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Booking an Appointment:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Before booking a consultation, User shall ensure that the language in which the User prefer the consultation is available in the Services. User does not have the ability to choose a Physician of his/her choice. Medlife will direct the request for E-consultation to the Physician available in the specialized subject. Medlife does not endorse of refer any doctor for E-consultation, during the process User has the choice to either proceed with the Consultation or withdraw from the Services. Acceptance of the Terms and Condition and booking an appointment by the User, entitles Medlife to unconditionally store and share all the information of User with the Physician and store such information and/or conversation of the User with Medlife or the Physician. All the information stored by Medlife will be secured and maintained in compliance with the laws applicable in India."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Re-scheduling, Cancellation and Refund Policy for E-Consultation:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In any event if the User is unable to avail the E-Consultation Services from the Physician or if the User wishes to cancel the appointment, User shall be entitled to do so by choosing the respective option in the App. If User does not avail the Services or cancels the E-Consultation, the Services Fees will be refunded to the User as per the Refund Policy in the same manner of payment in which the User has paid the Service Fees. However, if the User refuses to take the call when the Physician call the User or cancels the appointment one hour before the scheduled time, the User will not be entitled for any refund. Any issued with regard to payments made, refunds claimed or otherwise error in the transactions shall be reported to", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:support@medlife.com"
  }, "support@medlife.com"), ' ', "or call the customer care at 1860 1234 1234."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Service Fee:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "User shall make the necessary payments using the various payment options as per the fees applicable and charged by the respective Physician. Upon receipt of the payment from the User, Medlife will schedule the appointment with a qualified Physician and send a confirmation by app notification, SMS or email."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Disclaimer:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The User understands and agrees Medlife is providing a technology service as an intermediary and that all the services are provided to the User directly by the Registered Medical Practitioner with regard to any health issues, consultation, validation, unsatisfactory services etc. availed by the User under the above mentioned clause services are between the User and the Registered Medical Practitioner and that at no point in time Medlife shall be held responsible for the same. Further, notwithstanding anything contained herein, Medlife shall not be liable for:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any medical negligence, prescription of any wrong medication or treatment on part of the Registered Medical Practitioner;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any type of inconvenience suffered by the User due to a failure on the part of the Registered Medical Practitioner in providing the agreed services or to make himself/herself available at the appointed time, inappropriate treatment, or similar difficulties;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any misconduct or inappropriate behaviour by the Registered Medical Practitioner;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "cancellation or rescheduling of booked appointment;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "any medical eventualities that might occur subsequent to using the services of the Registered Medical Practitioner.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Subscription:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Under the subscription model, User can subscribe for his/her/its medicine requirement by choosing a subscription plan that best suit the User's need and the User can customise the same according to the User's requirement. All orders under the subscription plan shall be automatically placed in accordance with the chosen subscription plan. All orders under the subscription model shall be subject to all the other applicable terms and conditions mentioned herein along with all statutory requirements for processing an order."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Clubbing of offers:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Any ongoing offer or promotional scheme cannot be clubbed with the orders placed under the subscription plan. All orders under the subscription plan shall be processed based on the standard discount and promotional scheme available at the time of processing any order under the subscription plan. Medlife shall have the sole discretion to decide with regard to the offers or scheme that shall be applicable to the orders placed under the subscription plans."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Discount on Selected Products:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Discounts provided on the website/mobile application are on selected products. Discounts are not applicable on the following products and on any products so mentioned elsewhere on the website/mobile application:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "1. All Baby foods viz Ceralac, Lactogen, Nanpro etc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "2. All Health Supplements viz Pediasure, Proteinex, Proteinules, Threptin etc"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "3. Over the counter (OTC) products \u2013 Benadryl Cough Syrup, Crocin, Saridon, all Dettol, Savlon products, medicated soaps etc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "4. All Cosmetic products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Non-Availability/Suitability of Products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If any of the items on your prescription are not available, or are not suitable for dispensing through this service, we will try to contact you using the information in your registration to inform you about the same."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Delivery of prescriptions drugs:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Prescription items can only be dispensed once we have received your original paper prescription or online prescription from Medlife registered doctor. All items are delivered to the address provided by you in your registration or to an alternative address if directed by you. You acknowledge and accept that items will need to be signed for on delivery and authorise any person at your chosen delivery address to sign for the items as your authorised representative. In the event that the packaging is opened after delivery, we will have no liability to you for lost or damaged items or for what third parties find out about you as a result."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "No Warranties:"), ' ', "Medlife makes no warranty that: (i) the application will meet your requirements; (ii) the application will be available on an uninterrupted, timely, secure, or error-free basis; (iii) the any results that may be obtained from the use of the application or any services offered through the Website will be accurate or reliable (iv) Medlife disclaims all warranties as to the accuracy, completeness or adequacy of such information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife disclaims all liabilities arising from manufacturing defects and the claims if any with regard to defect in manufacturing or otherwise shall be made directly on the manufacturer whose information in provided on the product. Medlife may at its sole discretion assist User in providing any information that may be required with regard to the claim."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Order, Acceptance & Delivery"), ": Placement of an order either directly (in case of a repeat order or continuous drug administration as prescribed) shall constitute an agreement with us. All orders are subject to acceptance and confirmation of delivery date and time. Mere receipt of the prescription or an order either directly from you or from the registered medical practitioner does not amount to acceptance of your order nor guarantee that the drugs will be delivered as per your requirement within a specific time. All orders are subject to availability of stocks. Medlife reserves the right to share your prescription with its associated pharmacies for fulfilling your prescription, who will dispense the drugs as per the prescription and issue a valid sale receipt.\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All orders made by the customers shall be subject to various laws, including Drugs and Cosmetics Act (as may be amended from time to time). We do not accept orders for certain drugs and cosmetics, unless the same is prescribed by the registered medical practitioner licensed by the Medical Counsel of India. We do not verify the authenticity of the orders placed by you, where the prescriptions are received directly from a registered medical practitioner licensed by the Medical Counsel of India or your family doctor, who has placed the order on your behalf after your authorization. All drugs and cosmetics will be deliver through a delivery agent without disclosing your personal information or prescriptions in compliance with the applicable laws either directly to the patient or its authorised person. On delivery Medlife shall be entitled to full payment for the same."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Express Delivery Services (EDS):"), ' ', "In order to provide better services, Medlife offers express delivery services to its Users, wherein the User select to specified time for express delivery of the order.User can also have the order delivered at his convenience by choosing the fixed time for delivery. User will be charged a convenience fees for delivering the order at their convenience. User shall select the option at the time of placing the order or request for EDS by contacting the customer care. To avail the EDS, the User shall agree to pay additional delivery charges which at present is Rs. 10 (Rupees Ten Only) per order. The service fees for EDS shall vary from city to city based on the date, time and area of delivery. User will be intimated in advance regarding the deliver charges and Users shall check the availability of the services in the area where the User intends to take the delivery of medicines before availing the services. EDS services are available only in selected areas for deliveries during 0800 hours to 2000 hours on all working days in the area, subject to payment of additional delivery charges. Any deliveries scheduled on holiday and non-working hours shall be at additional charges at the sole discretion of Medlife, which will be communicated to the user in advance. Medlife may at its sole discretion accept EDS in few areas on Sundays and national holidays. User cannot modify or alter the delivery time and area after acceptance of the order. Service fees paid shall not be refundable after the order is dispatched for delivery. Medlife reserve the right to discontinue or suspend the EDS at any time without any notice, Medlife shall not be liable for any delay or default in not delivering the orders within the specified time, the sole remedy for the Users shall be limited to seek refund of the service fees, if any paid by the User and aggregate liability of Medlife for any damages shall be limited to Rs. 500 (Rupees Five Hundred Only)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Notification of errors:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You should check the items dispensed to you carefully promptly upon receipt. If you believe there may have been a dispensing error, you should contact us immediately and should not take or use any of the items."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Delivery of fulfilled prescriptions:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Prescription medicines will require a doorstep signature. Prescription items can only be dispensed once we have received your original paper prescription or online prescription from Medlife registered doctor. All items are delivered to the address provided by you in your registration or to an alternative address if directed by you. You acknowledge and accept that items will need to be signed for on delivery and authorise any person at your chosen delivery address to sign for the items as your authorised representative. In the event that the packaging is opened after delivery, we will have no liability to you for lost or damaged items or for what third parties find out about you as a result."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Delivery and Packaging Costs:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All orders with order value of INR 200 or above will be delivered free of cost and no delivery charges shall be applicable on such orders provided that the delivery is within Medlife serviceable areas."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All orders with order value less than INR 200 will attract delivery charges of INR 25."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Value of any order that is equal to or greater than INR 200 at the time of placing the order that is later modified, will not attract any delivery charges."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Any delivery charges paid by the customer for any modified/cancelled/un-delivery order shall be eligible for full refund of the delivery changes provided the customer has made advance payment for the said order."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Delivery charges shall be refunded in full if any other that us delivered and becomes eligible for refund, subject to terms and conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Any delivery charges paid by the customer shall not be eligible for refund of the order is modified or replaced by the customer due to change in prescription or otherwise.\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Cancellation, Return and Refund:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We understand that there will be genuine reasons when you decide to cancel an order. You may cancel your order before delivery by calling customer care number 1860 1234 1234."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "During order delivery, Medlife\u2019s delivery team requests every customer to verify the contents and provide an acknowledgement confirming the correctness and completeness of the order."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "In case of any discrepancies including tampered order box or contents, please alert the delivery team or call us on our customer care number 1860 1234 1234 for resolution."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Once the order is verified and acknowledged by the customer, the order in full or part cannot be returned unless there is a defect in the delivered order which is highly unlikely."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Refunds will be processed only for defective and incorrect deliveries."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All refunds will be made only through NEFT to the account which is provided by the customer. Refunds for Credit Card payments will take 21 days to get processed."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "All returns and refunds will happen in proportion to the products refunded. In case there are part items qualifying for returns and refunds, it is always processed for the full order and invoice. We will not process partial delivery or returns. \xA0\xA0")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Acceptance of the Goods:"), ' ', "We request you to verify the complete details and the documents provided to you at before acceptance of the Goods. Any complaints with regard to shortage of Goods, defects or otherwise will not be entertained by Medlife once the same are accepted at the time of delivery.\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "WARNING:")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "YOU MUST CHECK ALL ITEMS DISPENSED TO YOU AND SHOULD NOT TAKE ANY MEDICATION THAT APPEARS TO HAVE BEEN TAMPERED WITH OR WHICH MAY HAVE BEEN DISPENSED IN ERROR. FAILURE TO ABIDE BY THIS WARNING COULD SERIOUSLY DAMAGE YOUR HEALTH AND MEDLIFE SHALL NOT BE HELD LIABLE."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Information Technology Act"), ":\xA0 Certain laws in India prohibit and impose restriction on use of the Website and you are advised to make familiar with those laws and not to post any information or messages that are, or that may be construed, as being malicious , defamatory, inappropriate, slanderous, pornographic or otherwise sexually oriented or that makes attacks on or the otherwise opines or comments on any individuals or groups of individuals, educational institutions or any other entities whatsoever (whether companies, firms, or any other institutions). You also agree not to post any information to which you do not have copyrights or other appropriate permissions to post in public forum. Your failure to comply with these terms may result in removal of your postings without prior notice to User. The IP address of all posts is recorded to aid in enforcing these conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Other Laws"), ": Certain laws require to maintain data with respect to the services, Goods and other personal information in a prescribed format and Medlife will use all the information to the extent required in compliance with the applicable laws and as may be directed or amended from time to time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Force Majeure"), ": Medlife shall not be liable and to the extent, that the performance or delay in performance of any of its obligations are prevented, restricted, delayed or interfered with due to circumstances beyond the reasonable control and without the fault or negligence of such Party, including but not limited to change in legislation, fire, flood, explosion, epidemic, accident, act of God, war, riot, strike, lockout, traffic or other concerted act of workmen and/or act of Government. Medlife may at its sole discretion withdraw the services or Goods if a Force Majeure event occurs."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Governing Law and Jurisdiction:"), ' ', "The Terms of Use are governed by and constructed in accordance with the laws of India, without reference to conflict of laws principles and you irrevocably and unconditionally submit to the exclusive jurisdiction of the courts located in Patna, India."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Acceptance of Terms and Conditions:"), ' ', "By Clicking on the \"I have read and accept the terms and conditions\" box at the bottom of the Registration Form, You indicate your acceptance of the above Terms and Conditions and you agree to be bound by these terms and conditions set forth below including any additional guidelines and future modifications. If at any time you do not agree to these terms and conditions or you wish terminate your registration as an Affiliate, you may not access or use the information and notify your intention to block your registration."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Share and Earn:"), ' ', "The referred friend should be a new customer and not an existing or returning customer of Medlife. The referred friend must place a valid order using the referral code to avail referral discount on their 1st order and the order should be successfully delivered and not be cancelled or returned. Referral reward coupon shall be credited to the User's account after successful delivery of the referred friend's order. Referral reward discount up to a maximum of 5% of the order value will be automatically redeemed on the User's next orders with Medlife within such time as Medlife may deem fit. Notwithstanding anything contained herein, these terms are in addition to and not in derogation to any other terms as stipulated by Medlife from time to time. Medlife reserves the right in its sole discretion at any time, without any prior notice to suspend / cancel this program or amend these terms."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "E-cash:"), ' ', "To avail the e-cash benefit the User must place a valid order using the promotion code with e-cash offer to avail the e-cash and the order should be successfully delivered and not be cancelled or returned. E-cash shall be credited to the User's account after five (5) working days from the date of successful delivery of the order. E-cash up to a maximum of 5% of the order value will be automatically redeemed on the User's next orders with Medlife. E-cash so received shall be valid for a period of forty-five (45) days from the date it is credited to the User's account. Notwithstanding anything contained herein, these terms are in addition to and not in derogation to any other terms as stipulated by Medlife from time to time. Medlife reserves the right in its sole discretion at any time, without any prior notice to suspend / cancel this program or amend these terms."))))));
};

var PrivacyPolicyModal = function PrivacyPolicyModal(_ref3) {
  var open = _ref3.open;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactjs_popup__WEBPACK_IMPORTED_MODULE_1___default.a, {
    modal: true,
    closeOnDocumentClick: true,
    open: open,
    contentStyle: modalStyles,
    lockScroll: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    style: cardStyles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header",
    style: cardHeaderStyles
  }, "Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    style: cardBodyStyles
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In this policy, the words \"we\", \"our\", and \"us\" refer to Medlife International Private Limited (\u201CMedlife\u201D) and the privacy mechanism outlined identify personally identifiable or personal information that may be collected, how such information is used, and the choices you have regarding our use of this information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "In addition to the terms stated in Term of Use Agreement provided under this Website, we are committed to protecting your privacy. Authorized representatives of Medlife on a need to know basis only use any information received from you or a registered medical practitioner authorised by you. We constantly review our systems and data to secure your personal and health information. We will investigate any complaint or such actions with a view to prosecuting and/or taking civil proceedings to recover damages against those responsible. Any User who does not agree with any provisions of the same is required to leave the Website immediately. Should you disagree with policy and still continue to access the Website and provide your personal information, Medlife disclaim all the liabilities arising therefrom."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Applicability :"), ' ', "This privacy policy apply to all Users who access the Website and are therefore required to read and understand the privacy policy before submitting any Personal Information. If you have inadvertently submitted any such information to Medlife prior to reading the privacy statements set out herein, and you do not agree with the manner in which such information is collected, stored or used, then you may access, modify and delete all information stored about You by", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    style: {
      color: '#a70860'
    },
    "data-toggle": "modal",
    "data-target": ".bs-write-to-us-modal-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "writing to us"))), ". Medlife is keeping personal data of the User, and every User is also entitled to require Medlife to delete and destroy all such information (but not other Users)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Some User are allowed to access the Website, place orders and avail Services on the valid prescription available with Medlife as a guest and without creating an account on the Website or providing any Personal Information, Medlife takes no responsibility or validate the information provided by the guest, except as otherwise required under any law, regulation or an order of competent authority. In order to have access to all the features and benefits on our Website, a User is required to first create an account on our Website. To create an account a User is required to provide the Personal Information as may be required under the", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Application / Registration Form"), ". Other information requested on the registration page, including the ability to receive promotional offers from Medlife, is optional. Medlife may, in future, include other optional requests for information from the User to help Medlife to customize the Website to deliver personalized information to the User. Without User's agreement, Medlife will not share, rent or sell any personal information with third parties in any way other than what is disclosed in this privacy policy. Medlife may keep records of telephone calls received and made for making enquiries, orders, feedback or other purposes for the purpose of rendering services effectively and efficiently."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Personal Information shall mean the information which identifies the User, name, identification number email address, age, phone number, password, health record (including the name of the doctor) or any financial account information provided to Medlife at the time of registration or any time thereafter."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This privacy policy applies to Website and services that are owned and operated by Medlife. Medlife does not exercise control over the sites displayed as search results or links from within its Services . Third party websites may place their own cookies or other files on the Users' computer, collect data or solicit personal information from the Users, for which Medlife is not responsible or liable. Accordingly, Medlife does not make any representations concerning the privacy practices or policies of such third parties or terms of use of such websites, nor does Medlife guarantee the accuracy, integrity, or quality of the information, data, text, software, sound, photographs, graphics, videos, messages or other materials available on such websites. The inclusion or exclusion does not imply any endorsement by Medlife of the website, the website's provider, or the information on the website. Medlife encourages the User to read the privacy policies of that Website."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife has taken all reasonable precautions to treat Personal Information as confidential with industry standards that it has implemented to protect from unauthorized access, improper use or disclosure, modification and unlawful destruction or accidental loss of the Personal Information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Use of your personal information: While availing our services you or your authorised representative will provide", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.google.co.in/intl/en/policies/privacy/example/access-to-your-personal-information.html"
  }, "access to Medlife with your personal information"), ' ', ". If that information is wrong, you can request us to modify or delete the same. Medlife will take all reasonable measures to ensure that the information is modified and used for rendering services to you and as otherwise in compliance with laws. When editing or deleting personal information, we may ask you to verify your identity before we can act on your request. Medlife may at its discretion reject any request that is contrary to law, requires un-reasonable technical efforts. We do not assure that we will delete all residual copies and archives made by any third party without our knowledge and consent."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Exceptions"), ' ', ". Your Personal Information may be shared with third parties who have a need or authority to receive such information, if we have a good-faith belief that access, use, preservation or disclosure of the information is reasonably necessary to comply with (i) in response to any authority having to receive such information under law (ii) any order of court (iii) detect, prevent, or otherwise address fraud, security or technical issues (iv) protect against harm to the rights, property or safety of Medlife, our users or the public as required or permitted by law."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You agree to provide us your Personal Information if you wish to avail any services as provided in the Website and the same is used to identify yourself. Medlife Representative may request you either by email, phone or letter / courier certain Personal Information (such as full legal name, address, name of your doctor, Goods that are consumed etc.,) and such other information that may be required from time to time. Should Medlife use the Personal Information and make any analysis or understand the trends of your Personal Information and lifestyle through a certified officer, you authorise us to share the same with your doctor for a limited purpose of his understanding and validation, however Medlife will exclusively own such data and records, unless you opt to buy the same for a consideration payable to Medlife."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife does not make any unsolicited calls or otherwise market any products or services, except for in relation to the purpose for which such information has been provided or taking any feedback or addressing the complaints. User shall not disclose their Personal Information to any third Parties not authorised by Medlife and verify the identity of such personal who seek information. Medlife will communicate with the Users through email and notices posted on the Website or through other means available through the service, including text and other forms of messaging. The Users can change their e-mail and contact preferences at any time by logging into their account or by calling the customer support or such or mode available from time to time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife may, if you so choose, send direct mailers to you at the address given by you. You have the option to 'opt-out' of this direct mailer by way of links provided at the bottom of each mailer. We respect your privacy and to the extent that you choose not to receive such mailers, we will take all steps to remove you from the list. Should you evidence any violation of our terms and policies, please", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    style: {
      color: '#a70860'
    },
    "data-toggle": "modal",
    "data-target": ".bs-write-to-us-modal-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "write to us"))), ' ', "or call us on our call center and report such incident."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All the information provided to Medlife either by a User directly or through our authorised representative, including sensitive personal information, is true, accurate and voluntary. User has the right to withdraw information at any time, in accordance with the terms of this privacy policy and the Terms of Use by", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    style: {
      color: '#a70860'
    },
    "data-toggle": "modal",
    "data-target": ".bs-write-to-us-modal-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "writing to us"))), ' ', "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife may have to use Personal Information without reference to any persona or identity for research, statistical analysis and business intelligence purpose and may sell or otherwise transfer such research, statistical or intelligence data in an aggregated or non-personally identifiable form to third parties and affiliates."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All Medlife employees and data processors, who have access to, and are associated with the processing of sensitive personal data or information, are obliged to respect the confidentiality of every User's sensitive personal data and information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife may also disclose or transfer User's personal and other information which a User provides, to another third party as part of reorganization or a sale of the assets of a Medlife corporation division or company. Any third party to which Medlife transfers or sells its assets will have the right to continue to use the personal and other information that a User provide to us."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To the extent necessary to provide Users with the services on the Website, Medlife may provide their Personal Information to third party contractors who work on behalf of or with Medlife to provide Users with such services , to help Medlife communicate with Users or to maintain the Website. Generally these contractors do not have any independent right to share this information, however certain contractors who provide services on the Website, including the providers of online communications services, will have rights to use and disclose the personal information collected in connection with the provision of these services in accordance with their own privacy policies."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife may update or amend this privacy policy at any time, with or without advance notice. In the event there are significant changes in the way Medlife treats User's personally identifiable information, Medlife will display a notice on the Website or send Users an email. Medlife's current privacy policy applies to all information that Medlife has about Users and their account."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Notwithstanding the above, Medlife shall not be required to notify the Users of any changes made to the privacy policy. Should you have any concern or reject the changes in the privacy policy you can refuse to accept the amendments and opt for withdrawing your Personal Information by", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    style: {
      color: '#a70860'
    },
    "data-toggle": "modal",
    "data-target": ".bs-write-to-us-modal-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "writing to us")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you have any compliant or grievances with respect to Website or this Privacy Policy please", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    style: {
      color: '#a70860'
    },
    "data-toggle": "modal",
    "data-target": ".bs-write-to-us-modal-lg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("u", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "write to us")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null))));
};

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Medlife Customer App"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#302ecd"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Medlife Web App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "manifest",
    href: "/_next/static/manifest.json"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
  }));
}

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_medlife_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/medlife_logo.svg */ "./static/medlife_logo.svg");
/* harmony import */ var _static_medlife_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_medlife_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/Dialog */ "./src/components/common/Dialog.js");
/* harmony import */ var _utils_NavUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/NavUtils */ "./src/utils/NavUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable operator-linebreak */

/* eslint react/prefer-stateless-function: 0 */

/* eslint-disable max-len */








var Location = function Location() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faMapMarkerAlt"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-3 mr-4 navbar--row-1--location--label"
  }, "560078, BTM 1st Stage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronDown"],
    className: "navbar--location-arrow-down"
  }));
};

var Brand = function Brand() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_medlife_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "medlife-logo",
    style: {
      width: '90px'
    }
  });
};

var navLinks = [{
  label: 'MEDICAL STORE',
  path: 'https://m.medlife.com/'
}, {
  label: 'HEALTH PRODUCTS',
  path: 'https://shop.medlife.com/'
}, {
  label: 'DOCTOR CONSULTATION',
  path: 'https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true'
}, {
  label: 'LAB TESTS',
  path: 'https://labs.medlife.com/'
}, {
  label: 'MORE',
  path: '/',
  subLinks: [{
    label: 'Medlife Essentials',
    path: 'https://www.medlife.com/medlife-essentials'
  }, {
    label: 'Find Doctor',
    path: 'https://www.medlife.com/doctors/'
  }, {
    label: 'For Doctors',
    path: 'https://www.medlife.com/fordoctors'
  }, {
    label: 'Affiliates',
    path: 'https://www.medlife.com/affiliate'
  }, {
    label: 'Franchise',
    path: 'https://www.medlife.com/affiliate'
  }, {
    label: 'Offers',
    path: 'https://www.medlife.com/web/offers/'
  }, {
    label: 'Blog',
    path: 'https://www.medlife.com/blog/'
  }]
}];

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showSearchDropdown: false,
      menuCollapse: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleSearchDropdown", function () {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          showSearchDropdown: !prevState.showSearchDropdown
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleHamburgerMenu", function () {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          menuCollapse: !prevState.menuCollapse
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearchFormClick", function () {
      Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_6__["navigate"])('https://m.medlife.com/#/root/home/medicineSearch');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSearchForm", function () {
      var showSearchDropdown = _this.state.showSearchDropdown;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar--search-form-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "navbar--search-form form-inline my-lg-0",
        onClick: _this.handleSearchFormClick,
        onKeyDown: _this.handleSearchFormClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group-prepend d-none"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-outline-secondary navbar--search-form--category-btn",
        type: "button",
        onClick: _this.toggleSearchDropdown,
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, "All", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronDown"],
        className: "navbar--location-arrow-down"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu",
        style: {
          display: showSearchDropdown ? 'block' : 'none',
          top: '38px'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: _this.toggleSearchDropdown,
        className: "navbar--row-1--search--selector-btn dropdown-item btn btn-link"
      }, "All"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        onClick: _this.toggleSearchDropdown,
        className: "navbar--row-1--search--selector-btn dropdown-item btn btn-link"
      }, "All"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control navbar--row-1--search--search-input",
        "aria-label": "Text input with dropdown button",
        placeholder: "Search for medicines, health products"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        className: "search-icon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"]
      }))));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderNavLinks", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav mr-auto d-flex justify-content-between"
      }, navLinks.map(function (link) {
        var linkCLasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()('nav-item active position-relative');
        var hasSubLinks = !!link.subLinks && link.subLinks.length > 0;
        var linkHref = hasSubLinks ? '#' : link.path;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: linkCLasses,
          key: link.label
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "nav-link pl-0 pr-0",
          href: linkHref
        }, link.label), hasSubLinks ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "dialog navbar--dialog",
          render: function render(_ref) {
            var className = _ref.className;
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: className
            }, link.subLinks.map(function (subLink) {
              var subLinkCLasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()('');
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                key: subLink.label,
                className: subLinkCLasses
              }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                className: "d-block navbar--dialog--sublink",
                href: subLink.path
              }, subLink.label));
            }));
          }
        }) : '');
      }));
    });

    return _this;
  }

  _createClass(Navbar, [{
    key: "render",
    // getNavbarFeatures = () => {
    //     const  { features } = this.props;
    //     const location = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_LOCATION,
    //     });
    //     const searchCategory = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_SEARCH_CATEGORY_SELECTOR,
    //     });
    //     const searchBox = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_LOCATION,
    //     });
    //     const shoppingCart = findWhere(features, {
    //         feature_name: FeatureNames.HOMEPAGE_HEADER_SEARCH_CATEGORY_SELECTOR,
    //     });
    // }
    value: function render() {
      var menuCollapse = this.state.menuCollapse;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-sm navbar-light"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex d-block w-100 navbar--wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-shrink-sm-1 d-flex flex-sm-column flex-row logo-location-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        className: "navbar--hamburger mobile-only",
        onClick: this.toggleHamburgerMenu,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: menuCollapse ? 'collapsable-menu--container mobile-only' : 'collapsable-menu--container mobile-only active'
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-brand",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brand, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"],
        className: "cross-icon",
        onClick: this.toggleHamburgerMenu
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "navbar--user-profile"
      }, "Sumanth Sri"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "collapse navbar-collapse navbar--row-1--location--label py-2 pr-2 invisible"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-brand web-only",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brand, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse flex-grow-1 align-items-start flex-column justify-content-between search-navigation-container web-only"
      }, this.renderSearchForm(), this.renderNavLinks()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-cart-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-link navbar--shopping-cart-button invisible"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        className: "navbar--shopping-cart-button--icon",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShoppingCart"]
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar--items-in-cart"
      }, "2")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-link navbar--profile-button web-only invisible"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"],
        className: "navbar--profile-button--icon"
      }), "Sushmita"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "web-only"
      }, "Call to order", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "1860 1234 1234"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "btn btn-link text-secondary",
        onClick: this.handleSearchFormClick,
        onKeyDown: this.handleSearchFormClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        className: "search-icon mobile-only",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"]
      }))))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/NavbarContainer.js":
/*!*******************************************!*\
  !*** ./src/components/NavbarContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");



var mapState = function mapState(state) {
  return {
    features: state.feature_reducer.data.features
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapState)(_Navbar__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/bodycomponents/Banner.js":
/*!*************************************************!*\
  !*** ./src/components/bodycomponents/Banner.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_banner_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../static/banner.png */ "./static/banner.png");
/* harmony import */ var _static_banner_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_banner_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_banner_mobile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/banner_mobile.png */ "./static/banner_mobile.png");
/* harmony import */ var _static_banner_mobile_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_banner_mobile_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/Prevarrow */ "./src/components/bodycomponents/carousel/Prevarrow.js");
/* harmony import */ var _carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel/Nextarrow */ "./src/components/bodycomponents/carousel/Nextarrow.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint react/prefer-stateless-function: 0 */







var BannerhomeImage = function BannerhomeImage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_banner_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "banner",
    style: {
      height: '100%'
    }
  });
};

var BannerhomeImageMobile = function BannerhomeImageMobile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_banner_mobile_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "banner",
    style: {
      height: '100%'
    }
  });
};

var Banner =
/*#__PURE__*/
function (_Component) {
  _inherits(Banner, _Component);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, _getPrototypeOf(Banner).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_5__["default"], null),
        prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_4__["default"], null)
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel--full-stretch-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 carousel--medlide-banner-space-desc-wrapper d-flex justify-content-start align-items-center no-padding-x-axis web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "carousel--medlide-banner-space-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "carousel--desc-heading"
      }, "ONE STOP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "carousel--desc-heading-primary"
      }, "PHARMACY"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "carousel--desc-text"
      }, "FOR ALL YOUR HEALTH NEEDS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-9 no-padding-x-axis carousel--banner-space"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImage, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImage, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImage, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImage, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImage, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImage, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImage, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImageMobile, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImageMobile, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImageMobile, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImageMobile, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImageMobile, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImageMobile, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BannerhomeImageMobile, null))))));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/BannerContainer.js":
/*!**********************************************************!*\
  !*** ./src/components/bodycomponents/BannerContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Banner */ "./src/components/bodycomponents/Banner.js");



var mapState = function mapState(state) {
  return {
    features: state.feature_reducer.data.features
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapState)(_Banner__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/bodycomponents/BookALabTest.js":
/*!*******************************************************!*\
  !*** ./src/components/bodycomponents/BookALabTest.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/ScreenSizeHOC */ "./src/components/common/ScreenSizeHOC.js");
/* harmony import */ var _carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel/Prevarrow */ "./src/components/bodycomponents/carousel/Prevarrow.js");
/* harmony import */ var _carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel/Nextarrow */ "./src/components/bodycomponents/carousel/Nextarrow.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Button */ "./src/components/common/Button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable operator-linebreak */

/* eslint-disable react/jsx-wrap-multilines */

/* eslint-disable react/destructuring-assignment */

/* eslint react/prefer-stateless-function: 0 */









var LabTestCarouselItem = function LabTestCarouselItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--items"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "book-lab-test--items-image web-only",
    alt: "Recent",
    src: "../../../static/healthtest.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--items-details-wrapper d-flex justify-content-between"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "book-lab-test--items-heading"
  }, "Arogyam A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "book-lab-test--items-desc"
  }, "60 Tests inc."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "book-lab-test--items-logo",
    alt: "Logo",
    src: "../../../static/thyrocare.png"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--prices-discount"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "book-lab-test--discount-price"
  }, "\u20B9550"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--price-and-disc"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "book-lab-test--mrp"
  }, "\u20B91000"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--discount-percent"
  }, "45% off")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between mobile-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "button-primary",
    text: "Book Now"
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between web-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "button-transparent",
    text: "Quick View"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "button-primary",
    text: "Book Now"
  })));
};

var LabTestData = function LabTestData() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "col-md-12 container-960 row book-lab-test--data-container web-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--data-representation-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTint"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "book-lab-test--data-representation-text"
  }, "Home Sample Collection")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--data-representation-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFlask"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "book-lab-test--data-representation-text"
  }, "Certified Labs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "book-lab-test--data-representation-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "book-lab-test--data-representation-text"
  }, "Digital Reports")));
};

var BookALabTest =
/*#__PURE__*/
function (_Component) {
  _inherits(BookALabTest, _Component);

  function BookALabTest() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BookALabTest);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BookALabTest)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSettings", function () {
      var width = _this.props.width;

      if (width < 992) {
        return {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true
        };
      }

      return {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_6__["default"], null),
        prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_5__["default"], null)
      };
    });

    return _this;
  }

  _createClass(BookALabTest, [{
    key: "render",
    value: function render() {
      var settings = this.getSettings();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "book-lab-test--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center book-lab-test--heading web-only"
      }, "Book a Lab Test"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestData, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "book-lab-test--categories"
      }, "Popular Lab Package"), this.props.width && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, null))))));
    }
  }]);

  return BookALabTest;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_4__["default"])(BookALabTest));

/***/ }),

/***/ "./src/components/bodycomponents/CallToOrder.js":
/*!******************************************************!*\
  !*** ./src/components/bodycomponents/CallToOrder.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint react/prefer-stateless-function: 0 */




var CategoriesMobile =
/*#__PURE__*/
function (_Component) {
  _inherits(CategoriesMobile, _Component);

  function CategoriesMobile() {
    _classCallCheck(this, CategoriesMobile);

    return _possibleConstructorReturn(this, _getPrototypeOf(CategoriesMobile).apply(this, arguments));
  }

  _createClass(CategoriesMobile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "call-to-order--container mobile-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "call-to-order--content d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "call-to-order--heading"
      }, "Call to Order"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "call-to-order--number"
      }, "1860  1234  1234")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "call-to-order--phone-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPhone"],
        className: "call-to-order--call-icon"
      })))));
    }
  }]);

  return CategoriesMobile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/CategoriesMobile.js":
/*!***********************************************************!*\
  !*** ./src/components/bodycomponents/CategoriesMobile.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesMobile; });
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

/* eslint react/prefer-stateless-function: 0 */


var CategoryMarkup = function CategoryMarkup() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "mobile-categories--data-container d-flex justify-content-around"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobile-categories--list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: "26",
    src: "../../../static/Doctor_Consultation.png",
    alt: "Category"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medical Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobile-categories--list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: "26",
    src: "../../../static/Doctor_Consultation.png",
    alt: "Category"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Health Products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobile-categories--list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: "26",
    src: "../../../static/Doctor_Consultation.png",
    alt: "Category"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Doctor Consultation")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "mobile-categories--list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    height: "26",
    src: "../../../static/Doctor_Consultation.png",
    alt: "Category"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lab Tests")));
};

var CategoriesMobile =
/*#__PURE__*/
function (_Component) {
  _inherits(CategoriesMobile, _Component);

  function CategoriesMobile() {
    _classCallCheck(this, CategoriesMobile);

    return _possibleConstructorReturn(this, _getPrototypeOf(CategoriesMobile).apply(this, arguments));
  }

  _createClass(CategoriesMobile, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-categories--container mobile-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CategoryMarkup, null))));
    }
  }]);

  return CategoriesMobile;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/CitiesWeServe.js":
/*!********************************************************!*\
  !*** ./src/components/bodycomponents/CitiesWeServe.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_HomePageServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/HomePageServices */ "./src/services/HomePageServices.js");
/* harmony import */ var _common_AsyncHelperHOC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/AsyncHelperHOC */ "./src/components/common/AsyncHelperHOC.js");
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Button */ "./src/components/common/Button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/destructuring-assignment */







var CitiesWeServe =
/*#__PURE__*/
function (_Component) {
  _inherits(CitiesWeServe, _Component);

  function CitiesWeServe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CitiesWeServe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CitiesWeServe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      cities: [],
      pincodeFormField: '',
      pincodeCheckResults: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateField", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, _defineProperty({}, name, value));
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setCities", function (cities) {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          cities: cities
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderCities", function () {
      var isLoading = _this.props.isLoading;

      if (isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "li--loading"
        });
      }

      var cities = _this.state.cities;
      return cities.map(function (city) {
        var listClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('cities-we-serve--city');
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: listClasses,
          key: city
        }, city);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePincodeCheck", function () {
      Object(_services_HomePageServices__WEBPACK_IMPORTED_MODULE_3__["isPincodeIsDeliverable"])().then(function (data) {
        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            pincodeCheckResults: data
          });
        });
      }).catch(function (e) {
        _this.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            pincodeCheckResults: e
          });
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderContent", function () {
      var errors = _this.props.errors;

      if (errors) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "d-flex justify-content-center align-items-center"
        }, "Some error occured. Please retry.");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-center row align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "cities-we-serve--city-wrapper mr-auto d-flex justify-content-between col-md-9"
      }, _this.renderCities(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "cities-we-serve--more-cities"
      }, "+\xA0 100 CITIES")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-3 d-flex justify-content-end cities-we-serve--right"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "cities-we-serve--check-heading"
      }, "Check if we serve in your city"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "cities-we-serve--search",
        type: "text",
        placeholder: "Enter Pincode",
        maxLength: "6",
        name: "pincodeFormField",
        value: _this.state.pincodeFormField,
        onChange: _this.updateField
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "button-primary cities-we-serve--search-button",
        text: "CHECK",
        disabled: !_this.state.pincodeFormField.length,
        onClick: _this.handlePincodeCheck
      })))));
    });

    return _this;
  }

  _createClass(CitiesWeServe, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          setIsLoading = _this$props.setIsLoading,
          setError = _this$props.setError;
      setIsLoading(true);
      Object(_services_HomePageServices__WEBPACK_IMPORTED_MODULE_3__["getAllCities"])().then(function (cities) {
        _this2.setCities(cities);

        setIsLoading(false);
      }).catch(function (errors) {
        setError(errors);
        setIsLoading(false);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "cities-we-serve--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 cities-we-serve--content-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "cities-we-serve--heading"
      }, "Cities We Serve"), this.renderContent()))));
    }
  }]);

  return CitiesWeServe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

CitiesWeServe.propTypes = {
  // TODO: shape of error object is unclear at this point. Will revisit in future.
  // eslint-disable-next-line react/forbid-prop-types
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  setError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  setIsLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
};
CitiesWeServe.defaultProps = {
  errors: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_AsyncHelperHOC__WEBPACK_IMPORTED_MODULE_4__["default"])(CitiesWeServe));

/***/ }),

/***/ "./src/components/bodycomponents/DoctorConsultation.js":
/*!*************************************************************!*\
  !*** ./src/components/bodycomponents/DoctorConsultation.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShopHealthProducts; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Button */ "./src/components/common/Button.js");
/* harmony import */ var _utils_NavUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/NavUtils */ "./src/utils/NavUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint react/prefer-stateless-function: 0 */






var HealthProductsData = function HealthProductsData() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "col-md-12 container-720 row doc-consultation--data-container web-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "5 Lakh+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Patients Consulted")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "1000+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Medlife Doctors")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "30+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Specialities")));
};

var handleBookBySpeciality = function handleBookBySpeciality() {
  Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_4__["navigate"])('https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true');
};

var handleBookBySymptoms = function handleBookBySymptoms() {
  Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_4__["navigate"])('https://m.medlife.com/#/root/educativeConsultationBanner?paidEConsultation=true');
};

var ImageLegend = function ImageLegend() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doc-consultation--image-legend-wrpr d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doc-consultation--legend-icon"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUserMd"]
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "doc-consultation--main-wrpr"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "doc-consultation--legend-heading"
  }, "Doctor Consultation at your place and your time"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "doc-consultation--legend-desc"
  }, "Get 25 % off on 1st consultation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "web-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "button-transparent doc-consultation--legend-button",
    text: "Book By Speciality",
    onClick: handleBookBySpeciality
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "button-transparent doc-consultation--legend-button",
    text: "Book By Symptoms",
    onClick: handleBookBySymptoms
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobile-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "button-transparent doc-consultation--legend-button",
    text: "Book By Speciality",
    onClick: handleBookBySpeciality
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "button-transparent doc-consultation--legend-button",
    text: "Book By Symptoms",
    onClick: handleBookBySymptoms
  })));
};

var ShopHealthProducts =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopHealthProducts, _Component);

  function ShopHealthProducts() {
    _classCallCheck(this, ShopHealthProducts);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShopHealthProducts).apply(this, arguments));
  }

  _createClass(ShopHealthProducts, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "doc-consultation--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center doc-consultation--heading"
      }, "Doctor Consultation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HealthProductsData, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageLegend, null)));
    }
  }]);

  return ShopHealthProducts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/HealthArticles.js":
/*!*********************************************************!*\
  !*** ./src/components/bodycomponents/HealthArticles.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_AsyncHelperHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/AsyncHelperHOC */ "./src/components/common/AsyncHelperHOC.js");
/* harmony import */ var _services_HomePageServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/HomePageServices */ "./src/services/HomePageServices.js");
/* harmony import */ var _utils_DateUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/DateUtils */ "./src/utils/DateUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable operator-linebreak */

/* eslint-disable react/jsx-wrap-multilines */

/* eslint-disable react/destructuring-assignment */

/* eslint react/prefer-stateless-function: 0 */




 // eslint-disable-next-line react/prop-types

var HealthArticleItem = function HealthArticleItem(_ref) {
  var blog = _ref.blog;

  var _blog$_embedded = blog._embedded,
      _embedded = _blog$_embedded === void 0 ? {} : _blog$_embedded;

  var featuredmedia = _embedded['wp:featuredmedia'] || [];
  var imgSource = featuredmedia.length ? featuredmedia[0].source_url : null;
  var parsedDate = Object(_utils_DateUtils__WEBPACK_IMPORTED_MODULE_4__["getParsedGMTString"])(blog.date_gmt);
  var monthIndex = parsedDate.getMonth();
  var month = Object(_utils_DateUtils__WEBPACK_IMPORTED_MODULE_4__["getMonthName"])(monthIndex);
  var date = "".concat(parsedDate.getDate(), "th ").concat(month, " ").concat(parsedDate.getFullYear());
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "health-articles--items col-md-3"
  }, imgSource && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "health-articles--items-image",
    alt: "Recent",
    src: imgSource
  }), !imgSource && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: '210px',
      backgroundColor: '#d8d8d8'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "health-articles--items-desc"
  }, blog.title.rendered), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "health-articles--items-heading"
  }, date));
};

var HealthArticles =
/*#__PURE__*/
function (_Component) {
  _inherits(HealthArticles, _Component);

  function HealthArticles() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HealthArticles);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HealthArticles)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      blogPosts: []
    });

    return _this;
  }

  _createClass(HealthArticles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          setIsLoading = _this$props.setIsLoading,
          setError = _this$props.setError;
      setIsLoading(true);
      Object(_services_HomePageServices__WEBPACK_IMPORTED_MODULE_3__["getBlogPosts"])().then(function (blogPosts) {
        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            blogPosts: blogPosts
          });
        }, function () {
          return setIsLoading(false);
        });
      }).catch(function (e) {
        setError(e);
        setIsLoading(false);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isLoading = _this$props2.isLoading,
          errors = _this$props2.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "health-articles--container web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center health-articles--heading"
      }, "Health Articles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 row"
      }, isLoading && 'Loading health articles...', errors && 'Some error occured. Please refresh', !isLoading && !errors && !!this.state.blogPosts.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.blogPosts.map(function (t) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HealthArticleItem, {
          blog: t,
          key: t.id
        });
      }))))));
    }
  }]);

  return HealthArticles;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

HealthArticles.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setIsLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setError: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_AsyncHelperHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(HealthArticles));

/***/ }),

/***/ "./src/components/bodycomponents/MedicalCertificates.js":
/*!**************************************************************!*\
  !*** ./src/components/bodycomponents/MedicalCertificates.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* eslint react/prefer-stateless-function: 0 */



var MedicalCertificateItem = function MedicalCertificateItem(_ref) {
  var imgPath = _ref.imgPath;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "medical-certificates--category-images"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Category",
    src: imgPath,
    className: "medical-certificates--category-image"
  }));
};

MedicalCertificateItem.propTypes = {
  imgPath: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

var MedicalCertificates = function MedicalCertificates() {
  var certificateImagePaths = ['../../../static/certificate-1.png', '../../../static/certificate-2.png', '../../../static/certificate-3.png', '../../../static/certificate-4.png', '../../../static/certificate-5.png'];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "medical-certificates--container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "medical-certificates--heading"
  }, "Medlife Certificates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "medical-certificates--images-wrapper d-flex justify-content-center"
  }, certificateImagePaths.map(function (imgPath) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MedicalCertificateItem, {
      key: imgPath,
      imgPath: imgPath
    });
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MedicalCertificates);

/***/ }),

/***/ "./src/components/bodycomponents/MedlifeEssentialCarouselItem.js":
/*!***********************************************************************!*\
  !*** ./src/components/bodycomponents/MedlifeEssentialCarouselItem.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Button */ "./src/components/common/Button.js");
/* eslint react/prefer-stateless-function: 0 */



var MedlifeEssentialCarouselItem = function MedlifeEssentialCarouselItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "medlife-essentials--items"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "medlife-essentials--items-heading web-only"
  }, "Baconil Medicine Circumin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "medlife-essentials--items-desc web-only"
  }, "Anti cancer and beauty bliss"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "medlife-essentials--image-desc-wrapper d-flex justify-content-start align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "medlife-essentials--items-image",
    alt: "Recent",
    src: "../../../static/recentcarouselimages/first.jpg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "web-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "medlife-essentials--item-highlights"
  }, "Amplify Beauty"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "medlife-essentials--item-highlights"
  }, "Good for weight loss"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "medlife-essentials--item-highlights"
  }, "Good for Liver & Digestive problems"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "medlife-essentials--item-highlights"
  }, "Improve Joint Functionality"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "medlife-essentials--item-highlights"
  }, "Improve Eyesight")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobile-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "medlife-essentials--items-heading"
  }, "Baconil Medicine Circumin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "medlife-essentials--items-desc"
  }, "Anti cancer and beauty bliss")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "button-transparent medlife-essentials--button-know-more",
    text: "Know More"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MedlifeEssentialCarouselItem);

/***/ }),

/***/ "./src/components/bodycomponents/MedlifeEssentials.js":
/*!************************************************************!*\
  !*** ./src/components/bodycomponents/MedlifeEssentials.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ScreenSizeHOC */ "./src/components/common/ScreenSizeHOC.js");
/* harmony import */ var _carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/Prevarrow */ "./src/components/bodycomponents/carousel/Prevarrow.js");
/* harmony import */ var _carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/Nextarrow */ "./src/components/bodycomponents/carousel/Nextarrow.js");
/* harmony import */ var _MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MedlifeEssentialCarouselItem */ "./src/components/bodycomponents/MedlifeEssentialCarouselItem.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/prefer-stateless-function: 0 */







var MedlifeEssentials =
/*#__PURE__*/
function (_Component) {
  _inherits(MedlifeEssentials, _Component);

  function MedlifeEssentials() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MedlifeEssentials);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MedlifeEssentials)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSettings", function () {
      var width = _this.props.width;

      if (width < 992) {
        return {
          infinite: true,
          slidesToShow: 1,
          variableWidth: true
        };
      }

      return {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      };
    });

    return _this;
  }

  _createClass(MedlifeEssentials, [{
    key: "render",
    value: function render() {
      var settings = this.getSettings();
      var width = this.props.width;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "medlife-essentials--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "medlife-essentials--sub-heading-left"
      }, "Medlife Essentials"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "medlife-essentials--view-all web-only",
        href: "./viewallproducts"
      }, "VIEW ALL")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "medlife-essentials--short-desc web-only"
      }, "Herbal medication made up of completely natural ingredients. Clinically tested and approved by regulatory authorities."), width && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MedlifeEssentialCarouselItem__WEBPACK_IMPORTED_MODULE_5__["default"], null))))));
    }
  }]);

  return MedlifeEssentials;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(MedlifeEssentials));

/***/ }),

/***/ "./src/components/bodycomponents/MedlifeRecipe.js":
/*!********************************************************!*\
  !*** ./src/components/bodycomponents/MedlifeRecipe.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MedlifeRecipe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/prefer-stateless-function: 0 */



var orderingSteps = [{
  label: 'Upload valid Prescription'
}, {
  label: 'Receive a confirmation call'
}, {
  label: 'Delivery at your door step'
}];

var MedlifeRecipe =
/*#__PURE__*/
function (_Component) {
  _inherits(MedlifeRecipe, _Component);

  function MedlifeRecipe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MedlifeRecipe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MedlifeRecipe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderOrderingSteps", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "medlife-recipe--steps"
      }, orderingSteps.map(function (orderingStep, index) {
        var stepsIndex = index + 1;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "d-flex",
          key: stepsIndex
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, stepsIndex), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, orderingStep.label));
      }));
    });

    return _this;
  }

  _createClass(MedlifeRecipe, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "medlife-recipe--container web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "col-md-12 d-flex justify-content-center medlife-recipe--heading"
      }, "How it Works?", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faChevronDown"],
        className: "medlife-recipe--arrow-down"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "medlife-recipe--sub-heading-left"
      }, "How to order medicines on Medlife? It\u2019s Simple."), this.renderOrderingSteps(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "medlife-recipe--sub-heading-left"
      }, "Don\u2019t have prescription? Don\u2019t worry!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Simply search & add the medicines OR get consultation from Medlife doctor")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-6 d-flex justify-content-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        width: "456",
        height: "224",
        src: "https://www.youtube.com/embed/uRCZEK24kO8",
        frameBorder: 0,
        title: "medlife-video",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowFullscreen: ""
      })))))));
    }
  }]);

  return MedlifeRecipe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/MobileFooter.js":
/*!*******************************************************!*\
  !*** ./src/components/bodycomponents/MobileFooter.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/prefer-stateless-function: 0 */



var sellingPoints = [{
  label: 'Genuine Medicines',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAward"]
}, {
  label: 'Timely Delivery',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTruck"]
}, {
  label: 'Easy Returns & Refunds',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDollarSign"]
}];

var MobileFooter =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileFooter, _Component);

  function MobileFooter() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MobileFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MobileFooter)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSellingPoints", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "selling-point--left d-flex justify-content-between  align-items-center"
      }, sellingPoints.map(function (sellingPoint) {
        var sellingPointLabel = sellingPoint.label;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "selling-point-points",
          key: sellingPointLabel
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
          icon: sellingPoint.icon
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, sellingPointLabel));
      }));
    });

    return _this;
  }

  _createClass(MobileFooter, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-footer--container mobile-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, this.renderSellingPoints())));
    }
  }]);

  return MobileFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/OrderMedicines.js":
/*!*********************************************************!*\
  !*** ./src/components/bodycomponents/OrderMedicines.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderMedicines; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Button */ "./src/components/common/Button.js");
/* harmony import */ var _utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/NavUtils */ "./src/utils/NavUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/prefer-stateless-function: 0 */




var OrderMedicines =
/*#__PURE__*/
function (_Component) {
  _inherits(OrderMedicines, _Component);

  function OrderMedicines() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OrderMedicines);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OrderMedicines)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubscribe", function () {
      Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__["navigate"])('https://m.medlife.com/#/root/home/subscription/info?flow=subscription');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleUploadPrescription", function () {
      Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__["navigate"])('https://m.medlife.com/');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNoRx", function () {
      Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__["navigate"])('https://m.medlife.com/#/root/norxoptions');
    });

    return _this;
  }

  _createClass(OrderMedicines, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "other-medicines--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center other-medicines--heading"
      }, "Order Medicines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "col-md-12 d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "other-medicines--subscribe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Need Medicine on regular basis?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-transparent",
        text: "Subscribe Now",
        onClick: this.handleSubscribe
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "other-medicines--prescription"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Have a Prescription?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-primary",
        text: "Upload Prescription",
        onClick: this.handleUploadPrescription
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "other-medicines--upload"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Don\u2019t have a Prescription?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-transparent",
        text: "Get Started",
        onClick: this.handleNoRx
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mobile-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "other-medicines--prescription"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-primary other-medicines--prescription-buttons-mobile",
        text: "Upload Prescription",
        onClick: this.handleSubscribe
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "other-medicines--prescription"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-transparent other-medicines--prescription-buttons-mobile",
        text: "Don't have Prescription",
        onClick: this.handleSubscribe
      })))));
    }
  }]);

  return OrderMedicines;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/OrderMedicinesContainer.js":
/*!******************************************************************!*\
  !*** ./src/components/bodycomponents/OrderMedicinesContainer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderMedicines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderMedicines */ "./src/components/bodycomponents/OrderMedicines.js");



var mapState = function mapState(state) {
  return {
    features: state.feature_reducer.data.features
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapState)(_OrderMedicines__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./src/components/bodycomponents/Orderhistory.js":
/*!*******************************************************!*\
  !*** ./src/components/bodycomponents/Orderhistory.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Orderhistory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/prefer-stateless-function: 0 */


var CompletedOrders = function CompletedOrders() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container row align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "order-history--completed"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "order-history--details-in-order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Reorder Medicine - OR3247AJ-002A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your medicines Lulifin, Actracid + 2 more about to get over soon\x03to avoid any gaps in your  plan reorder now")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button-transparent button-whiten",
    type: "button"
  }, "REORDER"))));
};

var SubscribeNow = function SubscribeNow() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "d-flex justify-content-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container row align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "order-history--completed"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "order-history--details-in-order"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Subscribe To Save More"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Ordering medicines on a regular basis? Subscribe now to avail great offers and hassle free delivery. Pause your subscription anytime.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button-transparent button-whiten",
    type: "button"
  }, "CREATE A SUBSCRIPTION"))));
};

var Orderhistory =
/*#__PURE__*/
function (_Component) {
  _inherits(Orderhistory, _Component);

  function Orderhistory() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Orderhistory);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Orderhistory)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showAllOngoingOrders: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openAllOngoingOrders", function () {
      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          showAllOngoingOrders: true
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderOnGoingOrders", function () {
      var showAllOngoingOrders = _this.state.showAllOngoingOrders;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container row align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-history--in-progress"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-history--details-in-order"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Your Order - OR3247AJ-002A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Out for delivery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Estimated Delivery    8 am \u2013 10 am, THU, Oct 12th"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "./trackorder"
      }, "Track Order")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button-transparent button-whiten",
        type: "button"
      }, "PAY \u20B9299")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "order-history--ongoing-more-tab",
        style: {
          display: showAllOngoingOrders ? 'none' : 'block'
        },
        onClick: _this.openAllOngoingOrders
      }, "2 MORE ACTIVE ORDERS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          display: showAllOngoingOrders ? 'block' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container row align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-history--in-progress"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-history--details-in-order"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Your Order - OR3247AJ-002A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Out for delivery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Estimated Delivery    8 am \u2013 10 am, THU, Oct 12th"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "./trackorder"
      }, "Track Order")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button-transparent button-whiten",
        type: "button"
      }, "PAY \u20B9299")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        style: {
          display: showAllOngoingOrders ? 'block' : 'none'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container row align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-history--in-progress"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-history--details-in-order"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Your Order - OR3247AJ-002A"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Out for delivery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Estimated Delivery 8 am \u2013 10 am, THU, Oct 12th"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "./trackorder"
      }, "Track Order")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button-transparent button-whiten",
        type: "button"
      }, "PAY \u20B9299")))));
    });

    return _this;
  }

  _createClass(Orderhistory, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "order-history--container web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "order-history--orders"
      }, this.renderOnGoingOrders(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CompletedOrders, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubscribeNow, null)));
    }
  }]);

  return Orderhistory;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/PartnerWithUs.js":
/*!********************************************************!*\
  !*** ./src/components/bodycomponents/PartnerWithUs.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PartnerWithUs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Button */ "./src/components/common/Button.js");
/* harmony import */ var _utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/NavUtils */ "./src/utils/NavUtils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/prefer-stateless-function: 0 */




var PartnerWithUs =
/*#__PURE__*/
function (_Component) {
  _inherits(PartnerWithUs, _Component);

  function PartnerWithUs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PartnerWithUs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PartnerWithUs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleForDoctors", function () {
      Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__["navigate"])('https://www.medlife.com/fordoctors');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleForAffiliates", function () {
      Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__["navigate"])('https://www.medlife.com/affiliate');
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleForFranchise", function () {
      Object(_utils_NavUtils__WEBPACK_IMPORTED_MODULE_2__["navigate"])('https://www.medlife.com/affiliate');
    });

    return _this;
  }

  _createClass(PartnerWithUs, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "partner-with-us--container web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center partner-with-us--heading"
      }, "Partner With Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "col-md-12 d-flex justify-content-center partner-with-us--sub-heading"
      }, "Partner with us and grow with us in health and wealth!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "col-md-12 container-720 d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "partner-with-us--subscribe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-transparent",
        text: "For Doctors",
        onClick: this.handleForDoctors
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "partner-with-us--prescription"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-transparent",
        text: "For Affiliates",
        onClick: this.handleForAffiliates
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "partner-with-us--upload"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "button-transparent",
        text: "For Franchise",
        onClick: this.handleForFranchise
      }))))));
    }
  }]);

  return PartnerWithUs;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/Recentlyviewed.js":
/*!*********************************************************!*\
  !*** ./src/components/bodycomponents/Recentlyviewed.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Recentlyviewed; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carousel/Prevarrow */ "./src/components/bodycomponents/carousel/Prevarrow.js");
/* harmony import */ var _carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/Nextarrow */ "./src/components/bodycomponents/carousel/Nextarrow.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* eslint react/prefer-stateless-function: 0 */





var RecentlyViewedCarouselItem = function RecentlyViewedCarouselItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recently-viewed--items"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "recently-viewed--items-image",
    alt: "Recent",
    src: "../../../static/recentcarouselimages/first.jpg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "recently-viewed--items-heading"
  }, "Baconil Medicine Circumin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "recently-viewed--items-desc"
  }, "Anti cancer and beauty bliss"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recently-viewed--prices-discount d-flex justify-content-between align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-start align-items-center"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "recently-viewed--discount-price"
  }, "\u20B9550"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "recently-viewed--mrp"
  }, "\u20B91000")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "recently-viewed--discount-percent"
  }, "45% off")));
};

var Recentlyviewed =
/*#__PURE__*/
function (_Component) {
  _inherits(Recentlyviewed, _Component);

  function Recentlyviewed() {
    _classCallCheck(this, Recentlyviewed);

    return _possibleConstructorReturn(this, _getPrototypeOf(Recentlyviewed).apply(this, arguments));
  }

  _createClass(Recentlyviewed, [{
    key: "render",
    value: function render() {
      var settings = {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_3__["default"], null),
        prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_2__["default"], null)
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "recently-viewed--container web-only"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center recently-viewed--title-carousel-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center recently-viewed--heading"
      }, "Recently Viewed"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentlyViewedCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentlyViewedCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentlyViewedCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentlyViewedCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentlyViewedCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentlyViewedCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RecentlyViewedCarouselItem, null))))));
    }
  }]);

  return Recentlyviewed;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/Sellingpointsstrip.js":
/*!*************************************************************!*\
  !*** ./src/components/bodycomponents/Sellingpointsstrip.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sellingpointsstrip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint react/prefer-stateless-function: 0 */



var sellingPoints = [{
  label: 'Genuine Medicines',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faAward"]
}, {
  label: 'Timely Delivery',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTruck"]
}, {
  label: 'Easy Returns & Refunds',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDollarSign"]
}, {
  label: 'Secure Payments',
  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faShieldAlt"]
}];

var Sellingpointsstrip =
/*#__PURE__*/
function (_Component) {
  _inherits(Sellingpointsstrip, _Component);

  function Sellingpointsstrip() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sellingpointsstrip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sellingpointsstrip)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSellingPoints", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "col-md-8 selling-point--left web-only"
      }, sellingPoints.map(function (sellingPoint) {
        var sellingPointLabel = sellingPoint.label;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "col-md-3",
          key: sellingPointLabel
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
          icon: sellingPoint.icon
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, sellingPointLabel));
      }));
    });

    return _this;
  }

  _createClass(Sellingpointsstrip, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "selling-point--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, this.renderSellingPoints(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "col-md-4 selling-point--stickers"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "selling-point--stickers-express"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "2"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mobile-only display-inline"
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        className: "web-only"
      }), "HRS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "EXPRESS", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        className: "web-only"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mobile-only display-inline"
      }, "\xA0"), "DELIVERY", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        className: "web-only"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mobile-only display-inline"
      }, "\xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "T&C Apply"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "selling-point--stickers-standard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "24-48"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        className: "web-only"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mobile-only display-inline"
      }, "\xA0"), "HRS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "STANDARD", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        className: "web-only"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mobile-only display-inline"
      }, "\xA0"), "DELIVERY"))))));
    }
  }]);

  return Sellingpointsstrip;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/components/bodycomponents/ShopHealthProducts.js":
/*!*************************************************************!*\
  !*** ./src/components/bodycomponents/ShopHealthProducts.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ScreenSizeHOC */ "./src/components/common/ScreenSizeHOC.js");
/* harmony import */ var _carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/Prevarrow */ "./src/components/bodycomponents/carousel/Prevarrow.js");
/* harmony import */ var _carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/Nextarrow */ "./src/components/bodycomponents/carousel/Nextarrow.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable operator-linebreak */

/* eslint-disable react/jsx-wrap-multilines */

/* eslint-disable react/destructuring-assignment */

/* eslint react/prefer-stateless-function: 0 */






var ShopByCategoryCarouselItem = function ShopByCategoryCarouselItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shop-health-products--category-heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Category",
    src: "../../../static/weightmanagement.jpg",
    className: "shop-health-products--category-images"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "shop-health-products--category-title"
  }, "Weight Management"));
};

var ShopByConcernCarouselItem = function ShopByConcernCarouselItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shop-health-products--category-heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "shop-health-products--image-container col-md-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Concern",
    src: "../../../static/heart.png",
    className: "shop-health-products--concern-images"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "shop-health-products--category-title"
  }, "Weight Management"));
};

var HealthProductsData = function HealthProductsData() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "col-md-12 container-720 row shop-health-products--data-container web-only"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "1 M+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Happy Customers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "12000+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Products")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "100+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Categories")));
};

var ShopHealthProducts =
/*#__PURE__*/
function (_Component) {
  _inherits(ShopHealthProducts, _Component);

  function ShopHealthProducts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ShopHealthProducts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ShopHealthProducts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSettings", function () {
      var width = _this.props.width;

      if (width < 992) {
        return {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true
        };
      }

      return {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: false,
        nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      };
    });

    return _this;
  }

  _createClass(ShopHealthProducts, [{
    key: "render",
    value: function render() {
      var settings = this.getSettings();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "shop-health-products--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center shop-health-products--heading web-only"
      }, "Shop Health Products"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HealthProductsData, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 shop-health-products--categories-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "shop-health-products--categories"
      }, "Shop by Category"), this.props.width && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByCategoryCarouselItem, null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 shop-health-products--concern-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "shop-health-products--categories"
      }, "Shop by Concern"), this.props.width && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShopByConcernCarouselItem, null))))));
    }
  }]);

  return ShopHealthProducts;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(ShopHealthProducts));

/***/ }),

/***/ "./src/components/bodycomponents/Testimonials.js":
/*!*******************************************************!*\
  !*** ./src/components/bodycomponents/Testimonials.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_AsyncHelperHOC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/AsyncHelperHOC */ "./src/components/common/AsyncHelperHOC.js");
/* harmony import */ var _services_HomePageServices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/HomePageServices */ "./src/services/HomePageServices.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable operator-linebreak */

/* eslint-disable no-underscore-dangle */

/* eslint-disable react/destructuring-assignment */

/* eslint-disable react/jsx-wrap-multilines */

/* eslint react/prefer-stateless-function: 0 */







var LabTestCarouselItem = function LabTestCarouselItem(_ref) {
  var testimonial = _ref.testimonial;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "testimonials--items col-md-4"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "testimonials--items-details-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    className: "testimonial--quote",
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faQuoteLeft"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "testimonial-content"
  }, testimonial.testimonial), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "testimonial-testimonee",
    alt: "Testimonee",
    src: testimonial.thumbnail_uri
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: "testimonial-testimonee-name"
  }, "James Franko")));
};

LabTestCarouselItem.propTypes = {
  testimonial: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    thumbnail_uri: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    testimonial: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
};

var Testimonials =
/*#__PURE__*/
function (_Component) {
  _inherits(Testimonials, _Component);

  function Testimonials() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Testimonials);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Testimonials)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      testimonials: []
    });

    return _this;
  }

  _createClass(Testimonials, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          setIsLoading = _this$props.setIsLoading,
          setError = _this$props.setError;
      setIsLoading(true);
      Object(_services_HomePageServices__WEBPACK_IMPORTED_MODULE_5__["getTestimonials"])().then(function (testimonials) {
        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            testimonials: testimonials
          });
        }, function () {
          return setIsLoading(false);
        });
      }).catch(function (e) {
        setError(e);
        setIsLoading(false);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isLoading = _this$props2.isLoading,
          errors = _this$props2.errors;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "testimonials--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "col-md-12 d-flex justify-content-center testimonials--heading"
      }, "Why Customers Love Medlife"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 row testimonials--cards"
      }, isLoading && 'Loading testimonials...', errors && 'Some error occured. Please refresh', !isLoading && !errors && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.testimonials.map(function (t) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabTestCarouselItem, {
          testimonial: t,
          key: t._id
        });
      }))))));
    }
  }]);

  return Testimonials;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Testimonials.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  setIsLoading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  setError: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_common_AsyncHelperHOC__WEBPACK_IMPORTED_MODULE_4__["default"])(Testimonials));

/***/ }),

/***/ "./src/components/bodycomponents/Topbrands.js":
/*!****************************************************!*\
  !*** ./src/components/bodycomponents/Topbrands.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ScreenSizeHOC */ "./src/components/common/ScreenSizeHOC.js");
/* harmony import */ var _carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carousel/Prevarrow */ "./src/components/bodycomponents/carousel/Prevarrow.js");
/* harmony import */ var _carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/Nextarrow */ "./src/components/bodycomponents/carousel/Nextarrow.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable operator-linebreak */

/* eslint-disable react/jsx-wrap-multilines */

/* eslint-disable react/destructuring-assignment */

/* eslint react/prefer-stateless-function: 0 */






var TopBrandsCarouselItem = function TopBrandsCarouselItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "top-brands--category-heading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "Category",
    src: "../../../static/topbrandlogo.jpg",
    className: "top-brands--category-images"
  }));
};

var Topbrands =
/*#__PURE__*/
function (_Component) {
  _inherits(Topbrands, _Component);

  function Topbrands() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Topbrands);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Topbrands)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSettings", function () {
      var width = _this.props.width;

      if (width < 992) {
        return {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          variableWidth: true
        };
      }

      return {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: false,
        nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Nextarrow__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_carousel_Prevarrow__WEBPACK_IMPORTED_MODULE_3__["default"], null)
      };
    });

    return _this;
  }

  _createClass(Topbrands, [{
    key: "render",
    value: function render() {
      var settings = this.getSettings();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "top-brands--container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row d-flex justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "top-brands--heading"
      }, "Top Brands"), this.props.width && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, settings, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TopBrandsCarouselItem, null))))));
    }
  }]);

  return Topbrands;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_ScreenSizeHOC__WEBPACK_IMPORTED_MODULE_2__["default"])(Topbrands));

/***/ }),

/***/ "./src/components/bodycomponents/carousel/Nextarrow.js":
/*!*************************************************************!*\
  !*** ./src/components/bodycomponents/carousel/Nextarrow.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Button */ "./src/components/common/Button.js");






var Nextarrow = function Nextarrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        style: style,
        className: className,
        onClick: onClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronRight"]
      }));
    }
  });
};

Nextarrow.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // eslint-disable-next-line react/forbid-prop-types
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Nextarrow.defaultProps = {
  className: '',
  onClick: null,
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Nextarrow);

/***/ }),

/***/ "./src/components/bodycomponents/carousel/Prevarrow.js":
/*!*************************************************************!*\
  !*** ./src/components/bodycomponents/carousel/Prevarrow.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Button */ "./src/components/common/Button.js");






var Prevarrow = function Prevarrow(props) {
  var className = props.className,
      style = props.style,
      onClick = props.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        style: style,
        className: className,
        onClick: onClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faChevronLeft"]
      }));
    }
  });
};

Prevarrow.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  // eslint-disable-next-line react/forbid-prop-types
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Prevarrow.defaultProps = {
  className: '',
  onClick: null,
  style: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Prevarrow);

/***/ }),

/***/ "./src/components/common/AsyncHelperHOC.js":
/*!*************************************************!*\
  !*** ./src/components/common/AsyncHelperHOC.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncHelperHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function AsyncHelperHOC(Component) {
  // TODO: change the name to something specific
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WrappedComponent, _React$Component);

      function WrappedComponent() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, WrappedComponent);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(WrappedComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          errors: null,
          isLoading: true
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setError", function (errors) {
          _this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              errors: errors
            });
          });
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setIsLoading", function (isLoading) {
          _this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              isLoading: isLoading
            });
          });
        });

        return _this;
      }

      _createClass(WrappedComponent, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, this.props, this.state, {
            setError: this.setError,
            setIsLoading: this.setIsLoading
          }));
        }
      }]);

      return WrappedComponent;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
}

/***/ }),

/***/ "./src/components/common/Button.js":
/*!*****************************************!*\
  !*** ./src/components/common/Button.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);




var Button = function Button(props) {
  var className = props.className,
      text = props.text,
      onClick = props.onClick,
      render = props.render,
      btnType = props.btnType,
      isLoading = props.isLoading,
      loadingText = props.loadingText,
      disabled = props.disabled;

  if (render && Object(underscore__WEBPACK_IMPORTED_MODULE_2__["isFunction"])(render)) {
    return render({
      className: className,
      onClick: onClick,
      isLoading: isLoading,
      disabled: disabled
    });
  }

  if (Object(underscore__WEBPACK_IMPORTED_MODULE_2__["isEmpty"])(text)) throw Error('Button must have text content');
  /* eslint-disable react/button-has-type */

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: btnType,
    className: className,
    onClick: onClick,
    disabled: disabled || isLoading
  }, isLoading ? loadingText || text : text);
};

Button.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  btnType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['button', 'submit', 'reset']),
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Button.defaultProps = {
  className: '',
  text: '',
  loadingText: '',
  onClick: null,
  render: null,
  btnType: 'button',
  isLoading: false,
  disabled: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/components/common/Dialog.js":
/*!*****************************************!*\
  !*** ./src/components/common/Dialog.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);



var Dialog = function Dialog(props) {
  var className = props.className,
      render = props.render;

  if (render && Object(underscore__WEBPACK_IMPORTED_MODULE_1__["isFunction"])(render)) {
    return render({
      className: className
    });
  }

  throw Error('Dialog must have render method with its content'); // if (isEmpty(text)) throw Error('Button must have text content');
};

Dialog.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  render: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
Dialog.defaultProps = {
  className: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Dialog);

/***/ }),

/***/ "./src/components/common/ScreenSizeHOC.js":
/*!************************************************!*\
  !*** ./src/components/common/ScreenSizeHOC.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScreenSizeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "underscore");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ScreenSizeHOC(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(WrappedScreenSizeComponent, _React$Component);

      function WrappedScreenSizeComponent(props) {
        var _this;

        _classCallCheck(this, WrappedScreenSizeComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(WrappedScreenSizeComponent).call(this, props));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateDimensions", function () {
          _this.setState(function (prevState) {
            return _objectSpread({}, prevState, {
              height: window.innerHeight,
              width: window.innerWidth
            });
          });
        });

        if (typeof window !== 'undefined') {
          _this.state = {
            height: window.innerHeight,
            width: window.innerWidth
          };
        } else {
          _this.state = {
            height: null,
            width: null
          };
        }

        _this.lazyUpdateDimensions = Object(underscore__WEBPACK_IMPORTED_MODULE_1__["debounce"])(_this.updateDimensions, 500);
        return _this;
      }

      _createClass(WrappedScreenSizeComponent, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener('resize', this.lazyUpdateDimensions);
          this.updateDimensions();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.lazyUpdateDimensions);
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, this.state);
        }
      }]);

      return WrappedScreenSizeComponent;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component)
  );
}

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

/***/ "./src/styles/build/app.css":
/*!**********************************!*\
  !*** ./src/styles/build/app.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/utils/DateUtils.js":
/*!********************************!*\
  !*** ./src/utils/DateUtils.js ***!
  \********************************/
/*! exports provided: getMonthName, getParsedGMTString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMonthName", function() { return getMonthName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParsedGMTString", function() { return getParsedGMTString; });
/* eslint-disable import/prefer-default-export */
var getMonthName = function getMonthName(monthIndex) {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return months[monthIndex];
};
var getParsedGMTString = function getParsedGMTString(gmtDateString) {
  return new Date(gmtDateString);
};

/***/ }),

/***/ "./src/utils/NavUtils.js":
/*!*******************************!*\
  !*** ./src/utils/NavUtils.js ***!
  \*******************************/
/*! exports provided: navigate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return navigate; });
/* eslint-disable import/prefer-default-export */
function navigate() {
  var uri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.href;
  window.location.href = uri;
}

/***/ }),

/***/ "./static/banner.png":
/*!***************************!*\
  !*** ./static/banner.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-8a1e33464a75d841d41adc9c1df4fc6e.png";

/***/ }),

/***/ "./static/banner_mobile.png":
/*!**********************************!*\
  !*** ./static/banner_mobile.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner_mobile-8a1e33464a75d841d41adc9c1df4fc6e.png";

/***/ }),

/***/ "./static/medlife_logo.svg":
/*!*********************************!*\
  !*** ./static/medlife_logo.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjE0IiBoZWlnaHQ9IjEwOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0yMS4yNzcgMTguMzZILjQyN1YuMjhoMjAuODV6Ii8+PHBhdGggaWQ9ImMiIGQ9Ik0uMDMuMDkyaDMwLjYwMnYzMS44OTRILjAzVi4wOTJ6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgZmlsbD0iI0ZGNzMwMCIgd2lkdGg9IjIxNCIgaGVpZ2h0PSIxMDgiIHJ4PSI0Ii8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDguODgzIDY5LjEyKSI+PG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2EiLz48L21hc2s+PHBhdGggZD0iTTIuMDE1IDcuNzMzbDEyLjE4IDkuNjc1YzEuODUxIDEuNDcxIDQuNTgyIDEuMjA4IDYuMS0uNTg3IDEuNTE4LTEuNzk1IDEuMjQ3LTQuNDQyLS42MDUtNS45MTRMNy41MSAxLjIzM0M1LjY2LS4yMzggMi45MjguMDI0IDEuNDEgMS44MTktLjEwOCAzLjYxNS4xNjMgNi4yNjIgMi4wMTUgNy43MzMiIGZpbGw9IiMxMzRGNzAiIG1hc2s9InVybCgjYikiLz48L2c+PHBhdGggZD0iTTcxLjc1IDU1LjA4SDU1LjM0NmMtMi4zNyAwLTQuMjkxIDEuOTM0LTQuMjkxIDQuMzJzMS45MjEgNC4zMiA0LjI5MSA0LjMySDcxLjc1YzIuMzcgMCA0LjI5Mi0xLjkzNCA0LjI5Mi00LjMycy0xLjkyMi00LjMyLTQuMjkyLTQuMzIiIGZpbGw9IiMxMzRGNzAiLz48cGF0aCBkPSJNMzcuNjMgNjYuOTQzbC0xMi4xOTcgOS42NzRjLTEuNzg5IDEuNDItMi4wNTIgMy45NzUtLjU4OSA1LjcxIDEuNDY0IDEuNzM0IDQuMSAxLjk4OSA1Ljg4OS41N2wxMi4xOTYtOS42NzVjMS43ODgtMS40MTggMi4wNTItMy45NzQuNTg5LTUuNzA5LTEuNDY0LTEuNzM0LTQuMS0xLjk5LTUuODg5LS41N200LjMxNC0yMC4wN0wyOC4zMSA1My43OGMtMiAxLjAxMy0yLjgxMSAzLjQ3OC0xLjgxMyA1LjUwNy45OTggMi4wMjkgMy40MjggMi44NTMgNS40MjcgMS44NGwxMy42MzItNi45MDdjMi0xLjAxMyAyLjgxMS0zLjQ3OCAxLjgxMy01LjUwNy0uOTk4LTIuMDI5LTMuNDI4LTIuODUzLTUuNDI3LTEuODRtOS4xMTQtNS44MzNjMCAzLjU3OSAyLjkxOCA2LjQ4IDYuNTE4IDYuNDggMy42IDAgNi41MTctMi45MDEgNi41MTctNi40OCAwLTMuNTgtMi45MTgtNi40OC02LjUxNy02LjQ4LTMuNiAwLTYuNTE4IDIuOS02LjUxOCA2LjQ4bTQ2LjcxLTE5LjQ0aC4wMDJ2LjAwMXoiIGZpbGw9IiNGRkYiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjYuNzU2IDE5LjQ0KSI+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZD0iTTIzLjIwNyAxMi40MDhIOC40MTVjLjM3Ni0yLjE1NiAxLjE5OS0zLjgxOCAyLjQ3LTQuOTkzIDEuMjkzLTEuMTk1IDMuMDg3LTEuNzk4IDUuNDAzLTEuNzk4IDEuMTc2IDAgMi4xOTkuMTgzIDMuMDY4LjU0Ni44NzQuMzY0IDEuNTk0Ljg1OCAyLjE2NiAxLjQ4NWE2LjAwOSA2LjAwOSAwIDAgMSAxLjI3MyAyLjE5M2MuMjY2LjgwNC40MDEgMS42Ni40MTIgMi41NjdtNi40MTMgNC41NDNjLjI1OC0uMDk3LjQ2OS0uMjY0LjYyLS40OTIuMTUzLS4yMjkuMjU0LS41MzMuMzEtLjkxMy4wNTUtLjM3OC4wODItLjg0Ni4wODItMS40MSAwLTIuMjI5LS4zNTktNC4yMTYtMS4wNzgtNS45Ni0uNzItMS43NC0xLjcyMi0zLjIxMy0zLjAxLTQuNDEzLTEuMjg3LTEuMi0yLjgyLTIuMTEyLTQuNTk0LTIuNzM1LTEuNzc1LS42MjQtMy43MTctLjkzNi01LjgyNC0uOTM2LTIuNDk5IDAtNC43NDUuNDAyLTYuNzM3IDEuMjA3LTEuOTkuODA0LTMuNjggMS44OTYtNS4wNjIgMy4yNzZBMTQuMTkgMTQuMTkgMCAwIDAgMS4xNCA5LjQzN0MuNCAxMS4yOTguMDMgMTMuMjg1LjAzIDE1LjM5NWMwIDIuNzA4LjQyMyA1LjA5NSAxLjI3MiA3LjE1OC44NDkgMi4wNiAyLjAxMyAzLjc5MyAzLjQ5NSA1LjE5MiAxLjQ4MSAxLjQgMy4yMjUgMi40NTcgNS4yMjcgMy4xNyAyLjAwMS43MTQgNC4xNjUgMS4wNzIgNi40OSAxLjA3MSAxLjE3MiAwIDIuMzgyLS4wOCAzLjYyOS0uMjRhMjAuMjA1IDIwLjIwNSAwIDAgMCAzLjY4NC0uODMgMTcuNDEgMTcuNDEgMCAwIDAgMy40NzUtMS41NjcgMTMuMTgyIDEzLjE4MiAwIDAgMCAzLjAwOC0yLjQzM2wuMDY2LS4wNzItMi4zOTgtMi43NzFhMS45NDEgMS45NDEgMCAwIDAtLjY1LS41MzYgMS45NjggMS45NjggMCAwIDAtLjg5NC0uMTkyYy0uNTE5IDAtMS4wNS4xNDYtMS41OTIuNDMzYTU3Ljc2IDU3Ljc2IDAgMCAxLTEuODQ1LjkyNyAxNi4yMyAxNi4yMyAwIDAgMS0yLjQ0Ny45MjJjLS45MjYuMjc2LTIuMDM0LjQxNi0zLjMyMy40MTYtMi42MTctLjAwMS00LjcwMi0uNzMxLTYuMjc4LTIuMTg5LTEuNTUxLTEuNDMyLTIuNDU4LTMuNjgzLTIuNzA4LTYuNzZoMjAuNDNjLjM3NiAwIC42OTEtLjA0Ni45NDgtLjE0MyIgZmlsbD0iI0ZGRiIgbWFzaz0idXJsKCNkKSIvPjwvZz48cGF0aCBkPSJNMTc3LjgxNCA2OC40NzZIMTYzLjAyYy4zNzYtMi4xNTYgMS4xOTktMy44MTggMi40Ny00Ljk5MyAxLjI5My0xLjE5NSAzLjA4Ny0xLjc5OCA1LjQwMy0xLjc5OCAxLjE3NiAwIDIuMi4xODMgMy4wNjkuNTQ2Ljg3My4zNjQgMS41OTMuODU4IDIuMTY1IDEuNDg1YTYuMDE2IDYuMDE2IDAgMCAxIDEuMjczIDIuMTkzYy4yNjYuODA0LjQwMiAxLjY2LjQxMyAyLjU2N202LjQxMiA0LjU0M2MuMjU4LS4wOTcuNDY5LS4yNjQuNjItLjQ5Mi4xNTMtLjIyOS4yNTQtLjUzMy4zMS0uOTEzLjA1NS0uMzc4LjA4Mi0uODQ2LjA4Mi0xLjQxIDAtMi4yMjktLjM1OS00LjIxNi0xLjA3OC01Ljk2LS43Mi0xLjc0LTEuNzIyLTMuMjEzLTMuMDEtNC40MTMtMS4yODctMS4yLTIuODItMi4xMTEtNC41OTQtMi43MzUtMS43NzUtLjYyNC0zLjcxNy0uOTM2LTUuODI0LS45MzYtMi40OTggMC00Ljc0NC40MDItNi43MzcgMS4yMDctMS45OS44MDQtMy42NzkgMS44OTYtNS4wNjIgMy4yNzZhMTQuMTg1IDE0LjE4NSAwIDAgMC0zLjE4NiA0Ljg2MmMtLjc0IDEuODYtMS4xMSAzLjg0OC0xLjExIDUuOTU4IDAgMi43MDguNDIzIDUuMDk1IDEuMjczIDcuMTU4Ljg0OCAyLjA2IDIuMDEyIDMuNzkzIDMuNDk0IDUuMTkyIDEuNDgxIDEuNCAzLjIyNSAyLjQ1NyA1LjIyOCAzLjE3IDIgLjcxNCA0LjE2NCAxLjA3MSA2LjQ4OSAxLjA3MSAxLjE3MiAwIDIuMzgyLS4wOCAzLjYyOS0uMjRhMjAuMjcgMjAuMjcgMCAwIDAgMy42ODQtLjgzIDE3LjQ0IDE3LjQ0IDAgMCAwIDMuNDc1LTEuNTY3IDEzLjE4MiAxMy4xODIgMCAwIDAgMy4wMDgtMi40MzNsLjA2Ny0uMDcyLTIuMzk5LTIuNzcxYTEuOTQzIDEuOTQzIDAgMCAwLS42NS0uNTM2IDEuOTc1IDEuOTc1IDAgMCAwLS44OTQtLjE5MmMtLjUxOSAwLTEuMDUuMTQ2LTEuNTkyLjQzMy0uNTI5LjI4LTEuMTQzLjU4OC0xLjg0NS45MjdhMTYuMjMgMTYuMjMgMCAwIDEtMi40NDcuOTIyYy0uOTI2LjI3Ni0yLjAzNC40MTUtMy4zMjMuNDE1LTIuNjE3IDAtNC43MDItLjczLTYuMjc4LTIuMTg4LTEuNTUxLTEuNDMyLTIuNDU4LTMuNjgzLTIuNzA4LTYuNzZoMjAuNDNjLjM3NiAwIC42OTItLjA0Ni45NDgtLjE0M00xMTkuNDMzIDE5LjQ0Yy0uMjY5IDAtLjUwNC4wMDgtLjcwNi4wMjItLjIyNi4wMTctLjQ0LjA2LS42NC4xMzJhMS42MDIgMS42MDIgMCAwIDAtLjU5NC4zODggMi44IDIuOCAwIDAgMC0uNDQuNjA5bC05LjI3MyAxNi42NmMtLjI1NS40NTktLjQ5Mi45MzYtLjcxNCAxLjQzNS0uMDYyLjEzOC0uMTE5LjI4MS0uMTguNDJsLS4xNjQtLjM4NmExNy4yNyAxNy4yNyAwIDAgMC0uNzA0LTEuNDI2TDk2LjY1NyAyMC41OWEyLjYyNiAyLjYyNiAwIDAgMC0uNDYtLjYxOCAxLjcxIDEuNzEgMCAwIDAtLjU5NS0uMzc4IDIuMzg1IDIuMzg1IDAgMCAwLS42NC0uMTMyIDkuOTg4IDkuOTg4IDAgMCAwLS43MDYtLjAyMmgtNC44OTR2MzEuMDk0aDcuMjEzdi0xOC44OGMwLS4xMjctLjAwMy0uMjYyLS4wMDYtLjM5Nmw3LjQ0MSAxNC4xNTRhMi45NCAyLjk0IDAgMCAwIDEuMDE4IDEuMDg2Yy40My4yNjguOTMzLjM5NyAxLjQ3LjM5NmguODAxYTIuNzQgMi43NCAwIDAgMCAxLjQ3LS4zOTZjLjQyLS4yNi43NjUtLjYzMiAxLjAxOC0xLjA4N2w3LjMzMi0xNC4xMWMtLjAwMi4xMi0uMDA1LjI0LS4wMDUuMzU0djE4Ljg3OWg3LjIxM1YxOS40NGgtNC44OTR6bTUzLjQyMyAyNS40OTJoLTUuODA1VjI0LjkzOGg1LjgwNWMxLjU0IDAgMi45MDcuMjM0IDQuMTA4LjY5IDEuMjA3LjQ1OCAyLjIxNiAxLjEwNyAzLjA0NyAxLjk1Mi44MzIuODQ2IDEuNDc2IDEuODggMS45MzUgMy4xMjEuNDU3IDEuMjM2LjY5IDIuNjQ0LjY5IDQuMjM0IDAgMS41OS0uMjMzIDMtLjY5IDQuMjM0LS40NTkgMS4yNDItMS4xMDMgMi4yNzYtMS45MzUgMy4xMjItLjgzMi44NDYtMS44NCAxLjQ5NC0zLjA0NyAxLjk1My0xLjIuNDU2LTIuNTY3LjY4OC00LjEwOC42ODhtMTUuODMzLTE2LjI1YTE0LjI3MiAxNC4yNzIgMCAwIDAtMy40OTYtNC45MWMtMS41MDItMS4zNjktMy4zMDYtMi40MzMtNS4zOTctMy4xOTMtMi4xLS43NjItNC40MTYtMS4xMzktNi45NC0xLjEzOWgtMTMuMDA5djMwLjk5MWgxMy4wMWMyLjUyMiAwIDQuODM4LS4zNzQgNi45MzctMS4xMjkgMi4wOTItLjc1MiAzLjg5OC0xLjgxNyA1LjQtMy4xOTRhMTQuMzc3IDE0LjM3NyAwIDAgMCAzLjQ5NS00LjkxOWMuODMtMS45MDYgMS4yNDEtMy45OTYgMS4yNC02LjI1NC4wMDEtMi4yNTctLjQxLTQuMzQ3LTEuMjQtNi4yNTNtLTkxLjIxNyA1My4xMlY1Ny4wMjRoLTcuODA5djMwLjk5MWgyMy44NTd2LTYuMjEzem0yMC45MzQtMjQuNTYydjMxLjMyaDcuNjA0VjU3LjI0em0zNS44NDggNi4wOTRWNTcuMjRoLTIzLjg5OXYzMS4zMmg3LjkwM1Y3Ny4xMThoMTMuNVY3MWgtMTMuNXYtNy42Njd6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/Home.js */"./pages/Home.js");


/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "keymirror":
/*!****************************!*\
  !*** external "keymirror" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("keymirror");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactjs-popup":
/*!********************************!*\
  !*** external "reactjs-popup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactjs-popup");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "shared":
/*!*************************!*\
  !*** external "shared" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shared");

/***/ }),

/***/ "underscore":
/*!*****************************!*\
  !*** external "underscore" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("underscore");

/***/ })

/******/ });
//# sourceMappingURL=Home.js.map