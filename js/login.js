const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  window.location.replace(
    "https://accounts.spotify.com/authorize?client_id=1181c63c694947558504958f5b465dff&redirect_uri=http://localhost:5500&scope=user-read-private%20user-read-email&response_type=token"
  );
});
