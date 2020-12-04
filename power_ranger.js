var num=3;
var lower=8;
var upper=40;
var prod=0;
for(let i=1;prod<upper;i++){
    prod=i**num;
    if((prod>=lower)&(prod<=upper)){
        console.log(prod);
    }

}

//lower-10 upper-50. Print all primer numbers b/w lower and upper