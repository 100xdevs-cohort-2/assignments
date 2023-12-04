/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let obj = []
  for (let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;

    if (category in obj) {
      obj[category] += transactions[i].price
    }
    else {
      obj[category] = transactions[i].price
    }
  }

  let objs = []
  for (k in obj) {
    objs.push({
      category: k,
      totalSpent: obj[k]
    })
  }

  return objs;
}

module.exports = calculateTotalSpentByCategory;