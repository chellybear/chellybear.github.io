var nav = $("ul.navbar-nav a"); 
var brand = $("navbar-brand");
var scroll_start = 0;
var changenav = $('#content');
var offset = changenav.offset();
var hoverImage = $("#portfolio img");

// make navbar transparent if @ intro, opaque if not
 $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top - 50) {
          // do this if we scroll past intro screen
          $(".navbar").css({"background-color": "#723D46"});                   
          // do this if we are at intro screen
       } else {
          $('.navbar').css("background-color", "transparent");
       }
   });

// handles scroll on intro page
$("#name").click(function(event) {
    $('html, body').animate({scrollTop: 0}, 800, "swing");
});
// handles scroll on clicking nav links
nav.click(function(event){
         event.preventDefault();
         // find our destination
         var dest = 0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest = $(document).height()-$(window).height();
         }else{
              dest = $(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,"swing");
     });

// on portfolio ss mouseover, display a message