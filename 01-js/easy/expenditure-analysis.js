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
  const categoryWiseSpent = {};

  transactions.forEach((element) => {
    if (categoryWiseSpent[element.category])
      categoryWiseSpent[element.category] += element.price;
    else categoryWiseSpent[element.category] = element.price;
  });

  const ans = [];

  for (const [category, spend] of Object.entries(categoryWiseSpent)) {
    ans.push({ category, totalSpent: spend });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
