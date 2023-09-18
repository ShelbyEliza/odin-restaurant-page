import home from "./home";
import { nav, navStatus } from "./nav";
import "./style.css";
import Pancakes from "./pancakes.jpg";
import Data from "./data.json";

const headerEl = document.createElement("header");
const contentDiv = document.getElementById("content");

document.body.insertBefore(headerEl, document.body.firstChild);
headerEl.appendChild(nav);
contentDiv.appendChild(home(Pancakes, Data));
