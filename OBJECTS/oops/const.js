//************************constructor*********************
//initialze instance variables
//

class Person{
    constructor(age,name){
        this.age=age
        this.name=name
    }
    printPerson()
    {
        console.log(this.age,this.name);
    }
}

var person=new Person(25,"ram")
person.printPerson()