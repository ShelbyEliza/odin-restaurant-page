import "./style.css";
import { nav, mainTitleDiv, homeTab, menuTab, contactTab } from "./modules/nav";
import home from "./modules/home";
import contact from "./modules/contact";
import menu from "./modules/menu";

import Data from "./data.json";

const fullPageDiv = document.getElementById("content");
const tabContentDiv = document.createElement("div");
tabContentDiv.id = "tab-content";

fullPageDiv.appendChild(mainTitleDiv);
fullPageDiv.appendChild(nav);
fullPageDiv.appendChild(tabContentDiv);

tabContentDiv.appendChild(home(Data));

/** Add event listeners to Nav: */
let prevTab = "home";
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
		while (tabContentDiv.firstChild) {
			tabContentDiv.removeChild(tabContentDiv.firstChild);
		}
		tabContentDiv.appendChild(module);
		prevTab = newTab;
	}
}
