/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 } , { category2 - total_amount_spent_on_category2 }]
*/

// here transaction is the list of the objects
function calculateTotalSpentByCategory(transactions) {
  let categoryTotal = {};
  for (let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      let category = transaction.category;
      let price = transaction.price;

      if (category in categoryTotal) {
          categoryTotal[category] += price;
      } else {
          categoryTotal[category] = price;
      }
  }
  let result = [];
  for (let category in categoryTotal) {
      let price = categoryTotal[category];
      let temp = {
          category: category,
          totalSpent: price,
      };
      result.push(temp);
  }

  return result;
}
module.exports = calculateTotalSpentByCategory;