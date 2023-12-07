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

function calculateTotalSpentByCategory ( transactions ) {

  // Empty object to store category-wise totals.
  const categoryTotals = {};

  /* Iterating over each transaction to destructure the object to extract 
     category and price
  */
  transactions.forEach ( transactions => {
    const { category, price } = transaction;

    /* Check if the category in categoryTotals if yes add the price 
       to existing total
    */
    if ( category in categoryTotals ) {
      categoryTotals [ category ] += price;
    } else {
      categoryTotals [ category ] = price;
    }
  });

    // Convert the categoryTotals object into an array of objects.
    const result = Object.entries ( categoryTotals ) .map (([ category, total ]) => ({ [ category ]: total }));

    return result;
}

const transaction = [
  { itemName: "Item1", category: "Groceries", price: 20 },
  { itemName: "Item2", category: "Medical-item", price: 90 }
]

const result = calculateTotalSpentByCategory ( transactions );

console.log ( result );


module.exports = calculateTotalSpentByCategory;
