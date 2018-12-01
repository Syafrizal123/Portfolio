$(document).ready(function(){
  		$('.html').animate({width:'80%'},2000);
  		$('.css').animate({width:'75%'},2000);
  		$('.js').animate({width:'50%'},2000);
  		$('.php').animate({width:'50%'},2000);
  		$('.jquery').animate({width:'45%'},2000);
  		$('.wordpress').animate({width:'90%'},2000);
  		$('.uiux').animate({width:'85%'},2000);
  	});


 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });


 