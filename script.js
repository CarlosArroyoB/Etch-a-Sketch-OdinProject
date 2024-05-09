const containerDivs = document.querySelector(".containerDivs");
const range = document.querySelector("#inputRange");
const buttonSize = document.querySelector(".button");
const gridSize = document.querySelector("#grid-size");
const buttonErrase = document.querySelector(".button2");
const buttonRainbow = document.querySelector(".button1");


let defaultSize = 16;
let doClick = false;
let clickR = false;
const createDivs = (size) => {
    let proportions = 600/size;
    let totalSquares = size*size;
  containerDivs.innerHTML= "";
  for (let i = 1; i <= totalSquares; i++) {
    const square = document.createElement("div");
    square.style.width = `${proportions}px`;
    square.style.height = `${proportions}px`;
    square.style.border = "0.5px solid #000";
    square.classList.add("square");
    square.addEventListener("mouseover", () => {
      if(doClick && !clickR){
        square.style.backgroundColor = "white";
      } else if(!doClick && clickR){
        generarNuevoColor(square);
      } else if(!doClick && !clickR){
        square.style.backgroundColor = "black";
      }
      
    });
    containerDivs.appendChild(square);
  } 
  containerDivs.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
  return range.value;
}
function generarNuevoColor(square){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	return square.style.background = color;
	
}
createDivs(defaultSize);
const changeSize = () =>{
  
  gridSize.textContent = `Grid size: ${range.value}x${range.value}`
  createDivs(range.value,"black");
}
const popWindowSize  =() =>{
  let size = parseInt(prompt("Please enter a number bettwen 10 - 100: "));
  if(size<10 || size>100){
    alert("Enter a valid value!");
    return popWindowSize();
  }
  gridSize.textContent = `Grid size: ${size}x${size}`
  createDivs(size,"black");
}

buttonSize.addEventListener("click",popWindowSize)
range.addEventListener("input",changeSize);
buttonErrase.addEventListener("click",() =>{
  doClick = !doClick;
  console.log(doClick);
  buttonErrase.classList.toggle('pressed');
});
buttonRainbow.addEventListener("click",() =>{
  clickR = !clickR;
  console.log(clickR);
  buttonRainbow.classList.toggle('pressed');
});