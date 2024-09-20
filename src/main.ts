type Student = { //mit "export type" kann man Objekt in anderer Datei anlegen
    id: string,
    name: string,
    age: number,
    calc: (a: number, b: number) => number
    sayHello: () => void
}

const student1:Student = {
    id: "1",
    name: "John",
    age: 25,
    calc: (a: number, b: number) => a+b, //Methode wird tatsächlich erst hier festgelegt
    sayHello: () => console.log("Hello")
}

student1.sayHello()
console.log(student1.calc(10,3))

type Person ={
    socialSecNum: String
    student: Student
}



interface StudentInterface {
    id: string,
    name: string,
    age: number
}



type Geschlecht = "männlich" | "weiblich" | "Taucher" //type kann ähnlich wie ein ENUM konkret definieren und lässt keine anderen Werte zu

const gs:Geschlecht = "männlich"

interface StudentInterface{
    phone: string
}

const Student2: StudentInterface = {
    id: "1",
    name: "John",
    age: 25,
    phone: "13241324"
}

console.log(student1)