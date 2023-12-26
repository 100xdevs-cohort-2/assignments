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
  let categoryObj = {};

  transactions.map((transaction) => {
    if (!categoryObj[transaction?.category]) {
      categoryObj[transaction?.category] = {
        category: transaction?.category,
        totalSpent: transaction?.price,
      };
    } else {
      categoryObj[transaction?.category]["totalSpent"] =
        categoryObj[transaction?.category]["totalSpent"] + transaction?.price;
    }
  });

  return Object.values(categoryObj);
}

module.exports = calculateTotalSpentByCategory;
