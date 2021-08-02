
function findmissing(arr,n)
{
    var size=n+1;
    var total=size*(size+1)/2;
    // console.log(total);
    var sum=0;
    for(let i=0;i<n;i++)
    {
        sum+=arr[i]
       
    }
    // console.log(sum);
   return total-sum;
    
}
var arr=[1,2,3,4,5,6,7,9,10,11,12];
var n=arr.length;
console.log("missing element is",findmissing(arr,n));
