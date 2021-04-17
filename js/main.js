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


  one.owlCarousel({
    loop:true,
    items:1,
    autoplay:true
    
})

two.owlCarousel({
    loop:true,
    items:6,
    dots:false,
    margin:10,
   
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
});



$('.increment-btn').click(function add() {
    var $qtde = $(".counter");
    var a = $qtde.val();
  
    a++;
    $(".decrement-btn").attr("disabled", !a);
    $qtde.val(a);
  });
  $(".decrement-btn").attr("disabled", !$(".counter").val());
  
  $('.decrement-btn').click(function minusButton() {
    var $qtde = $(".counter");
    var b = $qtde.val();
    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $(".decrement-btn").attr("disabled", true);
    }
  });

   
    
    
    

