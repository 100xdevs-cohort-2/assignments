/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
