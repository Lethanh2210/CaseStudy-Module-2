import {StudentManager} from "./StudentManager.js";

let manager = new StudentManager();

document.getElementById('btn-save').addEventListener('click', saver);

function saver(): void {
    let id = (document.getElementById('id') as HTMLInputElement).value;
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let grade = (document.getElementById('grade') as HTMLInputElement).value;
    let phone = (document.getElementById('phone') as HTMLInputElement).value;
    let address = (document.getElementById('address') as HTMLInputElement).value;
    let point = (document.getElementById('point') as HTMLInputElement).value;

    manager.addStudent(parseInt(id), name, grade, phone, address, parseInt(point));
    console.log(manager._students);
    manager.showList();

}

// manager.showList('2');