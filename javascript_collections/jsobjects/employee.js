var employee={
    eid:100,
    name:"john",
    desig:"developer",
    salary:25000
}

//check for gender key
console.log("gender" in employee);

//add gender:male key value pair
employee["gender"]="male"

//print employee name
console.log(employee.name);

//add 5000 more rs to salary
employee["salary"]+=5000;

//print all key,value
for(let key in employee){
    console.log(key," : ",employee[key]);
}


