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
  let arr = [];
  let categfound;
  for(let i = 0; i < transactions.length; i++) {
    let category = transactions[i]["category"];
    categfound = false;
    for(let j = 0; j < arr.length; j++){
      if(arr[j]["category"] == category){
        arr[j]["totalSpent"] += transactions[i]["price"];
        categfound = true;
        break;
      }
    }
      if(categfound == false){
        arr.push({
          category : transactions[i]["category"], 
          totalSpent : transactions[i]["price"]
        })
      
    }
  }
  return arr;
}

module.exports = calculateTotalSpentByCategory;
