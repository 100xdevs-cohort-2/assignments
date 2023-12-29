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
  let sol = {}
  for(let transaction of transactions){
    if(!(transaction.category in sol)){
      sol[transaction.category] = 0 
    }
    sol[transaction.category] += transaction.price 
    console.log(sol)
  }
  let result = []
  for(let key in sol){
    let obj = {}
    obj["category"] = key
    obj["totalSpent"] = sol[key]
    result.push(obj)
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
