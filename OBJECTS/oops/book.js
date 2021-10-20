class BookLibrary{
        books = {
          "randamoozham": { book_name: "randamoozham", price: 470, author: "mt vasudhevan", avl_copies: 100, sold_copies: 100 },        
          "aadujeevitha": { book_name: "aadujeevitham", price: 500, author: "benyamin", avl_copies: 150, sold_copies: 145 },      
          "rainrising": { book_name: "rainrising", price: 500, author: "nirupama", avl_copies: 200, sold_copies: 140 },        
           "halfgirlfirend": { book_name: "halfgirlfriend", price: 550, author:"chethan bagath", avl_copies: 150, sold_copies: 140 },        }
        findBook(book_name){
        if(book_name in this.books){
        console.log(this.books[book_name]);
        }
        else{
            console.log("cannot find the books name");
        }

        }   
     orderBySold(){
          Object.entries(this.books).sort((book1,book2)=>book1[1].sold_copies-book2[1].sold_copies).forEach(data=>console.log(data))
         
   
      //  arr[3].sort((s1,s2)=>s1.sold_copies-s2.sold_copies)
      //  console.log(arr);
      //  arr.sort((s1,s1=>s1[5]-s2[5]))


     }
}
var obj=new BookLibrary()
// obj.findBook("rainrising")
obj.orderBySold()