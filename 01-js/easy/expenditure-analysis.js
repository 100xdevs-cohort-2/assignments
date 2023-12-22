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
  var categoryTotal = {};
  for(let i=0;i<transactions.length;i++){
    var transaction = transactions[i];
    var category = transaction.category;
    var price = transaction.price;

    if(categoryTotal[category]){
      categoryTotal[category] += price;
    }else{
      categoryTotal[category] = price;
    }
  }
  var keys = Object.keys(categoryTotal)
   let answer = [];
   for(var j=0;j<keys.length;j++){
    var category = keys[j];
    var obj = {
      category : category,
      totalSpent: categoryTotal[category]
    }
    answer.push(obj)
   }
  return answer;
}

module.exports = calculateTotalSpentByCategory;
