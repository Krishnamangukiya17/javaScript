
// var multiplication = function (one, two, three) {

//     var result = one*two*three;

//     return `Multiplication is: ${result}`;

// }

// var result = multiplication(2, 2, 2 );

// console.log(result);


console.log("(1) Write function expression to get square of the number ex --> 5,6,25,100");

var square= function (five) {
    var result=five*five;
    return`square of 5 is ==>> ${result}` ;
}
var result=square(5);
console.log( result);

var square= function (six) {
    var result=six*six;
    return`square of 6 is ==>> ${result}` ;
}
var result=square(6);
console.log( result);

var square= function (twentyFive) {
    var result=twentyFive*twentyFive;
    return`square of 25 is ==>> ${result}` ;
}
var result=square(25);
console.log( result);

var square= function (hundrad) {
    var result=hundrad*hundrad;
    return`square of 100 is ==>> ${result}` ;
}
var result=square(100);
console.log( result);
console.log("----------------------------------------------");
console.log("(2) check and log type of function -->>");
var pin= square;
console.log("Type of square is ==>>", typeof pin );

console.log("----------------------------------------------");
console.log("(3) Write a FE to get the area of rectangle plot [length= 499 and width= 917] -->>");


var square= function (num) {
    var result=499*917;
    return`square of area of plot is ==>> ${result}` ;
}
var result=square(499*917);
console.log( result);

console.log("----------------------------------------------");
console.log("(4) write a FE with two args and should swap the passed value and log on console before swap and after swap values inside  function itself-->>");
console.log(" before swap");
var A= "virat";
var B ="Anushka";
console.log("A:",A,"B:",B,);
console.log(" After swap");
 var temp = B;
 A=B;
A=temp;
console.log("A:",A,"B:",B,);
console.log("(2)");
console.log(" Before swap");
var A= "2000";
var B ="1000";
console.log("A:",A,"B:",B,);
console.log(" After swap");
 var temp = A;
 A=B;
B=temp;
console.log("A:",A,"B:",B,);

console.log("----------------------------------------------");
console.log("(5)write a FE whichcan problem the below steps for string JS the most populor language of internet-->>");
console.log("A)find the total character available in the string:");
var greet ="JS the most populor language of internet";
var myStringLenghth=greet.length;
console.log(myStringLenghth);

console.log("B)find character at index 7");
var index= greet.charAt(7);;
console.log(index);

console.log("C)find character at index 11");
var index7= greet.charAt(11);;
console.log(index7);

console.log("D)find  the last character at using lenght");
var lastCharacter= greet.charAt(greet.length-1);
console.log(lastCharacter);

console.log("E)find  the very first character ");
var firstCharacter= greet.charAt(1);
console.log(firstCharacter);

console.log("F)find the total number of words of the string and calculate squre of");
var word= greet.split(" ");
console.log(word.length);
console.log("calculate squre of word lenght : ",  word.length*word.length);












