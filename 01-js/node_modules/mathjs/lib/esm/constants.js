import { factory } from './utils/factory.js';
import { version } from './version.js';
import { createBigNumberE, createBigNumberPhi, createBigNumberPi, createBigNumberTau } from './utils/bignumber/constants.js';
import { pi, tau, e, phi } from './plain/number/index.js';
export var createTrue = /* #__PURE__ */factory('true', [], () => true);
export var createFalse = /* #__PURE__ */factory('false', [], () => false);
export var createNull = /* #__PURE__ */factory('null', [], () => null);
export var createInfinity = /* #__PURE__ */recreateFactory('Infinity', ['config', '?BigNumber'], _ref => {
  var {
    config,
    BigNumber
  } = _ref;
  return config.number === 'BigNumber' ? new BigNumber(Infinity) : Infinity;
});
export var createNaN = /* #__PURE__ */recreateFactory('NaN', ['config', '?BigNumber'], _ref2 => {
  var {
    config,
    BigNumber
  } = _ref2;
  return config.number === 'BigNumber' ? new BigNumber(NaN) : NaN;
});
export var createPi = /* #__PURE__ */recreateFactory('pi', ['config', '?BigNumber'], _ref3 => {
  var {
    config,
    BigNumber
  } = _ref3;
  return config.number === 'BigNumber' ? createBigNumberPi(BigNumber) : pi;
});
export var createTau = /* #__PURE__ */recreateFactory('tau', ['config', '?BigNumber'], _ref4 => {
  var {
    config,
    BigNumber
  } = _ref4;
  return config.number === 'BigNumber' ? createBigNumberTau(BigNumber) : tau;
});
export var createE = /* #__PURE__ */recreateFactory('e', ['config', '?BigNumber'], _ref5 => {
  var {
    config,
    BigNumber
  } = _ref5;
  return config.number === 'BigNumber' ? createBigNumberE(BigNumber) : e;
});

// golden ratio, (1+sqrt(5))/2
export var createPhi = /* #__PURE__ */recreateFactory('phi', ['config', '?BigNumber'], _ref6 => {
  var {
    config,
    BigNumber
  } = _ref6;
  return config.number === 'BigNumber' ? createBigNumberPhi(BigNumber) : phi;
});
export var createLN2 = /* #__PURE__ */recreateFactory('LN2', ['config', '?BigNumber'], _ref7 => {
  var {
    config,
    BigNumber
  } = _ref7;
  return config.number === 'BigNumber' ? new BigNumber(2).ln() : Math.LN2;
});
export var createLN10 = /* #__PURE__ */recreateFactory('LN10', ['config', '?BigNumber'], _ref8 => {
  var {
    config,
    BigNumber
  } = _ref8;
  return config.number === 'BigNumber' ? new BigNumber(10).ln() : Math.LN10;
});
export var createLOG2E = /* #__PURE__ */recreateFactory('LOG2E', ['config', '?BigNumber'], _ref9 => {
  var {
    config,
    BigNumber
  } = _ref9;
  return config.number === 'BigNumber' ? new BigNumber(1).div(new BigNumber(2).ln()) : Math.LOG2E;
});
export var createLOG10E = /* #__PURE__ */recreateFactory('LOG10E', ['config', '?BigNumber'], _ref10 => {
  var {
    config,
    BigNumber
  } = _ref10;
  return config.number === 'BigNumber' ? new BigNumber(1).div(new BigNumber(10).ln()) : Math.LOG10E;
});
export var createSQRT1_2 = /* #__PURE__ */recreateFactory(
// eslint-disable-line camelcase
'SQRT1_2', ['config', '?BigNumber'], _ref11 => {
  var {
    config,
    BigNumber
  } = _ref11;
  return config.number === 'BigNumber' ? new BigNumber('0.5').sqrt() : Math.SQRT1_2;
});
export var createSQRT2 = /* #__PURE__ */recreateFactory('SQRT2', ['config', '?BigNumber'], _ref12 => {
  var {
    config,
    BigNumber
  } = _ref12;
  return config.number === 'BigNumber' ? new BigNumber(2).sqrt() : Math.SQRT2;
});
export var createI = /* #__PURE__ */recreateFactory('i', ['Complex'], _ref13 => {
  var {
    Complex
  } = _ref13;
  return Complex.I;
});

// for backward compatibility with v5
export var createUppercasePi = /* #__PURE__ */factory('PI', ['pi'], _ref14 => {
  var {
    pi
  } = _ref14;
  return pi;
});
export var createUppercaseE = /* #__PURE__ */factory('E', ['e'], _ref15 => {
  var {
    e
  } = _ref15;
  return e;
});
export var createVersion = /* #__PURE__ */factory('version', [], () => version);

// helper function to create a factory with a flag recreateOnConfigChange
// idea: allow passing optional properties to be attached to the factory function as 4th argument?
function recreateFactory(name, dependencies, create) {
  return factory(name, dependencies, create, {
    recreateOnConfigChange: true
  });
}