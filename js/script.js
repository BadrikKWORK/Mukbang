// Меню на мобильном разрешении 
let menuClick = document.querySelector('.item-header__menu');
let menuContent = document.querySelector('nav.item-header');

if(menuClick){
    menuClick.addEventListener("click", function(e) {
        menuClick.classList.toggle('_active');
        if(menuContent){
            if(menuClick.classList.contains('_active')){
                menuContent.classList.add('_active');
            }
            else{
                menuContent.classList.remove('_active');
            }
        }
    });
}




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    mousewheel: {
        invert: true,
      },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });