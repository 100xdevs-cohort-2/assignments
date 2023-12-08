/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpendByCategory = {};

  transactions.forEach(element => {
    if (totalSpendByCategory.hasOwnProperty(element.category)) {
      totalSpendByCategory[element.category] += element.price;
    } else {
      totalSpendByCategory[element.category] = element.price;
    }
  });

  return Object.keys(totalSpendByCategory).map(category => ({
    category,
    totalSpent: totalSpendByCategory[category]
  }));
}

module.exports = calculateTotalSpentByCategory;
