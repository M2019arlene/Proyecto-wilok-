document.addEventListener("DOMContentLoaded", () => {
    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotContainer = new bootstrap.Offcanvas(document.getElementById("chatbot-container"));
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");
    const chatbotImg = document.getElementById("chatbot-img");
    const chatbotName = document.getElementById("chatbot-name");

// respuestas del bot
    const botResponses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "como estas?": "Soy solo un bot, ¡pero estoy muy bien! ¿Y vos?",
        "adios": "¡Adiós! ¡Que tengas un gran día!",
        "default": "Lo siento, no entendí eso. ¿Podrías intentar preguntar algo más?"
    };

    chatbotToggle.addEventListener("click", () => {
        chatbotContainer.show();
    });


    function addMessage(content, sender) {
        const messageDiv = document.createElement("div");
        const time = new Date().toLocaleTimeString();
        messageDiv.classList.add("message", sender);
        messageDiv.innerHTML = `
            <div class="message-time">${time}</div>
            <div class="message-content">${content}</div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function getBotResponse(userMessage) {
        const lowerCaseMessage = userMessage.toLowerCase();
        return botResponses[lowerCaseMessage] || botResponses["default"];
    }

    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");
            const botMessage = getBotResponse(userMessage);
            setTimeout(() => addMessage(botMessage, "bot"), 500);
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });

    // Click event for contacts
    document.getElementById("contact1").addEventListener("click", () => {
        chatbotImg.src = "../img/perfil-chat.jpeg";
        chatbotName.textContent = "Marlene";
        chatbotContainer.show();
    });

    document.getElementById("contact2").addEventListener("click", () => {
        chatbotImg.src = "../img/perfil-chat.jpeg"; 
        chatbotName.textContent = "Juan"; 
        chatbotContainer.show();
    });
});
