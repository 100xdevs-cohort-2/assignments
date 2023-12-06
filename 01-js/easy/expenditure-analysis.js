/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = [];
  for (let i = 0; i < transactions.length; i++) {
    const {category, price} = transactions[i];
    const existingItem = result.find(item => item.category === category);
    if (!existingItem) {
      result.push({category: category, totalSpent: price});
    }
    else {
      let index = result.indexOf(existingItem);
      const updatedItem = {...existingItem, totalSpent: existingItem.totalSpent + price};
      result = [...result.slice(0,index), updatedItem, ...result.slice(index+1)];
    }
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
