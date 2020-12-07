var arr=[5,2,4,3,6,1];

var min;

for(let i=0;i<arr.length;i++){
    
    for(let j=i+1;j<arr.length;j++){

        if(arr[i]>arr[j]){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log(arr);