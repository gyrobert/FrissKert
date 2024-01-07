
const box = document.querySelector('.box');
const registraciolink = document.querySelector('.regisztracio-link');
const bejelentkezeslink = document.querySelector('.bejelentkezes-link');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon_close');


registraciolink.addEventListener('click', () => {
    box.classList.add('active');
});

bejelentkezeslink.addEventListener('click', () => {
    box.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    box.classList.add('activepopup');
});

iconClose.addEventListener('click', () => {
    box.classList.remove('activepopup');
});

iconClose.addEventListener('click', () => {
    box.classList.remove('active');
});   
     
// document.addEventListener("DOMContentLoaded", event => {
//     const myPost = database.collection('Products').doc('P1');

// myPost.get()
//     .then( document => {
//         const data = document.data();
//     })



// });