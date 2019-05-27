"use strict";
exports.__esModule = true;
var Animals_1 = require("./Animals");
var Dzialania_1 = require("./Dzialania");
var interfejsy_1 = require("./interfejsy");
var liczby = new Dzialania_1.dzialania(3, 5);
console.log(liczby.mnozenie());
var pies2 = new Animals_1.ShibaInu("Nakamura");
var pies = new Animals_1.Dog("Reksio");
var animals = [pies, pies2];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    animal.getVoice();
    animal.eat();
}
//animals[0].getVoice();
var user = new interfejsy_1.User();
interfejsy_1.naszaFunkcja(user);
console.log(user.toJson());
//# sourceMappingURL=app.js.map