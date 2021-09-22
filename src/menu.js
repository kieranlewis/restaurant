const content = document.querySelector('#content');

const menu = [
    {
        name: 'Spicy Wings',
        price: '$8',
    },
    {
        name: 'Nugs',
        price: '$6'
    },
    {
        name: 'Curly Fries',
        price: '$4.50'
    },
    {
        name: 'Soft Drinks',
        price: '$4.50'
    }
];

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

    for(let i = 0; i < menu.length; i++) {
        const menuItem = menu[i];
        const ul = document.createElement('ul');
        ul.textContent = menuItem["name"];

        for(const key in menuItem) {
            if(key !== 'name') {
                const li = document.createElement('li');
                li.textContent = `${menuItem[key]}`
                ul.appendChild(li);
            }
        }

        menuItems.appendChild(ul);
    }

    content.appendChild(menuItems);
}

export {
    makeContent
}


