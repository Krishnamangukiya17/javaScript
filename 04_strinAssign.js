

console.log("-----------------Assignment=A-----------------");
var tcs="TCS";
console.log("my dream company is ==>>", tcs);
console.log("----------------------------------------------");

var hobby1="cooking";
var hobby2= "Traveling";
var hobby3="Programing";
console.log("My Hobbies are ==>>", hobby1,hobby2,hobby3);
var hobby1="cooking";
var result= hobby1.length;
console.log("Total number of charecter oF --Hobby1-- is ==>>",result );
var hobby2="Traveling";
var result= hobby2.length;
console.log("Total number of charecter oF --Hobby2-- is ==>>",result );
var hobby3="Programing";
var result= hobby3.length;
console.log("Total number of charecter oF --Hobby3-- is ==>>",result );
console.log("----------------------------------------------");
console.log("-----------------Assignment=B-----------------");
console.log("----------------------------------------------");

var myString= "Hey  are you doing good,keep it up";
console.log(myString);
var myStringLenghth=myString.length;
console.log("string lenghth is ==>>",myStringLenghth);

var trimedString=myString.trim();
var trimedStringlength=trimedString.length;

console.log("Trimed string is ==>>", trimedString);
console.log("Trimed string lenghth is ==>>",trimedStringlength);
var totalExtraSpace=myStringLenghth-trimedStringlength;
console.log("Total number of extra space are ==>>", totalExtraSpace);

var charAtZeroIndex= trimedString.charAt(0);
var charAtLastindex=trimedString.charAt(trimedStringlength-1);
console.log("Char at zero index ==>>",charAtLastindex);
console.log("char at last index ==>>",charAtLastindex);

var greet = "Good Morning mate, How are you";
var resultSplit = greet.split(" ");
console.log("count the total words available in the string after step 3 ==>> ",resultSplit.length);

var resultSplit = greet.split("");
console.log("Index of word  good  from given string ==>>",resultSplit.length);

var subsrting="Hey are you doing good ,keep it up";
console.log("Substring ending from the index 22 ,using slice method ==>>",subsrting.substring(22));


var myName = "krishna";
var result = myName.endsWith("a");
console.log(`Is string ends with character "a" ==>> ${result}`);

var myName = "krishna";
var result = myName.startsWith("a");
console.log(`Is string start with character "a" ==>> ${result}`);
