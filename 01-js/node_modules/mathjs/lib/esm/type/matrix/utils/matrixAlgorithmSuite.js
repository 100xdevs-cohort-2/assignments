import { factory } from '../../../utils/factory.js';
import { extend } from '../../../utils/object.js';
import { createMatAlgo13xDD } from './matAlgo13xDD.js';
import { createMatAlgo14xDs } from './matAlgo14xDs.js';
import { createBroadcast } from './broadcast.js';
var name = 'matrixAlgorithmSuite';
var dependencies = ['typed', 'matrix', 'concat'];
export var createMatrixAlgorithmSuite = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    concat
  } = _ref;
  var matAlgo13xDD = createMatAlgo13xDD({
    typed
  });
  var matAlgo14xDs = createMatAlgo14xDs({
    typed
  });
  var broadcast = createBroadcast({
    concat
  });

  /**
   * Return a signatures object with the usual boilerplate of
   * matrix algorithms, based on a plain options object with the
   * following properties:
   *   elop: function -- the elementwise operation to use, defaults to self
   *   SS: function -- the algorithm to apply for two sparse matrices
   *   DS: function -- the algorithm to apply for a dense and a sparse matrix
   *   SD: function -- algo for a sparse and a dense; defaults to SD flipped
   *   Ss: function -- the algorithm to apply for a sparse matrix and scalar
   *   sS: function -- algo for scalar and sparse; defaults to Ss flipped
   *   scalar: string -- typed-function type for scalars, defaults to 'any'
   *
   * If Ss is not specified, no matrix-scalar signatures are generated.
   *
   * @param {object} options
   * @return {Object<string, function>} signatures
   */
  return function matrixAlgorithmSuite(options) {
    var elop = options.elop;
    var SD = options.SD || options.DS;
    var matrixSignatures;
    if (elop) {
      // First the dense ones
      matrixSignatures = {
        'DenseMatrix, DenseMatrix': (x, y) => matAlgo13xDD(...broadcast(x, y), elop),
        'Array, Array': (x, y) => matAlgo13xDD(...broadcast(matrix(x), matrix(y)), elop).valueOf(),
        'Array, DenseMatrix': (x, y) => matAlgo13xDD(...broadcast(matrix(x), y), elop),
        'DenseMatrix, Array': (x, y) => matAlgo13xDD(...broadcast(x, matrix(y)), elop)
      };
      // Now incorporate sparse matrices
      if (options.SS) {
        matrixSignatures['SparseMatrix, SparseMatrix'] = (x, y) => options.SS(...broadcast(x, y), elop, false);
      }
      if (options.DS) {
        matrixSignatures['DenseMatrix, SparseMatrix'] = (x, y) => options.DS(...broadcast(x, y), elop, false);
        matrixSignatures['Array, SparseMatrix'] = (x, y) => options.DS(...broadcast(matrix(x), y), elop, false);
      }
      if (SD) {
        matrixSignatures['SparseMatrix, DenseMatrix'] = (x, y) => SD(...broadcast(y, x), elop, true);
        matrixSignatures['SparseMatrix, Array'] = (x, y) => SD(...broadcast(matrix(y), x), elop, true);
      }
    } else {
      // No elop, use this
      // First the dense ones
      matrixSignatures = {
        'DenseMatrix, DenseMatrix': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...broadcast(x, y), self);
        }),
        'Array, Array': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...broadcast(matrix(x), matrix(y)), self).valueOf();
        }),
        'Array, DenseMatrix': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...broadcast(matrix(x), y), self);
        }),
        'DenseMatrix, Array': typed.referToSelf(self => (x, y) => {
          return matAlgo13xDD(...broadcast(x, matrix(y)), self);
        })
      };
      // Now incorporate sparse matrices
      if (options.SS) {
        matrixSignatures['SparseMatrix, SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return options.SS(...broadcast(x, y), self, false);
        });
      }
      if (options.DS) {
        matrixSignatures['DenseMatrix, SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return options.DS(...broadcast(x, y), self, false);
        });
        matrixSignatures['Array, SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return options.DS(...broadcast(matrix(x), y), self, false);
        });
      }
      if (SD) {
        matrixSignatures['SparseMatrix, DenseMatrix'] = typed.referToSelf(self => (x, y) => {
          return SD(...broadcast(y, x), self, true);
        });
        matrixSignatures['SparseMatrix, Array'] = typed.referToSelf(self => (x, y) => {
          return SD(...broadcast(matrix(y), x), self, true);
        });
      }
    }

    // Now add the scalars
    var scalar = options.scalar || 'any';
    var Ds = options.Ds || options.Ss;
    if (Ds) {
      if (elop) {
        matrixSignatures['DenseMatrix,' + scalar] = (x, y) => matAlgo14xDs(x, y, elop, false);
        matrixSignatures[scalar + ', DenseMatrix'] = (x, y) => matAlgo14xDs(y, x, elop, true);
        matrixSignatures['Array,' + scalar] = (x, y) => matAlgo14xDs(matrix(x), y, elop, false).valueOf();
        matrixSignatures[scalar + ', Array'] = (x, y) => matAlgo14xDs(matrix(y), x, elop, true).valueOf();
      } else {
        matrixSignatures['DenseMatrix,' + scalar] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(x, y, self, false);
        });
        matrixSignatures[scalar + ', DenseMatrix'] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(y, x, self, true);
        });
        matrixSignatures['Array,' + scalar] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(matrix(x), y, self, false).valueOf();
        });
        matrixSignatures[scalar + ', Array'] = typed.referToSelf(self => (x, y) => {
          return matAlgo14xDs(matrix(y), x, self, true).valueOf();
        });
      }
    }
    var sS = options.sS !== undefined ? options.sS : options.Ss;
    if (elop) {
      if (options.Ss) {
        matrixSignatures['SparseMatrix,' + scalar] = (x, y) => options.Ss(x, y, elop, false);
      }
      if (sS) {
        matrixSignatures[scalar + ', SparseMatrix'] = (x, y) => sS(y, x, elop, true);
      }
    } else {
      if (options.Ss) {
        matrixSignatures['SparseMatrix,' + scalar] = typed.referToSelf(self => (x, y) => {
          return options.Ss(x, y, self, false);
        });
      }
      if (sS) {
        matrixSignatures[scalar + ', SparseMatrix'] = typed.referToSelf(self => (x, y) => {
          return sS(y, x, self, true);
        });
      }
    }
    // Also pull in the scalar signatures if the operator is a typed function
    if (elop && elop.signatures) {
      extend(matrixSignatures, elop.signatures);
    }
    return matrixSignatures;
  };
});