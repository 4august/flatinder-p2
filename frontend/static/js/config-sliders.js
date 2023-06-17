function sliderOnboarding() {
    $('.slick').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        centerMode: true,
        centerPadding: '35px',
        slidesToShow: 1,
    });
}
$(document).ready(function () {
    sliderOnboarding();
});