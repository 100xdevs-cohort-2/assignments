/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categorySpends = {};
  transactions?.forEach((transaction) => {
    const { category, price } = transaction;
    if (categorySpends[category] == undefined) categorySpends[category] = price;
    else categorySpends[category] += price;
  });
  const result = Object.keys(categorySpends)?.map((item) => ({
    category: item,
    totalSpent: categorySpends[item],
  }));
  return result;
}

module.exports = calculateTotalSpentByCategory;
