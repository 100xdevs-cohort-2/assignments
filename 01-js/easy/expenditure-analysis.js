/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const list = {};
  for (const item of transactions) {
    const {category,price} = item;

    if(!Object.hasOwn(list,category)){
      list[category] = price;
    }else{
      list[category] += price;
    };
  };

  const result = Object.keys(list).map((ele)=>{return {category:ele,totalSpent:list[ele]}});
  return result;
};

// time complexity - O(n)
// space complexity - O(m) {where m is the number of unique categories.}
module.exports = calculateTotalSpentByCategory;
