export default function home(imgPath, data) {
	const homeWrapper = document.createElement("div");
	const headline = document.createElement("h2");
	const aboutDiv = document.createElement("div");

	const aboutP1 = document.createElement("p");
	const aboutP2 = document.createElement("p");

	const homeImg = new Image();

	homeImg.src = imgPath;
	homeImg.alt = "pancakes and raspberries";

	headline.classList.add("headline");
	aboutP1.classList.add("about");
	aboutP2.classList.add("about");

	headline.textContent = "A special place to dine";
	aboutP1.textContent = data.about.p1;
	aboutP2.textContent = data.about.p2;

	aboutDiv.appendChild(aboutP1);
	aboutDiv.appendChild(aboutP2);

	homeWrapper.appendChild(homeImg);
	homeWrapper.appendChild(headline);
	homeWrapper.appendChild(aboutDiv);
	console.log("hey");

	return homeWrapper;
}
