// Comparison Operators
let x = 40
let y = '40'
console.log(x==y)
console.log(x===y)

// not equal example
let k = 70
let p = 56
let q = '70'
console.log(k!=p)
console.log(k!==p)

// the logical and &&
let c = 8
let t = 10
console.log(c<10 && t==10)

// logical or ||
let v = 17
let h = 20
console.log(v>25 || h>10)

// logical NOT 
let u = 50
let j = 60
console.log(!(u==j))

// ternary operator 
let myIncome = 40;
let myStatus = (myIncome > 50) ? 'I am rich' : 'I am poor';
console.log(myStatus); 

// Example 1: Determine if Adult or Minor 
let age = 25;
let individual = (age >= 18) ? "Adult" : "Minor";
console.log(individual); 

// Example 2: Grade based on score
let Myscore = 85;
let Mygrade = (Myscore >= 80) ? "A" : "B";
console.log('You have grade', Mygrade);

// Example 3: Even or odd number
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log('this is an', result, 'number');

// Example 4: Discount based on age
let age1 = 65;
let discount = (age1 >= 65) ? "10%" : "0%";
console.log('your discount is', discount); 

// Example 5: Login status
let isLoggedIn = true;
let message = (isLoggedIn) ? "Welcome back!" : "Please log in.";
console.log(message);  // returns "Welcome back!"

// Example 6: Price based on quantity
let quantity = 10;
let price = (quantity > 5) ? 10 : 15;
console.log('the price is $',price);  // returns 10

// Example 7: Vowel or consonant
let char = "a";
let result2 = (["a", "e", "i", "o", "u"].includes(char.toLowerCase())) ? "Vowel" : "Consonant";
console.log('the character is a', result2);  // returns "Vowel"

// Example 7: Pass or fail
let marks = 40;
let MyResult = (marks >= 35) ? "Pass" : "Fail";
console.log(MyResult);  // returns "Pass"

// Nullish operator 
let name = null;
let fullName = name ?? "Unknown";
console.log(fullName);

// example 2 
let age3 = undefined;
let userAge = age3 ?? 40;
console.log(userAge);

// 
let user = {
  name5: "Daniel",
  address: {street: "Kireka Hill Rd Hse 3"}
};

let street = user.address?.street;
console.log(street);

let township = user.address?.township;
console.log(township); 






