/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpentBasedOnCategory = {};

  transactions.map((transaction) => {
    if (!totalSpentBasedOnCategory[transaction.category]) {
      totalSpentBasedOnCategory[transaction.category] = transaction.price;
    } else {
      totalSpentBasedOnCategory[transaction.category] += transaction.price;
    }
  });

  const expenditureByCategory = [];

  for (category in totalSpentBasedOnCategory) {
    let key = category;
    let calcutedExpenseofOneCat = {
      category: key,
      totalSpent: totalSpentBasedOnCategory[key],
    };
    expenditureByCategory.push(calcutedExpenseofOneCat);
  }

  return expenditureByCategory;
}

module.exports = calculateTotalSpentByCategory;
