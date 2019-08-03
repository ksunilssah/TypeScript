//class
class Person {
    public name: string;  //default is public
    private type: number;
    protected age: number;

    constructor(name: string, public username: string ){
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }

    setType(age: number) {
        this.age = age
    }

}

let person = new Person('Sunil', 'ksunilssah');
console.log(person.name, person.username);

person.setType(22);
person.printAge();

//Inheritance
class PersonExtended extends Person {
   // name = 'Max'
    //type = 20; //Can't to access as its privte in Person class
    age: 30;

    constructor(username: string){
        super("Max", username);
    }
}

let personextended = new PersonExtended('Sunil');
console.log(personextended.name)


//Getters and Setters
class Plant {
    private species: string = "default";

    set Species(name: string){
        if(name.length > 3){
            this.species = name;
        }
    }

    get Species() {
        return this.species;
    }
}

let plant = new Plant();
plant.Species = 'test stes';
console.log(plant.Species);