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
