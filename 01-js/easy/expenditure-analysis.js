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
   const result = [];

   transactions.map((transaction) => {
      const category = transaction.category;
      let insertFlag = true;

      for (let i = 0; i < result.length; i++) {
         if (category === result[i].category) {
            result[i].totalSpent += transaction.price;
            insertFlag = false;
            break;
         }
      }
      if (insertFlag) {
         result.push({ category, totalSpent: transaction.price });
      }
   });

   return result;
}

module.exports = calculateTotalSpentByCategory;
