export default function menu(){

  const products = ['Sushi', 'Sashimi', 'Rolls', 'Sets', 'Drinks', 'Deserts'];
  const productsUrls = ['https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcbsnews1.cbsistatic.com%2Fhub%2Fi%2F2017%2F05%2F12%2Ff9e143b5-9392-478e-8b5a-941e6986c4df%2Fistock-511991334.jpg&f=1',
'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmuckysock.files.wordpress.com%2F2011%2F03%2Fimg_3368.jpg&f=1',
'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.justonecookbook.com%2Fwp-content%2Fuploads%2F2016%2F04%2FDragon-Roll-New-600x400.jpg&f=1',
'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fmagazine.foodpanda.hk%2Fwp-content%2Fuploads%2Fsites%2F9%2F2016%2F08%2FSushi-Set-Bamboo.png&f=1',
'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fgur2d1301.files.wordpress.com%2F2014%2F05%2Fdrinks.jpg&f=1',
'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.onegreenplanet.org%2Fwp-content%2Fuploads%2F2017%2F03%2Fpicsart_12-14-11-30-50-800x918.jpg%3Fresize%3D1600%252C1000&f=1'];

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