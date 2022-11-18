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
});

ipc.on("displayNewMessage", (_, data) => {
	let messageParagraph = document.createElement("p");
	messageParagraph.classList.add("message-paragraph");
	messageParagraph.innerText = data;
	messagesDiv.appendChild(messageParagraph);
	messageInput.value = "";
});

ipc.on("retrievedMessages", (_, data) => {
	let previousMessages = document.querySelectorAll(".message-paragraph");
	previousMessages.forEach(msg => {
		msg.remove();
	});
	data.forEach(message => {
		let messageParagraph = document.createElement("p");
		messageParagraph.classList.add("message-paragraph");
		messageParagraph.innerText = message;
		messagesDiv.appendChild(messageParagraph);
	});
});
