
function calculateTotalSpentByCategory(transactions) {

  //categories stores all the unique categories
  //totalSpent stores the total spent for each category
  //result stores the final result

  let categories = [];
  let totalSpent = [];
  let result = [];
  // Iterate through the transactions array
transactions.forEach(transaction => {
  // If the current transaction's category is not already in the categories array
  if (!categories.includes(transaction.category)) {
    // Add the category to the categories array
    categories.push(transaction.category);
  }
});

// Iterate through the categories array
categories.forEach(category => {
  // Initialize a variable to keep track of the total spent in the current category
  let spent = 0;

  // Iterate through the transactions array again
  transactions.forEach(transaction => {
    // If the current transaction's category matches the current category
    if (transaction.category == category) {
      // Add the transaction's price to the total spent in the current category
      spent += transaction.price;
    }
  });

  // Add an object to the result array that contains the current category and the total spent in that category
  result.push({ category: category, totalSpent: spent });
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
