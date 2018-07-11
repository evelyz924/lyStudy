// 0710monfee_index_test_result.js

(function($) {
	// headBox 스크롤 처리시 상단 고정
	var headBox = $('.head_box_wrap');
	var beforeTop = headBox.offset().top;

	$(window).on('scroll',function(e) {
		console.log( $(window).scrollTop() );
		var nowTop = $(window).scrollTop() ;

		if(beforeTop <= nowTop){
			headBox.css({positionin:'fixed', top:0, bottom:'auto'});
		}else{
			headBox.removeAttr('style');
		}

	});




})(jQuery);