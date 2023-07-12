var chatBoxA = document.getElementById("chat-box-a");
var chatBoxB = document.getElementById("chat-box-b");
var messageInputA = document.getElementById("message-input-a");
var messageInputB = document.getElementById("message-input-b");
var sendButtonA = document.getElementById("send-button-a");
var sendButtonB = document.getElementById("send-button-b");

sendButtonA.addEventListener("click", function() {
    var message = messageInputA.value;
    sendMessage(message, "user-a");
});

sendButtonB.addEventListener("click", function() {
    var message = messageInputB.value;
    sendMessage(message, "user-b");
});

function sendMessage(message, sender) {
    if (message.trim() !== "") {
        displayMessage(message, sender);
        if (sender === "user-a") {
            setTimeout(function() {
                displayMessage("User B: " + message, "user-b");
            }, 500); // Simulating a delay before User B receives the message
        } else if (sender === "user-b") {
            setTimeout(function() {
                displayMessage("User A: " + message, "user-a");
            }, 500); // Simulating a delay before User A receives the message
        }
        clearInput(sender);
    }
}

function displayMessage(message, sender) {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.classList.add(sender);
    messageElement.innerText = message;

    if (sender === "user-a") {
        chatBoxA.appendChild(messageElement);
    } else if (sender === "user-b") {
        chatBoxB.appendChild(messageElement);
    }

    chatBoxA.scrollTop = chatBoxA.scrollHeight;
    chatBoxB.scrollTop = chatBoxB.scrollHeight;
}

function clearInput(sender) {
    if (sender === "user-a") {
        messageInputA.value = "";
    } else if (sender === "user-b") {
        messageInputB.value = "";
    }
}
