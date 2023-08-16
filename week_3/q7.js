const fruits = [
  { name: 'Apple', color: 'Red', price: 1.5 },
  { name: 'Banana', color: 'Yellow', price: 0.5 },
  { name: 'Orange', color: 'Orange', price: null },
  { name: 'Grapes', color: 'Purple', price: 3 },
  { name: 'Watermelon', color: 'Green', price: 4 },
  { name: 'Strawberry', color: 'Red', price: 2.5 },
  { name: 'Mango', color: 'Yellow', price: null },
  { name: 'Pineapple', color: 'Yellow', price: null },
  { name: 'Cherry', color: 'Red', price: 2 },
  { name: 'Blueberry', color: 'Blue', price: 2.8 }
];

const filteredFruits = fruits.filter((fruit) => fruit.price != null);

const updatedPrice = filteredFruits.map((fruit) => {
    const newFruit = {...fruit};
    newFruit.price = newFruit.price * 2;
    return newFruit;
});

updatedPrice.map((fruit) => {
    console.log(`${fruit.name} now costs ${fruit.price}`);
});

const orderPrice = updatedPrice.reduce((acc,curr) => acc + curr.price,0);

console.log(orderPrice);
