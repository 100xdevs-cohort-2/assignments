/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let final = {};
  for(let i=0; i<transactions.length; i++) {
      if(final[transactions[i]['category']]) {
          final[transactions[i]['category']] += transactions[i]['price'];
      } else {
          final[transactions[i]['category']] = transactions[i]['price'];
      }
  }
  let answer = [];
  let keys = Object.keys(final);
  for(let key of keys) {
      let obj = {};
      obj['category'] = key;
      obj['totalSpent'] = final[key];
      answer.push(obj);
  }
  return (answer);
}

module.exports = calculateTotalSpentByCategory;
