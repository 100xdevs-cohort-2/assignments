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
  let totalExpenditures = [];
  if (!transactions || transactions.length === 0) {
    return [];
  }
  transactions.forEach((transaction) => {
    if (
      totalExpenditures.findIndex(
        (item) => item.category === transaction.category
      ) === -1
    ) {
      totalExpenditures.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      totalExpenditures[
        totalExpenditures.findIndex(
          (item) => item.category === transaction.category
        )
      ].totalSpent += transaction.price;
    }
  });
  return totalExpenditures;
}

module.exports = calculateTotalSpentByCategory;
