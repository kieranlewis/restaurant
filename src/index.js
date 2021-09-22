import Logo from './restaurant-logo.png';

const content = document.querySelector('#content');

function makeContent() {
    // create header
    const header = document.createElement('h1');
    header.textContent = 'Los Pollos Hermanos';
    content.appendChild(header);

    // create tabs
    createTabs(['Home', 'Menu', 'Contact']);

    // create logo
    const logo = new Image();
    logo.src = Logo;
    content.appendChild(logo);

    // create blurb
    const blurb = document.createElement('p');
    blurb.textContent = 'The greatest restaurant chain for all you fried chicken needs. We have it all and we pride ourselves from having no links to the illegal drug trade with the great management of our leader Gustavo Fring. Come on down and you will be clucking to all your friends about us.';
    content.appendChild(blurb);
}

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

