window.addEventListener('DOMContentLoaded', function(){
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
      delay: 5000,
    },

    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',

    },

  })


  $( function() {
    // var icons = {
    //   header: "ui-icon-circle-arrow-e",
    //   activeHeader: "ui-icon-circle-arrow-s"
    // };
    $( "#accordion" ).accordion({
      collapsible: true,
      icons: false,

    });
    $( "#toggle" ).button().on( "click", function() {
      if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
        $( "#accordion" ).accordion( "option", "icons", null );
      } else {
        $( "#accordion" ).accordion( "option", "icons", icons );
      }
    });
  });

})
