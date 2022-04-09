"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _LogIN = _interopRequireDefault(require("../components/LogIN.vue"));

var _SignUp = _interopRequireDefault(require("../components/SignUp.vue"));

var _ForgotPass = _interopRequireDefault(require("../components/ForgotPass.vue"));

var _Home = _interopRequireDefault(require("../components/Home.vue"));

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vueRouter["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Homeview',
  component: _HomeView["default"]
}, {
  path: '/sign-up',
  name: 'SignUp',
  component: _SignUp["default"]
}, {
  path: '/log-in',
  name: 'LogIn',
  component: _LogIN["default"]
}, {
  path: '/forgot-pass',
  name: 'ForgotPass',
  component: _ForgotPass["default"]
}, {
  path: '/home',
  name: 'Home',
  component: _Home["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  routes: routes
});
var _default = router;
exports["default"] = _default;