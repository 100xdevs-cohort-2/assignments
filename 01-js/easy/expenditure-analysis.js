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
  hm = {};
  for (const obj of transactions) {
    if (hm[obj.category] == undefined) {
      hm[obj.category] = obj.price;
    } else {
      hm[obj.category] += obj.price;
    }
  }
  console.log(hm);
  result = [];
  if (!hm) {
    return [];
  }
  for (const cate in hm) {
    result.push({ category: cate, totalSpent: hm[cate] });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
