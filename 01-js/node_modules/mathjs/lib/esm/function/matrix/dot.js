import { factory } from '../../utils/factory.js';
import { isMatrix } from '../../utils/is.js';
var name = 'dot';
var dependencies = ['typed', 'addScalar', 'multiplyScalar', 'conj', 'size'];
export var createDot = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    addScalar,
    multiplyScalar,
    conj,
    size
  } = _ref;
  /**
   * Calculate the dot product of two vectors. The dot product of
   * `A = [a1, a2, ..., an]` and `B = [b1, b2, ..., bn]` is defined as:
   *
   *    dot(A, B) = conj(a1) * b1 + conj(a2) * b2 + ... + conj(an) * bn
   *
   * Syntax:
   *
   *    math.dot(x, y)
   *
   * Examples:
   *
   *    math.dot([2, 4, 1], [2, 2, 3])       // returns number 15
   *    math.multiply([2, 4, 1], [2, 2, 3])  // returns number 15
   *
   * See also:
   *
   *    multiply, cross
   *
   * @param  {Array | Matrix} x     First vector
   * @param  {Array | Matrix} y     Second vector
   * @return {number}               Returns the dot product of `x` and `y`
   */
  return typed(name, {
    'Array | DenseMatrix, Array | DenseMatrix': _denseDot,
    'SparseMatrix, SparseMatrix': _sparseDot
  });
  function _validateDim(x, y) {
    var xSize = _size(x);
    var ySize = _size(y);
    var xLen, yLen;
    if (xSize.length === 1) {
      xLen = xSize[0];
    } else if (xSize.length === 2 && xSize[1] === 1) {
      xLen = xSize[0];
    } else {
      throw new RangeError('Expected a column vector, instead got a matrix of size (' + xSize.join(', ') + ')');
    }
    if (ySize.length === 1) {
      yLen = ySize[0];
    } else if (ySize.length === 2 && ySize[1] === 1) {
      yLen = ySize[0];
    } else {
      throw new RangeError('Expected a column vector, instead got a matrix of size (' + ySize.join(', ') + ')');
    }
    if (xLen !== yLen) throw new RangeError('Vectors must have equal length (' + xLen + ' != ' + yLen + ')');
    if (xLen === 0) throw new RangeError('Cannot calculate the dot product of empty vectors');
    return xLen;
  }
  function _denseDot(a, b) {
    var N = _validateDim(a, b);
    var adata = isMatrix(a) ? a._data : a;
    var adt = isMatrix(a) ? a._datatype : undefined;
    var bdata = isMatrix(b) ? b._data : b;
    var bdt = isMatrix(b) ? b._datatype : undefined;

    // are these 2-dimensional column vectors? (as opposed to 1-dimensional vectors)
    var aIsColumn = _size(a).length === 2;
    var bIsColumn = _size(b).length === 2;
    var add = addScalar;
    var mul = multiplyScalar;

    // process data types
    if (adt && bdt && adt === bdt && typeof adt === 'string') {
      var dt = adt;
      // find signatures that matches (dt, dt)
      add = typed.find(addScalar, [dt, dt]);
      mul = typed.find(multiplyScalar, [dt, dt]);
    }

    // both vectors 1-dimensional
    if (!aIsColumn && !bIsColumn) {
      var c = mul(conj(adata[0]), bdata[0]);
      for (var i = 1; i < N; i++) {
        c = add(c, mul(conj(adata[i]), bdata[i]));
      }
      return c;
    }

    // a is 1-dim, b is column
    if (!aIsColumn && bIsColumn) {
      var _c = mul(conj(adata[0]), bdata[0][0]);
      for (var _i = 1; _i < N; _i++) {
        _c = add(_c, mul(conj(adata[_i]), bdata[_i][0]));
      }
      return _c;
    }

    // a is column, b is 1-dim
    if (aIsColumn && !bIsColumn) {
      var _c2 = mul(conj(adata[0][0]), bdata[0]);
      for (var _i2 = 1; _i2 < N; _i2++) {
        _c2 = add(_c2, mul(conj(adata[_i2][0]), bdata[_i2]));
      }
      return _c2;
    }

    // both vectors are column
    if (aIsColumn && bIsColumn) {
      var _c3 = mul(conj(adata[0][0]), bdata[0][0]);
      for (var _i3 = 1; _i3 < N; _i3++) {
        _c3 = add(_c3, mul(conj(adata[_i3][0]), bdata[_i3][0]));
      }
      return _c3;
    }
  }
  function _sparseDot(x, y) {
    _validateDim(x, y);
    var xindex = x._index;
    var xvalues = x._values;
    var yindex = y._index;
    var yvalues = y._values;

    // TODO optimize add & mul using datatype
    var c = 0;
    var add = addScalar;
    var mul = multiplyScalar;
    var i = 0;
    var j = 0;
    while (i < xindex.length && j < yindex.length) {
      var I = xindex[i];
      var J = yindex[j];
      if (I < J) {
        i++;
        continue;
      }
      if (I > J) {
        j++;
        continue;
      }
      if (I === J) {
        c = add(c, mul(xvalues[i], yvalues[j]));
        i++;
        j++;
      }
    }
    return c;
  }

  // TODO remove this once #1771 is fixed
  function _size(x) {
    return isMatrix(x) ? x.size() : size(x);
  }
});