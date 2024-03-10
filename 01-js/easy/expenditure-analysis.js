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
  let newArr = []
  let newObj = {}
  transactions.forEach(element => {
    const { category, price } = element;
    if (!newObj[category]) {
      newObj[category] = price
    }
    else {
      newObj[category] += element.price
    }
  });

  for (const key in newObj) {
    const obj = {}
    obj[key] = newObj[key]
    newArr.push(obj)
  }
  return newArr;
}
module.exports = calculateTotalSpentByCategory;
