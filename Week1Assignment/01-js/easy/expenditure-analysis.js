/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  outputArray = [];
  myMap = {};
  for (i=0; i<transactions.length; i++){
    currentCategory = transactions[i]["category"];
    if (currentCategory in myMap){
      myMap[currentCategory] = myMap[currentCategory] + transactions[i]["price"];
    }
    else {
      myMap[currentCategory] = transactions[i]["price"];
    }
  }
  console.log(myMap);
  for (key in myMap){
    tempObject = {
      category: key,
      totalSpent: myMap[key]
    };
    outputArray.push(tempObject);
  }
  console.log(outputArray);
  return outputArray;
}
/*
let myTransactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Misc',
    itemName: 'Pizza',
  },
  {
    id: 1,
    timestamp: 1656076800000,
    price: 50,
    category: 'Misc',
    itemName: 'Pizza',
  },
];
calculateTotalSpentByCategory(myTransactions)*/

module.exports = calculateTotalSpentByCategory;
