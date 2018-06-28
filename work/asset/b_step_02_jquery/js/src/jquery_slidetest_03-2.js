// 0628jquery_slidetest_03-2.js

(function($){
	// 변수선언
	var topBtn  = $('.top_btn');
	var headBox = $ ('#headBox');
	// headBox 떨어진 양계산
	var headOffset = headBox.offset().top;


	// step1 화면 스크롤 (300px이상 움직였을 경우) top버튼이 나타나게
		$(window).on('scroll', function(){
			var winTop = $(window).scrollTop();
			console.log(winTop);
			// 300이상인지 파악
			// if(winTop > 300){ topBtn.show(); }else{ topBtn.hide(); }
			//삼항연산자->  (조건) ? 참인 경우 실행 : 거짓인 경우 실행
			(winTop > 300) ? topBtn.show() : topBtn.hide();
		});	


	// step2 화면 스크롤시 header 상단에 고정
	$(window).on('scroll',function() {
		var winTop = $(window).scrollTop();
		if(winTop >= headOffset){
			// 상단에 고정
			headBox.css({position:'fixed', top:0});
		}else{
			// 고정값에서 풀어주어라
			// headBox.css({position:'absolute', top:'2rem'});
			headBox.removeAttr('style');
		}
	});




})(jQuery);