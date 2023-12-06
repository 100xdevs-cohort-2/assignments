/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  let map ={}
  let ans=[]
  for(let transaction of transactions){
      if( ! (transaction.category in map)){
        map[transaction.category]=Number(0);
      }
      map[transaction.category]+=parseInt(transaction.price);
  }
  // console.log(map)
  let categories=Object.keys(map);
  for(let category of categories){
    ans.push({"category":category,"totalSpent":map[category]})
  }
  return ans;
}


module.exports = calculateTotalSpentByCategory;
