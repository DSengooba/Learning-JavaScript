// In JavaScript, null is a primitive value representing the intentional absence of any object value. 
// It signifies that a variable or object property has no value assigned to it, or that an object does not exist. 
// null is often used to explicitly indicate that a variable has no value, while a value may be expected in the future
// Although null is a primitive value, the typeof operator returns "object" when used with null. 

// here are some examples of null usage
let myName = null;
console.log(myName); // Output: null
console.log(typeof myName); // Output: object
console.log(myName == undefined); // Output: true
console.log(myName === undefined); // Output: false

// another example
let person = {
    fname: "Daniel",
    age: 44,
    city: "Kampala"
  };
  
  person = null; // Clear the object
  
  console.log(person); // Output: null
