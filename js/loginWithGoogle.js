document.addEventListener("DOMContentLoaded", function () {
  const loginWithGoogleBtn = document.getElementById("loginWithGoogleBtn");

  loginWithGoogleBtn.addEventListener("click", function () {
    const clientId =
      "333265768602-b7tl8tnr91i1i255ttj86as93lb6dhro.apps.googleusercontent.com";
      //need a authorize domain
    const redirectUri = "https://www.freecodecamp.org/";

    // Create Google OAuth URL
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email%20profile`;

    // Redirect the user to the Google OAuth URL
    window.location.href = authUrl;
  });
});
