/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
