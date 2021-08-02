// function add(num1,num2){
//     let res=num1+num2;
//     return res
// }
// console.log(add(12,34));
// //to find cube
// function cubenum(num)
// {
//     return num**3
// }
// console.log(cubenum(10));
// //to find square
// function sqr(num3)
// {
//     return num3**2
    
// }
// console.log(sqr(5));

// //factioral of a number using reccursion
// function factorial(num){
//     if(num==0 | num==1){
       
//         return 1;
//     }
//    return num*factorial(num-1)
  
    
    
// }
// console.log(factorial(4));


//...thered operator lets to define n number of parameters
function add(...args){
    console.log(args);
}
add(20,4,5,6,7,8)