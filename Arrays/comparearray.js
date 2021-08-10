var arr1=[1,2,3,4,5],arr2=[6,3,2,1,5];
arr1.sort((num1,num2)=>num1-num2);//sorting in ascending order  (num2-num1)desending order num
console.log(arr1);
arr2.sort((num1,num2)=>num1-num2);
var flag=0;
let c=compare(arr1,arr2)
console.log(flag==arr1.length?"arrays are equal":"not equal");
// console.log(flag);
function compare(arr1,arr2)
{
if(arr1.length!=arr2.length)
{
    console.log("not equal");
}
else{
    for(let i=0;i<arr1.length;i++)
    {
        if(arr1[i]===arr2[i])
        {
            flag++;
        }
     
    }
}
}