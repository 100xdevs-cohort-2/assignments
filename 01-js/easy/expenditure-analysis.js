/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
