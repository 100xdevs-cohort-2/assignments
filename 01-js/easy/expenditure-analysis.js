/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

const calculateTotalSpentByCategory = transactions => {
  const hash = {};
  const ans = [];

  for (let transaction of transactions) {
    const { category, price } = transaction;
    if (category in hash) {
      ans[hash[category]].totalSpent += price;
    } else {
      hash[category] = ans.length;
      ans.push({ category, totalSpent: price });
    }
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
