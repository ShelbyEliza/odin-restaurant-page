export default function menu(data) {
	const menuWrapper = document.createElement("div");
	const headline = document.createElement("h2");
	const infoDiv = document.createElement("div");

	const appsHeading = document.createElement("h3");
	const mainsHeading = document.createElement("h3");
	const sidesHeading = document.createElement("h3");
	const sweetsHeading = document.createElement("h3");

	const appsText = document.createElement("p");
	const mainsText = document.createElement("p");
	const sidesText = document.createElement("p");
	const sweetsText = document.createElement("p");

	menuWrapper.id = "menu-page";

	headline.textContent = "Menu";
	appsHeading.textContent = "Appetizers";
	mainsHeading.textContent = "Mains";
	sidesHeading.textContent = "Sides";
	sweetsHeading.textContent = "Sweets";

	infoDiv.appendChild(appsHeading, mainsHeading);

	menuWrapper.appendChild(headline);
	menuWrapper.appendChild(infoDiv);

	return menuWrapper;
}
