export class Student{
    private _id: number;
    private _name: string;
    private _grade: string;
    private _phone: string;
    private _address: string;
    private _point: number;


    constructor(id: number, name: string, grade: string, phone: string, address: string, point: number) {
        this._id = id;
        this._name = name;
        this._grade = grade;
        this._phone = phone;
        this._address = address;
        this._point = point;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get grade(): string {
        return this._grade;
    }

    set grade(value: string) {
        this._grade = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get point(): number {
        return this._point;
    }

    set point(value: number) {
        this._point = value;
    }
}