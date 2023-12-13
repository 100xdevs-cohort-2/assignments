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
  let arr = [];
  for(let i of transactions){
    const isObjExists = arr.find(el=>el.category === i.category);
    if(isObjExists){
      isObjExists.totalSpent = i.price + isObjExists.totalSpent
    }else{
      arr.push({category:i.category,totalSpent: i.price})
    }
  }
  console.log(arr)
return arr;
}

module.exports = calculateTotalSpentByCategory;
