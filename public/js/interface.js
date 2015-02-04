$(document).ready(function() {

    $(document).keydown(function(key) {

        switch(parseInt(key.which,10)) {

      // Left Arrow Pressed
      case 37:
          $('#mario').animate({left: "-=15px"}, '1000');
        break;    

      // Up Arrow Pressed
      case 38:
          $('#mario').animate({bottom: "+=15px"}, '1000');
        break;
            
      // Right Arrow Pressed
      case 39:
          $('#mario').animate({left: "+=15px"}, '1000');
        break;

      // Down Arrow Pressed
      case 40:
          $('#mario').animate({bottom: "-=15px"}, '1000');
        break;

      // Space Bar Pressed
      case 32:
          $('#mario').animate({bottom: "+=100px"}, '1000');
          $('#mario').animate({bottom: "-=100px"}, '1000');
        break;
    }    

  });

});