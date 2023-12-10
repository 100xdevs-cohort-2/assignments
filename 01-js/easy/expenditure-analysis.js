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
  if (!transactions.length) return [];
  if (transactions.length === 1)
    return [
      { category: transactions[0].category, totalSpent: transactions[0].price },
    ];
  let results = new Array();
  for (let i = 0; i < transactions.length; i++) {
    if (
      results.some((result) => result.category === transactions[i].category)
    ) {
      let index = results.findIndex(
        (result) => result.category === transactions[i].category
      );
      results[index].totalSpent += transactions[i].price;
    } else
      results.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
  }
  return results;
}

module.exports = calculateTotalSpentByCategory;
