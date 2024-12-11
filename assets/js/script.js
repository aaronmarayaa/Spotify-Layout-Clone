let main = document.getElementById('main')
let login = document.getElementById('login')
let music_section = document.getElementById('music-section')
let all_section = document.getElementById('all-section')

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
        alert("Wrong username or Password!");
        return false;
    }
}

function confirmLogout() {
    let confirm_ = confirm("Are you sure you want to log out?")
    if (confirm_) {
        login.style.display = "flex"
        main.style.display = "none"
    }
}

function showPassword() {
    if(password.type === "password") {
        password.type = "text"
    } else {
        password.type = "password"
    }
}

function showMusic() {
    music_section.style.display = "block"
    all_section.style.display = "none"
}
function showAll() {
    music_section.style.display = "none"
    all_section.style.display = "block"
}