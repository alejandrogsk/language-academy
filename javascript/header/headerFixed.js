function headerFixed(scrollDistance, elementId) {
    const header = document.getElementById(elementId);
    let headerIsFixed = header.classList.contains('header__fixed')
    window.addEventListener('scroll', function(){
        if( window.scrollY >= scrollDistance && !headerIsFixed) {
            header.classList.add('header__fixed');
        } else {
            header.classList.remove('header__fixed');
        }
    });
}
export default headerFixed;