function String(str){
    console.log("The string is: "+ str);
    console.log("The length is: "+ str.length);
}
// String("Hashir");

function StringIndex(str, target){
    console.log("The string is: "+ str);
    console.log("The index of target is at: "+ str.indexOf(target));
}
// StringIndex("Hashir Ahmed KB","KB");

function lastIndex(str,target){
    console.log("The string is: "+ str);
    console.log("The last index of string is: "+ str.lastIndexOf(target));
}
// lastIndex("Hashir Ahmed KB","KB");

function stringSlice(str, start, end){
    console.log("The string is: "+ str);
    console.log("After slice:"+ str.slice(start,end));
}
// stringSlice("hashir ahmed k b", 5, 10);

function getSubstring(str, start, end){
    console.log("The string is: "+ str);
    console.log("After slice:"+ str.substring(start,end));
}
// getSubstring("hashir ahmed k b", 5, 10);

function replceString(str, target, replacement){
    console.log("The string is: "+ str);
    console.log("After replacement: "+ str.replace(target,replacement));
}
// replceString("hashir ahmed k b", "ahmed", "Muhammed");

function splitString(str, separator){
    console.log("The string is: "+ str);
    console.log("After split: "+ str.split(" "));
}
// splitString("hashir ahmed");

function trimString(str){
    console.log("The string is: "+ str);
    console.log("After trim: "+ str.trim());
}
// trimString("          hashir       ");

function lowerString(str){
    console.log("The string is: "+ str);
    console.log("After lowering: "+ str.toLowerCase());
}
// lowerString("HASHIRAHMED K B");

function upperString(str){
    console.log("The string is: "+ str);
    console.log("After lowering: "+ str.toUpperCase());
}
// upperString("hashirahmed k b");

// Array Operations.
function pushArray(arr, input){
    console.log("Array befor push: "+arr);
    arr.push(input);
    console.log("Array after push: "+arr);
}
// pushArray([1,2,3,], 4);

function popArray(arr, input){
    console.log("Array befor pop: "+arr);
    arr.pop(input);
    console.log("Array after pop: "+arr);
}
// popArray([1,2,3,], 2);

function shiftArray(arr){
    console.log("Array befor shift: "+arr);
    arr.shift();
    console.log("Array after shift: "+arr);
}
// shiftArray([1,2,3,]);

function UnShiftArray(arr, element){
    console.log("Array before unshift: "+arr);
    arr.unshift(element);
    console.log("Array after unshift: "+arr);
}
// UnShiftArray([1,2,3,],4);

function concatArray(arr1, arr2){
    console.log("Array befor concat: "+arr1);
    console.log("Array after concat: "+arr1.concat(arr2));
}
// concatArray([1,2,3,], [4,5,6]);

function forEachArray(arr){
    console.log("Array: "+arr);
    arr.forEach(function(item, index){
        console.log("Index: "+index, "Item: "+item);
    })
}
// forEachArray([1,2,3,4]);

function mapArray(arr){
    console.log("Original Array: "+arr);
    let newArr = arr.map(function(item){
        return item*2;
    })
    console.log("Array after mapping: "+newArr);
}
// mapArray([1,2,3,4]);

function filterArray(arr){
    console.log("Original Array: "+arr);
    let newArr = arr.filter(function(item){
        return item > 6;
    })
    console.log("New filterd Array: "+newArr);
}
// filterArray([1,2,3,4,9,8,7]);

function foundArray(arr){
    console.log("Original Array: "+arr);
    let newArr = arr.find(function(item){
        return item > 3;
    })
    console.log("New filterd Array: "+newArr);
}
// foundArray([1,2,3,4,7]);

function sortExample(arr) {
    console.log("Original Array:", arr);
  
    arr.sort(function(a, b) {
      return a - b;
    });
    console.log("After sort:", arr);
  }
  sortExample([5, 2, 3, 4, 1]);