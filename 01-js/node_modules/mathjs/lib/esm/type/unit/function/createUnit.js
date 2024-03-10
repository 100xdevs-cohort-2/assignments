import { factory } from '../../../utils/factory.js';
var name = 'createUnit';
var dependencies = ['typed', 'Unit'];
export var createCreateUnit = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    Unit
  } = _ref;
  /**
   * Create a user-defined unit and register it with the Unit type.
   *
   * Syntax:
   *
   *     math.createUnit({
   *       baseUnit1: {
   *         aliases: [string, ...]
   *         prefixes: object
   *       },
   *       unit2: {
   *         definition: string,
   *         aliases: [string, ...]
   *         prefixes: object,
   *         offset: number
   *       },
   *       unit3: string    // Shortcut
   *     })
   *
   *     // Another shortcut:
   *     math.createUnit(string, unit : string, [object])
   *
   * Examples:
   *
   *     math.createUnit('foo')
   *     math.createUnit('knot', {definition: '0.514444444 m/s', aliases: ['knots', 'kt', 'kts']})
   *     math.createUnit('mph', '1 mile/hour')
   *     math.createUnit('km', math.unit(1000, 'm'))
   *
   * @param {string} name      The name of the new unit. Must be unique. Example: 'knot'
   * @param {string, UnitDefinition, Unit} definition      Definition of the unit in terms of existing units. For example, '0.514444444 m / s'.
   * @param {Object} options   (optional) An object containing any of the following properties:
   *     - `prefixes {string}` "none", "short", "long", "binary_short", or "binary_long". The default is "none".
   *     - `aliases {Array}` Array of strings. Example: ['knots', 'kt', 'kts']
   *     - `offset {Numeric}` An offset to apply when converting from the unit. For example, the offset for celsius is 273.15. Default is 0.
   *
   * See also:
   *
   *     unit
   *
   * @return {Unit} The new unit
   */
  return typed(name, {
    // General function signature. First parameter is an object where each property is the definition of a new unit. The object keys are the unit names and the values are the definitions. The values can be objects, strings, or Units. If a property is an empty object or an empty string, a new base unit is created. The second parameter is the options.
    'Object, Object': function ObjectObject(obj, options) {
      return Unit.createUnit(obj, options);
    },
    // Same as above but without the options.
    Object: function Object(obj) {
      return Unit.createUnit(obj, {});
    },
    // Shortcut method for creating one unit.
    'string, Unit | string | Object, Object': function stringUnitStringObjectObject(name, def, options) {
      var obj = {};
      obj[name] = def;
      return Unit.createUnit(obj, options);
    },
    // Same as above but without the options.
    'string, Unit | string | Object': function stringUnitStringObject(name, def) {
      var obj = {};
      obj[name] = def;
      return Unit.createUnit(obj, {});
    },
    // Without a definition, creates a base unit.
    string: function string(name) {
      var obj = {};
      obj[name] = {};
      return Unit.createUnit(obj, {});
    }
  });
});