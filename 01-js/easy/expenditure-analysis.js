/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions = []) {
  // const categories = transactions.map((transaction) => transaction.category);
  const exp = {};
  for (const transaction of transactions) {
    if (!exp[transaction.category]) {
      exp[transaction.category] = transaction.price;
    } else {
      exp[transaction.category] += transaction.price;
    }
  }

  return Object.entries(exp).map(val => ({ category: val[0], totalSpent: val[1] }));
}

module.exports = calculateTotalSpentByCategory;
