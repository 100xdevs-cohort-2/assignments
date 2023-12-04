/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
	let newArray = [];
	for (let item of transactions) {
		const { category, price } = item;
		let newObj = {};
		newObj.category = category;
		newObj.totalSpent = price;
		const index = newArray.findIndex((x) => x.category === category);
		if (index == -1) {
			newArray.push(newObj);
		} else {
			newArray[index].totalSpent += price;
		}
	}
	return newArray;
}

module.exports = calculateTotalSpentByCategory;
