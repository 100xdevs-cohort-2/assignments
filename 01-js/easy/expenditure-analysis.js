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
let object={};
  for(let i=0;i<transactions.length;i++){
    let traversal= transactions[i];
    if(object[traversal.category]){
      object[traversal.category]=object[traversal.category]+traversal.price;
      
    } else {
    object[traversal.category]=traversal.price;
    
  }}
  let result=[];
  for (let value in object){
    let obj={};
    obj.category=value;
    obj.totalSpent=object[value];
    
    result.push(obj);
  }
  return result ;
    
}

module.exports = calculateTotalSpentByCategory;
