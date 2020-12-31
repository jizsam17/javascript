class Bank{
    static bankName=()=>{
        console.log("SIB");
    }
    createAccount=(acno,bname,min_balance)=>{
        this.acno=acno;
        this.bname=bname;
        this.min_balance=min_balance;
    }

    deposit=(amount)=>{
        this.min_balance+=amount;
        console.log("Your account "+this.acno+" has been credited with "+amount+". Balance is "+this.min_balance);
    }

    withdrawal=(amount)=>{
        if(amount>this.min_balance){
            console.log("Insufficient balance");
        }
        else{
            this.min_balance-=amount;
            console.log("Your account "+this.acno+" has been debited with "+amount+". Balance is "+this.min_balance);
        }
    }

    balenq=()=>{
        console.log("Your account "+this.acno+" balance is "+this.min_balance);
    }
}

var obj=new Bank();

obj.createAccount(1223,"jiz",1000);
//obj.balenq();
obj.deposit(500);
obj.withdrawal(200);
obj.balenq();
Bank.bankName();
