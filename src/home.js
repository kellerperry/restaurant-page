function createHomePage () {
    const home = document.createElement('div')
    home.setAttribute('id','home');
    
    const headline = document.createElement('h1');
    const heroImg = document.createElement('img');
    const imgCaption = document.createElement('p');
    const rest_descript = document.createElement('h2');
    const awardLine = document.createElement('h3');

    headline.textContent = 'Good Clean Bun';

    heroImg.setAttribute('id', 'hero-img');
    heroImg.src = "/src/assets/restaurant-image.jpeg";
    heroImg.alt = "sunny outdoor patio";

    imgCaption.innerHTML = `Photo by <a href="https://unsplash.com/@lienvanwin?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lien Van Win</a> on <a href="https://unsplash.com/photos/brown-wooden-table-and-chairs-set-N4nLjqS2umE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>`;

    rest_descript.textContent = 'Modern culinary bistro and bakery';
    awardLine.textContent = 'James Bear Award Winning Restaurant';

    home.appendChild(headline)
    home.appendChild(heroImg)
    home.appendChild(imgCaption)
    home.appendChild(rest_descript)
    home.appendChild(awardLine)

    return home;
}

export default function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";

    main.appendChild(createHomePage());
}