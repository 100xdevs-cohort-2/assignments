/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];
  transactions.forEach((transaction) => {
    const { itemName, category, price, timestamp } = transaction;
    //   if  the category is already present in the output array
    //   then add the price to the existing price
    //   else create a new object and add it to the output array
    if (output.find((item) => item.category === category)) {
      output.find((item) => item.category === category).totalSpent += price;
    } else {
      let newSpent = {};
      newSpent.category = category;
      newSpent.totalSpent = price;
      output.push(newSpent);
    }
  });
  return output;
}

module.exports = calculateTotalSpentByCategory;
