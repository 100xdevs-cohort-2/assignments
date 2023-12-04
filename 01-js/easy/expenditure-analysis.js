/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoriesExpenditure = {};
  let result = [];

  for(const transaction of transactions) {
    if(categoriesExpenditure[transaction.category]) {
      categoriesExpenditure[transaction.category] += transaction.price;
    } else {
      categoriesExpenditure[transaction.category] = transaction.price;
    }
  }

  for(const category of Object.keys(categoriesExpenditure)) {
    result.push({category: category, totalSpent: categoriesExpenditure[category]})
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
