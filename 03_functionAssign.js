

console.log("----------Function display----------");
console.log("------------------------------------");
console.log("1st function with no Argument and no return type");
console.log("2nd function with no Argument and no return type");
console.log("------Function PersonalDetails------");
console.log("------------------------------------");
var firstName = "krishna";
var lastName ="Mangukiya";
var age ="22";

console.log("Firt Name:",firstName);
console.log("Last Name:",lastName);
console.log("Age:",age);

console.log("--------Function swapVariable-------");
console.log("------------------------------------");
console.log("---------------(1)------------------");
console.log(" --Before swap--");

var A= "virat";
var B ="Anushka";
console.log("A:",A,"B:",B,);
console.log(" ---After swap--");
 var temp = B;
 A=B;
B=temp;
console.log("A:",A,"B:",B,);
console.log("---------------(2)------------------");
console.log(" --Before swap--");
var A= "2000";
var B ="3000";
console.log("A:",A,"B:",B,);
console.log(" ---After swap--");
 var temp = A;
 A=B;
B=temp;
console.log("A:",A,"B:",B,);


console.log("--------Function addVariables-------");
console.log("------------------------------------");
var a =10.23;
var b =600;
var c=40;
function addition(a,b,c) {
    var result  = a+b+c ;
    return result;
}


var returnValue = addition(10.23, 600,40);
console.log("Addition of number is: ", returnValue);



console.log(" before function call");
show();
console.log("after function");
show();


var num1=100;
var num2=200;

function swapVariable (){
 
}
swapVariable


function addition(num1, num2) {
    var result  = num1 + num2;// result = 300
    return result;
}var returnValue = addition(100, 200);
console.log("Addition of number is: ", returnValue);
var returnResult = addition(890.400, 600.3456);
console.log("Addition of number is: ", returnResult);