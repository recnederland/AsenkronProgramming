
const person = {
    age: 25,
    tellAge: function(){
        // this = person
        console.log(this);      // {age: 25, tellAge: ƒ}
        console.log(this.age);  // 25
    },
    // this = window obje
    windowObject: console.log(this) // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
    
}
person.tellAge();

