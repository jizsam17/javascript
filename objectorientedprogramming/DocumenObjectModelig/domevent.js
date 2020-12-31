var clk=document.querySelector("#click");
clk.addEventListener("click",()=>{
    clk.textContent="Clicked";
    clk.style.color="red";
})

var dclk=document.querySelector("#dclick");
dclk.addEventListener("dblclick",()=>{
    dclk.textContent="Double Clicked";
    dclk.style.color="green";
})

var mover=document.querySelector("#mover");
mover.addEventListener("mouseover",()=>{
    mover.textContent="Mouse currently over";
    mover.style.color="blue";
})
mover.addEventListener("mouseout",()=>{
    mover.textContent="Moveover";
    mover.style.color="black";
})
