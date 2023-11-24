let inputFirst = document.querySelector("#number");
let inputSecond = document.querySelector("#number-by");

// let submit = document.querySelector(".button");
let count = document.querySelector(".count");


function calculate() {
    let value = parseInt(count.innerHTML);
     value = (inputFirst.value / inputSecond.value)*(100); 
     let result = value.toFixed(1)
     console.log(value.toFixed);
    count.innerHTML= result;


}