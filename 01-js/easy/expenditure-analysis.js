/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  let categoryAndPrice = {};

  for (let transaction of transactions) {
    categoryAndPrice[transaction.category] = categoryAndPrice[transaction.category]
      ? categoryAndPrice[transaction.category] + transaction.price
      : transaction.price;
  }

  for (let category in categoryAndPrice) {
    result.push({ category: category, totalSpent: categoryAndPrice[category] });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
