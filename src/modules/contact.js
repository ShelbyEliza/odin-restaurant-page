import Coffee from "../images/coffee-crop.png";

export default function contact(data) {
	const contactWrapper = document.createElement("div");
	const contactContent = document.createElement("div");

	const coffeeImg = new Image();
	coffeeImg.src = Coffee;
	coffeeImg.alt = "woman drinking coffee";

	const blurb = document.createElement("p");
	blurb.classList.add("blurb");
	blurb.textContent = data.contact.blurb;
	const imgBlurbDiv = document.createElement("div");
	imgBlurbDiv.classList.add("img-blurb-div");

	const labelDiv = document.createElement("div");
	const infoDiv = document.createElement("div");

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

	coffeeImg.classList.add("contact-img");
	contactContent.classList.add("contact-content");

	labelDiv.classList.add("labels");
	infoDiv.classList.add("info");

	phoneLabel.classList.add("label");
	siteLabel.classList.add("label");
	addressLabel.classList.add("label");
	emailLabel.classList.add("label");

	phone.classList.add("data");
	site.classList.add("data");
	addressL1.classList.add("data", "address");
	addressL2.classList.add("data", "address");
	addressL3.classList.add("data", "address");
	email.classList.add("data");

	phone.textContent = data.contact.phone;
	site.textContent = data.contact.site;
	addressL1.textContent = data.contact.addressL1;
	addressL2.textContent = data.contact.addressL2;
	addressL3.textContent = data.contact.addressL3;
	email.textContent = data.contact.email;

	phoneLabel.textContent = "Phone Number";
	siteLabel.textContent = "Website";
	addressLabel.textContent = "Address";
	emailLabel.textContent = "Email";

	let labelItems = [phoneLabel, siteLabel, emailLabel, addressLabel];
	let infoItems = [phone, site, email, addressL1, addressL2, addressL3];
	let pageItems = [coffeeImg, blurb, contactContent];

	function appendItems(parent, children) {
		children.forEach((child) => {
			parent.appendChild(child);
		});
	}

	appendItems(labelDiv, labelItems);
	appendItems(infoDiv, infoItems);

	contactContent.appendChild(labelDiv);
	contactContent.appendChild(infoDiv);

	appendItems(contactWrapper, pageItems);

	return contactWrapper;
}
