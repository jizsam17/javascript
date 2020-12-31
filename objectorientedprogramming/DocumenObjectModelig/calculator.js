function display(num){
    var txt=document.querySelector("#disp");
    txt.value+=num;
}

function solve(){
    var txt= document.querySelector("#disp");
    let res=eval(txt.value);
    txt.value=res;
}

let clearBox=()=>{
    document.querySelector("#disp").value="";
}