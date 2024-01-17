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
  const answerArray = []
  let categoriesDone = []
  for(let i of transactions){
    if(!categoriesDone.includes(i['category'])){
      categoriesDone.push(i['category'])
      answerArray.push(
        {
          "category" : i['category'],
          'totalSpent' : i['price']
        }
      )
    }
    else{
      let index = categoriesDone.indexOf(i.category)
      answerArray[index].totalSpent += i.price
    }
  }
  return answerArray;
}

module.exports = calculateTotalSpentByCategory;
