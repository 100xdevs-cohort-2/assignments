  /*
    Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
    and return a list of objects where each object is (unique category-wise) and has total price spent as its value.
    Transaction - an object like { itemName, category, price, timestamp }.
    Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
  */

  function calculateTotalSpentByCategory(transactions) {
  // Create an object to store total amounts spent by category
  const totalSpentByCategory = {};

  // This loop iterates through each transaction in the transactions array.
  transactions.forEach((transaction) => {
    const { category, price, timestamp, itemName } = transaction;

    // this is same short way as // transaction.category // transaction.price // etc etc //
    // This block of code checks if the category already exists in the totalSpentByCategory object.
    // If it does, the price is added to the existing total for that category.
    // If not, a new entry is created for that category with the current price.

    // Check if the category already exists in the totalSpentByCategory object
    if (totalSpentByCategory.hasOwnProperty(category)) {
      // if the category exists, add the price to the existing total
      totalSpentByCategory[category].total += price;
    } else {
      // If the category doesn't exist, create a new entry with the current price
      totalSpentByCategory[category] = {
        category,
        itemName,
        total: price,
        timestamp,
      };
    }
  });

  // Transform the totalSpentByCategory object into an array of objects
  const result = Object.values(totalSpentByCategory);

  return result;
}

// Example usage:
const transactions = [
  { itemName: 'Item1', category: 'Food1', price: 20, timestamp: '2023-12-06' },
  { itemName: 'Item2', category: 'Clothing', price: 50, timestamp: '2023-12-06' },
  { itemName: 'Item3', category: 'Food', price: 30, timestamp: '2023-12-06' },
  { itemName: 'Item4', category: 'Electronics', price: 100, timestamp: '2023-12-06' },
  { itemName: 'Item5', category: 'Clothing', price: 25, timestamp: '2023-12-06' },
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
