/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length === 0){
    return []
  }

  let spent = {};

  transactions.forEach((item) => {
    if(spent[item.category]){
      spent[item.category].totalSpent = spent[item.category].totalSpent + item.price; 
    } else {
      spent[item.category] = {
        category: item.category,
        totalSpent: item.price,
      }
    }
  });

  return Object.values(spent)
}

module.exports = calculateTotalSpentByCategory;
