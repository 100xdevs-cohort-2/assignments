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

let ansArr=[]


  for(let j=0; j<transactions.length; j++){
    let obj = {}
    obj.category = transactions[j].category
    obj.totalSpent =0
    if (ansArr.some(item => item.category === obj.category)) continue;

    for(let i=0; i<transactions.length; i++){
      if(obj.category=== transactions[i].category){
        obj.totalSpent += transactions[i].price
      }
    } 

    ansArr.push(obj)
    
  }

  return ansArr;
}

module.exports = calculateTotalSpentByCategory;
