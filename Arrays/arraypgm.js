var expenses=[3200,3000,45000,55000]
console.log(expenses);

//displaying method1
for(let i=0;i<expenses.length;i++)
{
    console.log(expenses[i]);
}
//method 2

for(let amount of expenses){
    console.log(amount);
}