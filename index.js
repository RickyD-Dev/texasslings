// Functions for hamburger nav on mobile
$(".menu-toggle").click(function() {
    $(".site-nav").toggleClass("site-nav--open", 400);
    $(this).toggleClass("open");
});

$(".nav-item").click(function(){
    $(".site-nav").toggleClass("site-nav--open", 400);
    $(this).toggleClass("close");

    $(".menu-toggle").toggleClass("open");
});

// Functions for info-button
$(".info-circle").click(function(e) {
    e.preventDefault();
    $(".more-info").toggleClass("more-info__open");
    $(this).toggleClass("open");

    $(".info-circle").toggleClass("info-circle__onTouch");

    $(".span-container").toggleClass("span-container__open");
});