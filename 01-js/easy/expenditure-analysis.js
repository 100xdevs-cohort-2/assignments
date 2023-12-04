/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryPriceMap = new Map()
  for (const transaction of transactions) {
    let categoryPrice = categoryPriceMap.get(transaction.category)
    categoryPriceMap.set(transaction.category, (categoryPrice ?? 0) + transaction.price)
  }

  let totalSpent = []
  for (const category of categoryPriceMap.keys()) {
    totalSpent.push({ category: category, totalSpent: categoryPriceMap.get(category) })
  }

  return totalSpent;
}

module.exports = calculateTotalSpentByCategory;
