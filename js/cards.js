
$(document).ready(function(){
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


  $('.increment-btn-2').click(function add() {
    var $qtde = $(".counter-2");
    var a = $qtde.val();
  
    a++;
    $(".decrement-btn-2").attr("disabled", !a);
    $qtde.val(a);
  });
  $(".decrement-btn-2").attr("disabled", !$(".counter-2").val());
  
  $('.decrement-btn-2').click(function minusButton() {
    var $qtde = $(".counter-2");
    var b = $qtde.val();
    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $(".decrement-btn-2").attr("disabled", true);
    }
  });

  $('.increment-btn-3').click(function add() {
    var $qtde = $(".counter-3");
    var a = $qtde.val();
  
    a++;
    $(".decrement-btn-3").attr("disabled", !a);
    $qtde.val(a);
  });
  $(".decrement-btn-3").attr("disabled", !$(".counter-3").val());
  
  $('.decrement-btn-3').click(function minusButton() {
    var $qtde = $(".counter-3");
    var b = $qtde.val();
    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $(".decrement-btn-3").attr("disabled", true);
    }
  });



  $('.increment-btn-4').click(function add() {
    var $qtde = $(".counter-4");
    var a = $qtde.val();
  
    a++;
    $(".decrement-btn-4").attr("disabled", !a);
    $qtde.val(a);
  });
  $(".decrement-btn-4").attr("disabled", !$(".counter-4").val());
  
  $('.decrement-btn-4').click(function minusButton() {
    var $qtde = $(".counter-4");
    var b = $qtde.val();
    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $(".decrement-btn-4").attr("disabled", true);
    }
  });



  $('.increment-btn-5').click(function add() {
    var $qtde = $(".counter-5");
    var a = $qtde.val();
  
    a++;
    $(".decrement-btn-5").attr("disabled", !a);
    $qtde.val(a);
  });
  $(".decrement-btn-5").attr("disabled", !$(".counter-5").val());
  
  $('.decrement-btn-5').click(function minusButton() {
    var $qtde = $(".counter-5");
    var b = $qtde.val();
    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $(".decrement-btn-5").attr("disabled", true);
    }
  });



  $('.increment-btn-6').click(function add() {
    var $qtde = $(".counter-6");
    var a = $qtde.val();
  
    a++;
    $(".decrement-btn-6").attr("disabled", !a);
    $qtde.val(a);
  });
  $(".decrement-btn-6").attr("disabled", !$(".counter-6").val());
  
  $('.decrement-btn-6').click(function minusButton() {
    var $qtde = $(".counter-6");
    var b = $qtde.val();
    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $(".decrement-btn-6").attr("disabled", true);
    }
  });



  $('.increment-btn-7').click(function add() {
    var $qtde = $(".counter-7");
    var a = $qtde.val();
  
    a++;
    $(".decrement-btn-7").attr("disabled", !a);
    $qtde.val(a);
  });
  $(".decrement-btn-7").attr("disabled", !$(".counter-7").val());
  
  $('.decrement-btn-7').click(function minusButton() {
    var $qtde = $(".counter-7");
    var b = $qtde.val();
    if (b >= 1) {
      b--;
      $qtde.val(b);
    } else {
      $(".decrement-btn-7").attr("disabled", true);
    }
  });
});