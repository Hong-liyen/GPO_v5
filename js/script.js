$(function() {
    $('a.scroll[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

$(document).ready(function () {
    var navbar = $('.navbar');
    var navHeight = navbar.height();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= navHeight) {
            navbar.addClass('navbar-color');
        } else {
            navbar.removeClass('navbar-color');
        }
    });
    var agent = navigator.userAgent.toLowerCase();
    if (agent.match("android") || agent.match("iphone") || agent.match("ipad")) { } else {
        nice = $("html").niceScroll({ scrollspeed: 51, mousescrollstep: 45, cursorwidth: "5px", cursorcolor: "#222", cursorborder: "0px solid #fff" });
    };
    $('.navbar').load('common.html .container');
    $('footer').load('common.html footer');
    //$('#alertbox .alertcontent').load('common.html .alertcontent');
});

$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
    });

    $('.toTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
$('.navbar').removeClass('wow');
new WOW().init();

function addCookie(sName,sValue,day) {
    var expireDate = null;
    if(day){
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate()+day);
    }
    document.cookie = sName + "=" +escape(sValue) + ((expireDate == null) ?
            "" : ";expires=" + expireDate.toGMTString())+";path=/";
}

function getCookies(name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
    }
    return null;
} 