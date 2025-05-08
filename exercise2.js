// You're helping a local supermarket automate part of their loyalty points system. 
// Customers earn points based on how much they spend in each transaction. 
// You’ve been given a list of customer transactions, and you need to calculate the 
// total points each customer earns in a single visit.
// Here is my approach to the task

function calculateLoyaltyPoints(transactions) {
    let totalPoints = 0; // 1. Initialize a variable totalPoints to keep track of the total points earned.
    for (let i = 0; i < transactions.length; i++) { // 2. Iterate through each transaction in the array using a for loop.
        let transaction = transactions[i];
        if (transaction > 50) {
            totalPoints += 2;
        } else if (transaction >= 20 && transaction <= 50) { // 3. For each transaction,we use an if-else if-else structure to determine the points earned based on the amount spent.
            totalPoints += 1; // 4. Add the points earned for each transaction to the totalPoints variable.
        } else {
            totalPoints += 0; // optional, but added for clarity
        }
    }
    return totalPoints; // 5. After iterating through all transactions, return the total points earned.
}
let transactions = [15, 23, 55, 30, 10, 60];
let totalPoints = calculateLoyaltyPoints(transactions);
console.log("Total loyalty points earned:", totalPoints);
