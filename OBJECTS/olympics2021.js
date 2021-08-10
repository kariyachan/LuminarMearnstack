var olympics=[
    {country:"china",gold:34,silver:24,bronze:16,total:74},
    {country:"us",gold:30,silver:35,bronze:27,total:92},
    {country:"japan",gold:22,silver:10,bronze:15,total:47},
    {country:"aus",gold:17,silver:6,bronze:20,total:43},
    {country:"india",gold:0,silver:2,bronze:3,total:5},
    {country:"germany",gold:9,silver:10,bronze:16,total:25},



]
//*****print countrynames participating 2021 olympics

    // console.log(olympics.map(item=>item.country));


//******which country got most goldmedeals
// var most_gold=olympics.reduce((item1,item2)=>item1.gold>item2.gold?item1:item2)
// console.log(most_gold);

//******which country got most medeals
// var most_medeals=olympics.reduce((item1,item2)=>item1.total>item2.total?item1:item2)
// console.log(most_medeals);
//*******sort countrys based on gold medeals
// var sort_gold=olympics.sort((item1,item2)=>item1.gold-item2.gold)
// console.log(sort_gold);

//******sort countrys based on total medeals
// var sort_medeals=olympics.sort((item1,item2)=>item1.total-item2.total)
// console.log(sort_medeals);

//******countrys got silver>10
// console.log(olympics.filter(item=>item.silver>10));

//list of countries whoes goldmedeal=0
// console.log(olympics.filter(item=>item.gold==0));

//*******list the country names whoes gold medeal > 20
// console.log(olympics.filter(item=>item.gold>20));

//*******is pakisthan participating in olympics2021
console.log(olympics.some(item=>item.country=="pakisthan"));