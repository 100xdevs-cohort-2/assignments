/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {
    let returnList = [];
    for(let i in transactions){
        let category = transactions[i].category;
        let price = transactions[i].price;

        let existingCategory = returnList.find(item => item.category === category);

        if (existingCategory) {
            existingCategory.totalSpent += price;
        } else {
            returnList.push({ category: category, totalSpent: price });
        }
    }
    return returnList;
}

module.exports = calculateTotalSpentByCategory;
