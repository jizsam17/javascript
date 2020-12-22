class Student{
    constructor(roll,name,course,total){
        this.roll=roll;
        this.name=name;
        this.course=course;
        this.total=total;
    }

    printStudent=()=>{
        console.log(this.roll+" "+this.name+" "+this.course+" "+this.total);
    }
}

var obj=new Student(1,"ajay","engg",120);
//obj.printStudent();

var obj1=new Student(2,"ajo","bca",125);
var obj2=new Student(3,"jiz","mca",130);
var obj3=new Student(4,"jenin","engg",145);
var obj4=new Student(3,"geo","ba",122);


var students=[];
students.push(obj);
students.push(obj1);
students.push(obj2);
students.push(obj3);
students.push(obj4);


/* //print all student names
students.forEach(obj=>console.log(obj.name)); */


/* //print student details course=mca
students.filter(obj=>obj.course=="mca").forEach(obj=>console.log(obj.name)); */


/* // print student detail total>143
students.filter(obj=>obj.total>143).forEach(obj=>obj.printStudent()); */

/* //print highest student total
var data=students.map(obj=>obj.total).reduce((t1,t2)=>t1>t2?t1:t2);
console.log(data); */

/* //sort students acc to their total
//descending
var sorted=students.sort((obj1,obj2)=>obj1.total>obj2.total?-1:1);
console.log(sorted);
//ascending
var sor=students.sort((obj1,obj2)=>obj1.total>obj2.total?1:-1);
console.log(sor); */

