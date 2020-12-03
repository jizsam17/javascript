var num=4;
var sum=0;
var digit=0;
var i=0
while(i<=num){
    sum=sum+digit;
   // console.log("sum"+sum);
    digit=(digit*10)+num;
    //console.log("digit"+digit);
    i++;
}

console.log(sum);