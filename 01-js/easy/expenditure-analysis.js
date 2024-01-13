/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (categories[category]) {
      categories[category] += price;
    } else {
      categories[category] = price;
    }
  });
  const result = Object.entries(categories).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
  return result;
}

module.exports = calculateTotalSpentByCategory;
