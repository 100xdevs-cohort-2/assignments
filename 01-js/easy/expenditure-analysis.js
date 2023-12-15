/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
