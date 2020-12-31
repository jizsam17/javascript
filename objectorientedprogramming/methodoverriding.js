class Parent{
    constructor(){
        console.log("inside parent");

    }
    phone=()=>{
        console.log("i have nokia 5310");
    }
}

class Child extends Parent{
    constructor(){
        super();
        console.log("inside child");
    }
    phone=()=>{
        console.log("i have iphone");
    }
}

var ch= new Child();