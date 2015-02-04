$(document).ready(function() {

    $(document).keydown(function(key) {

        switch(parseInt(key.which,10)) {

      // Left Arrow Pressed
      case 37:
          $('#mario').animate({left: "-=15px"}, 'fast');
        break;    

      // Up Arrow Pressed
      case 38:
          $('#mario').animate({bottom: "+=15px"}, 'fast');
        break;
            
      // Right Arrow Pressed
      case 39:
          $('#mario').animate({left: "+=15px"}, 'fast');
        break;

      // Down Arrow Pressed
      case 40:
          $('#mario').animate({bottom: "-=15px"}, 'fast');
        break;

      // Space Bar Pressed
      case 32:
          $('#mario').animate({bottom: "+=150px"}, 'fast');
          $('#mario').animate({bottom: "-=150px"}, 'slow');
        break;
    }    

  });

    $('#mush').animate({right: "+=1100px"}, 10000)

});