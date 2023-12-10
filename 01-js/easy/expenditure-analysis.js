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
  
  let answer = new Map();
  for(let i=0;i<transactions.length;i++){
      let category = transactions[i]["category"];
      if(!answer.has(category)){
        answer.set(category,0);
      }

      answer.set(category, answer.get(category)+ transactions[i]["price"]);
      
  }
 
  let answerObject = Array.from(answer, ([key, value]) => ({ category: key, totalSpent: value }));
  return answerObject;
}

module.exports = calculateTotalSpentByCategory;
