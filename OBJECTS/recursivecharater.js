var pattern="ABABCC"
//find first reccursive characer
var count={}
for(let char of pattern){
    if(!char in count)
    {
        count[char]=1
    }
    else
    {
        console.log(char);
        break
    }
}

