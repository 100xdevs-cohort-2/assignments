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
	},
  {
		id: 2,
		timestamp: 1656000076800,
		price: 20,
		category: 'Food',
		itemName: 'Burger',
	}
  Output - [{ category: 'Food', totalSpent: 30 }] // Can have multiple categories, only one example is mentioned here
*/

// constructor function -- recommend to convert into class constructor
function categorySpent(category, totalSpent) {
  this.category = category;
  this.totalSpent = totalSpent
}

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((TotalSpentByCategory, order) => {
    // order.category 
    // order.price

    // we have to add these both into the TotalSpentthink for that I have to check that whether is there
    // already exists or not .. 

    let categoryWithSpent = TotalSpentByCategory.find(({category}) => category === order.category)

    if(categoryWithSpent) {
      categoryWithSpent.totalSpent += order.price;
    } else {
      TotalSpentByCategory.push(new categorySpent(order.category, order.price))
    }

    return TotalSpentByCategory;
  }, []);
}

module.exports = calculateTotalSpentByCategory;
