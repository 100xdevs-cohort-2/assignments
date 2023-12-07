/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];

  for (let i = 0; i < transactions.length; i++){
    let categoryOriginal = transactions[i].category;
    let price = transactions[i].price;
    
    existingCategory = result.find( el => el.category == categoryOriginal )
    if(existingCategory){
      existingCategory.totalSpent += price
    }
    else{
      result.push({category : categoryOriginal, totalSpent : price})
    }

  }

  return result;
}


module.exports = calculateTotalSpentByCategory;
