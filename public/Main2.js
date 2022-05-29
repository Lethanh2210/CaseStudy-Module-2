import { StudentManager } from "./StudentManager.js";
let manager = new StudentManager();
manager.showList();
function students() {
    return JSON.parse(localStorage.getItem('student'));
}
function updateButtonEdit() {
    let editUserButtons = document.getElementsByClassName('update-student');
    for (let i = 0; i < editUserButtons.length; i++) {
        editUserButtons[i].addEventListener('click', () => {
            document.getElementById('btn-confirm').addEventListener('click', confirm);
            function confirm() {
                let id = document.getElementById('id1').value;
                let name = document.getElementById('name1').value;
                let grade = document.getElementById('grade1').value;
                let phone = document.getElementById('phone1').value;
                let address = document.getElementById('address1').value;
                let point = document.getElementById('point1').value;
                let index = editUserButtons[i].getAttribute('value');
                manager._students = students();
                manager.selectionSort(manager._students);
                manager._students[index]._id = parseInt(id);
                manager._students[index]._name = name;
                manager._students[index]._grade = grade;
                manager._students[index]._phone = phone;
                manager._students[index]._address = address;
                manager._students[index]._point = parseInt(point);
                localStorage.setItem('student', JSON.stringify(manager._students));
                window.location.href = '../views/detail-List-page.html';
                manager.showList();
                updateButtonEdit();
            }
        });
    }
}
updateButtonEdit();
function updateButtonDelete() {
    let deleteUserButtons = document.getElementsByClassName('delete-student');
    for (let i = 0; i < deleteUserButtons.length; i++) {
        deleteUserButtons[i].addEventListener('click', () => {
            alert("Bạn có muốn xóa không ?");
            let index = deleteUserButtons[i].getAttribute('value');
            console.log(index);
            manager.delete(parseInt(index));
            manager.showList();
            // goi lai ham uplodate de cap nhat deleteUserButtons
            updateButtonDelete();
            updateButtonEdit();
        });
    }
}
updateButtonDelete();
//Search
document.getElementById('search-btn').addEventListener('keyup', () => {
    let searchResults = [];
    let Students = students();
    let str = document.getElementById('search-btn');
    for (let i = 0; i < Students.length; i++) {
        if (checkSubStr(str.value.toLowerCase(), Students[i]._name.toLowerCase())) {
            searchResults.push(Students[i]);
        }
    }
    manager.searchList(searchResults);
});
function checkSubStr(str1, str2) {
    let m = str1.length;
    let n = str2.length;
    let j;
    for (let i = 0; i <= n - m; i++) {
        for (j = 0; j < m; j++)
            if (str2[i + j] !== str1[j]) {
                break;
            }
        if (j === m)
            return true;
    }
    return false;
}
//# sourceMappingURL=Main2.js.map