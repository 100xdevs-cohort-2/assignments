/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalByCategory = {};

  // Iterate over each transaction and accumulate the total spent by category
  transactions.forEach(transaction => {
      if (totalByCategory.hasOwnProperty(transaction.category)) {
          totalByCategory[transaction.category] += transaction.price;
      } else {
          totalByCategory[transaction.category] = transaction.price;
      }
  });

  // Convert the totals into an array of objects with the required format
  return Object.keys(totalByCategory).map(category => {
      return { 
          category: category, 
          totalSpent: totalByCategory[category] 
      };
  });
}



module.exports = calculateTotalSpentByCategory;
