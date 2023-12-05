const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".colorName");
const refresh = document.querySelector(".refresh")

btn.addEventListener("click",function(){

let hexColor = "#"
for( let i = 0;i<6;i++){
  hexColor += hex[getRandomNumber()]
}

color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;


})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}

refresh.addEventListener("click",function(){
  document.body.style.backgroundColor = "#f1f5f8";
  
  color.textContent = "#f1f5f8";

})
