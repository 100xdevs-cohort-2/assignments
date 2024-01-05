/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let finalCat = [];
  let totalAmount = [];

  let result = [];

  for (let i = 0; i < transactions.length; i++) {
    if (finalCat.includes(transactions[i].category)) {
      let pos = finalCat.indexOf(transactions[i].category);
      totalAmount[pos] = totalAmount[pos] + transactions[i].price;
    } else {
      finalCat.push(transactions[i].category);
      totalAmount.push(transactions[i].price);
    }
  }

  for (let i = 0; i < finalCat.length; i++) {
    let obj = {
      category: finalCat[i],
      totalSpent: totalAmount[i],
    };
    result.push(obj);
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
