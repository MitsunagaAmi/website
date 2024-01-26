var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function() {
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 300) {
        $('.site_header').addClass('hide');
    } else {
        $('.site_header').removeClass('hide');
    }
    startPos = winScrollTop;
});

$(function() {
    $('.news_open_01').click(function() {
    $('.span_01').toggleClass('active');
    });
    $('.news_open_02').click(function() {
        $('.span_02').toggleClass('active');
    });
    $('.news_open_03').click(function() {
    $('.span_03').toggleClass('active');
    });
    $('.toggle').click(function() {
        $('.toggle_01').toggleClass('active');
    });
    $('.toggle').click(function() {
        $('.toggle_02').toggleClass('active');
    });
    $('.toggle').click(function() {
        $('.toggle_03').toggleClass('active');
    });
    $('.toggle').click(function() {
        $('.menu').toggleClass('active');
    });
    $('.info_list_sp').click(function() {
        $('.info_list_side').toggleClass('active');
    });
    $('.back').click(function() {
        $('.info_list_side').removeClass('active');
    });
});

    let client_h = document.getElementById('client_h').clientHeight;

    $('.news_open_01').on('click', function(){
    $(this).toggleClass('open');
    $('.news_01').toggleClass('open');

    if ($('.news_01').hasClass('open')) {
        $('.news_01').css({
        'height':client_h
        });
    }else {
        $('.news_01').css({
        'height':"0"
        });
    };
    });

    $('.news_open_02').on('click', function(){
    $(this).toggleClass('open');
    $('.news_02').toggleClass('open');

    if ($('.news_02').hasClass('open')) {
        $('.news_02').css({
        'height':client_h
        });
    }else {
        $('.news_02').css({
        'height':"0"
        });
    };
    });

    $('.news_open_03').on('click', function(){
    $(this).toggleClass('open');
    $('.news_03').toggleClass('open');

    if ($('.news_03').hasClass('open')) {
        $('.news_03').css({
        'height':client_h
        });
    }else {
        $('.news_03').css({
        'height':"0"
        });
    };
    });