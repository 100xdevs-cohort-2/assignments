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
  const spending_object = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (!spending_object[category]) {
      spending_object[category] = price;
    } else {
    
      spending_object[category] += price;
    }
  });

  const resultArray = Object.keys(spending_object).map(category => ({
    category: category,
    totalSpent: spending_object[category]
  }));

  return resultArray;
}


// const transactions = [
//   { itemName: 'Item1', category: 'Groceries', price: 50, timestamp: Date.now() },
//   { itemName: 'Item2', category: 'Electronics', price: 200, timestamp: Date.now() },
//   { itemName: 'Item3', category: 'Groceries', price: 30, timestamp: Date.now() },
 
// ];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);


module.exports = calculateTotalSpentByCategory;
