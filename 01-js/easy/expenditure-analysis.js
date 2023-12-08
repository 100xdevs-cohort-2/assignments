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
  let catMap = {}
  let retVal = []
  if(transactions.length==0){
    return [];
  }

  for (i=0;i<transactions.length;i++){
    if(!(transactions[i].category in catMap)){
      catMap[transactions[i].category] = 0;
    }
    catMap[transactions[i].category] += transactions[i].price;
  }
  
  // console.log(catMap)
  for (key in catMap){
    retVal.push({'category':key, 'totalSpent': catMap[key]})
  }
  console.log(retVal)
  return (retVal)
}
module.exports = calculateTotalSpentByCategory;
