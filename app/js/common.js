$(document).ready(function () {

  // Menu 
  if($(window).width() <= 1024)
    {
      // Active mobile menu
      $(".btn-sidebar .btn-icon2").click(function(e) {
        e.preventDefault();
        $("body").addClass('overflow-hidden');
        $(".sidebar").css("border-bottom", "none");
        $(".sidebar .dropdown-menu").addClass('dropdown-menu-active');
        $(".sidebar .btn-icon1").css("display", "inline-block");
        $(".sidebar .btn-icon2").css("display", "none");
      });
      $(".btn-sidebar .btn-icon1").click(function(e) {
        e.preventDefault();
        $("body").removeClass('overflow-hidden');
        $(".sidebar .dropdown-menu").removeClass('dropdown-menu-active');
        $(".sidebar .btn-icon1").css("display", "none");
        $(".sidebar .btn-icon2").css("display", "inline-block");
      });
    } else {
      // Active desktop menu
      $(".btn-sidebar .btn-icon1").click(function(e) {
        e.preventDefault();
        $(".sidebar").addClass('sidebar-close');
        $(".mini-sidebar").addClass('mini-sidebar-active');
        $(".sidebar-close .btn-icon1").css("display", "none");
        $(".sidebar-close .btn-icon2").css("display", "inline-block");
        $(".content").addClass('max-width');
        $("footer").addClass('max-width');
      });

      $(".btn-sidebar .btn-icon2").click(function(e) {
        e.preventDefault();
        $(".sidebar").removeClass('sidebar-close');
        $(".mini-sidebar").removeClass('mini-sidebar-active');
        $(".sidebar .btn-icon1").css("display", "inline-block");
        $(".sidebar .btn-icon2").css("display", "none");
        $(".content").removeClass('max-width');
        $("footer").addClass('max-width');
      })

      $(".btn-icon-search").click(function(e) {
        e.preventDefault();
        $(".sidebar").removeClass('sidebar-close');
        $(".mini-sidebar").removeClass('mini-sidebar-active');
        $(".sidebar .btn-icon1").css("display", "inline-block");
        $(".sidebar .btn-icon2").css("display", "none");
        $(".content").removeClass('max-width');
        $("footer").addClass('max-width');
        $(".search-form input").focus();
      })
    }

    // Auto Height
    // const imageheight = $(".image-block-left").height();
    // const infoheight = $(".info-block-right").height();
    // if (imageheight >= infoheight) {    
    //     $(".info-block-right").css("height",""+ imageheight +"px");
    //   }
    // else {       
    // }

    // Partners Slider
    $('.partners-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1240,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

});  




