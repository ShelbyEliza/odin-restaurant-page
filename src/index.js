import home from "./home";
import "./style.css";
import Pancakes from "./pancakes.jpg";
import Data from "./data.json";

// function component() {
const contentDiv = document.getElementById("content");

// const myPancakes = new Image();
// myPancakes.src = Pancakes;

contentDiv.appendChild(home(Pancakes, Data));
// contentDiv.appendChild(myPancakes);
// }

console.log("index.js!");
