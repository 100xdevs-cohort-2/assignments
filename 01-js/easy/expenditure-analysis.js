/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let map1 = {};

    for (let i=0;i<transactions.length;i++){
        map1[transactions[i].category] = (map1[transactions[i].category] || 0) + transactions[i].price;
    }
    let ansArray = [];

    for (const key in map1){
        const value = map1[key];
        ansArray.push({category : key , totalSpent : value});
    }

    return ansArray;


}

module.exports = calculateTotalSpentByCategory;
