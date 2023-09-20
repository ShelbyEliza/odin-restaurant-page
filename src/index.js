import "./style.css";
import { nav, homeTab, menuTab, contactTab } from "./nav";
import home from "./home";
import contact from "./contact";
import menu from "./menu";

import Data from "./data.json";

const contentDiv = document.getElementById("content");
const headerEl = document.createElement("header");
let prevTab = "home";

document.body.insertBefore(headerEl, document.body.firstChild);
headerEl.appendChild(nav);
contentDiv.appendChild(home(Data));

/** Add event listeners to Nav: */
homeTab.btn.addEventListener("click", () => {
	controlNav("home", home(Data));
});
contactTab.btn.addEventListener("click", () => {
	controlNav("contact", contact(Data));
});
menuTab.btn.addEventListener("click", () => {
	controlNav("menu", menu(Data));
});

function controlNav(newTab, module) {
	if (newTab !== prevTab) {
		while (contentDiv.firstChild) {
			contentDiv.removeChild(contentDiv.firstChild);
		}
		contentDiv.appendChild(module);
		prevTab = newTab;
	}
}
