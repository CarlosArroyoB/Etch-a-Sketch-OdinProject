const containerDivs = document.querySelector(".containerDivs");
const div = document.createElement("div");

const createDivs = () => {
    for(let i = 1; i<=16;i++){
        let row = "";
        for(let j = 1; j<=16;j++){
            row += "*";
        }
        console.log(row)
    }
}
createDivs();