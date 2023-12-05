"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWienDisplacement = exports.createWeakMixingAngle = exports.createVacuumImpedance = exports.createThomsonCrossSection = exports.createStefanBoltzmann = exports.createSpeedOfLight = exports.createSecondRadiation = exports.createSackurTetrode = exports.createRydberg = exports.createReducedPlanckConstant = exports.createQuantumOfCirculation = exports.createProtonMass = exports.createPlanckTime = exports.createPlanckTemperature = exports.createPlanckMass = exports.createPlanckLength = exports.createPlanckConstant = exports.createPlanckCharge = exports.createNuclearMagneton = exports.createNeutronMass = exports.createMolarVolume = exports.createMolarPlanckConstant = exports.createMolarMassC12 = exports.createMolarMass = exports.createMagneticFluxQuantum = exports.createMagneticConstant = exports.createLoschmidt = exports.createKlitzing = exports.createJosephson = exports.createInverseConductanceQuantum = exports.createHartreeEnergy = exports.createGravity = exports.createGravitationConstant = exports.createGasConstant = exports.createFirstRadiation = exports.createFineStructure = exports.createFermiCoupling = exports.createFaraday = exports.createElementaryCharge = exports.createElectronMass = exports.createElectricConstant = exports.createEfimovFactor = exports.createDeuteronMass = exports.createCoulomb = exports.createConductanceQuantum = exports.createClassicalElectronRadius = exports.createBoltzmann = exports.createBohrRadius = exports.createBohrMagneton = exports.createAvogadro = exports.createAtomicMass = void 0;
var _factory = require("../../utils/factory.js");
// Source: https://en.wikipedia.org/wiki/Physical_constant

// Universal constants
var createSpeedOfLight = exports.createSpeedOfLight = /* #__PURE__ */unitFactory('speedOfLight', '299792458', 'm s^-1');
var createGravitationConstant = exports.createGravitationConstant = /* #__PURE__ */unitFactory('gravitationConstant', '6.67430e-11', 'm^3 kg^-1 s^-2');
var createPlanckConstant = exports.createPlanckConstant = /* #__PURE__ */unitFactory('planckConstant', '6.62607015e-34', 'J s');
var createReducedPlanckConstant = exports.createReducedPlanckConstant = /* #__PURE__ */unitFactory('reducedPlanckConstant', '1.0545718176461565e-34', 'J s');

// Electromagnetic constants
var createMagneticConstant = exports.createMagneticConstant = /* #__PURE__ */unitFactory('magneticConstant', '1.25663706212e-6', 'N A^-2');
var createElectricConstant = exports.createElectricConstant = /* #__PURE__ */unitFactory('electricConstant', '8.8541878128e-12', 'F m^-1');
var createVacuumImpedance = exports.createVacuumImpedance = /* #__PURE__ */unitFactory('vacuumImpedance', '376.730313667', 'ohm');
var createCoulomb = exports.createCoulomb = /* #__PURE__ */unitFactory('coulomb', '8.987551792261171e9', 'N m^2 C^-2');
var createElementaryCharge = exports.createElementaryCharge = /* #__PURE__ */unitFactory('elementaryCharge', '1.602176634e-19', 'C');
var createBohrMagneton = exports.createBohrMagneton = /* #__PURE__ */unitFactory('bohrMagneton', '9.2740100783e-24', 'J T^-1');
var createConductanceQuantum = exports.createConductanceQuantum = /* #__PURE__ */unitFactory('conductanceQuantum', '7.748091729863649e-5', 'S');
var createInverseConductanceQuantum = exports.createInverseConductanceQuantum = /* #__PURE__ */unitFactory('inverseConductanceQuantum', '12906.403729652257', 'ohm');
var createMagneticFluxQuantum = exports.createMagneticFluxQuantum = /* #__PURE__ */unitFactory('magneticFluxQuantum', '2.0678338484619295e-15', 'Wb');
var createNuclearMagneton = exports.createNuclearMagneton = /* #__PURE__ */unitFactory('nuclearMagneton', '5.0507837461e-27', 'J T^-1');
var createKlitzing = exports.createKlitzing = /* #__PURE__ */unitFactory('klitzing', '25812.807459304513', 'ohm');
var createJosephson = exports.createJosephson = /* #__PURE__ */unitFactory('josephson', '4.835978484169836e14 Hz V', 'Hz V^-1'); // TODO: support for Hz needed

// Atomic and nuclear constants
var createBohrRadius = exports.createBohrRadius = /* #__PURE__ */unitFactory('bohrRadius', '5.29177210903e-11', 'm');
var createClassicalElectronRadius = exports.createClassicalElectronRadius = /* #__PURE__ */unitFactory('classicalElectronRadius', '2.8179403262e-15', 'm');
var createElectronMass = exports.createElectronMass = /* #__PURE__ */unitFactory('electronMass', '9.1093837015e-31', 'kg');
var createFermiCoupling = exports.createFermiCoupling = /* #__PURE__ */unitFactory('fermiCoupling', '1.1663787e-5', 'GeV^-2');
var createFineStructure = exports.createFineStructure = numberFactory('fineStructure', 7.2973525693e-3);
var createHartreeEnergy = exports.createHartreeEnergy = /* #__PURE__ */unitFactory('hartreeEnergy', '4.3597447222071e-18', 'J');
var createProtonMass = exports.createProtonMass = /* #__PURE__ */unitFactory('protonMass', '1.67262192369e-27', 'kg');
var createDeuteronMass = exports.createDeuteronMass = /* #__PURE__ */unitFactory('deuteronMass', '3.3435830926e-27', 'kg');
var createNeutronMass = exports.createNeutronMass = /* #__PURE__ */unitFactory('neutronMass', '1.6749271613e-27', 'kg');
var createQuantumOfCirculation = exports.createQuantumOfCirculation = /* #__PURE__ */unitFactory('quantumOfCirculation', '3.6369475516e-4', 'm^2 s^-1');
var createRydberg = exports.createRydberg = /* #__PURE__ */unitFactory('rydberg', '10973731.568160', 'm^-1');
var createThomsonCrossSection = exports.createThomsonCrossSection = /* #__PURE__ */unitFactory('thomsonCrossSection', '6.6524587321e-29', 'm^2');
var createWeakMixingAngle = exports.createWeakMixingAngle = numberFactory('weakMixingAngle', 0.22290);
var createEfimovFactor = exports.createEfimovFactor = numberFactory('efimovFactor', 22.7);

