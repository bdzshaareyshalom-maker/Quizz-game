console.log("auth.js loaded");

const loginScreen = document.getElementById("login-screen");
const appShell = document.getElementById("app-shell");
const loginForm = document.getElementById("magic-link-form");
const loginMessage = document.getElementById("login-message");

console.log({ loginScreen, appShell, loginForm, loginMessage });

(function () {
  const authConfig = window.AUTH_CONFIG || {};
  const supabaseUrl = authConfig.supabaseUrl;
  const supabaseAnonKey = authConfig.supabaseAnonKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase auth config.");
    return;
  }

  if (!window.supabase || !window.supabase.createClient) {
    console.error("Supabase client library not loaded.");
    return;
  }

  const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
  window.supabaseClient = supabaseClient;

  async function getSession() {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) {
      console.error("Session fetch error:", error);
      return null;
    }
    return data.session;
  }

  async function signInWithMagicLink(email) {
    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin
      }
    });

    if (error) throw error;
  }

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
  }

  window.authApi = {
    getSession,
    signInWithMagicLink,
    signOut
  };
})();
