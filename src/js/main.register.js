const signIn = document.querySelector("#login__sign_in");

console.log(location.hostname);

signIn.addEventListener("click", () => {
  location.href = `/`;
});
