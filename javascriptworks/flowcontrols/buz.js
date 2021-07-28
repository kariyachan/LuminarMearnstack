var num=3
//method1

// if(num%15===0)
// {
//     console.log("FIZZ BUZZ");
// }
// else if(num%3===0)
// {
//     console.log("FIZZ");
// }
// else if(num%5===0)
// {
//     console.log("BUZZ");
// }

// else
// {
//     console.log("Better luck next time");
// }

//method 2

// var res="";
// if(num%3==0){
//     res+="Fizz"
// }
// if(num%5==0){
//     res+="Buzz"
// }
// console.log(result);

//method3
//using ternary
var data=num%15==0?"fizzbuzz":num%3==0?"fizz":num%5==0?"buzz":"else"
console.log(data);