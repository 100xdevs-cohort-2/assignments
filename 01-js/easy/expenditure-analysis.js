/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
	let result = [];
  let categories = [];
  
	transactions.forEach((transaction) => {
		if (!categories.includes(transaction.category)) {
			categories.push(transaction.category);
		}
  });
  
	categories.forEach((category) => {
		let totalSpent = 0;
	
    transactions.forEach((transaction) => {
			if (transaction.category === category) {
				totalSpent += transaction.price;
			}
		});
	
    result.push({ "category": category, totalSpent });
  });
  
	return result;
}

module.exports = calculateTotalSpentByCategory;
