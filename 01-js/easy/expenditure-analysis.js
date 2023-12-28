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
  var response = [];
  for (let i = 0; i < transactions.length; i++) {
    transactionsCategory = transactions[i].category;
    transactionsTotalSpent = transactions[i].price;
    if (i == 0) {
      response = [
        {
          category: transactionsCategory,
          totalSpent: transactionsTotalSpent,
        },
      ];
      continue;
    }
    let categoryIndex = getcategoryIndex(response, transactionsCategory);
    if (categoryIndex > -1) {
      response[categoryIndex].totalSpent += transactionsTotalSpent;
    } else {
      response.push({
        category: transactionsCategory,
        totalSpent: transactionsTotalSpent,
      });
    }
  }
  return response;
}

function getcategoryIndex(res, tcategory) {
  let index = -1;
  for (let i = 0; i < res.length; i++) {
    if (res[i].category == tcategory) {
      index = i;
    }
  }
  return index;
}

module.exports = calculateTotalSpentByCategory;
