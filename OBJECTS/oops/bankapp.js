//bank      accCreate,deposit,balanceEnquiry

class Bank{
    accontCreate(acc_no,ac_name,ac_type,ac_balance){
        this.acc_no=acc_no;
        this.ac_name=ac_name;
        this.ac_type=ac_type;
        this.ac_balance=ac_balance;

    }
    deposit(amount)
    {
        this.ac_balance+=amount
        console.log(`your account number${this.acc_no}hasbeen credited with amount ${amount} aval balance ${this.total}`);
    }

    withdrawal(amount)
    {
        if(this.ac_balance>amount){
            this.ac_balance-=amount
        }
        else{
            console.log("insufficient balance");
        }
    }
    balEnquiry(){
        console.log(this.ac_name,this.ac_type,"aval balance :",this.ac_balance);
        
    }
}
var obj=new Bank();
obj.accontCreate(10001,"ram kumar","saving",1000);
obj.deposit(600);
obj.withdrawal(500)
obj.balEnquiry();