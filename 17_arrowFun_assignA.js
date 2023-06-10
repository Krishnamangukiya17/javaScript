


let display = ()=> {
    console.log(`a.==>> "Good Morning,Today is Monday"`);
}
display();


let multiply= (n1,n2,n3=0) =>{
let result = n1*n2*n3;
return result;
}
let result=multiply(5,5,2);
let resultt=multiply(10,4,1);
console.log(`b.==>> "multiplication is" ==>> ${result}`);
console.log(`       "multiplication is" ==>> ${resultt}`);


let addition=(a1,a2,a3,a4,a5)=>{
    let result =a1+a2+a3+a4+a5;
   return result;
}
let res = addition( 100,100,200,349,756);
let ress = addition("i am"," learning"," ES6"," features"," in depth.")
console.log(`3.b.=> "addition  is" ==>> ${res}`);
console.log(`3.c.=> "addition  is" ==>> ${ress}`);

