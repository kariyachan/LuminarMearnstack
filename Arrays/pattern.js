var arr=[2,4,6]//10,8,6 o/p.......array total 12(2+4+6)... 12-2=10,  12-4=8,  12-6=6
var total=0;
for(let num of arr){

    total+=num;

}
for(let num of arr)
{
    console.log(total-num);
}