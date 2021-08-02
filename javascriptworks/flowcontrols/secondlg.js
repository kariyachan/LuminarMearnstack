var num1=100,num2=30,num3=5;
var res=(num1>num2 | num1>num3)&(num1<num2 | num1<num3)?num1:(num2>num1 | num2>num3)&(num2<num1 | num2<num3)?num2:num3;
console.log(res);

