var arr=[10,11,12,13,14,15];

console.log(arr);

//using loop

for(let data of arr){
    console.log(data)
}

//adding an object

arr.push(50);

//delete an  object

arr.pop();

//delete more than one object

arr.splice(2,2);

console.log(arr);