var num1=20,num2=15,num3=18;
var res=(num1>num2 | num1>num3)&(num1<num2 | num1<num3)?num1:(num2>num1 | num2>num3)&(num2<num1 | num2<num3)?num2:num3;
console.log(res);
