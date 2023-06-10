const array =[20,11,40,25,23,11,9,31,60,2,19];
console.log(" Given array is : [20,11,40,25,23,11,9,31,60,2,19]");
console.log(".............Add 10 into each array element.............");
const arrayInto=array.map((element)=>{
    return element+10;
});
console.log(arrayInto);

console.log("..............Square of each array element..............");
const arraySquare=array.map((element)=>{
    return element*element;
});
console.log(arraySquare);

console.log("..............Index Value into its corresponding each array element..............");
const arrayINdex=array.map((element)=>{
    return element+1;
});
console.log(arrayINdex);

