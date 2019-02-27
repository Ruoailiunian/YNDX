$(function(){
	$('.dspR .thumbnail').hover(function(){
		$(this).find('.caption').show();
		$(this).find('.caption').addClass('animated bounceInLeft');
	},function(){
		$(this).find('.caption').removeClass('animated bounceInLeft');
		$(this).find('.caption').hide();
	})
})