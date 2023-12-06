/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for (let index = 0; index < transactions.length; index++) {
    let element = transactions[index];
    let category = element.category;
    let price = element.price;
    let found = false;
    for (let idx = 0; idx < result.length; idx++) {
      if(result[idx].category === category){
        result[idx].totalSpent += price;
        found = true;
        break;
      }
    }
    if(!found){
      result.push({ category: category, totalSpent: price })
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
