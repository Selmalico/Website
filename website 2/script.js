const loginForm = document.getElementById("loginform");
const loginButton = document.getElementById("login-submit");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.uname.value ;
    const password = loginForm.passw.value;
    if(username === "user" && password === "selma"){
        alert("You have successfully logged in.");
        window.location.href = "second.html";
    } else {
        alert("Username or password is incorrect.");
        window.location.reload();
    }
})