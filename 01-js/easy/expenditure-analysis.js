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
