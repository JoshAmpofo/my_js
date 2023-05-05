var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

console.log(studlyCapVar);
console.log(properCamelCase);
console.log(titleCaseOver);

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);

// using single quotes to escape double quotes
var myStr = 'I am a "double quoted" string inside "double quotes".';
console.log(myStr);

//using backticks to escape quotes
var myStr = `'I am a "double quoted" string inside "double quotes".'`;
console.log(myStr); // backticks will print single quotes too

/****
  Diffrenet ways to escape characters
  \' single quote
  \" double quote
  \\ backslash
  \n newline
  \r carriage return
  \t tab
  \b backspace
  \f form feed
****/
var esc = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(esc);

// concatenating strings
var ourStr = "I come first. " + "I come second";
console.log(ourStr);

var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);

var myVar = "My name is ";
var myName = "Josh";
var mySent = " I am learning Javascript!";

var myStat = myVar + myName + "." + mySent;

console.log(myStat);

// finding the length of a string
var strLen = "Length of the string is: ";
strLen += myStat.length; //STRING.length is the method used to find length of a string 
console.log(strLen);