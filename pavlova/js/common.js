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
	return false;
});

$('.menu_list a[href^="#"]').on('click', function() {
	 $('.g_menu_btn').click();
 });
//---------top-scroll----------//
$(function(){
	 $('a[href^="#"]').click(function() {
		 var speed = 400;
		 var href= $(this).attr("href");
		 var target = $(href == "#" || href == "" ? 'html' : href);
		 var position = target.offset().top;
		 $('body,html').animate({scrollTop:position}, speed, 'swing');
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
