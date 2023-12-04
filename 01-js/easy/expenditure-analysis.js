/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const set = new Set();
  transactions.forEach((t) => {
    set.add(t.category);
  });

  let list = [];

  set.forEach((s) => {
    list.push({
      category: s,
      totalSpent: transactions
        .filter((transaction) => transaction.category === s)
        .reduce((total, transaction) => total + transaction.price, 0),
    });
  });

  return list;
}

module.exports = calculateTotalSpentByCategory;
