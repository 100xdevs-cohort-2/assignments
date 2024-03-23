// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getlength(str) {
  console.log("orginial str :", str);
  console.log("string length: ", str.length);
}
getlength("hello");

function indexof(str1, target) {
  console.log("Orginial str:", str1);
  console.log("index", str1.indexOf(target));
}
indexof("Helloworld", "world");

function lastindexof(string1, target) {
  console.log("orginial str:", string1);
  console.log("last index", string1.lastIndexOf(target));
}
lastindexof("helloworld", "world");

function getslice(string, start, end) {
  console.log("orginal string:", string);
  console.log("sliced string:", string.slice(start, end));
}
getslice("hello Word", 1, 5);
function getsubstring(string, start, end) {
  console.log("Orginal string:", string);
  console.log("substring :", string.substring(start, end));
}
getsubstring("helloworld", 1, 5);

function getreplace(string, target, replace) {
  console.log("orginial string",string)
  console.log("Replaced string ",string.replace(target, replace));
}
getreplace("helloworld ","world","program's");

// split

function getsplit(string,separator)
{
  console.log("orginal string ",string);
  console.log("split string",string.split(separator));
}
getsplit("gokil p"," ");

function gettrim(string)
{
  console.log("orginal string",string);
  console.log("after trim",string.trim());
}
gettrim("     helloworld      ");

function gettoupper(string)
{
  console.log("orginal string",string);
  console.log("After upper",string.toUpperCase());
}
gettoupper("helloworld");

function getLowercase(string)
{
  console.log("orginal string",string);
console.log("AfterLowercase",string.toLowerCase());
}
getLowercase("HELLOWORLD");
