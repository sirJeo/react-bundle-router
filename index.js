'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defineLoader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _loadRoute = function loadRoute(name) {
    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

    throw 'Specify Route loader function. Use {defineLoader} method';
};

var defineLoader = exports.defineLoader = function defineLoader(func) {
    _loadRoute = func;
};

var BundleRoute = function (_Route) {
    _inherits(BundleRoute, _Route);

    function BundleRoute() {
        var _ref;

        _classCallCheck(this, BundleRoute);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = BundleRoute.__proto__ || Object.getPrototypeOf(BundleRoute)).call.apply(_ref, [this].concat(args)));

        _this.state = {
            match: _this.computeMatch(_this.props, _this.context.router),
            component: null
        };
        return _this;
    }

    _createClass(BundleRoute, [{
        key: 'loadRoute',
        value: function loadRoute(file) {
            var _this2 = this;

            _loadRoute(file, function (loadedFile) {
                _this2.setState({ component: loadedFile.default });
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.file) {
                this.loadRoute(this.props.file);
            } else {
                _get(BundleRoute.prototype.__proto__ || Object.getPrototypeOf(BundleRoute.prototype), 'componentWillMount', this).call(this);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _get2;

            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }

            (_get2 = _get(BundleRoute.prototype.__proto__ || Object.getPrototypeOf(BundleRoute.prototype), 'componentWillReceiveProps', this)).call.apply(_get2, [this, nextProps].concat(args));
            this.loadRoute(nextProps.file);
        }
    }, {
        key: 'render',
        value: function render() {
            return this.state.component ? _react2.default.createElement(this.state.component, this.props) : _get(BundleRoute.prototype.__proto__ || Object.getPrototypeOf(BundleRoute.prototype), 'render', this).call(this);
        }
    }]);

    return BundleRoute;
}(_reactRouter.Route);

exports.default = BundleRoute;


BundleRoute.propTypes = Object.assign({ file: _propTypes2.default.string }, _reactRouter.Route.propTypes);

BundleRoute.defaultProps = {
    file: '',
    component: function component() {
        return null;
    }
};

