$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
    },2000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
    
    // アイコンの動き
    setTimeout(function(){
        $('.myicon').animate({right: 0},3000);
    });



    // メニューを出す処理
    $('#nav-toggle').on('click', function() {
        $('body').toggleClass('open');
      });
});

// メニューを閉じる処理
$(function(){
    $('#nav').on('click',function(){
        $('body').removeClass('open');
    });

});


// スライダー
$(function(){
    $('.slick').slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        infinity: true,
    });

});