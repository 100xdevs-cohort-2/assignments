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
  let expenditure = [];
  let categories = [];
  for(let transaction of transactions)
  {
      if(!categories[transaction.category])
      {
        let newLen = expenditure.push({category: transaction.category, totalSpent: transaction.price});
        categories[transaction.category] = newLen;
      }
      else
      {
        expenditure[categories[transaction.category] - 1].totalSpent += transaction.price;
      }
  }

  return expenditure;
}

module.exports = calculateTotalSpentByCategory;
