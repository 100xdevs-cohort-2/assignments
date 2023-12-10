/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalExpense = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    if (totalExpense[category] === undefined) {
      totalExpense[category] = price;
    } else {
      totalExpense[category] += price;
    }
  }

  const result = Object.entries(totalExpense).map(([category, price]) => ({
    category: category,
    totalSpent: price,
  }));

  // return [ {category :transactions[category] , totalSpent : transactions.price }];
  return result;
}

module.exports = calculateTotalSpentByCategory;
