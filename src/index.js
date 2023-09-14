import buildHome from "./home";

const contentDiv = document.createElement("div");
// const cDiv = document.getElementById("content");
contentDiv.appendChild(buildHome());

// function component() {
// 	// contentDiv.classList.add("content-wrapper");
// 	// contentDiv.textContent = buildHome();
// 	return contentDiv;
// }

document.body.appendChild(component());
