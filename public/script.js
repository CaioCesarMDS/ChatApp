const messageInput = document.querySelector("#message");
const sendButton = document.querySelector("button");
const chat = document.getElementById("messages");

const socket = io();

sendButton.addEventListener("click", () => {
    console.log(messageInput.value);
    if (messageInput.value !== "") {
        socket.emit("new message", messageInput.value);
        messageInput.value = "";
    } else {
        alert("Digite algo");
    }
});

socket.on("new message", (message) => {
    chat.innerHTML += `<li>${message}</li>`;
});
