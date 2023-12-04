/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const list = [];
  const dict = {};
  transactions.forEach((element) => {
    if (dict.hasOwnProperty(element.category)) {
      dict[element.category] += element.price;
    } else {
      dict[element.category] = element.price;
    }
  });

  for (const key in dict) {
    if (dict.hasOwnProperty(key)) {
      const value = dict[key];
      list.push({ category: key, totalSpent: value });
    }
  }

  return list;
}

module.exports = calculateTotalSpentByCategory;
