class Parent{
    m1=()=>{
        console.log("Inside parent");
    }
}

class Child extends Parent{
    m2=()=>{
        console.log("Inside child");
    }
}

class Subchild extends Child{
    m3=()=>{
        console.log("Inside Subchild");
    }
}

var sb=new Subchild();
sb.m3();
sb.m2();
sb.m1();

var ch=new Child();
ch.m3();//error
ch.m2();
ch.m1();

var pa=new Parent();
pa.m3();//error
pa.m2();//error
pa.m1();
