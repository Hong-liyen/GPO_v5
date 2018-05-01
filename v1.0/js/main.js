/*---------------------------------------------------------------------------------
/*
/* Main JS
/*
-----------------------------------------------------------------------------------*/
(function ($) {
    "use strict";
    /*----------------------------------------------------*/
	/* Flexslider
	/*----------------------------------------------------*/
    /* Banner Text Slider*/
    $(window).load(function () {
        $('#home-slider').flexslider({
            namespace: "flex-",
            controlsContainer: "#home",
            selector: ".slides > li",
            controlNav: false,
            directionNav: false,
            animation: 'fade',
            smoothHeight: false,
            slideshowSpeed: 5000,
            animationSpeed: 600,
            randomize: false,
            touch: true,
            useCSS: true,
            direction: "horizontal",
            before: function (slider) {
                $(slider).find(".animated").each(function () {
                    $(this).removeAttr("class");
                });
            },
            start: function (slider) {
                $(slider).find(".flex-active-slide").find("h3").addClass("animated fadeInUp show").next("h3, #timeline-horizontal").addClass("animated fadeInUp show");
                $(window).trigger('resize');
            },
            after: function (slider) {
                $(slider).find(".flex-active-slide").find("h3").addClass("animated fadeInUp show").next("h3,#timeline-horizontal").addClass("animated fadeInUp show");
            }
        });
    });
    /* Calulation Step*/
    $(window).load(function () {
        $('#main-slider').flexslider({
            controlsContainer: '.flex-container #main-slider',
            animation: "slide",
            controlNav: true,
            directionNav: true,
            slideshowSpeed: 5000,
            animationSpeed: 600,
        });
        $('#secondary-slider').flexslider({
            controlsContainer: '.flex-container #secondary-slider',
            animation: "slide",
            controlNav: true,
            directionNav: true,
            slideshowSpeed: 5000,
            animationSpeed: 600,
        });
    });
    /*----------------------------------------------------*/
	/* Adjust Primary Navigation Background Opacity
	------------------------------------------------------*/
    $(window).on('scroll resize', function () {
        var h = $('header').height();
        var y = $(window).scrollTop();
        var header = $('#main-header');
    });
    /*----------------------------------------------------*/
	/* Highlight the current section in the navigation bar
	------------------------------------------------------*/
    //MENU SCROLLING WITH ACTIVE ITEM SELECTED
    // Cache selectors
    var lastId, topMenu = $(".nav-list"),
        topMenuHeight = topMenu.outerHeight() + 13, // All list items
        menuItems = topMenu.find("a"), // Anchors corresponding to menu items
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 15;
        jQuery('html, body').stop().animate({
            scrollTop: offsetTop
        }, 600);
        e.preventDefault();
    });
    // Bind to scroll
    jQuery(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;
        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop) {
                return this;
            }
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems.parent().removeClass("current").end().filter("[href=#" + id + "]").parent().addClass("current");
        }
        
        if (window.pageYOffset==0){
            $('#main-header').removeClass("topopaque");
            $('#right-go-top').removeClass("go-top-show");
        }else{
            $('#main-header').addClass("topopaque");
            $('#right-go-top').addClass("go-top-show");
        }
        
    });
    //button link to tab page
    jQuery('a[data-tab-destination]').on('click', function (a) {
        var tab = "#" + $(this).attr('data-tab-destination');
        jQuery('.z-tab a' + tab).click();
        a.preventDefault();
    });
    /*----------------------------------------------------*/
	/* Smooth Scrolling
	------------------------------------------------------ */
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash,
            $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });
    /*----------------------------------------------------*/
	/* FitText Settings
	------------------------------------------------------ */
    $(window).load(function () {
        $(".fittext1").fitText(2, {
            minFontSize: '25px',
            maxFontSize: '56px'
        });
        $(".fittext2").fitText(0.8, {
            minFontSize: '24px',
            maxFontSize: '40px'
        });
        $(".fittext3").fitText(1, {
            minFontSize: '16px',
            maxFontSize: '20px'
        });
    });
    /*----------------------------------------------------*/
	/* accordion.css  hide / show 
	------------------------------------------------------ */
    jQuery(document).ready(function () {
        function close_accordion_section() {
            jQuery('.accordion-section-title').removeClass('active');
            jQuery('.accordion-section-content').slideUp(300).removeClass('open');
        }
        jQuery('.accordion-section').click(function (e) {
            // Grab current anchor value
            var currentAttrValue = jQuery(this).index("accordion-section");
            if (jQuery(this).children('.accordion-section-title').is('.active')) {
                close_accordion_section();
            } else {
                close_accordion_section();
                // Add active class to section title
                jQuery(this).children('.accordion-section-title').addClass('active');
                // Open up the hidden content panel
                //jQuery('.accordion').eq(currentAttrValue).slideDown(300).addClass('open');
                //jQuery('.label').eq(currentAttrValue).slideDown(300).addClass('open');
                jQuery(this).eq(currentAttrValue).children('.accordion-section-content').slideDown(300).addClass('open');
            }

            e.preventDefault();

        });
    });
    /*----------------------------------------------------*/
	/* Support old ie border radius - PIE.js 
	------------------------------------------------------ */
    $(function () {
        if (window.PIE) {
            $('#home, .caption h3,.title-num, .title-text, .card-icon, #go-top, #go-top a ,#right-go-top,#right-go-top a').each(function () {
                PIE.attach(this);
            });
        }
    });
})(jQuery);