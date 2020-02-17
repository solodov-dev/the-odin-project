export default function menu(){

  const products = ['Sushi', 'Sashimi', 'Rolls', 'Sets', 'Drinks', 'Desserts'];
  const productsUrls = ['images/sushi.jpeg', 'images/sashimi.jpeg', 'images/rolls.jpeg', 'images/sets.jpg', 'images/drinks.jpg', 'images/dessert.jpeg'];

  const container = document.querySelector("#content");
 
  const menuSelected = document.querySelector('#menu')
  menuSelected.classList.add('menu-item-selected'); 
  
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('inner-content');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Our menu';
  menuContainer.appendChild(h1);

  for (let i = 0; i < 6; i++) {
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');

    const productPicture = document.createElement('div')
    productPicture.classList.add('product-picture');
    productPicture.style.backgroundImage = `url('${productsUrls[i]}')`;

    const productName = document.createElement('h2');
    productName.classList.add('product-name');
    productName.innerHTML = products[i];

    productItem.appendChild(productPicture);
    productItem.appendChild(productName);
    menuContainer.appendChild(productItem);
  }

  container.appendChild(menuContainer);
}