export abstract class Animal
{
constructor(protected name: string){}
getVoice()
{
    console.log(`Nazywam sie ${this.name}`);
}
abstract eat():void;
}

export class Dog extends Animal
{
constructor(protected name: string)
{
    super(name);
}
getVoice(){
    console.log(`hau hau`);
    super.getVoice();
}
eat(){
    console.log(`Mniam`)
}
}

export class Horse extends Animal{
    eat(): void {
        console.log(`Jem owies`);
    }
    constructor(protected name: string){
        super(name);
    }
    getVoice(){
        console.log(`Patataj`);
        super.getVoice();
}
}

export class ShibaInu extends Dog{
    constructor(protected name: string){
        super(name);
    }
    getVoice(){
        console.log(`jestem z Japoni`);
        super.getVoice();

}
}