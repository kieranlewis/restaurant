import { makeContent as homeContent } from './home';
import { makeContent as menuContent } from './menu';
import { makeContent as contactContent } from './contact';

const content = document.querySelector('#content');

function createTabs() {
    const tabs = ['Home', 'Menu', 'Contact'];

    for(let i = 0; i < tabs.length; i++) {
        const button = document.createElement('button');
        button.textContent = tabs[i];
        button.setAttribute('id', tabs[i] + '-btn');
        button.addEventListener('click', switchTab);
        content.appendChild(button);
    }
}

function switchTab() {
    console.log(this.id);
    content.innerHTML = '';
    createTabs();
    
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

createTabs();
homeContent();



