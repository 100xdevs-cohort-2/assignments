/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
	let category = [];

	let ans = [];

	for (let x of transactions) {
		let ind = category.indexOf(x.category);
		if (ind !== -1) {
			ans[ind].totalSpent += x.price;
		} else {
			let y = { category: x.category, totalSpent: x.price };
			ans.push(y);
			category.push(x.category);
		}
	}

	return ans;
}

module.exports = calculateTotalSpentByCategory;
