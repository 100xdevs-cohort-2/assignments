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
  const mySpending={};
  for(var i=0;i<transactions.length;i++){
    if(mySpending[transactions[i].category]){
      mySpending[transactions[i].category]=mySpending[transactions[i].category]+transactions[i].price;
    }
    else{
      mySpending[transactions[i].category]=0;
      mySpending[transactions[i].category]=mySpending[transactions[i].category]+transactions[i].price;
    }
  }
  let answer=[];
  var keys=Object.keys(mySpending);
  for(var i=0;i<keys.length;i++){
    var obj={
      category : keys[i],
      totalSpent : mySpending[keys[i]]
    }
    answer.push(obj);
  }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
