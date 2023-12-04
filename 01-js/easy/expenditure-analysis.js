/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const n = transactions.length;
  const ans = [];

  for (let transaction of transactions) {
    const index = ans.findIndex ((c) => c.category === transaction.category);
    if (index === -1) ans.push ({category: transaction.category, totalSpent: transaction.price});
    else ans[index].totalSpent += transaction.price;
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
