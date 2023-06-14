


console.log("1.. function with no Argument and no return type");

function myname() {
    
}
myname();

function age() {
    
}
age();

console.log("2..Function PersonalDetails");
function PersonalDetails(firstName,lastName,collegeName) {
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`College name: ${collegeName}`);
   
}
PersonalDetails("Krishna","Mangukiya","Slims")

console.log("3.. Function swapVariable");


console.log(" --Before swap--");
function swapValue(virat,anushka) {
  console.log(` Virat : ${virat}, Anushka :${anushka}`); 
   
}
swapValue(1000,2000);

var A= "virat";
var B ="Anushka";
// console.log("A:",A,"B:",B,);
console.log(" ---After swap--");
 var temp = A;
 A=B;
B=temp;
console.log("A:",A,"B:",B,);

console.log("......................(2)....................");
console.log(" --Before swap--");
var A= "2000";
var B ="3000";
console.log("A:",A,"B:",B,);
console.log(" ---After swap--");
 var temp = A;
 A=B;
B=temp;
console.log("A:",A,"B:",B,);


console.log("4..Function addVariables");

var a =10.23;
var b =600;
var c=40;
function addition(a,b,c) {
    var result  = a+b+c ;
     return result
}
var returnValue = addition(10.23, 600,40);
console.log("Addition of number is: ", returnValue);

var a ="Hello";
var b ="Good";
var c="Morning";
function additionInvoke(a,b,c) {
    var result  = a+b+c ;
     return result
}
var returnValue = additionInvoke("Hello, ","Good ","Morning ");
console.log("Addition is: ", returnValue);

// console.log(" before function call");
// show();
// console.log("after function");
// show();


// var num1=100;
// var num2=200;

// function swapVariable (){
 
// }
// swapVariable


// function addition(num1, num2) {
//     var result  = num1 + num2;// result = 300
//     return result;
// }var returnValue = addition(100, 200);
// console.log("Addition of number is: ", returnValue);
// var returnResult = addition(890.400, 600.3456);
// console.log("Addition of number is: ", returnResult);