/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans=[];
  for(let i=0;i<transactions.length;i++){
    let x=transactions[i];
    let categoryExists = false;
    for(let j=0;j<ans.length;j++){
      if(ans[j]['category']===x['category']){
        ans[j]['totalSpent']+=x['price'];
        categoryExists = true;
        break;
      }
    }
    if(!categoryExists)
      ans.push({category:x['category'],totalSpent:x['price']});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
