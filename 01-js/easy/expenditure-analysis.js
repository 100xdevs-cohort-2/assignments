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


  ans = [];

  for(let i=0;i<transactions.length;i++){
    temp = 0;
    for(let k=0;k<ans.length;k++){
      if(transactions[i].category == ans[k].category){
        temp = 1;
        break;
      }
    }
    if(temp==1)continue;
    arr = {};
    arr.category = transactions[i].category;
    arr.totalSpent = 0;
    for(let j=0;j<transactions.length;j++){
      if(transactions[i].category == transactions[j].category){
        arr.totalSpent += transactions[j].price;
      }
    }
    ans.push(arr);
  }

  console.log(ans);

  return ans;
}

module.exports = calculateTotalSpentByCategory;
