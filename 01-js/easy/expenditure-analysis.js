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
  let TempCategorySpending = [];
  
  for (let i = 0; i < transactions.length; i++) {
    // Find if the category already exists in our array
    let categoryObject = TempCategorySpending.find(c => c.category === transactions[i].category);
    
    if (categoryObject) {
      // If category exists, update its totalSpent
      categoryObject.totalSpent += transactions[i].price;
    } else {
      // If category doesn't exist, add a new entry
      TempCategorySpending.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }
  
  return TempCategorySpending;
}

module.exports = calculateTotalSpentByCategory;
