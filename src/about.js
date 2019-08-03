export default function about() {
  const container = document.querySelector("#content");

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('inner-content');

  const aboutSelected = document.querySelector('#about')
  aboutSelected.classList.add('menu-item-selected'); 
  
  const h1 = document.createElement('h1');
  h1.innerHTML = 'About us';

  
  const aboutText = document.createElement("p");
  aboutText.innerHTML = `Wasabi's Sushi Bar serves a wide selection of sushi classics, 
                        such as sashimi, nigiri and maki sushi. In addition, our sushi
                        chefs exhibit many modern interpretations and innovations of 
                        sushi dishes in our specialty signature rolls. We take pride 
                        and passion in serving this artistic culinary form. The exclusive 
                        use of high quality and fresh ingredients is our top priority. `;
  
  aboutContainer.appendChild(h1);
  aboutContainer.appendChild(aboutText);                      
  container.appendChild(aboutContainer);
}
