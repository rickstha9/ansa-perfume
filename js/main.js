// $(window).scroll(function(){
// var scrl=$(window).scrollTop();
// if(scrl<60){
//     $('.header-1').removeClass('fixedbar');
// }
// else{
//     $('.header-1').addClass('fixedbar');
// }

// });

$(document).ready(function(){
  
   $(".navbar-toggler, .overlay").on("click",function(){
       $(".mobileMenu, .overlay").toggleClass("open");
   });

  
 // for carousel 
   var one=$('#one');
   var two=$('#two');
   var three=$('#three');


  one.owlCarousel({
    loop:true,
    items:1,
    autoplayTimeout:7000,
    autoplay:true
    
})

three.owlCarousel({
  loop:true,
  nav:true,
  items:1,
  autoplay:true
  
})

two.owlCarousel({
    loop:true,
    items:6,
    dots:false,
    margin:10,
    autoplayHoverPause:true,
    autoplay:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
   
})

// for to top
var offset=200;
	var duration=500;

	$('.to-top').hide();
		
	$(window).scroll(function(){
		if($(this).scrollTop()>offset){
			$('.to-top').fadeIn(duration);
		}else{
		$('.to-top').fadeOut(duration);
	}
	});
	$('.to-top').click(function(){
		$('body,html').animate({scrollTop:0},duration);
	})
});





  $(".testimonial").hover(function(){
    $(".owl-prev, .owl-next").css("opacity","1");
});
$(".comitement, header").hover(function(){
    $(".owl-prev, .owl-next").css("opacity","0");
});



   
    
    
    

