import header from "./init.js";
import about from './about.js';
import menu from './menu.js';
import location from './location.js';

header();
about();

function clearMenuStyles(){
    document.querySelectorAll('.menu-item').forEach(menuItem => 
        menuItem.classList.remove('menu-item-selected')
        )
}

document.querySelectorAll(".menu-item").forEach(
  btn =>
      btn.addEventListener("click", function(e) {
        clearMenuStyles();
        document.querySelector('#content').removeChild(document.querySelector('.inner-content'));
        switch(e.target.id){
            case 'about':
                about();
            break;
            case 'menu':
                menu();
            break;
            case 'location':
                location();
            break;
        }
      })
);
