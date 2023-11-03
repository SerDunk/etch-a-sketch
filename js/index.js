const drawSpace=document.querySelector('.sketchpad');
const slider=document.querySelector('.slider');
let userNumberTile;
let tileSize;
let numberOfTiles;


function createDiv(numTile,sizeTile){
    drawSpace.innerHTML=" ";
    for(let i=0;i<numberOfTiles;i++){
        let div=document.createElement('div');
        div.style.width=tileSize+'%';
        div.style.height=tileSize+'%';
        div.classList.add('tile');
        drawSpace.appendChild(div);
    }
}


const tiles=document.querySelectorAll('.tile');
function hoverEffect(){
    tiles.forEach(tile=>{
        tile.addEventListener('mouseover',()=>{
            tile.style.backgroundColor='black';
        })
    })
}


function clear(){
    const clearButton=document.querySelector('.btn-custom');
    clearButton.addEventListener('click',()=>{
        tiles.forEach(tile=>{
            tile.style.backgroundColor='beige';
        })
    })
}


slider.addEventListener("input", function(event) {
    userNumberTile= event.target.value;
    tileSize=100/userNumberTile;
    numberOfTiles=userNumberTile*userNumberTile;
    createDiv(numberOfTiles,tileSize);
    hoverEffect();
    clear();
  });












