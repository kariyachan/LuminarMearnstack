//{key:value,key1:value1}
var employee={
    eid:1001,
    e_name:"ram",
    desig:"developer",
    salary:5000
}
// console.log(employee.e_name);
// console.log(employee.salary);


// employee.exp=2;
// console.log(employee);

// employee.salary+=2000;
// console.log();
//"exp" in employee ?employee.exp+=1:employee.exp=1
for(let key in employee){
    console.log(key);
    console.log(employee[key]);
}
//check gender field is present or not
if("exp" in employee)
{
    employee["exp"]+=1
}