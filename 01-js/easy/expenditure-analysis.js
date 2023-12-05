/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = {};

  let output = [];

  transactions.forEach((transaction, index) => {
    if (result[transaction.category]) {
      result[transaction.category] += transaction.price;
    } else {
      result[transaction.category] = transaction.price;
    }
  });

  for (let ele in result) {
    output.push({ category: ele, totalSpent: result[ele] });
  }

  return output;
}
module.exports = calculateTotalSpentByCategory;
