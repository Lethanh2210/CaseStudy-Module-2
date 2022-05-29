export class Student {
    constructor(id, name, grade, phone, address, point) {
        this._id = id;
        this._name = name;
        this._grade = grade;
        this._phone = phone;
        this._address = address;
        this._point = point;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get grade() {
        return this._grade;
    }
    set grade(value) {
        this._grade = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get point() {
        return this._point;
    }
    set point(value) {
        this._point = value;
    }
}
//# sourceMappingURL=Student.js.map