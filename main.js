const enterBtn = document.getElementById("enterBtn");
const splash = document.getElementById("splash");
const splashVideo = document.getElementById("splashVideo");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("mainContent");
const video = document.getElementById("myVideo");

mainContent.style.display = 'none';

// NORMAL START--------------------------------------------------------------
enterBtn.addEventListener("click", () => {
    // Nascondi il bottone e il testo
   overlay.style.display = "none";
    // Avvia il video
    splashVideo.play();
});

// Quando il video finisce
splashVideo.addEventListener("ended", () => {
    splash.style.transition = "opacity 1s";
    splash.style.opacity = 0;

    // Rimuovi splash dopo dissolvenza
    setTimeout(() => {
        splash.style.display = "none";
        document.body.style.overflow = "auto"; // Riattiva lo scroll
        mainContent.style.display = "block";
   }, 1000);
    video.play(); // fai partire il video
    document.getElementById('all-start').click();
});
//--------------------------------------------------------------------------



// FAST START------------------------------
//enterBtn.addEventListener("click", () => {
//    // Nascondi il bottone e il testo
//   overlay.style.display = "none";
//   splash.style.transition = "opacity 1s";
//   splash.style.opacity = 0;
//    setTimeout(() => {
//        splash.style.display = "none";
//        document.body.style.overflow = "auto"; // Riattiva lo scroll
//        mainContent.style.display = "block";
//    }, 1000);
//    video.play();
//    document.getElementById('all-start').click();
//});
//-----------------------------------------


; (function () {

    'use strict';

    var carousels = function () {
        jQuery(".owl-carousel1").owlCarousel(
            {
              loop:true,
              center: true,
              margin:0,
              responsiveClass:true,
              nav:false,
              responsive:{
                  0:{
                      items:1,
                      nav:false
                  },
                  600:{
                      items:1,
                      nav:false
                  },
                  1000:{
                      items:1,
                      nav:true,
                      loop:false
                  }
              }
          }
          );
        
          jQuery(".owl-carousel2").owlCarousel(
            {
              loop:true,
              center: true,
              margin:30,
              responsiveClass:true,
              nav:true,
              responsive:{
                  0:{
                      items:1,
                      nav:true
                  },
                  600:{
                      items:2,
                      nav:true,
                      margin:10,
                      center: false,
                  },
                  1000:{
                      items:3,
                      nav:true,
                      loop:true
                  }
              }
          }
          );
    }


    var isotope = function () {
        var $container = $('.AnteprimaContainer');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.AnteprimaFilter a').click(function () {
            $('.AnteprimaFilter .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        }); 
    };

    var navbar = function () {
        $(window).scroll(function () {
            $("nav.navbar").offset().top > -70 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
        }),
        $(function () {
            $("a.page-scroll").bind("click", function (a) { var o = $(this); $("html, body").stop().animate({ scrollTop: $(o.attr("href")).offset().top - 58 }, 1e3), a.preventDefault()
        })
        });
    };

    (function ($) {
        carousels();
        isotope();
        navbar();
    })(jQuery);


}());

  video.addEventListener('ended', () => {
    // Crea un elemento immagine
    const img = document.createElement('img');
    img.src = 'images/tile-starwars.jpg';  // Sostituisci con il percorso
    img.style.width = '100%';
    img.class = 'd-block w-100 home-bg';
    img.alt='home-bg';
    
    // Sostituisci il video con l'immagine
    video.parentNode.replaceChild(img, video);
  });

  // Funzione per ottenere i parametri da URL
    function getParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Recupera nome e cognome
    const nome = getParam('nome');
    const cognome = getParam('cognome');

    // Se presenti, mostrali nell'elemento con id userName
    if (nome && cognome) {
        const userNameElement = document.getElementById('userName');
        userNameElement.textContent = `${nome} ${cognome}`;
    }