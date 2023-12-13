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
  let result = [];
  transactions.forEach((transaction) => {
    let arrIndex = result.findIndex((e) => e.category === transaction.category);
    if (arrIndex === -1) {
      result.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
    // else {
    //   result[arrIndex] = {
    //     category: result[arrIndex].category,
    //     totalSpent: result[arrIndex].totalSpent + transaction.price,
    //   };
    // }
    else {
      result[arrIndex].totalSpent += transaction.price;
    }
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
