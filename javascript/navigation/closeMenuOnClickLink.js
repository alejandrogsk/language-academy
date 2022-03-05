const verticalMenu = document.getElementById('menu-responsive');
const menuLinks = verticalMenu.getElementsByTagName('ul')[0].getElementsByTagName('a');
const navIcon = document.getElementById('navicon');

//Close the menu if touch on it
function closeMenuOnClickUl() {
    verticalMenu.addEventListener('click', function(){
        verticalMenu.classList.remove('show__menu');
        navIcon.classList.remove('menu__open');
    });
}

//Close the menu if touch the link
function closeMenuOnClickNavigationLinks() {
    for(let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function(){
            verticalMenu.classList.remove('show__menu');
            navIcon.classList.remove('menu__open');
        });
    }
}


function closeMenuOnClick() {
    closeMenuOnClickUl();
    closeMenuOnClickNavigationLinks();
}

export default closeMenuOnClick;