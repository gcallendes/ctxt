import Siema from 'siema';


$(function(){
    $('.menu-toggle').click(function(){
      var $menu = $(this).parent('.main-menu');
      $menu.toggleClass('main-menu--open');
    })

    $('.carousel').each(function(index, item){
      let thisNode = $(this).children('.carousel__slides')[0];
      let slides  = $(this).find('.carousel__item').length;
      let $next = $(this).find('.carousel__next');
      let $prev = $(this).find('.carousel__prev');
      let $number = $(this).find('.carousel__number');
      let $total = $(this).find('.carousel__total');
      
      const siema = new Siema({
        selector: thisNode
      });

      $total.text(slides);

      function updateNumber() {
        $number.text(siema.currentSlide + 1);
      }

      $next.click(function(){
        siema.next();
        updateNumber();
      })

      $prev.click(function(){
        siema.prev();
        updateNumber();
      })

    })

    $('.galeria').each(function(index, item){
      let thisNode = $(this).children('.galeria__slides')[0];
      let $next = $(this).find('.galeria__next');
      let $prev = $(this).find('.galeria__prev');
      let width = $(window).width();
      let pages = 1;

      if(width>500 && width<780) {
        pages = 2
      } else if(width>780){
        pages = 3;
      }
      
      const siema = new Siema({
        selector: thisNode,
        perPage: pages,
        onInit: function(){

          function updateNumber() {
            $number.text(siema.currentSlide + 1);
          }

          $next.click(function(){
            siema.next();
            updateNumber();
          })
    
          $prev.click(function(){
            siema.prev();
            updateNumber();
          })
        }
      });



    })

})