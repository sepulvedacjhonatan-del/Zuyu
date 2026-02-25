// Mostrar registro
function showRegister() {
  document.getElementById("login-box").classList.add("hidden");
  document.getElementById("register-box").classList.remove("hidden");
}

// Mostrar login
function showLogin() {
  document.getElementById("register-box").classList.add("hidden");
  document.getElementById("login-box").classList.remove("hidden");
}

// Manejo de formularios
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPass").value;
  alert(`Bienvenido ${user}! (Login simulado)`);
});

document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("regUser").value;
  const email = document.getElementById("regEmail").value;
  alert(`Cuenta creada para ${user} con correo ${email} (Registro simulado)`);
});

/* ==== LOGIN / REGISTRO ==== */

// Mostrar registro
function showRegister() {
  const loginBox = document.getElementById("login-box");
  const registerBox = document.getElementById("register-box");
  if (loginBox && registerBox) {
    loginBox.classList.add("hidden");
    registerBox.classList.remove("hidden");
  }
}

// Mostrar login
function showLogin() {
  const loginBox = document.getElementById("login-box");
  const registerBox = document.getElementById("register-box");
  if (loginBox && registerBox) {
    registerBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
  }
}

// Manejo de login
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    if (user && pass) {
      alert(`Bienvenido ${user}!`);
      // Redirige al feed principal
      window.location.href = "feed.html";
    }
  });
}

// Manejo de registro
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("regUser").value;
    const email = document.getElementById("regEmail").value;
    const pass = document.getElementById("regPass").value;

    if (user && email && pass) {
      alert(`Cuenta creada para ${user} con correo ${email}`);
      showLogin();
    }
  });
}

/* ==== FEED PRINCIPAL ==== */

// Buscar contenido en el feed
function searchContent() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  const query = searchInput.value.toLowerCase();
  const posts = document.querySelectorAll(".post");

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    post.style.display = text.includes(query) ? "block" : "none";
  });
}

// Crear nueva publicación
function addPost() {
  const newPostText = document.getElementById("newPostText");
  if (!newPostText) return;

  const text = newPostText.value;
  if (text.trim() === "") {
    alert("Escribe algo para publicar.");
    return;
  }

  const feed = document.querySelector(".feed");
  if (feed) {
    const newPost = document.createElement("section");
    newPost.classList.add("post");
    newPost.innerHTML = `<h3>@nuevoUsuario</h3><p>${text}</p>`;
    feed.prepend(newPost); // aparece arriba del feed
  }

  newPostText.value = "";
}

/* ==== MENSAJES / CHAT ==== */
function sendMessage() {
  const input = document.getElementById("chatMessage");
  const chatBox = document.getElementById("chatBox");

  if (!input || !chatBox) return;

  const text = input.value.trim();
  if (text === "") return;

  // Crear nuevo mensaje
  const newMsg = document.createElement("div");
  newMsg.classList.add("message", "sent");
  newMsg.innerText = text;

  chatBox.appendChild(newMsg);
  chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll

  input.value = "";
}

/* ==== FIN DEL SCRIPT ==== */