const nav = document.createElement("nav");
let navStatus = "home";

class Tab {
	constructor(title, status) {
		this.title = title;
		this.status = status;

		this.btn = document.createElement("button");
		this.btn.classList.add(`${title}Tab`);
		this.btn.textContent = title;
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
		let temp;
		if (this.status === true) {
			temp = false;
			this.btn.classList.remove("active");
		} else {
			temp = true;
			this.btn.classList.add("active");
			navStatus = this.title.toLowerCase();
		}
		this.status = temp;
	}
}

const homeTab = new Tab("Home", true);
const menuTab = new Tab("Menu", false);
const contactTab = new Tab("Contact", false);

nav.appendChild(homeTab.btn);
nav.appendChild(menuTab.btn);
nav.appendChild(contactTab.btn);
export { nav, navStatus };
