/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const totalSpent = transactions.reduce((acc, curr) => {
    const hasCategory = acc?.findIndex(
      (item) => item?.category === curr?.category
    );

    if (hasCategory === -1) {
      acc.push({
        category: curr?.category,
        totalSpent: curr?.price,
      });
    } else {
      acc[hasCategory].totalSpent += curr?.price;
    }

    return acc;
  }, []);

  return totalSpent;
}

module.exports = calculateTotalSpentByCategory;
