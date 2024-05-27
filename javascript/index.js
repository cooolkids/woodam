var swiper = new Swiper(".mySwiper", {

    // effect: "fade" ,
    autoplay: {
        Delay: 3000,
        disableOnInteraction: false,
    },
});
$('.menu li').click(function (e) {
    e.preventDefault()
    let i = $(this).index()
    $('.menu li a').removeClass('on')
    $(this).find('a').addClass('on')
    swiper.slideTo(i, 500)
})

swiper.on('slideChange', function () {
    let idx = swiper.activeIndex

    $('.menu li a').removeClass('on')
    $('.menu li a').eq(idx).addClass('on')


});

$('li.main-menu').mouseenter(function(){
    $(this).find('.sub-menu').stop().slideDown()
  })
  
  $('li.main-menu').mouseleave(function(){
    $('.sub-menu').stop().slideUp()
  })
  
