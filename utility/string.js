/**
 * Accepts a character and returns whether that character is alphabet or not
 * @param {string} char a character
 * @returns {boolean}
 */
const isAlpha = (char) => {
    const ascii = char.charCodeAt(0);

    return (
        (ascii >= 65 && ascii <= 90)
        || (ascii >= 97 && ascii <= 122)
    );
};

/**
 * Accepts a character and returns whether that character is a number or not
 * @param {string} char a character
 * @returns {boolean}
 */
const isNumeric = (char) => {
    const ascii = char.charCodeAt(0);
    return (ascii >= 48 && ascii <= 57);
};

/**
 * Accepts a character and returns whether that character is alphanumeric or not
 * @param {string} char a character
 * @returns {boolean}
 */
const isAlphanumeric = (char) => {
    return isAlpha(char) || isNumeric(char);
};

// these are the all white space characters that we should check
// refer: https://developer.mozilla.org/en-US/docs/Glossary/Whitespace
// and also: https://en.wikipedia.org/wiki/Whitespace_character
const allWhiteSpaceCode = [
    "9", "10", "11", "12", "13", "32", "133", "160", "5760", "8192", "8193", "8194", "8195", "8196", "8197", "8198", "8199", "8200", "8201", "8202", "8232", "8233", "8239", "8287", "12288"
];

/**
 * Accepts a character and returns whether that character is whitespace or not [right now checking only for space, tab and line break]
 * @param {string} char a character
 * @returns {boolean}
 */
const isWhiteSpace = (char) => {
    const ascii = char.charCodeAt(0);
    return ((ascii === 32) || (ascii >= 9 && ascii <= 13));
};

/**
 * Returns a new string without whitespace
 * @param {string} str a string from which white space needs to be removed
 * @returns string
 */
const removeSpace = (str) => {
    return str.replace(/\s+/g, '');
};

module.exports = {
    isAlpha, 
    isAlphanumeric,
    isNumeric,
    isWhiteSpace,
    removeSpace
};
