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

  //categories stores all the unique categories
  //totalSpent stores the total spent for each category
  //result stores the final result

  let categories = [];
  let totalSpent = [];
  let result = [];
  
  //iterate through the transactions array and push the unique categories into the categories array
  
  transactions.forEach(transaction =>{
    if (!categories.includes(transaction.category)) {
      categories.push(transaction.category);
    }
  });

  //iterate through the categories array and calculate the total spent for each category
  //push the category and total spent into the result array

  categories.forEach( category => {
    let spent = 0;
     transactions.forEach( transaction => {
      if(transaction.category == category){
        spent+= transaction.price;
      }
     })
     result.push({category: category, totalSpent: spent});
  });


  return result;
}

module.exports = calculateTotalSpentByCategory;
