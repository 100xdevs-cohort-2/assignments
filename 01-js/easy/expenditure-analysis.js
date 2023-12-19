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
  const categoryArray = ["Food","Clothing","Electronics"]; 
  const resultArr=[]; 
  for(let i=0 ; i<categoryArray.length;i++)
  {
     let total = 0; 
     transactions.forEach((item)=>
     {
        if(item.category === categoryArray[i])
        {
            total=total+item.price; 
        }
     })
     if(total!==0)
     resultArr.push(new Object({category : categoryArray[i],totalSpent : total})); 
     total = 0; 
  }
  return resultArr; 
}

module.exports = calculateTotalSpentByCategory;