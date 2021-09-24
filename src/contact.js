import Gus from './images/gus.jpg';
import Jesse from './images/jesse.jpeg';
import Heisenberg from './images/heisenberg.png'

const content = document.querySelector('#content');

const contacts = [
    {
        name: 'Gus Fring',
        role: 'Manager',
        phone: '021 123 456',
        email: 'gusfring@hotmail.com',
        about: 'I strive for our restaurant to be the greatest fried chicken shack in all of the country',
        image: Gus
    },
    {
        name: 'Jesse Pinkman',
        role: 'Chef',
        phone: '022 666 999',
        email: 'sciencebitch@gmail.com',
        about: 'I love cooking all day and I will blow your mind with my drugs, I mean food',
        image: Jesse
    },
    {
        name: 'Heisenberg',
        role: '???',
        phone: 'N/A',
        email: 'N/A',
        about: 'I\'m the one who knocks',
        image: Heisenberg
    }
]

const makeContent = () => {
    // create header
    const header = document.createElement('h1');
    header.textContent = 'Contact';
    content.appendChild(header);

    createContacts();
}

function createContacts() {
    const contactList = document.createElement('ul');

    for(let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const ul = document.createElement('ul');
        ul.textContent = contact["name"];

        for(const key in contact) {
            if(key !== 'name') {
                const li = document.createElement('li');

                if(key == 'image') {
                    const logo = new Image();
                    logo.src = contact[key];
                    li.appendChild(logo);
                } else {
                    li.textContent = `${contact[key]}`;
                }
               ul.appendChild(li);
            }
        }

        contactList.appendChild(ul);
    }

    content.appendChild(contactList);
}

export {
    makeContent
}