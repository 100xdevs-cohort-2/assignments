/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let ans = {};

    for (const transaction of transactions) {
        const { category, price } = transaction;
        ans[category] = (ans[category] || 0) + price;
    }
    return Object.entries(ans).map(([category, totalSpent]) => ({
        category: category,
        totalSpent: totalSpent,
    }));
}

module.exports = calculateTotalSpentByCategory;
