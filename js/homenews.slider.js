$(function(){
 
	  $('#newslider').slides({
		  effect: 'slide, slide',
		  crossfade: true,
		  container:'news-list',
		  paginationClass: 'news-pagination',
		  preloadImage: '',//loading Í¼Æ¬µØÖ·
		  play:8000,
		  fadeSpeed: 500,
		  pause:10,
		  generatePagination: false,
		  animationStart: function(current){
			   $('.news-pagination span').stop().animate({width:0}).hide();
			  }	,
		  animationComplete: function(current){
			   var $back=$('.back');
			   var leftw=(current-1)*34;
			   $back.animate({left:leftw},1000,'easeOutBack');
			   $('.news-pagination li').eq(current-1).find('span').show().animate({width:168},6000);
},
		  slidesLoaded: function() {
		  $('.news-pagination li').eq(0).find('span').animate({width:168},6000);
		  }
	  });
	  
       

})

$(function(){
 
	  $('#activityslider').slides({
		  effect: 'fade, fade',
		  crossfade: true,
		  container:'activity-list',
		  paginationClass: 'activity-pagination',
		  preloadImage: '',//loading Í¼Æ¬µØÖ·
		  play:5000,
		  fadeSpeed: 500,
		  pause:10,
		  generatePagination: false,
		  animationStart: function(current){
			   $('.activity-pagination span').stop().animate({width:0}).hide();
			  }	,
		  animationComplete: function(current){
			   var $back=$('.back');
			   var leftw=(current-1)*34;
			   $back.animate({left:leftw},1000,'easeOutBack');
			   $('.activity-pagination li').eq(current-1).find('span').show().animate({width:100},6000);
},
		  slidesLoaded: function() {
		  $('.activity-pagination li').eq(0).find('span').animate({width:100},6000);
		  }
	  });
	  
       

})

function b(){
	h = $(window).height();
	t = $(document).scrollTop();
	if(t > h){
		$('#gotop').show();
	}else{
		$('#gotop').hide();
	}
}
$(document).ready(function(e) {
	b();
	$('#gotop').click(function(){
		$(document).scrollTop(0);	
	})
	$('#code').hover(function(){
			$(this).attr('id','code_hover');
			$('#code_img').show();
		},function(){
			$(this).attr('id','code');
			$('#code_img').hide();
	})
	
});

$(window).scroll(function(e){
	b();		
})

