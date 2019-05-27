import {Animal, Dog, ShibaInu} from "./Animals"
import {dzialania} from "./Dzialania"
import {User, naszaFunkcja} from "./interfejsy"

var liczby = new dzialania(3,5)
console.log(liczby.mnozenie()); 

const pies2 = new ShibaInu ("Nakamura")
const pies = new Dog("Reksio");
const animals:Array<Animal> = [pies,pies2];
for (const animal of animals){
    animal.getVoice();
    animal.eat();
}
//animals[0].getVoice();

const user = new User();
naszaFunkcja(user);
console.log(user.toJson());