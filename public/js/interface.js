$(document).ready(function() {

    $(document).keydown(function(key) {

        switch(parseInt(key.which,10)) {

      // Left Arrow Pressed
      case 37:
          $('#mario').animate({left: "-=15px"}, 80);
        break;    

      // Up Arrow Pressed
      case 38:
          $('#mario').animate({bottom: "+=15px"}, 80);
        break;
            
      // Right Arrow Pressed
      case 39:
          $('#mario').animate({left: "+=15px"}, 80);
        break;

      // Down Arrow Pressed
      case 40:
          $('#mario').animate({bottom: "-=15px"}, 80);
        break;

      // Space Bar Pressed
      case 32:
          $('#mario').animate({bottom: "+=150px"}, 250);
          $('#mario').animate({bottom: "-=150px"}, 250);
        break;
    }    

  });

    setInterval(function() {
      $('#mush').animate({right: "+=1100px"}, 10000)
      $('#mush').animate({right: "-=1100px"}, 10000)
    }, 500);

    setInterval(function() {
      $('#bird').animate({left: "+=1100px"}, 15000)
      $('#bird').animate({left: "-=1100px"}, 15000)
    }, 500);

});