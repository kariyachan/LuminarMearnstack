var datas=[
    {acno:1000,ac_type:"saving",balance:5000,transaction:[
        {to:1000,amount:550,note:"food"},
        {to:1003,amount:900,note:"travel"},
        {to:1002,amount:650,note:"ball"},
    ]},
    {acno:1002,ac_type:"saving",balance:6000,transaction:[
        {to:1000,amount:600,note:"clothing"},
        {to:1003,amount:800,note:"travel"},
        {to:1002,amount:6700,note:"cycle"},
    ]},
    {acno:1003,ac_type:"saving",balance:8000,transaction:[
        {to:1001,amount:600,note:"clothing"},
        {to:1003,amount:800,note:"travel"},
        {to:1000,amount:6700,note:"cycle"},
    ]},
  ]
  //****************************ch for 1005 account
//   console.log(datas.some(account=>account.acno==1005));
// console.log(datas.reduce((acc1,acc2)=>acc1.balance>acc2.balance?acc1.balance:acc2.balance))
// datas.sort((acc1,acc2)=>acc2.balance-acc1.balance).forEach(acc=>console.log(acc))

//*************************debit transactions of acc1000
// datas.filter(acc=>acc.acno==1000).forEach(acc=>console.log(acc.transaction));

//**************************credit transaction of acno=1000 */
// var f=datas.map(acc=>acc.transaction);
// console.log(f.forEach(cr=>cr.to==1000));
// datas.map(acc=>acc.transaction).filter(acc=>acc.forEach(cr=>cr.to==1000?console.log(cr):" "))
var payment_history=[]
var credit_trans=datas.map(account=>account.transaction).forEach(transaction=>{
    transaction.forEach(trans=>{
        trans.to==1000?payment_history.push(trans):""
    })
})
datas.filter(account=>account.acno==1000).map(account=>payment_history.push(account.transaction))
console.log(payment_history);
//*****************************************payment history of 1001******************************
// datas.map(acc=>acc.transaction).filter(acc=>acc.forEach(cr=>cr.to==1001?console.log(cr):" "))datas.map(account=>account.transaction).forEach(transaction=>{
    // datas.map(account=>account.transaction).forEach(transaction=>{
    //     transaction.forEach(trans=>{
    //         trans.to==1001?console.log(trans):""
    //     })
    // })