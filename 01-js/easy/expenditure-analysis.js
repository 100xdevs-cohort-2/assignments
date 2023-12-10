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
    timestamp: 1656076800001,
    price: 12,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 3,
    timestamp: 1616076800000,
    price: 50,
    category: 'Meat',
    itemName: 'Chicken Breast',
  },
]

function calculateTotalSpentByCategory(transactions) {
  totalSpent = {}
  for (let i = 0;i<Object.keys(transactions).length;i++){
    if (transactions[i].category in totalSpent){
      totalSpent[transactions[i].category].totalSpent += transactions[i].price
    }
    else{
      totalSpent[transactions[i].category]={
        category:transactions[i].category,
        totalSpent:transactions[i].price}
    }
  }
  return Object.values(totalSpent)
}
// Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
console.log(calculateTotalSpentByCategory(transactions))

module.exports = calculateTotalSpentByCategory;
