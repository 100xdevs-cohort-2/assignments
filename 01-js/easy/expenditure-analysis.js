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
  // this is the dict we return we just make it into a array later
  let dict = {};
  // for loop to iterate over the given list of transactions (objects)
  for (let i = 0; i < transactions.length; i++) {
    // if the key already exists than add, otherwise initialise
    if (transactions[i]["category"] in dict) {
      dict[transactions[i]["category"]] += transactions[i]["price"];
    } else {
      dict[transactions[i]["category"]] = transactions[i]["price"];
    }
  }
  // return the array version of the dict
  return [dict];
}

module.exports = calculateTotalSpentByCategory;
