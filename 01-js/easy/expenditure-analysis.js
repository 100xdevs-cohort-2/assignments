/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
 /* let result = {};

  for (let transaction of transactions) {
    const { category, price } = transaction
    ;

    if (!result[category]) {
      result[category] = 0;
    }

    result[category] += price;
  }

  // Convert result object to the desired output format
  const output = Object.entries(result).map(([category, totalAmount]) => ({
    [category]: totalAmount,
  }));

  return output;*/

  let expenses = {};
  for (const tnx of transactions) {
    expenses[tnx.category] = (expenses[tnx.category] || 0) + tnx.price;
  }

  let output = [];
  for (const category of Object.keys(expenses)) {
    const categoryObj = {};
    categoryObj[category] = expenses[category];
    output.push(categoryObj);
  }

  return output;
}

module.exports = calculateTotalSpentByCategory;
