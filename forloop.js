// the for lop 
for (let i = 0; i < 10; i++) {
  console.log("I went to P3");
}

// a for loop that will come up with the sum of an array
// my approach 
let MyNumbers = [4, 10, 20, 50, 90];
let arraySum = 0;
for (let k = 0; k < MyNumbers.length; k++) {
  arraySum += MyNumbers[k];
}

console.log("The sum is:", arraySum);

// if we omit the 1st part(expression) of the for loop
let MyNumbers1 = [4, 10, 20, 50, 90];
let arraySum1 = 0;
let y = 0;
for (; y < MyNumbers1.length; y++) {
  arraySum1 += MyNumbers1[y];
  console.log(MyNumbers1[y])
}
console.log("The sum is:", arraySum1);

// if we omit the 3 rd part (expression) of the for loop
let MyNumbers2 = [4, 10, 20, 50, 90];
let arraySum2 = 0;
let q = 0;
for (; q < MyNumbers2.length;) {
  arraySum2 += MyNumbers2[q];
  q++;
}
console.log("The sum is:", arraySum2);


