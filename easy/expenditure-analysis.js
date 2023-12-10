/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryTotals = {};
  for(let i=0; i<transactions.length;i++){
    const {category, price} = transactions[i];

    if(!categoryTotals[category]){
      categoryTotals[category] = 0;
    }
    categoryTotals[category] = categoryTotals[category] + price;
  }

  let result = []
  for(let category in categoryTotals){
    if (categoryTotals.hasOwnProperty(category)){
    let obj = {
      category: category,
      totalSpent: categoryTotals[category]
    }
    result.push(obj);
  }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
