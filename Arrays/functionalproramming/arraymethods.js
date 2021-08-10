//1. map()
var arr1=[2,3,4,5,6]
//square
// console.log(arr1.map((num)=>num**2));

//convert to uppercase
// var names=["ram","ravi","arun"]
// console.log(names.map(name=>name.toUpperCase()));

//var nums=[2,3,4,6,7,8]//[1,2,3,7,8,9] num<5 num-1 num>5 num+1
var nums=[2,3,4,6,7,8]
// console.log(nums.map(num=>num>5?num+1:num-1));


//2. Filtter()
var arr=[10,11,12,13,14,15,17,19]//display even numbers
// console.log(arr.filter(num=>num%2==0));

//print names starting with r
var names=["ram","ravi","arun"]
console.log(names.filter(name=>name[0]=="r"));
