var num=10
let n1 = 0, n2 = 1, temp;

console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) 
{
    console.log(n1);
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
}