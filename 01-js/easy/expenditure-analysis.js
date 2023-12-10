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
  let categoryTotal = [];

  transactions.forEach((transaction) => {
    // Check if the category is already in the categoryTotal array
    const existingCategory = categoryTotal.find((cat) => cat.category === transaction.category);
    console.log(existingCategory);
    if (existingCategory) {
      // If the category exists, update the total spent
      existingCategory.totalSpent += transaction.price;
    } else {
      // If the category doesn't exist, add it to the array
      categoryTotal.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
  });

  return(categoryTotal);
}

module.exports = calculateTotalSpentByCategory;
