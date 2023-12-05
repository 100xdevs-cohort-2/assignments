/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  let total_amt = [];
  for (let i = 0; i<transactions.length;i++){
    if (!categories.includes(transactions[i].category)){
      categories.push(transactions[i].category)   
      total_amt.push(transactions[i].price)  
    } else {
      total_amt[categories.indexOf(transactions[i].category)] = total_amt[categories.indexOf(transactions[i].category)] + transactions[i].price; 
    }
  }
  let output = [];
  for (let i = 0; i<categories.length;i++){
    const item = {
      category:categories[i],
      totalSpent:total_amt[i]
    }
    output.push(item)
  }
  return output;
}

module.exports = calculateTotalSpentByCategory;
