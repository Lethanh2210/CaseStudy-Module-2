import {Student} from "./Student.js";
import {StudentManager} from "./StudentManager.js";

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
                let id = (document.getElementById('id1') as HTMLInputElement).value;
                let name = (document.getElementById('name1') as HTMLInputElement).value;
                let grade = (document.getElementById('grade1') as HTMLInputElement).value;
                let phone = (document.getElementById('phone1') as HTMLInputElement).value;
                let address = (document.getElementById('address1') as HTMLInputElement).value;
                let point = (document.getElementById('point1') as HTMLInputElement).value;


                let index = editUserButtons[i].getAttribute('value');
                manager._students = students();
                manager.selectionSort(manager._students);
                manager._students[index]._id = parseInt(id);
                manager._students[index]._name = name;
                manager._students[index]._grade = grade;
                manager._students[index]._phone = phone;
                manager._students[index]._address = address;
                manager._students[index]._point = parseInt(point);

                localStorage.setItem('student', JSON.stringify(manager._students))
                window.location.href = '../views/detail-List-page.html';
                manager.showList();
                updateButtonEdit();


            }
        })
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

        })
    }
}

updateButtonDelete();


//Search
document.getElementById('search-btn').addEventListener('keyup', () => {
    let searchResults = [];
    let Students = students();
    let str = document.getElementById('search-btn') as HTMLInputElement;
    for (let i = 0; i < Students.length; i++) {
        if (checkSubStr(str.value.toLowerCase(), Students[i]._name.toLowerCase())) {
            searchResults.push(Students[i]);
        }
    }
    manager.searchList(searchResults);

});

function checkSubStr(str1: string, str2: string) {
    let m: number = str1.length;
    let n: number = str2.length;
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











