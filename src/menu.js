import Wings from './images/wings.jpg';
import Curlies from './images/curlies.jpg';
import Nuggets from './images/nuggets.jpg';
import Drinks from './images/drinks.jpg';

const content = document.querySelector('#content');

const menu = [
    {
        name: 'Spicy Wings',
        price: '$8',
        image: Wings
    },
    {
        name: 'Nugs',
        price: '$6',
        image: Nuggets
    },
    {
        name: 'Curly Fries',
        price: '$4.50',
        image: Curlies
    },
    {
        name: 'Soft Drinks',
        price: '$4.50',
        image: Drinks
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

                if(key == 'image') {
                    const logo = new Image();
                    logo.src = menuItem[key];
                    li.appendChild(logo);
                } else {
                    li.textContent = `${menuItem[key]}`;
                }
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


