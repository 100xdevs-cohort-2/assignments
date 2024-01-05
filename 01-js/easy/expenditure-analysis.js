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

// visualization of totalsByCategory object
// {
//   "category" : price
//   'Food': 50,
//   'Transport': 25,
//   'Entertainment': 50
// }
function calculateTotalSpentByCategory(transactions) {
  let totalsByCategory = {};

  transactions.forEach(function(item){
    if(totalsByCategory[item.category]){
      totalsByCategory[item.category] += item.price;
    } else{
      totalsByCategory[item.category] = item.price;
    }
  });

  let output = [];
  for( let category in totalsByCategory){
    output.push({
      category : category,
      totalSpent: totalsByCategory[category]
    });
  }
  
  return output;
}

module.exports = calculateTotalSpentByCategory;
