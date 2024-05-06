const containerDivs = document.querySelector(".containerDivs");
const range = document.querySelector("#inputRange");
const buttonSize = document.querySelector(".button");
const gridSize = document.querySelector("#grid-size");

let defaultSize = 16;
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
    square.addEventListener("mouseover", (e) => {
      square.style.backgroundColor = "black";
    });
    containerDivs.appendChild(square);
  } 
  containerDivs.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
}
createDivs(defaultSize);
const changeSize = () =>{
  
  gridSize.textContent = `Grid size: ${range.value}x${range.value}`
  createDivs(range.value);
}
const popWindowSize  =() =>{
  let size = parseInt(prompt("Please enter a number bettwen 10 - 100: "));
  if(size<10 || size>100){
    alert("Enter a valid value!");
    return popWindowSize();
  }
  gridSize.textContent = `Grid size: ${size}x${size}`
  createDivs(size);
}
buttonSize.addEventListener("click",popWindowSize)
range.addEventListener("input",changeSize);
