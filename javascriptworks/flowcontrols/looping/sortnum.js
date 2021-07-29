var num1=10,num2=18,num3=9;
var b=0;
var a=Math.max(num1,num2,num3);
var res=(num1>num2 | num1>num3)&(num1<num2 | num1<num3)?b=num1:(num2>num1 | num2>num3)&(num2<num1 | num2<num3)?b=num2:b=num3;
var c=Math.min(num1,num2,num3)
console.log("sorted nos: ",c,b,a);
