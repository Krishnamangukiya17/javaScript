console.log("---------------------------------------------------");
console.log(" Wap to print numbers from 5 to 15 by icrementing 1");
console.log("--------------------------------------------------");

let i=5; 
while (i<=15) { // condition 5<=15
   console.log(i); 
   i = i + 1;
}
console.log("----------------------------------------------------");
console.log(" Wap to print numbers from 50 to 40 by decrementing 1");
console.log("----------------------------------------------------");
let k=50;
while (k>=40){
    console.log(k);
    k--;
}


console.log("----------------------------------------------------");
console.log(" Wap to find first 15 odd numbers ");
console.log("----------------------------------------------------");
let a=0;
while (a<=15){
    if(a%2==1){
        console.log(a);
    }
  a++; 
}

console.log("----------------------------------------------------");
console.log(" Wap to find first 10 even numbers ");
console.log("----------------------------------------------------");
let j=0;
while (j<=10){
    if (j%2==0){
        console.log(j)
    }
    j++;
}

console.log("----------------------------------------------------");
console.log(" Wap to print table of 5 ");
console.log("----------------------------------------------------");

for (let index = 5; index <=50; index=index+5) { // index = 11
    console.log(index); // 0 1  2 ... 10 
}

console.log("----------------------------------------------------");
console.log(" Wap to print table of 10 ");
console.log("----------------------------------------------------");
for (let index = 10; index <=100; index=index+10) { 
    console.log(index);  
}

console.log("----------------------------------------------------");
console.log(" Wap to print of 10 in reverse order ");
console.log("----------------------------------------------------");
let b=100;
while (b>=10){
    if(b%10==0)
    console.log(b);
    b--;
}
