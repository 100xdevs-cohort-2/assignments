# typed-function

[![Version](https://img.shields.io/npm/v/typed-function.svg)](https://www.npmjs.com/package/typed-function)
[![Downloads](https://img.shields.io/npm/dm/typed-function.svg)](https://www.npmjs.com/package/typed-function)
[![Build Status](https://github.com/josdejong/typed-function/workflows/Node.js%20CI/badge.svg)](https://github.com/josdejong/typed-function/actions)

Move type checking logic and type conversions outside of your function in a
flexible, organized way. Automatically throw informative errors in case of
wrong input arguments.


## Features

typed-function has the following features:

- Runtime type-checking of input arguments.
- Automatic type conversion of arguments.
- Compose typed functions with multiple signatures.
- Supports union types, any type, and variable arguments.
- Detailed error messaging.

Supported environments: node.js, Chrome, Firefox, Safari, Opera, IE11+.


## Why?

In JavaScript, functions can be called with any number and any type of arguments.
When writing a function, the easiest way is to just assume that the function
will be called with the correct input. This leaves the function's behavior on
invalid input undefined. The function may throw some error, or worse,
it may silently fail or return wrong results. Typical errors are
*TypeError: undefined is not a function* or *TypeError: Cannot call method
'request' of undefined*. These error messages are not very helpful. It can be
hard to debug them, as they can be the result of a series of nested function
calls manipulating and propagating invalid or incomplete data.

Often, JavaScript developers add some basic type checking where it is important,
using checks like `typeof fn === 'function'`, `date instanceof Date`, and
`Array.isArray(arr)`. For functions supporting multiple signatures,
the type checking logic can grow quite a bit, and distract from the actual
logic of the function.

For functions dealing with a considerable amount of type checking and conversion
logic, or functions facing a public API, it can be very useful to use the
`typed-function` module to handle the type-checking logic. This way:

-   Users of the function get useful and consistent error messages when using
    the function wrongly.
-   The function cannot silently fail or silently give wrong results due to
    invalid input.
-   Correct type of input is assured inside the function. The function's code
    becomes easier to understand as it only contains the actual function logic.
    Lower level utility functions called by the type-checked function can
    possibly be kept simpler as they don't need to do additional type checking.

It's important however not to *overuse* type checking:

-   Locking down the type of input that a function accepts can unnecessarily
    limit its flexibility. Keep functions as flexible and forgiving as possible,
    follow the
    [robustness principle](http://en.wikipedia.org/wiki/Robustness_principle)
    here: "be liberal in what you accept and conservative in what you send"
    (Postel's law).
-   There is no need to apply type checking to *all* functions. It may be
    enough to apply type checking to one tier of public facing functions.
-   There is a performance penalty involved for all type checking, so applying
    it everywhere can unnecessarily worsen the performance.


## Load

Install via npm:

    npm install typed-function


## Usage

Here are some usage examples. More examples are available in the
[/examples](/examples) folder.

```js
import typed from 'typed-function'

// create a typed function
var fn1 = typed({
  'number, string': function (a, b) {
    return 'a is a number, b is a string';
  }
});

// create a typed function with multiple types per argument (type union)
var fn2 = typed({
  'string, number | boolean': function (a, b) {
    return 'a is a string, b is a number or a boolean';
  }
});

// create a typed function with any type argument
var fn3 = typed({
  'string, any': function (a, b) {
    return 'a is a string, b can be anything';
  }
});

// create a typed function with multiple signatures
var fn4 = typed({
  'number': function (a) {
    return 'a is a number';
  },
  'number, boolean': function (a, b) {
    return 'a is a number, b is a boolean';
  },
  'number, number': function (a, b) {
    return 'a is a number, b is a number';
  }
});

// create a typed function from a plain function with signature
function fnPlain (a, b) {
  return 'a is a number, b is a string';
}

fnPlain.signature = 'number, string';
var fn5 = typed(fnPlain);

// use the functions
console.log(fn1(2, 'foo'));      // outputs 'a is a number, b is a string'
console.log(fn4(2));             // outputs 'a is a number'

// calling the function with a non-supported type signature will throw an error
try {
  fn2('hello', 'world');
} catch (err) {
  console.log(err.toString());
  // outputs:  TypeError: Unexpected type of argument.
  //           Expected: number or boolean, actual: string, index: 1.
}
```


## Types

typed-function has the following built-in types:

- `null`
- `boolean`
- `number`
- `string`
- `Function`
- `Array`
- `Date`
- `RegExp`
- `Object`

The following type expressions are supported:

- Multiple arguments: `string, number, Function`
- Union types: `number | string`
- Variable arguments: `...number`
- Any type: `any`

### Dispatch

When a typed function is called, an implementation with a matching signature
is called, where conversions may be applied to actual arguments in order to
find a match.

Among all matching signatures, the one to execute is chosen by the following
preferences, in order of priority:

* one that does not have an `...any` parameter
* one with the fewest `any` parameters
* one that does not use conversions to match a rest parameter
* one with the fewest conversions needed to match overall
* one with no rest parameter
* If there's a rest parameter, the one with the most non-rest parameters
* The one with the largest number of preferred parameters
* The one with the earliest preferred parameter

When this process gets to the point of comparing individual parameters,
the preference between parameters is determined by the following, in
priority order:

* All specific types are preferred to the 'any' type
* All directly matching types are preferred to conversions
* Types earlier in the list of known types are preferred
* Among conversions, ones earlier in the list are preferred

If none of these aspects produces a preference, then in those contexts in
which Array.sort is stable, the order implementations were listed when
the typed-function was created breaks the tie. Otherwise the dispatch may
select any of the "tied" implementations.

## API

### Construction

```
typed([name: string], ...Object.<string, function>|function)
```
A typed function can be constructed from an optional name and any number of
(additional) arguments that supply the implementations for various
signatures. Each of these further arguments must be one of the following:

-   An object with one or multiple signatures, i.e. a plain object
    with string keys, each of which names a signature, and functions as
    the values of those keys.

-   A previously constructed typed function, in which case all of its
    signatures and corresponding implementations are merged into the new
    typed function.

-   A plain function with a `signature` property whose value is a string
    giving that function's signature.

The name, if specified, must be the first argument. If not specified, the new
typed-function's name is inherited from the arguments it is composed from,
as long as any that have names agree with one another.

If the same signature is specified by the collection of arguments more than
once with different implementations, an error will be thrown.

#### Properties and methods of a typed function `fn`

-   `fn.name : string`

    The name of the typed function, if one was assigned at creation; otherwise,
    the value of this property is the empty string.

-   `fn.signatures : Object.<string, function>`

    The value of this property is a plain object. Its keys are the string
    signatures on which this typed function `fn` is directly defined
    (without conversions). The value for each key is the function `fn`
    will call when its arguments match that signature. This property may
    differ from the similar object used to create the typed function,
    in that the originally provided signatures are parsed into a canonical,
    more usable form: union types are split into their constituents where
    possible, whitespace in the signature strings is removed, etc.

-   `fn.toString() : string`

    Returns human-readable code showing exactly what the function does.
    Mostly for debugging purposes.

### Methods of the typed package

-   `typed.convert(value: *, type: string) : *`

    Convert a value to another type. Only applicable when conversions have
    been added with `typed.addConversion()` and/or `typed.addConversions()`
    (see below in the method list).
    Example:
    
    ```js
    typed.addConversion({
      from: 'number',
      to: 'string',
      convert: function (x) {
        return +x;
      }
    });
    
    var str = typed.convert(2.3, 'string'); // '2.3' 
    ```

-   `typed.create() : function`

    Create a new, isolated instance of typed-function. Example:

    ```js
    import typed from 'typed-function.mjs';  // default instance
    const typed2 = typed.create();           // a second instance
    ```

    This would allow you, for example, to have two different type hierarchies
    for different purposes.

-   `typed.resolve(fn: typed-function, argList: Array<any>): signature-object`

    Find the specific signature and implementation that the typed function
    `fn` will call if invoked on the argument list `argList`. Returns null if
    there is no matching signature. The returned signature object has
    properties `params`, `test`, `fn`, and `implementation`. The difference
    between the last two properties is that `fn` is the original function
    supplied at typed-function creation time, whereas `implementation` is
    ready to be called on this specific argList, in that it will first
    perform any necessary conversions and gather arguments up into "rest"
    parameters as needed.

    Thus, in the case that arguments `a0`,`a1`,`a2` (say) do match one of
    the signatures of this typed function `fn`, then `fn(a0, a1, a2)`
    (in a context in which `this` will be, say, `t`) does exactly the same
    thing as

    `typed.resolve(fn, [a0,a1,a2]).implementation.apply(t, [a0,a1,a2])`.

    But `resolve` is useful if you want to interpose any other operation
    (such as bookkeeping or additional custom error checking) between
    signature selection and execution dispatch.

-   `typed.findSignature(fn: typed-function, signature: string | Array, options: object) : signature-object`

    Find the signature object (as returned by `typed.resolve` above), but
    based on the specification of a signature (given either as a
    comma-separated string of parameter types, or an Array of strings giving
    the parameter types), rather than based on an example argument list.

    The optional third argument, is a plain object giving options controlling
    the search. Currently, the only implemented option is `exact`, which if
    true (defaults to false), limits the search to exact type matches,
    i.e. signatures for which no conversion functions need to be called in
    order to apply the function.

    Throws an error if the signature is not found.

-   `typed.find(fn: typed-function, signature: string | Array, options: object) : function`

    Convenience method that returns just the implementation from the
    signature object produced by `typed.findSignature(fn, signature, options)`.
    
    For example:
    
    ```js
    var fn = typed(...);
    var f = typed.find(fn, ['number', 'string']);
    var f = typed.find(fn, 'number, string', 'exact');
    ```

-   `typed.referTo(...string, callback: (resolvedFunctions: ...function) => function)`

    Within the definition of a typed-function, resolve references to one or
    multiple signatures of the typed-function itself. This looks like:

    ```
    typed.referTo(signature1, signature2, ..., function callback(fn1, fn2, ...) {
      // ... use the resolved signatures fn1, fn2, ...
    });
    ```

    Example usage:

    ```js
    const fn = typed({
      'number': function (value) {
        return 'Input was a number: ' + value;
      },
      'boolean': function (value) {
        return 'Input was a boolean: ' + value;
      },
      'string': typed.referTo('number', 'boolean', (fnNumber, fnBoolean) => {
        return function fnString(value) {
          // here we use the signatures of the typed-function directly:
          if (value === 'true') {
            return fnBoolean(true);
          }
          if (value === 'false') {
            return fnBoolean(false);
          }
          return fnNumber(parseFloat(value));
        }
      })
    });
    ```

    See also `typed.referToSelf(callback)`.

-   `typed.referToSelf(callback: (self) => function)`

    Refer to the typed-function itself. This can be used for recursive calls.
    Calls to self will incur the overhead of fully re-dispatching the
    typed-function. If the signature that needs to be invoked is already known,
    you can use `typed.referTo(...)` instead for better performance.

    > In `typed-function@2` it was possible to use `this(...)` to reference the typed-function itself. In `typed-function@v3`, such usage is replaced with the `typed.referTo(...)` and `typed.referToSelf(...)` methods. Typed-functions are unbound in `typed-function@v3` and can be bound to another context if needed.

-   `typed.isTypedFunction(entity: any): boolean`

    Return true if the given entity appears to be a typed function
    (created by any instance of typed-function), and false otherwise. It
    tests for the presence of a particular property on the entity,
    and so could be deceived by another object with the same property, although
    the property is chosen so that's unlikely to happen unintentionally.

-   `typed.addType(type: {name: string, test: function, [, beforeObjectTest=true]): void`

    Add a new type. A type object contains a name and a test function.
    The order of the types determines in which order function arguments are 
    type-checked, so for performance it's important to put the most used types 
    first. Also, if one type is contained in another, it should likely precede
    it in the type order so that it won't be masked in type testing.
    
    Example:
    
    ```js
    function Person(...) {
      ...
    }
    
    Person.prototype.isPerson = true;

    typed.addType({
      name: 'Person',
      test: function (x) {
        return x && x.isPerson === true;
      }
    });
    ```

    By default, the new type will be inserted before the `Object` test
    because the `Object` test also matches arrays and classes and hence
    `typed-function` would never reach the new type. When `beforeObjectTest`
    is `false`, the new type will be added at the end of all tests.

-   `typed.addTypes(types: TypeDef[] [, before = 'any']): void`

    Adds an list of new types. Each entry of the `types` array is an object
    like the `type` argument to `typed.addType`. The optional `before` argument
    is similar to `typed.addType` as well, except it should be the name of an
    arbitrary type that has already been added (rather than just a boolean flag)

-   `typed.clear(): void`

    Removes all types and conversions from the typed instance. Note that any
    typed-functions created before a call to `clear` will still operate, but
    they may prouce unintelligible messages in case of type mismatch errors.

-   `typed.addConversion(conversion: {from: string, to: string, convert: function}) : void`

    Add a new conversion.
    
    ```js
    typed.addConversion({
      from: 'boolean',
      to: 'number',
      convert: function (x) {
        return +x;
    });
    ```

    Note that any typed functions created before this conversion is added will
    not have their arguments undergo this new conversion automatically, so it is
    best to add all of your desired automatic conversions before defining any
    typed functions.

-   `typed.addConversions(conversions: ConversionDef[]): void`

    Convenience method that adds a list of conversions. Each element in the
    `conversions` array should be an object like the `conversion` argument of
    `typed.addConversion`.

-   `typed.removeConversion(conversion: ConversionDef): void`

    Removes a single existing conversion. An error is thrown if there is no
    conversion from and to the given types with a strictly equal convert
    function as supplied in this call.

-   `typed.clearConversions(): void`

    Removes all conversions from the typed instance (leaving the types alone).

-   `typed.createError(name: string, args: Array.<any>, signatures: Array.<Signature>): TypeError`

    Generates a custom error object reporting the problem with calling
    the typed function of the given `name` with the given `signatures` on the
    actual arguments `args`. Note the error object has an extra property `data`
    giving the details of the problem. This method is primarily useful in
    writing your own handler for a type mismatch (see the `typed.onMismatch`
    property below), in case you have tried to recover but end up deciding
    you want to throw the error that the default handler would have.

### Properties

-   `typed.onMismatch: function`

    The handler called when a typed-function call fails to match with any
    of its signatures. The handler is called with three arguments: the name
    of the typed function being called, the actual argument list, and an array
    of the signatures for the typed function being called. (Each signature is
    an object with property 'signature' giving the actual signature and\
    property 'fn' giving the raw function for that signature.) The default
    value of `onMismatch` is `typed.throwMismatchError`.

    This can be useful if you have a collection of functions and have common
    behavior for any invalid call. For example, you might just want to log
    the problem and continue:

    ```
    const myErrorLog = [];
    typed.onMismatch = (name, args, signatures) => {
      myErrorLog.push(`Invalid call of ${name} with ${args.length} arguments.`);
      return null;
    };
    typed.sqrt(9); // assuming definition as above, will return 3
    typed.sqrt([]); // no error will be thrown; will return null.
    console.log(`There have been ${myErrorLog.length} invalid calls.`)
    ```

    Note that there is only one `onMismatch` handler at a time; assigning a
    new value discards the previous handler. To restore the default behavior,
    just assign `typed.onMismatch = typed.throwMismatchError`.

    Finally note that this handler fires whenever _any_ typed function call
    does not match any of its signatures. You can in effect define such a
    "handler" for a _single_ typed function by simply specifying an
    implementation for the `...` signature:

    ```
    const lenOrNothing = typed({
      string: s => s.length,
      '...': () => 0
    });
    console.log(lenOrNothing('Hello, world!')) // Output: 13
    console.log(lenOrNothing(57, 'varieties')) // Output: 0
    ```

-   `typed.warnAgainstDeprecatedThis: boolean`

    Since `typed-function` v3, self-referencing a typed function using
    `this(...)` or `this.signatures` has been deprecated and replaced with
    the functions `typed.referTo` and `typed.referToSelf`. By default, all
    function bodies will be scanned against this deprecated usage pattern and
    an error will be thrown when encountered. To disable this validation step,
    change this option to `false`.

### Recursion

The `this` keyword can be used to self-reference the typed-function:

```js
var sqrt = typed({
  'number': function (value) {
    return Math.sqrt(value);
  },
  'string': function (value) {
    // on the following line we self reference the typed-function using "this"
    return this(parseInt(value, 10));
  }
});

// use the typed function
console.log(sqrt('9')); // output: 3
```


## Roadmap

### Version 4

- Extend function signatures:
  - Optional arguments like `'[number], array'` or like `number=, array`
  - Nullable arguments like `'?Object'`
- Allow conversions to fail (for example string to number is not always
  possible). Call this `fallible` or `optional`?

### Version 5

- Extend function signatures:
  - Constants like `'"linear" | "cubic"'`, `'0..10'`, etc.
  - Object definitions like `'{name: string, age: number}'`
  - Object definitions like `'Object.<string, Person>'`
  - Array definitions like `'Array.<Person>'`
- Improve performance of both generating a typed function as well as
  the performance and memory footprint of a typed function.


## Test

To test the library, run:

    npm test


## Code style and linting

The library is using the [standardjs](https://standardjs.com/) coding style.

To test the code style, run:

    npm run lint

To automatically fix most of the styling issues, run:

    npm run format


## Publish

1. Describe the changes in `HISTORY.md`
2. Increase the version number in `package.json`
3. Test and build:
    ```
    npm install
    npm run build-and-test
    ```
4. Verify whether the generated output works correctly by opening
   `./test/browserEsmBuild.html` in your browser. 
5. Commit the changes
6. Merge `develop` into `master`, and push `master`
7. Create a git tag, and push this
8. publish the library:
    ```
    npm publish
    ```
