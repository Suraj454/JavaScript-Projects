
let counter = 0;

const output = document.getElementById("count");
const decrease = document.getElementById("btn1");
const reset = document.getElementById("btn2");
const increase = document.getElementById("btn3");






decrease.addEventListener("click", () => {
    counter--;
    output.innerHTML = counter;
})

reset.addEventListener("click", () => {
    counter = 0;
    output.innerHTML = counter;
})

increase.addEventListener("click", () => {
    counter++;
    output.innerHTML = counter;
})


