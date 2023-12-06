/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
