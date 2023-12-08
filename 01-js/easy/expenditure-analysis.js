/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  // steps
  // iterate through the array of objects and store the cost per categories as an object
  // iterate through the keys of cost per categories object and push the object as expected

  // time complexity - O(n)
  // space complexity - O(n) In the worst case total no. transactions === total unique categories
  
  let result = [];
  let costPerCategories = {};

  transactions.forEach(transaction => {
    let category = transaction["category"];
    costPerCategories[category] = (costPerCategories[category] || 0) + transaction["price"]; 
  });

  for(let category of Object.keys(costPerCategories))
  {
    result.push({
      "category" : category,
      "totalSpent" : costPerCategories[category]
    })
  }

  return result;
  
}


module.exports = calculateTotalSpentByCategory;
