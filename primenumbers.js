//lower-10 upper-50. Print all primer numbers b/w lower and upper

var low=10;
var upp=50;

for(let i=10;i<=upp;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag=1;
        }
    }
    if(flag==0){
        console.log(i);
    }
}