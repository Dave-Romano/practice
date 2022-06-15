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
