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
  const list = [];
  const dict = {};
  transactions.forEach((element) => {
    if (dict.hasOwnProperty(element.category)) {
      dict[element.category] += element.price;
    } else {
      dict[element.category] = element.price;
    }
  });

  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      const value = dict[key];
      list.push({ category: key, totalSpent: value });
    }
  }

  return list;
}

module.exports = calculateTotalSpentByCategory;
