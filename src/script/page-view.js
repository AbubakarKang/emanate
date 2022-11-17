//-----------------------------\\ ELEMENTS //-----------------------------\\

const discoverNavBtn = document.querySelector("[data-discover-nav]");
const settingsNavBtn = document.querySelector("[data-settings-nav]");
const cliqueNavBtn = document.querySelector("[data-clique-nav]");
const chatNavBtn = document.querySelector("[data-chat-nav]");

const chatPage = document.querySelector("[data-chat-page]");
const cliquePage = document.querySelector("[data-clique-page]");
const settingsPage = document.querySelector("[data-settings-page]");
const discoverPage = document.querySelector("[data-discover-page]");

//-----------------------------\\ FUNCTIONS //-----------------------------\\

cliqueNavBtn.addEventListener("click", () => {
	cliquePage.style.zIndex = "3";
	chatPage.style.zIndex = "1";
	discoverPage.style.zIndex = "1";
	settingsPage.style.zIndex = "1";
});

chatNavBtn.addEventListener("click", () => {
	chatPage.style.zIndex = "3";
	cliquePage.style.zIndex = "1";
	discoverPage.style.zIndex = "1";
	settingsPage.style.zIndex = "1";
});

discoverNavBtn.addEventListener("click", () => {
	discoverPage.style.zIndex = "3";
	settingsPage.style.zIndex = "1";
	cliquePage.style.zIndex = "1";
	chatPage.style.zIndex = "1";
});

settingsNavBtn.addEventListener("click", () => {
	settingsPage.style.zIndex = "3";
	discoverPage.style.zIndex = "1";
	cliquePage.style.zIndex = "1";
	chatPage.style.zIndex = "1";
});
