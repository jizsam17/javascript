class Maths{
    add=()=>{
        console.log("no arg");
    }
    add=(no1)=>{
        console.log("single arg");
    }
    add=(no1,no2)=>{
        console.log("two arg");
    }
}

var math=new Maths();
math.add(10,1);