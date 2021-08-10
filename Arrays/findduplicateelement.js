var arr1=[10,32,11,15,18,20];
var arr2=[9,10,12,15,18,20,32];
// for(let i=0;i<arr1.length;i++)
// {
//     for(let j=0;j<arr2.length;j++)
//     {
//         if(arr1[i]==arr2[j])
//         {
//             console.log(arr1[i]);
//         }
//     }
// }

//another method........................................................
arr1.sort();
arr2.sort();
// console.log(arr1);
var i=0,j=0;
while(i<arr1.length & j<arr2.length)
{
    if(arr1[i]==arr2[j])
    {
        console.log(arr1[i]);
        i++;
        j++;
    }
    else if(arr1[i]<arr2[j])
    {
        i++;

    }
    else{
        j++
    }
}