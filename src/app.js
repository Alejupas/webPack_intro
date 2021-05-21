import add from "./js/add.js";
import say from "./js/say.js";
import "./css/style.css"; //itraukiam css faila i html
import banner from "./banner/ban.js";
// const path = require("path");

// console.log("path", path.resolve(__dirname));

console.log("add(2, 3, 5) =", add(2, 3, 5));

console.log("say(kazkas):", say("everything how"));

const obj = { age: 30, name: "Bob" };
const copy = { ...obj, gender: "male" };
console.log("copy of obj:", copy);

banner();
