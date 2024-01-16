import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";


function renderNav () {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.classList.add("tabs")
    menuBtn.classList.add("tabs")
    contactBtn.classList.add("tabs")

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    
    homeBtn.addEventListener('click',(e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(homeBtn);
        loadHome();
    });
    menuBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(menuBtn);
        loadMenu();
    });
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(contactBtn);
        loadContact();
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

   setActiveTab(document.querySelector(".tabs"));
   loadHome();
}

export default initializePage;