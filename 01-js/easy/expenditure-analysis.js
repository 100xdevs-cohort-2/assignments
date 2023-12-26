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

const { totalmem } = require("os");

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length==0){
    return [];
  }
  else{

    totalSpent={};
    for(let i=0;i<transactions.length;i++){
      if(transactions[i].category in totalSpent){
        totalSpent[transactions[i].category].totalSpent+=transactions[i].price;
      }
      else{
        totalSpent[transactions[i].category]={
          category:transactions[i].category,
          totalSpent:transactions[i].price,
        }
      }
    }
    return (Object.values(totalSpent));
  }

}

module.exports = calculateTotalSpentByCategory;
