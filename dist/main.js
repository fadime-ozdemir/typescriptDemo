var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hello = "world";
var helloChangeable = "world";
helloChangeable = "I can change this var";
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Monster", "lession"));
// difference between typescript interfaces and classes?
// why is this considered functional if we are using interfaces 
var user = {
    name: "Monster",
    age: 30,
    getMessage: function () {
        return "Hello " + name;
    }
};
var user2 = {
    name: "Jack",
    getMessage: function () {
        return "Hello " + name;
    }
};
var username = "alex";
var pageName = 1;
var errorMessage = null; // if we leave empty space instead of null, it is considered undefined
var fetchedUser = null;
// bad union example
var someProp;
var popularTags = ["dragon", "coffee"];
var dragonsTag = ["dragon"];
// when we don't return anything we use void
// voind === null | undefined
var doSomething = function () {
    console.log("Do something");
};
// any type === any returns anything
var foo = "can be function or string or something else";
// never type === fn can't be executed to the end = code shouldn't end
var doNever = function () {
    throw "never";
};
// unknown type = because we don't know its type we can't reassign it to some known variables
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
// let s2: string = vUnknown; // this throws error; to make it work we use type assertion
var s2 = vUnknown;
/*
type assertion
the act of converting one type into another
*/
var pageNumber = "1";
// we convert to unkown first because direct convertion of known type isn't allowed
var numericPageNumber = pageName;
// DOM Manipulations
//  Element === generic super class, it is the highest class in hierarchy
var someElement = document.querySelector(".foo");
console.log("input html", someElement.value);
// addEventListener
// Event === generic super class, it is the highest class in hierarchy
var listenerElement = document.querySelector(".foo");
someElement.addEventListener("blur", function (event) {
    var target = event.target; // we need to specify element type so we can access value
    console.log("event", target.value);
});
var Car = /** @class */ (function () {
    function Car(name, model) {
        this.name = name;
        this.model = model;
        this.unchangableName = name;
    }
    // changeUnchangableName(): void {
    //     this.unchangableName = "foo"
    // }
    Car.prototype.getCarInfo = function () {
        return this.name + " " + this.model;
    };
    return Car;
}());
var panda = new Car("Fiat", "Panda");
// class' methods and properties can be
// private - public - protected - readonly
// private == = only used inside class
// public === can be accessed outside class
//protected === can be used only inside the class or inside children class
// readonly === can't be reassigned like a const
// static  === access only inside class
// what is the difference of static and private?
/* Inheritance */
var myCar = /** @class */ (function (_super) {
    __extends(myCar, _super);
    function myCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myCar.prototype.setWheelColour = function (wheelColour) {
        this.wheelColour = wheelColour;
    };
    myCar.prototype.getWheelColour = function () {
        return this.wheelColour;
    };
    return myCar;
}(Car));
// Generics
// they allow us to provide different datatypes without creating a lot of different interfaces
// T is default name for a generic data type
// <T> val: T
// extends === set default generic type
var addId = function (obj) {
    var id = 3;
    return __assign(__assign({}, obj), { id: id });
};
var person = {
    name: "Jack"
};
// we pass a generic person with interface as personInterface
// explicitly say what type you are calling inside func
var result = addId(person);
// we must provide generic type if there is no default
var ball = {
    name: "Tennis",
    data: { meta: "for playing" },
    meta: "Mario"
};
var heavyBall = {
    name: "MedicalBall",
    data: ["4kg", "5kg", "10kg"],
    meta: "Luigi"
};
var tennisBall = addId(ball);
console.log("result tennis ball", tennisBall);
// difference between T and any??
// ENUM
// obj which values start form zero but you don't need to set explicitly the numbers
// to change default num to string we reassign values with  EQUAL sign =
// ex statuses obj === Status enum
// we can use enum as a value and a data type, therefore we can only assign values which are inside the enum obj
// const statuses ={
//     notStarted : 0,
//     inProgress: 1,
//     done: 2
// }
// console.log(statuses.inProgress);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NotStarted"] = "notStarted";
    StatusEnum["InProgress"] = "inProgress";
    StatusEnum["Done"] = "done";
})(StatusEnum || (StatusEnum = {}));
var notStartedStatus = StatusEnum.NotStarted;
// we can only assign values which are inside the enum obj
// example
var inProgressStatus = StatusEnum.InProgress;
inProgressStatus = StatusEnum.Done;
