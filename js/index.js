const submitButton = document.getElementById("submitBtn");
const email = document.getElementById("email");
const error = document.getElementById("error");

submitButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (mailformat.test(email.value)) {
    error.style.display = "none";
    document.getElementById("signup").submit();
  } else {
    error.style.display = "block";
  }
});
