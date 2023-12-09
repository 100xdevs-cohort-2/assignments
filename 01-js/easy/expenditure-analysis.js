/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  var obj = {};
  for (var i = 0; i < transactions.length; i++) {
    var category = transactions[i].category;
    var price = transactions[i].price;
    if (category in obj) {
      obj[category] += price;
    } else {
      obj[category] = price;
    }
  }
  var all = Object.keys(obj).map((category) => ({
    category: category,
    totalSpent: obj[category],
  }));
  return all;
}

module.exports = calculateTotalSpentByCategory;