// Physico-chemical constants
var createAtomicMass = exports.createAtomicMass = /* #__PURE__ */unitFactory('atomicMass', '1.66053906660e-27', 'kg');
var createAvogadro = exports.createAvogadro = /* #__PURE__ */unitFactory('avogadro', '6.02214076e23', 'mol^-1');
var createBoltzmann = exports.createBoltzmann = /* #__PURE__ */unitFactory('boltzmann', '1.380649e-23', 'J K^-1');
var createFaraday = exports.createFaraday = /* #__PURE__ */unitFactory('faraday', '96485.33212331001', 'C mol^-1');
var createFirstRadiation = exports.createFirstRadiation = /* #__PURE__ */unitFactory('firstRadiation', '3.7417718521927573e-16', 'W m^2');
// export const createSpectralRadiance = /* #__PURE__ */ unitFactory('spectralRadiance', '1.1910429723971881e-16', 'W m^2 sr^-1') // TODO spectralRadiance
var createLoschmidt = exports.createLoschmidt = /* #__PURE__ */unitFactory('loschmidt', '2.686780111798444e25', 'm^-3');
var createGasConstant = exports.createGasConstant = /* #__PURE__ */unitFactory('gasConstant', '8.31446261815324', 'J K^-1 mol^-1');
var createMolarPlanckConstant = exports.createMolarPlanckConstant = /* #__PURE__ */unitFactory('molarPlanckConstant', '3.990312712893431e-10', 'J s mol^-1');
var createMolarVolume = exports.createMolarVolume = /* #__PURE__ */unitFactory('molarVolume', '0.022413969545014137', 'm^3 mol^-1');
var createSackurTetrode = exports.createSackurTetrode = numberFactory('sackurTetrode', -1.16487052358);
var createSecondRadiation = exports.createSecondRadiation = /* #__PURE__ */unitFactory('secondRadiation', '0.014387768775039337', 'm K');
var createStefanBoltzmann = exports.createStefanBoltzmann = /* #__PURE__ */unitFactory('stefanBoltzmann', '5.67037441918443e-8', 'W m^-2 K^-4');
var createWienDisplacement = exports.createWienDisplacement = /* #__PURE__ */unitFactory('wienDisplacement', '2.897771955e-3', 'm K');

// Adopted values
var createMolarMass = exports.createMolarMass = /* #__PURE__ */unitFactory('molarMass', '0.99999999965e-3', 'kg mol^-1');
var createMolarMassC12 = exports.createMolarMassC12 = /* #__PURE__ */unitFactory('molarMassC12', '11.9999999958e-3', 'kg mol^-1');
var createGravity = exports.createGravity = /* #__PURE__ */unitFactory('gravity', '9.80665', 'm s^-2');
// atm is defined in Unit.js

// Natural units
var createPlanckLength = exports.createPlanckLength = /* #__PURE__ */unitFactory('planckLength', '1.616255e-35', 'm');
var createPlanckMass = exports.createPlanckMass = /* #__PURE__ */unitFactory('planckMass', '2.176435e-8', 'kg');
var createPlanckTime = exports.createPlanckTime = /* #__PURE__ */unitFactory('planckTime', '5.391245e-44', 's');
var createPlanckCharge = exports.createPlanckCharge = /* #__PURE__ */unitFactory('planckCharge', '1.87554603778e-18', 'C');
var createPlanckTemperature = exports.createPlanckTemperature = /* #__PURE__ */unitFactory('planckTemperature', '1.416785e+32', 'K');

// helper function to create a factory function which creates a physical constant,
// a Unit with either a number value or a BigNumber value depending on the configuration
function unitFactory(name, valueStr, unitStr) {
  var dependencies = ['config', 'Unit', 'BigNumber'];
  return (0, _factory.factory)(name, dependencies, function (_ref) {
    var config = _ref.config,
      Unit = _ref.Unit,
      BigNumber = _ref.BigNumber;
    // Note that we can parse into number or BigNumber.
    // We do not parse into Fractions as that doesn't make sense: we would lose precision of the values
    // Therefore we dont use Unit.parse()
    var value = config.number === 'BigNumber' ? new BigNumber(valueStr) : parseFloat(valueStr);
    var unit = new Unit(value, unitStr);
    unit.fixPrefix = true;
    return unit;
  });
}

// helper function to create a factory function which creates a numeric constant,
// either a number or BigNumber depending on the configuration
function numberFactory(name, value) {
  var dependencies = ['config', 'BigNumber'];
  return (0, _factory.factory)(name, dependencies, function (_ref2) {
    var config = _ref2.config,
      BigNumber = _ref2.BigNumber;
    return config.number === 'BigNumber' ? new BigNumber(value) : value;
  });
}