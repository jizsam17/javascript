var arr=[11,12,13,14,15];

var element=16;

var flag=0;
for(let data of arr){

    if(data==element){
        console.log(element+" exists");
        flag=1;
        break;
    }
}
if(flag==0){
    console.log(element+" not exists");
}