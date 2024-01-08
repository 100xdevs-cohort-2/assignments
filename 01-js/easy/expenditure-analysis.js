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


var arrayOfObjects = [
  { id: 1, category: 'Food', price: 10 },
  { id: 2, category: 'cloth', price: 40 },
  { id: 3, category: 'drink', price: 100 },
  { id: 4, category: 'travel', price: 60 },
  { id: 5, category: 'medi', price: 80 }
];
function calculateTotalSpentByCategory(transactions) {
    let emptyArray = [];
  for(let i = 0 ; i<transactions.length; i++)
  {
   let resultObject = {
      category : transactions[i].category,
      price : transactions[i].price
    }
    emptyArray.push(resultObject);
  }

         

         return emptyArray;
}
var result = calculateTotalSpentByCategory(arrayOfObjects);
console.log(result);

module.exports = calculateTotalSpentByCategory;
