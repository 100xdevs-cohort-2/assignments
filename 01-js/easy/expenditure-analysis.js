/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Calculate total spent for each category
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    categoryTotals[category] = (categoryTotals[category] || 0) + price;
  });

  // Convert the result into an array of objects
  const result = Object.keys(categoryTotals).map(category => ({
    [category]: categoryTotals[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
