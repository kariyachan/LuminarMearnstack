var num=123;
var sum=0;
while(num!=0)
{
    sum+=Math.floor(num%10);
    num=num/10;
}
console.log(sum);