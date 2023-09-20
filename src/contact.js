import Coffee from "./coffee-crop.png";

export default function contact(data) {
	const contactWrapper = document.createElement("div");
	const headline = document.createElement("h2");
	const infoDiv = document.createElement("div");

	const coffeeImg = new Image();
	coffeeImg.src = Coffee;
	coffeeImg.alt = "woman drinking coffee";

	const phone = document.createElement("p");
	const site = document.createElement("p");
	const addressL1 = document.createElement("p");
	const addressL2 = document.createElement("p");
	const addressL3 = document.createElement("p");

	const email = document.createElement("p");

	const phoneLabel = document.createElement("p");
	const siteLabel = document.createElement("p");
	const addressLabel = document.createElement("p");
	const emailLabel = document.createElement("p");

	contactWrapper.id = "contact-page";

	infoDiv.classList.add("contact-info");

	phoneLabel.classList.add("label");
	siteLabel.classList.add("label");
	addressLabel.classList.add("label");
	emailLabel.classList.add("label");

	phone.classList.add("data");
	site.classList.add("data");
	addressL1.classList.add("data");
	addressL2.classList.add("data");
	addressL3.classList.add("data");
	email.classList.add("data");

	headline.textContent = "Contact Us!";
	phone.textContent = data.contact.phone;
	site.textContent = data.contact.site;
	addressL1.textContent = data.contact.addressL1;
	addressL2.textContent = data.contact.addressL2;
	addressL3.textContent = data.contact.addressL3;
	email.textContent = data.contact.email;

	let infoItems = [phone, site, addressL1, addressL2, addressL3, email];
	let pageItems = [headline, coffeeImg, infoDiv];

	function appendItems(parent, children) {
		children.forEach((child) => {
			parent.appendChild(child);
		});
	}

	appendItems(infoDiv, infoItems);
	appendItems(contactWrapper, pageItems);

	return contactWrapper;
}
