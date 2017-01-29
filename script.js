$(document).ready(function(){
  $('.enterbutton').mouseenter(function(){
    $(this).fadeTo('slow', 0.75);		
  });
  $('.enterbutton').mouseleave(function(){
	  $(this).fadeTo('slow', 1);	
  });
	
	/*var lastScrollTop = 0;
	$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       $(".backbutton").fadeOut("slow");
			 $(".backbutton").hide();
   } else {
		 $(".backbutton").hide();
      $(".backbutton").fadeIn("slow");
   }
   lastScrollTop = st;
});

*/
   
});  