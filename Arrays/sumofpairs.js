// var arr=[2,3,4,6,7]
// var sum=7;
// for(let i=0;i<=arr.length;i++)
// {
//     for(let j=i+1;j<=arr.length;j++)
//     {
//         if(arr[i]+arr[j]==sum)
//         {
//             console.log("(",arr[i],",",arr[j],")");
//             break;
//         }
//     }
// }


//another method for sorted arrays
var arr=[2,3,4,6,7]
var lower=0,upp=arr.length-1;
var sum=7;
while(lower<upp)
{
    let total=arr[lower]+arr[upp];
    if(total==sum)
    {
        console.log(arr[lower],arr[upp]);
        break;
    }
    else if(total>sum)
    {
        upp--
    }
    else{
        lower++
    }
}
