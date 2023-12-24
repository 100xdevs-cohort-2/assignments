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
  totalSpentByCategories = []
  let flag = 0;
  for(transaction of transactions){
    flag = 0;
    categoryInTransaction = transaction.category;
    for(finalCategory of totalSpentByCategories){
      if(finalCategory.category == categoryInTransaction){
        finalCategory.totalSpent = finalCategory.totalSpent + transaction.price;
        flag = 1;
        break;
      }
    }
    if(flag == 0){
      let newObj = {};
      newObj["category"] = transaction.category
      newObj["totalSpent"] = transaction.price
      totalSpentByCategories.push(newObj)
    }
  }
  return totalSpentByCategories;
}

module.exports = calculateTotalSpentByCategory;
