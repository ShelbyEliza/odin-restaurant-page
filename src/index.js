import "./style.css";
import { nav, mainTitleDiv, homeTab, menuTab, contactTab } from "./nav";
import home from "./home";
import contact from "./contact";
import menu from "./menu";

import Data from "./data.json";

const contentDiv = document.getElementById("content");
const headerEl = document.createElement("header");
/** TODO: set prevTab to "home". Other options are for dev. */
// let prevTab = "home";
let prevTab = "menu";
// let prevTab = "contact";

document.body.insertBefore(headerEl, document.body.firstChild);
headerEl.appendChild(nav);

/** TODO: set contentDiv.appendChild(home(Data)). Other options are for dev. */
// contentDiv.appendChild(home(Data));
contentDiv.appendChild(menu(Data));
// contentDiv.appendChild(contact(Data));

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
