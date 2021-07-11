const hello = "world";

let helloChangeable : string = "world";
helloChangeable = "I can change this var";

const getFullName = (name: string, surname: string) : string =>{
    return name + " "+ surname;
};
console.log(getFullName("Monster", "lession"));


interface UserInterface {
    name:string;
    age?:number; // ? === make property optional
    getMessage(): string
}

// difference between typescript interfaces and classes?
// why is this considered functional if we are using interfaces 
const user: UserInterface ={
    name: "Monster",
    age: 30,
    getMessage(){
        return "Hello "+ name; 
    }
}

const user2: UserInterface = {
    name:"Jack",
    getMessage(){
        return "Hello "+ name; 
    }
}


let username: string = "alex";

let pageName: string | number = 1;

let errorMessage : string | null = null; // if we leave empty space instead of null, it is considered undefined

interface FetchedUserInterface {
    name : string,
    surname : string
}

let fetchedUser : FetchedUserInterface | null = null;
// bad union example
let someProp: string | number | null | undefined | string[] | object

// type aliasing, it is more readable
type ID = string;
type PopularTag = string;

const popularTags: PopularTag[] = ["dragon", "coffee"];
// maybe === because maybe it doesn't exist
type MaybePopularTag = PopularTag | null; 
const dragonsTag : MaybePopularTag[] = ["dragon"];

// when we don't return anything we use void
// voind === null | undefined
const doSomething = () :void =>{
    console.log("Do something");
};

// any type === any returns anything
 const foo : any = "can be function or string or something else";

 // never type === fn can't be executed to the end = code shouldn't end
const doNever = (): never =>{
    throw "never"
}

// unknown type = because we don't know its type we can't reassign it to some known variables
let vAny : any = 10;
let vUnknown : unknown = 10;
let s1 : string = vAny;
// let s2: string = vUnknown; // this throws error; to make it work we use type assertion
let s2: string = vUnknown as string;

/*
type assertion 
the act of converting one type into another
*/
 let pageNumber: string ="1";
 // we convert to unkown first because direct convertion of known type isn't allowed
 let numericPageNumber : number =(pageName as unknown) as number;

 // DOM Manipulations
//  Element === generic super class, it is the highest class in hierarchy
const someElement = document.querySelector(".foo") as HTMLInputElement;
console.log("input html", someElement.value);

// addEventListener
// Event === generic super class, it is the highest class in hierarchy
const listenerElement = document.querySelector(".foo")
someElement.addEventListener("blur", (event)=>{
    const target = event.target as HTMLInputElement; // we need to specify element type so we can access value
    console.log("event", target.value);
})

/* CLASSES */
interface CarInterface{ // abstract plan
    getCarInfo(): string;
    }
    
class Car implements CarInterface { // blueprint
    private name: string
    private model: string
    readonly unchangableName : string
    static readonly maxAge : 30

    constructor(name: string, model: string){
        this.name = name;
        this.model = model;
        this.unchangableName = name;
    }

    // changeUnchangableName(): void {
    //     this.unchangableName = "foo"
    // }

    getCarInfo():string{
        return this.name+  " "+this.model;
    }
}

const panda = new Car("Fiat", "Panda");

// class' methods and properties can be
// private - public - protected - readonly
// private == = only used inside class
// public === can be accessed outside class
//protected === can be used only inside the class or inside children class
// readonly === can't be reassigned like a const
// static  === access only inside class

// what is the difference of static and private?

/* Inheritance */
class myCar extends Car{
    private wheelColour : string

    setWheelColour(wheelColour:string) : void {
        this.wheelColour = wheelColour
    }

    getWheelColour(): string {
        return this.wheelColour
    }
}

// Generics
// they allow us to provide different datatypes without creating a lot of different interfaces
// T is default name for a generic data type
// <T> val: T
// extends === set default generic type
const addId = <T extends object>(obj: T) =>{ 
    const id = 3;
    return {
        ...obj,
        id
    }
}

interface PersonInterface {
    name: string
}
const person : PersonInterface = {
    name: "Jack"
}
// we pass a generic person with interface as personInterface
// explicitly say what type you are calling inside func
const result = addId<PersonInterface>(person)

// we can use Generics with interfaces too
interface BallInterface<T, V>{
    name: string
    data: T
    meta: V
}

// we must provide generic type if there is no default
const ball: BallInterface<{meta: string}, string> = {
    name: "Tennis",
    data:{meta: "for playing"},
    meta: "Mario"
}

const heavyBall : BallInterface<string[], string> ={
    name: "MedicalBall",
    data: ["4kg", "5kg", "10kg"],
    meta: "Luigi"
}

const tennisBall = addId(ball);
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

enum StatusEnum {
    NotStarted ="notStarted",
    InProgress = "inProgress",
    Done = "done"
}

const notStartedStatus : StatusEnum = StatusEnum.NotStarted;

// we can only assign values which are inside the enum obj
// example
let inProgressStatus : StatusEnum = StatusEnum.InProgress;
inProgressStatus = StatusEnum.Done;

// we can use enum in interfaces too
// it good for constant vars
interface Task {
    id: string,
    status: StatusEnum
}