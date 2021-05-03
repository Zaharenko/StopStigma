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
      lazyLoad: 'ondemand',
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

    $('.fade-one-news').slick({
      lazyLoad: 'ondemand',
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      fade: true,
      cssEase: 'ease-out'
    });

    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      image: {
        verticalFit: false
      }
    });

    $('.partner').hover(
      function() {
        $( this ).addClass('active-partner');
      }, function() {
        $( this ).removeClass('active-partner');
      }
    );

});  

  /* Yandex Map */
  ymaps.ready(function () {
      var myMap = new ymaps.Map('map-block', {
        center: [53.931180, 27.610053],
        zoom: 16,
        controls: ['zoomControl']
      }, {
        searchControlProvider: 'yandex#search'
      }),

      myPlacemark = new ymaps.Placemark([
        53.931180, 27.610053
      ], {
        hintContent: 'Контакты',
        balloonContent: 'Адрес'
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://zaharenko.github.io/StopStigma/app/img/logo/logo.png',
        iconImageSize: [100, 100],
        iconImageOffset: [-75, -100]

          }),


          myPlacemarkWithContent = new ymaps.Placemark([37.42926641, 55.82461132], {
              hintContent: 'тест',
              balloonContent: 'привет',
              iconContent: '12'
          }, {});

      myMap.geoObjects
          .add(myPlacemark)
      myMap.behaviors.disable('scrollZoom');
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          myMap.behaviors.disable('drag');
      }
  });





