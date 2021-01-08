$(document).ready(function(){//실행틀 시작
   $('#m_nav').hover(function(){$(this).stop().css({height:'15em','background-color':'rgba(255,255,255,1)'});
                       },function(){$(this).stop().css({height:'3.2em','background-color':'rgba(255,255,255,0)'})
                       });
 $(document).ready(function(){


$(".lazy").slick({
  lazyLoad: 'ondemand', // ondemand progressive anticipated
  infinite: true,
  arrows : false,
  speed : 1400,
  dots : true 
});
$(".variable").slick({
  dots: false,
  infinite: true,
  variableWidth: true,
  arrows : true
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