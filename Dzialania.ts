export class dzialania
{
    pierwsza : number;
    druga : number;

    constructor(jeden: number, dwa: number)
    {
        this.pierwsza = jeden;
        this.druga = dwa;
    }
    mnozenie(): string
    {
        var wynik = (this.pierwsza * this.druga);
        return `Witam wynik to ${wynik}!`;
    }
}