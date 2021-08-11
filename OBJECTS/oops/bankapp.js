class Bank{
    session={}//add user to the object when login succeded

    account_details={
        1000:{acno:1000,balance:2000,username:"userone",password:"userone"},
        1001:{acno:1001,balance:3000,username:"usertwo",password:"usertwo"},
        1002:{acno:1002,balance:2002,username:"userthree",password:"userthree"},
        1003:{acno:1003,balance:20000,username:"userfour",password:"userfour"},
    }
    accountCreate(acno,balance,username,password)
    {
        if(acno in this.account_details){
            console.log("Account number already exist");
        }
        else{
        this.account_details[acno]={acno:acno,balance:balance,username:username,password:password}
        }
    }
    authenticate(account_number,username,password){
        if(account_number in this.account_details){
            if(this.account_details[account_number].username==username){
                if(this.account_details[account_number].password==password){
                    console.log("login sucess");
                    this.session["user"]=account_number
                }
                else{console.log("invalid password");}
            }
            else{console.log("invalid username");}
        }
        else{
            console.log("invalid account number");
        }
    }
    fundTransfer(from_acno,to_acno,amount){
        if(from_acno == this.session["user"]){
            if(to_acno in this.account_details)
            {
                if(this.account_details[from_acno].balance>amount)
                {
                    this.account_details[to_acno].balance+=amount
                    this.account_details[from_acno].balance-=amount
                    console.log(`your account ${from_acno}is debited with amount ${amount} aval  ${this.account_details[from_acno].balance}`);
                }
                else{
                    console.log("insufficient balance");
                }

            }
            else{
                console.log("invalid account number");
            }
            
        }
        else{
            console.log("login required invalid session");
        }

    }
    balanceEnqury(){
        if("user" in this.session)//chk user keyword in session 
        {
            console.log(`Available balance: ${this.account_details[this.session["user"]].balance}`);
        }
    }
}

var obj=new Bank()
obj.authenticate(1000,"userone","userone");
obj.fundTransfer(1000,1001,500)
obj.balanceEnqury();
