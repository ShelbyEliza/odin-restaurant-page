import Pancakes from "./pancakes.jpg";

export default function home(data) {
	const homeWrapper = document.createElement("div");
	const headline = document.createElement("h2");
	const aboutDiv = document.createElement("div");

	const aboutP1 = document.createElement("p");
	const aboutP2 = document.createElement("p");

	const homeImg = new Image();

	homeImg.src = Pancakes;

	homeImg.alt = "pancakes and raspberries";

	homeWrapper.id = "home-page";
	homeWrapper.classList.add("home-wrapper");
	aboutDiv.classList.add("about-wrapper");
	headline.classList.add("headline");
	aboutP1.classList.add("about");
	aboutP2.classList.add("about");

	headline.textContent = "A special place to dine";
	aboutP1.textContent = data.about.p1;
	aboutP2.textContent = data.about.p2;

	aboutDiv.appendChild(headline);
	aboutDiv.appendChild(homeImg);

	aboutDiv.appendChild(aboutP1);
	aboutDiv.appendChild(aboutP2);

	homeWrapper.appendChild(aboutDiv);

	return homeWrapper;
}
