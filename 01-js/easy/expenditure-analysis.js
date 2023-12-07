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

function calculateTotalSpentByCategory(transactions){
  if(transactions.length ==0)
  {
    return [];
  }
  let result ={};
  transactions.forEach(transaction => {
    if(result[transaction.category])
    {
      result[transaction.category].totalSpent =result[transaction.category].totalSpent + transaction.price;
    }
    else
    {
      result[transaction.category]=
      {
        category: transaction.category,
        totalSpent : transaction.price
      }
    }
  });

  return Object.values(result);
  }

module.exports = calculateTotalSpentByCategory;
