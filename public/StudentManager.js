import { Student } from "./Student.js";
export class StudentManager {
    constructor() {
        this._students = [];
    }
    get students() {
        return this._students;
    }
    addStudent(id, name, grade, phone, address, point) {
        if (!JSON.parse(localStorage.getItem('student'))) {
            let student = new Student(id, name, grade, phone, address, point);
            this._students.push(student);
            localStorage.setItem('student', JSON.stringify(this.students));
        }
        else {
            this._students = JSON.parse(localStorage.getItem('student'));
            let student = new Student(id, name, grade, phone, address, point);
            this._students.push(student);
            localStorage.setItem('student', JSON.stringify(this.students));
        }
    }
    showList() {
        let table = '';
        if (!JSON.parse(localStorage.getItem('student'))) {
            table += `<tr>`;
            table += `<td colspan="8">Nodata</td>`;
            table += `</tr>`;
        }
        else {
            let students = JSON.parse(localStorage.getItem('student'));
            this.selectionSort(students);
            for (let i = 0; i < students.length; i++) {
                table += `<tr>`;
                table += `<td>${i + 1}</td>`;
                table += `<td>${students[i]._id}</td>`;
                table += `<td>${students[i]._name}</td>`;
                table += `<td>${students[i]._grade}</td>`;
                table += `<td>${students[i]._phone}</td>`;
                table += `<td>${students[i]._address}</td>`;
                table += `<td>${students[i]._point}</td>`;
                table += `<td><button type="button" value="${i}" class="btn btn-danger delete-student" >Delete</button></td>`;
                table += `<td><button type="button" value="${i}" class="btn btn-primary update-student" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button></td>`;
                table += `</tr>`;
            }
        }
        document.getElementById('list-all').innerHTML = table;
    }
    showListTop3() {
        let students = JSON.parse(localStorage.getItem('student'));
        this.selectionSort(students);
        let table = '';
        for (let i = 0; i < students.length && i < 3; i++) {
            table += `<tr>`;
            table += `<td>${i + 1}</td>`;
            table += `<td>${students[i]._id}</td>`;
            table += `<td>${students[i]._name}</td>`;
            table += `<td>${students[i]._grade}</td>`;
            table += `<td>${students[i]._phone}</td>`;
            table += `<td>${students[i]._address}</td>`;
            table += `<td>${students[i]._point}</td>`;
            table += `</tr>`;
        }
        document.getElementById('top-rank').innerHTML = table;
    }
    selectionSort(array) {
        let i, j, min_idx;
        for (i = 0; i < array.length - 1; i++) {
            min_idx = i;
            for (j = i + 1; j < array.length; j++)
                if (array[j]._point > array[min_idx]._point)
                    min_idx = j;
            let temp = array[min_idx];
            array[min_idx] = array[i];
            array[i] = temp;
        }
    }
    delete(index) {
        let students = JSON.parse(localStorage.getItem('student'));
        this.selectionSort(students);
        students.splice(index, 1);
        localStorage.setItem('student', JSON.stringify(students));
    }
    searchList(students) {
        let table = '';
        for (let i = 0; i < students.length; i++) {
            table += `<tr>`;
            table += `<td>${i + 1}</td>`;
            table += `<td>${students[i]._id}</td>`;
            table += `<td>${students[i]._name}</td>`;
            table += `<td>${students[i]._grade}</td>`;
            table += `<td>${students[i]._phone}</td>`;
            table += `<td>${students[i]._address}</td>`;
            table += `<td>${students[i]._point}</td>`;
            table += `<td><button type="button" value="${i}" class="btn btn-danger delete-student" >Delete</button></td>`;
            table += `<td><button type="button" value="${i}" class="btn btn-primary update-student" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Edit</button></td>`;
            table += `</tr>`;
        }
        document.getElementById('list-all').innerHTML = table;
    }
}
//# sourceMappingURL=StudentManager.js.map