var num=2,low=8,upp=28;
var i=0;
while(i<=upp/2){
    var res=i**num
    if(res>=low & res<=upp)
    {
        console.log(i);
    }
    i++
}