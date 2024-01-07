/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpent = {};

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].category in totalSpent) {
      totalSpent[transactions[i].category] += transactions[i].price;
    } else {
      totalSpent[transactions[i].category] = transactions[i].price;
    }
  }

  const categoryTotalPrice = [];
  for (let category in totalSpent) {
    categoryTotalPrice.push({
      category: category,
      totalSpent: totalSpent[category],
    });
  }
  return categoryTotalPrice;
}

module.exports = calculateTotalSpentByCategory;
