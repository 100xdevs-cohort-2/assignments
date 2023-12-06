/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
<<<<<<< HEAD
  const catoTotal = {};

  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (!catoTotal[category]) {
      catoTotal[category] = price;
    } else {
      catoTotal[category] += price;
    }
  });
  // map(([])=>({}))
  // map is a method available for arrays, and catoTotal is an object. You can use Object.entries()
  const arrayTotal = Object.entries(catoTotal).map(([categories, total]) => ({
    [category]: total,
  }));
=======
  const catoTotal={}

  transactions.forEach((transaction)=>{
    const {category,price}=transaction;
    if(!catoTotal[category]){
      catoTotal[category]=price;
    }
    else{
      catoTotal[category]+=price;
    }
  })
  // map(([])=>({}))
  // map is a method available for arrays, and catoTotal is an object. You can use Object.entries()
  const arrayTotal=Object.entries(catoTotal).map(([categories,total])=>({
    [category]:total,
  }))
>>>>>>> bdfca9a4ea3724d3dcf3155ab1bf5b46deaea406
  return arrayTotal;
}

module.exports = calculateTotalSpentByCategory;
