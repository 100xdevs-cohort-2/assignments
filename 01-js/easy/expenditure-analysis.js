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
  var arr = [];
  for(let i = 0; i<transactions.length; i++){
    var naam = transactions[i]["category"];
    var price = transactions[i]["price"];
      if(arr.find((cat) =>cat.category==naam)){
      let index = arr.findIndex((cat) =>cat.category==naam);
      arr[index]["totalSpent"] = arr[index]["totalSpent"] + price; 
  }else{
    arr.push({category : naam , totalSpent:price});
  }
  }

  return arr;
}

module.exports = calculateTotalSpentByCategory;
