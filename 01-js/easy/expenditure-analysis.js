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
  const categoryTotals = {};

  // Iterate over transactions array
  transactions.forEach((item) => {
    const { category, price } = item;

    // Check if category exists in categoryTotals, initialize if not
    if (!categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] = 0;
    }

    // Add price to category total
    categoryTotals[category] += price;
  });

  // Create array of objects with distinct categories and total prices
  const answer = Object.entries(categoryTotals).map(
    ([category, totalSpent]) => ({
      category,
      totalSpent,
    })
  );
  return answer;
}

module.exports = calculateTotalSpentByCategory;
