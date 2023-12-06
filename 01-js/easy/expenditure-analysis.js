/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryObject = {};
  
  for(let transaction of transactions){
      if(!categoryObject[transaction.category]){
        categoryObject[transaction.category] = {
          category : transaction.category,
          totalSpent: transaction.price 
        }
      }else{
        categoryObject[transaction.category].totalSpent += transaction.price; }
  }
  
  return Object.values(categoryObject);
}

module.exports = calculateTotalSpentByCategory;
