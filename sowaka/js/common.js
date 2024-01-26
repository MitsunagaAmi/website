window.addEventListener("load", function(){

  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const area  = document.querySelector("main");
  const wrap  = document.querySelector(".main_wrap");
  const items = document.querySelectorAll(".main_cntnt");
  const num   = items.length;
  const wrapperWidth = wrap.offsetWidth;

  //横幅を指定
  // gsap.set(wrap,  { width: num * 100 + "%" });
  // gsap.set(items, { width: 100 / num + "%" });

  gsap.to(items, {
    xPercent: -100 * ( num - 1 ), //x方向に移動させる
    ease: "none",
    scrollTrigger: {
      trigger: wrap, //トリガー
      start: "top top", //開始位置
      end: "+="+wrapperWidth, //終了位置
      pin: true, //ピン留め
      scrub: true, //スクロール量に応じて動かす
    }
  });
});


// loading
setTimeout(function() { $('#loading').fadeOut(600); }, 2300);
//----header-----//
$(function() {
	$(window).on('load scroll', function() {
		var scrollPos = $(this).scrollTop();
		if ( scrollPos > 100 ) {
			$('header').addClass('h-small');
		} else {
			$('header').removeClass('h-small');
		}
	});
});

$('.g_menu_btn').on('click',function(){
	$(this).toggleClass('active');
	$('.g_nav').toggleClass('active');
});

$('.menu_link').on('click',function(){
	$('.g_nav').toggleClass('active');
});

// scroll-animation

// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime(){

  $('.bgRLextendTrigger').each(function(){ //bgRLextendTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgRLextend');// 画面内に入ったらbgRLextendというクラス名を追記
    }else{
      $(this).removeClass('bgRLextend');// 画面外に出たらbgRLextendというクラス名を外す
    }
  });
   // 文字列を囲う子要素
  $('.bgappearTrigger').each(function(){ //bgappearTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
    }else{
      $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
    }
  });
}
$(window).on('load', function(){
   BgFadeAnime();
 });

// profile
$('.btn_01').on('click',function(){
    $(this).addClass('active');
    $('.img_01,.text_01').addClass('active');
    $('.btn_02,.btn_03,.btn_04,.btn_05,.btn_06,.img_02,.img_03,.img_04,.img_05,.img_06,.text_02,.text_03,.text_04,.text_05,.text_06').removeClass('active');
  });
  $('.btn_02').on('click',function(){
      $(this).addClass('active');
      $('.img_02,.text_02').addClass('active');
      $('.btn_01,.btn_03,.btn_04,.btn_05,.btn_06,.img_01,.img_03,.img_04,.img_05,.img_06,.text_01,.text_03,.text_04,.text_05,.text_06').removeClass('active');
    });
    $('.btn_03').on('click',function(){
        $(this).addClass('active');
        $('.img_03,.text_03').addClass('active');
        $('.btn_02,.btn_01,.btn_04,.btn_05,.btn_06,.img_02,.img_01,.img_04,.img_05,.img_06,.text_02,.text_01,.text_04,.text_05,.text_06').removeClass('active');
      });
      $('.btn_04').on('click',function(){
          $(this).addClass('active');
          $('.img_04,.text_04').addClass('active');
          $('.btn_02,.btn_03,.btn_01,.btn_05,.btn_06,.img_02,.img_03,.img_01,.img_05,.img_06,.text_02,.text_03,.text_01,.text_05,.text_06').removeClass('active');
        });
        $('.btn_05').on('click',function(){
            $(this).addClass('active');
            $('.img_05,.text_05').addClass('active');
            $('.btn_02,.btn_03,.btn_04,.btn_01,.btn_06,.img_02,.img_03,.img_04,.img_01,.img_06,.text_02,.text_03,.text_04,.text_01,.text_06').removeClass('active');
          });
          $('.btn_06').on('click',function(){
              $(this).addClass('active');
              $('.img_06,.text_06').addClass('active');
              $('.btn_02,.btn_03,.btn_04,.btn_01,.btn_05,.img_02,.img_03,.img_04,.img_01,.img_05,.text_02,.text_03,.text_04,.text_01,.text_05').removeClass('active');
            });

// news_list
$('.news_btn_01').on('click',function(){
    $(this).addClass('active');
    $('.contents_01').addClass('active');
    $('.contents_02,.contents_03,.news_btn_02,.news_btn_03').removeClass('active');
  });
  $('.news_btn_02').on('click',function(){
      $(this).addClass('active');
      $('.contents_02').addClass('active');
      $('.contents_01,.contents_03,.news_btn_01,.news_btn_03').removeClass('active');
    });
    $('.news_btn_03').on('click',function(){
        $(this).addClass('active');
        $('.contents_03').addClass('active');
        $('.contents_01,.contents_02,.news_btn_01,.news_btn_02').removeClass('active');
      });

