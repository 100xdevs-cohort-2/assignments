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
  if (transactions.length === 0) {
    return [];
  }

  const expenditure = transactions.reduce((acc, curr) => {
    const existingCategory = acc.find(
      (item) => item.category === curr.category
    );

    if (existingCategory) {
      existingCategory.totalSpent += curr.price;
    } else {
      acc.push({ category: curr.category, totalSpent: curr.price });
    }
    return acc;
  }, []);

  console.log(expenditure);
  return expenditure;
}

module.exports = calculateTotalSpentByCategory;
