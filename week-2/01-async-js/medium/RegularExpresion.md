# Regular Expressions in JavaScript

Regular expressions (regex or regexp) are powerful tools for pattern matching in strings. In JavaScript, you can use the `RegExp` object to work with regular expressions. This guide provides an overview of common regex concepts and demonstrates how to use them in JavaScript.

## Basic Syntax

A regular expression is defined using the `RegExp` constructor or a literal notation with forward slashes (`/`).

```javascript
// Using RegExp constructor
let regex = new RegExp('pattern');

// Using literal notation
let regexLiteral = /pattern/;
```
## Flags
Flags can be added to the regex to modify its behavior. Common flags include:

- i: Case-insensitive matching
- g: Global matching (find all matches)
- m: Multi-line matching
### Example:

```javascript
let caseInsensitiveRegex = /pattern/i;
let globalRegex = /pattern/g;
let multiLineRegex = /pattern/m;

```
## Metacharacters
- .: Matches any character except for a newline.
- ^: Anchors the regex at the beginning of the string.
- "$": Anchors the regex at the end of the string.

### Example:
```javascript
let anyCharRegex = /a.y/; // Matches "aby", "acy", etc.
let startsWithRegex = /^start/; // Matches if the string starts with "start"
let endsWithRegex = /end$/; // Matches if the string ends with "end"

```

## Character Classes
- []: Matches any one of the characters inside the brackets.
- [^]: Matches any character not listed inside the brackets.
- -: Represents a range of characters.
### Example:

```javascript
let digitRegex = /[0-9]/; // Matches any digit
let vowelRegex = /[aeiou]/i; // Matches any vowel (case-insensitive)
let notDigitRegex = /[^0-9]/; // Matches any non-digit character
```

## Quantifiers

- *: Matches 0 or more occurrences of the preceding character.
- +: Matches 1 or more occurrences of the preceding character.
- ?: Matches 0 or 1 occurrence of the preceding character.
- {n}: Matches exactly n occurrences.
- {n,}: Matches n or more occurrences.
- {n,m}: Matches between n and m occurrences.

### Example:

```javascript
let zeroOrMoreRegex = /ab*c/; // Matches "ac", "abc", "abbc", etc.
let oneOrMoreRegex = /ab+c/; // Matches "abc", "abbc", etc.
let optionalRegex = /ab?c/; // Matches "ac" and "abc"
let specificOccurrencesRegex = /a{2}/; // Matches "aa"
let rangeOccurrencesRegex = /a{2,4}/; // Matches "aa", "aaa", and "aaaa"

```

## Examples
## Validating Email Addresses

```javascript
let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let isValidEmail = emailRegex.test('example@email.com');
console.log(isValidEmail); // true or false

```

## Extracting Digits from a String

```javascript
let extractDigitsRegex = /\d+/g;
let str = 'The price is $45.99';
let digitsArray = str.match(extractDigitsRegex);
console.log(digitsArray); // ['45', '99']

```

## Conclusion
Regular expressions provide a flexible and powerful way to work with string patterns in JavaScript. Understanding the basic syntax and commonly used metacharacters, character classes, and quantifiers will enable you to create effective regex patterns for various tasks.