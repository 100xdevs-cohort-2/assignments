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
  const categoryData = {}

  transactions.forEach(transaction => {
    const {price, category} = transaction;

    // If category is present, increment the price
    if(categoryData[category]){
      categoryData[category] += price;
    } else{
      // Else create the category entry
      categoryData[category] = price;
    }
  });


  // Convert the data into output form
  const result = Object.keys(categoryData).map(category => ({
    category,
    totalSpent: categoryData[category]
  }))
  return result;
}

module.exports = calculateTotalSpentByCategory;
