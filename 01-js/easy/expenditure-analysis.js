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
  //Initialize an empty object to store the total spent on each category
  const categoryTotals = {};

  //calculate total amount spent on each category
  transactions.forEach((transaction) => {
    if (categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] =
        categoryTotals[transaction.category] + transaction.price;
    } else {
      categoryTotals[transaction.category] = transaction.price;
    }
  });
  const Output = Object.entries(categoryTotals).map(([category, total]) => ({
   category,
   totalSpent : total,
  }));

  return Output;
}

module.exports = calculateTotalSpentByCategory;
