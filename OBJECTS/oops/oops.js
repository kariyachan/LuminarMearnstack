//class
class Person{
    setPerson(age,name){
        this.age=age;
        this.name=name;
    }
    printPerson()
    {
        console.log(this.name,this.age);
    }
}
var obj=new Person();
obj.setPerson(18,"ram");
obj.printPerson();