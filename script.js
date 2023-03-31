const board= document.getElementById('board');
const SQUARES_NUMBER =21*21; //кол. кубов
const colors = ['fuchsia','red','green','blue','blueviolet','yellow','orange','orangered','hotpink']  //массив цветов



for (let i =0; i< SQUARES_NUMBER;i++){
const square= document.createElement('div');
square.classList.add('square');
square.addEventListener('mouseover', ()=>setColor(square))
square.addEventListener('mouseleave', ()=>removeColor(square))
board.append(square);
};


function setColor(element){
let indexColor = getRandomArbitrary(0,colors.length);
element.style.backgroundColor =`${colors[indexColor]}`;
element.style.boxShadow =`0 0 2px ${colors[indexColor]}, 0 0 10px ${colors[indexColor]}`;


};


function removeColor(element){
    element.style.backgroundColor ='rgb(59, 59, 59)';
    element.style.boxShadow =`0 0 2px black`;     
};


//рандом индекс массива
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  