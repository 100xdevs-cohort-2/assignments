/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
