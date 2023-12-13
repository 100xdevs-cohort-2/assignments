/* eslint-disable no-loss-of-precision */

import { isInteger } from '../../utils/number.js';
import { product } from '../../utils/product.js';
export function gammaNumber(n) {
  var x;
  if (isInteger(n)) {
    if (n <= 0) {
      return isFinite(n) ? Infinity : NaN;
    }
    if (n > 171) {
      return Infinity; // Will overflow
    }

    return product(1, n - 1);
  }
  if (n < 0.5) {
    return Math.PI / (Math.sin(Math.PI * n) * gammaNumber(1 - n));
  }
  if (n >= 171.35) {
    return Infinity; // will overflow
  }

  if (n > 85.0) {
    // Extended Stirling Approx
    var twoN = n * n;
    var threeN = twoN * n;
    var fourN = threeN * n;
    var fiveN = fourN * n;
    return Math.sqrt(2 * Math.PI / n) * Math.pow(n / Math.E, n) * (1 + 1 / (12 * n) + 1 / (288 * twoN) - 139 / (51840 * threeN) - 571 / (2488320 * fourN) + 163879 / (209018880 * fiveN) + 5246819 / (75246796800 * fiveN * n));
  }
  --n;
  x = gammaP[0];
  for (var i = 1; i < gammaP.length; ++i) {
    x += gammaP[i] / (n + i);
  }
  var t = n + gammaG + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, n + 0.5) * Math.exp(-t) * x;
}
gammaNumber.signature = 'number';

// TODO: comment on the variables g and p

export var gammaG = 4.7421875;
export var gammaP = [0.99999999999999709182, 57.156235665862923517, -59.597960355475491248, 14.136097974741747174, -0.49191381609762019978, 0.33994649984811888699e-4, 0.46523628927048575665e-4, -0.98374475304879564677e-4, 0.15808870322491248884e-3, -0.21026444172410488319e-3, 0.21743961811521264320e-3, -0.16431810653676389022e-3, 0.84418223983852743293e-4, -0.26190838401581408670e-4, 0.36899182659531622704e-5];

// lgamma implementation ref: https://mrob.com/pub/ries/lanczos-gamma.html#code

// log(2 * pi) / 2
export var lnSqrt2PI = 0.91893853320467274178;
export var lgammaG = 5; // Lanczos parameter "g"
export var lgammaN = 7; // Range of coefficients "n"

export var lgammaSeries = [1.000000000190015, 76.18009172947146, -86.50532032941677, 24.01409824083091, -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5];
export function lgammaNumber(n) {
  if (n < 0) return NaN;
  if (n === 0) return Infinity;
  if (!isFinite(n)) return n;
  if (n < 0.5) {
    // Use Euler's reflection formula:
    // gamma(z) = PI / (sin(PI * z) * gamma(1 - z))
    return Math.log(Math.PI / Math.sin(Math.PI * n)) - lgammaNumber(1 - n);
  }

  // Compute the logarithm of the Gamma function using the Lanczos method

  n = n - 1;
  var base = n + lgammaG + 0.5; // Base of the Lanczos exponential
  var sum = lgammaSeries[0];

  // We start with the terms that have the smallest coefficients and largest denominator
  for (var i = lgammaN - 1; i >= 1; i--) {
    sum += lgammaSeries[i] / (n + i);
  }
  return lnSqrt2PI + (n + 0.5) * Math.log(base) - base + Math.log(sum);
}
lgammaNumber.signature = 'number';