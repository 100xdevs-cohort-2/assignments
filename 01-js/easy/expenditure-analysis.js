/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpentByCategory = {};

  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];

    if (totalSpentByCategory.hasOwnProperty(category)) {
      totalSpentByCategory[category] += price;
    } else {
      totalSpentByCategory[category] = price;
    }
  }



  return totalSpentByCategory;
}





module.exports = calculateTotalSpentByCategory;
