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
  for(let i=0; i<transactions.length; i++){
      let obj = {};
      if(transactions[i]['category'] && transactions[i]['price']){
        obj.category = transactions[i]['category'];
        obj.totalSpent = transactions[i]['price'];
        list.push(obj);
    }
    // if(transactions[i]['category'] && transactions[i]['price']){
    //   list[i]['totalSpent'] = transactions[i]['price'];
    // }
  }
  return list;
}

console.log(calculateTotalSpentByCategory([{
		id: 1,
		timestamp: 1656076800000,
		price: 60,
		category: 'sex',
		itemName: 'Girl',
	},{
		id: 1,
		timestamp: 1656076800000,
		category: 'food',
		itemName: 'Pizza',
	},{
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}]));

module.exports = calculateTotalSpentByCategory;
