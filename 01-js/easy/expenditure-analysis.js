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
  //Acc to Question transactions is a list of object
  //Each Object will have its own category and price
  //So it is possible that maybe category could be repeated
  //Output will be list of objects

  const categoryTotals = {};

  for(let itr of transactions)
  {
      const category = itr.category;
      const price = itr.price;

      if(categoryTotals[category]){
        categoryTotals[category] += price;
      }else
      {
        categoryTotals[category]=price;
      }
  }

  const result = [];

  for(const category in categoryTotals)
  {
      result.push({
        category:category,
        totalSpent:categoryTotals[category]
      }); 
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
