//-----------------------------\\ FUNCTIONS //-----------------------------\\

document.querySelector("[data-homepage-nav]").addEventListener("click", () => {
	document.querySelector("[data-homepage-page]").style.zIndex = "2";
	document.querySelector("[data-test-page]").style.zIndex = "1";
});

document.querySelector("[data-test-nav]").addEventListener("click", () => {
	document.querySelector("[data-test-page]").style.zIndex = "2";
	document.querySelector("[data-homepage-page]").style.zIndex = "1";
});
