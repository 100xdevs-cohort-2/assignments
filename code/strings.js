

function findLastIndexOf(str,target){
    console.log("Index",str.indexOf(target))
}

findLastIndexOf("Hello World","World")

function getSlice(str,start,end){
    console.log(str.slice(start,end))
}

getSlice("Hello World",2,5)

function getSubstring(str,start,length){
    console.log(str.substr(start,length))
}

getSubstring("Hello World",2,5)

function replaceString(str,target,replacement){
    console.log(str.replace(target,replacement))
}

replaceString("Hello World","World","Shiv")

function splitString(str,separator){
    console.log(str.split(separator))
}

splitString("Hello World"," ")

function trimString(str){
    console.log("Original",str)
    console.log(str.trim())
}

trimString("     Hello World       ")

function toUpper(str){
  console.log(str.toUpperCase())
}

toUpper("Hello World")

function toLower(str){
    console.log(str.toLowerCase())
}

toLower("Hello World")


// SPLIT OP
splitString("Hello,World",",")