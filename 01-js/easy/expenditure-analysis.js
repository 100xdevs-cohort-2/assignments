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
  let list = [];
  console.log(transactions.length);

  for(let i = 0; i < transactions.length; i++) {
    let Pointer = false;
    for(let j = 0; j < list.length; j++) {
      
      let str1 = list[j]["category"];
      let str2 = transactions[i]["category"];
      
      if(str1 === str2) {
        list[j].totalSpent = list[j]["totalSpent"] + transactions[i]["price"];
        Pointer = true;
        break;
      }
    }
    if(!Pointer) {
      newObject = {"category" : transactions[i]["category"], "totalSpent" : transactions[i]["price"]};
      list.push(newObject);
    }
 }
  return list;
}

module.exports = calculateTotalSpentByCategory;
