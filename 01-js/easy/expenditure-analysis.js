/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  const categoryPriceMap = new Map();
  transactions.forEach(el => {
    if(!categoryPriceMap.has(el.category)) {
      categoryPriceMap.set(el.category, el.price);
    } else {
      let price = categoryPriceMap.get(el.category) + el.price;
      categoryPriceMap.set(el.category, price);
    }
  });

  categoryPriceMap.forEach((value, key) =>{
    output.push({category: key, totalSpent: value});
  });
  return output;
}

module.exports = calculateTotalSpentByCategory;
