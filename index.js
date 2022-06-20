"use strict";

// const CountLettersInWord = (word) => {
//   const obj = {};

//   word.split("").forEach((element) => {
//     obj[element] = obj[element] ? obj[element] + 1 : 1;
//   });
//   return obj;
// };

// console.log(CountLettersInWord("qwgwhehsdddd"));

// ------------------------------------------------------------------------------

// const word = "dungeon";
// for (let i = 0; i < word.length; i += 1) {
//   let num = 0;
//   for (let j = 0; j < word.length; j += 1) {
//     if (word[i] === word[j]) {
//       num += 1;
//     }
//   }
//   console.log(`Letter "${word[i]}" in word "${word}" is ${num} times`);
// }

// ------------------------------------------------------------------------------

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ------------------------------------------------------------------------------

// const retrict = prompt("are you shure?");

// console.log(retrict);

// ------------------------------------------------------------------------------

// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

//-------------------------------------------------------------------------------

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

//-------------------------------------------------------------------------------
// const friends = ["David", "Ann", "Rob", "Monica"];
// // console.table(friends);
// const lastIndex = friends.length - 1;
// console.log(lastIndex);

//-------------------------------------------------------------------------------

// function isAdult(age) {
//   const passed = age >= 18;
//   return console.log(passed ? "you can buy beer" : "you can't buy beer");
// }

// isAdult(10);

//-------------------------------------------------------------------------------

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(firstElement);
// console.log(lastElement);

//-------------------------------------------------------------------------------

// function formatMessage(message, maxLength) {
//   let result;

//   if (message.length > maxLength) {
//     result = `${message.slice(0, maxLength)}...`;
//   } else {
//     result = `${message}`;
//   }
//   console.log(result);
//   return result;
// }

// formatMessage("Curabitur ligula sapien", 23);

//-------------------------------------------------------------------------------

// function checkForName(fullName, name) {
//   const test = fullName.toLowerCase().slice(0, name.length);
//   const result = name === fullName.slice(0, name.length);
//   console.log(test);
//   console.log(result);
//   return result;
// }

// checkForName("Egor Kolbasov", "Egor");

//-------------------------------------------------------------------------------

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

//-------------------------------------------------------------------------------

// function checkForSpam(message) {
//   let result;
//   const messageLowered = message.toLowerCase();
//   result =
//     messageLowered.includes("spam") || messageLowered.includes("sale")
//       XXXXXXXXXXXXXXXXXXXXXX? true
//       : false;
//   console.log(result);
//   console.log(messageLowered);
//   return result;
// }

// checkForSpam("Get best sale offers now!");

//-------------------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     console.log("EMP order");
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     console.log("large order");
//     return "Your order is too large, not enough goods in stock!";
//   }
//   console.log("everything is fine");
//   return "The order is accepted, our manager will contact you";
// }

// checkStorage(100, 0);

//-------------------------------------------------------------------------------

// function getExtremeElements(array) {
//   const lastElementIDX = array.length - 1;
//   const firstElement = array[0];
//   const lastElement = array[lastElementIDX];
//   const result = [firstElement, lastElement];
//   console.log(result);
//   return result;
// }

// getExtremeElements(["bunny", "cat", "dog", "burger"]);
//-------------------------------------------------------------------------------

// function splitMessage(message, delimeter) {
//   let words;
//   words = message.split(delimeter);
//   console.log(words);
//   return words;
// }

// splitMessage("Yesterday i eat very big burger and salad", " ");

//-------------------------------------------------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   const mass = message.split(" ");
//   const result = mass.length * pricePerWord;
//   console.log(result);
//   return result;
// }

// calculateEngravingPrice("JavaScript is in my blood", 20);

//-------------------------------------------------------------------------------

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   console.log(string);
//   return string;
// }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");

//-------------------------------------------------------------------------------

