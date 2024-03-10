import { factory } from '../../utils/factory.js';
export var createCompareUnits = /* #__PURE__ */factory('compareUnits', ['typed'], _ref => {
  var {
    typed
  } = _ref;
  return {
    'Unit, Unit': typed.referToSelf(self => (x, y) => {
      if (!x.equalBase(y)) {
        throw new Error('Cannot compare units with different base');
      }
      return typed.find(self, [x.valueType(), y.valueType()])(x.value, y.value);
    })
  };
});