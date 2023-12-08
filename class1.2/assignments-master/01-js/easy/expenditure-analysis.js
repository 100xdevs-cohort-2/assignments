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
  var categoryTotals = {};  // We'll use this to keep track of spending in each category

  // Go through each shopping transaction
  for (var i = 0; i < transactions.length; i++) {
    var transaction = transactions[i];  // Get one transaction at a time
    var category = transaction.category;  // Find out which category it belongs to
    var price = transaction.price;  // Get the price of the item

    // Check if we've seen this category before
    if (!categoryTotals[category]) {
      // If not, set it to 0 (because we haven't spent anything yet)
      categoryTotals[category] = 0;
    }

    // Add the price of the current item to the total spending in that category
    categoryTotals[category] += price;
  }

  var result = [];  // This will store our final result

  // Go through each category in our categoryTotals
  for (var category in categoryTotals) {
    // Create an object with category name and total spending, then add it to the result
    result.push({
      category: category,
      totalSpent: categoryTotals[category]
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
