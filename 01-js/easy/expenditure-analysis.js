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
  let ans=[];
  for(let i=0;i<transactions.length;i++){
    let obj1 = transactions[i]
    let b= false 
    let index=-1;
    for(let j=0;j<ans.length;j++){
      if(ans[j].category==obj1.category){
        b= true;
        index = j;
        break;
      }
    }
    if(!b){
      let obj2 = { "category" : obj1.category, "totalSpent" : obj1.price}
      ans.push(obj2);
    } 
    else{
      ans[index].totalSpent += obj1.price;
    }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
