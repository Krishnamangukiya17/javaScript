console.log("............................Filter()...........................");

console.log("...Find out the number which are greater than 50 :");
const array =[20,11,40,25,37,49,9,90,60,2,19];

  const arrayGreterThan50=array.filter((element)=>{
 return element>50;
})
console.log(arrayGreterThan50);

console.log("...Find out the number which are even number :");

const arrayEven = array.filter( (element) => {

    return element%2==0;

} );

console.log(arrayEven);

console.log("...Find out the number which are odd number :");

const arrayOdd = array.filter( (element) => {

    return element%2==1;

} );
console.log(arrayOdd);

console.log("...Find out the number which are Multiple of 5 :");
const arrayMultiple= array.filter((element)=>{
    return element%5 ===0;
})
console.log(arrayMultiple);

console.log("...Find out the number which are Between 20 and 50 :");


const arrayBeetwen=array.filter((element)=>{
    return element >=20 && element<50;
});
console.log(arrayBeetwen);