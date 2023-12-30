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
  let categorySpentList = [];
  let i=0;
  while(i<transactions.length){
    let currentCategory =  transactions[i].category;
    let currentPrice = transactions[i].price;
    if(categorySpentList.length==0){
      let object = {
        category:currentCategory,
        totalSpent:currentPrice
      }
      categorySpentList.push(object);
    }else{
      let j =0;
      let flag = 0;
      while(j<categorySpentList.length){
        if(categorySpentList[j].category==currentCategory){
          let valueObject = categorySpentList[j].totalSpent;
          valueObject+=transactions[i].price;
          categorySpentList[j].totalSpent=valueObject;
          flag=1;
          break;
        }
        j++;
      }
      if(flag==0){
        let object = {
          category:currentCategory,
          totalSpent:currentPrice
        }
        categorySpentList.push(object);
      }
    }
    i++;
    
  }
  return categorySpentList;
}

module.exports = calculateTotalSpentByCategory;
