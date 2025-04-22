function sleep() {
    console.log("daniel is sleeping")
}
sleep()
// this prints the function sleep

function talk() {
    console.log("the children are talking")
}
talk()
// this prints out the function talk

function drive() {
    console.log("Daniel is driving a truck")
}
drive()
// this prints out the function drive

// more examples on functions 
// Addition 
function add(number1, number2){
    console.log(number1 + number2)
}
add(45, 40)

// subtraction
function result(number1, number2){
    console.log(number1 - number2)
}
result(100, 30)

// multiplication
function x(number1,number2){
    console.log(number1 * number2)
}
x(20, 7)

// division
function result1(number1, number2){
    console.log(number1 / number2)
}
result1(100, 5 )

// this function returns 
function cup(Tea){
    return Tea
}
console.log(cup("Tea"))
let n= cup("i will go to school")
console.log(n)
let k= cup("milk")
console.log(k)

// sum of 2 numbers
function add2(num1, num2) {
    return num1 + num2;
  }
  
  let sum = add2(10, 3);
  console.log(sum); // Output: 13

  // Function that returns a string
function greet(name) {
    return "Good " + name ;
  }
  let greeting = greet("Morning");
  console.log(greeting); // Output: Good Morning

  // Function that returns a boolean
function isEven(number) {
    return number % 2 === 0;
  }
  let even = isEven(7);
  console.log(even); // Output: false

  // Function that returns an object
function createPerson(name, age) {
    return {
      name: name,
      age: age
    };
  }
  let person = createPerson("Daniel", 35);
  console.log(person); // Output: { name: 'Daniel', age: 35 }

  // Function that returns an array
function getLastThreeElements(arr) {
    return arr.slice(2, 5); 
  }
  let numbers = [1, 2, 3, 4, 5];
  let LastThree = getLastThreeElements(numbers);
  console.log(LastThree); 
// Output: [3, 4, 5]
// the arr.slice is used to extract a portion (or a "slice") of an array and return it as a new array, 
// without modifying the original array.