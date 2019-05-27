"use strict";
exports.__esModule = true;
function naszaFunkcja(obiekt) {
    obiekt.toJson();
}
exports.naszaFunkcja = naszaFunkcja;
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.draw = function (ctx) {
        // ctx.drawImage(...):
    };
    User.prototype.toJson = function () {
        return "Obiekt Json";
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=interfejsy.js.map