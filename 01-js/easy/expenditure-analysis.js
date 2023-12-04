/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryObj = {};

  transactions.map((transaction) => {
    if (!categoryObj[transaction?.category]) {
      categoryObj[transaction?.category] = {
        category: transaction?.category,
        totalSpent: transaction?.price,
      };
    } else {
      categoryObj[transaction?.category]["totalSpent"] =
        categoryObj[transaction?.category]["totalSpent"] + transaction?.price;
    }
  });

  return Object.values(categoryObj);
}

module.exports = calculateTotalSpentByCategory;
