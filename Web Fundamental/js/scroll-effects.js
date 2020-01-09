$(document).ready(function(){
    // skill bar animation
    function skillbarAnim() {
        $('.skill-bar-container').each(function(){
            $(this).find('.skill-bar').animate({
                width: $(this).attr('data-percent')
            },3000);
        });
    }

    // scroll button
    $('.intro-btn').click(function(e){
        $('#about').animate({
            opacity: 1
        }, 1000);

        $('html, body').animate({
            scrollTop: $('#about').offset().top - 200
        }, 1000);
    });

    $('.about-btn').click(function(e){
        $('#skill').animate({
            opacity: 1
        }, 1000);

        $('html, body').animate({
            scrollTop: $('#skill').offset().top - 200
        }, 1000);

        skillbarAnim();
    });

    $('.btn-footer').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


    // scroll down
    $(window).scroll(function(){
        $('.scroll-content').each(function(){
            elementHeight = $(this).offset().top + (1 * $(this).height());
            windowsBot = $(window).scrollTop() + $(window).height();

            if (elementHeight < windowsBot){
                $(this).animate({
                    opacity: 1
                }, 1000, function(){
                    if($('#skill').css('opacity') == 1){
                        skillbarAnim();
                    }
                });
            }
        })
    });
});