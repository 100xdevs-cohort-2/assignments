/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const spending_object = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (!spending_object[category]) {
      spending_object[category] = price;
    } else {
    
      spending_object[category] += price;
    }
  });

  const resultArray = Object.keys(spending_object).map(category => ({
    category: category,
    totalSpent: spending_object[category]
  }));

  return resultArray;
}


// const transactions = [
//   { itemName: 'Item1', category: 'Groceries', price: 50, timestamp: Date.now() },
//   { itemName: 'Item2', category: 'Electronics', price: 200, timestamp: Date.now() },
//   { itemName: 'Item3', category: 'Groceries', price: 30, timestamp: Date.now() },
 
// ];

// const result = calculateTotalSpentByCategory(transactions);
// console.log(result);


module.exports = calculateTotalSpentByCategory;
