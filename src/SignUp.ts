import {User} from "./User.js";

let regUserName: RegExp = /^\w+$/;
let regPass: RegExp = /(?=.*[A-Z])[a-zA-Z0-9]{6,18}/;
let regEmail: RegExp = /^(?=.*\w)[a-zA-Z0-9]+@[a-zA-Z]{3,}\.(com|com\.vn)$/;

document.getElementById('register').addEventListener('click', signUp);

function signUp() {
    let userName = (document.getElementById('your-name') as HTMLInputElement).value;
    let password = (document.getElementById('pass') as HTMLInputElement).value;
    let repass = (document.getElementById("repeat") as HTMLInputElement).value;

    if(repass !== password){
        document.getElementById('repass').style.display = 'block';
    }else {
        let user = new User(userName, password);
        let users = [];
        if (!JSON.parse(localStorage.getItem('users'))) {
            users.push(user);
        } else {
            users = JSON.parse(localStorage.getItem('users'));
            users.push(user);
        }
        clearInput();
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'login.html'
    }



}



document.getElementById('your-name').addEventListener('keyup', checkName);

function checkName() {
    let userName = (document.getElementById('your-name') as HTMLInputElement).value;
    if (!regUserName.test(userName)) {
        document.getElementById('name-signUp').style.display = 'block';
    } else {
        document.getElementById('name-signUp').style.display = 'none';
    }
}

document.getElementById('email').addEventListener('keyup', checkEmail);

function checkEmail() {
    let email = (document.getElementById('email') as HTMLInputElement).value;
    if (!regEmail.test(email)) {
        document.getElementById('email-signUp').style.display = 'block';
    } else {
        document.getElementById('email-signUp').style.display = 'none';
    }
}

document.getElementById('pass').addEventListener('keyup', checkPass);

function checkPass() {
    let pass = (document.getElementById('pass') as HTMLInputElement).value;
    if (!regPass.test(pass)) {
        document.getElementById('pass-signUp').style.display = 'block';
    } else {
        document.getElementById('pass-signUp').style.display = 'none';
    }
}


function clearInput() {
    (document.getElementById('your-name') as HTMLInputElement).value = null;
    (document.getElementById('email') as HTMLInputElement).value = null;
    (document.getElementById('pass') as HTMLInputElement).value = null;
    (document.getElementById('repeat') as HTMLInputElement).value = null;
}

