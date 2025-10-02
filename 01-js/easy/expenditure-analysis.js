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

function updateCategory(res, category, price) {
  for(let i=0; i<res.length; i++) {
    if(res[i].category === category) {
      res[i].totalSpent += price;
      return res;
    }
  }

  return [...res, {category: category, totalSpent: price}];
}

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for(let i=0; i<transactions.length; i++){
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    result = updateCategory(result, category, price);
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
