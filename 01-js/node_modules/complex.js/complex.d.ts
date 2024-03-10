type AValue =
  | Complex
  | { im: number; re: number }
  | { abs: number; arg: number }
  | { r: number; phi: number }
  | [number, number]
  | string
  | number
  | null
  | undefined;
type BValue = number | undefined;

export function Complex(a: AValue, b?: BValue): Complex;

export default Complex;

/**
 *
 * This class allows the manipulation of complex numbers.
 * You can pass a complex number in different formats. Either as object, double, string or two integer parameters.
 *
 * Object form
 * { re: <real>, im: <imaginary> }
 * { arg: <angle>, abs: <radius> }
 * { phi: <angle>, r: <radius> }
 *
 * Array / Vector form
 * [ real, imaginary ]
 *
 * Double form
 * 99.3 - Single double value
 *
 * String form
 * '23.1337' - Simple real number
 * '15+3i' - a simple complex number
 * '3-i' - a simple complex number
 *
 * Example:
 *
 * var c = new Complex('99.3+8i');
 * c.mul({r: 3, i: 9}).div(4.9).sub(3, 2);
 *
 */
export class Complex {
  re: number;
  im: number;

  constructor(a: AValue, b?: BValue);

  /**
   * Calculates the sign of a complex number, which is a normalized complex
   *
   */
  sign(): Complex;
  /**
   * Adds two complex numbers
   *
   */
  add(a: AValue, b?: BValue): Complex;
  /**
   * Subtracts two complex numbers
   *
   */
  sub(a: AValue, b?: BValue): Complex;
  /**
   * Multiplies two complex numbers
   *
   */
  mul(a: AValue, b?: BValue): Complex;
  /**
   * Divides two complex numbers
   *
   */
  div(a: AValue, b?: BValue): Complex;
  /**
   * Calculate the power of two complex numbers
   *
   */
  pow(a: AValue, b?: BValue): Complex;
  /**
   * Calculate the complex square root
   *
   */
  sqrt(): Complex;
  /**
   * Calculate the complex exponent
   *
   */
  exp(): Complex;
  /**
   * Calculate the complex exponent and subtracts one.
   *
   * This may be more accurate than `Complex(x).exp().sub(1)` if
   * `x` is small.
   *
   */
  expm1(): Complex;
  /**
   * Calculate the natural log
   *
   */
  log(): Complex;
  /**
   * Calculate the magnitude of the complex number
   *
   */
  abs(): number;
  /**
   * Calculate the angle of the complex number
   *
   */
  arg(): number;
  /**
   * Calculate the sine of the complex number
   *
   */
  sin(): Complex;
  /**
   * Calculate the cosine
   *
   */
  cos(): Complex;
  /**
   * Calculate the tangent
   *
   */
  tan(): Complex;
  /**
   * Calculate the cotangent
   *
   */
  cot(): Complex;
  /**
   * Calculate the secant
   *
   */
  sec(): Complex;
  /**
   * Calculate the cosecans
   *
   */
  csc(): Complex;
  /**
   * Calculate the complex arcus sinus
   *
   */
  asin(): Complex;
  /**
   * Calculate the complex arcus cosinus
   *
   */
  acos(): Complex;
  /**
   * Calculate the complex arcus tangent
   *
   */
  atan(): Complex;
  /**
   * Calculate the complex arcus cotangent
   *
   */
  acot(): Complex;
  /**
   * Calculate the complex arcus secant
   *
   */
  asec(): Complex;
  /**
   * Calculate the complex arcus cosecans
   *
   */
  acsc(): Complex;
  /**
   * Calculate the complex sinh
   *
   */
  sinh(): Complex;
  /**
   * Calculate the complex cosh
   *
   */
  cosh(): Complex;
  /**
   * Calculate the complex tanh
   *
   */
  tanh(): Complex;
  /**
   * Calculate the complex coth
   *
   */
  coth(): Complex;
  /**
   * Calculate the complex coth
   *
   */
  csch(): Complex;
  /**
   * Calculate the complex sech
   *
   */
  sech(): Complex;
  /**
   * Calculate the complex asinh
   *
   */
  asinh(): Complex;
  /**
   * Calculate the complex acosh
   *
   */
  acosh(): Complex;
  /**
   * Calculate the complex atanh
   *
   */
  atanh(): Complex;
  /**
   * Calculate the complex acoth
   *
   */
  acoth(): Complex;
  /**
   * Calculate the complex acsch
   *
   */
  acsch(): Complex;
  /**
   * Calculate the complex asech
   *
   */
  asech(): Complex;
  /**
   * Calculate the complex inverse 1/z
   *
   */
  inverse(): Complex;
  /**
   * Returns the complex conjugate
   *
   */
  conjugate(): Complex;
  /**
   * Gets the negated complex number
   *
   */
  neg(): Complex;
  /**
   * Ceils the actual complex number
   *
   */
  ceil(places: number): Complex;
  /**
   * Floors the actual complex number
   *
   */
  floor(places: number): Complex;
  /**
   * Ceils the actual complex number
   *
   */
  round(places: number): Complex;
  /**
   * Compares two complex numbers
   *
   * **Note:** new Complex(Infinity).equals(Infinity) === false
   *
   */
  equals(a: AValue, b?: BValue): boolean;
  /**
   * Clones the actual object
   *
   */
  clone(): Complex;
  /**
   * Gets a string of the actual complex number
   *
   */
  toString(): string;
  /**
   * Returns the actual number as a vector
   *
   */
  toVector(): number[];
  /**
   * Returns the actual real value of the current object
   *
   * @returns {number|null}
   */
  valueOf(): number | null;
  /**
   * Determines whether a complex number is not on the Riemann sphere.
   *
   */
  isNaN(): boolean;
  /**
   * Determines whether or not a complex number is at the zero pole of the
   * Riemann sphere.
   *
   */
  isZero(): boolean;
  /**
   * Determines whether a complex number is not at the infinity pole of the
   * Riemann sphere.
   *
   */
  isFinite(): boolean;
  /**
   * Determines whether or not a complex number is at the infinity pole of the
   * Riemann sphere.
   *
   */
  isInfinite(): boolean;

  static ZERO: Complex;
  static ONE: Complex;
  static I: Complex;
  static PI: Complex;
  static E: Complex;
  static INFINITY: Complex;
  static NAN: Complex;
  static EPSILON: number;
}
