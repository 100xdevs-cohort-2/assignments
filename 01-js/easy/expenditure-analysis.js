/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];

  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];
    let category = transaction.category;
    let price = transaction.price;

    let index = ans.findIndex(obj => obj.category === category);

    if (index !== -1) {
      ans[index].totalSpent += price;
    } else {
      ans.push({
        category: category,
        totalSpent: price
      });
    }
  }

  console.log("ANS ARRAY", ans);
  return ans;
}

module.exports = calculateTotalSpentByCategory;


module.exports = calculateTotalSpentByCategory;
