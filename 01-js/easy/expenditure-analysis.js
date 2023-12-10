/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let outputList = [];
  transactions.forEach(element => {
    let existingCategory = outputList.find(item => item.category === element.category);

    if (existingCategory) {
      existingCategory.totalSpent += element.price;
    } else {
      outputList.push({
        category: element.category,
        totalSpent: element.price
      });
    }
  });
  return outputList;
}


module.exports = calculateTotalSpentByCategory;