// 年表リストアコーディオン

$(function(){
  //.accordion_oneの中の.accordion_headerがクリックされたら
  $('.s_10 .accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerの横幅を開いたり閉じたりする。
    $(this).next().animate({width:'toggle'});
    $(this).toggleClass("open");
    //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
    $('.s_10 .accordion_one .accordion_header').not($(this)).next().animate({width:'hide'});
    $('.s_10 .accordion_one .accordion_header').not($(this)).removeClass("open");
    $('.s_10 .accordion_one .accordion_header.stay').not($(this)).toggleClass("open");
  });
});


//---------top-scroll----------//
$(function(){
	 $('a[href^="#"]').click(function() {
		 var href= $(this).attr("href");
		 var target = $(href == "#" || href == "" ? 'html' : href);
     var scrollY = 0;
     var stageW = 5 + $(window).width() + ($(window).width() - $(window).height() * 0.9) / 2;

     if($(this).hasClass("nav_01")) {
       scrollY = stageW + 100;
     } else if($(this).hasClass("nav_02")) {
       scrollY = stageW * 2;
     } else if($(this).hasClass("nav_03")) {
       scrollY = stageW * 3;
     } else if($(this).hasClass("nav_04")) {
       scrollY = stageW * 4;
     } else if($(this).hasClass("nav_05")) {
       scrollY = stageW * 5;
     } else if($(this).hasClass("nav_06")) {
       scrollY = stageW * 6;
     } else if($(this).hasClass("nav_07")) {
       scrollY = stageW * 7;
     }
     gsap.to(window, {scrollTo: {y:scrollY, offsetY:0}, duration:0.4, ease:"none"});
		 return false;
	 });
 });

 //---------top-scroll-btn----------//
 $(window).on("scroll",function(){
	 scrollHeight = $(document).height();
	 scrollPosition = $(window).height() + $(window).scrollTop();
	 footerHeight = $("footer").innerHeight();
	 if(scrollHeight - scrollPosition <= footerHeight){
		 $(".top-scroll").css({
			 "position":"absolute",
			 "bottom":footerHeight
		 });
	 }else{
		 $(".top-scroll").css({
			 "position":"fixed",
			 "bottom":"0"
		 });
	 }
 });



//---------animation---------//
$(function(){
	$(window).scroll(function (){
		$('.anime1-1,.anime1-2').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 250){
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		});
	});
});
$(function(){
	$(window).scroll(function (){
		$('.anime1-1,.anime1-2').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 900){
				$(this).addClass('after');
			}else{
				$(this).removeClass('after');
			}
		});
	});
});

$(function(){
	$(window).scroll(function (){
		$('.anime1-1sp,.anime1-2sp').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 600){
				$(this).addClass('active');
			}else{
				$(this).removeClass('active');
			}
		});
	});
});
$(function(){
	$(window).scroll(function (){
		$('.anime1-1sp,.anime1-2sp').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 1600){
				$(this).addClass('after');
			}else{
				$(this).removeClass('after');
			}
		});
	});
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(function(){
	$(window).scroll(function (){
		$('.scrollin_custom_anm').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}else{
				$(this).removeClass('scrollin');
			}
		});
	});
});

$(function(){
	$(window).scroll(function (){
		$('.scrollin_anime_00,.scrollin_anime_01,.scrollin_anime_02,.scrollin_anime_03').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}else{
				$(this).removeClass('scrollin');
			}
		});
	});
});



$(function(){
	$(window).scroll(function (){
		$('.anime0,.anime1,.anime2,.anime3,.anime4,.anime5,.anime6,.anime7,.anime8,.anime9,.anime10,.anime11,.anime12,.anime13,.anime14,.anime15,.anime16,.anime17').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}else{
				$(this).removeClass('scrollin');
			}
		});
	});
});

$(function(){
	$(window).scroll(function (){
		$('.anime1_0,.anime1_1,.anime1_2,.anime1_3,.anime1_4,.anime1_5,.anime1_6,.anime1_8,.anime1_9,.anime1_10,.anime1_11,.anime1_12,.anime1_13,.anime1_14,.anime1_15,.anime1_16,.anime1_17,.anime1_18').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}else{
				$(this).removeClass('scrollin');
			}
		});
	});
});

$(function(){
	$(window).scroll(function (){
		$('.anime1_7').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}/*else{
				$(this).removeClass('scrollin');
			}*/
		});
	});
});

$(function(){
	$(window).scroll(function (){
		$('.anime2_0,.anime2_1,.anime2_2,.anime2_3,.anime2_4,.anime2_5,.anime2_6,.anime2_7,.anime2_8,.anime2_9,.anime2_10,.anime2_11,.anime2_12,.anime2_13,.anime2_14,.anime2_15,.anime2_16,.anime2_17,.anime2_18').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}/*else{
				$(this).removeClass('scrollin');
			}*/
		});
	});
});
