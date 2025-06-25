let inc = document.getElementById("click0");
let dec = document.getElementById("click1");
let input = document.getElementById("num");
let reset = document.getElementById("click2")
let count = 0;
re = 0;
function incres(){
    count++;
    input.textContent = count;
}
function decres(){
    if(count > 0){
        count--;
        input.textContent = count;
    }
}
function res(){
    re = 0;
    input.textContent = re;
    count = re;
}