/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let map = {} 
  for(let x in transactions){
    if(!(transactions[x]['category'] in map)){
      map[transactions[x]['category']] = 0 ; 
    }
    map[transactions[x]['category']]+=transactions[x]['price'] ; 
  }

  let res = [] 
  for(let i in map){
    res.push({category :i , totalSpent:map[i]});
  }
  return res ; 
}

module.exports = calculateTotalSpentByCategory;
