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
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];




function calculateTotalSpentByCategory(transactions) {
     const categoryTotals = {};

     for(const transaction of transactions){
      const {category, price} = transaction;

      // condition: check whether it doesn't exist in categoryTotals

      if(!categoryTotals.hasOwnProperty(category)){
        categoryTotals[category] = price;
      }else {
        // if it already exists

        categoryTotals[category] += price;
      }
     }

     // now , convert categoryTotals object in individual category object in an array

     const finalList = Object.keys(categoryTotals).map((category)=>{
      return {category: category, totalSpent: categoryTotals[category]};
     });

     return finalList;
}



let finalList = calculateTotalSpentByCategory(transactions);

console.log(finalList);


module.exports = calculateTotalSpentByCategory;
