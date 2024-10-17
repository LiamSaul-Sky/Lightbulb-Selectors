// Write your code here
console.log("Hello World");

const bulb1 = document.querySelector("#lightbulb1");
const bulb2 = document.querySelector("#lightbulb2");
const bulb3 = document.querySelector("#lightbulb3");
const bulbs = document.querySelectorAll(".item.lightbulb")
const subtitle = document.querySelector(".subtitle");
let count = 0;

// bulb1.addEventListener("mouseover", lightUp);
// bulb2.addEventListener("mouseover", lightUp);
// bulb3.addEventListener("mouseover", lightUp);

for (let i =0;i < bulbs.length; i++){
    console.log(bulbs[i]);
    bulbs[i].addEventListener("click", lightUp);
}

function lightUp(){
    count +=1;
    if (count > 1){
        subtitle.innerHTML = `You've clicked the lights ${count} times`;
    } else{
        subtitle.innerHTML = `You've clicked the lights ${count} time`;
    }
    this.classList.toggle("active");
}

