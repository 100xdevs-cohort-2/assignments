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
  // console.log(transactions)
  let alterd = {};
  for (let i = 0; i < transactions.length; i++) {
    let present = transactions[i].category;
    if (alterd[present]) {
      alterd[present] += transactions[i].price;
    } else {
      alterd[present] = transactions[i].price;
    }
  }

  console.log(alterd);

  let result = [];
  for (let res in alterd) {
    let obj = { category: res, totalSpent: alterd[res] };
    result.push(obj);
  }
  console.log(result);
  return result;
}

const transactions = [];

calculateTotalSpentByCategory(transactions);
module.exports = calculateTotalSpentByCategory;
