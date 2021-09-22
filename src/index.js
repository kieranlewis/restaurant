import { makeContent } from './home.js';

const content = document.querySelector('#content');

function createTabs(tabs) {
    for(let i = 0; i < tabs.length; i++) {
        const button = document.createElement('button');
        button.textContent = tabs[i];
        button.setAttribute('id', tabs[i] + '-btn');
        button.addEventListener('click', switchTab);
        content.appendChild(button);
    }
}

function switchTab() {
    console.log(this);
}

makeContent();
createTabs(['Home', 'Menu', 'Contact']);

