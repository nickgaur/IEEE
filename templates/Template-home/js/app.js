// CLOSE BUTTON
$(".menu-icon").click(function(){
  $(this).css("display","none");
    $(".close").css("display","block");
});

$(".close").click(function(){
  $(this).css("display", "none");
  $(".menu-icon").css("display", "block");
});