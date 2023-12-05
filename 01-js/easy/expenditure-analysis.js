/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
    let result = [];
    let records = {};
    for (let transaction of transactions) {
        if (!records[transaction.category])
            records[transaction.category] = transaction.price;
        else
            records[transaction.category] += transaction.price;
    }
    for (let record in records)
        result.push({ "category": record, "totalSpent": records[record] })
    return result;
}

module.exports = calculateTotalSpentByCategory;
