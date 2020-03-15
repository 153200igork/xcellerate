//Older Ans
function Person(name, age){
    this.name = name;
    this.age = age;

}

Person.prototype.hello = function(){
  console.log('hello my name is ' + this.name)
}

var Person1 = new ('Hendrick', '18');
console.log(person1);


//ES6
class Person{
    constructor(options){
      this.name = options.name;
      this.age = options.age
      
    }
    sayHi(){
        console.log(`${this.name} says hello!`)
    }
  
    introduce(){
        console.log(`Welcome,mynameis${this.name},Iam${this.age}yearsold$`)
    }
  }
  
  var Person1 = new Person({name:'Jonathan', age:18})
  console.log(person1.introduce())