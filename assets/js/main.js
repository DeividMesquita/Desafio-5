$(document).ready(function () {

    //ACCORDION


    // Abre o primeiro item do accordion ao carregar a página
    $('.accordion_box:first').addClass('active');
    $('.accordion_box:first').find('.acc_trigger img').addClass('rotated');
    $('.accordion_box:first').find('.acc_container').show();

    // Configura o comportamento do clique no accordion
    $('.acc_trigger').click(function () {
        const parentBox = $(this).closest('.accordion_box');
        const isActive = parentBox.hasClass('active');
        const $trigger = $(this);
        const $img = $trigger.find("img");
        const $container = $trigger.next(".acc_container");

        // Fecha todos os outros
        $('.accordion_box').removeClass('active');
        $('.acc_container').slideUp();
        $('.acc_trigger img').removeClass('rotated'); // Reseta todas as setas

        // Abre o item clicado, se não estiver ativo
        if (!isActive) {
            parentBox.addClass('active');
            $img.addClass('rotated'); // Gira a seta apenas no item clicado
            $container.slideDown();
        }
    });

    //CAROUSEL

    // Carrossel do Destaque
    $('#destaque').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        center: true,
        touchDrag: false,
        mouseDrag: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        vertical: true
    });

    // Sincronizar dots com clique
    $('.c-destaque__dots button').click(function () {
        const index = $(this).data('slide');
        $('#destaque').trigger('to.owl.carousel', [index, 300]);
        $('.c-destaque__dots button').removeClass('active');
        $(this).addClass('active');
    });

    // Sincronizar dots automaticamente com a troca do slide
    $('#destaque').on('changed.owl.carousel', function (event) {
        const currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        const totalItems = event.item.count;

        // Corrigir índice para o loop
        const normalizedIndex = (currentIndex < 0) ? totalItems - 1 : currentIndex % totalItems;

        $('.c-destaque__dots button').removeClass('active');
        $('.c-destaque__dots button').eq(normalizedIndex).addClass('active');
    });

    // Inicializar o Owl Carousel
    const owl = $('.owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        margin: 20,
        center: false,
        autoWidth: true,
        nav: false,
        dots: false,
        startPosition: 0,
        slideTransition: 'ease-in',
        responsive: {
            0: {
                items: 3,

            },
            600: {
                items: 4,
            },
            1000: {
                items: 12
            }
        }
    });


});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const offcanvasMenu = document.getElementById("offcanvas-menu");
  
    // Abrir o menu
    menuToggle.addEventListener("click", () => {
      offcanvasMenu.classList.add("active");
    });
  
    // Fechar o menu
    menuClose.addEventListener("click", () => {
      offcanvasMenu.classList.remove("active");
    });
  });
  
//FANCYBOX//

Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: {
        display: ["close"],
    },
    Thumbs: {
        autoStart: false, // Inicia os thumbnails automaticamente
    },
    captions: true, // Exibe as legendas da imagem
});

const carousel = document.querySelector('#carouselExample');
const dots = document.querySelectorAll('.carousel-dots button');

carousel.addEventListener('slid.bs.carousel', function (event) {
    const activeIndex = event.to; // Índice do slide ativo
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex); // Ativa o dot correspondente
    });
});