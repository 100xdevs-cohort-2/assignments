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

function calculateTotalSpentCategory(transactions) {
  var newArray = [];
  for (let i = 0; i < transactions.length; i++) {
    const currObject = transactions[i];
    var len = newArray.length;
    if (len == 0) {
      const newObect = {
        category: currObject.category,
        totalSpent: currObject.price,
      };
      newArray.push(newObect);
    } else {
      let j;
      for (j = 0; j < len; j++) {
        if (newArray[j].category == currObject.category) {
          newArray[j].totalSpent += currObject.price;
          break;
        }
      }
      if (j == len) {
        const newObect = {
          category: currObject.category,
          totalSpent: currObject.price,
        };
        newArray.push(newObect);
      }
    }
  }
  return newArray;
}

function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((result, transaction) => {
    const existingCategory = result.find((item) => {
      item.category == transaction.category;
    });
    if (existingCategory) {
      existingCategory.totalSpent += transaction.price;
    } else {
      result.push(
        { category: transaction.category ,
         totalSpent: transaction.price }
      );
    }
    return result;
  }, []);
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656105600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656134400000,
    price: 30,
    category: 'Food',
    itemName: 'Sushi',
  },
];
console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
