//********************polymorphism************************/
//1.method overloading : same method name with different parameteres
//                     : last implemented method only works here 


class Calculation{
    add()
    {
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside single arg method");
    }
    add(num1,num2){
        console.log("inside the two arg method");
    }
}
var obj=new Calculation()
obj.add()
obj.add(10)
obj.add(10,10) // last implemented method only works here 
// output :inside the two arg method
//         inside the two arg method
//         inside the two arg method

