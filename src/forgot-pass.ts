(document.getElementById('take-pass') as HTMLButtonElement).addEventListener('click', takePass);

function takePass(){
    let username = document.getElementById('findUser') as HTMLInputElement
    let users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
        if(users[i]._username === username.value){
            alert("mat khau cua ban la: " + users[i]._password);
            window.location.href = 'login.html'
        }
    }
}