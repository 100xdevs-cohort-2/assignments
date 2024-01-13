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

// solution 1

// function calculateTotalSpentByCategory(transactions) {
//   const result = [];
//   for (let i = 0; i < transactions.length; i++) {
//     const findCategory = result.find(
//       (item) => item.category === transactions[i]["category"]
//     );
//     if (findCategory) {
//       findCategory.totalSpent += transactions[i]["price"];
//     } else {
//       result.push({
//         category: transactions[i]["category"],
//         totalSpent: transactions[i]["price"],
//       });
//     }
//   }
//   return result;
// }

// solution 2

function calculateTotalSpentByCategory(transactions) {
  const result = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    if (result[category]) {
      result[category] += price;
    } else {
      result[category] = price;
    }
  });
  return Object.keys(result).map((category) => {
    return {
      category,
      totalSpent: result[category],
    };
  });
}

module.exports = calculateTotalSpentByCategory;
