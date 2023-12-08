/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
