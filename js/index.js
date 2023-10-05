const drawSpace=document.querySelector('.container');
const drawArea=500*500;
let sketchBoard=324;
let tileSize=Math.sqrt(drawArea/sketchBoard);
console.log(tileSize);
tileSize=Math.round(tileSize);
console.log(tileSize);
function createDiv(numberOfTiles,tileSize){
for(let i=0;i<numberOfTiles;i++){
    let div=document.createElement('div');
    div.style.width=tileSize+'px';
    div.style.height=tileSize+'px';
    div.classList.add('tile');
    drawSpace.appendChild(div);
}
}

createDiv(sketchBoard,tileSize);
