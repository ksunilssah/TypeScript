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
//class
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (age) {
        this.age = age;
    };
    return Person;
}());
var person = new Person('Sunil', 'ksunilssah');
console.log(person.name, person.username);
person.setType(22);
person.printAge();
//Inheritance
var PersonExtended = /** @class */ (function (_super) {
    __extends(PersonExtended, _super);
    function PersonExtended(username) {
        return _super.call(this, "Max", username) || this;
    }
    return PersonExtended;
}(Person));
var personextended = new PersonExtended('Sunil');
console.log(personextended.name);
//Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this.species = "default";
    }
    Object.defineProperty(Plant.prototype, "Species", {
        get: function () {
            return this.species;
        },
        set: function (name) {
            if (name.length > 3) {
                this.species = name;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.Species = 'test stes';
console.log(plant.Species);
//# sourceMappingURL=script.js.map