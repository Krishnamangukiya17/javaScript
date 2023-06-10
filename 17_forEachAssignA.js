const arrayNums = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log("Given array is :[1,-7,40,502,-77,91,0,108,89,-601] ");

console.log(".............log array element with index.............");
arrayNums.forEach((currentValue, index) => {
  console.log(` ${index}  ${currentValue} `);
});

console.log(".............find out positive numbers...............");
arrayNums.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});
console.log(".............find out negative number................");
const arrayNegativeNumbers = [];
arrayNums.forEach((element) => {
  if (element < 0) {
    arrayNegativeNumbers.push(element);
  }
});
arrayNegativeNumbers.forEach((element) => console.log(element));
console.log(".............find out even number....................");

arrayNums.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});

console.log(".............find sum of all element.................");

let sum = 0;
arrayNums.forEach((element) => {
  if (element) {
    sum = sum + element;
  }
});
console.log(sum);

console.log(".............only even index arrayvalue..............");

arrayNums.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(element);
  }
});
