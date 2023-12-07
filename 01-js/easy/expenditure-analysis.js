/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Object to store category totals
  const categoryTotals = {};

  // Array to store the final result
  const result = [];

  // If transactions is falsy (null or undefined), return an empty result array
  if (!transactions) return result;

  // Loop through each transaction in the transactions array
  transactions.forEach((transaction) => {
    // Update or initialize the category total in the categoryTotals object
    categoryTotals[transaction.category] =
      (categoryTotals[transaction.category] || 0) + transaction.price;
  });

  // Loop through each category in categoryTotals object
  for (let key in categoryTotals) {
    // Check if the property is directly on the object and not inherited
    if (categoryTotals.hasOwnProperty(key)) {
      // Get the value (total spent) for the current category
      const value = categoryTotals[key];

      // Push an object with category and totalSpent properties to the result array
      result.push({
        category: key,
        totalSpent: value,
      });
    }
  }

  // Return the final result array
  return result;
}

module.exports = calculateTotalSpentByCategory;
