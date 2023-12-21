/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let expenditure = new Map();

  for(let obj of transactions){
    if(expenditure.has(obj["category"])){
       expenditure.set(obj["category"], expenditure.get(obj["category"]) + obj["price"]);
    }else{
      expenditure.set(obj["category"],obj["price"]);
    }

  }
  let result = [];
  for (let [key,value] of expenditure){
    result.push({"category": key, "totalSpent": value})

  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
