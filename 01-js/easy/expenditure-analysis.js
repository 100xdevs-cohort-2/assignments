/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // If there are no transactions, return empty array.
  if (transactions.length === 0) {
    return [];
  }
  let ans = [];
  // Store all the categories with their total price.
  let categoryWithAmount = {};
  for (let transaction of transactions) {
    // Get the category of current item.
    const category = transaction.category;
    // If the category is repeated, increment the total amount.
    if (categoryWithAmount[category]) {
      categoryWithAmount[category] += transaction.price;
    } else {
      // If the category comes first time, update the amount with current price.
      categoryWithAmount[category] = transaction.price;
    }
  }
  // Iterate over all the categories, create an object of the category name with total amount
  // and add it to the ans array.
  for (let category in categoryWithAmount) {
    ans.push({
      category: category,
      totalSpent: categoryWithAmount[category],
    });
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;