// function slugify(title) {
//   const lowered = title.toLowerCase();
//   const splitted = lowered.split(" ");
//   const joined = splitted.join("-");
//   console.log(joined);
//   const result = joined;
//   return result;
// }

// slugify("Arrays for begginers");

//-------------------------------------------------------------------------------

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(2, 5);

// console.log("first two elements:", firstTwoEls);
// console.log("Not first and last:", nonExtremeEls);
// console.log("Last three elements:", lastThreeEls);

//-------------------------------------------------------------------------------

// function makeArray(firstArray, secondArray, maxLength) {
//   const result = firstArray.concat(secondArray).slice(0, maxLength);
//   console.log(result);
//   return result;
// }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);

//-------------------------------------------------------------------------------

// function calculateTotal(number) {
//   let result = 0;
//   for (let i = 0; i <= number; i += 1) {
//     result += i;
//     console.log(result);
//   }
//   return result;
// }

// calculateTotal(7);

//-------------------------------------------------------------------------------

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

//-------------------------------------------------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//     console.log(order[i]);
//   }
//   return total;
// }

// calculateTotalPrice([12, 85, 37, 4]);

//-------------------------------------------------------------------------------

// function findLongestWord(string) {
//   const myString = string.split(" ");
//   let word = "";
//   for (let i = 0; i < myString.length; i += 1) {
//     if (myString[i].length > word.length) {
//       word = myString[i];
//     }
//   }
//   console.log(word);
// }

// findLongestWord("Google do a roll");
// findLongestWord("The quick brown fox jumped over the lazy dog");

//-------------------------------------------------------------------------------

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   console.log(numbers);
//   return numbers;
// }

// createArrayOfNumbers(14, 17);

//-------------------------------------------------------------------------------

// function filterArray(numbers, value) {
//   const res = [];
//   for (let i = 0; i <= numbers.length - 1; i += 1) {
//     console.log(numbers[i]);
//     if (numbers[i] > value) {
//       res.push(numbers[i]);
//     }
//   }
//   console.log(res);
// }

// filterArray([1, 2, 3, 4, 5], 3);

//-------------------------------------------------------------------------------

// function getCommonElements(array1, array2) {
//   const res = [];
//   for (let i = 0; i <= array1.length - 1; i += 1) {
//     if (array2.includes(array1[i])) {
//       res.push(array1[i]);
//     }
//   }
//   console.log(res);
//   return res;
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

//-------------------------------------------------------------------------------

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

//-------------------------------------------------------------------------------

// function getEvenNumbers(start, end) {
//   const res = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       res.push(i);
//     }
//   }
//   console.log(res);
// }

// getEvenNumbers(6, 12);

//-------------------------------------------------------------------------------

// function includes(array, value) {
//   let res = false;
//   for (const el of array) {
//     if (el === value) {
//       res = true;
//     }
//   }
//   console.log(res);
//   return res;
// }

// includes([1, 2, 3, 4, 5], 3);

//-------------------------------------------------------------------------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

//-------------------------------------------------------------------------------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//-------------------------------------------------------------------------------

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }

//-------------------------------------------------------------------------------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

//-------------------------------------------------------------------------------

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const solo = Object.values(salaries);
//   for (const salary of solo) {
//     totalSalary += salary;
//   }
//   console.log(totalSalary);
//   return totalSalary;
// }

// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

//-------------------------------------------------------------------------------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);

//-------------------------------------------------------------------------------

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   let result = 0;
//   for (const prod of products) {
//     if (prod.name === productName) {
//       result = prod.price;
//     }
//   }
//   console.log(result);
//   if (result === 0) {
//     return null;
//   } else {
//     return result;
//   }
// }

// getProductPrice("Radar");

//-------------------------------------------------------------------------------

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  let result = [];
  for (const prod of products) {
    for (const key in prod) {
      if (key === propName) {
        result.push(prod[key]);
      }
    }
  }
  return result;
}

getAllPropValues("name");
