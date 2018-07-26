// 0723gallery_modal_02.js

(function($) {

	var mdBox = $('.modal_box');
	var mdBg  = $('.modal_bg');
	var list  = $('.list').children('li');
	mdBox.hide();
	mdBg.hide();

	var addr   = "../img/gallery/";
	var useImg = ["j01.jpg", "j02.jpg", "j03.jpg", "j04.jpg", "j05.jpg", "j06.jpg", "j07.jpg", "j08.jpg", "j09.jpg", "j10.jpg",];

/*
	**일정한 순서가 있는 값의 경우는 반복문으로 처리할 수 있다.
	for(var t=1;  t<=10;  t+=1){
		useImg[t].thum = 'j'+t+'.jpg';  useImg[t].big = 'j'+t+'_big.jpg';
	}
*/

	for(var i = 0; i<list.length; i+=1){
		list.eq(i).children('a').css({backgroundImage:'url(' + addr + useImg[i].thum + ')'});
	}

  list.on('click',function(e) {
  	e.preventDefault();
  	var thisI = $(this).index();
		mdBox.css({backgroundImage:'url('+ addr + useImgBig[thisI].big +')'});
		mdBox.prepend('<div class="close"><button type="button">닫기</button></div>');
		$('.close').css({position:'absolute', top:0, right:0, padding:'1rem', backgroundColor:'#fff'});
		mdBox.fadeIn();
		mdBg.fadeIn();  		
  });

  mdBg.on('click',function() {
  	mdBox.fadeOut(function(){
  		$(this).children('.close').remove();
  	});
  	mdBg.fadeOut();
  });



})(jQuery);