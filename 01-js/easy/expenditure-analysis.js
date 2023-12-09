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
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: "Food",
    itemName: "Pizza",
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: "Food",
    itemName: "Burger",
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: "Clothing",
    itemName: "T-Shirt",
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: "Electronics",
    itemName: "Headphones",
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: "Clothing",
    itemName: "Jeans",
  },
];

function calculateTotalSpentByCategory(transactions) {
  var totalSpenditure = {};
  for (let i = 0; i < transactions.length; i++) {
    const { category, price } = transactions[i];
    if (totalSpenditure[category] == undefined)
      totalSpenditure[category] = price;
    else totalSpenditure[category] += price;
  }
  var result = Object.entries(totalSpenditure).map(
    ([category, totalSpent]) => ({
      category,
      totalSpent,
    })
  );
  console.log(result);
  return result;
}

calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
