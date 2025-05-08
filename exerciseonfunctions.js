// Greeting Function
// Create a function called greetUser that takes a name and returns a greeting like: "Hello, Alice!".

function greetUser(name) {
    return "Hello " + name;
}
let greeting = greetUser("Alice!");
console.log(greeting); // Output: Hello Alice


// Area of a Circle
// Write a function calculateArea that takes a radius and returns the area of a circle.

function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
calculateCircleArea()
console.log(calculateCircleArea(20))


// Even or Odd Checker
// Create a function isEven that returns true if a number is even and false if odd.

function isEven(num) {
    return num % 2 === 0;
}
isEven()
console.log(isEven(10)); // true
console.log(isEven(11)); // false

// Maximum of Three Numbers
// Write a function findMax that takes three numbers and returns the largest.
// - The Math.max() function returns the largest of the input numbers.
function findMax(a, b, c) {
    return Math.max(a, b, c);
}
findMax()
console.log(findMax(10, 20, 30)); // 30
console.log(findMax(1, 2, 3, 4, 5)); // 5

// Reverse a String
// Create a function reverseString that takes a string and returns the reversed version.
// 1. str.split('') splits the string into an array of individual characters.
// 2. reverse() reverses the order of the characters in the array.
// 3. join('') combines the characters back into a single string.
// function reverseString(str) {
// return str.split('').reverse().join('');
// }
// reverseString()
// console.log(reverseString('hello')); // 'olleh'
// console.log(reverseString('JavaScript')); // 'tpircsVAJ'

// Factorial Calculator
// Write a function factorial that takes a number and returns its factorial (use a loop or recursion).

// 1.Using a Loop
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
factorial()
console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1

// 2. Using Recursion
// function factorial2(n) {
// if (n < 0) {
// throw new Error("Factorial is not defined for negative numbers");
// }
// if (n === 0 || n === 1) {
// return 1;
// }
// return n * factorial2(n - 1);
// }
// factorial2()
// console.log(factorial2(5)); // 120
// console.log(factorial2(3)); // 6
// console.log(factorial2(0)); // 1

// Simple Password Strength Checker
// Create a function isStrongPassword that takes a password string and checks if it's at least 8 characters, has one number, and one uppercase letter
// function isStrongPassword(password) {
// if (password.length < 8) return false;
// if (!/\d/.test(password)) return false; // check for at least one number
// if (!/[A-Z]/.test(password)) return false; // check for at least one uppercase letter
// return true;
// }
// isStrongPassword()
// console.log(isStrongPassword("Short1A")); // false
// console.log(isStrongPassword("longenough1")); // false
// console.log(isStrongPassword("LongEnough1A")); // true

// Sum of Numbers in an Array
// Write a function sumArray that takes an array of numbers and returns the sum.
// Find Prime Numbers up to N

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function findPrimesUpToN(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
// The sumArray function iterates through the input array arr, adding each element to the sum variable, 
// and returns the final sum. The findPrimesUpToN function generates an array of prime numbers up to a 
// given limit n, utilizing the helper function isPrime to determine if a number is prime. 
// The isPrime function uses an optimized approach to check for primality, improving efficiency.


// Create a function findPrimesUpTo that takes a number n and returns an array of all prime 
// numbers less than or equal to n.
function findPrimesUpTo(n) {
    const primes = [];
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }

    return primes;
}
findPrimesUpToN()
console.log(findPrimesUpTo(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(findPrimesUpTo(30)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
// The function findPrimesUpTo takes an integer n as input and returns an array containing all prime 
// numbers less than or equal to n. It uses the Sieve of Eratosthenes algorithm for efficiency. First, 
// it creates a boolean array isPrime of size n + 1, initially marking all numbers as potentially prime. 
// It then iterates from 2 up to the square root of n, and for each prime number found, 
// it marks its multiples as composite (not prime). Finally, it collects all the numbers that 
// remain marked as prime in the primes array and returns it.


// Capitalize Each Word in a Sentence
// Write a function capitalizeWords that takes a sentence and returns the same sentence with each word 
// capitalized.
// function capitalizeWords(sentence) {
    // const words = sentence.split(" ");
    // const capitalizedWords = words.map(word => {
    //   return word.charAt(0).toUpperCase() + word.slice(1);
    // });
    // return capitalizedWords.join(" ");
//   }
//   capitalizedWords()
//   console.log(capitalizeWords("hello world")); // "Hello World"
//   console.log(capitalizeWords("this is a test")); // "This Is A Test

// This function first splits the sentence into an array of words. 
// Then, it uses the map method to iterate over each word and capitalize the first letter. 
// Finally, it joins the capitalized words back into a sentence and returns the result. 

function reversedString(str){
    let string= ""
    for (let m= str.length -1; m >= 0; m--){
        string+= str(m)
        // means that the string will add value str at index m
    }
        return reversedString
}
reversedString()
console.log(reversedString("daniel"))

