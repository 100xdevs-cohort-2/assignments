/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  var result = [];
  var categories = new Set();

  transactions.forEach(function (transaction) {
    categories.add(transaction.category);
  });

  categories.forEach(function (category) {
    var total = 0;
    transactions.forEach(function (transaction) {
      if (category === transaction.category) {
        total += transaction.price;
      }
    });
    let ans = { category: category, totalSpent: total };
    result.push(ans);
  });

  return result;
}

module.exports = calculateTotalSpentByCategory;
