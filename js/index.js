const drawSpace=document.querySelector('.sketchpad');
let userNumberTile=prompt('How many tiles per side?');
if(userNumberTile>99 || userNumberTile<2){
    alert('Please enter a number between 2 and 99');
    userNumberTile=prompt('How many tiles per side?');
}
let tileSize=100/userNumberTile;
numberOfTiles=userNumberTile*userNumberTile;
function createDiv(numberOfTiles,tileSize){
for(let i=0;i<numberOfTiles;i++){
    let div=document.createElement('div');
    div.style.width=tileSize+'%';
    div.style.height=tileSize+'%';
    div.classList.add('tile');
    drawSpace.appendChild(div);
}
}

createDiv(numberOfTiles,tileSize);
const tiles=document.querySelectorAll('.tile');
function hoverEffect(){
    tiles.forEach(tile=>{
        tile.addEventListener('mouseover',()=>{
            tile.style.backgroundColor='black';
        })
    })
}
hoverEffect();

function clear(){
    const clearButton=document.querySelector('.btn-custom');
    clearButton.addEventListener('click',()=>{
        tiles.forEach(tile=>{
            tile.style.backgroundColor='beige';
        })
    })
}
clear();




