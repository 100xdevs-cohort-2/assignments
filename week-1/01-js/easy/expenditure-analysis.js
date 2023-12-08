/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

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
