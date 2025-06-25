let demo = document.getElementById("demo");
let randome;
let count = 0;
function sets() {
    let userna = document.getElementById("name").value;
    if (userna !== "") {
        randome = Math.floor(Math.random() * 5) + 1;
        count++;
        demo.innerHTML = `${count}  ${userna}  ${randome}`;
    }
}

function reset(){
    demo.innerHTML = ""
}