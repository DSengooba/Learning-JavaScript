// more practice on bassic looping assignments. 

// Print numbers from 1 to 100
function printNumbers(start, end) {
    let numbers = 0
    for (let i = start; i <= end; i++) {
        console.log(i)
    }
    return numbers
}
printNumbers(1, 100)

// Print all even numbers between 1 and 50.
function printEvenNumbers(start, end) {
    let evenNumbers = 0
    for (let a = start; a <= end; a++) {
        if (a % 2 === 0) {
            console.log(a);
        }
    }
    return evenNumbers
}
printEvenNumbers(1, 50);

// Sum all numbers from 1 to n.
function sumNumbers(n) {
    let sum = 0;
    for (let b = 1; b <= n; b++) {
        sum += b;
    }
    return sum;
}
sumNumbers()
console.log(sumNumbers(10));


// Find the factorial of a number.
function factorial(x) {
    let result = 1;
    for (let c = 1; c <= x; c++) {
        result *= c;
    }
    return result;
}
factorial()
console.log(factorial(8));

// Reverse the characters in a string.
function reverseString(str) {
    let reversed = '';
    for (let e = str.length - 1; e >= 0; e--) {
        reversed += str[e];
    }
    return reversed;
}
console.log(reverseString('Daniel')); // output is leinaD


// Count how many vowels are in a string.
function countVowels(str) {
    let count = 0;
    for (let f = 0; f < str.length; f++) {
        let char = str[f].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}
console.log(countVowels('Daniel Sengooba')); // Output 


//Find the largest number in an array.
function findLargest(arr) {
    let largest = arr[0];
    for (let g = 1; g < arr.length; g++) {
        if (arr[g] > largest) {
            largest = arr[g];
        }
    }
    return largest;
}
console.log(findLargest([4, 2, 9, 6, 5, 1])); // Output: 9
console.log(findLargest([10, 21, 100, 70, 40, 11])); 


//Print all elements of an array.
function printArray(arr) {
    for (let h = 0; h < arr.length; h++) {
      console.log(arr[h]);
    }
  }
  printArray([1, 2, 3, 4, 5]);
  
  

//Print all elements of a 2D array.
function print2DArray(arr) {
    for (let k = 0; k < arr.length; k++) {
      for (let j = 0; j < arr[k].length; j++) {
        console.log(arr[k][j]);
      }
    }
  }
  let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  print2DArray(arr);

  