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
  
  let ans = [];

  for(let i = 0; i < transactions.length; i++){
    let value = transactions[i].price;
    let cat = transactions[i].category;
    
    let flag = false;

    for(let j = 0; j < ans.length; j++){
      if(ans[j].category === cat){
        ans[j].totalSpent += value;
        flag = true;
        break;
      }
    }

    if(!flag){
      ans.push({category: cat, totalSpent: value});
    }

  }
  
  return ans;
}

module.exports = calculateTotalSpentByCategory;
