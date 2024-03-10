/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement ( array ) {
    
    largest = array [ 0 ];

    for ( var i = 1; i < array.length; i++ ) {

        if ( array [ i ] > largest ) {
            largest = array [ i ];
        }

    }

    return largest;
}

var array = [ 15, 78, 91, 13, 35, 43 ];
var result = findLargestElement ( array );

console.log ( "The largest element is: " + result );