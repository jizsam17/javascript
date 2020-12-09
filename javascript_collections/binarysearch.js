var arr=[10,11,12,13,14,15,16,17];

arr.sort((num1,num2)=>num1-num2);

var low=0;
var upp=arr.length-1;

var element=10;

while(low<=upp){
    let mid=Math.floor((low+upp)/2);

    var flag=0;

    if(element>arr[mid]){
        low=mid+1;
    }

    else if(element<arr[mid]){
        upp=mid-1;
    }

    else if(element==arr[mid]){
        flag++;
        break;
    }
}

if(flag==0){
    console.log("Element not found");
}

else{
    console.log("Element found");
}