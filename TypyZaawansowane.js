"use strict";
exports.__esModule = true;
var Animals_1 = require("./Animals");
//union type
function formatDate(date) {
    if (typeof date === "number") {
        date = new Date(date);
    }
}
//intersection type
function mojaFunkcja(obiekt) {
}
var Process = /** @class */ (function () {
    function Process() {
    }
    return Process;
}());
"";
function fetchUser(callBack) { }
function fetchUserCallback(user) {
    if (user.name === "Micha\u0142") {
        return true;
    }
    return false;
}
fetchUser(fetchUserCallback);
function groupRecords(groupBy) {
    //jakis kod
}
//Inferencja typów
function fn(b) {
    if (b === true) {
        return 1;
    }
    else {
        return 2;
    }
}
//const liczba:number = fn(true);
var liczba = fn(true);
function fn2(b) {
    if (b === true) {
        return 1;
    }
    else {
        return "lol";
    }
}
var tab1 = [0, 1, "lel"];
var tab2 = [0, null];
var tab3 = [new Animals_1.Dog("Leszek"), new Animals_1.Horse("Rafal")];
var tab4 = [new Animals_1.Dog("Leszek"), new Animals_1.Horse("Rafal")];
//# sourceMappingURL=TypyZaawansowane.js.map