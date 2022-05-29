import { StudentManager } from "./StudentManager.js";
let manager = new StudentManager();
document.getElementById('btn-save').addEventListener('click', saver);
function saver() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let grade = document.getElementById('grade').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let point = document.getElementById('point').value;
    manager.addStudent(parseInt(id), name, grade, phone, address, parseInt(point));
    console.log(manager._students);
    manager.showList();
}
// manager.showList('2');
//# sourceMappingURL=add-main.js.map