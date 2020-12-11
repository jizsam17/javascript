var pattern="ABABBC"

var char=pattern.split("");

var obj={};

for(let ch of char){
    if(ch in obj){
        console.log(ch);
        break;
    }
    else{
        obj[ch]=1;
    }
}