$(function(){

$(".leftcontent li").click(function(){
	var obj = $(this).attr("obj");
	
	$(".leftcontent li").each(function(){
		$(this).removeClass("select");
		var o = $(this).attr("obj");
		$("."+o).hide();
	});
	$(this).addClass("select");
	$("."+obj).show();
});


	var sidebar = $('#sidebar'),//Ñ¡Ôñ²àÀ¸
		mask= $('#mask'),
		sidebar_trigger = $('.sidebar_trigger'),
		backButton = $('.back-to-top'),
		itembtn = $('#itembtn'),
		workbtn = $('#workbtn'),
		skillbtn = $('#skillbtn');
		
		function showSidebar(){
			mask.fadeIn();
			//sidebar.animate({'right':0});
			sidebar.css('right',0);			
		}
		function hideSidebar(){
			mask.fadeOut();
			sidebar.css('right',-sidebar.width());
		}
		sidebar_trigger.on('click',showSidebar)
		mask.on('click',hideSidebar)
		

		function backtop(){
			$('html, body').animate({
				scrollTop:0
			},800)
		}
		backButton.on('click',backtop);
		
		$(window).on('scroll',function(){
			if($(window).scrollTop()>$(window).height())
					backButton.fadeIn();
				else
					backButton.fadeOut();
		})
		
		$(window).trigger('scroll');

});