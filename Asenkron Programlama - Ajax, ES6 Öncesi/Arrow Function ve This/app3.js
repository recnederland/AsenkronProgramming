const person = {
    age: 25,
    tellAge: function(){
        // this = person
        console.log(this);      // {age: 25, tellAge: ƒ}
        console.log(this.age);  // 25
    }.bind(this) // undefined
    
}
person.tellAge();
