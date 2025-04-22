let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(text1 < text2)
// is A less than B? true (Note that strings can be compared alphabeticaly.) 

let text3 = "20";
let text4 = "5";
let result2 = text3 < text4;
console.log(text3 < text4)
// is 20 less than 5?

let fname = "Daniel";
let sname = "Sengooba";
let fullname = fname + " " + sname;
console.log(fullname)
// string addition

let text6 = "This is a ";
let text7 = "rainy month";
console.log(text6+=text7)
// using the assignment operator to concatibate strings

// Adding strings and numbers
let x = 7 + 10;
// adding two numbers will return the sum as a number
let y = "7" + 10;
let z = "Daniel" + 44;
console.log(x,y,z)
// adding a number and a string will return the sum as a concatinated string