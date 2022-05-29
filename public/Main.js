import { StudentManager } from "./StudentManager.js";
let manager = new StudentManager();
manager.showListTop3();
document.getElementById('btn-show').addEventListener('click', function () {
    manager.showList();
});
//# sourceMappingURL=Main.js.map