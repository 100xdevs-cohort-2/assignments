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
  let Totalspend = []
  let dict = {}
  for(let transaction of transactions) {
    // console.log(transaction)
    if (transaction.category in dict) {
      dict[transaction.category] += transaction.price;
    }
    else {
      dict[transaction.category] = transaction.price;
    }
  }
  // console.log(dict)

  for(let key in dict) {
    // console.log("Category " + cat);
    Totalspend.push({category: key, totalSpent: dict[key]})
  }

  // console.log(Totalspend)
  return Totalspend;
}

module.exports = calculateTotalSpentByCategory;
