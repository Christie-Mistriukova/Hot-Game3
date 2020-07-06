new WOW({ mobile: false }).init();


jQuery(document).ready(function($) {
    $('#lightSlider').lightSlider({
        item: 1,
        keyPress: true,
        auto: true,
        pause: 3000,
        controls: false,
        adaptiveHeight: true,
        loop: true,
        pauseOnHover: true,
        slideMargin: 0,
        onSliderLoad: () => {
            $('#lightSlider').parent('.lSSlideWrapper').parent().find('.lSPager').find('li:first').find('a').addClass("active--button");
            $('#lightSlider').parent('.lSSlideWrapper').parent().find('.lSPager').find('li:first').next().find('a').addClass("prev--next--button");
            $('#lightSlider').parent('.lSSlideWrapper').parent().find('.lSPager').find('li:first').next().next().find('a').addClass("prev--next--button2")
        },
        onAfterSlide: () => {
            $('#lightSlider').parent('.lSSlideWrapper').parent().find('.lSPager').find('li').find('a').removeClass();
            let slide = $('#lightSlider').parent('.lSSlideWrapper');
            let cSouter = slide.parent();
            let pager_active = cSouter.find('.lSPager').find('li.active');
            pager_active.find('a').addClass('active--button');      
            pager_active.next().find('a').addClass('prev--next--button');          
            pager_active.next().next().find('a').addClass('prev--next--button2');
            pager_active.prev().find('a').addClass('prev--next--button');          
            pager_active.prev().prev().find('a').addClass('prev--next--button2');
        }
    });

    $('#lightSlider2').lightSlider({
        autoWidth: true,   
        item: 4,
        keyPress: true,
        auto: true,
        pause: 5000,
        controls: false,
        adaptiveHeight: true,
        loop: true,
        slideMargin: 20,
        keyPress: false,
        pager: false,
        pauseOnHover: true,        
    });

    $('#postSlider ul').lightSlider({
        item: 1,
        pause: 5000,
        controls: false,
        loop: true,
        pager: true,
        pauseOnHover: true, 
        slideMargin: 0       
    });

    $('.bgWrapper header nav ul.headerMenu li.enterButton a').click(function() {
        $( '.bgEnter:hidden' ).fadeIn('slow');
        $(document).mouseup(function (e) { 
            let div = $('.popup'); 
            if (!div.is(e.target) 
                && div.has(e.target).length === 0) { 
                $( '.bgEnter' ).fadeOut('slow');
            }
        });
    });

    $('.closePopup').click( function() {
        $( '.bgEnter' ).fadeOut('slow');
    });

    $('.toggle').click(function() {
        $( '.bgWrapper header nav ul.headerMenu' ).fadeToggle(400);
    });

    $('.bgWrapper header nav .searchButton, .mobileSearch').on('click', function(e){   
        $( '.searchLineButton').fadeIn(100);
        e.preventDefault();
        e.stopPropagation();
    });



    $('.searchClose').bind( "click", function(e) {
        $( '.searchLineButton' ).fadeOut(100);
        e.preventDefault();
        e.stopPropagation();
    });

    $('.topText--news .text a, .bgWrapper main .sliderCalendar--block .myslide h1').text(function(i, text) {
        if (text.length >= 60) {
            text = text.substring(0, 45);
            let lastIndex = text.lastIndexOf(" ");       
            text = text.substring(0, lastIndex) + '...';
        }
        $(this).text(text);
    });
    $('.spoiler').click(function(e) {
        $( '.mainInfo, .bgWrapper main .blockWrapper .game-img' ).slideToggle();
        e.preventDefault();
        $('.spoiler').toggleClass('spoilerAnimation');
    });
    
});





