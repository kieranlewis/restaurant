const content = document.querySelector('#content');

const makeContent = () => {
    // create header
    const header = document.createElement('h1');
    header.textContent = 'Menu';
    content.appendChild(header);

    // menu items
    createMenu();
}

function createMenu() {
    const menuItems = document.createElement('ul');

    const wings = document.createElement('li');
    wings.textContent = 'Spicy Wings';
    menuItems.appendChild(wings);

    const nuggets = document.createElement('li');
    nuggets.textContent = 'Nugs';
    menuItems.appendChild(nuggets);

    const curlies = document.createElement('li');
    curlies.textContent = 'Curly Fries';
    menuItems.appendChild(curlies);

    const softDrink = document.createElement('li');
    softDrink.textContent = 'Soft Drinks';
    menuItems.appendChild(softDrink);

    content.appendChild(menuItems);
}

export {
    makeContent
}


