"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVersion = exports.createUppercasePi = exports.createUppercaseE = exports.createTrue = exports.createTau = exports.createSQRT2 = exports.createSQRT1_2 = exports.createPi = exports.createPhi = exports.createNull = exports.createNaN = exports.createLOG2E = exports.createLOG10E = exports.createLN2 = exports.createLN10 = exports.createInfinity = exports.createI = exports.createFalse = exports.createE = void 0;
var _factory = require("./utils/factory.js");
var _version = require("./version.js");
var _constants = require("./utils/bignumber/constants.js");
var _index = require("./plain/number/index.js");
var createTrue = exports.createTrue = /* #__PURE__ */(0, _factory.factory)('true', [], function () {
  return true;
});
var createFalse = exports.createFalse = /* #__PURE__ */(0, _factory.factory)('false', [], function () {
  return false;
});
var createNull = exports.createNull = /* #__PURE__ */(0, _factory.factory)('null', [], function () {
  return null;
});
var createInfinity = exports.createInfinity = /* #__PURE__ */recreateFactory('Infinity', ['config', '?BigNumber'], function (_ref) {
  var config = _ref.config,
    BigNumber = _ref.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber(Infinity) : Infinity;
});
var createNaN = exports.createNaN = /* #__PURE__ */recreateFactory('NaN', ['config', '?BigNumber'], function (_ref2) {
  var config = _ref2.config,
    BigNumber = _ref2.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber(NaN) : NaN;
});
var createPi = exports.createPi = /* #__PURE__ */recreateFactory('pi', ['config', '?BigNumber'], function (_ref3) {
  var config = _ref3.config,
    BigNumber = _ref3.BigNumber;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberPi)(BigNumber) : _index.pi;
});
var createTau = exports.createTau = /* #__PURE__ */recreateFactory('tau', ['config', '?BigNumber'], function (_ref4) {
  var config = _ref4.config,
    BigNumber = _ref4.BigNumber;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberTau)(BigNumber) : _index.tau;
});
var createE = exports.createE = /* #__PURE__ */recreateFactory('e', ['config', '?BigNumber'], function (_ref5) {
  var config = _ref5.config,
    BigNumber = _ref5.BigNumber;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberE)(BigNumber) : _index.e;
});

// golden ratio, (1+sqrt(5))/2
var createPhi = exports.createPhi = /* #__PURE__ */recreateFactory('phi', ['config', '?BigNumber'], function (_ref6) {
  var config = _ref6.config,
    BigNumber = _ref6.BigNumber;
  return config.number === 'BigNumber' ? (0, _constants.createBigNumberPhi)(BigNumber) : _index.phi;
});
var createLN2 = exports.createLN2 = /* #__PURE__ */recreateFactory('LN2', ['config', '?BigNumber'], function (_ref7) {
  var config = _ref7.config,
    BigNumber = _ref7.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber(2).ln() : Math.LN2;
});
var createLN10 = exports.createLN10 = /* #__PURE__ */recreateFactory('LN10', ['config', '?BigNumber'], function (_ref8) {
  var config = _ref8.config,
    BigNumber = _ref8.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber(10).ln() : Math.LN10;
});
var createLOG2E = exports.createLOG2E = /* #__PURE__ */recreateFactory('LOG2E', ['config', '?BigNumber'], function (_ref9) {
  var config = _ref9.config,
    BigNumber = _ref9.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber(1).div(new BigNumber(2).ln()) : Math.LOG2E;
});
var createLOG10E = exports.createLOG10E = /* #__PURE__ */recreateFactory('LOG10E', ['config', '?BigNumber'], function (_ref10) {
  var config = _ref10.config,
    BigNumber = _ref10.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber(1).div(new BigNumber(10).ln()) : Math.LOG10E;
});
var createSQRT1_2 = exports.createSQRT1_2 = /* #__PURE__ */recreateFactory(
// eslint-disable-line camelcase
'SQRT1_2', ['config', '?BigNumber'], function (_ref11) {
  var config = _ref11.config,
    BigNumber = _ref11.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber('0.5').sqrt() : Math.SQRT1_2;
});
var createSQRT2 = exports.createSQRT2 = /* #__PURE__ */recreateFactory('SQRT2', ['config', '?BigNumber'], function (_ref12) {
  var config = _ref12.config,
    BigNumber = _ref12.BigNumber;
  return config.number === 'BigNumber' ? new BigNumber(2).sqrt() : Math.SQRT2;
});
var createI = exports.createI = /* #__PURE__ */recreateFactory('i', ['Complex'], function (_ref13) {
  var Complex = _ref13.Complex;
  return Complex.I;
});

// for backward compatibility with v5
var createUppercasePi = exports.createUppercasePi = /* #__PURE__ */(0, _factory.factory)('PI', ['pi'], function (_ref14) {
  var pi = _ref14.pi;
  return pi;
});
var createUppercaseE = exports.createUppercaseE = /* #__PURE__ */(0, _factory.factory)('E', ['e'], function (_ref15) {
  var e = _ref15.e;
  return e;
});
var createVersion = exports.createVersion = /* #__PURE__ */(0, _factory.factory)('version', [], function () {
  return _version.version;
});

// helper function to create a factory with a flag recreateOnConfigChange
// idea: allow passing optional properties to be attached to the factory function as 4th argument?
function recreateFactory(name, dependencies, create) {
  return (0, _factory.factory)(name, dependencies, create, {
    recreateOnConfigChange: true
  });
}