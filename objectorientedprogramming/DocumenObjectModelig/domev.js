/* var url=document.URL
alert(url);

var tags=document.getElementsByTagName("h2");
for(tg of tags){
    tg.style.color="red";
}

var item=document.getElementById("one");
item.style.color="blue";

var lists=document.getElementsByClassName("cls");
for(list of lists){
    list.style.color="green";
} */

var ht=document.querySelector("#one");
ht.style.color="red";

var lists=document.querySelectorAll(".cls");
lists.forEach(li=>li.style.color="green");

var dom=document.querySelector("#dom");
dom.textContent="Document Object Methods";

dom.innerHTML="<em>Document Object Methods</em>"

alert(ht.textContent);