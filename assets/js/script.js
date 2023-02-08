const hamburguer = document.querySelector('.hamburguer');
const navBar = document.querySelector('.nav-bar');


hamburguer.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

const nextBlue = document.querySelector('.color1');
const nextBlack = document.querySelector('.color2');


const containerBike = document.querySelector('.container-bike');

const blueURl = '../bikes/bike2.png';

nextBlue.addEventListener('click', () => {
    containerBike.classList.add('blue'); 
    containerBike.classList.remove('black');
});

nextBlack.addEventListener('click', () => {
    containerBike.classList.add('black');
    containerBike.classList.remove('blue');
});