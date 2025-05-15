// STRING METHODS 
// All string methods return a new string. They don't modify the original string.

// string length()
let myName='DanielSengooba'
let length= myName.length
console.log(length)

// string charAt()
let carpetColor='maroon'
let char= carpetColor.charAt(3)
console.log(char)

// string charCodeAt()
let word='codding'
let charCodeAt = word.charCodeAt(1)
console.log(charCodeAt)

// string at()
// The at() method returns the character at a specified index (position) in a string.
const myname= "Daniel"
let letter = myname.at(4)
console.log(letter)

// Property Access [ ]
// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
let word2= "school"
let char1 = word2[2]
console.log(char1)

// String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let planets= "Earth,Mercury"
let part = planets.slice(6,14) 
console.log(part)

// String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// If you omit the second parameter, substring() will slice out the rest of the string.
let planets2= "Jupiter,Neptune"
let part1 = planets2.slice(8,15) 
console.log(part1)

// String substr()
// substr() is similar to slice().
let furniture = "Chair, Tables, Stool";
let part2 = furniture.substr(7, 6);
console.log(part2)

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():
let myName1= "daniel sengooba"
let myName2= myName1.toLocaleUpperCase()
console.log(myName2)

// convert to lowercase 
let son="ZAC ARCHIE"
let son1= son.toLowerCase()
console.log(son1)

// String concat()
// concat() joins two or more strings:
let text1 = "Good";
let text2 = "morning";
let text3 = text1.concat(" ", text2);
console.log(text3)

// String trim()
// The trim() method removes whitespace from both sides of a string:
let laptop="       Lenovo      ";
let laptop2= laptop.trim();
console.log(laptop2)

// String trimStart()
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let laptop3="       Dell      ";
let laptop4= laptop3.trimStart();
console.log(laptop4)

// String trimEnd()
// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let laptop5="       Toshiba      ";
let laptop6= laptop5.trimEnd();
console.log(laptop6)

// JavaScript String Padding
// These are two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and 
// at the end of a string.

// String padStart()
// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
let time = "10pm";
let paddedTime = time.padStart(7,"0");
console.log(paddedTime)
// Example 2
// Pad a string with "x" until it reaches the length 8:
let number3= "9"
let paddedNum= number3.padStart(8,'x');
console.log(paddedNum)

// String padEnd()
// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
let numb = "19";
let paddedNumb = numb.padEnd(6,"0");
console.log(paddedNumb)
// exaple 2 
// pad string "19" with 'y' 
let numb1 = "19";
let paddedNumb1 = numb1.padEnd(6,"y");
console.log(paddedNumb1)

// String repeat()
// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string
let greet = "Good evening ";
let ans = greet.repeat(4);
console.log(ans); 

// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
let trip = "Am traveling to Dubai";
let newTrip = trip.replace("Dubai", "France");
console.log(newTrip)
// By default, the replace() method replaces only the first match:
// see example 2 
let tripB = "Am traveling to Dubai and Denmark";
let newTripB = tripB.replace("Dubai", "France");
console.log(newTripB)

// JavaScript String ReplaceAll()
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
let sentence = "Meat is delicious. Meat is a source of protein. Meat cooks for over an hour."
sentence = sentence.replaceAll("Meat","Chicken");
sentence= sentence.replaceAll("meat","chicken");
console.log(sentence)

// in example 2, If the parameter is a regular expression
let reading = "I love reading the Bible. Bible is a religous book. A Bible is sold in book store";
reading = reading.replaceAll(/Bible/g,"Koran");
reading = reading.replaceAll(/bible/g,"koran");
console.log(reading)

// Converting a String to an Array
// JavaScript String split()
// A string can be converted to an array with the split() method:

