import loadHome from "./home";

import loadContact from "./contact";


function loadTab (event) {
    if(event.target)

    setActiveTab(event.target);

    if (event.target.textContent.contains('Home')) {
        loadHome();
        return;
    } else if (event.target.textContent.contains('Menu')) {
        loadMenu();
        return;
    } else if (event.target.textContent.contains("Contact")) {
        loadContact();
        return;
    }
}


function renderNav () {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    
    homeBtn.addEventListener('click',(e) => {
        setActiveTab(e.target);
        loadTab(e);
    });
    menuBtn.addEventListener('click', (e) => {
        setActiveTab(e.target);
        loadTab(e);
    });
    contactBtn.addEventListener('click', (e) => {
        setActiveTab(e.target);
        loadTab(e);
    });
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    
    return nav;
}

function setActiveTab (tab) {
    const tabs = document.querySelectorAll('.tabs');

    tabs.forEach((tab) => {
        if(tab !== this) {
            tab.classList.remove("active");
        }
    });

    tab.classList.add('active');
}

function renderMain () {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    return main;
}

function initializePage() {
   const content = document.getElementById('content');
    
   content.appendChild(renderNav());
   content.appendChild(renderMain());
   loadHome();
}

export default initializePage;