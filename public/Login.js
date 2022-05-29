document.getElementById('login').addEventListener('click', loginUser);
function loginUser() {
    let userCheck = false;
    let userName = document.getElementById('user-name');
    let password = document.getElementById('password');
    let users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
        if (users[i]._username === userName.value) {
            if (users[i]._password === password.value) {
                userCheck = true;
                break;
            }
        }
    }
    if (userCheck === true) {
        window.location.href = '../index.html';
    }
    else {
        alert('sai tai khoan hoac mat khau');
    }
}
export {};
//# sourceMappingURL=Login.js.map