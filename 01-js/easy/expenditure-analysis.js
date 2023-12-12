/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let expenseObj = {}; // Object to temporarily store category and total spent
  let categoryWiseExpenses = []; // Array to store final results
  let category;
  let expense;

  // Iterate through transactions
  for (const transaction of transactions) {
    category = transaction.category;
    expense = transaction.price;

    if (categoryWiseExpenses.length === 0) {
      // If the result array is empty, add the first category and expense
      categoryWiseExpenses.push({ category: category, totalSpent: expense });
    } else {
      // Check if the category already exists in the result array
      expenseObj = categoryWiseExpenses.find((c) => c.category === category);

      if (expenseObj) {
        // If the category exists, update the total spent
        expenseObj.totalSpent += expense;
      } else {
        // If the category doesn't exist, add it to the result array
        categoryWiseExpenses.push({ category: category, totalSpent: expense });
      }
    }
  }
  return categoryWiseExpenses;
}

module.exports = calculateTotalSpentByCategory;
