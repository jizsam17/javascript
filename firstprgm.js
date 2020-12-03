/* var name="ajay";
var age=25;
console.log("hai "+name+" you are "+age+ "years old"); */

/* var num1=20;
var num2=30;
 
var temp=num1;
num1=num2;
num2=temp;

console.log(num1,"  ",num2); */

/* /* var num=10;
if(num>0){
    console.log("positive");
}
else{
    console.log("negative");
} */

/* var num=20;
var num2=25;
num3=num+num2;
if((num3===50) || (num1===50)||(num2===50)){
    console.log("True");
}
else{
    console.log("false");
}
/* /* /* /* if(num>num2){
    console.log(num);
}
else{
    console.log(num2);
} */

var num1=50;
var num2=60;
var num3=70;

/* if(num1>num2){
    if(num1>num3){
        console.log(num1);
    }
}
else if(num2>num3){
    console.log(num2);
}
else{
    console.log(num3);
} */

/* if( (num1>num2) &(num1<num3) ){
    console.log(num1);
}

else if( (num2>num1) & (num2<num3) ){
    console.log(num2);
}

else if( (num3>num1) & (num3<num2) ){
    console.log(num3);
} */

/* var i=1;

while(i<11){
    console.log(i);
    i++;
} */

/* var i=10;
while(i>0){
    console.log(i);
    i--;
} */

/* var i=1;
var limit=50;
var sum=0;

while( i<=limit ){
    if(i%2!=0)
    sum=sum+1
    i++;
}

console.log(sum); */

/* var num=123;
var rev=0; //var rev="";

while(num>0){
  let  rem=num%10;
  rev=rev*10+rem; //rev=rev+String(rem)
  num=Math.floor(num/10);
}

console.log(rev); */

//1**3+2**3+3**3

var num=123;
var sum=0;
var rem=0;
var digit=num;
var i=0;
while(num>0){
    i++;
    num=Math.floor(num/10);
}
while(digit>0){
    rem=digit%10;
    num=Math.floor(digit/10);
    sum=sum+rem**i;
}
console.log(sum)
/* var num=4;
var sum=0;
var digit=num;
var i=0
while(i<num){
    sum=sum+digit;
   // console.log("sum"+sum);
    digit=(digit*10)+num;
    //console.log("digit"+digit);
    i++;
}

console.log(sum); */