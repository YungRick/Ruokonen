$(document).ready(function(){
  $('.enterbutton').mouseenter(function(){
    $(this).fadeTo('slow', 0.75);		
  });
  $('.enterbutton').mouseleave(function(){
	  $(this).fadeTo('slow', 1);	
  });
   
});  