/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalExpenses = {};

  //populate the totalExpenses
  for(let i=0; i<transactions.length; i++){
    const {category, price} = transactions[i];
    if(totalExpenses[category] === undefined){
      totalExpenses[category] = price;
    }
    else totalExpenses[category] += price;
  }

  //creation of results object
  const results = Object.entries(totalExpenses).map(([category, total])=>({
    "category" : category,
    "totalSpent" : total
  }));

  return results;
}

module.exports = calculateTotalSpentByCategory;
