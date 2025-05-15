// string search methods

// 1. String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string,
// or it returns -1 if the string is not found:
let text = "i am coding in javascript";
let index = text.indexOf("javascript");
console.log(index)

// 2.JavaScript String lastIndexOf()
// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text1 = "i am coding in javascript";
let index1 = text1.lastIndexOf("coding");
console.log(index1)

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
// like in this example 
let text2 = "i am coding in javascript";
let index2 = text2.indexOf("Daniel");
console.log(index2)

// Both methods accept a second parameter as the starting position for the search:
// like in this exampla
let text3 = "i am coding in javascript, this lesson is string search in javascript";
let index3 = text3.indexOf("javascript", 17);
console.log(index3)

// 3. The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: 
// if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.let text3 = "i am coding in javascript, this lesson is string search in javascript";
let text4 = "i am coding in javascript, this lesson is string search in javascript";
let index4 = text4.lastIndexOf("javascript", 17);
console.log(index4)

// 4. JavaScript String search()
// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let text5 = "i am coding in javascript";
let index5 = text5.search("coding");
console.log(index5)
// Example 2 with regular expression 
let text6 = "i am coding in javascript";
let index6 = text6.search(/coding/);
console.log(index6)

// 5. JavaScript String match()
// The match() method returns an array containing the results of matching 
// a string against a string (or a regular expression).
let text7 = "The cat sat on the mat, eating a hat and a bat";
let result = text7.match('at');
console.log(result)
// in example 2 using regular expression
let text8 = "The cat sat on the mat, eating a hat and a bat";
let result1 = text8.match(/at/);
console.log(result1)
// in example 3 using regular expression to find all 
let text9 = "The cat sat on the mat, eating a hat and a bat";
let result2 = text9.match(/at/g);
console.log(result2)
// Perform a global, case-insensitive search for "at":
let text10 = "The cat sat on the mat, EATING a hat and a BAT";
let result3 = text10.match(/at/gi);
console.log(result3)

// 6.JavaScript String matchAll()
// The matchAll() method returns an iterator containing the results 
// of matching a string against a string (or a regular expression)
let text11 = "The Fox is quick, the fox is brown, and the Fox jumps high";
let matches = text11.matchAll('Fox');
console.log(matches)

// 7. JavaScript String includes()
// The includes() method returns true if a string contains a specified value
let text12 = "i am coding in javascript, this lesson is string search in javascript";
let result4= text12.includes("javascript")
console.log(result4)
// in example 2 
// Check if a string includes "javascript". Start at position 17:
let text13 = "i am coding in javascript, this lesson is string search in javascript";
let result5= text13.includes("javascript", 100)
console.log(result5)

// 8. JavaScript String startsWith()
// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:
let text14 = "i am coding in javascript, this lesson is string search in javascript";
let result6= text14.startsWith("i")
console.log(result6)
// returns false 
let text15 = "i am coding in javascript, this lesson is string search in javascript";
let result7= text15.startsWith("coding")
console.log(result7)
// A start position for the search can be specified:
let text16 = "i am coding in javascript, this lesson is string search in javascript";
let result8= text16.startsWith("coding",5)
console.log(result8)
// returns false 
let text17 = "i am coding in javascript, this lesson is string search in javascript";
let result9= text17.startsWith("coding",3)
console.log(result9)

// 9. JavaScript String endsWith()
// The endsWith() method returns true if a string ends with a specified value.
let text18 = "i am coding in javascript, this lesson is string search in javascript";
let result10= text18.endsWith("javascript")
console.log(result10)
// Otherwise it returns false:
let text19 = "i am coding in javascript, this lesson is string search in javascript";
let result11= text19.endsWith("lesson")
console.log(result11)
// Check if the 12 first characters of a string ends with "in":
let text20 = "i am coding in javascript, this lesson is string search in javascript";
let result12= text20.endsWith("in",10)
console.log(result12)