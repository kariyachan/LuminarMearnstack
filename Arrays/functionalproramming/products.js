var products=[
    ["001","complan",275,50],
["002","boost",255,20],
["003","horlicks",275,5],
["004","bournvita",230,0],
["005","pediasure",120,10]
]

//print product names
// console.log(products.map(pro=>pro[1]));

//print available product names
// console.log(products.filter(pro=>pro[3]!=0));

//print out of stock pro details
// console.log(products.filter(pro=>pro[3]==0));

//list all products whose price>250
// console.log(products.filter(pro=>pro[2]>250));


//low cost product  .............3......REDUCE().......................****************
//eg:
// var arr=[10,11,12,13,14,15,17,19]
// var sum=arr.reduce((num1,num2)=>num1+num2)
// console.log(sum);
// var min=arr.reduce((num1,num2)=>num1<num2?num1:num2)
// console.log(min);


//low cost:
// var low_cost=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_cost);


// console.log(products.filter((pro,pr)=>pro[2]<pr[2]));


//is there any item available under 200
// console.log(products.filter(pro=>pro[2]<200));
  //highest stock
//   var hstock=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2)
//   console.log(hstock);

  //..................4......FIND()...............................................***************
  //find complan 

  ///............difference b/w find and filter ...find returns first occurance of the item....filter returns all the ocurance of the item
//   console.log(products.find(item=>item[1]=="complan"));


  //..5.................SOME()..........................******************************************************************
  //returns a boolean value
  //any product price lessthan 100

//   console.log(products.some(item=>item[2]<100));
//   console.log(products.some(item=>item[2]>200));


  //............6...............ForEach()......................................************************************
//   products.forEach(item=>console.log(item[1]))
//   products.forEach(item=>console.log(item))

///........sorting
products.sort((item1,item2)=>item2[2]-item1[2]).forEach(item=>console.log(item))