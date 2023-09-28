import Pancakes from "./pancakes.jpg";

export default function home(data) {
	const homeWrapper = document.createElement("div");
	const headline = document.createElement("h2");
	const homeContent = document.createElement("div");

	const homeP1 = document.createElement("p");
	const homeP2 = document.createElement("p");

	const homeImg = new Image();

	homeImg.src = Pancakes;

	homeImg.alt = "pancakes and raspberries";

	homeWrapper.id = "home-page";
	homeImg.classList.add("home-img");
	homeContent.classList.add("home-content");
	headline.classList.add("headline");
	homeP1.classList.add("para");
	homeP2.classList.add("para");

	headline.textContent = "Damn Good Food";
	homeP1.textContent = data.home.p1;
	homeP2.textContent = data.home.p2;

	homeContent.appendChild(homeImg);
	homeContent.appendChild(homeP1);
	homeContent.appendChild(homeP2);

	homeWrapper.appendChild(headline);
	homeWrapper.appendChild(homeContent);

	return homeWrapper;
}
