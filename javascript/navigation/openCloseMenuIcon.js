/**
 * This function handle the efect of open/close mobile menu
 * 
 * 4 params
 * 1. The navicon id
 * 2. The menu id
 * 3. The class to toggle for the icon (burger to cross)
 * 4. The class to slice the menu in mobile from right
 */
 function openCloseMenuIcon( navIconId, menuId, iconClassToToggle, menuClassToToggle) {
    const navIcon = document.getElementById(navIconId);
    const menu = document.getElementById(menuId);
    navIcon.addEventListener('click', function(){
        navIcon.classList.toggle(iconClassToToggle);
        menu.classList.toggle(menuClassToToggle);
    })
}
export default openCloseMenuIcon;