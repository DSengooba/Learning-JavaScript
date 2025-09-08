// if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}

// another example 
let x = -5;
if (x > 0) {
  console.log("x is positive");
}

// 5 examples of the if() statement. 
// 1. Example 1 checking if the hour is 12
let hour = 10;
if (hour < 12) {
  console.log("Good morning!");
}

// 2. Example 2 Checking age for drinking 
let age1 = 25;
if (age1 >= 21) {
  console.log("You can drink");
}

// 3. Example 3 checking pass grade 
let score = 90;
if (score >= 80) {
  console.log("You passed with a good grade A");
}

// 4. Example 4 checking weather 
let weather = "rainy";
if (weather === "rainy") {
  console.log("Bring an umbrella");
}

// Example 5: Checking password length
let password = "daniel123";
if (password.length >= 8) {
  console.log("Password is valid");
}


// The if else() statement 
// The if-else statement allows you to execute different blocks of code based on conditions.
// Example 1. Checking age 
let age2 = 20;
if (age2 >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Example 2: Checking grade
let score1 = 75;
if (score1 >= 60) {
  console.log("You passed");
} else {
  console.log("You failed");
}

// Example 3: Checking weather
let weather1 = "sunny";
if (weather1 === "sunny") {
  console.log("Wear sunglasses");
} else {
  console.log("Wear a jacket");
}

// Example 4: Checking age for voting
let voteage = 17;

if (voteage >= 18) {
  console.log("You can vote");
} else {
  console.log("You are not eligible to vote yet");
}

// Example 5: Checking password length
let password1 = "hello";
if (password1.length >= 8) {
  console.log("Password is valid");
} else {
  console.log("Password is too short");
}


// The else-if statement 
let grade = 65;

if (grade >= 90) {
  console.log("A grade");
} else if (grade >= 80) {
  console.log("B grade");
} else if (grade >= 70) {
  console.log("C grade");
} else {
  console.log("Failed");
}

// Example 2. Against days of the week 
let day = "Monday";
if (day === "Sunday") {
  console.log("Today is Sunday");
} else if (day === "Monday") {
  console.log("Today is Monday");
} else if (day === "Tuesday") {
  console.log("Today is Tuesday");
} else if (day === "Wednesday") {
  console.log("Today is Wednesday");
} else if (day === "Thursday") {
  console.log("Today is Thursday");
} else if (day === "Friday") {
  console.log("Today is Friday");
} else if (day === "Saturday") {
  console.log("Today is Saturday");
} else {
  console.log("Invalid day");
}


// Example 3: Determining the price tier
let price = 120;

if (price > 200) {
  console.log("Premium price");
} else if (price > 100) {
  console.log("High price");
} else if (price > 50) {
  console.log("Medium price");
} else {
  console.log("Low price");
}

// Example 4: Checking age groups
let age4 = 35;

if (age4 >= 65) {
  console.log("Senior");
} else if (age4 >= 18) {
  console.log("Adult");
} else if (age4 >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}


// days of the week by number 
let dayOfWeek = "Day 21";

if (dayOfWeek === "Day 1") {
  console.log("Sunday");
} else if (dayOfWeek === "Day 2") {
  console.log("Monday");
} else if (dayOfWeek === "Day 3") {
  console.log("Tuesday");
} else if (dayOfWeek === "Day 4") {
  console.log("Wednesday");
} else if (dayOfWeek === "Day 5") {
  console.log("Thursday");
} else if (dayOfWeek === "Day 6") {
  console.log("Friday");
} else if (dayOfWeek === "Day 7") {
  console.log("Saturday");
} else {
  console.log("Invalid day");
}

// In this example we will use the months of the year
let month = "Month 1";

if (month === "Month 1") {
  console.log("January");
} else if (month === "Month 2") {
  console.log("February");
} else if (month === "Month 3") {
  console.log("March");
} else if (month === "Month 4") {
  console.log("April");
} else if (month === "Month 5") {
  console.log("May");
} else if (month === "Month 6") {
  console.log("June");
} else if (month === "Month 7") {
  console.log("July");
} else if (month === "Month 8") {
  console.log("August");
} else if (month === "Month 9") {
  console.log("September");
} else if (month === "Month 10") {
  console.log("October");
} else if (month === "Month 11") {
  console.log("November");
} else if (month === "Month 12") {
  console.log("December");
} else {
  console.log("Invalid month");
}







