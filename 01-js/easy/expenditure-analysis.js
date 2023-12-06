/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalcat = {};
  for (const { category, price } of transactions) {
    totalcat[category] = (totalcat[category] || 0) + price;
  }
  return Object.entries(totalcat).map((it) => {
    return { category: it[0], totalSpent: it[1] };
  });
}
module.exports = calculateTotalSpentByCategory;
