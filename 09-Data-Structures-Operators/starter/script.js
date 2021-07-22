'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your Pasta order has ${ing1}, ${ing2}, and ${ing3}`);
  },
};

//
console.log(`whats going on people`);
const { name, categories } = restaurant;

// spread operator
const newMenu = [...restaurant.mainMenu];
console.log(newMenu);
const newMenuCopy = [...newMenu, ...restaurant.mainMenu];
console.log(newMenuCopy);

const ingredients = [
  prompt('Enter 1st ingredients'),
  prompt('Enter 2nd ingredients'),
  prompt('Enter last ingredients'),
];

restaurant.orderPasta(...ingredients);

// create shallow copy of object

const restaurant2 = { ...restaurant };

// create shallow copy woth custom property
const restaurant3 = { founder: 1998, ...restaurant };
console.log(restaurant3);
