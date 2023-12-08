/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  const ans = [];

  for(let i = 0; i<transactions.length; i++) {
    let flag = true;
    for(let j =0; j<ans.length; j++) {
      if(transactions[i].category == ans[j].category)
      {
        ans[j].totalSpent = ans[j].totalSpent+ transactions[i].price;
        flag = false;
        break;
      }

    }
    if(flag) {
      ans.push({category:transactions[i].category, totalSpent:transactions[i].price});
    }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;