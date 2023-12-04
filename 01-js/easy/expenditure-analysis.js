/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let mapres = new Map();
  transactions.forEach(e => {

    if (mapres.has(e.category)) {
      let val = mapres.get(e.category);
      mapres.set(e.category, val + e.price);
    
    } else {
      mapres.set(e.category,e.price)
    }
  })
  return Array.from(mapres,([name,value])=>({name,value}))
}

module.exports = calculateTotalSpentByCategory;
