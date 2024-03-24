/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

//transaction = [
//  {
//    id:'',
//    timestamp:'',
//    category:'',
//    price:'',
//    itemName:''
//  },
//  {
//    id:'',
//    timestamp:'',
//    category:'',
//    price:'',
//    itemName:''
//  },
//]

// output
// [{category:'',totalSpent:''}]

function calculateTotalSpentByCategory(transactions) {
  let res = []; //[{category : price}, {category : price}]

  let indexOfObj = null;

  transactions.forEach((obj) => {
    if (
      res.find((item, index) => {
        if (obj.category === item.category) {
          indexOfObj = index;
          return true;
        }
      })
    ) {
      res[indexOfObj].totalSpent += obj.price;
    } else {
      res = [...res, { category: obj.category, totalSpent: obj.price }];
    }
  });

  return res;
}

// calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: "Food",
//     itemName: "Pizza",
//   },
//   {
//     id: 2,
//     timestamp: 1656259600000,
//     price: 20,
//     category: "Food",
//     itemName: "Burger",
//   },
//   {
//     id: 3,
//     timestamp: 1656019200000,
//     price: 15,
//     category: "Clothing",
//     itemName: "T-Shirt",
//   },
//   {
//     id: 4,
//     timestamp: 1656364800000,
//     price: 30,
//     category: "Electronics",
//     itemName: "Headphones",
//   },
//   {
//     id: 5,
//     timestamp: 1656105600000,
//     price: 25,
//     category: "Clothing",
//     itemName: "Jeans",
//   },
// ]);

module.exports = calculateTotalSpentByCategory;
