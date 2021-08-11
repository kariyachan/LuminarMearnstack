//*******************inheritance */
//extends is used to implement inheritance 
// class Parent{
//     phone()
//     {
//         console.log("inside parent class phone method");
//     }
// }
// //single inheritance
// class Child extends Parent{

// }
// var child=new Child();
// child.phone()

//***********multilevel inheritance */
class Parent{
    m1(){
        console.log("inside parent m1()");
    }
}

class SubChild extends Parent{
    m2(){
        console.log("inside parent m2()");
    }
}

class Child extends SubChild{
    m3(){
        console.log("inside parent m3()");
    }
}

var child=new Child()
child.m3()
child.m2()
child.m1()
//*********************************************** */
var subchild=new SubChild();
subchild.m2()
subchild.m1()