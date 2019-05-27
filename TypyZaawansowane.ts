import { Serializable, Drawable } from "./interfejsy";

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