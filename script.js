const passwordBox = document.getElementById("password");
const length = 12;
const allchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]|\/?>-+=<"

function createPassword() {
    let password = allchars[Math.floor(Math.random() * allchars.length)];

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordBox.value = password;
}
function copypassword() {
    passwordBox.select();
    document.execCommand("copy");
}

