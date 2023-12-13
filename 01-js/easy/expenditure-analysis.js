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
  let final = {};
  for(let i=0; i<transactions.length; i++) {
      if(final[transactions[i]['category']]) {
          final[transactions[i]['category']] += transactions[i]['price'];
      } else {
          final[transactions[i]['category']] = transactions[i]['price'];
      }
  }
  let answer = [];
  let keys = Object.keys(final);
  for(let key of keys) {
      let obj = {};
      obj['category'] = key;
      obj['totalSpent'] = final[key];
      answer.push(obj);
  }
  return (answer);
}

module.exports = calculateTotalSpentByCategory;
