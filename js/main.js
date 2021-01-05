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
                       
                       
                    })