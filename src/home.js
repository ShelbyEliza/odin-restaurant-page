export default function buildHome() {
	const titleDiv = document.createElement("header");
	const title = document.createElement("h1");
	const subtitle = document.createElement("p");
	title.textContent = "Zarrio's Ziti";
	subtitle.textContent = "a family-style italian eatery";

	titleDiv.appendChild(title);
	titleDiv.appendChild(subtitle);

	return titleDiv;
	// return "I'm the Homepage!";
}
