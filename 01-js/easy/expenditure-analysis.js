/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let cal = {};
  for (let idx in transactions) {
    const { category, price } = transactions[idx];

    if (cal[category]) {
      cal[category] += price;
    } else {
      cal[category] = price;
    }
  }
  let res = [];
  for (let category in cal) {
    let obj = {
      category: category,
      totalSpent: cal[category],
    };
    res.push(obj);
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
