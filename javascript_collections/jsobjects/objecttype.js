var students={
    rol:100,
    name:"ajay",
    course:"bca",
    total:150
}

//print student name only

console.log(students["name"]);
console.log(students.name);

//print keys

for(let key in students){
    console.log(key);
}

//print values

for(let key in students){
    console.log(students[key]);
}

//checking for a specific key

console.log("course" in students);

//adding a new key value pair

students["gender"]="male";

//adding 50 more to total

students[total]+=50;