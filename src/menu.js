function renderFood() {
    const foodDiv = document.createElement('div');
    const foodHeader = document.createElement('h2');
    
    foodDiv.setAttribute('id', 'food');
    foodDiv.classList.add('menu-section');
    foodHeader.classList.add('menu-header');

    foodHeader.textContent = "Tacos";

    foodDiv.appendChild(foodHeader);
    foodDiv.appendChild(createParagraph("Carne Asada"));
    foodDiv.appendChild(createParagraph("Al Pastor"));
    foodDiv.appendChild(createParagraph("Grilled Chicken"));
    foodDiv.appendChild(createParagraph("Crispy Fish"));

    return foodDiv;
}

function renderDrinks() {
    const drinksDiv = document.createElement('div');
    const drinksHeader = document.createElement('h2');

    drinksDiv.setAttribute('id', 'drinks');
    drinksDiv.classList.add('menu-section');
    drinksHeader.classList.add('menu-header');

    drinksHeader.textContent = "Drinks";

    drinksDiv.appendChild(drinksHeader);
    drinksDiv.appendChild(createParagraph("Cadillac Margarita"));
    drinksDiv.appendChild(createParagraph("Spicy Margarita"));
    drinksDiv.appendChild(createParagraph("Smoky Margarita"));
    drinksDiv.appendChild(createParagraph("Ranch Water"));

    return drinksDiv;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

function renderMenuPage() {
    const menuNav = document.createElement('div');
    menuNav.setAttribute('id', 'menu-nav');
    
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu-div');
    

    const foodBtn = document.createElement('button');
    const drinksBtn = document.createElement('button');

    foodBtn.classList.add('menu-btn')
    drinksBtn.classList.add('menu-btn')

    foodBtn.textContent = "Food";
    drinksBtn.textContent = "Drinks";
  
    foodBtn.addEventListener('click',(e) => {
        setActiveMenuTab(e.target);
        menu.textContent = "";
        menu.appendChild(renderFood());
    });

    drinksBtn.addEventListener('click', (e) => {
        setActiveMenuTab(e.target);
        menu.textContent = "";
        menu.appendChild(renderDrinks());
    });
    
    menuNav.appendChild(foodBtn);
    menuNav.appendChild(drinksBtn);
    menuNav.appendChild(menu);
    
    menu.appendChild(renderFood());
    return menuNav;
}

function setActiveMenuTab (menuBtn) {
    const menuBtns = document.querySelectorAll('.menu-btn');

    menuBtns.forEach((menuBtn) => {
        if(menuBtn !== this) {
            menuBtn.classList.remove("active");
        }
    });

    menuBtn.classList.add('active');
}

export default function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    
    main.appendChild(renderMenuPage());
}