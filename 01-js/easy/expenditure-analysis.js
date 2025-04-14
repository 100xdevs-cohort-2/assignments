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
  const mp = {};
  for(let i = 0 ; i < transactions.length; i++){
    const currentTransaction = transactions[i];
    const category = currentTransaction.category;
    const price = currentTransaction.price;
    if(!mp[category]){
      mp[category] = price;
    }
    else{
      mp[category] += price;
    }
  }
  return Object.entries(mp).map(category => {
    const [categoryName , totalMoneySpent] = category;
    return {
      category: categoryName,
      totalSpent: totalMoneySpent,
    }
  })
  // return [];
}

module.exports = calculateTotalSpentByCategory;
