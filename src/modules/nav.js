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

		if (this.title === "Home") {
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

let prevTab = homeTab;

const nav = document.createElement("nav");

nav.appendChild(homeTab.btn);
nav.appendChild(menuTab.btn);
nav.appendChild(contactTab.btn);
export { nav, mainTitleDiv, homeTab, menuTab, contactTab };
