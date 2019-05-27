"use strict";
exports.__esModule = true;
var dzialania = /** @class */ (function () {
    function dzialania(jeden, dwa) {
        this.pierwsza = jeden;
        this.druga = dwa;
    }
    dzialania.prototype.mnozenie = function () {
        var wynik = (this.pierwsza * this.druga);
        return "Witam wynik to " + wynik + "!";
    };
    return dzialania;
}());
exports.dzialania = dzialania;
//# sourceMappingURL=Dzialania.js.map