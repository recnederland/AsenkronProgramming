const person = {
    age: 25,

    tellAge: function(){
        // this = person
        console.log(this);      // {age: 25, tellAge: ƒ}
        console.log(this.age);  // 25
    }.bind(this), // undefined

    // arrow function
    tellAge2: () => {
        console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}
        console.log(this.age); // undefined
    }
    // arrow functionlarda this sanki bind ile baglanmis gibi hareket eder
}
person.tellAge();


