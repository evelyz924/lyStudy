// 0618slide_banner_02_result.js

(function($) {

  // 좌/우 버튼을 변수화
  var slideBtn = $('.slide_btn');
  var prevBtn = slideBtn.children('.prev_btn');
  var nestBtn = slideBtn.children('.next_btn');

  // indicator
  var indicator = $('.indicator');
  var indili    = indicator.children('li');

  // 광고배너 영역 변수화
  var slideBanner = $('.banner_wrap')

  // 광고배너 갯수 체크하기
  var bannerLength = slideBanner.children('div').length -1;
  // console.log(bannerLength);

  //최초의 값 0
  var i = 0;

  // nextBtn을 클릭시
  nestBtn.on('click',function(e){
    e.preventDefault();
    if(i < bannerLength){
      i += 1;  
    } else {
      i = 0; 
    }

    SlideAni(i);
  });

  // prevBtn을 클릭시
  prevBtn.on('click',function(e){
    e.preventDefault();
    if(i > 0){
      i -=1;  
    } else {
      i = bannerLength; 
    }

    SlideAni(i);
  });


  // indili 클릭
  indili.on('click',function(e){
    e.preventDefault();
    i = $(this).index();
    SlideAni(i);
  });


  function SlideAni(i){
    var result = i * -100 + '%'
    slideBanner.animate({marginLeft: result});
    // removeClass, addClass
    indili.removeClass('active');
    indili.eq(i).addClass('active');
  }


})(jQuery);