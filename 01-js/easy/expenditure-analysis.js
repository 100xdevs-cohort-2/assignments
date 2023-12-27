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

function isCategoryAlreadPresent(category, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].category === category) {
      return i;
    }
  }

  return -1;
}

function calculateTotalSpentByCategory(transactions) {
  let resultArr = [];
  for (let i = 0; i < transactions.length; i++) {
    let currentCategory = transactions[i].category;
    let indexOfCategoryInReslutArr = isCategoryAlreadPresent(
      currentCategory,
      resultArr
    );
    if (indexOfCategoryInReslutArr !== -1) {
      resultArr[indexOfCategoryInReslutArr].totalSpent += transactions[i].price;
    } else {
      resultArr.push({
        category: currentCategory,
        totalSpent: transactions[i].price,
      });
    }
  }
  return resultArr;
}

module.exports = calculateTotalSpentByCategory;
