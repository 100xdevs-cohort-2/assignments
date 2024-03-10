/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length==0) {
      return [];
  }
  let result={};
  transactions.forEach(transaction=>{
      if(result[transaction.category])
      {
          result[transaction.category].totalSpent+=transaction.price;
      }
      else
      {
          result[transaction.category]={
              category:transaction.category,
              totalSpent: transaction.price,
          }
      }
  });
  return Object.values(result);
}

module.exports = calculateTotalSpentByCategory;
