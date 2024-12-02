document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBody = document.querySelector(".chat-body");
    const addUserBtn = document.getElementById("add-user-btn");
    const closeChatBtn = document.getElementById("close-chat-btn");

    const botResponses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "como estas": "¡Estoy genial! ¿Y tú?",
        "adios": "¡Adiós! Que tengas un gran día.",
        "default": "Lo siento, no entendí eso. ¿Podrías repetirlo?"
    };


    function addMessage(content, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender, "mb-3", "text-" + (sender === "bot" ? "start" : "end"));
        messageDiv.innerHTML = `
            <div class="message-content p-2 rounded bg-${sender === "bot" ? "warning" : "secondary"} text-white">${content}</div>
            <div class="message-time small text-muted">${new Date().toLocaleTimeString()}</div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");
            const botMessage = botResponses[userMessage.toLowerCase()] || botResponses["default"];
            setTimeout(() => addMessage(botMessage, "bot"), 500);
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });

    // Agregar usuarios (ejemplo)
    addUserBtn.addEventListener("click", () => {
        alert("Función de agregar usuario no implementada.");
    });

    // Función para cerrar el chat
    closeChatBtn.addEventListener("click", () => {
        window.location.href = '/'; // Salir del chat (redirigir a home)
    });
});

const contactItems = document.querySelectorAll(".contact-item");
const chatBody = document.querySelector(".chat-body");

contactItems.forEach((item) => {
    item.addEventListener("click", () => {
        
        const contactName = item.querySelector("strong").textContent;
        chatBody.innerHTML = "";

        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", "mb-3", "text-start");

        const messageContent = document.createElement("div");
        messageContent.classList.add("message-content", "p-2", "rounded", "bg-light");
        messageContent.textContent = chatMessages[contactName] || "Hola, ¿cómo estás?";

        const messageTime = document.createElement("div");
        messageTime.classList.add("message-time", "text-end", "small", "text-muted");
        const now = new Date();
        messageTime.textContent = `${now.getHours()}:${now.getMinutes()}`;

        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(messageTime);
        chatBody.appendChild(messageDiv);
    });
});


