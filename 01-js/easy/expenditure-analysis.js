/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let list = [];
  console.log(transactions.length);

  for(let i = 0; i < transactions.length; i++) {
    let Pointer = false;
    for(let j = 0; j < list.length; j++) {
      
      let str1 = list[j]["category"];
      let str2 = transactions[i]["category"];
      
      if(str1 === str2) {
        list[j].totalSpent = list[j]["totalSpent"] + transactions[i]["price"];
        Pointer = true;
        break;
      }
    }
    if(!Pointer) {
      newObject = {"category" : transactions[i]["category"], "totalSpent" : transactions[i]["price"]};
      list.push(newObject);
    }
 }
  return list;
}
console.log(calculateTotalSpentByCategory(transactions))
module.exports = calculateTotalSpentByCategory;
