const containerDivs = document.querySelector(".containerDivs");
const range = document.querySelector("#inputRange");
const button = document.querySelector(".button");
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
  defaultSize = range.value;
  const sizeInfo = document.createElement("p");
  gridSize.textContent = `Grid size: ${range.value}x${range.value}`
  createDivs(defaultSize);
}
button.addEventListener("click",changeSize);
