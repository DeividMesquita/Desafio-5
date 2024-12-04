$(document).ready(function () {
    // Abre o primeiro item do accordion ao carregar a página
    $('.accordion_box:first').addClass('active');
    $('.accordion_box:first').find('.acc_trigger button')
    $('.accordion_box:first').find('.acc_container').show();

    // Configura o comportamento do clique no accordion
    $('.acc_trigger').click(function () {
        const parentBox = $(this).closest('.accordion_box');
        const isActive = parentBox.hasClass('active');

        // Fecha todos os outros
        $('.accordion_box').removeClass('active');
        $('.acc_container').slideUp();

        // Abre o item clicado, se não estiver ativo
        if (!isActive) {
            parentBox.addClass('active');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
            parentBox.find('.acc_container').slideDown();
        }
    });
});