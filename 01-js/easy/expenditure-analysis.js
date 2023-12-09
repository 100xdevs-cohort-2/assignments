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
  output={}
  for (let i =0;i<transactions.length;++i){
    
    output[transactions[i]['category']]=transactions[i]['price']+ (output[transactions[i]['category']]?output[transactions[i]['category']]:0)

  }

  finalOuput=[]
  obj=Object.entries(output)
  
  
  for (let [key,val] of obj) {
    tempObj={}
    tempObj.category=key
    tempObj.totalSpent=val
    finalOuput.push(tempObj)
    
  }


  return finalOuput;
}


module.exports = calculateTotalSpentByCategory;
