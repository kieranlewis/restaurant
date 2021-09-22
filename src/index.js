import { makeContent as homeContent } from './home';
import { makeContent as menuContent } from './menu';
import { makeContent as contactContent } from './contact';

const content = document.querySelector('#content');
const header = document.querySelector('header');

function createNavBar() {
    const tabs = ['Home', 'Menu', 'Contact'];

    for(let i = 0; i < tabs.length; i++) {
        const button = document.createElement('button');
        button.textContent = tabs[i];
        button.setAttribute('id', tabs[i] + '-btn');
        button.addEventListener('click', switchTab);
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

function init() {
    createNavBar();
    homeContent();
}

init();




