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
  let output = []
  let obj1 ={}
  for (let i = 0; i < transactions.length; i++){
    if(transactions[i]["category"] in obj1 ){
      obj1[transactions[i]["category"]] += transactions[i].price
    }else{
    obj1[transactions[i]["category"]] = transactions[i].price
  }
  }
  for(let category in obj1){
    output.push({category: category,totalSpent: obj1[category]})
  }
  
  return output
}


module.exports = calculateTotalSpentByCategory;
