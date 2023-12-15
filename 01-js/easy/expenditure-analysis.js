/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {}
  for(let i=0;i<transactions.length;i++){
    const category = transactions[i].category
    const price = transactions[i].price

    if(categoryTotals[category] === undefined){
      categoryTotals[category] = price
    }else{
      categoryTotals[category] += price
    }
  }
  const result = []
  for(let category in categoryTotals){
    const categoryTotal = {
      category: category,
      totalSpent :categoryTotals[category],
    }
    result.push(categoryTotal)
  }
  return result;
}

let transactions = [
  {
    itemName: "macbook",
    category: "laptop",
    price: 70000,
    timestamp: Math.floor(Date.now() / 1000)
  },
  {
    itemName: "iphone",
    category: "mobile",
    price: 50000,
    timestamp: Math.floor(Date.now() / 1000)
  },
  {
    itemName: "macbook pro",
    category: "laptop",
    price: 70000,
    timestamp: Math.floor(Date.now() / 1000)
  }
];

const result = calculateTotalSpentByCategory(transactions)
console.log(result)

module.exports = calculateTotalSpentByCategory;
