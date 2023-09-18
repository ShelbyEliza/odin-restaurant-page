"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["index"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildHome)
/* harmony export */ });
function buildHome() {
	const titleDiv = document.createElement("header");
	const title = document.createElement("h1");
	const subtitle = document.createElement("p");
	title.textContent = "Zarrio's Ziti";
	subtitle.textContent = "a family-style italian eatery";

	titleDiv.appendChild(title);
	titleDiv.appendChild(subtitle);
	console.log("newer change");

	return titleDiv;
	// return "I'm the Homepage!";
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


const contentDiv = document.createElement("div");
// const cDiv = document.getElementById("content");
contentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());

// function component() {
// 	// contentDiv.classList.add("content-wrapper");
// 	// contentDiv.textContent = buildHome();
// 	return contentDiv;
// }

document.body.appendChild(contentDiv);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2IrQjs7QUFFL0I7QUFDQTtBQUNBLHVCQUF1QixpREFBUzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRIb21lKCkge1xuXHRjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5cdGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHR0aXRsZS50ZXh0Q29udGVudCA9IFwiWmFycmlvJ3MgWml0aVwiO1xuXHRzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiYSBmYW1pbHktc3R5bGUgaXRhbGlhbiBlYXRlcnlcIjtcblxuXHR0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cdHRpdGxlRGl2LmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblx0Y29uc29sZS5sb2coXCJuZXdlciBjaGFuZ2VcIik7XG5cblx0cmV0dXJuIHRpdGxlRGl2O1xuXHQvLyByZXR1cm4gXCJJJ20gdGhlIEhvbWVwYWdlIVwiO1xufVxuIiwiaW1wb3J0IGJ1aWxkSG9tZSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gY29uc3QgY0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYnVpbGRIb21lKCkpO1xuXG4vLyBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG4vLyBcdC8vIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtd3JhcHBlclwiKTtcbi8vIFx0Ly8gY29udGVudERpdi50ZXh0Q29udGVudCA9IGJ1aWxkSG9tZSgpO1xuLy8gXHRyZXR1cm4gY29udGVudERpdjtcbi8vIH1cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==