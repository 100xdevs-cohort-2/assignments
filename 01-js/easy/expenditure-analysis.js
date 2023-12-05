/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const ct = new Map();
  transactions.forEach(transaction => {
    const { category, price } = transaction;
    const cur_total = ct.get(category) || 0;
    ct.set(category, cur_total + price);
  });

  const result = Array.from(ct, ([category, amount]) => ({
    [category]: amount
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
