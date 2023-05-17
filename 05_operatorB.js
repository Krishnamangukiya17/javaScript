

console.log("---------------------------1--------------------------");
console.log("Find the greatest number among tow number..");
console.log("------------------------------------------------------");
 var num1=10;
 var num2 =-10;
 var greaterNumber=function(num){
    var result= num1>=num2 ?`${10} is greater`:`${-10} is greater`;
    console.log(`Geatest number is ==>> ${result}` );
 }
 greaterNumber(10,-10);

 var num1=800;
 var num2 =899;
 var greaterNumber=function(num){
    var result= num1>=num2 ?`${800} is greater`:`${899} is greater`;
    console.log(`Geatest number is ==>> ${result}` );
 }
 greaterNumber(800,899);


console.log("---------------------------2--------------------------");
console.log("Check wheather the given number is EVEN or ODD..");
console.log("------------------------------------------------------");
var num1 = 29;
var result = num1%2 == 0 ? " EVEN number" : "ODD Number";
console.log(`Given number 29 is ==>> ${result}`);

var num2 =44;
var result= num2%2 == 0 ? "EVEN number" : "ODD number";
console.log(`Given number 44 is ==>> ${result}`);

var num3 =0;
var result= num3%2 == 0 ? "EVEN number" : "ODD number";
console.log(`Given number 0 is ==>> ${result}`);

var num4 =101;
var result= num4%2 == 0 ? "EVEN number" : "ODD number";
console.log(`Given number 101 is ==>> ${result}`);


console.log("---------------------------3---------------------------");
console.log("Check wheather the given number is EVEN or ODD length..");
console.log("-------------------------------------------------------");
 
var wordLength = function(JavaScript){
  var len = JavaScript.length;
  var result = len %2 == 0 ? "EVEN" : "ODD";
  return result;
}
var returnValue = wordLength("javaScript");
console.log(` Given word JavaScript has ==>> ${returnValue}`);

var wordLength = function(Developer){
    var len = Developer.length;
    var result = len %2 == 0 ? "EVEN" : "ODD";
    return result;
  }
  var returnValue = wordLength("Developer");
  console.log(` Given word Developer has ==>> ${returnValue}`);

  var wordLength = function(Google){
    var len = Google.length;
    var result = len %2 == 0 ? "EVEN" : "ODD";
    return result;
  }
  var returnValue = wordLength("Google");
  console.log(` Given word Google has ==>> ${returnValue}`);