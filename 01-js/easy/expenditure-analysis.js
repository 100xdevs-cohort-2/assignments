/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const answer = Object.values(transactions.reduce((acc, transaction)=>{
    let {category, price} = transaction;
    if(!acc[category]){
      acc[category] = {category, totalSpent:0};
    }
    acc[category].totalSpent+=price;
    return acc;
  }, {}));
  return answer;
}

module.exports = calculateTotalSpentByCategory;
