var employees=[
    [1000,"ram",2,25000,"developer"],
    [1001,"ravi",1,22000,"developer"],
    [1002,"raju",3,27000,"qa"],
    [1003,"nikhil",1,22000,"qa"]
]
//***map()***-print emp names
// console.log(employees.map(emp=>emp[1]));
//**designations
// console.log(employees.map(emp=>emp[4]));
//**details of developers
// console.log(employees.filter(emp=>emp[4]=="developer"));
//**saraly >23000
// console.log(employees.filter(emp=>emp[3]>23000));
//** print all epmloyees whose salary >23000 and designation="developer" */
// console.log(employees.filter(emp=>emp[3]>23000 & emp[4]=="developer").map(emp=>emp[1]));


// for(let employee of employees )
// {
//     console.log(employee[1]);
//     console.log(employee[4]);
// }
//..................employees names whoes salary greater than 23000............................
// for(let employee of employees )
// {
//    if(employee[3]>23000)
//    {
//        console.log(employee[1]);
//    }
// }
//.............highest paid employee........
// var max_sal=0;
// for(let emp of employees)
// {
//     if(emp[3]>max_sal){
//         max_sal=emp[3];
//     }
// }
// console.log(max_sal);
// for(let emp of employees)
// {
//     if(emp[3]==max_sal)
//     {
//         console.log(emp);
//     }
// }
var min_sal=0;
for(let emp of employees)
{
    for(let ep of employees)
    {

        if(emp[3]<ep[3]){
            min_sal=emp[3];
        }
    }
   
}
console.log(min_sal);