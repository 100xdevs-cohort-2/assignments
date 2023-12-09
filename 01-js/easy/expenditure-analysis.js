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
    let map1 = {};

    for (let i=0;i<transactions.length;i++){
        map1[transactions[i].category] = (map1[transactions[i].category] || 0) + transactions[i].price;
    }
    let ansArray = [];

    for (const key in map1){
        const value = map1[key];
        ansArray.push({category : key , totalSpent : value});
    }

    return ansArray;


}

module.exports = calculateTotalSpentByCategory;
