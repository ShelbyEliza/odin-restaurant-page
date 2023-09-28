export default function menu(data) {
	const menuWrapper = document.createElement("div");
	const headline = document.createElement("h2");
	const menuContent = document.createElement("div");

	const appsHeading = document.createElement("h3");
	const mainsHeading = document.createElement("h3");
	const sweetsHeading = document.createElement("h3");

	const appsDiv = document.createElement("section");
	const mainsDiv = document.createElement("section");
	const sweetsDiv = document.createElement("section");

	menuContent.classList.add("menu-content");

	class FoodItem {
		constructor(type, name, price) {
			this.type = type;
			this.name = name;
			this.price = price;

			this.foodWrapper = document.createElement("div");
			this.foodWrapper.classList.add("food-wrapper");

			this.nameEl = document.createElement("h4");
			this.nameEl.textContent = this.name;
			this.nameEl.classList.add("menu-item", `${type}`);

			this.priceEl = document.createElement("p");
			this.priceEl.textContent = this.price;
			this.priceEl.classList.add("price", `${type}`);

			this.foodWrapper.appendChild(this.nameEl);
			this.foodWrapper.appendChild(this.priceEl);

			switch (type) {
				case "apps":
					appsDiv.appendChild(this.foodWrapper);
					break;
				case "mains":
					mainsDiv.appendChild(this.foodWrapper);
					break;
				case "sweets":
					sweetsDiv.appendChild(this.foodWrapper);
					break;
				default:
					console.log("Error. Type is not a recognized menu category.");
			}
		}
	}

	function insertData(type) {
		data.menu[type].forEach((food) => {
			new FoodItem(type, food.name, food.price);
		});
	}

	menuWrapper.id = "menu-page";

	headline.textContent = "Menu";
	appsHeading.textContent = "Appetizers";
	mainsHeading.textContent = "Mains";
	sweetsHeading.textContent = "Sweets";

	appsDiv.appendChild(appsHeading);
	mainsDiv.appendChild(mainsHeading);
	sweetsDiv.appendChild(sweetsHeading);

	insertData("apps");
	insertData("mains");
	insertData("sweets");

	menuContent.appendChild(appsDiv);
	menuContent.appendChild(mainsDiv);
	menuContent.appendChild(sweetsDiv);

	menuWrapper.appendChild(headline);
	menuWrapper.appendChild(menuContent);

	return menuWrapper;
}
