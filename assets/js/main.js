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

    // Inicializar o Owl Carousel
    const owl = $('.owl-carousel').owlCarousel({
        items: 12,
        loop: false,
        margin: 20,
        center: false,
        autoWidth: true,
        nav: false,
        dots: false,
        startPosition: 1,
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



//FANCYBOX//

new Carousel(document.getElementById("myCarousel"), {
    Autoplay: {
        timeout: 2000
    }
}, {
    Autoplay
});
