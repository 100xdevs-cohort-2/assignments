/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let map = new Map();
  for (let i = 0; i < transactions.length; i++) {
    let categoryName = transactions[i].category;
    let val = transactions[i].price;
    if (map.has(categoryName)) {
      let newVal = map.get(categoryName) + val;
      map.set(categoryName, newVal);
    } else {
      map.set(categoryName, val);
    }
  }

  let transactionArray = [];
  if (transactions.length == 0) return transactionArray;
  for (let [key, value] of map) {
    let categoryObject = {};
    categoryObject["category"] = key;
    categoryObject["totalSpent"] = value;
    transactionArray.push(categoryObject);
  }

  return transactionArray;
}

module.exports = calculateTotalSpentByCategory;
