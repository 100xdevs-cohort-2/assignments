/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  //Initialize an empty object to store the total spent on each category
  const categoryTotals = {};

  //calculate total amount spent on each category
  transactions.forEach((transaction) => {
    if (categoryTotals[transaction.category]) {
      categoryTotals[transaction.category] =
        categoryTotals[transaction.category] + transaction.price;
    } else {
      categoryTotals[transaction.category] = transaction.price;
    }
  });
  const Output = Object.entries(categoryTotals).map(([category, total]) => ({
   category,
   totalSpent : total,
  }));

  return Output;
}

module.exports = calculateTotalSpentByCategory;
