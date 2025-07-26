/**
 * Strings Methods ->
 * length
 * indexOf
 * lastIndexOf
 * slice -> (startIdx , uptolastIdx)
 * substr -> (startIdx , length upto which we want substr)
 * replace
 * split
 * trim
 * toUpperCase
 * toLoweCase
 */


function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

/**
 * Number Methods ->
 * parseInt -> String(Sometimes Anything also will work) to Integer
 * parseFloat
 */

/**
 * Array Methods ->
 * push
 * pop
 * Shift
 * Unshift
 * concat
 * foreach
 */

/**
 * Date Methods ->
 * Declaration , const currentDate - new Date();
 * getDate()
 * getMonth() -> Month are zero indexed so we need to add one
 * getFullYear() -> Return current year
 * getYear() -> Add + 1900 
 * getHours()
 * getMinutes()
 * getSeconds()
 * getTime() -> Time in milliseconds since 1970
 * In a simmilar way we can also do a set for the above methods
 */

/**
 * JSON Methods ->
 * JSON.parse
 * JSON.stringify
 */

/**
 * Math Functions ->
 * Math.round
 * Math.ceil
 * Math.floor
 * Math.random
 * Math.max
 * Math.min
 * Math.pow
 * Math.sqrt
 */

/**
 * Object Methods ->
 * Object.keys
 * Object.values
 * Object.entries
 * obj.hasOwnProperty("property")
 * Object.assign({},oldObj,{newProperty : "newValue"})
 */