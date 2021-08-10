var arr=[2,3,4,5,7,8,10,11];
var element=5,flag=0;
let low=0,upp=arr.length-1;
while(low<=upp)
{
    let mid=Math.floor((low+upp)/2);
    if(element<arr[mid])
    {
        upp=mid-1;
    }
    else if(element>arr[mid])
    {
        low=mid+1
    }
    else if(element==arr[mid])
    {
        // console.log("element found");
        flag+=1;
        break;
    }
  
}
console.log(flag==0?"element not found":"element found");