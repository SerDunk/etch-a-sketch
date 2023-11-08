const drawSpace=document.querySelector('.sketchpad');
const slider=document.querySelector('.slider');
const sliderVal=document.querySelector('.sliderValue');



const COLORS=16777215;
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



function hoverEffect() {
    
    drawSpace.addEventListener('mouseover', function(event){
        if (event.target.classList.contains('tile')) {
            event.target.style.backgroundColor = 'black';
        }
    });
}



function clear(){
    const tiles=document.querySelectorAll('.tile');
    tiles.forEach(tile=>{
        tile.style.backgroundColor='beige';
        })
}


slider.addEventListener("input", function(event) {
    userNumberTile= event.target.value;
    tileSize=100/userNumberTile;
    numberOfTiles=userNumberTile*userNumberTile;
    sliderVal.innerHTML=userNumberTile;
    createDiv(numberOfTiles,tileSize);
    hoverEffect();
    rainbowButton.addEventListener('click',rainbow);
  });

function rainbow(){
    let randomColor=Math.floor(Math.random()*COLORS).toString(16);
    
    drawSpace.addEventListener('mousemove',function(event){
        if(event.target.classList.contains('tile')){
            event.target.style.backgroundColor='#'+randomColor;
        }
    })
}

const clearButton=document.querySelector('.btn-custom')
const rainbowButton=document.querySelector('.btn-rainbow')
clearButton.addEventListener('click',clear);












