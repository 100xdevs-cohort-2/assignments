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
  const categoryTotal = {};

// Now let's iterate through each transaction
for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    // Check if the category already exists in categoryTotal
    if (categoryTotal[category]) {
        // If the category exists, add the price to its total spending
        categoryTotal[category] += price;
    } else {
        // If the category doesn't exist, initialize it with the price
        categoryTotal[category] = price;
    }
}
    const result = [];

    // Iterate through the categories in categoryTotal and create objects with category and totalSpent
    for (let category in categoryTotal) {
        result.push({ category: category, totalSpent: categoryTotal[category] });
    }

    return result;
  
}

module.exports = calculateTotalSpentByCategory;
