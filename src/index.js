import home from "./home.js";
import menu from "./menu.js";

const content = document.getElementById('content');

document.getElementById('menu').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(menu);
});

document.getElementById('home').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(home);
});

content.appendChild(home);