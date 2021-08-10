var text="hello hai hello hai hello"
//hello=3
//hai=2
// var words=text.split(" ")//words retrun in array=["hello","hai","hello","hai","hello"]
var word_count={}//empty object
// for(let word of words)
// {
//     if(word in word_count){
//         word_count[word]+=1

//     }
//     else{
//         word_count[word]=1
//     }
// }
// console.log(word_count);
text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1)
console.log(word_count);
