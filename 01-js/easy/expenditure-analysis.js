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
  catagories = [];
  for(let i=0; i<transactions.length; i++){
    if(!catagories.includes(transactions[i]["category"])){
      catagories.push(transactions[i]["category"]);
    }
  }
  result = [];
  let i=0;
  while(i<catagories.length){
    let spent = 0;
    for(let j=0; j<transactions.length; j++){
      if(catagories[i] == transactions[j]["category"]){
        spent += transactions[j]["price"]
      }
    }
    result.push({
      category : catagories[i],
      totalSpent : spent
    });
    i++;
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
