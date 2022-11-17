//-----------------------------\\ ELEMENTS //-----------------------------\\

const messagesDiv = document.querySelector("[data-messages-div]");
const messageInput = document.querySelector("[data-message-input]");
const sendMessageBtn = document.querySelector("[data-send-message-button]");

//-----------------------------\\ FUNCTIONS //-----------------------------\\

sendMessageBtn.addEventListener("click", () => {
	let message = messageInput.value;
	if (!message || message === null || message === "") return;
	ipc.send("logMessage", {
		message,
	});
	let messageParagraph = document.createElement("p");
	messageParagraph.innerText = message;
	messagesDiv.appendChild(messageParagraph);
	messageInput.value = "";
});
