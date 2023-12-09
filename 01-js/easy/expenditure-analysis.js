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
  category = [];
  for(let i=0; i<transactions.length; i++) {
    if(!category.includes(transactions[i]["category"])){
      category.push(transactions[i]["category"]);
    }
  }
  objarr = [];
  let i = 0;
  while(i < category.length){
    let total = 0;
    for(let j=0; j<transactions.length; j++){
      if(category[i] === transactions[j]["category"]){
        total += transactions[j]["price"];
      }
    }
    objarr.push({
      category: category[i],
      totalSpent: total
    });
    i++;
  }
  return objarr;
}

module.exports = calculateTotalSpentByCategory;
