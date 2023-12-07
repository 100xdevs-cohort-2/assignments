/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let myList = [];
  for (let index = 0; index < transactions.length; index++) {
    let a = transactions[index];
    let category = a.category;
    let price = a.price;
    let flag = false;
    for (let j = 0; j < myList.length; j++) {
      if(myList[j].category === category){
        myList[j].totalSpent += price;
        flag = true;
        break;
      }
    }
    if(!flag){
      myList.push({ category: category, totalSpent: price })
    }
  }
  return myList;
}

module.exports = calculateTotalSpentByCategory;
