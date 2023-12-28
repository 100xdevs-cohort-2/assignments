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

// O(N)
/* function calculateTotalSpentByCategory(transactions) {
  const output = [];
  for (const transaction of transactions) {
    let categoryFound = false;
    const { category, price } = transaction;
    for (const currItem of output) {
      if (currItem.category === category) {
        currItem.totalSpent += price;
        categoryFound = true;
        break;
      }
    }
    if (!categoryFound) {
      output.push({
        category: category,
        totalSpent: price,
      });
    }
  }
  return output;
} */

// O(N^2)
function calculateTotalSpentByCategory(transactions) {
  const output = [];
  const indexMap = {};
  transactions.forEach((transaction) => {
    if (indexMap[transaction.category] !== undefined) {
      output[indexMap[transaction.category]].totalSpent += transaction.price;
    } else {
      output.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
      indexMap[transaction.category] = output.length - 1;
    }
  });
  return output;
}

module.exports = calculateTotalSpentByCategory;
