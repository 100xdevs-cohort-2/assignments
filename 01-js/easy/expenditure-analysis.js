/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function groupBy(array, property) {
  return array.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

function calculateTotalSpentByCategory(transactions) {
  let categorySeparated = groupBy(transactions, 'category');
  let res = [];
  for (cate in categorySeparated) {
    let arr = categorySeparated[cate];
    let c = arr.reduce(
      (acc, curr) => {
        (acc.category = curr.category),
          (acc.totalSpent = acc.totalSpent + curr.price);
        return acc;
      },
      {
        category: "",
        totalSpent: 0,
      }
    );
    res.push(c);
  }
  return res;
}

module.exports = calculateTotalSpentByCategory;
