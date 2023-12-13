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
  const categoryArray = transactions.map((item) => item.category);
  const uniqueCategoryArray = [...new Set(categoryArray)];
  const spends = uniqueCategoryArray.map((category) => {
    let totalSpent = 0;
    // console.log(category);
    transactions.map((item) => {
      // console.log(item);
      if (item.category === category) {
        totalSpent += item.price;
      }
    });
    return {
      category: category,
      totalSpent: totalSpent,
    };
  });
  return spends;
}

module.exports = calculateTotalSpentByCategory;
