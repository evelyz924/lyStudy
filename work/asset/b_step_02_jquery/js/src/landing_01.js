// landing_01.js

(function($) {

	var con = $('#contentBox');
	var conH2 = con.find('h2');
	var conHOffsetT = conH2.offset().top;
	// margin을 포함한 브라우저의 높이값 파악  var winH = $(window).outerHeight(true);
	var winH = $(window).outerHeight(true);

	var ld_01 = $('.landing_01');
	var ld_01Oft = ld_01.offset().top;
	// console.log(conHOffsetT);
	// var myH = winH/3*2  winH를 3나눈 것의 2/3지점
	var myH = winH/3

	$(window).on('scroll',function() {
		var nowTop = $(window).scrollTop();
		if( nowTop >= conHOffsetT-(winH/3*2) ){
			conH2.addClass('ani');
			con.addClass('conR');
		}else{
			conH2.removeClass('ani');
			con.removeClass('conR');
		}
// -----------------------------------------------
		if( nowTop >= ld_01Oft-myH ){
			ld_01.addClass('ani');
			ld_01.children('li').addClass('ani');
		}else{
			ld_01.removeClass('ani');
			ld_01.children('li').removeClass('ani');
		}
	});




})(jQuery);