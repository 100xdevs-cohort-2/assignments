/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length === 0) return []

  const finalResult = []
  const categories = []
  let totalAmount = 0
  

  for (let i = 0; i < transactions.length; i++) {   // extracting all unique categories
    if (!categories.includes(transactions[i].category)) categories.push(transactions[i].category)
  }

  for (let i = 0; i < categories.length; i++) {
    const result = {
      category: '',
      totalSpent: 0
    }
    totalAmount = 0
    for (let j = 0; j < transactions.length; j++) {
      if (categories[i] === transactions[j].category) {
        totalAmount += transactions[j].price
      }
    }
    result.category = categories[i]
    result.totalSpent = totalAmount
    finalResult.push(result)
  }

  return finalResult;
}


module.exports = calculateTotalSpentByCategory;
