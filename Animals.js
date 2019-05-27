"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.getVoice = function () {
        console.log("Nazywam sie " + this.name);
    };
    return Animal;
}());
exports.Animal = Animal;
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Dog.prototype.getVoice = function () {
        console.log("hau hau");
        _super.prototype.getVoice.call(this);
    };
    Dog.prototype.eat = function () {
        console.log("Mniam");
    };
    return Dog;
}(Animal));
exports.Dog = Dog;
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Horse.prototype.eat = function () {
        console.log("Jem owies");
    };
    Horse.prototype.getVoice = function () {
        console.log("Patataj");
        _super.prototype.getVoice.call(this);
    };
    return Horse;
}(Animal));
exports.Horse = Horse;
var ShibaInu = /** @class */ (function (_super) {
    __extends(ShibaInu, _super);
    function ShibaInu(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    ShibaInu.prototype.getVoice = function () {
        console.log("jestem z Japoni");
        _super.prototype.getVoice.call(this);
    };
    return ShibaInu;
}(Dog));
exports.ShibaInu = ShibaInu;
//# sourceMappingURL=Animals.js.map