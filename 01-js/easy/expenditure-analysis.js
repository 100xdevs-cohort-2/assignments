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
  const totalSpent = transactions.reduce((acc, curr) => {
    const hasCategory = acc?.findIndex(
      (item) => item?.category === curr?.category
    );

    if (hasCategory === -1) {
      acc.push({
        category: curr?.category,
        totalSpent: curr?.price,
      });
    } else {
      acc[hasCategory].totalSpent += curr?.price;
    }

    return acc;
  }, []);

  return totalSpent;
}

module.exports = calculateTotalSpentByCategory;
