var employees=[
    [100,"ajay","developer",25000],
    [101,"vijay","developer",15000],
    [102,"aju","qa",30000],
    [103,"vinay","qa",25000]
]

for(let emp of employees){
    console.log(emp);
}

for(let emp of employees){
    console.log(emp[1]);
}

var total=0;

for(let emp of employees){
    total=total+emp[3];
}