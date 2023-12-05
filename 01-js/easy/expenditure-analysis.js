/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryList = []
  const output = []
  transactions.forEach(transaction => {
    if (!categoryList.includes(transaction.category)) {
      categoryList.push(transaction.category)
    }
  })
  categoryList.forEach(category => {
    let price = 0;
    transactions.forEach(transaction => {
      if (transaction.category === category){
        price += transaction.price
      }
    })
    output.push({category,totalSpent: price})
  })
  return output;
}

module.exports = calculateTotalSpentByCategory;
