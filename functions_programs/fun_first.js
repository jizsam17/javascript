//type cast
var num="10";
num=Number(num);

function add(num1,num2){
    console.log(num1+num2);
}

function sub(num1,num2){
    console.log(num1-num2);
}

function mul(num1,num2){
    console.log(num1*num2);
}

/* add(1,2);

sub(4,2);

mul(2,3) */

//factorial


/* let factorial=num=>{
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log(fact);
} */

function factorial(num){
    let fact=1;
    for(let i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log(fact);
}

factorial(5);