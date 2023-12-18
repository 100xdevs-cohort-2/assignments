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
  
  const ans = [];

  for(let i = 0; i<transactions.length; i++) {
    let flag = true;
    for(let j =0; j<ans.length; j++) {
      if(transactions[i].category == ans[j].category)
      {
        ans[j].totalSpent = ans[j].totalSpent+ transactions[i].price;
        flag = false;
        break;
      }

    }
    if(flag) {
      ans.push({category:transactions[i].category, totalSpent:transactions[i].price});
    }
  }
  return ans;

}

module.exports = calculateTotalSpentByCategory;
