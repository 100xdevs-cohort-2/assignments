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
  var arr = {};
  for(var i=0; i<transactions.length; i++){
    //var t = transactions[i];
    if(arr[transactions[i].category]){
      arr[transactions[i].category] = arr[transactions[i].category] + transactions[i].price
    }else{
      arr[transactions[i].category] = transactions[i].price
    }
  }
  var keys = Object.keys(arr);
  var ans = [];
  for(var i=0; i<keys.length; i++){
    var category = keys[i];
    var obj ={
      category: category,
      totalSpent: arr[category]
    }
    ans.push(obj);
  }
  return ans
}


module.exports = calculateTotalSpentByCategory;
