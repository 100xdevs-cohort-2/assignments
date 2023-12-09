/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
// {itemName:"Amway", "Category": FMCG, price: 100, timestamp: 2020-01-01}
function calculateTotalSpentByCategory(transactions) {
  let totals = {};
  for (let i = 0; i < transactions.length; i++) {
    if (totals[transactions[i].category]) {
      totals[transactions[i].category] += transactions[i].price;
    } else {
      totals[transactions[i].category] = transactions[i].price;
    }
  }
  let result = [];
  for (let category in totals) {
    let obj = {};
    obj['category'] = category;
    obj['totalSpent'] = totals[category];
    result.push(obj);
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;