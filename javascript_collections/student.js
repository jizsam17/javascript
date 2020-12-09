var students=[
    [100,"ajay","bca",140],
    [101,"vijay","bca",145],
    [102,"aju","mca",150],
    [103,"vinay","mca",160]
]

//print student names in uppercase

for(let st of students){
    console.log(st[1].toUpperCase());
}

//no.of student doing bca

var count=0;

for(let st of students){
    if(st[2]=="bca"){
        count++;
    }
}
console.log(count);

//sum of total group by bca

var total=0;

for(let st of students){
    if(st[2]=="bca"){
        total=total+st[3];
    }
}
console.log(total);

//print details of student who have highest total
var total=0;
var i=0;
for(let st of students){
    if(total<st[3]){
        total=st[3];
        i++;
    }
}
console.log(students[i-1]);

