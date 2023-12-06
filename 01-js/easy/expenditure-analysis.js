/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotal = [];

  transactions.forEach((transaction) => {
    // Check if the category is already in the categoryTotal array
    const existingCategory = categoryTotal.find((cat) => cat.category === transaction.category);
    console.log(existingCategory);
    if (existingCategory) {
      // If the category exists, update the total spent
      existingCategory.totalSpent += transaction.price;
    } else {
      // If the category doesn't exist, add it to the array
      categoryTotal.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    }
  });

  return(categoryTotal);
}

module.exports = calculateTotalSpentByCategory;
