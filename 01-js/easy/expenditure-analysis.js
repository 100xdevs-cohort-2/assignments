/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let output = [];

  transactions.forEach(element => {
      let obj = output.find(o => o.category === element.category);
      if(obj != null) {
        obj.totalSpent += element.price;
      }else {
        output.push({category : element.category , totalSpent : element.price});
      }
    })
  return output;
}

module.exports = calculateTotalSpentByCategory;
