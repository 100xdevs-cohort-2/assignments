/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store total amounts spent by category
  const categoryTotals = {};

  // Iterate through the transactions
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category is not in categoryTotals, initialize it with the current price
    if (!categoryTotals[category]) {
      categoryTotals[category] = price;
    } else {
      // If the category already exists, add the current price to the total
      categoryTotals[category] += price;
    }
  });

  // Convert categoryTotals object to an array of objects
  const result = Object.entries(categoryTotals).map(([category, totalAmount]) => ({
    [category]: totalAmount,
  }));

  return result;
}

// Example usage:
const transactions = [
  { itemName: 'Item1', category: 'Food', price: 10, timestamp: 123456789 },
  { itemName: 'Item2', category: 'Clothing', price: 20, timestamp: 123456790 },
  { itemName: 'Item3', category: 'Food', price: 15, timestamp: 123456791 },
  { itemName: 'Item4', category: 'Electronics', price: 30, timestamp: 123456792 },
  { itemName: 'Item5', category: 'Clothing', price: 25, timestamp: 123456793 },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);











module.exports = calculateTotalSpentByCategory;
