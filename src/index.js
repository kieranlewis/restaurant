import Logo from './restaurant-logo.png';

const content = document.querySelector('#content');

function makeContent() {
    // create header
    const header = document.createElement('h1');
    header.textContent = 'Los Pollos Hermanos';
    content.appendChild(header);

    // create logo
    const logo = new Image();
    logo.src = Logo;
    content.appendChild(logo);

    // create blurb
    const blurb = document.createElement('p');
    blurb.textContent = 'The greatest restaurant chain for all you fried chicken needs. We have it all and we pride ourselves from having no links to the illegal drug trade with the great management of our leader Gustavo Fring. Come on down and you will be clucking to all your friends about us.';
    content.appendChild(blurb);
}

makeContent();

