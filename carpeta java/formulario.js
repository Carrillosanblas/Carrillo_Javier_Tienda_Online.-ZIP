let SignUp = document.getElementById("SignUp")
let SignIn = document.getElementById("SignIn")
let nameInput = document.getElementById("nameInput");
let tittle = document.getElementById("tittle");

SignIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    tittle.innerHTML = "Login"
    SignUp.classList.add("disable")
    SignUp.classList.remove("disable")
}

SignUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    tittle.innerHTML = "Registro"
    SignUp.classList.add("disable")
    SignUp.classList.remove("disable")
}