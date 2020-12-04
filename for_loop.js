//prime numbers

var num=7;
var count=0;
for(let i=2;i<num;i++){
    if(num%i==0){
        count++;
        break;
    }
}

if(count==0){
    console.log("prime");
}
else{
    console.log("not prime");
}