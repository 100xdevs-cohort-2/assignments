function calculateTotalSpentByCategory(transactions) {
  const finalTotalSpentByCategory = [];
  for (let i = 0; i < transactions.length; i++) {
    const categoryItem = finalTotalSpentByCategory.find(
      (item) => item.category === transactions[i].category
    );
    if (categoryItem) {
      categoryItem["totalSpent"] += transactions[i].price;
    } else {
      finalTotalSpentByCategory.push({
        category: transactions[i].category,
        totalSpent: transactions[i].price,
      });
    }
  }

  return finalTotalSpentByCategory;
}

module.exports = calculateTotalSpentByCategory;
