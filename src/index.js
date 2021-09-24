import { makeContent as homeContent } from './home';
import { makeContent as menuContent } from './menu';
import { makeContent as contactContent } from './contact';
import Logo2 from './images/breaking-bad-los-pollos-hermanos.jpg';

const content = document.querySelector('#content');
const header = document.querySelector('header');
const body = document.querySelector('body');

function createNavBar() {
    const tabs = ['Home', 'Menu', 'Contact'];

    for(let i = 0; i < tabs.length; i++) {
        // creating buttons
        const button = document.createElement('button');
        button.textContent = tabs[i];
        button.setAttribute('id', tabs[i] + '-btn');
        button.addEventListener('click', switchTab);

        // applying style to buttons
        button.style.border = 'none';
        button.style.color = 'white';
        button.style.backgroundColor = 'blue';
        header.appendChild(button);
    }
}

function switchTab() {
    content.innerHTML = ''; // wipe out current content
    
    switch (this.id) {
        case 'Home-btn':
            homeContent();
            break;
        case 'Menu-btn':
            menuContent();
            break;
        case 'Contact-btn':
            contactContent();
            break;
    }
}

function applyStyles() {
    header.style.display = 'flex';
    header.style.justifyContent = 'center';
    header.style.backgroundColor = 'blue';

    content.style.display = 'flex';
    content.style.flexDirection = 'column';

    body.style.backgroundColor = 'rgba(254,220,0,255)';
}

function init() {
    createNavBar();
    applyStyles();
    homeContent();
}

init();




