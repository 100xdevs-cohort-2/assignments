/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
