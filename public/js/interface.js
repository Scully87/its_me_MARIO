$(document).ready(function() {

    $(document).keydown(function(key) {

        switch(parseInt(key.which,10)) {

          // Left Arrow Pressed
          case 37:
              $('#mario').animate({left: "-=10px"}, 10);
            break;

          // Up Arrow Pressed
          case 38:
              $('#mario').animate({bottom: "+=10px"}, 10);
            break;
                
          // Right Arrow Pressed
          case 39:
              $('#mario').animate({left: "+=10px"}, 10);
            break;

          // Down Arrow Pressed
          case 40:
              $('#mario').animate({bottom: "-=10px"}, 10);
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
      $('#bird-upper').animate({left: "+=1100px"}, 15000)
      $('#bird-upper').animate({left: "-=1100px"}, 15000)
      $('#bird-lower').animate({right: "+=1100px"}, 25000)
      $('#bird-lower').animate({right: "-=1100px"}, 25000)
    }, 100);   

});