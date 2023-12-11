/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalSpends = {};

  for(let i = 0; i < transactions.length; i++) {
      let transaction = transactions[i];
      let category = transaction["category"];
      let price = transaction["price"];

      if(totalSpends[category] == undefined)
          totalSpends[category] = 0
      totalSpends[category] += price
  }

  let categorySpends = [];
  for(let category in totalSpends) {
      let spend = {};
      spend["category"] = category;
      spend["totalSpent"] = totalSpends[category];
      categorySpends.push(spend);
  }

  return categorySpends;
}

module.exports = calculateTotalSpentByCategory;
