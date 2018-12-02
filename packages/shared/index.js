"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withState = withState;
exports.withData = withData;
exports.WithDataWrapper = exports.SECRET_SHARED_CODE = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var State = {
  IDLE: 1,
  PENDING: 2,
  SUCCESS: 3,
  ERROR: 4
};
var SECRET_SHARED_CODE = "Hello!!!!!";
exports.SECRET_SHARED_CODE = SECRET_SHARED_CODE;

function withState(TargetComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(StateMachineWrapper, _Component);

      function StateMachineWrapper() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, StateMachineWrapper);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateMachineWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
          current: State.IDLE
        });

        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "apiState", {
          pending: function pending() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.PENDING
              });
            });
          },
          success: function success() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.SUCCESS
              });
            });
          },
          error: function error() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.ERROR
              });
            });
          },
          idle: function idle() {
            return _this.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                current: State.IDLE
              });
            });
          },
          isPending: function isPending() {
            return _this.state.current === State.PENDING;
          },
          isSuccess: function isSuccess() {
            return _this.state.current === State.SUCCESS;
          },
          isError: function isError() {
            return _this.state.current === State.ERROR;
          },
          isIdle: function isIdle() {
            return _this.state.current === State.IDLE;
          }
        });

        return _this;
      }

      _createClass(StateMachineWrapper, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(TargetComponent, _extends({}, this.props, {
            apiState: this.apiState
          }));
        }
      }]);

      return StateMachineWrapper;
    }(_react.Component)
  );
}

function withData(TargetComponent) {
  var WithData =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithData, _React$Component);

    function WithData() {
      var _getPrototypeOf3;

      var _this2;

      _classCallCheck(this, WithData);

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(WithData)).call.apply(_getPrototypeOf3, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
        data: null,
        errors: null
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "fetchData",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                alert("Hey!!!!");
                /* const { apiState, fetcher, mapper } = this.props;
                 try {
                    apiState.pending();
                    const result = await fetcher();
                    const data = mapper(result);
                    this.setState({ data });
                    apiState.success();
                } catch (errors) {
                    apiState.error();
                    this.setState({ errors });
                } */

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      })));

      return _this2;
    }

    _createClass(WithData, [{
      key: "componentDidMount",
      value: function componentDidMount() {//this.fetchData();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            mapper = _this$props.mapper,
            fetcher = _this$props.fetcher,
            rest = _objectWithoutProperties(_this$props, ["mapper", "fetcher"]);

        return _react.default.createElement(TargetComponent, _extends({}, rest, {
          data: this.state.data,
          errors: this.state.errors,
          refetchData: this.fetchData
        }));
      }
    }]);

    return WithData;
  }(_react.default.Component);

  _defineProperty(WithData, "defaultProps", {
    mapper: function mapper(f) {
      return f;
    }
  });

  return withState(WithData);
}

var WithDataRP =
/*#__PURE__*/
function (_Component2) {
  _inherits(WithDataRP, _Component2);

  function WithDataRP() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, WithDataRP);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(WithDataRP)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      data: null,
      errors: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "fetchData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var _this3$props, apiState, fetcher, mapper, result, data;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this3$props = _this3.props, apiState = _this3$props.apiState, fetcher = _this3$props.fetcher, mapper = _this3$props.mapper;
              _context2.prev = 1;
              apiState.pending();
              _context2.next = 5;
              return fetcher();

            case 5:
              result = _context2.sent;
              data = mapper(result);

              _this3.setState({
                data: data
              });

              apiState.success();
              _context2.next = 15;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](1);
              apiState.error();

              _this3.setState({
                errors: _context2.t0
              });

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[1, 11]]);
    })));

    return _this3;
  }

  _createClass(WithDataRP, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      var apiState = this.props.apiState;
      console.log('apiState => ', apiState);
      return this.props.render({
        apiState: apiState,
        fetchData: this.fetchData,
        data: this.state.data,
        errors: this.state.errors
      });
    }
  }]);

  return WithDataRP;
}(_react.Component);

_defineProperty(WithDataRP, "defaultProps", {
  mapper: function mapper(f) {
    return f;
  }
});

var WithDataWrapper = withState(WithDataRP);
exports.WithDataWrapper = WithDataWrapper;
