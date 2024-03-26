
function reservationCard() {
        const contactCard = document.createElement('div');
        const cardHeader = document.createElement('h1');
        const contactEmail = document.createElement('p');
        const phoneNumber = document.createElement('p');

        contactCard.classList.add('contact-card');
        contactCard.setAttribute('id', 'reservations');

        cardHeader.textContent = 'Make a Reservation';
        contactEmail.textContent = 'goodclean@bun.com';
        phoneNumber.textContent = '(555) 555-4806';


        contactCard.appendChild(cardHeader)
        contactCard.appendChild(contactEmail)
        contactCard.appendChild(phoneNumber)

    return contactCard;
}


function stayConnectedCard () {
        const contactCard = document.createElement('div');
        const cardHeader = document.createElement('h1');
        const findUs = document.createElement('h3');
        const iconDiv = document.createElement('div');
        const instaIcon = document.createElement('img');
        const fbIcon = document.createElement('img');

        contactCard.classList.add('contact-card');
        contactCard.setAttribute('id', 'stay-connected');
        iconDiv.classList.add('icons');

        cardHeader.textContent = 'Stay Connected';
        findUs.textContent = 'Find us on Instagram and Facebook';

        instaIcon.setAttribute('src','/src/assets/instagram-icon.svg' );
        fbIcon.setAttribute('src', '/src/assets/facebook-icon.png')

        instaIcon.classList.add('icon');
        fbIcon.classList.add('icon');

        contactCard.appendChild(cardHeader);
        contactCard.appendChild(findUs);
        contactCard.appendChild(iconDiv);
        iconDiv.appendChild(instaIcon);
        iconDiv.appendChild(fbIcon);

    return contactCard;
}

function loadContact () {
    const main = document.getElementById('main');
    main.textContent = "";
    
    main.appendChild(reservationCard());
    main.appendChild(stayConnectedCard());
    
}

export default loadContact;
