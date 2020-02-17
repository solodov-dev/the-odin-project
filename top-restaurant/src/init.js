export default function initializeContent() {
    const div = document.querySelector('#content');
    
    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('div');
    logo.classList.add('logo');
    header.appendChild(logo);

    const arrowDown = document.createElement('p');
    arrowDown.classList.add('arrowDown');
        
    const bounceContainer = document.createElement('div');
    bounceContainer.classList.add('bounce');
    bounceContainer.appendChild(arrowDown);
    header.appendChild(bounceContainer);

    const menu = document.createElement('nav');    
    const ul = document.createElement('ul');
    ul.classList = 'menu';
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.classList.add('menu-item');
    li2.classList.add('menu-item');
    li3.classList.add('menu-item');
    li1.id = 'about';
    li2.id = 'menu';
    li3.id = 'location';
    li1.innerHTML = 'About';
    li2.innerHTML = 'Menu';
    li3.innerHTML = 'Map';
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    menu.appendChild(ul);

    div.appendChild(header);
    div.appendChild(menu);
}