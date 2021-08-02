var num=4;
for(let i=1;i<=num;i++)
{
    let str="";
    for(var row=i;row<=num;row++)
    {
        str+="  "
        // console.log(str);
    }
  for(row=1;row<=((2*i)-1);row++)
  {
    if(i==num | row==1 | row==((2*i)-1))
    {
        str+=" *"
        // console.log(str);
    }
    else{
        str+="  "
        // console.log(str);
    }

  }
  console.log(str);

}
