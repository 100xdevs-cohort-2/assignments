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
  let ans = [];

  for (let transaction of transactions) {
      let existingCategory = ans.find(item => item.category === transaction.category);
      if (!existingCategory) {
          createCategory(transaction);
      } else {
          existingCategory.totalSpent += transaction.price;
      }
  }

  function createCategory(currentTransaction) {
      ans.push({
          category: currentTransaction.category,
          totalSpent: currentTransaction.price,
      });
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
