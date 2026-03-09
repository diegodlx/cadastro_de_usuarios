const loginButton = document.getElementById("login-button");
const userLogin = document.getElementById("login-user");
const passwordLogin = document.getElementById("login-password");


loginButton.addEventListener("click", () => {
  // if (userLogin.value == "diego" && passwordLogin.value == "123") {
  //   alert(`Olá ${userLogin.value}, seja bem vindo de volta!`);
  //    window.location.href = "index_copy.html";
  // } else {
  //   alert("Usuário ou senha incorreto!");
  // }
  window.location.href = "users.html";
});

const backToIndex = () => {
  window.location.href = "index.html";
}