let main = document.getElementById('main')
let login = document.getElementById('login')

let correctUsername = "pane";
let correctPassword = "pane";

function signin() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (correctUsername === username.value.trim() && correctPassword === password.value.trim()) {
        password.value = "";
        return true;
    } else {
        return false;
    }
}

function showMain(event) {
    event.preventDefault();
    if (signin()) {
        login.style.display = "none"
        main.style.display = "block"
    } else {
        alert("Invalid Email or Password!");
        return false;
    }
}

function showPassword() {
    if(password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}
