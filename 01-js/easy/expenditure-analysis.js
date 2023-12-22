
function calculateTotalSpentByCategory(transactions) {
    if(transactions.length > 0) {
      const final = [];
    
      transactions.forEach(transaction => {
        const {category, price} = transaction;
        const existingCategory = final.find(item => item.category === category);
        if(existingCategory) {
          existingCategory.totalSpent += price;
        }else{
          final.push({category: category, totalSpent: price})
        };
      })
    
      return final;
    } else{
      return [];
    }
  }
  
  
  module.exports = calculateTotalSpentByCategory;