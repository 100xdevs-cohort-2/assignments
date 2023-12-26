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
  const categoryTotal = {};
  
  transactions.forEach(transaction =>{
    const {category, price} = transaction;

    if(!categoryTotal[category]){
      categoryTotal[category] = price;
    }
    else{
      categoryTotal[category] += price;
    }
  });

  const res = Object.keys(categoryTotal).map(category=>({
    category,
    totalSpent : categoryTotal[category],
  }));

  return res;
  
}

module.exports = calculateTotalSpentByCategory;
