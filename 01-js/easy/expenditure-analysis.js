/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
  console.log(transactions);
  const totals = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (!totals[category]) {
      totals[category] = price;
    } else {
      totals[category] += price;
    }
  });

  const result = [];
  Object.keys(totals).forEach((category) => {
    result.push({ category: category, totalSpent: totals[category] });
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
