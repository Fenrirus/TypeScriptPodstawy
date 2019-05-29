import { Serializable, Drawable, User } from "./interfejsy";
import { Dog, Horse, Animal } from "./Animals";

//union type
function formatDate(date:number|Date)
{
    if (typeof date === "number")
    {
        date = new Date(date);
    }
}

//intersection type
function mojaFunkcja(obiekt: Serializable & Drawable)
{

}

//aliasy typów
type ProcessFlag = boolean;
class Process
{
    flag: ProcessFlag;
}
``
//aliasy funkcji
type UserCallback = (user:User) => boolean;

function fetchUser(callBack:UserCallback){}

function fetchUserCallback(user:User)
{
if (user.name === `Michał`)
{
    return true
}
return false;
}

fetchUser(fetchUserCallback);

//String Literal Type
type GoupBy = `second`|`minute`|`hour`|'day';

function groupRecords (groupBy:GoupBy)
{
//jakis kod
}

//Inferencja typów

function fn(b:boolean)
{
    if (b === true)
    {
        return 1;
    }
    else
    {
        return 2;
    }
}
//const liczba:number = fn(true);
const liczba = fn(true)

function fn2(b:Boolean):string|number
{
    if (b === true)
    {
        return 1;
    }
    else
    {
        return `lol`;
    }
}

const tab1 = [0,1,`lel`];
const tab2 = [0,null];
const tab3 = [new Dog(`Leszek`), new Horse(`Rafal`)]
const tab4 :Array<Animal> = [new Dog(`Leszek`), new Horse(`Rafal`)]
