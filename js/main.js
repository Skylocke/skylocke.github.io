$(document).ready(function () {

    $(window).bind('scroll', function () {
        var vPos = $(window).scrollTop();
        var totalH = $('#nav').offset().top;
        var finalSize = totalH - vPos;

        // console.log(finalSize);

        if (finalSize <= 0) {
            $('.navbar').css({
                'position': 'fixed',
                    'top': 0
            })
        } else {
            $('.navbar').css({
                'position': 'static'
            })
        }
    });

    // $(".navbar-link").forEach(function(element) {
    //   element.on("click", function(event) {
    //     scrollTo(event.target.attr("href"));
    //   })
    // })
    //
    // function scrollTo(elementId) {
    //     $('html, body').animate({
    //         scrollTop: $(elementId).offset().top
    //     }, 1000);
    // }


});
