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
  // new array of object in which we have category and total spent price.
  let newArray = [];
  for (const element of transactions) {
    getNewArray(element.category, element.price, newArray);
  }
  return newArray;
}

// Get new array of object based on cateogory and total spent price
function getNewArray(category, price, newArray) {
  if (newArray.filter((i) => i.category === category).length > 0) {
    newArray
      .filter((i) => i.category === category)
      .forEach((i) => (i.totalSpent = i.totalSpent + price));
  } else {
    newArray.push({
      category: category,
      totalSpent: price,
    });
  }
  return newArray;
}

module.exports = calculateTotalSpentByCategory;
