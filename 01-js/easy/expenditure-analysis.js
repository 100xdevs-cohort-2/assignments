/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  
  if (transactions.length === 0) return ans;

  // Initialize the first category
  ans.push({
    category: transactions[0].category,
    totalSpent: transactions[0].price,
  });

  for (let i = 1; i < transactions.length; i++) {
    let price = transactions[i].price;
    let category = transactions[i].category;
    
    let categoryAlreadyExist = false;

    for (let j = 0; j < ans.length; j++) {
      if (ans[j].category === category) {
        ans[j].totalSpent += price;
        categoryAlreadyExist = true;
        break;
      }
    }

    if (!categoryAlreadyExist) {
      ans.push({
        category: category,
        totalSpent: price
      });
    }
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;


module.exports = calculateTotalSpentByCategory;
