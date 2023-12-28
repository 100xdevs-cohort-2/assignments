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
let transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656176800000,
    price: 5,
    category: 'Electronics',
    itemName: 'Smartphone',
  },
  {
    id: 3,
    timestamp: 1656276800000,
    price: 20,
    category: 'Clothing',
    itemName: 'T-shirt',
  },
  {
    id: 4,
    timestamp: 1656376800000,
    price: 15,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 5,
    timestamp: 1656476800000,
    price: 30,
    category: 'Books',
    itemName: 'Novel',
  },
  {
    id: 6,
    timestamp: 1656576800000,
    price: 12,
    category: 'Sports',
    itemName: 'Basketball',
  },
  {
    id: 7,
    timestamp: 1656676800000,
    price: 25,
    category: 'Food',
    itemName: 'Pasta',
  }
];
function calculateTotalSpentByCategory(transactions) {
  let expenditures = [];
  for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];
    const category = transaction.category;
    const price = transaction.price;
    const categoryExists = expenditures.find(expenditure => expenditure.category === category);

    if(!categoryExists) {
      expenditures.push({ category, totalSpent: price });
    } else {
      const expenditure = expenditures.find(expenditure => expenditure.category === category);
      expenditure.totalSpent += price;
    }
    
  }

  return expenditures;
}

console.log(calculateTotalSpentByCategory(transactions));
module.exports = calculateTotalSpentByCategory;
