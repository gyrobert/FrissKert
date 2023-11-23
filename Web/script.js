const box = document.querySelector('.box');
const registraciolink = document.querySelector('.regisztracio-link');
const bejelentkezeslink = document.querySelector('.bejelentkezes-link');

registraciolink.addEventListener('click', () => {
    box.classList.add('active');
    console.log("vsfd");
});

bejelentkezeslink.addEventListener('click', () => {
    box.classList.remove('active');
});


