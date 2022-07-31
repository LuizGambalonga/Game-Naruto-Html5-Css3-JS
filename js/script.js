const naruto = document.querySelector('.naruto')
const sasuke = document.querySelector('.sasuke')
const nuvem = document.querySelector('.nuvem')
const restart = document.querySelector('.restart')
const point = document.querySelector('.point')
let time = 1;

const jump = () => {
   naruto.classList.add('jump');

   setTimeout(()=>{
    naruto.classList.remove('jump');
   },500)
}


const loopGame = setInterval(()=>{
    const sasukePosition = sasuke.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const narutoPosition = Number(window.getComputedStyle(naruto).bottom.replace('px',''))  
    if(sasukePosition <=51 && sasukePosition>0 && narutoPosition <50){
        sasuke.style.animation = 'none';
        sasuke.style.left = `${sasukePosition}px`
        naruto.style.animation = 'none';
        naruto.style.bottom = `${narutoPosition}px`
        naruto.src = './assets/kyuubi.gif'
        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`
        restart.style.display = 'block'
       clearInterval(loopGame)
    }
    
}, 10)

const timeGame = setInterval(()=>{
    const sasukePosition = sasuke.offsetLeft;
    const narutoPosition = Number(window.getComputedStyle(naruto).bottom.replace('px',''))  
    if(sasukePosition <=51 && sasukePosition>0 && narutoPosition <50){
        time--
        clearInterval(timeGame)
    }
    point.innerHTML = time;
    time++;
},1000)

function restartGame(){
    document.location.reload(true);
}
document.addEventListener('keydown', jump);
document.addEventListener('click', jump);