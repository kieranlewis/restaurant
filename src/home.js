import Logo from './images/restaurant-logo.png';
import Logo2 from './images/breaking-bad-los-pollos-hermanos.jpg';

const content = document.querySelector('#content');

const makeContent = () => {
    // create header
    const header = document.createElement('h1');
    header.textContent = 'LOS POLLOS HERMANOS';
    content.appendChild(header);

    // create logo
    const logo = new Image();
    logo.src = Logo2;
    logo.style.height = '300px';
    logo.style.width = '300px';
    content.appendChild(logo);

    // create blurb
    const blurb = document.createElement('p');
    blurb.textContent = 'The greatest restaurant chain for all you fried chicken needs. We have it all and we pride ourselves from having no links to the illegal drug trade with the great management of our leader Gustavo Fring. Come on down and you will be clucking to all your friends about us.';
    content.appendChild(blurb);
}

export {
    makeContent
}