/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let category = transaction.category;
    let price = transaction.price;
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j].category === category) {
        result[j].totalSpent += price;
        found = true;
        break;
      }
    }
    if (!found) {
      result.push({ category: category, totalSpent: price });
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
