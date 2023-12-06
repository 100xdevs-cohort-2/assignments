/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // console.log(transactions)
  let alterd = {};
  for (let i = 0; i < transactions.length; i++) {
    let present = transactions[i].category;
    if (alterd[present]) {
      alterd[present] += transactions[i].price;
    } else {
      alterd[present] = transactions[i].price;
    }
  }

  console.log(alterd);

  let result = [];
  for (let res in alterd) {
    let obj = { category: res, totalSpent: alterd[res] };
    result.push(obj);
  }
  console.log(result);
  return result;
}

const transactions = [];

calculateTotalSpentByCategory(transactions);
module.exports = calculateTotalSpentByCategory;
