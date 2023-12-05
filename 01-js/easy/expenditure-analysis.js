/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const  aggregateObject = {};
  transactions.forEach(transaction => {
    aggregateObject[transaction.category] = aggregateObject[transaction.category] 
                                              ? aggregateObject[transaction.category] + transaction.price
                                              : transaction.price;
  });
  return Object.entries(aggregateObject).map(([key,val]) => {return {category : key, totalSpent : val}; });
}

module.exports = calculateTotalSpentByCategory;
