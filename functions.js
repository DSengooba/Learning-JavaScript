function sleep() {
    console.log("daniel is sleeping")
}
sleep()
// this prints the function sleep

function talk() {
    console.log("we learn how to talk")
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

// subtraction function
function result(number1, number2){
    console.log(number1 - number2)
}
result(100, 30)

// multiplication function 
function x(number1,number2){
    console.log(number1 * number2)
}
x(20, 7)

// division function 
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

// Create a function the converts cm to m2 

function convertCentiToMeters(centimeters){
let centimetersToMeters= centimeters / 100
return centimetersToMeters
}
convertCentiToMeters()
console.log(convertCentiToMeters(100))

// Create a function that converts Kilograms to grams
function convertKilogramsToGrams(Kilograms){
    let kilogramsToGrams= Kilograms * 1000
    return kilogramsToGrams
}
convertKilogramsToGrams()
console.log(convertKilogramsToGrams(200))

// Create a function that converts grams to kilograms
function convertGramsToKilograms(grams){
    let gramsToKilograms= grams /1000
    return gramsToKilograms
}
convertGramsToKilograms()
console.log(convertGramsToKilograms(4000))

// create a function that converts meters to meters2
function convertMetersToMeters2(meters){
    let metersToMeters2= meters * meters
    return metersToMeters2
}
convertMetersToMeters2()
console.log(convertMetersToMeters2(20))

// create a function that converts cm to m2
function convertCentiTometers2(centi){
    let meters = centi / 100
    let sequaredMeters = meters * meters
    return sequaredMeters
}
convertCentiTometers2()
console.log(convertCentiTometers2(100))
// 1 cm = 0.01m (0.01 * 0.01)

// Write a function that calculates Body Mass Index (BMI)
// Body Mass Index (BMI) is a calculation that uses your weight and height to estimate your body fat percentage, 
// providing a quick and relatively inexpensive way to assess your weight status. 
// How it's calculated:
// BMI is calculated by dividing your weight in kilograms by the square of your height in meters 
// (BMI = weight (kg) / height (m)²). 

function calculateBMI(weightInKilograms, heightInMeters) {
    if (heightInMeters <= 0) {
      return "Height must be greater than zero";
    }
  
    let bmi = weightInKilograms / (heightInMeters * heightInMeters);
    return bmi;
  }
  calculateBMI()
  console.log(calculateBMI(84, 2))
// This function takes weight in kilograms and height in meters as arguments.
// It returns the calculated BMI or an error message if the height is invalid.

// Write a function that converts degrees ferenhight to degrees celcius 
function fahrenheitToCelsius(fahrenheit) {
  let celcius= (fahrenheit - 32) * (5 / 9);
  return celcius
}
fahrenheitToCelsius()
console.log(fahrenheitToCelsius(200))

// write a function that calculates the area of a circle. 
function calculateCircleArea(radius) {
  return Math.PI * radius * radius;
}
calculateCircleArea()
console.log(calculateCircleArea(20))
// if the radius of the circle is given in meters yet we want it in cm
function calculateCircleArea2(radiusInMeters){
let radius= radiusInMeters * 100
let area = Math.PI * (radius * radius);
return area
}
calculateCircleArea2()
console.log(calculateCircleArea2(20))

// calculate diamter where radius is given in 
