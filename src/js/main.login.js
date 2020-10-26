const submitButton = document.querySelector("#login__submit");
const login = document.querySelector("#login__login");
const password = document.querySelector("#login__password");
const message = document.querySelector("#login__message");
const signUp = document.querySelector("#login__sign_up");
const formData = new FormData();

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("login", login.value);
  formData.append("password", password.value);
  fetch("/auth/login", {
    method: "POST",
    body: formData,
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      if (data["status"]) {
        location.href = `/dashboard`;
      } else {
        password.value = "";
        message.innerHTML = "Wrong login or password";
      }
    })
    .catch((err) => {
      console.log("err :>> ", err);
    });
});

signUp.addEventListener("click", () => {
  location.href = `/register`;
});
