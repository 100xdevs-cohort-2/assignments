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
   //Transaction - an object like { itemName, category, price, timestamp }
   categoryObj={};

   for(let i=0;i<transactions.length;i++){
     categoryObj[transactions[i].category]=0
   }
   for(let j=0;j<transactions.length;j++){
     categoryObj[transactions[j].category]+=transactions[j].price
   }
   arr=[]
   objList = Object.entries(categoryObj)
   for(let k=0;k<Object.keys(categoryObj).length; k++){
     let temp = {};
     temp['category'] = objList[k][0]
     temp['totalSpent'] = objList[k][1]
     arr.push(temp)
   }
 
   return arr;
}

module.exports = calculateTotalSpentByCategory;
