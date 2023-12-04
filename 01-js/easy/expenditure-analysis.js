/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
