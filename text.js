const NoButtonWidth = 50;
const NobuttonHeight = 150;

const maxWidth = window.innerWidth - NoButtonWidth;
const maxHeight = window.innerHeight - NobuttonHeight;

 window.addEventListener('DOMContentLoaded', () =>{
    const nobutton = document.getElementById('no-button');

    nobutton.addEventListener('mousemove', (event) => {
    console.log('its hovered me!');
    nobutton.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    nobutton.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';

    }) 
});
