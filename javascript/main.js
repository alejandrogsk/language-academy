import headerFixed from './header/headerFixed.js';
import openCloseMenuIcon from './navigation/openCloseMenuIcon.js';
import closeMenuOnClick from './navigation/closeMenuOnClickLink.js';


window.onload = function() {
    headerFixed(200, 'header');
    openCloseMenuIcon('navicon', 'menu-responsive', 'menu__open', 'show__menu');
    closeMenuOnClick()
}