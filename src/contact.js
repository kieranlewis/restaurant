const content = document.querySelector('#content');

const contacts = [
    {
        name: 'Gus Fring',
        role: 'Manager',
        phone: '021 123 456',
        email: 'gusfring@hotmail.com',
        about: 'I strive for our restaurant to be the greatest fried chicken shack in all of the country'
    },
    {
        name: 'Jesse Pinkman',
        role: 'Chef',
        phone: '022 666 999',
        email: 'sciencebitch@gmail.com',
        about: 'I love cooking all day and I will blow your mind with my drugs, I mean food'
    },
    {
        name: 'Heisenberg',
        role: '???',
        phone: 'N/A',
        email: 'N/A',
        about: 'I\'m the one who knocks'
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
        const contactListItem = document.createElement('ul');
        contactListItem.textContent = contact["name"];

        for(const key in contact) {
            if(key !== 'name') {
                const li = document.createElement('li');
                li.textContent = `${contact[key]}`
                contactListItem.appendChild(li);
            }
        }

        contactList.appendChild(contactListItem);
    }

    content.appendChild(contactList);
}

export {
    makeContent
}