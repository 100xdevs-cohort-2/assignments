/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  for (let transaction of transactions) {
      let existingCategory = ans.find(item => item.category === transaction.category);
      if (!existingCategory) {
          createCategory(transaction);
      } else {
          existingCategory.totalSpent += transaction.price;
      }
  }

  function createCategory(currentTransaction) {
      ans.push({
          category: currentTransaction.category,
          totalSpent: currentTransaction.price,
      });
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
