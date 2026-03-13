const NoButtonWidth = 100;
const NoButtonHeight = 50;

window.addEventListener('DOMContentLoaded', () => {

    const nobutton = document.getElementById('no-button');

    nobutton.addEventListener('mousemove', () => {

        const maxWidth = window.innerWidth - NoButtonWidth;
        const maxHeight = window.innerHeight - NoButtonHeight;

        nobutton.style.left = Math.floor(Math.random() * maxWidth) + 'px';
        nobutton.style.top = Math.floor(Math.random() * maxHeight) + 'px';

    });

});
