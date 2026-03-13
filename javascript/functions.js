const person={
    name:"Afreen",
    age:20,
    greet:function(){
        return `Hello,my name is ${this.name}`;
    }

}
console.log(person.name);
console.log(person.age);
console.log(person.greet());
