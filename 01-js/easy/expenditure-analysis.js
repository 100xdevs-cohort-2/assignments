/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let totalExpenditures = [];
  if (!transactions || transactions.length === 0) {
    return [];
  }
  transactions.forEach((transaction) => {
    if (
      totalExpenditures.findIndex(
        (item) => item.category === transaction.category
      ) === -1
    ) {
      totalExpenditures.push({
        category: transaction.category,
        totalSpent: transaction.price,
      });
    } else {
      totalExpenditures[
        totalExpenditures.findIndex(
          (item) => item.category === transaction.category
        )
      ].totalSpent += transaction.price;
    }
  });
  return totalExpenditures;
}

module.exports = calculateTotalSpentByCategory;
