/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let category_map = new Map();
  for(let obj of transactions){
    if (category_map.has(obj["category"])) {
      category_map.set(obj["category"], category_map.get(obj["category"]) + obj["price"])
    } else{
      category_map.set(obj["category"], obj["price"])
    }
  }
  let ans = []
  for( let [key,value] of category_map) {
    ans.push({"category":key, "totalSpent":value});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
