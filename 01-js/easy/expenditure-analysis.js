/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let nums = [];
  let obj = {};
  for(let i = 0 ; i < transactions.length ; i++)
  {

    const temp = transactions[i];
    let cat = transactions[i]['category'];
    let cost = transactions[i]['price']
    console.log(cat);
    console.log(cost);
    obj[cat] =  (obj[cat] || 0) + cost;
  }

  for(let key in obj)
  {
    let prices = obj[key];
    nums.push({category : key , totalSpent : prices})
    console.log()
  }

  return nums;
}

module.exports = calculateTotalSpentByCategory;
