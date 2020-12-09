var arr=[1,2,3,4,5,6]
var element=7;

/* for(let i=0;i<arr.length;i++){
    
    for(let j=i+1;j<arr.length;j++){

        if(arr[i]+arr[j]==element)
        {
            console.log("("+arr[i]+","+arr[j]+")");
        }
    }
} */

var low=0;
var upp=arr.length-1;
var flag=0;
while(low<upp){
    let total=arr[low]+arr[upp];

    if(total>element){
        upp=upp-1;
    }

    else if(total<element){
        low=low+1;
    }

    else if(total==element){
        console.log("("+arr[low]+","+arr[upp]+")")
        low=low+1;
    }
}