const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    noarea = document.querySelector('.menu__overlay'),
    link = document.querySelector('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

noarea.addEventListener('click', () => {
    menu.classList.remove('active');
});

/* link.addEventListener('click', () => {
    menu.classList.remove('active');
}); */


$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;

});



const numbers = document.querySelectorAll('.skills__ratings-number'),
    lines = document.querySelectorAll('.skills__ratings-line span');

numbers.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
})

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


