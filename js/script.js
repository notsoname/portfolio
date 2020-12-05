const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        menu.classList.remove('active');
    }
});



$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;

});



const numbers = document.querySelectorAll('.skills__ratings-number'),
    lines = document.querySelectorAll('.skills__ratings-line span');

numbers.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 800) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});


