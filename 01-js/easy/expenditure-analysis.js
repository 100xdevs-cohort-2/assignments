/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let n = transactions.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (transactions[i]["category"] == transactions[j]["category"]) {
        transactions[i]["price"] += transactions[j]["price"];
        transactions.splice(j, 1); //removing the element which has already been added
        j--; //decrementing j cause the removed element was replaced by the next in index and hence the index is still sequestial and shouldn't be skipped
        n--; //decrementing n cause the total no. of elements drops in count as we delete
      }
    }
    result.push({
      category: transactions[i]["category"],
      totalSpent: transactions[i]["price"],
    });
  }
  return result;
}

module.exports = calculateTotalSpentByCategory;
