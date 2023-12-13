/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const output = {};
  transactions.forEach((transection) => {
    const category = {};
    if (transection.category in output) {
      output[transection.category] += transection.price;
    } else {
      output[transection.category] = transection.price;
    }
  });

  const obj = [];
  for (let ele in output) {
    obj.push({ category: ele, totalSpent: output[ele] });
  }
  return obj;
}

module.exports = calculateTotalSpentByCategory;
