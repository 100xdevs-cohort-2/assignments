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
  const totalByCategory = {};

  // Iterate over each transaction and accumulate the total spent by category
  transactions.forEach(transaction => {
      if (totalByCategory.hasOwnProperty(transaction.category)) {
          totalByCategory[transaction.category] += transaction.price;
      } else {
          totalByCategory[transaction.category] = transaction.price;
      }
  });

  // Convert the totals into an array of objects with the required format
  return Object.keys(totalByCategory).map(category => {
      return { 
          category: category, 
          totalSpent: totalByCategory[category] 
      };
  });
}



module.exports = calculateTotalSpentByCategory;
