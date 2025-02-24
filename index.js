const bodyElement = document.querySelector('body');
bodyElement.style.backgroundColor = '#e9e9e9';

const newsClass = document.querySelector('.news');
newsClass.style.backgroundColor = 'white';
newsClass.style.maxWidth = '60rem';

const h1 = document.querySelector('h1');
h1.classList.add('news__title');
h1.textContent = 'Aktuální novinky.'

const firstMess = document.querySelector('#zprava1');
firstMess.classList.add('post--main');

const imgThree = document.querySelector('#zprava3 .post__picture');
imgThree.src= 'images/zprava3-novy.jpg';