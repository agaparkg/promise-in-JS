import { fetchData } from "./fetchData.js";

const btn = document.getElementById("btn");
const preTag = document.getElementById("preForm");

btn.addEventListener("click", () => {
  const fun = fetchData();
  //   fetchData().then((d) => (preTag.innerHTML = JSON.stringify(d, null, 2)));
  console.log();
  fun();
});

// fetch("url").then().then().catch().finally();

// Object, Array, Number, String, Promise;

// const obj = new Object();

// obj.name = "Alex";

// console.log(obj);

// const fruits = new Array("apple", "banana");

// console.log(fruits);

// // ---------------------------------------------

// const p = new Promise((resolve, reject) => {
//   return resolve("Hey success");
//   //   return reject("Failure, sorry.");
// });

// p.then((response) => console.log(response)); //

// // States of Promise;
// // Pending, Fulfilled, Rejected
