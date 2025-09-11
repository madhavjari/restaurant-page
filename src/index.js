import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
const content = document.getElementById('content');

document.getElementById('menu').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(menu);
});

document.getElementById('home').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(home);
});

document.getElementById('contact').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(contact);
});

content.appendChild(home);