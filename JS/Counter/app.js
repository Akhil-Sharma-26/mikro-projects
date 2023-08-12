
let count=document.querySelector(".count");
var countt=0;
document.getElementById("count").innerText=countt;
const reset = document.getElementById('RESET');
reset.addEventListener('click',function(){
    countt=0;
    document.getElementById("count").innerText=countt;

})
const increment=document.getElementById('increase');
increment.addEventListener('click',function(){
    // var inc=count.innerHTML;
    // inc++;
    // count.innerHTML=inc;
    // console.log(inc);
    // countt++;
    // count.textContent=countt;
    // console.log(count);
    countt=countt+1;
    document.getElementById("count").innerText=countt;
})
const decrement=document.getElementById('decrease');
decrement.addEventListener('click',function(){
    countt=countt-1;
    document.getElementById('count'). innerText=countt; 
})