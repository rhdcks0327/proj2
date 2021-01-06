$(document).ready(function(){//실행틀 시작
    $('.accordion').each(function(){
       var allDt = $(this).find('dt');
       var allDd = $(this).find('dd');
            $('.on').next().slideDown();
       $(allDt).click(function(){
          allDt.removeClass('on')
          allDd.slideUp();
          $(this).addClass('on');
          $(this).next().slideDown();
            //prev()
        })
     })

   $('#m_nav').hover(function(){$(this).stop().css({height:'15em','background-color':'rgba(255,255,255,1)'});
                       },function(){$(this).stop().css({height:'3.2em','background-color':'rgba(255,255,255,0)'})
                       })
 $(document).ready(function(){

$('.center').slick({
  centerMode: true,
  slidesToShow: 3,
 /*responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]*/
});
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
		
});                      
                    })