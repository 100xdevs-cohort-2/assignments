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
  let totalCategory1 = 0;
  let totalCategory2 = 0;

  transactions.foreach((transaction) => {
    const { category, price } = transaction;

    //Check category and update total accordingly
    if(category === 'grocery'){
      totalCategory1 += price;
    } else if(category === 'stationary'){
      totalCategory2 += price;
    }
  });

  const result = [{
    category: 'grocery' , totalamount : 'totalCategory1'},
    {category : 'stationary', totalamount: totalCategory2 },
    ];
      
  return result;
}
// Example Usage:
const transactions = [
  { itemName: 'milk', category: 'grocery', price: 25, timestamp: 10 },
  { itemName: 'notebook', category: 'stationary', price: 40, timestamp: 10 },
  // Add more transactions as needed
];

module.exports = calculateTotalSpentByCategory;
