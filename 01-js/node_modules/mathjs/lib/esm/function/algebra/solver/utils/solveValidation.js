import { isArray, isMatrix, isDenseMatrix, isSparseMatrix } from '../../../../utils/is.js';
import { arraySize } from '../../../../utils/array.js';
import { format } from '../../../../utils/string.js';
export function createSolveValidation(_ref) {
  var {
    DenseMatrix
  } = _ref;
  /**
   * Validates matrix and column vector b for backward/forward substitution algorithms.
   *
   * @param {Matrix} m            An N x N matrix
   * @param {Array | Matrix} b    A column vector
   * @param {Boolean} copy        Return a copy of vector b
   *
   * @return {DenseMatrix}        Dense column vector b
   */
  return function solveValidation(m, b, copy) {
    var mSize = m.size();
    if (mSize.length !== 2) {
      throw new RangeError('Matrix must be two dimensional (size: ' + format(mSize) + ')');
    }
    var rows = mSize[0];
    var columns = mSize[1];
    if (rows !== columns) {
      throw new RangeError('Matrix must be square (size: ' + format(mSize) + ')');
    }
    var data = [];
    if (isMatrix(b)) {
      var bSize = b.size();
      var bdata = b._data;

      // 1-dim vector
      if (bSize.length === 1) {
        if (bSize[0] !== rows) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        }
        for (var i = 0; i < rows; i++) {
          data[i] = [bdata[i]];
        }
        return new DenseMatrix({
          data,
          size: [rows, 1],
          datatype: b._datatype
        });
      }

      // 2-dim column
      if (bSize.length === 2) {
        if (bSize[0] !== rows || bSize[1] !== 1) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        }
        if (isDenseMatrix(b)) {
          if (copy) {
            data = [];
            for (var _i = 0; _i < rows; _i++) {
              data[_i] = [bdata[_i][0]];
            }
            return new DenseMatrix({
              data,
              size: [rows, 1],
              datatype: b._datatype
            });
          }
          return b;
        }
        if (isSparseMatrix(b)) {
          for (var _i2 = 0; _i2 < rows; _i2++) {
            data[_i2] = [0];
          }
          var values = b._values;
          var index = b._index;
          var ptr = b._ptr;
          for (var k1 = ptr[1], k = ptr[0]; k < k1; k++) {
            var _i3 = index[k];
            data[_i3][0] = values[k];
          }
          return new DenseMatrix({
            data,
            size: [rows, 1],
            datatype: b._datatype
          });
        }
      }
      throw new RangeError('Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.');
    }
    if (isArray(b)) {
      var bsize = arraySize(b);
      if (bsize.length === 1) {
        if (bsize[0] !== rows) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        }
        for (var _i4 = 0; _i4 < rows; _i4++) {
          data[_i4] = [b[_i4]];
        }
        return new DenseMatrix({
          data,
          size: [rows, 1]
        });
      }
      if (bsize.length === 2) {
        if (bsize[0] !== rows || bsize[1] !== 1) {
          throw new RangeError('Dimension mismatch. Matrix columns must match vector length.');
        }
        for (var _i5 = 0; _i5 < rows; _i5++) {
          data[_i5] = [b[_i5][0]];
        }
        return new DenseMatrix({
          data,
          size: [rows, 1]
        });
      }
      throw new RangeError('Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.');
    }
  };
}