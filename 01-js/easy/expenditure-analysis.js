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
	let objList = [];
	for (let i = 0; i < transactions.length; i++) {
		let cat = checkCategory(transactions[i]["category"], objList);
		if (cat != -1) {
			objList[cat]["totalSpent"] += transactions[i]["price"];
		} else {
			objList.push({
				"category": transactions[i]["category"],
				"totalSpent": transactions[i]["price"],
			});
		}
	}
	return objList;
}

function checkCategory(category, objList) {
	for (let i = 0; i < objList.length; i++) {
		if (objList[i]["category"] === category) {
			return i;
		}
	}
	return -1;
}

module.exports = calculateTotalSpentByCategory;
