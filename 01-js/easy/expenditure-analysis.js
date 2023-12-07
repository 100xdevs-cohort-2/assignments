/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  const resArr = [];

  transactions.forEach((t) => {
    const index = resArr.findIndex((e) => e.category === t.category);

    if (index === -1) {
      resArr.push({ category: t.category, totalSpent: t.price });
    } else {
      resArr[index].totalSpent += t.price;
    }
  });

  return resArr;
  
}

module.exports = calculateTotalSpentByCategory;
