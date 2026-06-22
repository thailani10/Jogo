const mario = document.querySelector('.mario');
const pulosQuantidade = document.getElementById('pulosquantidade');
let jumpContagem = 0;


const jump = () => {

    mario.classList.add('jump');
    jumpContagem++;
    pulosQuantidade.innerText = 'Pulos: ' + jumpContagem;


    setTimeout(() => { mario.classList.remove('jump');}, 500);
}
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'assets/imgs/game-over.png';
        mario.style.width = '160px';
        mario.style.marginLeft = '130px';

        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
    }
}, 10);

const restart = () => {

    gameOver.style.visibility = 'hidden';
    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;
    jumpContagem = 0;
    pulosQuantidade.innerText = 'Pulos: '+jumpContagem;

    mario.src = 'assets/imgs/mario.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';
    cloud.style.left = ``;


    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

        if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 60) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = 'assets/imgs/game-over.png';
            mario.style.width = '160px';
            mario.style.marginLeft = '130px';

            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;
    
            gameOver.style.visibility = 'visible';
    
            clearInterval(loop);
        }
    }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);