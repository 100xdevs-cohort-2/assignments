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
  const result = {}
   
  for (const transaction of transactions) {
    const { category, totalSpent} = transaction
    if(result.hasOwnProperty(category)){
      result[category] += totalSpent
    } else{
      result[category]= totalSpent
    }

  }
  
  const finalResult = Object.keys(result).map(category => ({
    category,
    totalSpent: result[category],
  }));
  

  return finalResult
}


const transactions = [
  { id: 1, timestamp: 1656076800000, totalSpent: 10, category: 'Food', itemName: 'Pizza' },
  { id: 2, timestamp: 1656076810000, totalSpent: 20, category: 'Food', itemName: 'Burger' },
  { id: 3, timestamp: 1656076820000, totalSpent: 15, category: 'Clothing', itemName: 'Shirt' }
];

const result = calculateTotalSpentByCategory(transactions);
console.log(result);
module.exports = calculateTotalSpentByCategory;
