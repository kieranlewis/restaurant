const content = document.querySelector('#content');

const makeContent = () => {
    // create header
    const header = document.createElement('h1');
    header.textContent = 'Menu';
    content.appendChild(header);

}

export {
    makeContent
}


