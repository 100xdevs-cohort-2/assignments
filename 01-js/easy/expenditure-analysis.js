/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryMap = new Map();

  for (let i = 0; i < transactions.length; i++){

    let tempCat = transactions[i]['category'];
    let tempPrice = transactions[i]['price'];

    if (categoryMap.has(tempCat)){
      let prevPrice = categoryMap.get(tempCat);
      categoryMap.set(tempCat, prevPrice + tempPrice);
    } else {
      categoryMap.set(tempCat, tempPrice);
    }
  }

  class Category{
    constructor (category, totalSpent){
      this.category = category;
      this.totalSpent = totalSpent ;
    }
  }
  let catArray = [];

  // console.log(categoryMap.length);
  for (const [key, value] of categoryMap.entries()){
    catArray.push(new Category(key, value));
    // console.log(`${key} ${value}`);
  }

  // console.log(catArray);

  return catArray;
}

module.exports = calculateTotalSpentByCategory;
