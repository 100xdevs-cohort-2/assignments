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
  let categoryTotal = {};
    for (let i = 0; i < transactions.length; i++) {
        let transaction = transactions[i];
        let category = transaction.category;
        let price = transaction.price;

        if (category in categoryTotal) {
            categoryTotal[category] += price;
        } else {
            categoryTotal[category] = price;
        }
    }
    let result = [];
    for (let category in categoryTotal) {
        let price = categoryTotal[category];
        let temp = {
            category: category,
            totalSpent: price,
        };
        result.push(temp);
    }

    return result;
}

module.exports = calculateTotalSpentByCategory;
