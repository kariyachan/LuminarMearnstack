//********************Overriding */
class Parent{
    phone(){
        console.log("samsung galaxy a71");
    }
}

class Child extends Parent{
    phone(){
        super.phone()//invoking parent class method phone
        console.log("iphone 12pro max");
    }

}
var child=new Child()
child.phone()