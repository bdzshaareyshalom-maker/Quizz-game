console.log("AUTH LOADED");

const loginScreen = document.getElementById("login-screen");
const appShell = document.getElementById("app-shell");
const form = document.getElementById("magic-link-form");
const message = document.getElementById("login-message");

function showLogin() {
  loginScreen.classList.remove("hidden");
  appShell.classList.add("hidden");
}

function showApp() {
  loginScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
}

async function init() {
  console.log("INIT AUTH");

  const { data, error } = await window.supabase.auth.getSession();

  console.log("SESSION:", data, error);

  if (data.session) {
    showApp();
    if (window.startQuizApp) window.startQuizApp();
  } else {
    showLogin();
  }

  window.supabase.auth.onAuthStateChange((event, session) => {
    console.log("AUTH EVENT:", event);

    if (event === "SIGNED_IN") {
      showApp();
      if (window.startQuizApp) window.startQuizApp();
    }

    if (event === "SIGNED_OUT") {
      showLogin();
    }
  });
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("magic-email").value;

  message.textContent = "Sending...";

  const { error } = await window.supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: window.location.origin,
    },
  });

  if (error) {
    message.textContent = error.message;
  } else {
    message.textContent = "Check your email.";
  }
});

init();
