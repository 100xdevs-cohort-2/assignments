/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoriesMap = new Map();
  const ans = [];
  transactions.map((transaction) => {
    if (categoriesMap.has(transaction.category)) {
      categoriesMap.set(
        transaction.category,
        categoriesMap.get(transaction.category) + transaction.price
      );
    } else {
      categoriesMap.set(transaction.category, transaction.price);
    }
  });
  const updatedObject = Object.fromEntries(categoriesMap);
  for (let [key, value] of Object.entries(updatedObject)) {
    ans.push({
      category: key,
      totalSpent: value,
    });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
