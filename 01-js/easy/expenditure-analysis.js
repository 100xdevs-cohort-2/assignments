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
  let newArr = {};

  transactions.forEach((element) => {
    let { category, price } = element;
    if (newArr[category]) {
      newArr[category] += price;
    } else {
      newArr[category] = price;
    }
  });
  let entriesObj = Object.entries(newArr);
  let entriesArr = entriesObj.map((entry) => {
    let category = entry[0];
    let totalSpent = entry[1];

    return {
      category,
      totalSpent,
    };
  });
  // console.log(entriesArr);

  return entriesArr;
}

module.exports = calculateTotalSpentByCategory;
