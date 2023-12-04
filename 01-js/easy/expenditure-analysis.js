/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let category_expenditure = {};
  for (let i = 0; i < transactions.length; i++) {
    const current_category = transactions[i].category;
    const current_price = transactions[i].price;
    if (!category_expenditure[current_category]) {
      category_expenditure[current_category] = current_price;
    }
    else {
      category_expenditure[current_category] += current_price;
    }
  }

  const results_array = Object.keys(category_expenditure).map((current_category) => ({
    category: current_category,
    totalSpent: category_expenditure[current_category],
  }));

  console.log(results_array);
  return results_array;
}

module.exports = calculateTotalSpentByCategory;
