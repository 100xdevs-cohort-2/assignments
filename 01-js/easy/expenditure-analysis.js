/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  expenditures = [];

  for(let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let foundExpenditure = false;
    for (let j = 0; j < expenditures.length; j++) {
      let expenditure = expenditures[j];
      if(transaction.category === expenditure.category) {
        foundExpenditure = true;
        expenditures[j].totalSpent += transaction.price;
      }
    }
    if(!foundExpenditure) {
      expenditures.push({
        category: transaction.category,
        totalSpent: transaction.price
      })
    }
  }

  return expenditures;
}

module.exports = calculateTotalSpentByCategory;
