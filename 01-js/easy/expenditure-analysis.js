/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpendByCategory = []
  let catPriceDict = {}
  for(let transaction of transactions) {
    // console.log(transaction)
    if (transaction.category in catPriceDict) {
      catPriceDict[transaction.category] += transaction.price;
    }
    else {
      catPriceDict[transaction.category] = transaction.price;
    }
  }
  // console.log(catPriceDict)

  for(let cat in catPriceDict) {
    // console.log("Category " + cat);
    totalSpendByCategory.push({category: cat, totalSpent: catPriceDict[cat]})
  }

  // console.log(totalSpendByCategory)
  return totalSpendByCategory;
}

module.exports = calculateTotalSpentByCategory;

// console.log(calculateTotalSpentByCategory(transactions))