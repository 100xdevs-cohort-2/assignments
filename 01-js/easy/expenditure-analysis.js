/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let data = []
  let present = true;
  transactions.forEach(element => {

      for(let i in data){
          if (data[i].category === element["category"]){
              data[i].totalSpent += element["price"];
              present = false;
          }
      }
      if (present){
      let currenctObj = {category: element["category"], totalSpent: element["price"]}
      data.push(currenctObj);
      }
      present = true;
  });
  return data;
}

module.exports = calculateTotalSpentByCategory;

