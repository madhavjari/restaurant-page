import home from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";
const content = document.getElementById('content');
const btnClickColor = 'rgba(243, 195, 160,0.8)';
const btnColor = 'rgb(236, 74, 24)';
const menuBtn = document.getElementById('menu');
const homeBtn = document.getElementById('home');
const contactBtn = document.getElementById('contact');
homeBtn.style.color = btnClickColor;

document.getElementById('menu').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(menu);
    homeBtn.style.color = btnColor;
    contactBtn.style.color = btnColor;
    menuBtn.style.color = btnClickColor;
});

document.getElementById('home').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(home);
    homeBtn.style.color = btnClickColor;
    contactBtn.style.color = btnColor;
    menuBtn.style.color = btnColor;
});

document.getElementById('contact').addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(contact);
    homeBtn.style.color = btnColor;
    contactBtn.style.color = btnClickColor;
    menuBtn.style.color = btnColor;
});

content.appendChild(home);