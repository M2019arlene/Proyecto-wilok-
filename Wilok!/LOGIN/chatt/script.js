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
        window.location.href = 'file:///C:/Users/mediapiladmin/Desktop/mediapila/Wilok!/index.html'; // Salir del chat (redirigir a home)
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

// mejora del hover
const chatHeader = document.querySelector(".chat-header");

contactItems.forEach(noSelect => noSelect.classList.remove('selected')) 

contactItems.forEach(contacto => {
    contacto.addEventListener('click', () => {
        contactItems.forEach(usuario => usuario.classList.remove('selected'));
        contacto.classList.add('selected');

        const nombreContacto = contacto.querySelector("strong").textContent;
        const imagenContacto = contacto.querySelector("img").src;

        chatHeader.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="${imagenContacto}" alt="${nombreContacto}" class="rounded-circle me-3" style="width: 50px; height: 50px;">
                <strong>${nombreContacto}</strong>
            </div>`;

        const closeChatBtn = document.getElementById("close-chat-btn");
        closeChatBtn.addEventListener("click", () => {
            window.location.href = "/"; // Salir del chat (redirigir a home)
        });

        chatBody.innerHTML = `
            <div class="message bot mb-3">
                <div class="message-content p-2 rounded bg-warning text-white">
                    Hola, soy ${nombreContacto} ¿Cómo estas?.
                </div>
                <div class="message-time text-start small text-muted">12:00</div>
            </div>`;
    });
});

// pantalla inicial al entrar o recargar el chat
document.addEventListener("DOMContentLoaded", () => {
    const contactos = document.querySelectorAll(".contact-item");
    const pantallaInicial = document.getElementById("pantalla-inicial");
    const chatBody = document.querySelector(".chat-body");
    const chatFooter = document.querySelector(".chat-footer");
    const chatHeader = document.querySelector(".chat-header");
    const profileImg = chatHeader.querySelector("img");
    const profileName = chatHeader.querySelector("strong");

    function mostrarPantallaInicial() {
        pantallaInicial.classList.remove("d-none");
        chatBody.classList.add("d-none");
        chatFooter.classList.add("d-none");
    }

    function mostrarChat(contacto) {
        const nombre = contacto.querySelector("strong").textContent;
        const imagen = contacto.querySelector("img").src;

        profileImg.src = imagen;
        profileImg.alt = nombre;
        profileName.textContent = nombre;

        pantallaInicial.classList.add("d-none");
        chatBody.classList.remove("d-none");
        chatFooter.classList.remove("d-none");
    }

    mostrarPantallaInicial();

    contactos.forEach(contacto => {
        contacto.addEventListener("click", () => {
            contactos.forEach(c => c.classList.remove("selected"));
            contacto.classList.add("selected");
            mostrarChat(contacto);
        });
    });
});

// estado de conexion
document.addEventListener("DOMContentLoaded", () => {
    const contactos = document.querySelectorAll(".contact-item");

    const estados = ["online", "offline"]; 

    contactos.forEach((contacto, index) => {
        const estadoDeConexion = contacto.querySelector(".estado-de-conexion");
        const estado = estados[index % estados.length]; 
        estadoDeConexion.classList.add(estado); 
    });
});

