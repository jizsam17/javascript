var employeedata=[
    [1000,"emp1","devop",1981,1989],
    [1001,"emp2","devop",1980,2002],
    [1002,"emp3","qa",1991,2010],
    [1003,"emp4","ba",1985,1989],
    [1004,"emp5","qaa",2000,2010]
]

//print names in uppercase

for(let emp of employeedata){
    console.log(emp[1].toUpperCase());
}

//print all employee details who are devop

for(let emp of employeedata){
    if(emp[2]=="devop"){
        console.log(emp);
    }
}

//print all employee details who are 1980's

 

//print employee details whose experience gretaer than 9

for(let emp of employeedata){
     var exp=emp[4]-emp[3];
    if(exp>9){
        console.log(emp);
    }
}