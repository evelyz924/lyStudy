// 0710monfee_index_test_result_adBox_slide.js

(function($) {
	var adBox = $('#adBox');

	var indi = adBox.find('.indicator');
	var indiLi = indi.children('li');
	var indiliLength = indiLi.length;

	var slideBtn = adBox.find('.slide_btn');
	var prev = slideBtn.children('.prev_btn')[0];
	var next = slideBtn.children('.next_btn')[0];

	var banner = $('.slide_banner').children('ul');

	var i = 0;

	var Que = function(i){
		indiLi.eq(i).addClass('select');
		indiLi.eq(i).siblings(indiLi).removeClass('select');
	}

	// indicator
	indiLi.on('click',function(e) {
		e.preventDefault();
		i = $(this).index();

		Que(i);		
	});

	slideBtn.on('click',function(e) {
		e.preventDefault();
		var j = $(this)[0];
		if(j === prev && i > 0){	i-=1;	} else if (j === next && i < indiliLength){	i+=1;	}
		Que(i);
	});
})(jQuery);