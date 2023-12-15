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
  let hash = [];
  let ans = transactions.map((transaction,index)=>{
    // console.log(transaction);
       let obj = {
          category:transaction.category,
          totalSpent:transaction.price
       };
       return obj;
  });

  for(let i=0;i<ans.length;i++)
  {
    let flag = true;
      for(let j=0;j<hash.length;j++)
      {
         if(ans[i].category==hash[j].category)
         {
            hash[j].totalSpent+=ans[i].totalSpent;
            flag = false;
            break;
         }
      }
      if(flag)
      {
         hash.push(ans[i]);
      }
  }
  return hash;
}

module.exports = calculateTotalSpentByCategory;
