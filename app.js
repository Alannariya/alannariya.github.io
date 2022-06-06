$(function() {
    $("[data-scroll]").on("click", function (event){
        event.preventDefault();

        blockid = $(this).data('scroll');
        blockOffset = $(blockid).offset().top;
        

        $("html, body").animate({
            scrollTop: blockOffset - 50

        }, 700);
    });

    $("[data-modal]").on("click", function (event){
        event.preventDefault();

        $(modal_resume).addClass('show');

    });

    $(modal_resume).on("click", function(){
        $(modal_resume).removeClass('show');
    });


});

