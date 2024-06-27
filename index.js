let random = Math.floor(Math.random() * 100);

let body = document.querySelector("body"); 
let h1 = document.createElement("h1")
h1.textContent = random

body.appendChild(h1)
console.log(h1)

body.style ="background-color: aqua"
h1.style = "color: black"