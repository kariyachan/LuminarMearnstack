var num1=36,num2=96,gcd=0;
for(let i=1;i<=num1 & i<=num2;i++)
{
    if(num1%i==0 & num2%i==0)
    {
        gcd=i;
    }
}
console.log(gcd);