// 0628jquery_slidetest_03-2.js

(function($){
	// 변수선언
	var topBtn = $('.top_btn');




	// step1 화면 스크롤 (300px이상 움직였을 경우) top버튼이 나타나게
		$(window).on('scroll', function(){
			var winTop = $(window).scrollTop();
			console.log(winTop);
			// 300이상인지 파악
			if(winTop > 300){
				topBtn.show();
			}else{
				topBtn.hide();
			}
		});	



	// step2 화면 스크롤시 header 상단에 고정





})(jQuery);