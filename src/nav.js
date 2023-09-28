// class Tabs {
// 	allTabs = [];

// 	constructor(tabList) {
// 		tabList.forEach((tab) => {
// 			this.allTabs.push(tab);
// 		});
// 	}
// }
const mainTitleDiv = document.createElement("div");
mainTitleDiv.classList.add("main-title-wrapper");

const mainTitle = document.createElement("h1");
mainTitle.classList.add("site-title");
mainTitle.textContent = "Brunchoes Munchoes";

mainTitleDiv.appendChild(mainTitle);

class Tab {
	constructor(title) {
		this.title = title;
		this.id = title.toLowerCase();

		this.btn = document.createElement("button");
		this.btn.classList.add(`${title}Tab`);
		this.btn.textContent = title;

		/** TODO: this.title === "Home". Other options are for dev. */
		// if (this.title === "Home") {
		// if (this.title === "Contact") {
		if (this.title === "Menu") {
			this.btn.classList.add("active");
			this.status = true;
		} else {
			this.status = false;
		}
		this.btn.addEventListener("click", () => {
			this.toggleStatus();
		});
	}

	setStatus(status) {
		this.status = status;
	}
	getStatus() {
		this.status;
	}
	toggleStatus() {
		if (prevTab.id !== this.id) {
			this.btn.classList.add("active");
			prevTab.btn.classList.remove("active");
			prevTab.setStatus(false);
			this.status = true;
			prevTab = this;
		}
	}
}

const homeTab = new Tab("Home");
const menuTab = new Tab("Menu");
const contactTab = new Tab("Contact");
// const myTabs = new Tabs([homeTab, menuTab, contactTab]);

/** TODO: set prevTab to hometab. Other options are for dev. */
// let prevTab = homeTab;
let prevTab = menuTab;
// let prevTab = contactTab;

const nav = document.createElement("nav");
// nav.appendChild(mainTitleDiv);

nav.appendChild(homeTab.btn);
nav.appendChild(menuTab.btn);
nav.appendChild(contactTab.btn);
export { nav, mainTitleDiv, homeTab, menuTab, contactTab };
