

$(document).ready(function(){
    $(".carousel").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplayspeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows:true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              swipe: true,
              arrows: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              swipe: true,
              arrows: false
            },
          },

          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });
    $('.jst').on('click',function() {          //auto collapse nav bar when clicked link for mobile
      $('.navbar-collapse').collapse('hide');
    });

});